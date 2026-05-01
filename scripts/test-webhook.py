import urllib.request
import json
from datetime import datetime

webhook_url = "https://webhook.ghxmkt.com/webhook/ad43ac61-fe16-40c0-a9d0-28ce8328a370"

test_payload = {
    "event": "test_disparo",
    "timestamp": datetime.now().isoformat(),
    "source": "v0_test",
    "data": {
        "page": "protocolo_filtro_dopamina",
        "variante_slug": "v01",
        "message": "Disparo de teste do v0"
    }
}

try:
    payload_json = json.dumps(test_payload)
    payload_bytes = payload_json.encode('utf-8')
    
    req = urllib.request.Request(
        webhook_url,
        data=payload_bytes,
        headers={
            "Content-Type": "application/json"
        },
        method="POST"
    )
    
    with urllib.request.urlopen(req, timeout=10) as response:
        status = response.status
        response_data = response.read().decode('utf-8')
        print(f"✓ Status: {status}")
        print(f"✓ Resposta: {response_data}")
        print("✓ Teste enviado com sucesso!")
        
except Exception as e:
    print(f"✗ Erro: {str(e)}")
