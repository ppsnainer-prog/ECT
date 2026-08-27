/**
 * ЕЦТ Скрипты v2.4 — поддержка приватных бинов и улучшенная диагностика
 */

const STORAGE_KEY = 'ect_scripts_data_v1';
const SETTINGS_KEY = 'ect_scripts_settings_v1';
const CLOUD_CFG_KEY = 'ect_cloud_cfg_v1';

let state = {
  scripts: [],
  settings: {
    theme: 'dark',
    sidebarCollapsed: false
  },
  cloud: {
    enabled: true,
    binId: '6a9025d8f5f4af5e29495699',
    apiKey: '$2a$10$J.O3.hgzgqvHtXslrKLB4u9AuzyRwQcuvuU8GgloaYzNR3pxroN52',
    private: true,    // бин Private на jsonbin
    useAccessKey: false, // false = X-Master-Key
    lastSync: null,
    status: 'local'
  },
  currentPage: 'home',
  currentScriptId: null,
  searchQuery: '',
  otabotkiQuery: '',
  otabotkiCat: '',
  otabotkiScriptFilter: '',
  expandedNodes: {},
  collapsedBlocks: {}
};

let syncTimer = null;

/* ========== Persistence ========== */
function loadLocalSettings() {
  try {
    const rawS = localStorage.getItem(SETTINGS_KEY);
    if (rawS) state.settings = { ...state.settings, ...JSON.parse(rawS) };
  } catch (e) {}
  try {
    const rawC = localStorage.getItem(CLOUD_CFG_KEY);
    if (rawC) {
      const c = JSON.parse(rawC);
      if (c.binId) state.cloud.binId = c.binId;
      if (c.apiKey) state.cloud.apiKey = c.apiKey;
      if (c.private !== undefined) state.cloud.private = c.private;
      if (c.useAccessKey !== undefined) state.cloud.useAccessKey = c.useAccessKey;
    }
  } catch (e) {}
  state.cloud.enabled = !!(state.cloud.binId && state.cloud.apiKey);
  try {
    const cb = localStorage.getItem('ect_collapsed_blocks');
    if (cb) state.collapsedBlocks = JSON.parse(cb);
  } catch (e) {}
}

function saveLocalSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify({
    binId: state.cloud.binId,
    apiKey: state.cloud.apiKey,
    private: state.cloud.private,
    useAccessKey: state.cloud.useAccessKey
  }));
  localStorage.setItem('ect_collapsed_blocks', JSON.stringify(state.collapsedBlocks));
}

function loadLocalScripts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      state.scripts = data.scripts || [];
    }
  } catch (e) {}
  if (state.scripts.length === 0) {
    state.scripts = getDemoScripts();
    saveLocalScripts();
  }
}

function saveLocalScripts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ scripts: state.scripts }));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getDemoScripts() {
  // ... (без изменений, можно оставить как было)
  return [
    {
      id: uid(),
      title: 'Входящий звонок — запись на приём',
      category: 'Медицина',
      content: `<p>Здравствуйте, оператор [Имя], единый центр телефонии. Чем могу помочь?</p>
<p>Клиент: Хочу записаться к терапевту.</p>
<p>— Подскажите, пожалуйста, ФИО и номер СНИЛС.<br>
— Какой город / поликлиника?<br>
— Есть предпочтения по дате и времени?</p>
<p>[Проверка свободных слотов]</p>
<p>— Есть талон на [дата] в [время]. Записываю вас?<br>
— Запись подтверждена. Вам придёт SMS с напоминанием.<br>
Спасибо за обращение, до свидания!</p>`,
      plainContent: 'Здравствуйте, оператор [Имя], единый центр телефонии. Чем могу помочь?\nКлиент: Хочу записаться к терапевту.\n— Подскажите, пожалуйста, ФИО и номер СНИЛС.\n— Какой город / поликлиника?\n— Есть предпочтения по дате и времени?\n[Проверка свободных слотов]\n— Есть талон на [дата] в [время]. Записываю вас?\n— Запись подтверждена. Вам придёт SMS с напоминанием.\nСпасибо за обращение, до свидания!',
      otabotki: [
        { id: uid(), title: 'Нет свободных талонов', text: 'К сожалению, сейчас свободных талонов нет. Могу сформировать заявку в лист ожидания — вам перезвонят из поликлиники. Сформировать?', children: [] },
        { id: uid(), title: 'Клиент не знает СНИЛС', text: 'Можете назвать дату рождения и адрес регистрации — попробуем найти вас в системе.', children: [] }
      ],
      shtrafy: [
        { id: uid(), title: 'Не представился', text: 'Штраф 50 ₽. Обязательно называть имя в начале разговора.', children: [] },
        { id: uid(), title: 'Не предложил лист ожидания', text: 'При отсутствии талонов обязательно предлагать лист ожидания. Штраф 100 ₽.', children: [] }
      ],
      opens: 0,
      createdAt: Date.now() - 86400000 * 3,
      updatedAt: Date.now() - 86400000
    },
    {
      id: uid(),
      title: 'Исходящий — подтверждение записи',
      category: 'Медицина',
      content: `<p>Здравствуйте, [Имя Клиента]! Это оператор [Имя] из единого центра телефонии.<br>
Звоню подтвердить вашу запись к [специалист] на [дата] в [время].<br>
Вы сможете прийти?</p>
<p>Если да:<br>
— Отлично, ждём вас. Возьмите с собой паспорт и полис.<br>
Если нет:<br>
— Хотите перенести запись? На какую дату удобнее?</p>`,
      plainContent: 'Здравствуйте, [Имя Клиента]! Это оператор [Имя] из единого центра телефонии.\nЗвоню подтвердить вашу запись к [специалист] на [дата] в [время].\nВы сможете прийти?\nЕсли да:\n— Отлично, ждём вас. Возьмите с собой паспорт и полис.\nЕсли нет:\n— Хотите перенести запись? На какую дату удобнее?',
      otabotki: [
        { id: uid(), title: 'Клиент передумал', text: 'Поняла. Запись отменяю. Если понадобится — звоните, будем рады помочь.', children: [] }
      ],
      shtrafy: [],
      opens: 0,
      createdAt: Date.now() - 86400000 * 5,
      updatedAt: Date.now() - 86400000 * 2
    },
    {
      id: uid(),
      title: 'Авто — консультация по марке',
      category: 'Авто',
      content: `<p>Здравствуйте! Единый центр телефонии, оператор [Имя].<br>
Интересует автомобиль [марка/модель]?</p>
<p>— Какой год выпуска рассматриваете?<br>
— Бюджет?<br>
— Новый или с пробегом?<br>
— Город покупки?</p>
<p>[Используйте автокаталог для подбора]</p>
<p>Могу предложить несколько вариантов и передать контакты дилера.</p>`,
      plainContent: 'Здравствуйте! Единый центр телефонии, оператор [Имя].\nИнтересует автомобиль [марка/модель]?\n— Какой год выпуска рассматриваете?\n— Бюджет?\n— Новый или с пробегом?\n— Город покупки?\n[Используйте автокаталог для подбора]\nМогу предложить несколько вариантов и передать контакты дилера.',
      otabotki: [
        { id: uid(), title: 'Слишком дорого', text: 'Понимаю. Есть варианты в более доступном сегменте / с пробегом. Рассмотреть?', children: [] }
      ],
      shtrafy: [
        { id: uid(), title: 'Не использовал каталог', text: 'При консультации по авто обязательно сверяться с актуальным каталогом.', children: [] }
      ],
      opens: 0,
      createdAt: Date.now() - 86400000,
      updatedAt: Date.now()
    }
  ];
}

