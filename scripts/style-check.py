#!/usr/bin/env python3
"""Styleguide and safety rules for the Dundir site.

Run by .githooks/pre-commit on the staged files and by CI on the whole tree.
The rules are the ones /styleguide/ and DESIGN.md state in prose; this file is
where they become checks. A rule that needs an exception names the file in
ALLOW with the reason, so every exception is visible in one place.

    python3 scripts/style-check.py            # every tracked file
    python3 scripts/style-check.py --staged   # what is about to be committed
"""
import fnmatch
import re
import subprocess
import sys
import tomllib

SOURCE = ("content/", "layouts/", "i18n/", "data/", "assets/", "static/")
COPY = ("content/", "layouts/", "i18n/", "data/")
STYLE = ("assets/css/", "layouts/", "static/presentaties/")
VENDOR = ("static/presentaties/decks/*/*_files/*",)  # Quarto output, not ours

ALLOW = {
    "hex": {
        "assets/css/palettes/*": "the palette files are where colours are named",
        "assets/css/styleguide.css": "the styleguide sheet names its own palette in :root",
        "assets/css/ab.css": "record of the accent A/B, pins the old palettes on purpose",
        "layouts/ab/*": "record of the accent A/B, pins the old palettes on purpose",
        "static/presentaties/deck-theme.css": "decks not yet on the palette",
        "static/presentaties/decks/*/index.html": "decks not yet on the palette",
    },
    "font": {
        "static/presentaties/deck-theme.css": "decks not yet on Geist variables",
        "assets/css/ab.css": "record of the accent A/B",
    },
    "secret-file": {
        "credentials/dundir.kdbx": "FIXME: tracked in a public repo, remove it and purge history",
    },
}

SECRET_FILES = ("*.kdbx", "*.pem", "*.key", "*.p12", ".env", ".env.*", "id_rsa*", "id_ed25519*")
SECRET_TEXT = re.compile(
    r"sk-or-v1-[A-Za-z0-9]{20,}|sk-ant-[A-Za-z0-9_-]{20,}|sk-proj-[A-Za-z0-9_-]{20,}"
    r"|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[0-9A-Z]{16}"
    r"|-----BEGIN [A-Z ]*PRIVATE KEY-----"
)
HEX = re.compile(r"(?<![&\w])#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b")
FACES = re.compile(r"\b(Anybody|Chivo|Space Mono|Inter|Roboto|Open Sans|Montserrat|Poppins|Lato)\b")
DASH = re.compile(r"—|&mdash;|&#8212;")
BUZZ = re.compile(
    r"\b(transformeer\w*|cutting-edge|revolutie\w*|game-changer|future-proof|toekomstbestendig\w*"
    r"|best-in-class|seamless\w*|naadloos\w*|harness\w*)\b", re.I)
CLAIMS = re.compile(r"ISO[ -]?27001|voldoet aan (de )?BIO|BIO[ -]compliant", re.I)
ICONS = re.compile(r"@mui/|material-icons|fontawesome|font-awesome", re.I)


def tracked(staged):
    if staged:
        out = git("diff", "--cached", "--name-only", "--diff-filter=ACMR")
    else:
        out = git("ls-files")
    return [p for p in out.splitlines() if p]


def git(*args):
    return subprocess.run(("git",) + args, capture_output=True, text=True, check=True).stdout


def read(path, staged):
    try:
        if staged:
            data = subprocess.run(("git", "show", ":" + path), capture_output=True, check=True).stdout
        else:
            data = open(path, "rb").read()
    except (OSError, subprocess.CalledProcessError):
        return None
    if b"\0" in data[:4096]:
        return None
    return data.decode("utf-8", "replace")


def allowed(rule, path):
    return any(fnmatch.fnmatch(path, pat) for pat in ALLOW.get(rule, {}))


def under(path, roots):
    return path.startswith(roots)


def check(paths, staged):
    errors = []

    def report(path, line, rule, msg):
        errors.append(f"{path}:{line}: [{rule}] {msg}")

    for path in paths:
        if any(fnmatch.fnmatch(path, pat) for pat in VENDOR):
            continue
        name = path.rsplit("/", 1)[-1]
        if any(fnmatch.fnmatch(name, pat) for pat in SECRET_FILES) and not allowed("secret-file", path):
            report(path, 0, "secret-file", "credential file in the repo; keep it out of git")
        text = read(path, staged)
        if text is None:
            continue
        css_or_html = path.endswith((".css", ".html"))
        for n, line in enumerate(text.splitlines(), 1):
            if SECRET_TEXT.search(line):
                report(path, n, "secret", "looks like an API key or private key")
            if not under(path, SOURCE):
                continue
            if under(path, COPY):
                if DASH.search(line):
                    report(path, n, "em-dash", "no em-dashes; use a colon, comma or full stop")
                m = BUZZ.search(line)
                if m:
                    report(path, n, "buzzword", f"banned word '{m.group(0)}'")
                m = CLAIMS.search(line)
                if m:
                    report(path, n, "claim", f"'{m.group(0)}' is a certification we do not hold")
            if "salesteq" in line.lower():
                report(path, n, "name", "the site never names Salesteq")
            if under(path, STYLE) and css_or_html:
                if HEX.search(line) and "theme-color" not in line and not allowed("hex", path):
                    report(path, n, "hex", "raw colour; name it in a palette and use a role variable")
                m = FACES.search(line)
                if m and not path.startswith("assets/css/fonts.css"):
                    report(path, n, "font", f"'{m.group(0)}': the site sets Geist and Geist Mono only")
                if path.endswith(".css") and not path.endswith("fonts.css") \
                        and "@font-face" not in line \
                        and re.search(r"font-family\s*:(?!\s*(var\(|inherit))", line) \
                        and not allowed("font", path):
                    report(path, n, "font", "font-family through a font variable (--disp, --body, --data)")
            if under(path, ("layouts/",)) and not path.startswith("layouts/styleguide/") and ICONS.search(line):
                report(path, n, "icon", "icons come from partial icon.html (Lucide)")

    if not staged or any(p.startswith("i18n/") for p in paths):
        keys = {}
        for lang in ("en", "nl", "de"):
            src = read(f"i18n/{lang}.toml", staged)
            keys[lang] = set(tomllib.loads(src)) if src else set()
        for lang in ("nl", "de"):
            for k in sorted(keys["en"] - keys[lang]):
                report(f"i18n/{lang}.toml", 0, "i18n", f"missing key '{k}' (present in en)")
            for k in sorted(keys[lang] - keys["en"]):
                report(f"i18n/{lang}.toml", 0, "i18n", f"key '{k}' is not in en")
    return errors


def main():
    staged = "--staged" in sys.argv
    errors = check(tracked(staged), staged)
    for e in errors:
        print(e)
    if errors:
        print(f"\nstyle-check: {len(errors)} problem(s). Rules: scripts/style-check.py, /styleguide/, DESIGN.md")
        return 1
    print("style-check: ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
