/**
 * ЕЦТ Скрипты — API для Google Таблицы
 *
 * Лимит ячейки Sheets = 50 000 символов. Поэтому:
 *  - лист scripts — по одному скрипту в строке
 *  - лист chunks  — куски длинных полей (текст > 40 000)
 *  - лист data    — только короткая сводка в A1 (не весь JSON)
 *
 * GET  → { scripts:[...], updatedAt, version }
 * POST → полный JSON или порции: begin / upsert / chunk / commit / replace
 *
 * После правок: Развернуть → Управление развёртываниями → карандаш
 * → Новая версия → Развернуть (URL тот же).
 */

var MAX_CELL = 40000;
var CHUNK_MARK = '__CHUNKS__:';
var SCRIPT_HEADERS = ['id', 'title', 'category', 'content', 'plainContent', 'otabotki', 'shtrafy', 'opens', 'createdAt', 'updatedAt', 'extra'];
var CHUNK_HEADERS = ['id', 'field', 'part', 'text'];
var LONG_FIELDS = ['content', 'plainContent', 'otabotki', 'shtrafy', 'extra'];

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSs_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getOrCreateSheet_(name, headers) {
  var ss = getSs_();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (headers && headers.length) {
    var first = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    var empty = true;
    var i;
    for (i = 0; i < first.length; i++) {
      if (String(first[i] || '') !== '') { empty = false; break; }
    }
    if (empty || String(first[0] || '') !== headers[0]) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
  }
  return sheet;
}

function dataSheet_() {
  var ss = getSs_();
  var sheet = ss.getSheetByName('data');
  if (!sheet) sheet = ss.getSheets()[0];
  return sheet;
}

function writeMeta_(info) {
  var sheet = dataSheet_();
  var meta = {
    storage: 'rows',
    count: info.count || 0,
    updatedAt: info.updatedAt || Date.now(),
    version: 1,
    pending: !!info.pending
  };
  sheet.getRange('A1').setValue(JSON.stringify(meta));
  sheet.getRange('B1').setValue('Скриптов: ' + meta.count);
  sheet.getRange('C1').setValue(new Date().toISOString());
  if (info.error) sheet.getRange('D1').setValue(String(info.error).substring(0, 1000));
  else sheet.getRange('D1').setValue('');
  // Общие отработки (библиотека) — в E1, при длине > 40k — в лист shared_chunks
  if (info.sharedOtabotki !== undefined) {
    writeShared_(info.sharedOtabotki || []);
  }
  // Доп. данные приложения (каталог, цели, звонки-мета, справка, лидерборд)
  if (info.extras !== undefined) {
    writeExtras_(info.extras || {});
  }
}

function writeShared_(list) {
  var sheet = dataSheet_();
  var text = JSON.stringify(list || []);
  if (text.length <= 40000) {
    sheet.getRange('E1').setValue(text);
    var ss = getSs_();
    var ch = ss.getSheetByName('shared_chunks');
    if (ch) ch.clear();
    return;
  }
  sheet.getRange('E1').setValue(CHUNK_MARK + Math.ceil(text.length / MAX_CELL));
  var chunksSheet = getOrCreateSheet_('shared_chunks', ['part', 'text']);
  resetSheet_(chunksSheet, ['part', 'text']);
  var parts = splitChunks_(text);
  var rows = [];
  var i;
  for (i = 0; i < parts.length; i++) rows.push([i, parts[i]]);
  if (rows.length) {
    chunksSheet.getRange(2, 1, rows.length, 2).setNumberFormat('@');
    chunksSheet.getRange(2, 1, rows.length, 2).setValues(rows);
  }
}

