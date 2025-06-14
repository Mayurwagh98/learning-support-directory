import type { SearchBarProps } from "../types";

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name or specialization"
      className="mb-4 p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
