#!/usr/bin/env python3
"""Deploy the built Astro site to Cloudflare Pages using the stored
custom.cloudflare connector credential (surrogate -> real token swap happens
at the egress proxy, so the raw token never appears here).

Usage: python3 scripts/cf-pages-deploy.py [--project affiliatebharat]
"""
import json
import os
import subprocess
import sys
import urllib.parse
import urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import dynamic_credential_entry, add_surrogate_to_request

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main() -> int:
    project = "affiliatebharat"
    if "--project" in sys.argv:
        project = sys.argv[sys.argv.index("--project") + 1]

    entry = dynamic_credential_entry("custom.cloudflare", entry_name="access_token")
    surrogate = entry["surrogate"] if isinstance(entry, dict) else entry

    # Resolve account id (single account expected; take the first)
    req = urllib.request.Request("https://api.cloudflare.com/client/v4/accounts?per_page=5")
    add_surrogate_to_request(req, "custom.cloudflare", entry_name="access_token",
                             allowed_hosts=["api.cloudflare.com"])
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    accounts = data.get("result", [])
    if not accounts:
        print("ERROR: no Cloudflare accounts found", file=sys.stderr)
        return 1
    account_id = accounts[0]["id"]
    print(f"Using Cloudflare account: {accounts[0].get('name')} ({account_id[:8]}...)")

    env = dict(os.environ)
    env["CLOUDFLARE_API_TOKEN"] = surrogate
    env["CLOUDFLARE_ACCOUNT_ID"] = account_id

    wrangler = os.path.join(REPO, "node_modules", ".bin", "wrangler")
    if not os.path.exists(wrangler):
        print("ERROR: wrangler not installed. Run: npm i -D wrangler", file=sys.stderr)
        return 1

    dist = os.path.join(REPO, "dist")
    if not os.path.isdir(dist):
        print("ERROR: dist/ missing. Run: npm run build", file=sys.stderr)
        return 1

    cmd = [wrangler, "pages", "deploy", dist, "--project-name", project]
    print("Running:", " ".join(cmd))
    proc = subprocess.run(cmd, cwd=REPO, env=env)
    return proc.returncode


if __name__ == "__main__":
    sys.exit(main())
