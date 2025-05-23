import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarContext } from "@/App";
import { cn } from "@/lib/utils";

export function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();
	const { closeSidebar, isCollapsed, toggleCollapsed } = useContext(SidebarContext);

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
		<div className="relative h-full border-r bg-background">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="flex items-center justify-between">
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={() => navigate("/")}
						>
							{!isCollapsed && <span className="font-bold">BeyondChats</span>}
						</div>
						<Button
							variant="ghost"
							size="sm"
							className="ml-auto"
							onClick={toggleCollapsed}
						>
							{isCollapsed ? (
								<ChevronRight className="h-5 w-5" />
							) : (
								<ChevronLeft className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>
				<div className="space-y-1 px-3">
					{routes.map((route) => (
						<Link
							key={route.href}
							to={route.href}
							onClick={() => {
								if (window.innerWidth < 1024) {
									closeSidebar();
								}
							}}
						>
							<Button
								variant={
									location.pathname === route.href ? "default" : "ghost"
								}
								className={cn(
									"w-full",
									isCollapsed
										? "justify-center p-2"
										: "justify-start gap-2"
								)}
							>
								<route.icon
									className={cn(
										"transition-all duration-200",
										isCollapsed ? "h-6 w-6" : "h-5 w-5"
									)}
								/>
								{!isCollapsed && <span>{route.label}</span>}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
