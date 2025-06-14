import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProviderById } from "../utils/fetchProviders";
import type { Provider } from "../types";
import { Star, ArrowLeft } from "lucide-react";

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
  if (!provider) {
    return (
      <div className="p-10 text-center text-gray-400">
        <p>Provider not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
        >
          ← Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline flex items-center gap-1"
      >
        <ArrowLeft size={18} /> Back to List
      </button>
      <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-blue-900 border-b pb-2">
          {provider.name}
        </h2>
        <p className="text-gray-700 text-lg font-medium">
          {provider.specialization} — {provider.location}
        </p>
        <div className="flex items-center gap-2 text-yellow-500">
          Rating:
          {Array.from({ length: provider.rating }, (_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-800 leading-relaxed text-md">
          {provider.longDescription}
        </p>
        <div className="pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <strong className="text-gray-600">Email:</strong>{" "}
            <a
              href={`mailto:${provider.contactEmail}`}
              className="text-blue-700 hover:underline"
            >
              {provider.contactEmail}
            </a>
          </p>
          <p>
            <strong className="text-gray-600">Phone:</strong>{" "}
            <a
              href={`tel:${provider.phoneNumber}`}
              className="text-blue-700 hover:underline"
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
