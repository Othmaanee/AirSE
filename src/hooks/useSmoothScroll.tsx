
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Hook pour gérer le scroll fluide vers le haut de la page lors de la navigation
 */
export const useSmoothScroll = () => {
  const location = useLocation();
  
  // Effet pour gérer le scroll au changement de route
  useEffect(() => {
    // Vérifie si le scroll est nécessaire (stocké en session ou nouvelle navigation)
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop') === 'true';
    
    if (shouldScrollToTop) {
      // Efface le flag
      sessionStorage.removeItem('scrollToTop');
      
      // Scroll vers le haut avec animation
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [location.pathname]);
  
  /**
   * Fonction pour gérer la navigation avec scroll fluide
   * @param e - L'événement du clic
   * @param to - La destination de navigation
   * @param sectionId - ID optionnel de la section à cibler
   */
  const handleSmoothNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, to: string, sectionId?: string) => {
    // Si on navigue vers la même page
    if (location.pathname === to || (location.pathname === "/" && to === "/")) {
      e.preventDefault();
      
      // Scroll en haut de page ou vers une section spécifique
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    } else {
      // Pour navigation vers une page différente, stocker la préférence de scroll
      sessionStorage.setItem('scrollToTop', 'true');
    }
  };
  
  return { handleSmoothNavigation };
};
