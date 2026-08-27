/**
 * ЕЦТ Скрипты v1.2 — общее облачное хранилище (JSONBin) + localStorage
 * Когда настроены Bin ID + API Key — данные общие для всех.
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
    lastSync: null,
    status: 'local' // local | syncing | ok | error
  },
  currentPage: 'home',
  currentScriptId: null,
  currentTab: 'content',
  searchQuery: ''
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
      // If user previously saved config — use it; otherwise keep defaults from state
      if (c.binId) state.cloud.binId = c.binId;
      if (c.apiKey) state.cloud.apiKey = c.apiKey;
    }
  } catch (e) {}
  state.cloud.enabled = !!(state.cloud.binId && state.cloud.apiKey);
}

function saveLocalSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify({
    binId: state.cloud.binId,
    apiKey: state.cloud.apiKey
  }));
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
  return [
    {
      id: uid(),
      title: 'Входящий звонок — запись на приём',
      category: 'Медицина',
      content: `Здравствуйте, оператор [Имя], единый центр телефонии. Чем могу помочь?

Клиент: Хочу записаться к терапевту.

— Подскажите, пожалуйста, ФИО и номер СНИЛС.
— Какой город / поликлиника?
— Есть предпочтения по дате и времени?

[Проверка свободных слотов]

— Есть талон на [дата] в [время]. Записываю вас?
— Запись подтверждена. Вам придёт SMS с напоминанием.
Спасибо за обращение, до свидания!`,
      otabotki: [
        { id: uid(), title: 'Нет свободных талонов', text: 'К сожалению, сейчас свободных талонов нет. Могу сформировать заявку в лист ожидания — вам перезвонят из поликлиники. Сформировать?' },
        { id: uid(), title: 'Клиент не знает СНИЛС', text: 'Можете назвать дату рождения и адрес регистрации — попробуем найти вас в системе.' }
      ],
      shtrafy: [
        { id: uid(), title: 'Не представился', text: 'Штраф 50 ₽. Обязательно называть имя в начале разговора.' },
        { id: uid(), title: 'Не предложил лист ожидания', text: 'При отсутствии талонов обязательно предлагать лист ожидания. Штраф 100 ₽.' }
      ],
      createdAt: Date.now() - 86400000 * 3,
      updatedAt: Date.now() - 86400000
    },
    {
      id: uid(),
      title: 'Исходящий — подтверждение записи',
      category: 'Медицина',
      content: `Здравствуйте, [Имя Клиента]! Это оператор [Имя] из единого центра телефонии.
Звоню подтвердить вашу запись к [специалист] на [дата] в [время].
Вы сможете прийти?

Если да:
— Отлично, ждём вас. Возьмите с собой паспорт и полис.
Если нет:
— Хотите перенести запись? На какую дату удобнее?`,
      otabotki: [
        { id: uid(), title: 'Клиент передумал', text: 'Поняла. Запись отменяю. Если понадобится — звоните, будем рады помочь.' }
      ],
      shtrafy: [],
      createdAt: Date.now() - 86400000 * 5,
      updatedAt: Date.now() - 86400000 * 2
    },
    {
      id: uid(),
      title: 'Авто — консультация по марке',
      category: 'Авто',
      content: `Здравствуйте! Единый центр телефонии, оператор [Имя].
Интересует автомобиль [марка/модель]?

— Какой год выпуска рассматриваете?
— Бюджет?
— Новый или с пробегом?
— Город покупки?

[Используйте автокаталог для подбора]

Могу предложить несколько вариантов и передать контакты дилера.`,
      otabotki: [
        { id: uid(), title: 'Слишком дорого', text: 'Понимаю. Есть варианты в более доступном сегменте / с пробегом. Рассмотреть?' }
      ],
      shtrafy: [
        { id: uid(), title: 'Не использовал каталог', text: 'При консультации по авто обязательно сверяться с актуальным каталогом.' }
      ],
      createdAt: Date.now() - 86400000,
      updatedAt: Date.now()
    }
  ];
}

/* ========== Cloud (JSONBin) ========== */
async function cloudFetch() {
  if (!state.cloud.enabled) return null;
  state.cloud.status = 'syncing';
  updateSyncBadge();
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${state.cloud.binId}/latest`, {
      headers: {
        'X-Master-Key': state.cloud.apiKey
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
    const res = await fetch(`https://api.jsonbin.io/v3/b/${state.cloud.binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': state.cloud.apiKey
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
      saveLocalScripts(); // mirror
    } else {
      loadLocalScripts();
      // first time: push local to cloud
      await cloudSave();
    }
  } else {
    loadLocalScripts();
  }
}

