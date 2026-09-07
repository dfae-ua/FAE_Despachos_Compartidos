#!/usr/bin/env fish
# Deploy del backend: sube el código y actualiza el deployment público.
# Uso: ./deploy.fish "mensaje del cambio"

set DEPID AKfycbw-gqFeNIM3p6iiTsxF7cY1kdAsR-cvP82K8biZNJBjKItbNSZsKnPwuBTROlkvOl23Tg
set MSG (test -n "$argv[1]"; and echo $argv[1]; or echo "deploy")

clasp push
and clasp create-deployment --deploymentId $DEPID -d $MSG
