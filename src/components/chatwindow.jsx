import { Avatar } from '@/components/ui/avatar';

export function ChatWindow({ messages = [] }) {
  return (
    <div className="p-4 space-y-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          {message.sender !== 'user' && (
            <Avatar className="h-8 w-8" />
          )}
          <div
            className={`p-3 rounded-lg max-w-[80%] ${
              message.sender === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted'
            }`}
          >
            {message.text}
            <div className="text-xs mt-1 opacity-70">
              Seen • 1min
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
