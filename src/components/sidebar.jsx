import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Users, Settings } from "lucide-react";
import { SidebarContext } from "@/App";

export function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();
	const { closeSidebar } = useContext(SidebarContext);

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

	const handleNavigation = (href) => {
		navigate(href);
		closeSidebar();
	};

	return (
		<div className="w-full h-full border-r bg-background">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div
						className="flex items-center gap-2 cursor-pointer hover:opacity-80"
						onClick={() => handleNavigation("/")}
					>
						<img src="/logo.png" alt="Logo" className="h-6 w-6" />
						<span className="font-bold">BeyondChats</span>
					</div>
				</div>
				<div className="space-y-1 px-3">
					{routes.map((route) => (
						<Button
							key={route.href}
							variant={
								location.pathname === route.href
									? "default"
									: "ghost"
							}
							className="w-full justify-start gap-2"
							onClick={() => handleNavigation(route.href)}
						>
							<route.icon className="h-5 w-5" />
							<span>{route.label}</span>
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
