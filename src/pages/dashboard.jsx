import { useNavigate } from 'react-router-dom';
import { dummyConversations } from '@/data/dummy';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Clock, MessageSquare, AlertCircle } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const urgentMessages = dummyConversations.filter(conv => conv.urgent);
  const recentMessages = dummyConversations.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Button onClick={() => navigate('/inbox')} variant="outline">
          <MessageSquare className="h-4 w-4 mr-2" />
          View All Messages
        </Button>
      </div>

      {/* Urgent Messages */}
      {urgentMessages.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center text-destructive">
            <AlertCircle className="h-5 w-5 mr-2" />
            Urgent Messages
          </h2>
          <div className="grid gap-4">
            {urgentMessages.map((conv) => (
              <div
                key={conv.id}
                onClick={() => navigate(`/inbox?conversation=${conv.id}`)}
                className="p-4 border rounded-lg bg-background hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={conv.avatarUrl} />
                    <AvatarFallback>{conv.name.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{conv.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {conv.message}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {conv.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Messages */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Recent Messages</h2>
        <div className="grid gap-4">
          {recentMessages.map((conv) => (
            <div
              key={conv.id}
              onClick={() => navigate(`/inbox?conversation=${conv.id}`)}
              className="p-4 border rounded-lg bg-background hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={conv.avatarUrl} />
                  <AvatarFallback>{conv.name.split(' ')[0][0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{conv.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {conv.message}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {conv.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}