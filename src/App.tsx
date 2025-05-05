
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

// Styles globaux pour le défilement fluide
import "./App.css";

// Scroll restoration component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we should scroll to top (from sessionStorage or new navigation)
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop') === 'true';
    
    if (shouldScrollToTop || location.hash === '') {
      // Clear the flag
      sessionStorage.removeItem('scrollToTop');
      
      // Scroll to top without any offset
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    // Handle any hash links
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80; // Approximate height of the fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  
  return null;
};

// Handle smooth scrolling for links with 'smooth-scroll' class
useEffect(() => {
  const handleSmoothScroll = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('.smooth-scroll') as HTMLAnchorElement;
    
    if (link) {
      const href = link.getAttribute('href');
      
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        e.preventDefault();
        
        // Store preference to scroll to top when navigation completes
        sessionStorage.setItem('scrollToTop', 'true');
        
        // Use React Router's navigate function (from useNavigate) to handle the navigation
        window.location.href = href;
      }
    }
  };
  
  document.addEventListener('click', handleSmoothScroll);
  
  return () => {
    document.removeEventListener('click', handleSmoothScroll);
  };
}, []);

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
