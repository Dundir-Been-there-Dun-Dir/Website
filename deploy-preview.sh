#!/usr/bin/env bash
# Rebuild the dundir.46-224-30-151.sslip.io preview from this repo.
# Needs Hugo 0.147.3 extended or newer (the version CI uses). Older Hugo silently
# renders every inner page empty, see DESIGN.md.
set -euo pipefail
SRC="/root/projects/Dundr/Website"
DEST="/var/www/dundir-demo"
BASE="https://dundir.46-224-30-151.sslip.io/"
cd "$SRC"
hugo --gc --minify --cleanDestinationDir -b "$BASE" -d "$DEST"
echo "deployed: $BASE"
