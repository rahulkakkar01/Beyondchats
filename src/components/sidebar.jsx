import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Users } from "lucide-react";

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
	];

	return (
		<div className="w-64 border-r bg-background">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="flex items-center gap-2">
						<span className="font-semibold">BeyondChats</span>
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
