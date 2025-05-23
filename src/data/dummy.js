export const contacts = [
  {
    id: 1,
    name: "Luis Easton",
    email: "luis@github.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luis",
    status: "online",
    company: "Github"
  },
  {
    id: 2,
    name: "Ivan Miller",
    email: "ivan@nike.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
    status: "offline",
    company: "Nike"
  },
  {
    id: 3,
    name: "Sarah Chen",
    email: "sarah.chen@apple.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    status: "online",
    company: "Apple"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    email: "m.rodriguez@microsoft.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    status: "online",
    company: "Microsoft"
  },
  {
    id: 5,
    name: "Emma Watson",
    email: "emma.w@google.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    status: "offline",
    company: "Google"
  },
  {
    id: 6,
    name: "James Wilson",
    email: "jwilson@amazon.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    status: "online",
    company: "Amazon"
  },
  {
    id: 7,
    name: "Sophia Lee",
    email: "sophia.lee@tesla.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    status: "online",
    company: "Tesla"
  },
  {
    id: 8,
    name: "David Kim",
    email: "david.kim@samsung.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    status: "offline",
    company: "Samsung"
  },
  {
    id: 9,
    name: "Anna Martinez",
    email: "a.martinez@meta.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    status: "online",
    company: "Meta"
  },
  {
    id: 10,
    name: "Tom Anderson",
    email: "tom.anderson@intel.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    status: "offline",
    company: "Intel"
  }
];

export const dummyConversations = contacts.map(contact => ({
  id: contact.id,
  name: `${contact.name} - ${contact.company}`,
  message: contact.id === 1 ? "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened." :
          contact.id === 2 ? "Hi there, I have a question about the API integration" :
          contact.id === 3 ? "Could you help me with the latest iOS update?" :
          contact.id === 4 ? "Looking to discuss the new Azure features" :
          contact.id === 5 ? "Quick question about the SEO implementation" :
          contact.id === 6 ? "Need assistance with AWS deployment" :
          contact.id === 7 ? "Can we schedule a call about the charging network?" :
          contact.id === 8 ? "Having issues with the latest firmware update" :
          contact.id === 9 ? "Questions about the new VR implementation" :
          "Need help with processor compatibility",
  time: contact.id === 1 ? "45m" :
        contact.id === 2 ? "30m" :
        contact.id === 3 ? "1h" :
        contact.id === 4 ? "2h" :
        contact.id === 5 ? "3h" :
        contact.id === 6 ? "4h" :
        contact.id === 7 ? "5h" :
        contact.id === 8 ? "6h" :
        contact.id === 9 ? "7h" :
        "8h",
  avatarUrl: contact.avatarUrl,
  status: contact.status,
  urgent: [2, 5, 7].includes(contact.id) // Making some conversations urgent
}));

export const dummyMessages = [
  {
    id: 1,
    conversationId: 1,
    text: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
    sender: "user",
    timestamp: "1min ago",
    seen: true
  },
  {
    id: 2,
    conversationId: 1,
    text: "Let me just look into this for you, Luis.",
    sender: "agent",
    timestamp: "1min ago",
    seen: true
  },
  {
    id: 3,
    conversationId: 2,
    text: "Hi there, I have a question about the API integration",
    sender: "user",
    timestamp: "30m ago",
    seen: true
  },
  {
    id: 4,
    conversationId: 2,
    text: "Sure, I can help with that. What seems to be the problem?",
    sender: "agent",
    timestamp: "29m ago",
    seen: true
  },
  {
    id: 5,
    conversationId: 3,
    text: "Could you help me with the latest iOS update?",
    sender: "user",
    timestamp: "1h ago",
    seen: true
  },
  {
    id: 6,
    conversationId: 3,
    text: "Of course! What issue are you facing with the update?",
    sender: "agent",
    timestamp: "59min ago",
    seen: true
  },
  {
    id: 7,
    conversationId: 4,
    text: "Looking to discuss the new Azure features",
    sender: "user",
    timestamp: "2h ago",
    seen: true
  },
  {
    id: 8,
    conversationId: 4,
    text: "Absolutely, we have some exciting new features. Let's schedule a time to talk.",
    sender: "agent",
    timestamp: "1h 55min ago",
    seen: true
  },
  {
    id: 9,
    conversationId: 5,
    text: "Quick question about the SEO implementation",
    sender: "user",
    timestamp: "3h ago",
    seen: true
  },
  {
    id: 10,
    conversationId: 5,
    text: "Sure, I can provide some insights. What do you need help with?",
    sender: "agent",
    timestamp: "2h 55min ago",
    seen: true
  },
  {
    id: 11,
    conversationId: 6,
    text: "Need assistance with AWS deployment",
    sender: "user",
    timestamp: "4h ago",
    seen: true
  },
  {
    id: 12,
    conversationId: 6,
    text: "I'm here to help. What part of the deployment are you stuck on?",
    sender: "agent",
    timestamp: "3h 55min ago",
    seen: true
  },
  {
    id: 13,
    conversationId: 7,
    text: "Can we schedule a call about the charging network?",
    sender: "user",
    timestamp: "5h ago",
    seen: true
  },
  {
    id: 14,
    conversationId: 7,
    text: "Yes, let's set up a call. When are you available?",
    sender: "agent",
    timestamp: "4h 55min ago",
    seen: true
  },
  {
    id: 15,
    conversationId: 8,
    text: "Having issues with the latest firmware update",
    sender: "user",
    timestamp: "6h ago",
    seen: true
  },
  {
    id: 16,
    conversationId: 8,
    text: "I can help with firmware issues. What seems to be the problem?",
    sender: "agent",
    timestamp: "5h 55min ago",
    seen: true
  },
  {
    id: 17,
    conversationId: 9,
    text: "Questions about the new VR implementation",
    sender: "user",
    timestamp: "7h ago",
    seen: true
  },
  {
    id: 18,
    conversationId: 9,
    text: "Happy to answer any questions. What do you need to know?",
    sender: "agent",
    timestamp: "6h 55min ago",
    seen: true
  },
  {
    id: 19,
    conversationId: 10,
    text: "Need help with processor compatibility",
    sender: "user",
    timestamp: "8h ago",
    seen: true
  },
  {
    id: 20,
    conversationId: 10,
    text: "Let's get that sorted out. Which processors are you having issues with?",
    sender: "agent",
    timestamp: "7h 55min ago",
    seen: true
  }
  // Add more messages for each conversation as needed
];