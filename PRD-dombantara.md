# PRD — Website Dombantara

**Dokumen terkait:** `arsitektur-dombantara.md` (struktur teknis), `user-flow.md` (alur pengguna), `desain.md` (visual/design system). PRD ini adalah source of truth utama yang mengikat ketiganya — sesuai aturan governance `AGENTS.md`, semua kerja AI/dev merujuk ke dokumen ini.

---

## 1. Latar Belakang

Dombantara adalah ekosistem protein halal domba & kambing, saat ini di fase broker/agregator: menghubungkan mitra peternak (yang sudah punya kandang) dan mitra jagal dengan pembeli B2B (resto, warung sate/soto/gulai, pelaku nasi Arab) di Jakarta dan sekitarnya. Fokus dipilih pada domba/kambing karena permintaan harian/mingguan yang berulang (bukan musiman seperti qurban/aqiqah), sehingga arus kas lebih stabil dan validasi pasar lebih cepat.

Belum ada transaksi berjalan — prioritas 3 bulan ke depan adalah mendapatkan pembeli pertama dan memvalidasi pasar. Website adalah alat utama untuk membangun kredibilitas dan mengarahkan calon pembeli/mitra ke WhatsApp, bukan platform transaksi penuh di awal.

Visi jangka panjang: Dombantara tumbuh menjadi perusahaan yang menggabungkan peternakan dengan teknologi (mengikuti pola nusaQu), bukan tetap sebagai operasi broker murni.

---

## 2. Tujuan Produk

1. Membangun kredibilitas & positioning premium di mata pembeli B2B sejak kunjungan pertama.
2. Memaksimalkan konversi ke WhatsApp dengan friksi minimum (fase 1).
3. Menyediakan jalur pendaftaran mitra peternak/jagal yang jelas.
4. Menyediakan fondasi teknis yang scalable — tidak perlu rombak ulang saat masuk fase ops internal (2) dan member area mitra (3).

### Tujuan yang eksplisit BUKAN prioritas fase 1
- E-commerce/checkout online.
- Akun/login untuk pembeli.
- Kalkulator investasi, tabungan qurban, kemitraan bisnis (model investasi pihak ketiga) — ini butuh basis kepercayaan & histori transaksi yang belum ada.

---

## 3. Target Pengguna

| Persona | Kebutuhan utama | Prioritas |
|---|---|---|
| Pembeli B2B (resto, warung, nasi Arab) | Kredibilitas cepat, cara pesan cepat (WA) | Utama, fase 1 |
| Calon mitra peternak/jagal | Info syarat kemitraan, cara daftar | Utama, fase 1 |
| Tim ops Dombantara (internal) | Kelola data mitra & order tanpa tool manual (spreadsheet) | Fase 2 |
| Mitra peternak terdaftar | Lihat riwayat pasokan & pembayaran sendiri | Fase 3 |

---

## 4. Ruang Lingkup per Fase

### Fase 1 — Validasi Pasar (sekarang, prioritas utama)
**Scope:**
- Landing page (`(marketing)`): hero, positioning, solusi (live animal vs karkas), CTA WhatsApp.
- Halaman `/tentang` — kredibilitas (mitra peternak & jagal existing, cakupan area).
- Halaman `/katalog` — daftar produk (kategori, varian, harga indikatif), tiap item dengan CTA WA.
- Halaman `/kemitraan` — syarat & form pendaftaran mitra peternak/jagal (form sederhana, notifikasi manual ke tim ops).
- Halaman `/kontak` + CTA WA mengambang di semua halaman.
- Semua data produk/mitra masih dummy (`lib/mock-data`), sesuai prinsip frontend-first.

**Tidak masuk fase 1:** login, dashboard, e-commerce, statistik sungguhan (StatCounter kosong tidak ditampilkan).

### Fase 2 — Ops Mitra & Repeat Order
**Scope:**
- Aktivasi `(dashboard)` internal: `/mitra`, `/order`, `/laporan`.
- Migrasi bertahap data-access layer dari mock-data ke InsForge, per modul (mitra dulu, lalu order).
- Statistik nyata mulai ditampilkan di landing (mitra aktif, volume terkirim) begitu datanya valid.

### Fase 3 — Ekosistem/Member Area
**Scope:**
- Aktivasi `(member)`: dashboard self-service mitra peternak (riwayat pasokan, status pembayaran, update kapasitas).
- Potensi ekspansi domain terpisah (`shop.`, dsb.) mengikuti pola nusaQu — dievaluasi ulang saat volume sudah menuntutnya, bukan dibangun preventif.

---

## 5. Functional Requirements

