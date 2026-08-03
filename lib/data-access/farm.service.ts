import farmUnggulanMock from '@/src/mocks/farm_unggulan.json';
import kambingUnggulanMock from '@/src/mocks/kambing_unggulan.json';

const USE_MOCK = true;

export interface FarmProduct {
  id: string;
  name: string;
  badge: string;
  age: string;
  weight: string;
  status: string;
  image: string;
}

export async function getFarmFeaturedProducts(): Promise<FarmProduct[]> {
  // Simulasi network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!USE_MOCK) {
    // Nanti diganti dengan fetch InsForge
    return [];
  }

  return farmUnggulanMock as FarmProduct[];
}

export async function getKambingFeaturedProducts(): Promise<FarmProduct[]> {
  // Simulasi network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!USE_MOCK) {
    // Nanti diganti dengan fetch InsForge
    return [];
  }

  return kambingUnggulanMock as FarmProduct[];
}
