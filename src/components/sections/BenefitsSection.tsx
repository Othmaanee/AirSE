
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Expertise professionnelle",
      description: "Techniciens certifiés avec une expérience approfondie en climatisation et ventilation.",
      icon: <CheckCircle className="h-6 w-6 text-airse-light-blue" />,
    },
    {
      title: "Service personnalisé",
      description: "Solutions sur mesure adaptées aux besoins spécifiques de votre espace et budget.",
      icon: <CheckCircle className="h-6 w-6 text-airse-light-blue" />,
    },
    {
      title: "Équipements de qualité",
      description: "Partenariats avec les meilleures marques pour une performance et durabilité optimales.",
      icon: <CheckCircle className="h-6 w-6 text-airse-light-blue" />,
    },
    {
      title: "Service après-vente",
      description: "Accompagnement complet avec maintenance régulière et support technique rapide.",
      icon: <CheckCircle className="h-6 w-6 text-airse-light-blue" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-6">Pourquoi choisir Air SE ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              En tant que spécialiste local en climatisation et ventilation, nous nous engageons à fournir des solutions adaptées à vos besoins avec un service client exceptionnel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg" className="bg-airse-light-blue hover:bg-airse-blue text-white">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-airse-yellow to-airse-orange rounded-lg p-8 shadow-xl">
            <div className="bg-white rounded-lg p-6 shadow-inner">
              <h3 className="text-2xl font-bold text-airse-navy mb-4">Demande de devis gratuit</h3>
              <p className="text-gray-700 mb-6">
                Vous avez un projet d'installation ou de maintenance de climatisation ou ventilation ? Contactez-nous pour obtenir un devis personnalisé gratuit.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-airse-light-blue mr-3 mt-0.5" />
                  <span>Réponse rapide sous 48h</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-airse-light-blue mr-3 mt-0.5" />
                  <span>Analyse détaillée de vos besoins</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-airse-light-blue mr-3 mt-0.5" />
                  <span>Solutions adaptées à votre budget</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-airse-light-blue mr-3 mt-0.5" />
                  <span>Conseils techniques personnalisés</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-airse-navy hover:bg-airse-dark-blue text-white">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
