import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const payload = {
      name,
      email,
      contact: subject,
      message,
      date: currentDate,
    };

    const response = await fetch(
      "https://portfolio-235a.restdb.io/rest/mails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": process.env.RESTDB_API_KEY || process.env.NEXT_PUBLIC_RESTDB_API_KEY || "",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("RestDB error:", errorText);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
