#!/usr/bin/env bash
# Rebuild the orange palette variant at
# https://dundir.46-224-30-151.sslip.io/orange/ from this repo.
# Same site, same content, alternative palette, so the two can be compared on
# real pages rather than on swatches. See assets/css/orange.css for how the
# palette was derived, and /ab/ for the accent comparison it came out of.
set -euo pipefail
SRC="/root/projects/Dundr/Website"
DEST="/var/www/dundir-orange"
BASE="https://dundir.46-224-30-151.sslip.io/orange/"
cd "$SRC"
hugo --gc --minify --cleanDestinationDir \
     --config hugo.toml,hugo.orange.toml \
     -b "$BASE" -d "$DEST"
echo "deployed: $BASE"
