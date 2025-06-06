import { ThemeToggle } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AICopilot } from "@/components/ai-copilot";

export function Header({ children }) {
  const navigate = useNavigate();
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-background mobile-safe-top">
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="flex items-center gap-2">
            {children}
            <span className="font-bold text-xl hidden sm:inline">BeyondChats</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="icon"
              className="sm:hidden"
              onClick={() => navigate("/contacts")}
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAiOpen(!isAiOpen)}
            >
              <Bot className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <AICopilot isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
}