function readShared_() {
  var sheet = dataSheet_();
  var raw = String(sheet.getRange('E1').getValue() || '');
  if (!raw) return [];
  if (raw.indexOf(CHUNK_MARK) === 0) {
    var chunksSheet = getSs_().getSheetByName('shared_chunks');
    if (!chunksSheet || chunksSheet.getLastRow() < 2) return [];
    var values = chunksSheet.getRange(2, 1, chunksSheet.getLastRow() - 1, 2).getValues();
    var map = [];
    var i;
    for (i = 0; i < values.length; i++) {
      var part = parseInt(values[i][0], 10) || 0;
      map[part] = String(values[i][1] == null ? '' : values[i][1]);
    }
    raw = map.join('');
  }
  try {
    var parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function resetSheet_(sheet, headers) {
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setNumberFormat('@');
}

function splitChunks_(text) {
  text = String(text == null ? '' : text);
  var parts = [];
  var i;
  for (i = 0; i < text.length; i += MAX_CELL) {
    parts.push(text.substring(i, i + MAX_CELL));
  }
  if (!parts.length) parts = [''];
  return parts;
}

function encodeField_(value, id, field, chunkRows) {
  var text;
  if (value == null) text = '';
  else if (typeof value === 'string') text = value;
  else text = JSON.stringify(value);

  if (text.length <= MAX_CELL) return text;

  var parts = splitChunks_(text);
  var p;
  for (p = 0; p < parts.length; p++) {
    chunkRows.push([id, field, p, parts[p]]);
  }
  return CHUNK_MARK + parts.length;
}

function parseJsonField_(raw, fallback) {
  if (raw == null || raw === '') return fallback;
  if (typeof raw !== 'string') return raw;
  try { return JSON.parse(raw); } catch (e) { return fallback; }
}

function joinChunkMap_(map, id, field) {
  var key = id + '\t' + field;
  var arr = map[key];
  if (!arr || !arr.length) return '';
  var s = '';
  var i;
  for (i = 0; i < arr.length; i++) s += (arr[i] == null ? '' : String(arr[i]));
  return s;
}

function loadChunkMap_(sheet) {
  var map = {};
  if (!sheet) return map;
  var last = sheet.getLastRow();
  if (last < 2) return map;
  var values = sheet.getRange(2, 1, last - 1, 4).getValues();
  var i;
  for (i = 0; i < values.length; i++) {
    var id = String(values[i][0] || '');
    var field = String(values[i][1] || '');
    var part = parseInt(values[i][2], 10) || 0;
    var text = String(values[i][3] == null ? '' : values[i][3]);
    if (!id || !field) continue;
    var key = id + '\t' + field;
    if (!map[key]) map[key] = [];
    map[key][part] = text;
  }
  return map;
}

function resolveField_(cellVal, id, field, chunkMap) {
  var raw = cellVal == null ? '' : String(cellVal);
  var fromChunks = joinChunkMap_(chunkMap, id, field);
  if (raw.indexOf(CHUNK_MARK) === 0) return fromChunks;
  if (fromChunks) return fromChunks;
  return raw;
}

function extraOf_(script) {
  var known = {
    id: 1, title: 1, category: 1, content: 1, plainContent: 1,
    otabotki: 1, shtrafy: 1, opens: 1, createdAt: 1, updatedAt: 1
  };
  var o = {};
  var has = false;
  var k;
  for (k in script) {
    if (!Object.prototype.hasOwnProperty.call(script, k)) continue;
    if (known[k]) continue;
    if (k.charAt(0) === '_') continue;
    o[k] = script[k];
    has = true;
  }
  return has ? JSON.stringify(o) : '';
}

function scriptToRow_(script, chunkRows) {
  var id = String(script.id || '');
  return [
    id,
    String(script.title || ''),
    String(script.category || ''),
    encodeField_(script.content || '', id, 'content', chunkRows),
    encodeField_(script.plainContent || '', id, 'plainContent', chunkRows),
    encodeField_(script.otabotki || [], id, 'otabotki', chunkRows),
    encodeField_(script.shtrafy || [], id, 'shtrafy', chunkRows),
    script.opens == null ? 0 : script.opens,
    script.createdAt || '',
    script.updatedAt || '',
    encodeField_(extraOf_(script), id, 'extra', chunkRows)
  ];
}

function rowToScript_(row, chunkMap) {
  var id = String(row[0] || '');
  var content = resolveField_(row[3], id, 'content', chunkMap);
  var plain = resolveField_(row[4], id, 'plainContent', chunkMap);
  var otRaw = resolveField_(row[5], id, 'otabotki', chunkMap);
  var shRaw = resolveField_(row[6], id, 'shtrafy', chunkMap);
  var extraRaw = resolveField_(row[10], id, 'extra', chunkMap);
  var script = {
    id: id,
    title: String(row[1] || ''),
    category: String(row[2] || ''),
    content: content,
    plainContent: plain,
    otabotki: parseJsonField_(otRaw, []),
    shtrafy: parseJsonField_(shRaw, []),
    opens: Number(row[7] || 0),
    createdAt: Number(row[8] || 0),
    updatedAt: Number(row[9] || 0)
  };
  var extra = parseJsonField_(extraRaw, null);
  if (extra && typeof extra === 'object') {
    var k;
    for (k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k) && script[k] === undefined) {
        script[k] = extra[k];
      }
    }
  }
  return script;
}

