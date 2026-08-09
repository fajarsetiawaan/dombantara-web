/**
 * Mitra Service
 *
 * Layer akses data untuk mitra (peternak/jagal). Mendukung toggle antara
 * mock data (lokal) dan InsForge database (cloud).
 */
import { Mitra, PasokanHistory } from '../types';
import mitraData from '../../src/mocks/mitra.json';
import pasokanData from '../../src/mocks/pasokan.json';
import { insforge } from '../insforge';

/** Toggle: set `false` untuk mengambil data dari InsForge */
const USE_MOCK = false;

/**
 * Mengambil semua data mitra.
 */
export const getMitras = async (): Promise<Mitra[]> => {
  if (USE_MOCK) {
    return mitraData as Mitra[];
  }

  const { data, error } = await insforge.database
    .from('mitra')
    .select();

  if (error) {
    console.error('[mitra.service] getMitras error:', error.message);
    return mitraData as Mitra[];
  }

  return (data ?? []).map(mapDbRowToMitra);
};

/**
 * Mengambil satu mitra berdasarkan ID.
 */
export const getMitraById = async (id: string): Promise<Mitra | null> => {
  if (USE_MOCK) {
    return (mitraData as Mitra[]).find((m) => m.id === id) || null;
  }

  const { data, error } = await insforge.database
    .from('mitra')
    .select()
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('[mitra.service] getMitraById error:', error?.message);
    return (mitraData as Mitra[]).find((m) => m.id === id) || null;
  }

  return mapDbRowToMitra(data);
};

/**
 * Mengambil riwayat pasokan berdasarkan mitra ID.
 * Catatan: tabel pasokan_history belum dibuat di InsForge, masih gunakan mock.
 */
export const getPasokanByMitraId = async (mitraId: string): Promise<PasokanHistory[]> => {
  // Pasokan history masih menggunakan mock karena belum di-seed ke InsForge
  return (pasokanData as PasokanHistory[]).filter((p) => p.mitraId === mitraId);
};

/**
 * Helper: konversi baris database (snake_case) ke interface Mitra (camelCase).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDbRowToMitra(row: any): Mitra {
  return {
    id: row.id,
    nama: row.nama,
    tipe: row.tipe,
    status: row.status,
    lokasi: row.lokasi,
    kapasitas: Number(row.kapasitas),
    kontak: row.kontak,
    tanggalGabung: row.tanggal_gabung,
  };
}
