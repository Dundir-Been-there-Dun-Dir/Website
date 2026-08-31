#!/usr/bin/env bash
# Rebuild the massa variant at https://dundir.46-224-30-151.sslip.io/massa/
# from this repo. Same site, same content, the palette the site shipped on before
# Oranje, so the two stay comparable on real pages. See assets/css/palettes/.
set -euo pipefail
SRC="/root/projects/Dundr/Website"
DEST="/var/www/dundir-massa"
BASE="https://dundir.46-224-30-151.sslip.io/massa/"
cd "$SRC"
hugo --gc --minify --cleanDestinationDir \
     --config hugo.toml,hugo.massa.toml \
     -b "$BASE" -d "$DEST"
echo "deployed: $BASE"
