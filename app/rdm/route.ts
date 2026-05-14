import { NextRequest, NextResponse } from "next/server"

const pages = ["/v03", "/v07"]

export async function GET(request: NextRequest) {
  const index = Math.floor(Math.random() * pages.length)
  const destination = pages[index]
  const base = request.nextUrl.origin

  const destUrl = new URL(destination, base)

  // Forward all query params (UTMs, sck, etc.) from /rdm to the destination page
  request.nextUrl.searchParams.forEach((value, key) => {
    destUrl.searchParams.set(key, value)
  })

  // Add variante_slug based on destination
  const varianteSlug = destination === "/" ? "v01" : destination.replace(/\//g, "")
  destUrl.searchParams.set("variante_slug", varianteSlug)

  return NextResponse.redirect(destUrl)
}
