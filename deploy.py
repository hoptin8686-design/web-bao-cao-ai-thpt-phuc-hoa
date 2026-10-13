import os
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

GIT = r'C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd\git.exe'
GH = r'C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin\gh.exe'
CWD = r'd:\Du-an-web\web-bao-cao-ai-thpt-phuc-hoa'

env = os.environ.copy()
env['PATH'] = os.path.dirname(GIT) + ';' + os.path.dirname(GH) + ';' + env.get('PATH', '')

def run_cmd(args):
    print("RUNNING:", " ".join(args))
    r = subprocess.run(args, cwd=CWD, env=env, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if r.stdout:
        print("STDOUT:", r.stdout.strip())
    if r.stderr:
        print("STDERR:", r.stderr.strip())
    return r.returncode

print("=== BẮT ĐẦU QUY TRÌNH ĐẨY LÊN GITHUB & VERCEL ===")

# 1. git init & config
run_cmd([GIT, 'init'])
run_cmd([GIT, 'config', 'user.name', 'hoptin8686-design'])
run_cmd([GIT, 'config', 'user.email', 'hoptin8686@gmail.com'])
run_cmd([GIT, 'branch', '-M', 'main'])

# 2. git add & commit
run_cmd([GIT, 'add', '.'])
commit_code = run_cmd([GIT, 'commit', '-m', 'feat: Khoi tao He thong Bao cao Nghien cuu Giai phap AI THPT Phuc Hoa'])

# 3. Create repo on GitHub or push
print("=== TẠO VÀ ĐẨY REPOSITORY LÊN GITHUB ===")
create_code = run_cmd([GH, 'repo', 'create', 'web-bao-cao-ai-thpt-phuc-hoa', '--public', '--source=.', '--remote=origin', '--push'])
if create_code != 0:
    print("Repo có thể đã tồn tại, tiến hành push trực tiếp...")
    run_cmd([GIT, 'remote', 'set-url', 'origin', 'https://github.com/hoptin8686-design/web-bao-cao-ai-thpt-phuc-hoa.git'])
    run_cmd([GIT, 'push', '-u', 'origin', 'main'])

print("=== HOÀN TẤT ĐẨY LÊN GITHUB! VERCEL ĐANG TỰ ĐỘNG TRIỂN KHAI ===")
