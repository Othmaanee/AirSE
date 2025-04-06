
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BrandCard from "../components/BrandCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const Produits = () => {
  const climatisationBrands = [
    {
      name: "Daikin",
      description: "Leader mondial des solutions de climatisation et chauffage. Réputé pour sa fiabilité et ses innovations technologiques.",
      category: "Climatisation"
    },
    {
      name: "Mitsubishi Electric",
      description: "Équipements premium reconnus pour leur performance, leur durabilité et leur faible consommation énergétique.",
      category: "Climatisation"
    },
    {
      name: "Toshiba",
      description: "Technologie japonaise de pointe offrant des solutions silencieuses et économes en énergie.",
      category: "Climatisation"
    },
    {
      name: "Panasonic",
      description: "Systèmes de climatisation innovants avec des fonctionnalités avancées de purification d'air et de connectivité.",
      category: "Climatisation"
    },
    {
      name: "Hitachi",
      description: "Solutions haut de gamme alliant confort, efficacité énergétique et design élégant.",
      category: "Climatisation"
    },
    {
      name: "LG",
      description: "Climatiseurs modernes avec technologie Inverter pour un confort optimal et une consommation réduite.",
      category: "Climatisation"
    },
    {
      name: "Fujitsu Atlantic",
      description: "Gamme complète de climatiseurs alliant performance et respect de l'environnement.",
      category: "Climatisation"
    },
    {
      name: "GREE",
      description: "Plus grand fabricant mondial de climatiseurs proposant un excellent rapport qualité-prix.",
      category: "Climatisation"
    }
  ];
  
  const ventilationBrands = [
    {
      name: "Aldes",
      description: "Référence française en ventilation, offrant des systèmes VMC performants et des solutions de qualité d'air intérieur.",
      category: "Ventilation"
    },
    {
      name: "Atlantic",
      description: "Solutions de ventilation complètes et innovantes pour tous types de bâtiments résidentiels et tertiaires.",
      category: "Ventilation"
    },
    {
      name: "Unelvent/S&P",
      description: "Équipements de ventilation performants adaptés aux applications domestiques et professionnelles.",
      category: "Ventilation"
    },
    {
      name: "Helios",
      description: "Spécialiste allemand des systèmes de ventilation de haute qualité et haute efficacité énergétique.",
      category: "Ventilation"
    },
    {
      name: "Zehnder",
      description: "Solutions premium de ventilation avec récupération de chaleur pour un confort et une efficacité optimaux.",
      category: "Ventilation"
    },
    {
      name: "CIAT",
      description: "Fabricant français de référence pour les systèmes de traitement d'air et climatisation de grands volumes.",
      category: "Ventilation"
    },
    {
      name: "Fläkt Group",
      description: "Solutions globales pour la ventilation et le traitement d'air destinées aux bâtiments commerciaux et industriels.",
      category: "Ventilation"
    },
    {
      name: "Systemair",
      description: "Large gamme de produits de ventilation pour applications résidentielles, commerciales et industrielles.",
      category: "Ventilation"
    },
    {
      name: "Vortice",
      description: "Spécialiste italien proposant des solutions de ventilation innovantes et design.",
      category: "Ventilation"
    },
    {
      name: "Airwell",
      description: "Systèmes de ventilation et climatisation adaptés au marché français avec un excellent support technique.",
      category: "Ventilation"
    }
  ];

  const typeSystemes = [
    {
      title: "Monosplit",
      description: "Système idéal pour climatiser une seule pièce, composé d'une unité extérieure et d'une unité intérieure.",
      applications: "Chambre, salon, bureau individuel, petit commerce."
    },
    {
      title: "Multisplit",
      description: "Solution permettant de connecter plusieurs unités intérieures à une seule unité extérieure.",
      applications: "Appartement, maison, bureau avec plusieurs pièces."
    },
    {
      title: "Gainable",
      description: "Système discret avec unité intérieure cachée dans un faux plafond et diffusion d'air par des grilles ou bouches.",
      applications: "Résidentiel haut de gamme, bureaux, commerces souhaitant une intégration esthétique."
    },
    {
      title: "Console",
      description: "Unité intérieure posée au sol, idéale pour remplacer un radiateur ou quand le mur ne permet pas d'installation.",
      applications: "Sous les fenêtres, vérandas, pièces avec grandes baies vitrées."
    },
    {
      title: "Cassette",
      description: "Unité s'intégrant dans un faux plafond avec diffusion d'air à 360° ou 4 voies.",
      applications: "Bureaux open space, commerces, restaurants, salles de réunion."
    },
    {
      title: "VRV/VRF",
      description: "Systèmes à débit de réfrigérant variable pour les grands projets avec contrôle précis par zone.",
      applications: "Immeubles de bureaux, hôtels, grands commerces, bâtiments tertiaires."
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-airse-blue to-airse-light-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Produits</h1>
            <p className="text-lg text-gray-100 mb-8">
              Air SE vous propose une large gamme de produits de climatisation et ventilation des meilleures marques du marché, adaptés à tous types de locaux.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-airse-blue">
                Obtenir des conseils personnalisés
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Products section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Nos marques partenaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sélectionnons les meilleurs équipements du marché pour vous garantir fiabilité, performance et économie d'énergie.
            </p>
          </div>
          
          <Tabs defaultValue="climatisation" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="climatisation" className="text-lg px-8">Climatisation</TabsTrigger>
                <TabsTrigger value="ventilation" className="text-lg px-8">Ventilation</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="climatisation">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {climatisationBrands.map((brand, index) => (
                  <BrandCard 
                    key={index} 
                    name={brand.name} 
                    description={brand.description} 
                    category={brand.category} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ventilation">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ventilationBrands.map((brand, index) => (
                  <BrandCard 
                    key={index} 
                    name={brand.name} 
                    description={brand.description} 
                    category={brand.category} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Types of systems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Types de systèmes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous proposons différentes solutions adaptées à vos espaces et vos besoins spécifiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typeSystemes.map((system, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-airse-navy mb-3">{system.title}</h3>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <div>
                  <span className="text-sm font-semibold text-airse-light-blue block mb-1">Applications :</span>
                  <p className="text-sm text-gray-500">{system.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Adaptation to spaces */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-6">
                Solutions adaptées à tous vos espaces
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Que vous ayez besoin d'équiper un appartement, une maison, des bureaux ou des locaux commerciaux, nous avons des solutions parfaitement adaptées :
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-airse-navy mb-2">Résidentiel</h3>
                  <p className="text-gray-600">
                    Solutions discrètes et silencieuses pour les appartements et maisons, avec des options de contrôle intelligent et de purification d'air.
                  </p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-airse-navy mb-2">Commercial</h3>
                  <p className="text-gray-600">
                    Systèmes performants pour commerces, restaurants et bureaux, garantissant le confort de vos clients et employés tout au long de l'année.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-airse-navy mb-2">Tertiaire</h3>
                  <p className="text-gray-600">
                    Solutions sur mesure pour grands volumes, établissements recevant du public, avec gestion centralisée et optimisation énergétique.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-airse-light-blue hover:bg-airse-blue text-white">
                    Discuter de votre projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-airse-navy to-airse-dark-blue rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Pourquoi choisir nos équipements ?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-airse-light-blue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Efficacité énergétique</h4>
                    <p className="text-gray-200">
                      Nos équipements à haute efficacité énergétique vous permettent de réaliser d'importantes économies sur vos factures d'énergie.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-airse-light-blue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Fiabilité et durabilité</h4>
                    <p className="text-gray-200">
                      Nous sélectionnons des marques réputées pour la qualité et la durabilité de leurs produits, avec d'excellentes garanties constructeur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-airse-light-blue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Personnalisation</h4>
                    <p className="text-gray-200">
                      Des solutions configurables selon vos besoins spécifiques, avec de nombreuses options de contrôle et de programmation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-airse-light-blue rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Confort optimal</h4>
                    <p className="text-gray-200">
                      Technologies avancées pour un confort thermique parfait et une qualité d'air intérieur irréprochable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-airse-yellow to-airse-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-6">
            Un projet d'équipement ou de remplacement ?
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent dans le choix des équipements les mieux adaptés à vos besoins et à votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-airse-navy hover:bg-airse-dark-blue text-white">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-airse-navy text-airse-navy hover:bg-airse-navy hover:text-white">
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;
