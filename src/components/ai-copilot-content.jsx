import { useState } from 'react';
import { Bot, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AICopilotContent({ message, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi, I'm Fin AI Copilot\nAsk me anything about this conversation." }
  ]);

  const suggestedQuestions = [
    { id: 1, text: "💡 How do I get a refund?", icon: "💡" },
    { id: 2, text: "📝 Draft a response", icon: "📝" },
  ];

  return (
    <div className="w-[400px] h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 wave-bg opacity-10" />
      <div className="relative z-50 flex flex-col h-full bg-background/95 backdrop-blur-md border">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">AI Copilot</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Details</Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
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
                "flex gap-2 animate-in fade-in slide-in-from-bottom-2",
                msg.role === 'assistant' ? 'items-start' : 'items-end'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div className={cn(
                "rounded-lg p-3 text-sm",
                msg.role === 'assistant' 
                  ? 'bg-muted' 
                  : 'bg-primary text-primary-foreground ml-auto'
              )}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Questions */}
        <div className="p-4 border-t bg-muted/50">
          <div className="text-sm font-medium mb-2">Suggested</div>
          <div className="space-y-2">
            {suggestedQuestions.map((question) => (
              <Button
                key={question.id}
                variant="outline"
                className="w-full justify-start text-sm hover:bg-accent"
                onClick={() => {
                  setMessages([...messages, 
                    { role: 'user', content: question.text },
                    { role: 'assistant', content: 'Let me help you with that...' }
                  ]);
                }}
              >
                <span className="mr-2">{question.icon}</span>
                {question.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}