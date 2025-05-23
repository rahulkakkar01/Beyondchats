import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChatWindow } from '@/components/chatwindow';
import { ChatInput } from '@/components/chatinput';
import { Clock, MoreVertical, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { dummyConversations, dummyMessages } from '@/data/dummy';
import { cn } from '@/lib/utils';

export function Inbox() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [conversations] = useState(dummyConversations);
  const [filteredConversations, setFilteredConversations] = useState(conversations);
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize messages for each conversation
  useEffect(() => {
    const initialMessages = {};
    conversations.forEach(conv => {
      initialMessages[conv.id] = dummyMessages.filter(msg => msg.conversationId === conv.id);
    });
    setMessages(initialMessages);
  }, []);

  // Handle search query from URL and header search
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }

    const handleSearchUpdate = (event) => {
      setSearchQuery(event.detail);
    };

    window.addEventListener('search-query-updated', handleSearchUpdate);
    return () => window.removeEventListener('search-query-updated', handleSearchUpdate);
  }, [searchParams]);

  // Filter conversations based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredConversations(conversations);
      return;
    }

    const filtered = conversations.filter(conv =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.message.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredConversations(filtered);

    // If we have filtered results and no active conversation, set the first result as active
    if (filtered.length && !activeConversation) {
      setActiveConversation(filtered[0]);
    }
  }, [searchQuery, conversations, activeConversation]);

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'agent',
      timestamp: 'Just now',
      seen: false,
      conversationId: activeConversation.id
    };

    setMessages(prev => ({
      ...prev,
      [activeConversation.id]: [...(prev[activeConversation.id] || []), newMessage]
    }));
  };

  return (
    <div className="flex h-full">
      {/* Left sidebar with conversations */}
      <div className={cn(
        "w-full sm:w-80 border-r bg-background",
        "fixed sm:relative inset-y-0 left-0 z-20",
        "transform transition-transform duration-200 ease-in-out",
        !isSidebarOpen && "-translate-x-full sm:translate-x-0"
      )}>
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => {
                setActiveConversation(conv);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "p-4 border-b cursor-pointer",
                "hover:bg-muted/50",
                activeConversation?.id === conv.id && "bg-muted"
              )}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={conv.avatarUrl} />
                  <AvatarFallback>{conv.name.split(' ')[0][0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{conv.name}</h3>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.message}</p>
                  {conv.urgent && (
                    <span className="inline-block px-2 py-0.5 text-xs bg-destructive text-destructive-foreground rounded-full mt-1">
                      Urgent
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col relative z-0">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto">
          {activeConversation ? (
            <>
              <div className="border-b p-4 flex items-center justify-between bg-background">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={activeConversation.avatarUrl} />
                    <AvatarFallback>{activeConversation.name.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">{activeConversation.name}</h2>
                    <span className="text-sm text-muted-foreground">
                      {activeConversation.status || 'Active now'}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ChatWindow messages={messages[activeConversation.id] || []} />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              No conversations found
            </div>
          )}
        </div>

        {/* Chat input */}
        <div className="relative z-10">
          {activeConversation && <ChatInput onSendMessage={handleSendMessage} />}
        </div>
      </div>
    </div>
  );
}