/* ========== Cloud (JSONBin) с поддержкой приватных бинов ========== */
function getCloudHeaders() {
  const key = (state.cloud.apiKey || '').trim();
  // Важно: Master Key и Access Key выглядят одинаково ($2a$10$...).
  // Для приватных бинов нужен именно X-Master-Key (или Access Key с правами).
  // По умолчанию всегда шлём X-Master-Key — это работает с Master Key.
  // Если ключ помечен как access в настройках — используем X-Access-Key.
  const headers = {
    'Content-Type': 'application/json'
  };
  if (state.cloud.useAccessKey) {
    headers['X-Access-Key'] = key;
  } else {
    headers['X-Master-Key'] = key;
  }
  return headers;
}

async function cloudFetch() {
  if (!state.cloud.enabled) return null;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    const headers = getCloudHeaders();
    const res = await fetch(`https://api.jsonbin.io/v3/b/${state.cloud.binId}/latest`, {
      headers
    });
    if (!res.ok) {
      if (res.status === 401) {
        toast('Ошибка 401 — нужен Master Key (не Access Key). Скопируйте X-MASTER-KEY с jsonbin.io', 'error');
        state.cloud.status = 'error';
        updateSyncBadge();
        return null;
      }
      if (res.status === 403) {
        toast('Ошибка 403 — доступ запрещён. Возможно, бин приватный и не передан заголовок.', 'error');
        state.cloud.status = 'error';
        updateSyncBadge();
        return null;
      }
      throw new Error(`HTTP ${res.status}`);
    }
    const json = await res.json();
    const record = json.record || json;
    state.cloud.status = 'ok';
    state.cloud.lastSync = Date.now();
    updateSyncBadge();
    return record;
  } catch (e) {
    console.warn('Cloud fetch error', e);
    state.cloud.status = 'error';
    updateSyncBadge();
    return null;
  }
}

