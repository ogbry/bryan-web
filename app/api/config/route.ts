import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    whatsappUrl: process.env.WHATSAPP_URL || "",
  });
}
