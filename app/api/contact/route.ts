import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, subject, message } = body;

    // At least one reply channel is required
    if (!email?.trim() && !whatsapp?.trim()) {
      return NextResponse.json(
        { error: "Please provide an email or WhatsApp number." },
        { status: 400 }
      );
    }

    // Discord webhook URL — set this in your env (.env.local / hosting env vars):
    //   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxx/yyy
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL missing");
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 }
      );
    }

    // Rich embed so it's readable on the Discord mobile app
    const fields = [
      { name: "👤 Name", value: name || "—", inline: true },
      email?.trim()
        ? { name: "✉️ Email", value: email.trim(), inline: true }
        : null,
      whatsapp?.trim()
        ? { name: "📱 WhatsApp", value: whatsapp.trim(), inline: true }
        : null,
      { name: "📝 Subject", value: subject || "—", inline: false },
      { name: "💬 Message", value: message || "—", inline: false },
    ].filter(Boolean);

    const payload = {
      username: "Portfolio Contact",
      embeds: [
        {
          title: "📬 New portfolio message",
          color: 0x2563eb, // electric blue
          fields,
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Discord webhook error:", errorText);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
