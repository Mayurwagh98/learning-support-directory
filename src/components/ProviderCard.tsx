import { Link } from "react-router-dom";
import type { Props } from "../types";
import { Star } from "lucide-react";

const ProviderCard = ({ provider }: Props) => {
  return (
    <Link
      to={`/providers/${provider.id}`}
      className="group relative p-6 border border-transparent rounded-3xl shadow-lg bg-white hover:shadow-2xl hover:border-blue-400 transition-all duration-300 ease-in-out overflow-hidden"
    >
      <div className="absolute right-4 top-4 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
        {provider.location}
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-blue-900 group-hover:text-blue-700 transition">
            {provider.name}
          </h3>
          <p className="text-sm text-blue-600 font-semibold mt-1">
            {provider.specialization}
          </p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {provider.shortDescription}
          </p>
        </div>
        <div className="flex items-center gap-1 text-yellow-400 mt-4">
          {Array.from({ length: provider.rating }, (_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProviderCard;
