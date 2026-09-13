CREATE TABLE IF NOT EXISTS feedback (
 id TEXT PRIMARY KEY,
 created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 daskam INTEGER NOT NULL CHECK(daskam IN (1,2)),
 sloka INTEGER NOT NULL CHECK(sloka BETWEEN 1 AND 10),
 target TEXT NOT NULL,
 category TEXT NOT NULL,
 message TEXT NOT NULL CHECK(length(message) BETWEEN 3 AND 2000),
 reviewer_name TEXT NOT NULL DEFAULT '',
 revision TEXT NOT NULL,
 image_versions TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'open'
);
CREATE INDEX IF NOT EXISTS feedback_review_queue ON feedback(status,daskam,sloka,created_at);