async function saveData() {
  saveLocalScripts();
  if (state.cloud.enabled) {
    await cloudSave();
  }
}

function startAutoSync() {
  stopAutoSync();
  if (!state.cloud.enabled) return;
  // pull every 25 sec
  syncTimer = setInterval(async () => {
    if (document.hidden) return;
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts)) {
      const remoteUpdated = remote.updatedAt || 0;
      const localMax = Math.max(0, ...state.scripts.map(s => s.updatedAt || 0));
      // simple: if remote has different count or newer content — take remote
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
  if (page !== 'scripts') state.searchQuery = '';

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page || (page === 'script' && el.dataset.page === 'scripts'));
  });

  const titles = {
    home: 'Главная',
    scripts: 'Скрипты',
    catalog: 'Автокаталог',
    settings: 'Настройки',
    script: 'Скрипт'
  };
  let title = titles[page] || page;
  if (page === 'script' && scriptId) {
    const s = state.scripts.find(x => x.id === scriptId);
    title = s ? s.title : 'Скрипт';
  }
  document.getElementById('pageTitle').textContent = title;

  const addBtn = document.getElementById('addScriptBtn');
  if (addBtn) addBtn.style.display = (page === 'scripts') ? 'inline-flex' : 'none';

  render();
}

/* ========== Render ========== */
function render() {
  const content = document.getElementById('content');
  switch (state.currentPage) {
    case 'home': content.innerHTML = renderHome(); break;
    case 'scripts': content.innerHTML = renderScriptsList(); break;
    case 'script': content.innerHTML = renderScriptDetail(); break;
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
          Каталог автомобилей и города России.
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
      (s.content || '').toLowerCase().includes(q)
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
              <span class="badge badge-teal">🔄 ${(s.otabotki || []).length}</span>
              <span class="badge badge-danger">⚠ ${(s.shtrafy || []).length}</span>
            </div>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-top:10px">${formatDate(s.updatedAt)}</p>
          </div>
        `).join('')}</div>`
    }
  `;
}

function renderScriptDetail() {
  const script = state.scripts.find(s => s.id === state.currentScriptId);
  if (!script) {
    return `<div class="empty-state"><p>Скрипт не найден</p>
      <button class="btn btn-outline" data-action="nav" data-page="scripts">← К списку</button></div>`;
  }

  const otabotki = script.otabotki || [];
  const shtrafy = script.shtrafy || [];

  return `
    <div class="script-detail">
      <div class="script-detail-header">
        <div>
          <button class="btn btn-sm btn-outline back-btn" data-action="nav" data-page="scripts">← Назад</button>
          <h2>${escapeHtml(script.title)}</h2>
          <div class="script-meta" style="margin-top:10px">
            ${script.category ? `<span class="badge badge-primary">${escapeHtml(script.category)}</span>` : ''}
            <span class="badge">Обновлён ${formatDate(script.updatedAt)}</span>
          </div>
        </div>
        <div class="actions-row">
          <button class="btn btn-outline btn-sm" data-action="edit-script" data-id="${script.id}">✏️ Редактировать</button>
          <button class="btn btn-danger btn-sm" data-action="delete-script" data-id="${script.id}">🗑 Удалить</button>
        </div>
      </div>

      <div class="script-workspace">
        <div class="script-col-main">
          <div class="panel-label">📄 Текст скрипта</div>
          <div class="script-text">${escapeHtml(script.content)}</div>
        </div>

        <div class="script-col-side">
          <div class="side-panel">
            <div class="side-panel-head">
              <span>🔄 Отработки <span class="badge badge-teal">${otabotki.length}</span></span>
              <button class="btn btn-primary btn-sm" data-action="add-item" data-id="${script.id}" data-type="otabotki">+</button>
            </div>
            <div class="side-panel-body">
              ${otabotki.length === 0
                ? '<div class="side-empty">Нет отработок</div>'
                : otabotki.map(item => `
                  <div class="item-card otabotka">
                    <h4>
                      ${escapeHtml(item.title)}
                      <span class="item-actions">
                        <button class="btn-icon" data-action="edit-item" data-sid="${script.id}" data-type="otabotki" data-iid="${item.id}" title="Редактировать">✏️</button>
                        <button class="btn-icon" data-action="delete-item" data-sid="${script.id}" data-type="otabotki" data-iid="${item.id}" title="Удалить">🗑</button>
                      </span>
                    </h4>
                    <p>${escapeHtml(item.text)}</p>
                  </div>
                `).join('')
              }
            </div>
          </div>

          <div class="side-panel">
            <div class="side-panel-head">
              <span>⚠ Штрафы <span class="badge badge-danger">${shtrafy.length}</span></span>
              <button class="btn btn-primary btn-sm" data-action="add-item" data-id="${script.id}" data-type="shtrafy">+</button>
            </div>
            <div class="side-panel-body">
              ${shtrafy.length === 0
                ? '<div class="side-empty">Нет штрафов</div>'
                : shtrafy.map(item => `
                  <div class="item-card shtraf">
                    <h4>
                      ${escapeHtml(item.title)}
                      <span class="item-actions">
                        <button class="btn-icon" data-action="edit-item" data-sid="${script.id}" data-type="shtrafy" data-iid="${item.id}" title="Редактировать">✏️</button>
                        <button class="btn-icon" data-action="delete-item" data-sid="${script.id}" data-type="shtrafy" data-iid="${item.id}" title="Удалить">🗑</button>
                      </span>
                    </h4>
                    <p>${escapeHtml(item.text)}</p>
                  </div>
                `).join('')
              }
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <label>Master Key (API Key)</label>
        <input type="password" id="cfgApiKey" value="${escapeAttr(c.apiKey)}" placeholder="\$2a\$10\$...">
      </div>
      <div class="actions-row">
        <button class="btn btn-primary btn-sm" data-action="save-cloud">Подключить / Сохранить</button>
        <button class="btn btn-outline btn-sm" data-action="sync-now">Обновить сейчас</button>
        <button class="btn btn-outline btn-sm" data-action="disconnect-cloud">Отключить облако</button>
      </div>
      <p style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
        Статус: <strong id="cloudStatusText">${c.enabled ? (c.status === 'ok' ? 'подключено' : c.status) : 'только локально'}</strong>
        ${c.lastSync ? ' · последняя синхронизация: ' + new Date(c.lastSync).toLocaleTimeString('ru-RU') : ''}
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
     <div class="form-group"><label>Текст скрипта</label><textarea id="fContent" placeholder="Текст разговора..."></textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-script">Сохранить</button>`
  );
  setTimeout(() => document.getElementById('fTitle')?.focus(), 80);
}

