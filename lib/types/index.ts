export type MitraType = 'PETERNAK' | 'JAGAL';
export type MitraStatus = 'AKTIF' | 'NONAKTIF' | 'PENDING';

export interface Mitra {
  id: string;
  nama: string;
  tipe: MitraType;
  status: MitraStatus;
  lokasi: string;
  kapasitas: number; // kapasitas ekor per minggu
  kontak: string;
  tanggalGabung: string;
}

export type OrderStatus = 'DIPESAN' | 'DIPOTONG' | 'DIKIRIM' | 'LUNAS';

export interface OrderItem {
  id: string;
  namaProduk: string;
  kuantitas: number; // dalam ekor atau kg
  satuan: 'EKOR' | 'KG';
  hargaSatuan: number;
}

export interface Order {
  id: string;
  pembeliId: string;
  namaPembeli: string;
  tipeB2B: 'RESTO' | 'WARUNG' | 'KATERING';
  status: OrderStatus;
  items: OrderItem[];
  totalHarga: number;
  tanggalPesan: string;
  tanggalTargetKirim: string;
  mitraId?: string; // ID Mitra yang di-assign untuk order ini
}

export interface PasokanHistory {
  id: string;
  mitraId: string;
  tanggalSetor: string;
  jumlahEkor: number;
  totalBeratKg: number;
  statusPembayaran: 'BELUM_DIBAYAR' | 'DIBAYAR';
  nominalPembayaran: number;
}

export type ProductCategory = 'Qurban' | 'Aqiqah' | 'Bibit Domba' | 'Susu & Olahan' | 'Karkas' | 'Paket Bundle';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
  breed?: string; // Jenis Domba (Garut, Merino, Texel, Dorper, Lokal)
  weight?: string; // Misal: "45-55 kg"
  weightNum?: number; // Angka berat riil untuk keperluan filter range
  age?: string; // Misal: "2-4 Gigi"
  volume?: string; // Misal: "500 ml"
  badge?: string; // Misal: "Terlaris", "Baru"
}
