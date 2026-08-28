/**
 * ЕЦТ Скрипты — API для Google Таблицы
 * Хранит весь JSON в ячейке A1 листа "data" (или первого листа).
 */

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('data');
  if (!sheet) sheet = ss.getSheets()[0];
  return sheet;
}

function doGet(e) {
  try {
    var sheet = getSheet_();
    var raw = String(sheet.getRange('A1').getValue() || '');
    if (!raw) raw = '{"scripts":[],"updatedAt":0,"version":1}';
    return ContentService
      .createTextOutput(raw)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var body = (e && e.postData && e.postData.contents) ? e.postData.contents : '';
    if (!body) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: 'empty body' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    // Проверка, что это JSON со scripts
    var parsed = JSON.parse(body);
    if (!parsed || typeof parsed !== 'object') throw new Error('invalid json');
    if (!Array.isArray(parsed.scripts)) parsed.scripts = [];
    parsed.updatedAt = Date.now();
    parsed.version = 1;

    var sheet = getSheet_();
    sheet.getRange('A1').setValue(JSON.stringify(parsed));
    // Для удобства просмотра в таблице — краткая сводка
    sheet.getRange('B1').setValue('Скриптов: ' + parsed.scripts.length);
    sheet.getRange('C1').setValue(new Date().toISOString());

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, count: parsed.scripts.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
