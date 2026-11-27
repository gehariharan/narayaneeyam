// The studio's per-dasakam review work list, art/feedback/dNNN.json.
// It is append-only: entries are only ever added, never edited or removed, so the
// history of every note (and every status it passed through) stays in Git.
//
// Entry kinds:
//   note              a reviewer request pulled from D1 (status starts 'open')
//   status            a later status for one note: being-fixed, fixed (image or text), confirmed
//   signoff           the reviewer signed off the dasakam (exact per-stanza snapshot)
//   captain-confirmed the captain confirmed that sign-off with the captain key
import fs from 'node:fs/promises';
import path from 'node:path';

export const NOTE_TYPES = ['note', 'redraw', 'small-edit', 'text-issue'];
export const STATUSES = ['open', 'being-fixed', 'fixed', 'confirmed'];
// Which status may follow which. Image fixes come only from a batch's answers_notes; confirmed
// only from the reviewer's approval pulled from D1.
export const NEXT = { open: ['being-fixed', 'fixed'], 'being-fixed': ['fixed'], fixed: ['confirmed'], confirmed: [] };

export const feedbackPath = (root, daskam) => path.join(root, 'art/feedback', `d${String(daskam).padStart(3, '0')}.json`);
export const emptyLog = daskam => ({ schema_version: 1, daskam, entries: [] });

export async function readLog(root, daskam) {
  let text;
  try { text = await fs.readFile(feedbackPath(root, daskam), 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return emptyLog(daskam); throw error; }
  const log = JSON.parse(text);
  if (log.schema_version !== 1 || log.daskam !== daskam || !Array.isArray(log.entries)) throw new Error(`Invalid review work list for D${String(daskam).padStart(3, '0')}`);
  return log;
}

// Writes the log only if every entry already on disk is still there, unchanged and in order.
export async function appendLog(root, daskam, log) {
  const before = await readLog(root, daskam);
  const kept = log.schema_version === before.schema_version && log.daskam === before.daskam && log.entries.length >= before.entries.length
    && before.entries.every((entry, i) => JSON.stringify(entry) === JSON.stringify(log.entries[i]));
  if (!kept) throw new Error(`Refusing to rewrite earlier entries in ${path.relative(root, feedbackPath(root, daskam))}`);
  if (log.entries.length === before.entries.length) return false;
  await fs.mkdir(path.dirname(feedbackPath(root, daskam)), { recursive: true });
  await fs.writeFile(feedbackPath(root, daskam), JSON.stringify(log, null, 2) + '\n');
  return true;
}

export const notesOf = log => log.entries.filter(entry => entry.kind === 'note');
export const noteById = (log, id) => notesOf(log).find(entry => entry.id === id);
// The latest status entry for a note, or the note itself while it is still open.
export function lastStatus(log, id) {
  const note = noteById(log, id);
  if (!note) return null;
  return log.entries.filter(entry => entry.kind === 'status' && entry.note === id).at(-1) || note;
}
export const statusOf = (log, id) => lastStatus(log, id)?.status ?? null;
export const mattesOf = note => (note.images || []).filter(image => image.role === 'matte');

// What the card shows for one stanza of the current selection: the notes a fix answers and,
// for a new painting, the earlier painting the note was about (for the before/after toggle).
// Confirmed notes are done and no longer shown; unknown or misplaced note ids are an error.
export function rowFix(log, daskam, stanza, matte) {
  const where = `D${String(daskam).padStart(3, '0')} S${String(stanza).padStart(3, '0')}`;
  const answered = matte?.answers_notes;
  if (answered !== undefined && (!Array.isArray(answered) || answered.some(id => typeof id !== 'string' || !id))) throw new Error(`answers_notes must be a list of note ids: ${where}`);
  const notes = [];
  let previous = null;
  for (const id of answered || []) {
    const note = noteById(log, id);
    if (!note || note.stanza !== stanza) throw new Error(`answers_notes names a note that is not on ${where}: ${id}`);
    if (statusOf(log, id) === 'confirmed') continue;
    notes.push(id);
    const before = mattesOf(note)[0];
    if (before && before.version !== matte.version) {
      if (!before.file || !before.sha256) throw new Error(`Note ${id} has no resolved painting checksum for the before view: ${where}`);
      if (!previous || note.at > previous.at) previous = { at: note.at, file: before.file, sha256: before.sha256, version: before.version };
    }
  }
  // A text-only fix leaves the painting as it is; the note shows as fixed until the reviewer re-checks.
  for (const note of notesOf(log)) {
    if (note.stanza !== stanza || notes.includes(note.id)) continue;
    const last = lastStatus(log, note.id);
    if (last.status === 'fixed' && last.fix === 'text') notes.push(note.id);
  }
  if (!notes.length) return null;
  return { notes, kind: previous ? 'image' : (answered?.some(id => notes.includes(id)) ? 'image' : 'text'), version: matte?.version ?? null, previous: previous && { file: previous.file, sha256: previous.sha256, version: previous.version } };
}
