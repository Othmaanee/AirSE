
const MentionsLegales = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-airse-navy mb-8">Mentions Légales</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">1. Informations légales</h2>
              <p className="text-gray-700 mb-4">
                Le site internet Air SE est édité par la société Air SE, spécialisée dans l'installation, l'entretien et la réparation de systèmes de climatisation et ventilation.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Siège social : Saint-Étienne, Loire</li>
                <li>Téléphone : 06 52 45 17 15</li>
                <li>Email : contact.airse@gmail.com</li>
                <li>N° SIRET : 98133746200015</li>
                <li>Directeur de la publication : Sofiane El Arrassi</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">2. Hébergement</h2>
              <p className="text-gray-700 mb-4">
                Ce site est hébergé par OVHcloud, 2 rue Kellermann, 59100 Roubaix, France. Téléphone : 1007 (depuis la France).
              </p>
              <p className="text-gray-700 mb-4">
                Développement & réalisation du site : Othmane Tadjouri – Développeur web indépendant<br />
                Contact : tadjouriothmane@gmail.com
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive d'Air SE ou de ses partenaires. Toute reproduction totale ou partielle de ce site ou d'un de ses éléments sans autorisation expresse et préalable d'Air SE est interdite.
              </p>
              <p className="text-gray-700">
                Toute exploitation non autorisée du site ou de son contenu engagerait la responsabilité de l'utilisateur et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">4. Protection des données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à Air SE pour la gestion de sa clientèle et la prospection commerciale. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données.
              </p>
              <p className="text-gray-700">
                Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant. Pour exercer vos droits, veuillez nous contacter à l'adresse email : contact.airse@gmail.com.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">5. Cookies</h2>
              <p className="text-gray-700">
                Ce site utilise des cookies à des fins de statistiques de visites et d'amélioration de la navigation. Vous pouvez accepter ou refuser ces cookies en configurant les paramètres de votre navigateur.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">6. Limitation de responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Air SE s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, et se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Air SE ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700">
                En conséquence, Air SE décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">7. Liens hypertextes</h2>
              <p className="text-gray-700 mb-4">
                Ce site peut contenir des liens vers d'autres sites Internet. Air SE n'est pas responsable des contenus ou du fonctionnement de ces sites. La présence de liens vers d'autres sites web ne constitue pas une approbation ni une garantie de la part d'Air SE quant au contenu de ces sites.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-airse-navy mb-4">8. Droit applicable et juridiction compétente</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-gray-600">
            <p>Date de dernière mise à jour : {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
