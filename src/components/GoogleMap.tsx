
import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Cette fonction serait remplacée par une vraie intégration de Google Maps
    // Pour l'instant, nous simulons une carte avec une image statique
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="flex items-center justify-center h-full bg-gray-200 rounded-lg">
          <div class="text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-gray-600">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p class="text-gray-600">Carte Google Maps à intégrer.</p>
            <p class="text-sm text-gray-500 mt-1">Saint-Étienne, Loire</p>
          </div>
        </div>
      `;
    }
  }, []);
  
  return (
    <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md"></div>
  );
};

export default GoogleMap;