async function cloudSave() {
  if (!state.cloud.enabled) return false;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    const payload = {
      scripts: state.scripts,
      updatedAt: Date.now(),
      version: 1
    };
    const headers = getCloudHeaders();
    const res = await fetch(`https://api.jsonbin.io/v3/b/${state.cloud.binId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      if (res.status === 401) {
        toast('Ошибка 401 — нужен Master Key (не Access Key). Скопируйте X-MASTER-KEY с jsonbin.io', 'error');
        state.cloud.status = 'error';
        updateSyncBadge();
        return false;
      }
      if (res.status === 403) {
        toast('Ошибка 403 — доступ запрещён. Возможно, бин приватный и не передан заголовок.', 'error');
        state.cloud.status = 'error';
        updateSyncBadge();
        return false;
      }
      throw new Error(`HTTP ${res.status}`);
    }
    state.cloud.status = 'ok';
    state.cloud.lastSync = Date.now();
    updateSyncBadge();
    return true;
  } catch (e) {
    console.warn('Cloud save error', e);
    state.cloud.status = 'error';
    updateSyncBadge();
    toast('Ошибка сохранения в облако: ' + e.message, 'error');
    return false;
  }
}

async function loadData() {
  loadLocalSettings();
  applyTheme();

  if (state.cloud.enabled) {
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      state.scripts = remote.scripts;
      saveLocalScripts();
    } else {
      loadLocalScripts();
      await cloudSave();
    }
  } else {
    loadLocalScripts();
  }
}

async function saveData() {
  saveLocalScripts();
  if (state.cloud.enabled) {
    const ok = await cloudSave();
    return ok;
  }
  return true;
}

function startAutoSync() {
  stopAutoSync();
  if (!state.cloud.enabled) return;
  syncTimer = setInterval(async () => {
    if (document.hidden) return;
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      const remoteStr = JSON.stringify(remote.scripts.map(s => s.id + s.updatedAt).sort());
      const localStr = JSON.stringify(state.scripts.map(s => s.id + s.updatedAt).sort());
      if (remoteStr !== localStr) {
        state.scripts = remote.scripts;
        saveLocalScripts();
        if (state.currentPage === 'scripts' || state.currentPage === 'home' || state.currentPage === 'script') {
          render();
        }
        toast('Данные обновлены из облака');
      }
    }
  }, 25000);
}

function stopAutoSync() {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
  }
}

function updateSyncBadge() {
  const el = document.getElementById('syncBadge');
  if (!el) return;
  if (!state.cloud.enabled) {
    el.textContent = 'Локально';
    el.className = 'sync-badge local';
    return;
  }
  const map = {
    syncing: ['Синхронизация…', 'syncing'],
    ok: ['Облако ✓', 'ok'],
    error: ['Ошибка облака', 'error'],
    local: ['Локально', 'local']
  };
  const [text, cls] = map[state.cloud.status] || map.local;
  el.textContent = text;
  el.className = 'sync-badge ' + cls;
}

/* ========== Theme ========== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.settings.theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = state.settings.theme === 'dark' ? '☀️' : '🌙';
}

/* ========== UI helpers ========== */
function toast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function openModal(title, bodyHtml, footerHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalFooter').innerHTML = footerHtml || '';
  document.getElementById('modalOverlay').hidden = false;
}

function closeModal() {
  document.getElementById('modalOverlay').hidden = true;
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('ru-RU', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

/* ========== Navigation ========== */
function navigate(page, scriptId = null) {
  state.currentPage = page;
  state.currentScriptId = scriptId;
  if (page !== 'script') state.currentTab = 'content';

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page || (page === 'script' && el.dataset.page === 'scripts'));
  });

  const titles = {
    home: 'Главная',
    scripts: 'Скрипты',
    otabotki: 'Каталог отработок',
    catalog: 'Автокаталог',
    settings: 'Настройки',
    script: 'Скрипт'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;

  const addBtn = document.getElementById('addScriptBtn');
  if (addBtn) addBtn.style.display = (page === 'scripts') ? 'inline-flex' : 'none';

  if (page === 'script' && scriptId) {
    const scr = state.scripts.find(s => s.id === scriptId);
    if (scr) {
      scr.opens = (scr.opens || 0) + 1;
      saveLocalScripts();
    }
  }

  render();
}

/* ========== Render (без изменений, кроме настроек) ========== */
function render() {
  const content = document.getElementById('content');
  switch (state.currentPage) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'scripts': content.innerHTML = renderScriptsList(); break;
    case 'script': content.innerHTML = renderScriptDetail(); break;
    case 'otabotki': content.innerHTML = renderOtabotkiCatalog(); break;
    case 'catalog': content.innerHTML = renderCatalog(); break;
    case 'settings': content.innerHTML = renderSettings(); break;
    default: content.innerHTML = '<p>Страница не найдена</p>';
  }
  updateSyncBadge();
}

function renderHome() {
  const total = state.scripts.length;
  const withO = state.scripts.filter(s => (s.otabotki || []).length).length;
  const withS = state.scripts.filter(s => (s.shtrafy || []).length).length;
  const recent = [...state.scripts].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 5);
  const top = [...state.scripts].filter(s => (s.opens || 0) > 0).sort((a, b) => (b.opens || 0) - (a.opens || 0)).slice(0, 5);

  return `
    <div class="home-grid">
      <div class="card welcome-card">
        <h2>Добро пожаловать в ЕЦТ Скрипты</h2>
        <p>Храните скрипты, отработки и штрафы. ${state.cloud.enabled ? 'Данные общие для всей команды (облако).' : 'Сейчас данные только в этом браузере — подключите облако в Настройках.'}</p>
        <div class="stats-row">
          <div class="stat"><div class="stat-value">${total}</div><div class="stat-label">Скриптов</div></div>
          <div class="stat"><div class="stat-value">${withO}</div><div class="stat-label">С отработками</div></div>
          <div class="stat"><div class="stat-value">${withS}</div><div class="stat-label">Со штрафами</div></div>
        </div>
      </div>

      ${top.length ? `
      <div class="card">
        <div class="section-title"><span>⭐ Часто используемые</span></div>
        <div class="item-list">
          ${top.map(s => `
            <div class="item-card card-interactive" data-action="open-script" data-id="${s.id}" style="cursor:pointer">
              <h4>${escapeHtml(s.title)} <span style="font-size:0.8rem;font-weight:400;color:var(--text-muted)">(${s.opens || 0} раз)</span></h4>
              <p style="font-size:0.82rem;margin:0">${escapeHtml(s.category || 'Без категории')} · ${formatDate(s.updatedAt)}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      <div class="card">
        <div class="section-title">
          <span>📜 Недавние скрипты</span>
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="scripts">Все →</button>
        </div>
        ${recent.length === 0
          ? '<div class="empty-state"><div class="empty-icon">📭</div><p>Пока нет скриптов</p></div>'
          : `<div class="item-list">${recent.map(s => `
              <div class="item-card card-interactive" data-action="open-script" data-id="${s.id}" style="cursor:pointer">
                <h4>${escapeHtml(s.title)}</h4>
                <p style="font-size:0.82rem;margin:0">${escapeHtml(s.category || 'Без категории')} · ${formatDate(s.updatedAt)}</p>
              </div>
            `).join('')}</div>`
        }
      </div>

      <div class="card">
        <div class="section-title"><span>🚗 Автокаталог</span></div>
        <p style="color:var(--text-muted);margin-bottom:18px;font-size:0.92rem">
          Каталог автомобилей и городов России.
        </p>
        <div class="actions-row">
          <button class="btn btn-primary" data-action="nav" data-page="catalog">Открыть каталог</button>
          <a class="btn btn-outline" href="https://kowmarikk0-max.github.io/car/" target="_blank" rel="noopener">В новой вкладке ↗</a>
        </div>
      </div>
    </div>
  `;
}

function renderScriptsList() {
  const q = state.searchQuery.toLowerCase().trim();
  let list = state.scripts;
  if (q) {
    list = list.filter(s =>
      s.title.toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q) ||
      (s.plainContent || '').toLowerCase().includes(q)
    );
  }
  list = [...list].sort((a, b) => b.updatedAt - a.updatedAt);

  return `
    <div class="search-bar">
      <input type="search" class="search-input" id="searchInput" placeholder="Поиск по названию, категории, тексту..." value="${escapeAttr(state.searchQuery)}">
      <button class="btn btn-primary" data-action="add-script">+ Новый скрипт</button>
    </div>
    ${list.length === 0
      ? `<div class="empty-state">
          <div class="empty-icon">📜</div>
          <p>${q ? 'Ничего не найдено' : 'Скриптов пока нет'}</p>
          <button class="btn btn-primary" style="margin-top:14px" data-action="add-script">+ Добавить первый</button>
        </div>`
      : `<div class="card-grid">${list.map(s => `
          <div class="card script-card card-interactive" data-action="open-script" data-id="${s.id}">
            <h3>${escapeHtml(s.title)}</h3>
            <div class="script-meta">
              ${s.category ? `<span class="badge badge-primary">${escapeHtml(s.category)}</span>` : ''}
              <span class="badge badge-teal">🔄 ${countTree(s.otabotki || [])}</span>
              <span class="badge badge-danger">⚠ ${countTree(s.shtrafy || [])}</span>
              <span class="badge">👁 ${s.opens || 0}</span>
            </div>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-top:10px">${formatDate(s.updatedAt)}</p>
          </div>
        `).join('')}</div>`
    }
  `;
}

function countTree(items) {
  if (!items) return 0;
  let n = items.length;
  for (const it of items) n += countTree(it.children);
  return n;
}

function renderTreeItems(items, scriptId, type, depth = 0) {
  if (!items || !items.length) return '';
  return items.map(item => {
    const hasChildren = item.children && item.children.length > 0;
    const expKey = type + ':' + item.id;
    const expanded = state.expandedNodes[expKey] !== false;
    const isOpen = state.collapsedBlocks[item.id] !== true;
    return `
      <div class="tree-node" style="margin-left:${depth * 14}px">
        <div class="crm-hint crm-hint-${type === 'otabotki' ? 'otabotka' : 'shtraf'}" 
             data-action="toggle-item-text" data-id="${item.id}">
          <div class="crm-hint-title">
            <span class="tree-title-row">
              ${hasChildren ? `<button class="tree-toggle" data-action="toggle-node" data-key="${expKey}">${expanded ? '▼' : '▶'}</button>` : '<span class="tree-dot">•</span>'}
              <span>${escapeHtml(item.title)}</span>
            </span>
            <span class="item-actions">
              <button class="btn-icon" data-action="add-child-item" data-sid="${scriptId}" data-type="${type}" data-pid="${item.id}" title="Добавить вложенную">➕</button>
              <button class="btn-icon" data-action="edit-item" data-sid="${scriptId}" data-type="${type}" data-iid="${item.id}" title="Редактировать">✏️</button>
              <button class="btn-icon" data-action="delete-item" data-sid="${scriptId}" data-type="${type}" data-iid="${item.id}" title="Удалить">🗑</button>
              <span class="expand-icon ${isOpen ? 'open' : ''}" data-action="toggle-item-text" data-id="${item.id}">${isOpen ? '▲' : '▼'}</span>
            </span>
          </div>
          ${item.text ? `<div class="crm-hint-text ${isOpen ? 'open' : ''}">${escapeHtml(item.text)}</div>` : ''}
        </div>
        ${hasChildren && expanded ? renderTreeItems(item.children, scriptId, type, depth + 1) : ''}
      </div>
    `;
  }).join('');
}

function renderScriptDetail() {
  const script = state.scripts.find(s => s.id === state.currentScriptId);
  if (!script) {
    return `<div class="empty-state"><p>Скрипт не найден</p>
      <button class="btn btn-outline" data-action="nav" data-page="scripts">← К списку</button></div>`;
  }

  const otabotki = script.otabotki || [];
  const shtrafy = script.shtrafy || [];
  
  const otabotkiCollapsed = state.collapsedBlocks['otabotki_' + script.id] === true;
  const shtrafyCollapsed = state.collapsedBlocks['shtrafy_' + script.id] === true;

  return `
    <div class="script-detail-full">
      <div class="script-detail-top">
        <div class="script-detail-top-left">
          <button class="btn btn-sm btn-outline" data-action="nav" data-page="scripts">← Назад</button>
          <span style="font-size:0.9rem;color:var(--text-muted)">${escapeHtml(script.category || 'Без категории')}</span>
        </div>
        <div class="actions-row">
          <button class="btn btn-outline btn-sm" data-action="edit-script" data-id="${script.id}">✏️ Редактировать</button>
          <button class="btn btn-danger btn-sm" data-action="delete-script" data-id="${script.id}">🗑 Удалить</button>
        </div>
      </div>

      <div class="crm-layout">
        <aside class="crm-side">
          <section class="crm-block">
            <div class="crm-block-head crm-block-head-script">
              <span>📄 ${escapeHtml(script.title)}</span>
              <span class="badge">👁 ${script.opens || 0}</span>
            </div>
            <div class="crm-block-body" style="padding:12px; gap:4px;">
              <div style="font-size:0.85rem;color:var(--text-muted)">Обновлён ${formatDate(script.updatedAt)}</div>
            </div>
          </section>

          <section class="crm-block">
            <div class="crm-block-head crm-block-head-teal" data-action="toggle-block" data-key="otabotki_${script.id}">
              <span>🔄 Отработки <span class="badge badge-teal">${countTree(otabotki)}</span></span>
              <span>
                <button class="btn btn-sm btn-ghost" data-action="add-item" data-id="${script.id}" data-type="otabotki" title="Добавить">+</button>
                <span class="expand-icon ${otabotkiCollapsed ? '' : 'open'}">${otabotkiCollapsed ? '▼' : '▲'}</span>
              </span>
            </div>
            <div class="crm-block-body ${otabotkiCollapsed ? 'collapsed' : ''}">
              ${otabotki.length === 0
                ? '<div class="crm-empty">Пока нет отработок</div>'
                : renderTreeItems(otabotki, script.id, 'otabotki')}
            </div>
          </section>

          <section class="crm-block">
            <div class="crm-block-head crm-block-head-danger" data-action="toggle-block" data-key="shtrafy_${script.id}">
              <span>⚠ Штрафы <span class="badge badge-danger">${countTree(shtrafy)}</span></span>
              <span>
                <button class="btn btn-sm btn-ghost" data-action="add-item" data-id="${script.id}" data-type="shtrafy" title="Добавить">+</button>
                <span class="expand-icon ${shtrafyCollapsed ? '' : 'open'}">${shtrafyCollapsed ? '▼' : '▲'}</span>
              </span>
            </div>
            <div class="crm-block-body ${shtrafyCollapsed ? 'collapsed' : ''}">
              ${shtrafy.length === 0
                ? '<div class="crm-empty">Пока нет штрафов</div>'
                : renderTreeItems(shtrafy, script.id, 'shtrafy')}
            </div>
          </section>
        </aside>

        <main class="crm-script">
          <div class="crm-script-label">📄 Текст скрипта</div>
          <div class="crm-script-body">${script.content || ''}</div>
        </main>
      </div>
    </div>
  `;
}

function collectAllOtabotki() {
  const list = [];
  for (const s of state.scripts) {
    const walk = (items, path) => {
      for (const it of (items || [])) {
        list.push({
          id: it.id,
          title: it.title,
          text: it.text || '',
          category: s.category || 'Без категории',
          scriptId: s.id,
          scriptTitle: s.title,
          path: path
        });
        if (it.children && it.children.length) {
          walk(it.children, path.concat(it.title));
        }
      }
    };
    walk(s.otabotki, []);
  }
  return list;
}

function renderOtabotkiCatalog() {
  const q = (state.otabotkiQuery || '').toLowerCase().trim();
  const catFilter = state.otabotkiCat || '';
  const scriptFilter = state.otabotkiScriptFilter || '';
  let list = collectAllOtabotki();
  const categories = [...new Set(list.map(x => x.category))].sort();
  const scriptOptions = [...new Set(list.map(x => x.scriptId))].map(id => {
    const s = state.scripts.find(sc => sc.id === id);
    return s ? { id: s.id, title: s.title } : null;
  }).filter(Boolean).sort((a,b) => a.title.localeCompare(b.title));

  if (catFilter) list = list.filter(x => x.category === catFilter);
  if (scriptFilter) list = list.filter(x => x.scriptId === scriptFilter);
  if (q) {
    list = list.filter(x =>
      x.title.toLowerCase().includes(q) ||
      x.text.toLowerCase().includes(q) ||
      x.scriptTitle.toLowerCase().includes(q) ||
      x.category.toLowerCase().includes(q)
    );
  }

  return `
    <div class="search-bar">
      <input type="search" class="search-input" id="otabotkiSearch" placeholder="Поиск отработок..." value="${escapeAttr(state.otabotkiQuery || '')}">
      <select class="search-input" id="otabotkiCat" style="flex:0 0 180px;cursor:pointer">
        <option value="">Все категории</option>
        ${categories.map(c => `<option value="${escapeAttr(c)}" ${c === catFilter ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
      </select>
      <select class="search-input" id="otabotkiScriptFilter" style="flex:0 0 200px;cursor:pointer">
        <option value="">Все скрипты</option>
        ${scriptOptions.map(s => `<option value="${s.id}" ${s.id === scriptFilter ? 'selected' : ''}>${escapeHtml(s.title)}</option>`).join('')}
      </select>
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:16px">
      Найдено: <b>${list.length}</b> отработок
    </p>
    ${list.length === 0
      ? '<div class="empty-state"><div class="empty-icon">🔄</div><p>Отработок не найдено</p></div>'
      : `<div class="card-grid">${list.map(item => `
          <div class="card card-interactive" data-action="open-script" data-id="${item.scriptId}">
            <h3 style="font-size:1rem">${escapeHtml(item.title)}</h3>
            <div class="script-meta" style="margin-top:8px">
              <span class="badge badge-primary">${escapeHtml(item.category)}</span>
              <span class="badge badge-teal">📜 ${escapeHtml(item.scriptTitle)}</span>
            </div>
            ${item.path.length ? `<p style="font-size:0.8rem;color:var(--text-muted);margin-top:6px">${escapeHtml(item.path.join(' → '))}</p>` : ''}
            ${item.text ? `<p style="font-size:0.88rem;color:var(--text-muted);margin-top:10px;white-space:pre-wrap;word-break:break-word">${escapeHtml(item.text.slice(0, 180))}${item.text.length > 180 ? '…' : ''}</p>` : ''}
          </div>
        `).join('')}</div>`
    }
  `;
}

function renderCatalog() {
  return `
    <div style="margin-bottom:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <a class="btn btn-outline btn-sm" href="https://kowmarikk0-max.github.io/car/" target="_blank" rel="noopener">Открыть в новой вкладке ↗</a>
    </div>
    <iframe class="catalog-frame" src="https://kowmarikk0-max.github.io/car/" title="Автокаталог"></iframe>
  `;
}

function renderSettings() {
  const s = state.settings;
  const c = state.cloud;
  return `
    <div class="settings-section card">
      <h3>☁ Облачное хранилище (общее для всех)</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:14px;line-height:1.6">
        Чтобы изменения видели все, подключи <a href="https://jsonbin.io" target="_blank" rel="noopener" style="color:var(--primary)">JSONBin.io</a> (бесплатно).<br>
        1. Зарегистрируйся → API Keys → скопируй <b>Master Key</b><br>
        2. Create Bin → вставь <code>{"scripts":[]}</code> → создай → скопируй <b>Bin ID</b><br>
        3. Вставь оба значения ниже и нажми «Подключить»
      </p>
      <div class="form-group">
        <label>Bin ID</label>
        <input type="text" id="cfgBinId" value="${escapeAttr(c.binId)}" placeholder="например 68a1b2c3d4e5f6...">
      </div>
      <div class="form-group">
        <label>API Key (Master или Access)</label>
        <input type="password" id="cfgApiKey" value="${escapeAttr(c.apiKey)}" placeholder="\$2a\$10\$...">
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">
          Важно: вставляйте <b>X-MASTER-KEY</b>, не Access Key. Access Key без прав даёт ошибку 401.
        </div>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="cfgPrivate" ${c.private ? 'checked' : ''}>
        <label for="cfgPrivate">Бин Private (на jsonbin стоит замок) — просто напоминание</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="cfgUseAccess" ${c.useAccessKey ? 'checked' : ''}>
        <label for="cfgUseAccess">Использовать Access Key вместо Master Key (обычно НЕ нужно)</label>
      </div>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="save-cloud">Подключить / Сохранить</button>
        <button class="btn btn-outline btn-sm" data-action="sync-now">Обновить сейчас</button>
        <button class="btn btn-outline btn-sm" data-action="disconnect-cloud">Отключить облако</button>
      </div>
      <p style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
        Статус: <strong id="cloudStatusText">${c.enabled ? (c.status === 'ok' ? 'подключено' : c.status) : 'только локально'}</strong>
        ${c.lastSync ? ' · последняя синхронизация: ' + new Date(c.lastSync).toLocaleTimeString('ru-RU') : ''}
        ${c.private ? ' · приватный бин' : ''}
      </p>
    </div>

    <div class="settings-section card">
      <h3>Тема оформления</h3>
      <div class="layout-options">
        <div class="layout-option ${s.theme === 'dark' ? 'active' : ''}" data-action="set-theme" data-theme="dark">🌙 Тёмная</div>
        <div class="layout-option ${s.theme === 'light' ? 'active' : ''}" data-action="set-theme" data-theme="light">☀️ Светлая</div>
      </div>
    </div>

    <div class="settings-section card">
      <h3>Локальные данные</h3>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:14px">
        Экспорт/импорт JSON — запасной способ переноса.
      </p>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="export">📥 Экспорт JSON</button>
        <button class="btn btn-outline btn-sm" data-action="import-click">📤 Импорт JSON</button>
        <button class="btn btn-danger btn-sm" data-action="reset">🗑 Сбросить локально</button>
      </div>
    </div>
  `;
}

/* ========== Actions ========== */
function showAddScriptModal() {
  openModal(
    'Новый скрипт',
    `<div class="form-group"><label>Название</label><input type="text" id="fTitle" placeholder="Например: Входящий звонок"></div>
     <div class="form-group"><label>Категория</label><input type="text" id="fCategory" placeholder="Медицина, Авто..."></div>
     <div class="form-group"><label>Текст скрипта</label>
       <div class="editor-toolbar">
         <button class="color-btn red" data-action="apply-color" data-color="#ef4444" title="Красный"></button>
         <button class="color-btn blue" data-action="apply-color" data-color="#3b82f6" title="Синий"></button>
         <button class="color-btn yellow" data-action="apply-color" data-color="#fbbf24" title="Жёлтый"></button>
         <button class="color-btn orange" data-action="apply-color" data-color="#f97316" title="Оранжевый"></button>
         <span style="font-size:0.8rem;color:var(--text-muted);margin-left:8px;">Выделите текст и нажмите на цвет</span>
       </div>
       <div class="editor-content" id="editorContent" contenteditable="true" spellcheck="true"></div>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-script">Сохранить</button>`
  );
  setTimeout(() => {
    const ed = document.getElementById('editorContent');
    if (ed) ed.focus();
  }, 100);
}

async function saveNewScript() {
  const title = document.getElementById('fTitle')?.value.trim();
  const category = document.getElementById('fCategory')?.value.trim() || '';
  const editor = document.getElementById('editorContent');
  const content = editor ? editor.innerHTML : '';
  if (!title) { toast('Укажите название', 'error'); return; }
  const plainContent = editor ? editor.textContent : '';
  const script = {
    id: uid(), title, category, content, plainContent,
    otabotki: [], shtrafy: [],
    opens: 0,
    createdAt: Date.now(), updatedAt: Date.now()
  };
  state.scripts.push(script);
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Скрипт создан и отправлен в облако');
  } else {
    toast('Скрипт сохранён локально, но в облако не отправлен', 'error');
  }
  navigate('script', script.id);
}

function showEditScriptModal(id) {
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  openModal(
    'Редактировать скрипт',
    `<div class="form-group"><label>Название</label><input type="text" id="fTitle" value="${escapeAttr(script.title)}"></div>
     <div class="form-group"><label>Категория</label><input type="text" id="fCategory" value="${escapeAttr(script.category || '')}"></div>
     <div class="form-group"><label>Текст скрипта</label>
       <div class="editor-toolbar">
         <button class="color-btn red" data-action="apply-color" data-color="#ef4444" title="Красный"></button>
         <button class="color-btn blue" data-action="apply-color" data-color="#3b82f6" title="Синий"></button>
         <button class="color-btn yellow" data-action="apply-color" data-color="#fbbf24" title="Жёлтый"></button>
         <button class="color-btn orange" data-action="apply-color" data-color="#f97316" title="Оранжевый"></button>
         <span style="font-size:0.8rem;color:var(--text-muted);margin-left:8px;">Выделите текст и нажмите на цвет</span>
       </div>
       <div class="editor-content" id="editorContent" contenteditable="true" spellcheck="true">${script.content || ''}</div>
     </div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-edit-script" data-id="${id}">Сохранить</button>`
  );
  setTimeout(() => {
    const ed = document.getElementById('editorContent');
    if (ed) ed.focus();
    const range = document.createRange();
    range.selectNodeContents(ed);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }, 100);
}

async function saveEditScript(id) {
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  const title = document.getElementById('fTitle')?.value.trim();
  if (!title) { toast('Укажите название', 'error'); return; }
  script.title = title;
  script.category = document.getElementById('fCategory')?.value.trim() || '';
  const editor = document.getElementById('editorContent');
  script.content = editor ? editor.innerHTML : '';
  script.plainContent = editor ? editor.textContent : '';
  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Скрипт обновлён в облаке');
  } else {
    toast('Скрипт обновлён локально, но в облако не отправлен', 'error');
  }
  render();
}

function confirmDeleteScript(id) {
  openModal(
    'Удалить скрипт?',
    '<p>Скрипт и все связанные отработки/штрафы будут удалены.</p>',
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-danger" data-action="confirm-delete-script" data-id="${id}">Удалить</button>`
  );
}

async function deleteScript(id) {
  state.scripts = state.scripts.filter(s => s.id !== id);
  await saveData();
  closeModal();
  toast('Скрипт удалён');
  navigate('scripts');
}

function findInTree(items, id, parentList = null) {
  if (!items) return null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) return { item: items[i], list: items, index: i, parentList };
    if (items[i].children) {
      const found = findInTree(items[i].children, id, items[i]);
      if (found) return found;
    }
  }
  return null;
}