function readLegacyA1_() {
  var sheet = dataSheet_();
  var raw = String(sheet.getRange('A1').getValue() || '');
  if (!raw) return { scripts: [], updatedAt: 0, version: 1 };
  try {
    var parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.scripts)) return parsed;
  } catch (e) {}
  return { scripts: [], updatedAt: 0, version: 1 };
}

function readFromSheets_(scriptsName, chunksName) {
  var ss = getSs_();
  var scriptsSheet = ss.getSheetByName(scriptsName);
  if (!scriptsSheet || scriptsSheet.getLastRow() < 2) return null;
  var chunksSheet = ss.getSheetByName(chunksName);
  var chunkMap = loadChunkMap_(chunksSheet);
  var last = scriptsSheet.getLastRow();
  var cols = Math.max(scriptsSheet.getLastColumn(), SCRIPT_HEADERS.length);
  var values = scriptsSheet.getRange(2, 1, last - 1, cols).getValues();
  var scripts = [];
  var i;
  for (i = 0; i < values.length; i++) {
    if (!values[i][0]) continue;
    scripts.push(rowToScript_(values[i], chunkMap));
  }
  return scripts;
}


function writeExtras_(obj) {
  var sheet = dataSheet_();
  var text = JSON.stringify(obj || {});
  if (text.length <= 40000) {
    sheet.getRange('F1').setValue(text);
    var ss = getSs_();
    var ch = ss.getSheetByName('extras_chunks');
    if (ch) ch.clear();
    return;
  }
  sheet.getRange('F1').setValue(CHUNK_MARK + Math.ceil(text.length / MAX_CELL));
  var chunksSheet = getOrCreateSheet_('extras_chunks', ['part', 'text']);
  resetSheet_(chunksSheet, ['part', 'text']);
  var parts = splitChunks_(text);
  var rows = [];
  var i;
  for (i = 0; i < parts.length; i++) rows.push([i, parts[i]]);
  if (rows.length) {
    chunksSheet.getRange(2, 1, rows.length, 2).setNumberFormat('@');
    chunksSheet.getRange(2, 1, rows.length, 2).setValues(rows);
  }
}

function readExtras_() {
  var sheet = dataSheet_();
  var raw = String(sheet.getRange('F1').getValue() || '');
  if (!raw) return {};
  if (raw.indexOf(CHUNK_MARK) === 0) {
    var chunksSheet = getSs_().getSheetByName('extras_chunks');
    if (!chunksSheet || chunksSheet.getLastRow() < 2) return {};
    var values = chunksSheet.getRange(2, 1, chunksSheet.getLastRow() - 1, 2).getValues();
    var map = [];
    var i;
    for (i = 0; i < values.length; i++) {
      var part = parseInt(values[i][0], 10) || 0;
      map[part] = String(values[i][1] == null ? '' : values[i][1]);
    }
    raw = map.join('');
  }
  try {
    var parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) {
    return {};
  }
}

function readAll_() {
  var scripts = readFromSheets_('scripts', 'chunks');
  var extras = readExtras_();
  if (scripts && scripts.length) {
    var meta = {};
    try { meta = JSON.parse(String(dataSheet_().getRange('A1').getValue() || '{}')); } catch (e) {}
    var out = {
      scripts: scripts,
      sharedOtabotki: readShared_(),
      updatedAt: meta.updatedAt || Date.now(),
      version: 1,
      storage: 'rows'
    };
    // flatten extras onto record for client
    if (extras) {
      if (extras.cars) out.cars = extras.cars;
      if (extras.calls) out.calls = extras.calls;
      if (extras.goalsStore) out.goalsStore = extras.goalsStore;
      if (extras.refInfo) out.refInfo = extras.refInfo;
      if (extras.leaderboardManual) out.leaderboardManual = extras.leaderboardManual;
      if (extras.leaderboardSettings) out.leaderboardSettings = extras.leaderboardSettings;
      if (extras.sharedPenalties) out.sharedPenalties = extras.sharedPenalties;
    }
    return out;
  }
  var legacy = readLegacyA1_();
  if (legacy && !legacy.sharedOtabotki) legacy.sharedOtabotki = readShared_();
  if (legacy && extras) {
    if (extras.cars) legacy.cars = extras.cars;
    if (extras.calls) legacy.calls = extras.calls;
    if (extras.goalsStore) legacy.goalsStore = extras.goalsStore;
    if (extras.refInfo) legacy.refInfo = extras.refInfo;
    if (extras.leaderboardManual) legacy.leaderboardManual = extras.leaderboardManual;
    if (extras.leaderboardSettings) legacy.leaderboardSettings = extras.leaderboardSettings;
    if (extras.sharedPenalties) legacy.sharedPenalties = extras.sharedPenalties;
  }
  return legacy;
}

