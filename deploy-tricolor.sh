#!/usr/bin/env bash
# Rebuild the tricolor variant at https://dundir.46-224-30-151.sslip.io/tricolor/
# from this repo. Same site, same content, alternative palette, so the two can be
# compared on real pages rather than on swatches. See assets/css/tricolor.css.
set -euo pipefail
SRC="/root/projects/Dundr/Website"
DEST="/var/www/dundir-tricolor"
BASE="https://dundir.46-224-30-151.sslip.io/tricolor/"
cd "$SRC"
hugo --gc --minify --cleanDestinationDir \
     --config hugo.toml,hugo.tricolor.toml \
     -b "$BASE" -d "$DEST"
echo "deployed: $BASE"
