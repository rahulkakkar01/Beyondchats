import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Dashboard } from "@/pages/dashboard";
import { Inbox } from "@/pages/inbox";
import { Contacts } from "@/pages/contacts";
import { Settings } from "@/pages/settings";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Create context for sidebar state
export const SidebarContext = createContext();

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar }}>
          <div className="flex h-screen overflow-hidden">
            {/* Backdrop for mobile */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                onClick={closeSidebar}
              />
            )}
            
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <Sidebar onClose={closeSidebar} />
            </div>
            
            <div className="flex-1 flex flex-col overflow-hidden main-content">
              <Header>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </Header>
              <main className="flex-1 overflow-y-auto mobile-safe-bottom" onClick={closeSidebar}>
                <div className="mobile-container">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </SidebarContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
