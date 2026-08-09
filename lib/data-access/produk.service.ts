/**
 * Produk Service
 *
 * Layer akses data untuk produk. Mendukung toggle antara mock data (lokal)
 * dan InsForge database (cloud).
 */
import type { Product, ProductCategory } from '../types';
import produkMock from '@/src/mocks/produk.json';
import { insforge } from '../insforge';

/** Toggle: set `false` untuk mengambil data dari InsForge */
const USE_MOCK = false;

/**
 * Mengambil daftar produk, dengan opsi filter kategori dan pencarian.
 */
export async function getProducts(filters?: {
  category?: ProductCategory | 'Semua Produk';
  search?: string;
}): Promise<Product[]> {
  if (USE_MOCK) {
    await new Promise(resolve => setTimeout(resolve, 300));
    let data = produkMock as Product[];

    if (filters?.category && filters.category !== 'Semua Produk') {
      data = data.filter(p => p.category === filters.category);
    }
    if (filters?.search) {
      const term = filters.search.toLowerCase();
      data = data.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }
    return data;
  }

  // --- InsForge ---
  let query = insforge.database.from('produk').select();

  if (filters?.category && filters.category !== 'Semua Produk') {
    query = query.eq('category', filters.category);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('[produk.service] getProducts error:', error.message);
    // Fallback ke mock jika InsForge gagal
    return produkMock as Product[];
  }

  return (data ?? []).map(mapDbRowToProduct);
}

/**
 * Mengambil satu produk berdasarkan ID.
 */
export async function getProductById(id: string): Promise<Product | undefined> {
  if (USE_MOCK) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return (produkMock as Product[]).find(p => p.id === id);
  }

  // --- InsForge ---
  const { data, error } = await insforge.database
    .from('produk')
    .select()
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('[produk.service] getProductById error:', error?.message);
    return (produkMock as Product[]).find(p => p.id === id);
  }

  return mapDbRowToProduct(data);
}

/**
 * Helper: konversi baris database (snake_case) ke interface Product (camelCase).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDbRowToProduct(row: any): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category as ProductCategory,
    description: row.description ?? '',
    price: Number(row.price),
    image: row.image ?? '',
    breed: row.breed ?? undefined,
    weight: row.weight ?? undefined,
    weightNum: row.weight_num ? Number(row.weight_num) : undefined,
    age: row.age ?? undefined,
    volume: row.volume ?? undefined,
    badge: row.badge ?? undefined,
  };
}
