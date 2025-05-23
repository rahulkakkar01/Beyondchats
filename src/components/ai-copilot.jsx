import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, X, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function AICopilot({ isOpen, onClose }) {
  console.log('AI Copilot isOpen:', isOpen); // Add this debug log

  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi, I'm Fin AI Copilot\nAsk me anything about this conversation." }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setMessages([...messages, 
        { role: 'user', content: query },
        { role: 'assistant', content: 'Let me help you with that...' }
      ]);
      setQuery("");
    }
  };

  return (
    <div 
      className={cn(
        "fixed right-0 top-0 bottom-0 w-[400px] transition-transform duration-200 ease-in-out overflow-hidden z-50",
        !isOpen && "translate-x-full"
      )}
    >
      {/* Wave Background */}
      <div className="absolute inset-0 wave-bg opacity-10" />

      {/* Content */}
      <div className="relative z-[51] flex flex-col h-full glass-effect">
        {/* Header */}
        <div className="flex items-center justify-between p-4 glass-effect">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">AI Copilot</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Details</Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={cn(
                "flex gap-2 fade-in",
                msg.role === 'assistant' ? 'items-start' : 'items-end'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div className={cn(
                "max-w-[80%] rounded-lg p-3",
                msg.role === 'assistant' 
                  ? 'bg-muted' 
                  : 'bg-primary text-primary-foreground'
              )}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Questions */}
        <div className="p-4 glass-effect">
          <div className="text-sm font-medium mb-2">Suggested</div>
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start text-sm"
              onClick={() => {
                setMessages([...messages, 
                  { role: 'user', content: '💡 How do I get a refund?' },
                  { role: 'assistant', content: 'To get a refund, please provide your order number and reason for the refund. I\'ll help guide you through the process.' }
                ]);
              }}
            >
              💡 How do I get a refund?
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-sm"
              onClick={() => {
                setMessages([...messages, 
                  { role: 'user', content: '📝 Draft a response' },
                  { role: 'assistant', content: 'I\'ll help you draft a professional response. What would you like to communicate?' }
                ]);
              }}
            >
              📝 Draft a response
            </Button>
          </div>
        </div>

        {/* Query Input */}
        <form onSubmit={handleSubmit} className="p-4 glass-effect">
          <div className="flex gap-2 items-center rounded-lg p-2 bg-background/50 backdrop-blur">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask AI Copilot..."
              className="flex-1 border-0 bg-transparent focus-visible:ring-0"
            />
            <Button type="submit" size="icon" variant="ghost">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}