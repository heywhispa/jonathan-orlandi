#!/bin/bash

curl -X POST https://webhook.ghxmkt.com/webhook/ad43ac61-fe16-40c0-a9d0-28ce8328a370 \
  -H "Content-Type: application/json" \
  -d '{
    "event": "test_disparo",
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "source": "v0_test",
    "data": {
      "page": "protocolo_filtro_dopamina",
      "variante_slug": "v01",
      "message": "Disparo de teste do v0"
    }
  }'
