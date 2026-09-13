-- Preserve all feedback while widening the original two-chapter constraint.
CREATE TABLE feedback_expanded (
 id TEXT PRIMARY KEY,
 created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 daskam INTEGER NOT NULL CHECK(daskam BETWEEN 1 AND 100),
 sloka INTEGER NOT NULL CHECK(sloka BETWEEN 1 AND 100),
 target TEXT NOT NULL,
 category TEXT NOT NULL,
 message TEXT NOT NULL CHECK(length(message) BETWEEN 3 AND 2000),
 reviewer_name TEXT NOT NULL DEFAULT '',
 revision TEXT NOT NULL,
 image_versions TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'open'
);
INSERT INTO feedback_expanded SELECT * FROM feedback;
DROP TABLE feedback;
ALTER TABLE feedback_expanded RENAME TO feedback;
CREATE INDEX feedback_review_queue ON feedback(status,daskam,sloka,created_at);
