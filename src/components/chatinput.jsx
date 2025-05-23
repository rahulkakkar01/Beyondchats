import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Zap, MoreHorizontal, Bot } from "lucide-react";
import { AICopilotContent } from "./ai-copilot-content";

export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showAI, setShowAI] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="relative">
      {showAI && (
        <div className="absolute bottom-full right-0 mb-4">
          <AICopilotContent
            message={message}
            onClose={() => setShowAI(false)}
          />
        </div>
      )}

      <div className="absolute inset-0 wave-bg opacity-10" />
      <form onSubmit={handleSubmit} className="relative z-10 p-4">
        <div className="flex gap-2 items-center glass-effect rounded-lg p-2">
          <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="h-4 w-4" />
          </Button>
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 px-2 h-8"
          />
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowAI(!showAI)}
            >
              <Bot className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <Zap className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
