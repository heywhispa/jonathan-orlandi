// Script para testar webhook do n8n
import https from "https";

const webhookUrl = "https://webhook.ghxmkt.com/webhook/ad43ac61-fe16-40c0-a9d0-28ce8328a370";

const testPayload = {
  event: "test_disparo",
  timestamp: new Date().toISOString(),
  source: "v0_test",
  data: {
    page: "protocolo_filtro_dopamina",
    variante_slug: "v01",
    message: "Disparo de teste do v0"
  }
};

const payloadString = JSON.stringify(testPayload);

const url = new URL(webhookUrl);
const options = {
  hostname: url.hostname,
  port: 443,
  path: url.pathname + url.search,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payloadString)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = "";
  
  res.on("data", (chunk) => {
    data += chunk;
  });
  
  res.on("end", () => {
    console.log("Resposta:", data);
    console.log("✓ Teste enviado com sucesso!");
  });
});

req.on("error", (err) => {
  console.error("✗ Erro:", err.message);
  process.exit(1);
});

req.write(payloadString);
req.end();
