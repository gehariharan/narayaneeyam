-- Add a reviewer decision to each feedback row while preserving every existing row.
-- Existing rows become decision 'note' (shown as "Note (legacy)"). Approve carries no note;
-- the other decisions keep the original 3–2,000 character note rule. A decision always
-- names its reviewer. This records the reviewer's decision only; art approval stays in
-- art/approved/ and is never written from here.
CREATE TABLE feedback_decisions (
 id TEXT PRIMARY KEY,
 created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 daskam INTEGER NOT NULL CHECK(daskam BETWEEN 1 AND 100),
 sloka INTEGER NOT NULL CHECK(sloka BETWEEN 1 AND 100),
 target TEXT NOT NULL,
 category TEXT NOT NULL,
 message TEXT NOT NULL,
 reviewer_name TEXT NOT NULL DEFAULT '',
 revision TEXT NOT NULL,
 image_versions TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'open',
 decision TEXT NOT NULL DEFAULT 'note' CHECK(decision IN ('note','approve','redraw','small-edit','text-issue')),
 CHECK((decision='approve' AND message='') OR (decision<>'approve' AND length(message) BETWEEN 3 AND 2000)),
 CHECK(length(reviewer_name)<=60 AND (decision='note' OR length(trim(reviewer_name))>=1))
);
INSERT INTO feedback_decisions (id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,decision)
 SELECT id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,'note' FROM feedback ORDER BY rowid;
DROP TABLE feedback;
ALTER TABLE feedback_decisions RENAME TO feedback;
CREATE INDEX feedback_review_queue ON feedback(status,daskam,sloka,created_at);
CREATE INDEX feedback_latest_decision ON feedback(daskam,sloka,created_at);