function showAddItemModal(scriptId, type, parentId = null) {
  const label = type === 'otabotki' ? 'отработку' : 'штраф';
  const nested = parentId ? ' (вложенную)' : '';
  openModal(
    `Добавить ${label}${nested}`,
    `<div class="form-group"><label>Заголовок</label><input type="text" id="fItemTitle" placeholder="Краткое название"></div>
     <div class="form-group"><label>Текст</label><textarea id="fItemText" placeholder="Описание..."></textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-item" data-id="${scriptId}" data-type="${type}" ${parentId ? `data-pid="${parentId}"` : ''}>Добавить</button>`
  );
  setTimeout(() => document.getElementById('fItemTitle')?.focus(), 80);
}

async function saveNewItem(scriptId, type, parentId = null) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  const textVal = document.getElementById('fItemText')?.value.trim() || '';
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  const node = { id: uid(), title, text: textVal, children: [] };
  if (!script[type]) script[type] = [];
  if (parentId) {
    const found = findInTree(script[type], parentId);
    if (found) {
      if (!found.item.children) found.item.children = [];
      found.item.children.push(node);
    } else {
      script[type].push(node);
    }
  } else {
    script[type].push(node);
  }
  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Добавлено и отправлено в облако');
  } else {
    toast('Добавлено локально, но в облако не отправлено', 'error');
  }
  render();
}

