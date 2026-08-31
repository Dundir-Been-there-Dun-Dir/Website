#!/usr/bin/env bash
# Rebuild the orange cut of the tricolor variant at
# https://dundir.46-224-30-151.sslip.io/orange/ from this repo.
# Compare against /tricolor/ (flag red) and /ab/ (the accent switch).
set -euo pipefail
SRC="/root/projects/Dundr/Website"
DEST="/var/www/dundir-orange"
BASE="https://dundir.46-224-30-151.sslip.io/orange/"
cd "$SRC"
hugo --gc --minify --cleanDestinationDir \
     --config hugo.toml,hugo.orange.toml \
     -b "$BASE" -d "$DEST"
echo "deployed: $BASE"
