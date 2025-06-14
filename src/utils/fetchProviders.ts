import rawProvidersData from "../data/providers.json";
import type { Provider } from "../types";

// Type assertion with runtime validation
const validateProvidersData = (data: unknown): Provider[] => {
  if (!Array.isArray(data)) {
    console.error("Providers data is not an array");
    return [];
  }

  return data.filter(
    (item): item is Provider =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof item.id === "string" &&
      "name" in item &&
      typeof item.name === "string" &&
      "specialization" in item &&
      typeof item.specialization === "string" &&
      "location" in item &&
      typeof item.location === "string" &&
      "rating" in item &&
      typeof item.rating === "number" &&
      "shortDescription" in item &&
      typeof item.shortDescription === "string" &&
      "longDescription" in item &&
      typeof item.longDescription === "string" &&
      "contactEmail" in item &&
      typeof item.contactEmail === "string" &&
      "phoneNumber" in item &&
      typeof item.phoneNumber === "string"
  );
};

const providersData: Provider[] = validateProvidersData(rawProvidersData);

export const fetchProviders = (): Promise<Provider[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(structuredClone(providersData)), 1000);
  });
};

export const fetchProviderById = (id: string): Promise<Provider> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const provider = providersData.find((p) => p.id === id);
      if (provider) {
        resolve(structuredClone(provider));
      } else {
        reject(new Error(`Provider with ID "${id}" not found`));
      }
    }, 1000);
  });
};
