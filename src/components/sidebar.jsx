import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Users, Settings } from "lucide-react";

export function Sidebar() {
	const location = useLocation();

	const routes = [
		{
			icon: Home,
			href: "/",
			label: "Dashboard",
		},
		{
			icon: MessageSquare,
			href: "/inbox",
			label: "Messages",
		},
		{
			icon: Users,
			href: "/contacts",
			label: "Contacts",
		},
		{
			icon: Settings,
			href: "/settings",
			label: "Settings",
		},
	];

	return (
		<div className="w-full h-full border-r bg-background">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="flex items-center gap-2">
						<img src="/logo.png" alt="Logo" className="h-6 w-6" />
						<span className="font-bold">BeyondChats</span>
					</div>
				</div>
				<div className="space-y-1 px-3">
					{routes.map((route) => (
						<Link key={route.href} to={route.href}>
							<Button
								variant={
									location.pathname === route.href
										? "default"
										: "ghost"
								}
								className="w-full justify-start gap-2"
							>
								<route.icon className="h-5 w-5" />
								<span>{route.label}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
