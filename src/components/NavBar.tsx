
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative">
        {/* Contact bar */}
        <div className="hidden lg:flex bg-airse-navy text-white py-2 px-4 justify-end items-center space-x-6">
          <a
            href="tel:0652451715"
            className="flex items-center gap-2 hover:text-airse-orange transition-colors"
          >
            <Phone className="h-4 w-4" /> 06 52 45 17 15
          </a>
          <a
            href="mailto:contact.airse@gmail.com"
            className="flex items-center gap-2 hover:text-airse-orange transition-colors"
          >
            <Mail className="h-4 w-4" /> contact.airse@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/company/airse"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-airse-orange transition-colors"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        
        {/* Main navbar */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/43e620c6-bc7d-41cb-871c-3ef41c402554.png" 
                  alt="Air SE" 
                  className="h-14 lg:h-16" 
                />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-airse-navy font-medium hover:text-airse-light-blue transition-colors">
                  Accueil
                </Link>
                <Link to="/services" className="text-airse-navy font-medium hover:text-airse-light-blue transition-colors">
                  Nos Services
                </Link>
                <Link to="/produits" className="text-airse-navy font-medium hover:text-airse-light-blue transition-colors">
                  Nos Produits
                </Link>
                <Link to="/contact">
                  <Button className="bg-airse-light-blue hover:bg-airse-blue text-white">
                    Contact
                  </Button>
                </Link>
              </nav>
              
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-airse-navy p-2">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full z-50">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-4 py-4">
                <Link 
                  to="/" 
                  className="text-airse-navy font-medium py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Accueil
                </Link>
                <Link 
                  to="/services" 
                  className="text-airse-navy font-medium py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Nos Services
                </Link>
                <Link 
                  to="/produits" 
                  className="text-airse-navy font-medium py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Nos Produits
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="bg-airse-light-blue hover:bg-airse-blue text-white w-full">
                    Contact
                  </Button>
                </Link>
                
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <p className="text-sm text-gray-500 mb-2">Nous contacter :</p>
                  <a
                    href="tel:0652451715"
                    className="flex items-center gap-2 text-airse-navy py-2 hover:text-airse-light-blue"
                  >
                    <Phone className="h-4 w-4" /> 06 52 45 17 15
                  </a>
                  <a
                    href="mailto:contact.airse@gmail.com"
                    className="flex items-center gap-2 text-airse-navy py-2 hover:text-airse-light-blue"
                  >
                    <Mail className="h-4 w-4" /> contact.airse@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/company/airse"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-airse-navy py-2 hover:text-airse-light-blue"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
