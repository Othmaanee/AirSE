
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-airse-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à améliorer votre confort climatique ?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Nos experts sont disponibles pour vous conseiller et vous accompagner dans tous vos projets de climatisation et ventilation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-airse-light-blue hover:bg-airse-blue text-white">
              Nous contacter
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-airse-navy">
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
