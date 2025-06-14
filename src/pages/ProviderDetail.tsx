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
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to List
      </button>
      <div className="bg-white shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-800">{provider.name}</h2>
        <p className="text-gray-700 font-medium">
          {provider.specialization} - {provider.location}
        </p>
        <p className="text-yellow-500">
          Rating: {"⭐".repeat(provider.rating)}
        </p>
        <p className="text-gray-800 leading-relaxed">
          {provider.longDescription}
        </p>
        <div className="pt-4 border-t">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${provider.contactEmail}`}
              className="text-blue-600 hover:underline"
            >
              {provider.contactEmail}
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:${provider.phoneNumber}`}
              className="text-blue-600 hover:underline"
            >
              {provider.phoneNumber}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProviderDetail;
