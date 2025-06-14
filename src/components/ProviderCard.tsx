import { Link } from "react-router-dom";
import type { Props } from "../types";
import { Star } from "lucide-react";

const ProviderCard = ({ provider }: Props) => {
  return (
    <Link
      to={`/providers/${provider.id}`}
      className="p-5 border rounded-2xl shadow-md hover:shadow-xl transition bg-white flex flex-col justify-between gap-3 hover:scale-[1.02] duration-200"
    >
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-1">
          {provider.name}
        </h3>
        <p className="text-sm text-gray-700 font-medium">
          {provider.specialization}
        </p>
        <p className="text-xs text-gray-500">{provider.location}</p>
      </div>
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array.from({ length: provider.rating }, (_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    </Link>
  );
};

export default ProviderCard;
