"""Exercise the real SQL constraints and preservation across D1 migrations."""
from pathlib import Path
import sqlite3
root = Path(__file__).resolve().parents[1]
db = sqlite3.connect(':memory:')
db.executescript((root / 'migrations/0001_feedback.sql').read_text())
db.execute("INSERT INTO feedback(id,daskam,sloka,target,category,message,revision,image_versions) VALUES('preserve',1,1,'generated','other','Existing review','old','[]')")
before = db.execute('SELECT * FROM feedback').fetchall()
db.executescript((root / 'migrations/0002_feedback_all_dasakams.sql').read_text())
assert db.execute('SELECT * FROM feedback').fetchall() == before
for chapter in (2, 38, 100):
    db.execute("INSERT INTO feedback(id,daskam,sloka,target,category,message,revision,image_versions) VALUES(?,?,1,'generated','other','New review','new','[]')", (str(chapter), chapter))
for chapter in (0, 101):
    try:
        db.execute("INSERT INTO feedback(id,daskam,sloka,target,category,message,revision,image_versions) VALUES(?,?,1,'generated','other','Bad chapter','new','[]')", (str(chapter), chapter))
    except sqlite3.IntegrityError:
        pass
    else:
        raise AssertionError('Out-of-range chapter accepted')
columns = 'id,created_at,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status'
before = db.execute(f'SELECT {columns} FROM feedback ORDER BY rowid').fetchall()
db.executescript((root / 'migrations/0003_feedback_decisions.sql').read_text())
assert db.execute(f'SELECT {columns} FROM feedback ORDER BY rowid').fetchall() == before
assert {row[0] for row in db.execute('SELECT DISTINCT decision FROM feedback')} == {'note'}
assert {row[1] for row in db.execute('PRAGMA index_list(feedback)')} >= {'feedback_review_queue', 'feedback_latest_decision'}
decision = "INSERT INTO feedback(id,daskam,sloka,target,category,message,reviewer_name,revision,image_versions,status,decision) VALUES(?,1,1,'generated','other',?,?,'new','[]',?,?)"
for row in (('approve', '', 'Reviewer', 'closed', 'approve'), ('redraw', 'Redraw it.', 'Reviewer', 'open', 'redraw'), ('small-edit', 'Small fix.', 'Reviewer', 'open', 'small-edit'), ('text-issue', 'Typo here.', 'Reviewer', 'open', 'text-issue')):
    db.execute(decision, row)
for bad in (('b1', 'Looks good.', 'Reviewer', 'closed', 'approve'), ('b2', 'ok', 'Reviewer', 'open', 'redraw'), ('b3', 'Fine.', '', 'open', 'small-edit'), ('b4', 'Fine.', 'Reviewer', 'open', 'maybe'), ('b5', '', 'x' * 61, 'closed', 'approve'), ('b6', 'x' * 2001, 'Reviewer', 'open', 'text-issue')):
    try:
        db.execute(decision, bad)
    except sqlite3.IntegrityError:
        pass
    else:
        raise AssertionError(f'Invalid decision accepted: {bad[0]}')
db.execute("INSERT INTO feedback(id,daskam,sloka,target,category,message,revision,image_versions) VALUES('plain',1,1,'generated','other','Plain note','new','[]')")
assert db.execute("SELECT decision,reviewer_name FROM feedback WHERE id='plain'").fetchone() == ('note', '')
print('Passed: feedback migrations preserve rows, accept new chapters and reviewer decisions, mark existing rows as legacy notes, and reject invalid chapters and decisions.')
