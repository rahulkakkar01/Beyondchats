import { useState } from "react";
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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <div className="flex h-screen overflow-hidden">
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden main-content">
            <Header>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </Header>
            <main className="flex-1 overflow-y-auto mobile-safe-bottom">
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
