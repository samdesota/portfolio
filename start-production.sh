#!/bin/bash
set -e

export PORT=${PORT:-3333}
export NITRO_PORT=${NITRO_PORT:-3333}

echo "Building production site..."
bun run build

echo "Starting production server..."
exec bun run ./.output/server/index.mjs

