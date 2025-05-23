import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, MessageSquare, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { contacts } from "@/data/dummy"

export function Contacts() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Contacts</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search contacts..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-4 border rounded-lg bg-background hover:bg-muted/50 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={contact.avatarUrl} />
                <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{contact.name}</h3>
                <p className="text-sm text-muted-foreground">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
              }`} />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate(`/inbox?contact=${contact.id}`)}
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}