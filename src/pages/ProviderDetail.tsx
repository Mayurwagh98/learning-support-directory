import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProviderById } from "../utils/fetchProviders";
import type { Provider } from "../types";

const ProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchProviderById(id).then(setProvider).catch(setError);
    }
  }, [id]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!provider) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 underline"
      >
        ← Back to List
      </button>
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <p className="text-gray-700 mb-2">
        {provider.specialization} - {provider.location}
      </p>
      <p className="mb-2">⭐ {provider.rating} / 5</p>
      <p className="mb-4">{provider.longDescription}</p>
      <p>
        <strong>Email:</strong> {provider.contactEmail}
      </p>
      <p>
        <strong>Phone:</strong> {provider.phoneNumber}
      </p>
    </div>
  );
};
export default ProviderDetail;
