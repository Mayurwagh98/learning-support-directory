import { Link } from "react-router-dom";
import type { Provider } from "../types";

interface Props {
  provider: Provider;
}

const ProviderCard = ({ provider }: Props) => {
  return (
    <Link
      to={`/providers/${provider.id}`}
      className="p-4 border rounded-lg shadow hover:shadow-md transition block"
    >
      <h3 className="text-lg font-semibold">{provider.name}</h3>
      <p>{provider.specialization}</p>
      <p className="text-sm text-gray-500">{provider.location}</p>
      <p className="text-yellow-500">⭐ {provider.rating}</p>
    </Link>
  );
};

export default ProviderCard;
