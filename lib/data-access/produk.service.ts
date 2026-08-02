import type { Product, ProductCategory } from '../types';
import produkMock from '@/src/mocks/produk.json';

const USE_MOCK = true;

export async function getProducts(filters?: {
  category?: ProductCategory | 'Semua Produk';
  search?: string;
}): Promise<Product[]> {
  // Simulasi network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let data = produkMock as Product[];

  if (!USE_MOCK) {
    // Nanti diganti dengan fetch InsForge
    return [];
  }

  if (filters?.category && filters.category !== 'Semua Produk') {
    data = data.filter(p => p.category === filters.category);
  }

  if (filters?.search) {
    const term = filters.search.toLowerCase();
    data = data.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
  }

  return data;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (!USE_MOCK) return undefined;
  
  return (produkMock as Product[]).find(p => p.id === id);
}
