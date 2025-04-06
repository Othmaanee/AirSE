
interface BrandCardProps {
  name: string;
  description: string;
  category: string;
}

const BrandCard = ({ name, description, category }: BrandCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
          category === "Climatisation" 
            ? "bg-blue-100 text-blue-800" 
            : "bg-yellow-100 text-yellow-800"
        }`}>
          {category}
        </div>
        <h3 className="text-lg font-bold text-airse-navy mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BrandCard;