function writeRows_(sheet, headers, rows) {
  resetSheet_(sheet, headers);
  if (!rows.length) return;
  var range = sheet.getRange(2, 1, rows.length, headers.length);
  range.setNumberFormat('@');
  range.setValues(rows);
}

function writeAll_(parsed) {
  var scripts = parsed.scripts || [];
  var chunkRows = [];
  var rows = [];
  var i;
  for (i = 0; i < scripts.length; i++) {
    rows.push(scriptToRow_(scripts[i] || {}, chunkRows));
  }
  var scriptsSheet = getOrCreateSheet_('scripts', SCRIPT_HEADERS);
  var chunksSheet = getOrCreateSheet_('chunks', CHUNK_HEADERS);
  writeRows_(scriptsSheet, SCRIPT_HEADERS, rows);
  writeRows_(chunksSheet, CHUNK_HEADERS, chunkRows);
  writeMeta_({
    count: scripts.length,
    updatedAt: parsed.updatedAt || Date.now(),
    pending: false,
    sharedOtabotki: parsed.sharedOtabotki || [],
    extras: parsed.extras || {
      cars: parsed.cars,
      calls: parsed.calls,
      goalsStore: parsed.goalsStore,
      refInfo: parsed.refInfo,
      leaderboardManual: parsed.leaderboardManual,
      leaderboardSettings: parsed.leaderboardSettings,
      sharedPenalties: parsed.sharedPenalties
    }
  });
}

function handleBegin_(parsed) {
  var inbox = getOrCreateSheet_('_inbox', SCRIPT_HEADERS);
  var inboxChunks = getOrCreateSheet_('_inbox_chunks', CHUNK_HEADERS);
  resetSheet_(inbox, SCRIPT_HEADERS);
  resetSheet_(inboxChunks, CHUNK_HEADERS);
  writeMeta_({
    count: parsed.count || 0,
    updatedAt: parsed.updatedAt || Date.now(),
    pending: true
  });
}

function handleUpsert_(script) {
  if (!script || !script.id) throw new Error('upsert: no script.id');
  var inbox = getOrCreateSheet_('_inbox', SCRIPT_HEADERS);
  var inboxChunks = getOrCreateSheet_('_inbox_chunks', CHUNK_HEADERS);
  var chunkRows = [];
  var row = scriptToRow_(script, chunkRows);
  inbox.appendRow(row);
  var last = inbox.getLastRow();
  inbox.getRange(last, 1, 1, SCRIPT_HEADERS.length).setNumberFormat('@');
  var c;
  for (c = 0; c < chunkRows.length; c++) {
    inboxChunks.appendRow(chunkRows[c]);
  }
  if (chunkRows.length) {
    var clast = inboxChunks.getLastRow();
    inboxChunks.getRange(clast - chunkRows.length + 1, 1, chunkRows.length, 4).setNumberFormat('@');
  }
}

function handleChunk_(parsed) {
  if (!parsed.id || !parsed.field) throw new Error('chunk: id/field required');
  var inboxChunks = getOrCreateSheet_('_inbox_chunks', CHUNK_HEADERS);
  inboxChunks.appendRow([
    String(parsed.id),
    String(parsed.field),
    parsed.part == null ? 0 : parsed.part,
    String(parsed.text == null ? '' : parsed.text)
  ]);
  var last = inboxChunks.getLastRow();
  inboxChunks.getRange(last, 1, 1, 4).setNumberFormat('@');
}

function handleCommit_(parsed) {
  var scripts = readFromSheets_('_inbox', '_inbox_chunks');
  if (!scripts) scripts = [];
  writeAll_({
    scripts: scripts,
    updatedAt: (parsed && parsed.updatedAt) || Date.now(),
    version: 1
  });
  var ss = getSs_();
  var inbox = ss.getSheetByName('_inbox');
  var inboxChunks = ss.getSheetByName('_inbox_chunks');
  if (inbox) resetSheet_(inbox, SCRIPT_HEADERS);
  if (inboxChunks) resetSheet_(inboxChunks, CHUNK_HEADERS);
}

