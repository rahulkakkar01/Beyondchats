import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Plus, MessageSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"

const contactsList = [
	{
		id: 1,
		name: "Alex Thompson",
		email: "alex.t@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
		status: "online",
	},
	{
		id: 2,
		name: "Sarah Wilson",
		email: "sarah.w@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
		status: "offline",
	},
	{
		id: 3,
		name: "Michael Chen",
		email: "michael.c@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
		status: "online",
	},
	{
		id: 4,
		name: "Emma Rodriguez",
		email: "emma.r@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
		status: "online",
	},
	{
		id: 5,
		name: "James Kumar",
		email: "james.k@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
		status: "offline",
	},
	{
		id: 6,
		name: "Sophia Patel",
		email: "sophia.p@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
		status: "online",
	},
	{
		id: 7,
		name: "David Kim",
		email: "david.k@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
		status: "offline",
	},
	{
		id: 8,
		name: "Lisa Wang",
		email: "lisa.w@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
		status: "online",
	},
	{
		id: 9,
		name: "Carlos Martinez",
		email: "carlos.m@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
		status: "offline",
	},
	{
		id: 10,
		name: "Aisha Singh",
		email: "aisha.s@example.com",
		avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
		status: "online",
	},
]

export function Contacts() {
	const navigate = useNavigate()

	const startChat = (contactId) => {
		navigate(`/inbox?contact=${contactId}`)
	}

	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Contacts</h1>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					Add Contact
				</Button>
			</div>

			<div className="grid gap-4">
				{contactsList.map((contact) => (
					<div
						key={contact.id}
						className="flex items-center justify-between p-4 border rounded-lg bg-background"
					>
						<div className="flex items-center gap-4">
							<Avatar className="h-10 w-10">
								<AvatarImage src={contact.avatarUrl} />
								<AvatarFallback>
									{contact.name.split(" ").map((n) => n[0]).join("")}
								</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="font-medium">{contact.name}</h3>
								<p className="text-sm text-muted-foreground">
									{contact.email}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div
								className={`w-2 h-2 rounded-full ${
									contact.status === "online"
										? "bg-green-500"
										: "bg-gray-300"
								}`}
							/>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => startChat(contact.id)}
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
