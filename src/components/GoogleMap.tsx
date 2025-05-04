
import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address?: string;
  zoom?: number;
}

const GoogleMap = ({ address = "Saint-Étienne, Loire", zoom = 14 }: GoogleMapProps) => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1109844.0124341054!2d3.531693761730675!3d45.47573682616512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c653a15302e63%3A0x408ab2ae4beea50!2sAuvergne-Rh%C3%B4ne-Alpes!5e0!3m2!1sfr!2sfr!4v1714825400000!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Auvergne-Rhône-Alpes"
      />
    </div>
  );
};

export default GoogleMap;
