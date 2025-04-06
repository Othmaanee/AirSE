
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-airse-blue to-airse-dark-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
            <p className="text-lg text-gray-100 mb-4">
              N'hésitez pas à nous contacter pour toute question ou demande de devis. Notre équipe est à votre disposition pour vous accompagner dans vos projets.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
              <a
                href="tel:0652451715"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-5 w-5" /> 06 52 45 17 15
              </a>
              <a
                href="mailto:contact.airse@gmail.com"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" /> contact.airse@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-airse-navy mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-airse-light-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:0652451715" className="text-gray-600 hover:text-airse-light-blue transition-colors">
                        06 52 45 17 15
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-airse-light-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact.airse@gmail.com" className="text-gray-600 hover:text-airse-light-blue transition-colors">
                        contact.airse@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-airse-light-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Saint-Étienne, Loire
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-airse-light-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/company/airse" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-600 hover:text-airse-light-blue transition-colors"
                      >
                        linkedin.com/company/airse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-airse-navy mb-4">Horaires d'ouverture</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Nous localiser</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Air SE intervient à Saint-Étienne et dans toute sa région pour vos projets de climatisation et ventilation.
            </p>
          </div>
          
          <GoogleMap />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Notre zone d'intervention s'étend sur Saint-Étienne et sa région. N'hésitez pas à nous contacter pour vérifier que votre localité est bien desservie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