/* ========== Google Drive медиа (фото / аудио / видео) ==========
 * Папка: «ECT Media»
 * Подпапки: images / audio / video
 * Файлы: {scriptId}_{timestamp}_{safeName}
 *
 * POST op=uploadMedia  → { data(base64), fileName, mimeType, scriptId }
 * POST op=deleteMedia  → { driveId }
 * GET  ?op=mediaInfo   → проверка папки
 */
// ID папки «ECT Media» (из ссылки Drive)
var MEDIA_ROOT_ID = '13OvqOwJjjJT-ahT5spskqSA0kU3GSINF';
var MEDIA_ROOT_NAME = 'ECT Media';
var MEDIA_SUBFOLDERS = { image: 'images', audio: 'audio', video: 'video', other: 'images' };

function getOrCreateFolderByName_(parent, name) {
  var it = parent.getFoldersByName(name);
  if (it.hasNext()) return it.next();
  return parent.createFolder(name);
}

function getMediaRootFolder_() {
  try {
    return DriveApp.getFolderById(MEDIA_ROOT_ID);
  } catch (e) {
    // запасной вариант — поиск по имени
    var it = DriveApp.getFoldersByName(MEDIA_ROOT_NAME);
    if (it.hasNext()) return it.next();
    return DriveApp.createFolder(MEDIA_ROOT_NAME);
  }
}

function detectMediaKind_(mimeType, fileName) {
  var mt = String(mimeType || '').toLowerCase();
  var fn = String(fileName || '').toLowerCase();
  if (mt.indexOf('image/') === 0 || /\.(jpe?g|png|gif|webp|bmp|svg)$/i.test(fn)) return 'image';
  if (mt.indexOf('audio/') === 0 || /\.(mp3|wav|ogg|m4a|aac|flac|webm)$/i.test(fn)) return 'audio';
  if (mt.indexOf('video/') === 0 || /\.(mp4|webm|mov|avi|mkv|m4v)$/i.test(fn)) return 'video';
  return 'other';
}

