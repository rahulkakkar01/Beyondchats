import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function ConversationItem({ conversation, isActive, onClick }) {
  return (
    <div 
      className={`p-4 border-b hover:bg-muted/50 cursor-pointer ${
        isActive ? 'bg-muted' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={conversation.avatarUrl} />
          <AvatarFallback>{conversation.name.split(' ')[0][0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{conversation.name}</h3>
            <span className="text-xs text-muted-foreground">{conversation.time}</span>
          </div>
          <p className="text-sm text-muted-foreground truncate">{conversation.message}</p>
          {conversation.urgent && (
            <span className="inline-block px-2 py-0.5 text-xs bg-destructive text-destructive-foreground rounded-full mt-1">
              Urgent
            </span>
          )}
        </div>
      </div>
    </div>
  )
}