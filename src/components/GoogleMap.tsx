
import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address?: string;
  zoom?: number;
}

const GoogleMap = ({ address = "Saint-Étienne, Loire", zoom = 14 }: GoogleMapProps) => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.902628490208!2d4.387178015790713!3d45.439695644112675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9d3f43a3a6b%3A0xe67f038fd1a14c72!2sSaint-%C3%89tienne!5e0!3m2!1sfr!2sfr!4v1714823980000!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Saint-Étienne"
      />
    </div>
  );
};

export default GoogleMap;
