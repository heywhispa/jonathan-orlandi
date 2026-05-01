import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const webhookUrl = "https://webhook.ghxmkt.com/webhook/ad43ac61-fe16-40c0-a9d0-28ce8328a370"

  const testPayload = {
    event: "test_disparo",
    timestamp: new Date().toISOString(),
    source: "v0_test",
    data: {
      page: "protocolo_filtro_dopamina",
      variante_slug: "v01",
      message: "Disparo de teste do v0"
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(testPayload)
    })

    const data = await response.text()

    return NextResponse.json({
      success: true,
      status: response.status,
      message: "Webhook disparado com sucesso",
      response: data
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido"
    }, { status: 500 })
  }
}
