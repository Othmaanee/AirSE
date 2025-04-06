
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-airse-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-square.png" alt="Air SE" className="h-16 mr-3" />
              <h2 className="text-2xl font-bold">Air SE</h2>
            </div>
            <p className="mb-4">
              Votre spécialiste en climatisation et ventilation. Installation, entretien et réparation de systèmes pour tous vos espaces.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/airse" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-airse-light-blue hover:bg-airse-blue p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-airse-light-blue" />
                <span>
                  <a href="tel:0652451715" className="hover:underline">06 52 45 17 15</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-airse-light-blue" />
                <span>
                  <a href="mailto:contact.airse@gmail.com" className="hover:underline">contact.airse@gmail.com</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-airse-light-blue" />
                <span>Saint-Étienne, Loire</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-airse-light-blue transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-airse-light-blue transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link to="/produits" className="hover:text-airse-light-blue transition-colors">Nos Produits</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-airse-light-blue transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:text-airse-light-blue transition-colors">Mentions Légales</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Air SE. Tous droits réservés.</p>
          <p className="mt-1">
            Spécialiste en installation climatisation et ventilation à Saint-Étienne et sa région.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
