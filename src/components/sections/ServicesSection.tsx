
import ServiceCard from "../ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThermometerSnowflake, Fan, Airplay, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous proposons une gamme complète de solutions de climatisation et ventilation pour tous types d'espaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Climatisation"
            description="Installation, entretien et réparation de systèmes de climatisation adaptés à tous types de locaux, du résidentiel au professionnel."
            icon={<ThermometerSnowflake className="h-8 w-8 text-airse-light-blue" />}
            color="bg-gradient-to-r from-airse-light-blue to-airse-blue"
          />
          
          <ServiceCard
            title="Ventilation"
            description="Installation et maintenance de systèmes de ventilation performants comme VMC, CTA et autres solutions pour un air intérieur sain."
            icon={<Fan className="h-8 w-8 text-airse-light-blue" />}
            color="bg-gradient-to-r from-airse-blue to-airse-dark-blue"
          />
          
          <ServiceCard
            title="Pompes à chaleur"
            description="Installation de pompes à chaleur air/air économiques et écologiques pour un confort thermique optimal toute l'année."
            icon={<Airplay className="h-8 w-8 text-airse-light-blue" />}
            color="bg-gradient-to-r from-airse-orange to-airse-yellow"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-airse-navy hover:bg-airse-dark-blue text-white">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