async function saveNewScript() {
  const title = document.getElementById('fTitle')?.value.trim();
  const category = document.getElementById('fCategory')?.value.trim() || '';
  const content = document.getElementById('fContent')?.value.trim() || '';
  if (!title) { toast('Укажите название', 'error'); return; }
  const script = {
    id: uid(), title, category, content,
    otabotki: [], shtrafy: [],
    createdAt: Date.now(), updatedAt: Date.now()
  };
  state.scripts.push(script);
  await saveData();
  closeModal();
  toast('Скрипт создан' + (state.cloud.enabled ? ' и отправлен в облако' : ''));
  navigate('script', script.id);
}

function showEditScriptModal(id) {
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  openModal(
    'Редактировать скрипт',
    `<div class="form-group"><label>Название</label><input type="text" id="fTitle" value="${escapeAttr(script.title)}"></div>
     <div class="form-group"><label>Категория</label><input type="text" id="fCategory" value="${escapeAttr(script.category || '')}"></div>
     <div class="form-group"><label>Текст скрипта</label><textarea id="fContent">${escapeHtml(script.content)}</textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-edit-script" data-id="${id}">Сохранить</button>`
  );
}

async function saveEditScript(id) {
  const script = state.scripts.find(s => s.id === id);
  if (!script) return;
  const title = document.getElementById('fTitle')?.value.trim();
  if (!title) { toast('Укажите название', 'error'); return; }
  script.title = title;
  script.category = document.getElementById('fCategory')?.value.trim() || '';
  script.content = document.getElementById('fContent')?.value || '';
  script.updatedAt = Date.now();
  await saveData();
  closeModal();
  toast('Сохранено' + (state.cloud.enabled ? ' в облако' : ''));
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

function showAddItemModal(scriptId, type) {
  const label = type === 'otabotki' ? 'отработку' : 'штраф';
  openModal(
    `Добавить ${label}`,
    `<div class="form-group"><label>Заголовок</label><input type="text" id="fItemTitle" placeholder="Краткое название"></div>
     <div class="form-group"><label>Текст</label><textarea id="fItemText" placeholder="Описание..."></textarea></div>`,
    `<button class="btn btn-outline" data-action="close-modal">Отмена</button>
     <button class="btn btn-primary" data-action="save-new-item" data-id="${scriptId}" data-type="${type}">Добавить</button>`
  );
  setTimeout(() => document.getElementById('fItemTitle')?.focus(), 80);
}

async function saveNewItem(scriptId, type) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  const text = document.getElementById('fItemText')?.value.trim() || '';
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  if (!script[type]) script[type] = [];
  script[type].push({ id: uid(), title, text });
  script.updatedAt = Date.now();
  await saveData();
  closeModal();
  toast('Добавлено');
  state.currentTab = type;
  render();
}

