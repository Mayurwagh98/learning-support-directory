import type { SearchBarProps } from "../types";

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name or specialization..."
      className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;
