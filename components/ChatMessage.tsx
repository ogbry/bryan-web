"use client";

export type Message = {
  id: string;
  text: string;
  sender: "visitor" | "owner" | "system";
  timestamp: string;
  senderName?: string;
};

export default function ChatMessage({ message }: { message: Message }) {
  const isOwner = message.sender === "owner";
  const isSystem = message.sender === "system";

  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.06] px-3 py-1.5 rounded-full text-center max-w-[85%]">
          {message.text}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2 ${isOwner ? "justify-start" : "justify-end"}`}>
      {/* Avatar for owner */}
      {isOwner && (
        <img
          src="/image.jpeg"
          alt="Bryan"
          className="w-6 h-6 rounded-full object-cover flex-shrink-0 mb-1"
        />
      )}

      <div className={`flex flex-col gap-0.5 max-w-[78%] ${isOwner ? "items-start" : "items-end"}`}>
        <div
          className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
            isOwner
              ? "bg-slate-100 dark:bg-white/[0.06] text-slate-900 dark:text-slate-100 rounded-bl-sm border border-transparent dark:border-white/10"
              : "bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-br-sm shadow-[0_4px_14px_-7px_rgba(37,99,235,0.6)]"
          }`}
        >
          {message.text}
        </div>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 px-1">
          {time}
        </span>
      </div>
    </div>
  );
}