function showEditItemModal(scriptId, type, itemId) {
  const script = state.scripts.find(s => s.id === scriptId);
  const item = script?.[type]?.find(i => i.id === itemId);
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
  const item = script?.[type]?.find(i => i.id === itemId);
  if (!item) return;
  const title = document.getElementById('fItemTitle')?.value.trim();
  if (!title) { toast('Укажите заголовок', 'error'); return; }
  item.title = title;
  item.text = document.getElementById('fItemText')?.value || '';
  script.updatedAt = Date.now();
  await saveData();
  closeModal();
  toast('Сохранено');
  render();
}

async function deleteItem(scriptId, type, itemId) {
  const script = state.scripts.find(s => s.id === scriptId);
  if (!script) return;
  script[type] = (script[type] || []).filter(i => i.id !== itemId);
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
  state.cloud.binId = binId;
  state.cloud.apiKey = apiKey;
  state.cloud.enabled = !!(binId && apiKey);
  saveLocalSettings();

  if (state.cloud.enabled) {
    toast('Подключаем облако…');
    const remote = await cloudFetch();
    if (remote && Array.isArray(remote.scripts) && remote.scripts.length > 0) {
      state.scripts = remote.scripts;
      saveLocalScripts();
      toast('Загружено из облака: ' + state.scripts.length + ' скриптов');
    } else {
      // empty bin or first connect — push current
      await cloudSave();
      toast('Облако подключено, данные отправлены');
    }
    startAutoSync();
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
    case 'tab': state.currentTab = el.dataset.tab; render(); break;
    case 'add-item': showAddItemModal(el.dataset.id, el.dataset.type); break;
    case 'edit-item': showEditItemModal(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'delete-item': deleteItem(el.dataset.sid, el.dataset.type, el.dataset.iid); break;
    case 'save-new-script': saveNewScript(); break;
    case 'save-edit-script': saveEditScript(el.dataset.id); break;
    case 'save-new-item': saveNewItem(el.dataset.id, el.dataset.type); break;
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