function showEditItemModal(scriptId, type, itemId) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const found = findInTree(script[type] || [], itemId);
  const item = found ? found.item : (script[type] || []).find(i => i.id === itemId);
  if (!item) return;
  openModal(
    'Редактировать',
    `<div class="form-group"><label>Заголовок</label><input type="text" id="fItemTitle" value="${escapeAttr(item.title)}"></div>
     <div class="form-group"><label>Текст</label><textarea id="fItemText">${escapeHtml(item.text)}</textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-edit-item" data-sid="${scriptId}" data-type="${type}" data-iid="${itemId}">Сохранить</button>`
  );
}

async function saveEditItem(scriptId, type, itemId) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const found = findInTree(script[type] || [], itemId);
  const item = found ? found.item : (script[type] || []).find(i => i.id === itemId);
  if (!item) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  item.title = title;
  item.text = document.getElementById('fItemText')?.value || '';
  script.updatedAt = Date.now();
  const saved = await saveData();
  closeModal();
  if (saved) {
    toast('Сохранено в облаке');
  } else {
    toast('Сохранено локально, но не в облаке', 'error');
  }
  render();
}

async function deleteItem(scriptId, type, itemId) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const found = findInTree(script[type] || [], itemId);
  if (found) {
    found.list.splice(found.index, 1);
  } else {
    script[type] = (script[type] || []).filter(i => i.id !== itemId);
  }
  script.updatedAt = Date.now();
  await saveData();
  toast('Удалено');
  render();
}

