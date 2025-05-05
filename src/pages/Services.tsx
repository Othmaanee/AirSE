import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThermometerSnowflake, Fan, Settings, Wrench, ClipboardList, Calendar, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Services = () => {
  const { handleSmoothNavigation } = useSmoothScroll();

  const climatisationServices = [
    {
      title: "Installation",
      description: "Installation professionnelle de systèmes de climatisation adaptés à tous types de locaux.",
      icon: <ThermometerSnowflake className="h-8 w-8 text-airse-light-blue" />,
    },
    {
      title: "Entretien",
      description: "Maintenance préventive et nettoyage régulier pour garantir la performance et la durée de vie de votre installation.",
      icon: <Settings className="h-8 w-8 text-airse-light-blue" />,
    },
    {
      title: "Réparation",
      description: "Diagnostic et réparation rapide de tous types de pannes sur vos systèmes de climatisation.",
      icon: <Wrench className="h-8 w-8 text-airse-light-blue" />,
    },
    {
      title: "Contrats d'entretien",
      description: "Programmes d'entretien régulier pour maintenir votre équipement en parfait état de fonctionnement.",
      icon: <ClipboardList className="h-8 w-8 text-airse-light-blue" />,
    },
  ];
  
  const ventilationServices = [
    {
      title: "Installation VMC",
      description: "Installation de systèmes de ventilation mécanique contrôlée simple ou double flux pour tous types de locaux.",
      icon: <Fan className="h-8 w-8 text-airse-blue" />,
    },
    {
      title: "Centrale traitement d'air",
      description: "Installation et configuration de centrales de traitement d'air pour les locaux professionnels.",
      icon: <Settings className="h-8 w-8 text-airse-blue" />,
    },
    {
      title: "Maintenance",
      description: "Entretien et nettoyage régulier des systèmes de ventilation pour garantir une qualité d'air optimale.",
      icon: <Wrench className="h-8 w-8 text-airse-blue" />,
    },
    {
      title: "Audit et diagnostic",
      description: "Évaluation complète de vos besoins en ventilation et proposition de solutions adaptées.",
      icon: <Calendar className="h-8 w-8 text-airse-blue" />,
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-airse-yellow to-airse-orange py-16" id="services-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-airse-navy mb-6">Nos Services</h1>
            <p className="text-lg text-gray-800 mb-8">
              Air SE propose une gamme complète de services en climatisation et ventilation pour assurer votre confort thermique et la qualité de votre air intérieur.
            </p>
            <Link to="/contact" onClick={(e) => handleSmoothNavigation(e, "/contact")}>
              <Button size="lg" className="bg-airse-navy hover:bg-airse-dark-blue text-white">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Climatisation section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Services de Climatisation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions de climatisation adaptées pour tous types de locaux : résidentiels, commerciaux et tertiaires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {climatisationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-airse-navy text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-airse-navy mb-4">Climatisation adaptée à tous vos espaces</h3>
                <p className="text-gray-600 mb-4">
                  Chez Air SE, nous sommes spécialisés dans l'installation de systèmes de climatisation pour tous types d'espaces :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-airse-light-blue text-white rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>
                      <strong>Résidentiel :</strong> Appartements, maisons individuelles, résidences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-airse-light-blue text-white rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>
                      <strong>Commercial :</strong> Bureaux, commerces, restaurants, hôtels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-airse-light-blue text-white rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>
                      <strong>Tertiaire :</strong> Établissements scolaires, médicaux, administrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-airse-light-blue text-white rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>
                      <strong>Industriel :</strong> Locaux techniques, ateliers, entrepôts
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-airse-light-blue to-airse-blue rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Nos pompes à chaleur Air/Air</h4>
                <p className="mb-4">
                  Nous installons des pompes à chaleur air/air de grandes marques offrant :
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Économies d'énergie importantes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Confort thermique été comme hiver</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Installation rapide et peu invasive</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Fonctionnement silencieux</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Faible impact environnemental</span>
                  </li>
                </ul>
                <Link to="/produits">
                  <Button className="w-full bg-white hover:bg-gray-100 text-airse-blue">
                    Découvrir nos produits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ventilation section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Services de Ventilation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des systèmes de ventilation performants pour garantir un air sain et une atmosphère agréable dans tous vos espaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventilationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                <div className="bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-airse-navy text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-airse-navy mb-4">Une ventilation adaptée à vos besoins</h3>
                <p className="text-gray-600 mb-4">
                  Air SE vous propose des solutions de ventilation sur mesure pour tous types de locaux :
                </p>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-airse-dark-blue">VMC simple flux</h4>
                    <p className="text-gray-600">
                      Idéale pour les logements et petits locaux, économique et facile à installer.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-airse-dark-blue">VMC double flux</h4>
                    <p className="text-gray-600">
                      Avec récupération de chaleur pour une efficacité énergétique optimale.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-airse-dark-blue">Centrales de traitement d'air (CTA)</h4>
                    <p className="text-gray-600">
                      Pour les grands espaces et bâtiments tertiaires nécessitant une gestion précise de l'air.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-airse-dark-blue">Systèmes hybrides</h4>
                    <p className="text-gray-600">
                      Combinaison intelligente de technologies pour répondre à des besoins spécifiques.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-r from-airse-yellow to-airse-orange rounded-lg p-6">
                <h4 className="text-xl font-bold text-airse-navy mb-4">Les bénéfices d'une bonne ventilation</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-white text-airse-orange rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-airse-navy">
                      Amélioration de la qualité de l'air intérieur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-airse-orange rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-airse-navy">
                      Réduction des allergènes et polluants
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-airse-orange rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-airse-navy">
                      Prévention des problèmes d'humidité et moisissures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-airse-orange rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-airse-navy">
                      Diminution des odeurs et des COV
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-airse-orange rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-airse-navy">
                      Économies d'énergie avec récupération de chaleur
                    </span>
                  </li>
                </ul>
                <Link to="/contact" onClick={(e) => handleSmoothNavigation(e, "/contact")}>
                  <Button className="w-full bg-airse-navy hover:bg-airse-dark-blue text-white">
                    Demander un audit de ventilation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-airse-light-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de vos besoins en climatisation et ventilation. Nos experts sont là pour vous conseiller et vous proposer les solutions les plus adaptées.
          </p>
          <Link to="/contact" onClick={(e) => handleSmoothNavigation(e, "/contact")}>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-airse-blue">
              Contactez-nous maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
