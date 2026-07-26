import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Small allowlist so this endpoint can't be abused to post arbitrary text.
const ALLOWED_EVENTS: Record<string, { title: string; emoji: string }> = {
  book_call: { title: "Clicked “Book a Call”", emoji: "📅" },
  whatsapp: { title: "Clicked WhatsApp", emoji: "💬" },
  chat_open: { title: "Opened the chat widget", emoji: "🗨️" },
  resume: { title: "Downloaded resume", emoji: "📄" },
};

export async function POST(request: Request) {
  try {
    const { event, detail } = await request.json();

    const meta = ALLOWED_EVENTS[event as string];
    if (!meta) {
      return NextResponse.json({ error: "Unknown event" }, { status: 400 });
    }

    // Dedicated activity webhook (separate channel from contact leads).
    const webhook =
      process.env.DISCORD_TRACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    // Approximate location from Cloudflare header (no extra geo service).
    const country = request.headers.get("cf-ipcountry") || null;
    const ref = request.headers.get("referer") || null;

    const fields = [
      country ? { name: "Country", value: country, inline: true } : null,
      detail ? { name: "Detail", value: String(detail).slice(0, 200), inline: true } : null,
      ref ? { name: "Referrer", value: String(ref).slice(0, 200), inline: false } : null,
    ].filter(Boolean);

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Site Activity",
        embeds: [
          {
            title: `${meta.emoji} ${meta.title}`,
            color: 0x2563eb,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("track route error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
