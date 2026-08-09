/**
 * Order Service
 *
 * Layer akses data untuk order. Mendukung toggle antara mock data (lokal)
 * dan InsForge database (cloud).
 */
import { Order, OrderItem } from '../types';
import orderData from '../../src/mocks/order.json';
import { insforge } from '../insforge';

/** Toggle: set `false` untuk mengambil data dari InsForge */
const USE_MOCK = false;

/**
 * Mengambil semua data order beserta item-itemnya.
 */
export const getOrders = async (): Promise<Order[]> => {
  if (USE_MOCK) {
    return orderData as Order[];
  }

  const { data: ordersRaw, error } = await insforge.database
    .from('orders')
    .select();

  if (error) {
    console.error('[order.service] getOrders error:', error.message);
    return orderData as Order[];
  }

  // Ambil semua order_items sekaligus
  const { data: itemsRaw } = await insforge.database
    .from('order_items')
    .select();

  const allItems = (itemsRaw ?? []) as Array<{
    id: string;
    order_id: string;
    nama_produk: string;
    kuantitas: number;
    satuan: string;
    harga_satuan: number;
  }>;

  return (ordersRaw ?? []).map((row) => mapDbRowToOrder(row, allItems));
};

/**
 * Mengambil satu order berdasarkan ID.
 */
export const getOrderById = async (id: string): Promise<Order | null> => {
  if (USE_MOCK) {
    return (orderData as Order[]).find((o) => o.id === id) || null;
  }

  const { data, error } = await insforge.database
    .from('orders')
    .select()
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('[order.service] getOrderById error:', error?.message);
    return (orderData as Order[]).find((o) => o.id === id) || null;
  }

  const { data: itemsRaw } = await insforge.database
    .from('order_items')
    .select()
    .eq('order_id', id);

  return mapDbRowToOrder(data, itemsRaw ?? []);
};

/**
 * Helper: konversi baris database (snake_case) ke interface Order (camelCase).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDbRowToOrder(row: any, allItems: any[]): Order {
  const items: OrderItem[] = allItems
    .filter((item) => item.order_id === row.id)
    .map((item) => ({
      id: item.id,
      namaProduk: item.nama_produk,
      kuantitas: Number(item.kuantitas),
      satuan: item.satuan as 'EKOR' | 'KG',
      hargaSatuan: Number(item.harga_satuan),
    }));

  return {
    id: row.id,
    pembeliId: row.pembeli_id,
    namaPembeli: row.nama_pembeli,
    tipeB2B: row.tipe_b2b,
    status: row.status,
    items,
    totalHarga: Number(row.total_harga),
    tanggalPesan: row.tanggal_pesan,
    tanggalTargetKirim: row.tanggal_target_kirim,
    mitraId: row.mitra_id ?? undefined,
  };
}
