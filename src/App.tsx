
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Produits from "./pages/Produits";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

// Scroll restoration component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we should scroll to top (from sessionStorage or new navigation)
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop') === 'true';
    
    if (shouldScrollToTop) {
      // Clear the flag
      sessionStorage.removeItem('scrollToTop');
      
      // Add offset for header height
      const headerOffset = 80;
      
      // Scroll to top with offset
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location.pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
