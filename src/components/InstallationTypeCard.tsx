
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface InstallationTypeCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

const InstallationTypeCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: InstallationTypeCardProps) => {
  return (
    <div className="relative">
      <Card className="overflow-hidden border-none shadow-lg">
        <CardContent className="p-0">
          <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="relative" style={{height: "400px"}}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-airse-navy">{title}</h3>
              <p className="text-gray-600 text-lg">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Decorative element */}
      <div className={`absolute -z-10 top-8 ${reversed ? 'right-8' : 'left-8'} w-full h-full rounded-lg bg-gradient-to-r from-airse-light-blue to-airse-dark-blue opacity-10`}></div>
    </div>
  );
};

export default InstallationTypeCard;