function setTheme(theme) {
  state.settings.theme = theme;
  applyTheme();
  saveLocalSettings();
  render();
}

function exportData() {
  const data = { scripts: state.scripts, exportedAt: new Date().toISOString(), version: 1 };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ect-scripts-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Экспорт выполнен');
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data.scripts)) throw new Error('Нет массива scripts');
      state.scripts = data.scripts;
      await saveData();
      toast(`Импортировано: ${state.scripts.length} скриптов`);
      navigate('scripts');
    } catch (err) {
      toast('Ошибка импорта: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

function confirmReset() {
  openModal(
    'Сбросить локальные данные?',
    '<p>Локальные скрипты будут заменены демо. Если облако подключено — потом можно снова загрузить из облака.</p>',
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-danger" data-action="confirm-reset">Сбросить</button>`
  );
}

async function resetAll() {
  state.scripts = getDemoScripts();
  saveLocalScripts();
  closeModal();
  toast('Локальные данные сброшены');
  navigate('home');
}

async function saveCloudConfig() {
  const binId = document.getElementById('cfgBinId')?.value.trim() || '';
  const apiKey = document.getElementById('cfgApiKey')?.value.trim() || '';
  const isPrivate = document.getElementById('cfgPrivate')?.checked || false;
  const useAccess = document.getElementById('cfgUseAccess')?.checked || false;
  state.cloud.binId = binId;
  state.cloud.apiKey = apiKey;
  state.cloud.private = isPrivate;
  state.cloud.useAccessKey = useAccess;
  state.cloud.enabled = !!(binId && apiKey);
  saveLocalSettings();

  if (state.cloud.enabled) {
    toast('Подключаем облако…');
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts) && remote.scripts.length > 0) {
      state.scripts = remote.scripts;
      saveLocalScripts();
      toast('Загружено из облака: ' + state.scripts.length + ' скриптов');
      startAutoSync();
    } else if (remote && Array.isArray(remote.scripts)) {
      const ok = await cloudSave();
      toast(ok ? 'Облако подключено, данные отправлены' : 'Облако: чтение OK, но запись не удалась', ok ? 'success' : 'error');
      if (ok) startAutoSync();
    } else {
      toast('Не удалось подключиться к облаку. Используйте Master Key (X-MASTER-KEY).', 'error');
      state.cloud.status = 'error';
    }
  } else {
    stopAutoSync();
    toast('Укажите Bin ID и API Key', 'error');
  }
  render();
}

