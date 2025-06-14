import { useEffect, useState } from "react";
import { fetchProviders } from "../utils/fetchProviders";
import type { Provider } from "../types";
import ProviderCard from "../components/ProviderCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchProviders().then(setProviders);
  }, []);

  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Learning Support Provider Directory
      </h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default Home;
