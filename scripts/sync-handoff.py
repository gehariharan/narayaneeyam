"""Mirror the studio and git-visible code, preserving changed destination versions.

This copies to the local OneDrive directory; run the OneDrive client afterward.
It deliberately excludes the three D002 references previously removed in cloud.
"""
from pathlib import Path
import argparse, datetime, hashlib, json, shutil, subprocess

parser=argparse.ArgumentParser()
parser.add_argument('--target',required=True)
parser.add_argument('--apply',action='store_true')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
target=Path(args.target).resolve()
assert not target.is_relative_to(root) and not root.is_relative_to(target)
excluded={f'intake/D002/{n:03d}.jpg' for n in [11,12,13]}
files=set(subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=root).decode().split('\0'))-{''}
for folder in ['artifacts','intake','content','art','schemas']:
    files.update(str(p.relative_to(root)) for p in (root/folder).rglob('*') if p.is_file())
files-=excluded
files={p for p in files if (root/p).is_file()}
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')
def sha(p):
    h=hashlib.sha256()
    with p.open('rb') as stream:
        for chunk in iter(lambda:stream.read(1024*1024),b''):h.update(chunk)
    return h.hexdigest()
entries=[];copied=0;backed_up=0
for rel in sorted(files):
    src=root/rel;dst=target/rel
    assert not src.is_symlink(),f'Refusing symlink: {rel}'
    digest=sha(src)
    old=sha(dst) if dst.exists() else None
    entries.append({'path':rel,'sha256':digest,'bytes':src.stat().st_size})
    if old==digest:continue
    copied+=1
    if old:
        backed_up+=1
        if args.apply:
            history=target/'_history'/('handoff-'+stamp)/rel
            history.parent.mkdir(parents=True,exist_ok=True)
            shutil.copyfile(dst,history)
            assert sha(history)==old
    if args.apply:
        dst.parent.mkdir(parents=True,exist_ok=True)
        shutil.copyfile(src,dst)
        assert sha(dst)==digest
report={'created_at':stamp,'source_of_truth':'local studio','files':entries,'excluded_local_only':sorted(excluded),'copied':copied,'destination_versions_preserved':backed_up,'remote_deletions':False}
if args.apply:
    report_path=root/'artifacts'/f'handoff-sync-{stamp}.json'
    report_path.write_text(json.dumps(report,indent=2)+'\n')
    shutil.copyfile(report_path,target/report_path.name)
print(json.dumps({'apply':args.apply,'files':len(entries),'copied':copied,'destination_versions_preserved':backed_up,'manifest':str(report_path) if args.apply else None}))