function disconnectCloud() {
  state.cloud.enabled = false;
  state.cloud.binId = '';
  state.cloud.apiKey = '';
  state.cloud.private = false;
  state.cloud.status = 'local';
  saveLocalSettings();
  stopAutoSync();
  toast('Облако отключено — данные только локально');
  render();
}

async function syncNow() {
  if (!state.cloud.enabled) {
    toast('Сначала подключите облако', 'error');
    return;
  }
  const remote = await cloudFetch();
  if (remote && Array.isArray(remote.scripts)) {
    state.scripts = remote.scripts;
    saveLocalScripts();
    toast('Синхронизировано: ' + state.scripts.length + ' скриптов');
    render();
  } else {
    toast('Не удалось загрузить из облака', 'error');
  }
}

function toggleBlock(key) {
  state.collapsedBlocks[key] = state.collapsedBlocks[key] === true ? false : true;
  saveLocalSettings();
  render();
}

function toggleItemText(id) {
  state.collapsedBlocks[id] = state.collapsedBlocks[id] === true ? false : true;
  saveLocalSettings();
  render();
}

function applyColor(color) {
  const editor = document.getElementById('editorContent');
  if (!editor) return;
  const sel = window.getSelection();
  if (!sel.rangeCount) {
    toast('Сначала выделите текст', 'error');
    return;
  }
  const range = sel.getRangeAt(0);
  if (range.collapsed) {
    toast('Выделите текст для окрашивания', 'error');
    return;
  }
  const span = document.createElement('span');
  span.style.color = color;
  span.appendChild(range.extractContents());
  range.insertNode(span);
  sel.removeAllRanges();
  sel.addRange(range);
}