### 5.1 Marketing (Fase 1)
- FR-1: Landing menampilkan hero dengan positioning statement dan CTA WhatsApp utama di atas fold.
- FR-2: CTA WhatsApp harus konsisten (komponen `WhatsAppCTA`) di hero, katalog (per item), dan footer/floating.
- FR-3: Halaman katalog menampilkan kategori produk minimal: live animal (dengan opsi servis sembelih) dan karkas/daging cut.
- FR-4: Form pendaftaran mitra menangkap minimal: nama, lokasi kandang, kapasitas, kontak — submit mengirim notifikasi ke tim ops (email/WA), tanpa perlu akun.
- FR-5: Semua halaman responsif (mobile-first — mayoritas pembeli B2B kemungkinan akses dari HP).

### 5.2 Dashboard Internal (Fase 2)
- FR-6: Tim ops dapat menambah/mengubah data mitra peternak & jagal (kapasitas, status aktif).
- FR-7: Tim ops dapat mencatat order B2B dan meng-assign ke mitra yang sesuai.
- FR-8: Order memiliki status lifecycle: dipesan → dipotong (jika perlu jagal) → dikirim → lunas.
- FR-9: Laporan menampilkan ringkasan volume terjual, jumlah mitra aktif, repeat-order rate.

### 5.3 Member Area (Fase 3)
- FR-10: Mitra peternak login dan melihat riwayat pasokan yang sudah dikirim.
- FR-11: Mitra peternak melihat status pembayaran.
- FR-12: Mitra peternak dapat memperbarui data ketersediaan stok/kapasitas.

---

## 6. Non-Functional Requirements

- **Performa**: landing harus cepat dimuat di koneksi mobile Indonesia (target skor Core Web Vitals baik) — mengingat sebagian besar traffic B2B kemungkinan dari HP saat kerja.
- **Skalabilitas struktural**: mengikuti `arsitektur-dombantara.md` — penambahan fase tidak boleh memaksa restrukturisasi folder atau reformat data.
- **Konsistensi visual**: seluruh UI mengikuti token desain di `desain.md`, tidak ada styling ad-hoc di komponen.
- **Keamanan data mitra** (fase 2–3): akses `(dashboard)` dan `(member)` wajib auth-gated, data mitra tidak boleh terekspos di route publik.
- **Maintainability**: semua akses data lewat `lib/data-access`, tidak ada pemanggilan langsung ke mock-data atau InsForge dari komponen.

---

## 7. Metrik Keberhasilan (per fase)

| Fase | Metrik utama |
|---|---|
| 1 | Jumlah klik CTA WhatsApp, jumlah pendaftar mitra baru, waktu ke first-response pembeli |
| 2 | Repeat-order rate, jumlah mitra aktif terkelola di dashboard, waktu proses order (input sampai dikirim) |
| 3 | Jumlah mitra aktif memakai self-service member area, pengurangan follow-up manual oleh tim ops |

---

## 8. Di Luar Cakupan (untuk saat ini)

- Tabungan qurban, kemitraan bisnis (investasi pihak ketiga), kalkulator investasi.
- E-commerce/checkout online, payment gateway.
- Divisi tambahan ala nusaQu (Feed, Waste, Research, Academy, CSR) — dievaluasi ulang setelah pilar Farm & Hub tervalidasi.
- Multi-domain terpisah (`shop.`, `app.`, dst.) — baru relevan di fase 3 kalau volume menuntut.

---

## 9. Risiko & Asumsi

- **Asumsi**: volume order B2B awal cukup rendah sehingga proses manual (WA + input manual ops) masih efisien di fase 1–2.
- **Risiko**: kalau jumlah mitra/order tumbuh lebih cepat dari perkiraan, migrasi mock-data → InsForge di fase 2 perlu dipercepat agar ops tidak keteteran dengan tool manual.
- **Risiko**: menampilkan statistik/social proof kosong atau prematur bisa merusak kredibilitas — mitigasi: `StatCounter` hanya tampil setelah data valid (lihat `desain.md` §8.3).

---

## 10. Milestone Indikatif

1. **M1** — Landing + katalog + form kemitraan live, 100% mock-data. (Fase 1)
2. **M2** — Pembeli B2B pertama & mitra peternak pertama onboarded via WA/form manual.
3. **M3** — Volume repeat-order cukup untuk membenarkan `(dashboard)` internal; mulai migrasi data mitra ke InsForge.
4. **M4** — `(dashboard)` order & laporan aktif penuh.
5. **M5** — Evaluasi kebutuhan `(member)` area berdasarkan jumlah mitra aktif.