function sanitizeFileName_(name) {
  name = String(name || 'file').replace(/[\\\/\?\*\|<>:"\x00-\x1f]/g, '_');
  if (name.length > 120) {
    var dot = name.lastIndexOf('.');
    if (dot > 0) {
      var ext = name.substring(dot);
      name = name.substring(0, Math.max(1, 120 - ext.length)) + ext;
    } else {
      name = name.substring(0, 120);
    }
  }
  return name || 'file';
}

function buildPublicUrl_(fileId, kind) {
  if (kind === 'image') {
    return 'https://drive.google.com/uc?export=view&id=' + fileId;
  }
  return 'https://drive.google.com/uc?export=download&id=' + fileId;
}

/**
 * Загрузка файла на Drive.
 * parsed: { data: base64, fileName, mimeType, scriptId }
 */
function handleUploadMedia_(parsed) {
  if (!parsed || !parsed.data) throw new Error('uploadMedia: нет data');
  var fileName = sanitizeFileName_(parsed.fileName || 'file');
  var mimeType = String(parsed.mimeType || 'application/octet-stream');
  var scriptId = String(parsed.scriptId || 'general');
  var kind = detectMediaKind_(mimeType, fileName);

  var root = getMediaRootFolder_();
  var subName = MEDIA_SUBFOLDERS[kind] || 'images';
  var sub = getOrCreateFolderByName_(root, subName);

  var raw = String(parsed.data);
  var comma = raw.indexOf(',');
  if (comma >= 0 && raw.substring(0, 10).indexOf('data:') === 0) {
    raw = raw.substring(comma + 1);
  }
  var bytes = Utilities.base64Decode(raw);
  var blob = Utilities.newBlob(bytes, mimeType, fileName);

  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Europe/Moscow', 'yyyyMMdd_HHmmss');
  var finalName = scriptId + '_' + stamp + '_' + fileName;
  blob.setName(finalName);

  var file = sub.createFile(blob);
  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (shareErr) {}

  var driveId = file.getId();
  return {
    ok: true,
    op: 'uploadMedia',
    driveId: driveId,
    name: file.getName(),
    originalName: fileName,
    mimeType: file.getMimeType(),
    size: file.getSize(),
    kind: kind,
    scriptId: scriptId,
    url: buildPublicUrl_(driveId, kind),
    webViewLink: file.getUrl(),
    folder: subName
  };
}

/**
 * Удаление файла с Drive (в корзину).
 * parsed: { driveId }
 */
function handleDeleteMedia_(parsed) {
  var driveId = String((parsed && parsed.driveId) || '');
  if (!driveId) throw new Error('deleteMedia: нет driveId');
  var file = DriveApp.getFileById(driveId);
  file.setTrashed(true);
  return { ok: true, op: 'deleteMedia', driveId: driveId, trashed: true };
}

/** Инфо о медиа-папке */
function handleMediaInfo_() {
  var root = getMediaRootFolder_();
  var subs = {};
  var kinds = ['images', 'audio', 'video'];
  var i;
  for (i = 0; i < kinds.length; i++) {
    var f = getOrCreateFolderByName_(root, kinds[i]);
    subs[kinds[i]] = { id: f.getId(), name: f.getName() };
  }
  return {
    ok: true,
    root: { id: root.getId(), name: root.getName(), url: root.getUrl() },
    subfolders: subs
  };
}

function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.op === 'mediaInfo') {
      return jsonOut_(handleMediaInfo_());
    }
    return jsonOut_(readAll_());
  } catch (err) {
    return jsonOut_({ error: String(err) });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  } catch (lockErr) {
    return jsonOut_({ ok: false, error: 'busy: ' + String(lockErr) });
  }
  try {
    var body = '';
    if (e && e.postData && e.postData.contents) body = e.postData.contents;
    else if (e && e.parameter && e.parameter.data) body = e.parameter.data;
    if (!body) {
      return jsonOut_({ ok: false, error: 'empty body' });
    }
    var parsed = JSON.parse(body);
    if (!parsed || typeof parsed !== 'object') throw new Error('invalid json');

    var op = parsed.op || 'replace';

    if (op === 'uploadMedia') {
      return jsonOut_(handleUploadMedia_(parsed));
    }
    if (op === 'deleteMedia') {
      return jsonOut_(handleDeleteMedia_(parsed));
    }
    if (op === 'mediaInfo') {
      return jsonOut_(handleMediaInfo_());
    }
    // Только extras (цели, авто, справка, звонки-мета, лидерборд) — без перезаписи скриптов
    if (op === 'saveExtras') {
      var ex = parsed.extras || {
        cars: parsed.cars,
        calls: parsed.calls,
        goalsStore: parsed.goalsStore,
        refInfo: parsed.refInfo,
        leaderboardManual: parsed.leaderboardManual,
        leaderboardSettings: parsed.leaderboardSettings,
        sharedPenalties: parsed.sharedPenalties
      };
      writeExtras_(ex || {});
      if (parsed.sharedOtabotki !== undefined) {
        writeShared_(parsed.sharedOtabotki || []);
      }
      var sheet = dataSheet_();
      sheet.getRange('C1').setValue(new Date().toISOString());
      return jsonOut_({ ok: true, op: 'saveExtras' });
    }

    if (op === 'replace') {
      if (!Array.isArray(parsed.scripts)) parsed.scripts = [];
      parsed.updatedAt = parsed.updatedAt || Date.now();
      parsed.version = 1;
      writeAll_(parsed);
      return jsonOut_({ ok: true, op: op, count: parsed.scripts.length, updatedAt: parsed.updatedAt });
    }
    if (op === 'begin') {
      handleBegin_(parsed);
      return jsonOut_({ ok: true, op: op });
    }
    if (op === 'upsert') {
      handleUpsert_(parsed.script);
      return jsonOut_({ ok: true, op: op, id: parsed.script && parsed.script.id });
    }
    if (op === 'chunk') {
      handleChunk_(parsed);
      return jsonOut_({ ok: true, op: op, id: parsed.id, field: parsed.field, part: parsed.part });
    }
    if (op === 'commit') {
      handleCommit_(parsed);
      var all = readAll_();
      return jsonOut_({ ok: true, op: op, count: (all.scripts || []).length, updatedAt: all.updatedAt });
    }
    throw new Error('unknown op: ' + op);
  } catch (err) {
    try { writeMeta_({ count: 0, updatedAt: Date.now(), pending: false, error: String(err) }); } catch (e2) {}
    return jsonOut_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e3) {}
  }
}
