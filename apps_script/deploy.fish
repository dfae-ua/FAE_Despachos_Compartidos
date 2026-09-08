#!/usr/bin/env fish
# Deploy del backend: sube el código y actualiza el deployment público.
# Uso: ./deploy.fish "mensaje del cambio"

set DEPID AKfycbxUIqWmRu9LWTnI14NOqwLIzCAZXdFdQYhOSdXbQhVOVuVTMSZscuKZ7LLpRq0PWAhUjw
set MSG (test -n "$argv[1]"; and echo $argv[1]; or echo "deploy")

clasp push
and clasp create-deployment --deploymentId $DEPID -d $MSG
