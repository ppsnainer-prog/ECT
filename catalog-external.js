/**
 * ЕЦТ — внешний автокаталог (лёгкий fallback)
 * Источник: https://api.cars-base.ru/full
 * Память: компактный массив, без тяжёлого hay в localStorage, поиск чанками.
 */
(function (global) {
  'use strict';

  const CACHE_KEY = 'ect_carsbase_v2_compact';
  const CACHE_TS_KEY = 'ect_carsbase_v2_ts';
  const OLD_KEYS = ['ect_carsbase_v1', 'ect_carsbase_ts_v1'];
  const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
  const SOURCE_URL = 'https://api.cars-base.ru/full';
  const MAX_RESPONSE_BYTES = 2.5 * 1024 * 1024;
  const SEARCH_CHUNK = 800;
  const DEFAULT_LIMIT = 12;

  // [brand, brandCyr, model, modelCyr, cls, country, yearFrom, yearTo, id]
  let _rows = null;
  let _loading = null;
  let _searchToken = 0;

  const CLASS_TO_BODY = {
    A: 'Хэтчбек', B: 'Хэтчбек', C: 'Седан', D: 'Седан', E: 'Седан', F: 'Седан',
    S: 'Купе', M: 'Минивэн', J: 'Внедорожник / SUV', I: 'Внедорожник / SUV', PICKUP: 'Пикап'
  };

  const COUNTRY_MAP = {
    'россия': 'RUS', 'russia': 'RUS',
    'германия': 'DEU', 'germany': 'DEU',
    'япония': 'JPN', 'japan': 'JPN',
    'корея': 'KOR', 'южная корея': 'KOR', 'korea': 'KOR',
    'китай': 'CHN', 'china': 'CHN',
    'сша': 'USA', 'usa': 'USA',
    'франция': 'FRA', 'france': 'FRA',
    'италия': 'ITA', 'italy': 'ITA',
    'великобритания': 'GBR', 'uk': 'GBR',
    'швеция': 'SWE', 'чехия': 'CZE', 'испания': 'ESP'
  };

  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/ё/g, 'е')
      .replace(/[^a-zа-я0-9\s+\-./]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function clearOldCaches() {
    try {
      OLD_KEYS.forEach(function (k) { localStorage.removeItem(k); });
    } catch (_) {}
  }

  function countryCode(name) {
    const n = normalize(name);
    if (!n) return '';
    if (COUNTRY_MAP[n]) return COUNTRY_MAP[n];
    for (const k of Object.keys(COUNTRY_MAP)) {
      if (n.indexOf(k) !== -1) return COUNTRY_MAP[k];
    }
    return String(name || '').slice(0, 3).toUpperCase();
  }

  function bodyFromClass(cls) {
    const c = String(cls || '').toUpperCase().trim();
    return CLASS_TO_BODY[c] || (c ? ('Класс ' + c) : '');
  }

  function yearsLabel(from, to) {
    if (from && to && from !== to) return from + '–' + to;
    return from || to || '';
  }

  function autoRuSearchUrl(brand, model) {
    const b = encodeURIComponent(String(brand || '').toLowerCase().replace(/\s+/g, '_'));
    const m = encodeURIComponent(String(model || '').toLowerCase().replace(/\s+/g, '_'));
    return 'https://auto.ru/cars/' + b + '/' + m + '/all/';
  }

  function dromSearchUrl(brand, model) {
    const b = encodeURIComponent(String(brand || '').toLowerCase().replace(/\s+/g, '_'));
    const m = encodeURIComponent(String(model || '').toLowerCase().replace(/\s+/g, '_'));
    return 'https://auto.drom.ru/' + b + '/' + m + '/';
  }

  function rowToCar(row) {
    const brand = row[0] || '';
    const brandCyr = row[1] || '';
    const model = row[2] || '';
    const modelCyr = row[3] || '';
    const cls = row[4] || '';
    const countryName = row[5] || '';
    const yearFrom = row[6] || null;
    const yearTo = row[7] || null;
    const id = row[8] || (brand + '_' + model);
    const years = yearsLabel(yearFrom, yearTo);
    const body = bodyFromClass(cls);
    const country = countryCode(countryName);

    return {
      id: 'ext_' + String(id).replace(/\s+/g, '_'),
      brand: brand,
      model: model,
      brandCyr: brandCyr,
      modelCyr: modelCyr,
      price: years ? ('Годы: ' + years) : 'Цена уточняется',
      transmission: '',
      engine: '',
      power: '',
      fuel: '',
      bodyType: body,
      country: country,
      description: [
        (brandCyr && brandCyr !== brand) ? (brandCyr + ' ' + (modelCyr || model)) : '',
        years ? ('Годы выпуска: ' + years) : '',
        cls ? ('Класс: ' + cls) : '',
        countryName ? ('Страна: ' + countryName) : '',
        'Данные из внешнего каталога. Цены и комплектации уточняйте на Авто.ру.'
      ].filter(Boolean).join('. '),
      tags: [normalize(brand), normalize(brandCyr), normalize(model), normalize(modelCyr)].filter(Boolean),
      trims: [],
      notInAc: false,
      external: true,
      externalSource: 'cars-base.ru',
      yearFrom: yearFrom,
      yearTo: yearTo,
      classCode: cls,
      links: {
        autoru: autoRuSearchUrl(brand, model),
        drom: dromSearchUrl(brand, model)
      }
    };
  }

  function buildCompact(payload) {
    const brands = (payload && payload.data) || payload || [];
    const out = [];
    for (let i = 0; i < brands.length; i++) {
      const b = brands[i];
      const brand = b.name || '';
      const brandCyr = b.cyrillic_name || '';
      const country = b.country || '';
      const models = b.models || [];
      for (let j = 0; j < models.length; j++) {
        const m = models[j];
        out.push([
          brand,
          brandCyr,
          m.name || '',
          m.cyrillic_name || '',
          m.class || '',
          country,
          m.year_from || b.year_from || 0,
          m.year_to || b.year_to || 0,
          m.id || ''
        ]);
      }
    }
    return out;
  }

  function loadCache() {
    try {
      const ts = Number(localStorage.getItem(CACHE_TS_KEY) || 0);
      if (!ts || Date.now() - ts > CACHE_TTL_MS) return null;
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw || raw.length > 3 * 1024 * 1024) return null;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || !parsed.length || !Array.isArray(parsed[0])) return null;
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function saveCache(rows) {
    try {
      const raw = JSON.stringify(rows);
      if (raw.length > 2.8 * 1024 * 1024) return;
      localStorage.setItem(CACHE_KEY, raw);
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
    } catch (_) {
      try {
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_TS_KEY);
      } catch (e2) {}
    }
  }

  async function ensureRows(force) {
    if (_rows && !force) return _rows;
    if (_loading) return _loading;

    clearOldCaches();
    if (!force) {
      const cached = loadCache();
      if (cached) {
        _rows = cached;
        return _rows;
      }
    }

    _loading = (async function () {
      const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = setTimeout(function () {
        try { if (ctrl) ctrl.abort(); } catch (_) {}
      }, 20000);
      try {
        const res = await fetch(SOURCE_URL, {
          method: 'GET',
          signal: ctrl ? ctrl.signal : undefined
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const cl = Number(res.headers.get('content-length') || 0);
        if (cl && cl > MAX_RESPONSE_BYTES) throw new Error('response too large');
        const text = await res.text();
        if (text.length > MAX_RESPONSE_BYTES) throw new Error('response too large');
        const json = JSON.parse(text);
        const rows = buildCompact(json);
        _rows = rows;
        saveCache(rows);
        return rows;
      } finally {
        clearTimeout(timer);
        _loading = null;
      }
    })();

    return _loading;
  }

  function rowHay(row) {
    return normalize([row[0], row[1], row[2], row[3], row[5], row[4]].join(' '));
  }

  function sleep(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  async function searchExternalCars(query, opts) {
    opts = opts || {};
    const q = normalize(query);
    if (!q || q.length < 2) return [];
    const limit = Math.min(24, opts.limit || DEFAULT_LIMIT);
    const words = q.split(/\s+/).filter(Boolean);
    if (!words.length) return [];

    const token = ++_searchToken;
    let rows;
    try {
      rows = await ensureRows(!!opts.force);
    } catch (e) {
      console.warn('catalog-external load', e);
      return [];
    }
    if (token !== _searchToken) return [];
    if (!rows || !rows.length) return [];

    const scored = [];
    for (let i = 0; i < rows.length; i++) {
      if (i && (i % SEARCH_CHUNK) === 0) {
        await sleep(0);
        if (token !== _searchToken) return [];
      }
      const row = rows[i];
      const hay = rowHay(row);
      let ok = true;
      let score = 0;
      for (let w = 0; w < words.length; w++) {
        const word = words[w];
        if (hay.indexOf(word) === -1) {
          ok = false;
          break;
        }
        if (normalize(row[2]) === word || normalize(row[3]) === word) score += 5;
        if (normalize(row[0]) === word || normalize(row[1]) === word) score += 3;
        score += 1;
      }
      if (ok) {
        scored.push({ row: row, score: score });
        if (scored.length > limit * 8) {
          scored.sort(function (a, b) { return b.score - a.score; });
          scored.length = limit * 3;
        }
      }
    }

    if (token !== _searchToken) return [];
    scored.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return String(a.row[0]).localeCompare(String(b.row[0]), 'ru');
    });

    const out = [];
    for (let i = 0; i < scored.length && out.length < limit; i++) {
      out.push(rowToCar(scored[i].row));
    }
    return out;
  }

  function prefetchExternalCatalog() {
    // отключено: полная предзагрузка валила память
  }

  function isExternalCar(car) {
    return !!(car && (car.external || String(car.id || '').indexOf('ext_') === 0));
  }

  clearOldCaches();

  global.ECTCatalogExternal = {
    searchExternalCars: searchExternalCars,
    prefetchExternalCatalog: prefetchExternalCatalog,
    ensureIndex: ensureRows,
    isExternalCar: isExternalCar,
    autoRuSearchUrl: autoRuSearchUrl,
    dromSearchUrl: dromSearchUrl,
    SOURCE_URL: SOURCE_URL
  };
})(typeof window !== 'undefined' ? window : globalThis);
