/**
 * ЕЦТ — внешний автокаталог (fallback, если авто нет в локальной базе)
 * Источник: https://api.cars-base.ru/full (бесплатно, без ключа)
 * 425+ марок, модели, годы, класс, страна (в т.ч. китайские бренды)
 */
(function (global) {
  'use strict';

  const CACHE_KEY = 'ect_carsbase_v1';
  const CACHE_TS_KEY = 'ect_carsbase_ts_v1';
  const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 дней
  const SOURCE_URL = 'https://api.cars-base.ru/full';

  const CLASS_TO_BODY = {
    A: 'Хэтчбек',
    B: 'Хэтчбек',
    C: 'Седан',
    D: 'Седан',
    E: 'Седан',
    F: 'Седан',
    S: 'Купе',
    M: 'Минивэн',
    J: 'Внедорожник / SUV',
    I: 'Внедорожник / SUV',
    PICKUP: 'Пикап'
  };

  const COUNTRY_MAP = {
    'россия': 'RUS', 'russia': 'RUS', 'russian federation': 'RUS',
    'германия': 'DEU', 'germany': 'DEU',
    'япония': 'JPN', 'japan': 'JPN',
    'корея': 'KOR', 'южная корея': 'KOR', 'korea': 'KOR', 'south korea': 'KOR',
    'китай': 'CHN', 'china': 'CHN',
    'сша': 'USA', 'usa': 'USA', 'united states': 'USA', 'америка': 'USA',
    'франция': 'FRA', 'france': 'FRA',
    'италия': 'ITA', 'italy': 'ITA',
    'великобритания': 'GBR', 'англия': 'GBR', 'uk': 'GBR',
    'швеция': 'SWE', 'sweden': 'SWE',
    'чехия': 'CZE', 'czech': 'CZE',
    'испания': 'ESP', 'spain': 'ESP'
  };

  let _index = null; // flat array of models
  let _loading = null;

  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/ё/g, 'е')
      .replace(/[^a-zа-я0-9\s+\-./]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function countryCode(name) {
    const n = normalize(name);
    if (!n) return '';
    if (COUNTRY_MAP[n]) return COUNTRY_MAP[n];
    for (const [k, v] of Object.entries(COUNTRY_MAP)) {
      if (n.includes(k)) return v;
    }
    return String(name || '').slice(0, 3).toUpperCase();
  }

  function bodyFromClass(cls) {
    const c = String(cls || '').toUpperCase().trim();
    return CLASS_TO_BODY[c] || (c ? ('Класс ' + c) : '');
  }

  function yearsLabel(from, to) {
    const a = from || '';
    const b = to || '';
    if (a && b && a !== b) return a + '–' + b;
    return a || b || '';
  }

  function autoRuSearchUrl(brand, model) {
    const q = encodeURIComponent([brand, model].filter(Boolean).join(' '));
    return 'https://auto.ru/cars/' + encodeURIComponent(String(brand || '').toLowerCase().replace(/\s+/g, '_')) + '/' +
      encodeURIComponent(String(model || '').toLowerCase().replace(/\s+/g, '_')) + '/all/';
  }

  function dromSearchUrl(brand, model) {
    return 'https://auto.drom.ru/' + encodeURIComponent(String(brand || '').toLowerCase().replace(/\s+/g, '_')) + '/' +
      encodeURIComponent(String(model || '').toLowerCase().replace(/\s+/g, '_')) + '/';
  }

  function toCarCard(row) {
    const brand = row.brandName || row.brand || '';
    const model = row.modelName || row.model || '';
    const years = yearsLabel(row.yearFrom, row.yearTo);
    const body = bodyFromClass(row.cls);
    const country = countryCode(row.country);
    const tags = [
      normalize(brand),
      normalize(row.brandCyr),
      normalize(model),
      normalize(row.modelCyr),
      normalize(body),
      normalize(row.country),
      'external',
      'внешний'
    ].filter(Boolean);

    return {
      id: 'ext_' + (row.id || (brand + '_' + model)).replace(/\s+/g, '_'),
      brand: brand,
      model: model,
      price: years ? ('Годы: ' + years) : 'Цена уточняется',
      transmission: 'уточняется',
      engine: 'уточняется',
      power: '',
      fuel: 'уточняется',
      bodyType: body,
      country: country,
      description: [
        row.brandCyr && row.brandCyr !== brand ? (row.brandCyr + ' ' + (row.modelCyr || model)) : '',
        years ? ('Годы выпуска: ' + years) : '',
        row.cls ? ('Класс: ' + row.cls) : '',
        row.country ? ('Страна: ' + row.country) : '',
        'Данные из внешнего каталога cars-base. Цены и комплектации уточняйте на Авто.ру / у дилера.'
      ].filter(Boolean).join('. '),
      tags: tags,
      trims: [],
      notInAc: false,
      external: true,
      externalSource: 'cars-base.ru',
      yearFrom: row.yearFrom || null,
      yearTo: row.yearTo || null,
      classCode: row.cls || '',
      brandCyr: row.brandCyr || '',
      modelCyr: row.modelCyr || '',
      links: {
        autoru: autoRuSearchUrl(brand, model),
        drom: dromSearchUrl(brand, model)
      }
    };
  }

  function buildIndex(payload) {
    const brands = (payload && payload.data) || payload || [];
    const out = [];
    brands.forEach(b => {
      const brandName = b.name || '';
      const brandCyr = b.cyrillic_name || '';
      const country = b.country || '';
      (b.models || []).forEach(m => {
        out.push({
          id: m.id || (brandName + '_' + (m.name || '')),
          brandName,
          brandCyr,
          modelName: m.name || '',
          modelCyr: m.cyrillic_name || '',
          yearFrom: m.year_from || b.year_from || null,
          yearTo: m.year_to || b.year_to || null,
          cls: m.class || '',
          country,
          hay: normalize([
            brandName, brandCyr, m.name, m.cyrillic_name, country, m.class
          ].join(' '))
        });
      });
    });
    return out;
  }

  function loadFromCache() {
    try {
      const ts = Number(localStorage.getItem(CACHE_TS_KEY) || 0);
      if (!ts || Date.now() - ts > CACHE_TTL_MS) return null;
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || !parsed.length) return null;
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function saveCache(index) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(index));
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
    } catch (_) {
      // quota — ignore
    }
  }

  async function ensureIndex(force) {
    if (_index && !force) return _index;
    if (_loading) return _loading;

    const cached = loadFromCache();
    if (cached && !force) {
      _index = cached;
      return _index;
    }

    _loading = (async () => {
      const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = setTimeout(() => { try { ctrl && ctrl.abort(); } catch (_) {} }, 25000);
      try {
        const res = await fetch(SOURCE_URL, {
          method: 'GET',
          cache: 'force-cache',
          signal: ctrl ? ctrl.signal : undefined
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        _index = buildIndex(json);
        saveCache(_index);
        return _index;
      } finally {
        clearTimeout(timer);
        _loading = null;
      }
    })();

    return _loading;
  }

  function searchLocalIndex(index, query, limit) {
    const q = normalize(query);
    if (!q || !index) return [];
    const words = q.split(/\s+/).filter(Boolean);
    const scored = [];
    for (let i = 0; i < index.length; i++) {
      const row = index[i];
      let ok = true;
      let score = 0;
      for (let w = 0; w < words.length; w++) {
        const word = words[w];
        if (!row.hay.includes(word)) {
          ok = false;
          break;
        }
        // точное совпадение модели/марки важнее
        if (normalize(row.modelName) === word || normalize(row.modelCyr) === word) score += 5;
        if (normalize(row.brandName) === word || normalize(row.brandCyr) === word) score += 3;
        score += 1;
      }
      if (ok) scored.push({ row, score });
    }
    scored.sort((a, b) => b.score - a.score || String(a.row.brandName).localeCompare(String(b.row.brandName), 'ru'));
    return scored.slice(0, limit || 24).map(s => toCarCard(s.row));
  }

  /**
   * Поиск во внешнем каталоге.
   * @param {string} query
   * @param {{limit?: number, force?: boolean}} opts
   * @returns {Promise<Array>}
   */
  async function searchExternalCars(query, opts) {
    opts = opts || {};
    const q = normalize(query);
    if (!q || q.length < 2) return [];
    try {
      const index = await ensureIndex(!!opts.force);
      return searchLocalIndex(index, q, opts.limit || 24);
    } catch (e) {
      console.warn('catalog-external search', e);
      return [];
    }
  }

  /** Предзагрузка базы в фоне */
  function prefetchExternalCatalog() {
    ensureIndex(false).catch(() => {});
  }

  function isExternalCar(car) {
    return !!(car && (car.external || String(car.id || '').indexOf('ext_') === 0));
  }

  global.ECTCatalogExternal = {
    searchExternalCars,
    prefetchExternalCatalog,
    ensureIndex,
    isExternalCar,
    toCarCard,
    autoRuSearchUrl,
    dromSearchUrl,
    SOURCE_URL
  };
})(typeof window !== 'undefined' ? window : globalThis);
