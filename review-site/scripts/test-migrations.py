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
print('Passed: feedback migration preserves rows, accepts new chapters, rejects invalid chapter bounds.')
