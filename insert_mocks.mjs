import fs from 'fs';
import { createClient } from '@insforge/sdk';

const url = 'https://vnus354k.us-east.insforge.app';
const key = 'anon_519ee3f2d4dd840adb011277c55bf221917e834312f2045f6c3a1f30d8ccaff5';
const supabase = createClient(url, key);

async function run() {
  // Mitra
  const mitraData = JSON.parse(fs.readFileSync('src/mocks/mitra.json'));
  const mitraMap = {};
  for (const m of mitraData) {
    const { data, error } = await supabase.from('mitra').insert({
      nama: m.nama,
      tipe: m.tipe,
      status: m.status,
      lokasi: m.lokasi,
      kapasitas: m.kapasitas,
      kontak: m.kontak,
      tanggal_gabung: m.tanggalGabung
    }).select().single();
    if (error) console.error("Mitra Error:", error);
    else mitraMap[m.id] = data.id;
  }
  console.log("Mitra inserted");

  // Products
  const produkData = JSON.parse(fs.readFileSync('src/mocks/produk.json'));
  for (const p of produkData) {
    const { error } = await supabase.from('products').insert({
      name: p.name,
      category: p.category,
      description: p.description,
      price: p.price,
      image: p.image,
      breed: p.breed,
      weight: p.weight,
      weight_num: p.weightNum,
      age: p.age,
      volume: p.volume,
      badge: p.badge
    });
    if (error) console.error("Product Error:", error);
  }
  console.log("Products inserted");

  // Orders
  const orderData = JSON.parse(fs.readFileSync('src/mocks/order.json'));
  for (const o of orderData) {
    const { data, error } = await supabase.from('orders').insert({
      pembeli_id: o.pembeliId,
      nama_pembeli: o.namaPembeli,
      tipe_b2b: o.tipeB2B,
      status: o.status,
      total_harga: o.totalHarga,
      tanggal_pesan: o.tanggalPesan,
      tanggal_target_kirim: o.tanggalTargetKirim,
      mitra_id: o.mitraId ? mitraMap[o.mitraId] : null
    }).select().single();
    
    if (error) {
      console.error("Order Error:", error);
      continue;
    }

    const orderId = data.id;
    for (const i of o.items) {
      const { error: err2 } = await supabase.from('order_items').insert({
        order_id: orderId,
        nama_produk: i.namaProduk,
        kuantitas: i.kuantitas,
        satuan: i.satuan,
        harga_satuan: i.hargaSatuan
      });
      if (err2) console.error("Order Item Error:", err2);
    }
  }
  console.log("Orders inserted");
}
run();
