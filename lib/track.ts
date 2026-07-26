export type TrackEvent = "book_call" | "whatsapp" | "chat_open" | "resume";

export function track(event: TrackEvent, detail?: string) {
  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, detail }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* no-op */
  }
}
