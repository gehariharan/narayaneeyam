import json, pathlib, tomllib, urllib.request
config = tomllib.loads((pathlib.Path.home()/'.config/.wrangler/config/default.toml').read_text())
def get(path):
    request = urllib.request.Request('https://api.cloudflare.com/client/v4'+path, headers={'Authorization':'Bearer '+config['oauth_token']})
    with urllib.request.urlopen(request) as response:
        data=json.load(response)
    if not data.get('success'): raise RuntimeError('Cloudflare inspection failed')
    return data['result']
zones=get('/zones?name=gehariharan.com')
print(json.dumps({'zones':[{'id':z['id'],'name':z['name'],'status':z['status']} for z in zones]}))
for z in zones:
    print(json.dumps({'routes':get('/zones/'+z['id']+'/workers/routes')}))
print(json.dumps({'workers':[{'id':w['id']} for w in get('/accounts/d9967c9f63e9aa7685c005a62a00443c/workers/scripts')]}))
