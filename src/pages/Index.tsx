
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Airplay, Fan, ThermometerSnowflake, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
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
    <div>
      <HeroSection />
      
      {/* Services section */}
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
      
      {/* Why choose us */}
      <section className="py-16">
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
      
      {/* CTA section */}
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-airse-navy">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
