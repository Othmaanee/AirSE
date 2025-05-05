
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-airse-yellow via-white to-airse-light-blue">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-airse-navy mb-6">
              Solutions de climatisation et ventilation professionnelles
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Spécialiste de l'installation, l'entretien et la réparation de systèmes de climatisation et ventilation pour le résidentiel, le commercial et le tertiaire à Saint-Étienne et sa région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-airse-light-blue hover:bg-airse-blue text-white">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-airse-navy text-airse-navy hover:bg-airse-navy hover:text-white">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/logo-square.png" 
                alt="Air SE" 
                className="w-48 md:w-64 lg:w-80 animate-float" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
