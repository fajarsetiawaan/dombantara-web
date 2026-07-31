import { Product } from "@/lib/types/produk";
import mockData from "@/src/mocks/produk.json";

const USE_MOCK = true;

export async function getProdukList(): Promise<Product[]> {
  if (USE_MOCK) {
    return mockData as Product[];
  }
  
  // TODO: Implement InsForge query here
  return [];
}

export async function getProdukById(id: string): Promise<Product | null> {
  if (USE_MOCK) {
    const product = (mockData as Product[]).find((p) => p.id === id);
    return product || null;
  }
  
  // TODO: Implement InsForge query here
  return null;
}
