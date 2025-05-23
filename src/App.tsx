
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import ProjectDetail from "./pages/ProjectDetail";
import Construction from "./pages/services/Construction";
import ImportExport from "./pages/services/ImportExport";
import Manufacturing from "./pages/services/Manufacturing";
import RealEstate from "./pages/services/RealEstate";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <img 
            src="/lovable-uploads/5971e56a-e915-4ccc-a028-0175de3ca823.png" 
            alt="Novella Logo" 
            className="h-16 mb-4" 
          />
          <div className="w-16 h-1 bg-red-500 relative overflow-hidden">
            <div className="absolute h-full bg-red-500 animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/services/construction" element={<Construction />} />
              <Route path="/services/import-export" element={<ImportExport />} />
              <Route path="/services/manufacturing" element={<Manufacturing />} />
              <Route path="/services/real-estate" element={<RealEstate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* WhatsApp Button - will appear on all pages */}
            <WhatsAppButton phoneNumber="+905528800005" />
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
