
import InstallationTypeCard from "../InstallationTypeCard";

const InstallationTypesSection = () => {
  const installationTypes = [
    {
      title: "Bi-split",
      description: "Solution idéale pour climatiser deux pièces avec un seul groupe extérieur. Parfait pour optimiser l'espace et réduire les coûts.",
      imageSrc: "/lovable-uploads/4a5c29e4-380a-496f-9bf7-954f9e5f5d9d.png",
      imageAlt: "Installation bi-split dans un salon de coiffure"
    },
    {
      title: "Mono-split",
      description: "Installation simple pour une seule pièce, idéale pour un confort immédiat et une efficacité énergétique maximale.",
      imageSrc: "/lovable-uploads/1d784437-7ad2-4acd-b0ea-fba3579db491.png",
      imageAlt: "Installation mono-split dans une salle à manger avec mur en pierre et climatiseur mural"
    },
    {
      title: "Installation gainable avec système Airzone",
      description: "Discrétion totale grâce à un réseau de gaines caché dans les plafonds, combiné au système Airzone pour un contrôle pièce par pièce.",
      imageSrc: "/lovable-uploads/f8788bae-d12e-45b4-ab07-95f26497a74a.png",
      imageAlt: "Installation gainable avec système Airzone au plafond"
    },
    {
      title: "Système VRV",
      description: "Technologie avancée pour gérer plusieurs unités intérieures via un seul système centralisé. Idéal pour les bâtiments de grande taille.",
      imageSrc: "/lovable-uploads/fee91f0c-c812-4f8a-ba36-381d551cb501.png",
      imageAlt: "Système VRV extérieur pour grand bâtiment commercial"
    },
    {
      title: "Installation de système VRV avec plusieurs cassettes",
      description: "Solution professionnelle avec plusieurs cassettes encastrées au plafond, parfaite pour les bureaux et commerces.",
      imageSrc: "/lovable-uploads/a20bd23e-6f41-4196-8807-9b7832bbb72f.png",
      imageAlt: "Installation de système VRV avec plusieurs cassettes au plafond"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-airse-navy mb-4">Nos Types d'Installations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme de solutions adaptées à tous vos besoins en climatisation et ventilation.
          </p>
        </div>
        
        <div className="space-y-16">
          {installationTypes.map((installation, index) => (
            <InstallationTypeCard 
              key={index}
              title={installation.title}
              description={installation.description}
              imageSrc={installation.imageSrc}
              imageAlt={installation.imageAlt}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationTypesSection;