/* ========== Events ========== */
function handleClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  switch (action) {
    case 'nav': navigate(el.dataset.page); break;
    case 'open-script': navigate('script', el.dataset.id); break;
    case 'add-script': showAddScriptModal(); break;
    case 'edit-script': showEditScriptModal(el.dataset.id); break;
    case 'delete-script': confirmDeleteScript(el.dataset.id); break;
    case 'confirm-delete-script': deleteScript(el.dataset.id); break;
    case 'add-item': showAddItemModal(el.dataset.id, el.dataset.type); break;
    case 'edit-item': showEditItemModal(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'delete-item': deleteItem(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'save-new-script': saveNewScript(); break;
    case 'save-edit-script': saveEditScript(el.dataset.id); break;
    case 'save-new-item': saveNewItem(el.dataset.id, el.dataset.type, el.dataset.pid || null); break;
    case 'add-child-item': showAddItemModal(el.dataset.sid, el.dataset.type, el.dataset.pid); break;
    case 'toggle-node': {
      const k = el.dataset.key;
      state.expandedNodes[k] = state.expandedNodes[k] === false ? true : false;
      render();
      break;
    }
    case 'save-edit-item': saveEditItem(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'close-modal': closeModal(); break;
    case 'set-theme': setTheme(el.dataset.theme); break;
    case 'export': exportData(); break;
    case 'import-click': document.getElementById('importFile').click(); break;
    case 'reset': confirmReset(); break;
    case 'confirm-reset': resetAll(); break;
    case 'save-cloud': saveCloudConfig(); break;
    case 'disconnect-cloud': disconnectCloud(); break;
    case 'sync-now': syncNow(); break;
    case 'toggle-block': toggleBlock(el.dataset.key); break;
    case 'toggle-item-text': toggleItemText(el.dataset.id); break;
    case 'apply-color': applyColor(el.dataset.color); break;
  }
}

function bindGlobalEvents() {
  document.addEventListener('click', handleClick);

  document.getElementById('themeToggle').addEventListener('click', () => {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveLocalSettings();
  });

  document.getElementById('addScriptBtn').addEventListener('click', showAddScriptModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.getElementById('sidebarToggle').addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    sb.classList.toggle('collapsed');
    state.settings.sidebarCollapsed = sb.classList.contains('collapsed');
    saveLocalSettings();
  });

  document.getElementById('exportData').addEventListener('click', exportData);
  document.getElementById('importData').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });
  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) importData(file);
    e.target.value = '';
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'searchInput') {
      state.searchQuery = e.target.value;
      clearTimeout(window._searchTimer);
      window._searchTimer = setTimeout(() => {
        if (state.currentPage === 'scripts') render();
      }, 200);
    }
    if (e.target.id === 'otabotkiSearch') {
      state.otabotkiQuery = e.target.value;
      clearTimeout(window._otTimer);
      window._otTimer = setTimeout(() => {
        if (state.currentPage === 'otabotki') render();
      }, 200);
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'otabotkiCat') {
      state.otabotkiCat = e.target.value;
      if (state.currentPage === 'otabotki') render();
    }
    if (e.target.id === 'otabotkiScriptFilter') {
      state.otabotkiScriptFilter = e.target.value;
      if (state.currentPage === 'otabotki') render();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });
}

/* ========== Init ========== */
(async function init() {
  await loadData();
  if (state.settings.sidebarCollapsed) {
    document.getElementById('sidebar').classList.add('collapsed');
  }
  bindGlobalEvents();
  navigate('home');
  startAutoSync();
})();
