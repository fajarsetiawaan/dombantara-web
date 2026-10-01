import fs from 'fs';
import crypto from 'crypto';

function uuid() {
  return crypto.randomUUID();
}

let sql = '';
const esc = (str) => str ? `'${str.replace(/'/g, "''")}'` : 'NULL';

// Mitra
const mitraData = JSON.parse(fs.readFileSync('src/mocks/mitra.json'));
const mitraMap = {};
for (const m of mitraData) {
  const newId = uuid();
  mitraMap[m.id] = newId;
  sql += `INSERT INTO mitra (id, nama, tipe, status, lokasi, kapasitas, kontak, tanggal_gabung) VALUES ('${newId}', ${esc(m.nama)}, ${esc(m.tipe)}, ${esc(m.status)}, ${esc(m.lokasi)}, ${m.kapasitas}, ${esc(m.kontak)}, ${esc(m.tanggalGabung)});\n`;
}

// Products
const produkData = JSON.parse(fs.readFileSync('src/mocks/produk.json'));
for (const p of produkData) {
  const newId = uuid();
  sql += `INSERT INTO products (id, name, category, description, price, image, breed, weight, weight_num, age, volume, badge) VALUES ('${newId}', ${esc(p.name)}, ${esc(p.category)}, ${esc(p.description)}, ${p.price}, ${esc(p.image)}, ${esc(p.breed)}, ${esc(p.weight)}, ${p.weightNum || 'NULL'}, ${esc(p.age)}, ${esc(p.volume)}, ${esc(p.badge)});\n`;
}

// Orders
const orderData = JSON.parse(fs.readFileSync('src/mocks/order.json'));
for (const o of orderData) {
  const newId = uuid();
  const mId = o.mitraId ? `'${mitraMap[o.mitraId]}'` : 'NULL';
  sql += `INSERT INTO orders (id, pembeli_id, nama_pembeli, tipe_b2b, status, total_harga, tanggal_pesan, tanggal_target_kirim, mitra_id) VALUES ('${newId}', ${esc(o.pembeliId)}, ${esc(o.namaPembeli)}, ${esc(o.tipeB2B)}, ${esc(o.status)}, ${o.totalHarga}, ${esc(o.tanggalPesan)}, ${esc(o.tanggalTargetKirim)}, ${mId});\n`;
  
  for (const i of o.items) {
    const itemNewId = uuid();
    sql += `INSERT INTO order_items (id, order_id, nama_produk, kuantitas, satuan, harga_satuan) VALUES ('${itemNewId}', '${newId}', ${esc(i.namaProduk)}, ${i.kuantitas}, ${esc(i.satuan)}, ${i.hargaSatuan});\n`;
  }
}

fs.writeFileSync('insert.sql', sql);
console.log("SQL generated");
