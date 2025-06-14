export interface Provider {
  id: string;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  contactEmail: string;
  phoneNumber: string;
}

export interface Props {
  provider: Provider;
}

export interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}
