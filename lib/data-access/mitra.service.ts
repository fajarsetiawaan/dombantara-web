import { Mitra } from "@/lib/types/mitra";
import mockData from "@/src/mocks/mitra.json";

const USE_MOCK = true;

export async function getMitraList(): Promise<Mitra[]> {
  if (USE_MOCK) {
    return mockData as Mitra[];
  }
  
  // TODO: Implement InsForge query here
  return [];
}

export async function getMitraById(id: string): Promise<Mitra | null> {
  if (USE_MOCK) {
    const mitra = (mockData as Mitra[]).find((m) => m.id === id);
    return mitra || null;
  }
  
  // TODO: Implement InsForge query here
  return null;
}
