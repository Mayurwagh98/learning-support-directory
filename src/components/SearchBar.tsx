import type { SearchBarProps } from "../types";

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="🔍 Search by provider name or specialization"
      className="w-full px-6 py-3 text-sm rounded-full shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white mb-5"
    />
  );
};

export default SearchBar;
