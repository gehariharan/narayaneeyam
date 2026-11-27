-- Dasakam sign-off and captain confirmation, in a new table; feedback rows are untouched.
-- A 'signoff' row is the reviewer signing off a dasakam whose every stanza is approved on
-- its current painting. A 'confirm' row is the captain confirming that sign-off with the
-- separate captain key. Both store the exact per-stanza snapshot they were made on:
-- [{"sloka":1,"decision":"<approve id>","image_versions":"<as stored on the decision>"}].
-- Nothing here is art approval: the studio pulls a confirmation and runs art:approve.
CREATE TABLE IF NOT EXISTS signoffs (
 id TEXT PRIMARY KEY,
 created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 daskam INTEGER NOT NULL CHECK(daskam BETWEEN 1 AND 100),
 kind TEXT NOT NULL CHECK(kind IN ('signoff','confirm')),
 reviewer_name TEXT NOT NULL CHECK(length(reviewer_name)<=60 AND length(trim(reviewer_name))>=1),
 revision TEXT NOT NULL,
 stanzas TEXT NOT NULL CHECK(length(stanzas)>=2),
 signoff_id TEXT,
 CHECK((kind='signoff' AND signoff_id IS NULL) OR (kind='confirm' AND signoff_id IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS signoffs_latest ON signoffs(daskam,created_at);
