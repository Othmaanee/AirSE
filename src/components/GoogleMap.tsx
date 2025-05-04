
import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address?: string;
  zoom?: number;
}

const GoogleMap = ({ address = "Saint-Étienne, Loire", zoom = 14 }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Fonction pour charger et initialiser la carte Google Maps
    const initMap = () => {
      // Vérifier si l'API Google Maps est déjà chargée
      if (window.google && window.google.maps) {
        createMap();
      } else {
        // Sinon, créer un script et charger l'API
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoZg2Es_GrQHZf_52j2-xZ3cTfBCR0HII&callback=initGoogleMap`;
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initGoogleMap = createMap;
        document.head.appendChild(googleMapScript);
      }
    };

    // Fonction pour créer la carte une fois l'API chargée
    const createMap = () => {
      if (!mapRef.current) return;
      
      // Coordonnées de Saint-Étienne
      const stEtienne = { lat: 45.439695, lng: 4.3871779 };
      
      // Créer la carte
      const map = new window.google.maps.Map(mapRef.current, {
        center: stEtienne,
        zoom: zoom,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });
      
      // Ajouter un marqueur
      new window.google.maps.Marker({
        position: stEtienne,
        map: map,
        title: address,
        animation: window.google.maps.Animation.DROP,
      });
    };
    
    // Initialiser la carte
    initMap();
    
    // Cleanup function
    return () => {
      // Supprimer la callback globale quand le composant est démonté
      if (window.initGoogleMap) {
        delete window.initGoogleMap;
      }
    };
  }, [address, zoom]);
  
  return (
    <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md"></div>
  );
};

// Ajouter la déclaration pour TypeScript
declare global {
  interface Window {
    google: any;
    initGoogleMap: () => void;
  }
}

export default GoogleMap;
