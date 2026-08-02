# Desain Homepage — Dombantara

Dokumentasi desain berdasarkan mockup homepage Dombantara (light/corporate style, aksen hijau).

## 1. Prinsip Desain

- **Gaya**: Light/corporate, bersih, modern — bukan dark-luxury.
- **Warna utama**: Hijau tua/forest green (brand color), putih sebagai base, krem/beige lembut untuk background ikon.
- **Tipografi**: Sans-serif bold untuk heading, regular untuk body text, huruf kapital + letter-spacing untuk label kecil (eyebrow text) seperti "TENTANG KAMI", "PRODUK KAMI".
- **Nuansa foto**: Foto peternakan asli (domba, kandang, pegunungan) dengan overlay gelap di hero untuk kontras teks putih.

## 2. Kesan Brand yang Ingin Dibangun

Dombantara memiliki kesan seperti ini:

- **Apple** → bersih, fokus, dan elegan.
- **Airbnb** → foto yang kuat dan mudah dijelajahi.
- **Tokopedia** → alur pembelian yang sederhana dan familiar.

Dengan kombinasi itu, pengunjung tidak hanya melihat Dombantara sebagai peternakan, tetapi sebagai brand modern yang profesional dan terpercaya.

**Kesan pertama yang ditargetkan** ketika seseorang membuka website:

> "Ini perusahaan agritech modern yang kebetulan bergerak di bidang peternakan."

## 3. Struktur Halaman

### Header (Sticky Navbar)
- Logo: ikon kepala domba + "DOMBANTARA" (bold) / "Domba Nusantara" (subtitle kecil)
- Menu: Produk (dropdown), Kemitraan, Artikel & Edukasi, Kontak
- CTA kanan: tombol hijau "Hubungi Kami" (ikon WhatsApp)

### Hero Section
- Background: foto peternakan domba dengan pegunungan, overlay gelap
- Headline: "Peternakan Domba Terintegrasi Indonesia" — kata "Indonesia" berwarna hijau terang
- Subheadline: deskripsi singkat brand (domba premium, syariat, teknologi modern)
- Dua CTA: "Pesan Sekarang →" (solid hijau), "Lihat Peternakan" (outline putih)
- Tombol play "Lihat Peternakan Kami" (video) di kanan atas
- Stats bar (4 kolom, background hijau gelap semi-transparan):
  - 50.000+ Domba Disalurkan
  - 34 Provinsi
  - 10+ Tahun Pengalaman
  - 10.000+ Pelanggan Puas

### Tentang Kami
- Kiri: thumbnail video profil (durasi 02:45) dengan tombol play
- Kanan: label "TENTANG KAMI", heading "Lebih dari Sekadar Peternakan. Kami Membangun Masa Depan.", deskripsi
- 4 poin fitur dengan ikon: Peternakan Modern, Pakan Alami Berkualitas, Perawatan Profesional, Sesuai Syariat dan Aman
- Baris stats yang sama diulang (4 angka)

### Kenapa Memilih Dombantara
- Label "KENAPA MEMILIH DOMBANTARA?", heading "Kualitas Terbaik, Layanan Terbaik, Kepercayaan Terbaik."
- 4 kartu (ikon + judul + deskripsi singkat), background putih dengan border tipis:
  - Peternakan Modern
  - Pengiriman Nasional
  - Sesuai Syariat
  - Dokumentasi Lengkap

### Produk Kami
- Label "PRODUK KAMI", heading "Solusi Kebutuhan Anda"
- 4 kartu produk (foto + judul + deskripsi + link "Lihat ... →"):
  - Qurban
  - Aqiqah
  - Bibit Domba
  - Susu & Olahan

### Cara Kerja
- Label "CARA KERJA", heading "Mudah, Aman, dan Terpercaya"
- 4 langkah bernomor dengan ikon lingkaran, dihubungkan panah:
  1. Pilih Produk
  2. Konsultasi
  3. Pembayaran
  4. Pengiriman / Layanan

### Proses Kami (Timeline)
- Label "PROSES KAMI", heading "Dari Peternakan hingga Ke Tangan Anda"
- 5 titik pada garis horizontal (ikon lingkaran hijau + judul + deskripsi):
  1. Seleksi Domba
  2. Perawatan Optimal
  3. Pemeriksaan Kesehatan
  4. Siap Disalurkan
  5. Pengiriman Aman
- Background: ilustrasi sketsa peternakan samar-samar

### Galeri & Testimoni (2 kolom)
- Kiri — "GALERI PETERNAKAN": grid foto (1 besar + beberapa kecil), tombol "Lihat Semua Galeri →"
- Kanan — "TESTIMONI PELANGGAN": video testimoni pelanggan, kutipan singkat, nama & lokasi (mis. Bapak Hendra, Jakarta), rating bintang 4.9/5 dari 2.350+ ulasan, deretan avatar pelanggan

### Artikel & Edukasi
- Label "ARTIKEL & EDUKASI", heading "Belajar, Berbagi, Menginspirasi"
- 4 kartu artikel (foto + kategori/tag + tanggal + judul + link "Baca Selengkapnya →")
- Navigasi carousel (panah kiri/kanan)

### CTA Banner
- Background hijau tua penuh lebar, foto domba di kanan
- Heading "Siap Berqurban Bersama Dombantara?"
- Subteks ajakan
- Tombol "Hubungi Kami via WhatsApp"

### Footer
- Background hijau tua/hitam kehijauan
- Kolom 1: logo + tagline singkat + ikon sosial media (Instagram, Facebook, YouTube, TikTok)
- Kolom 2-5: link navigasi — Produk (Qurban, Aqiqah, Bibit Domba, Susu & Olahan), Kemitraan (Menjadi Mitra, Keuntungan Mitra, Cara Bergabung), Perusahaan (Tentang Kami, Visi & Misi, Tim Kami), Bantuan (FAQ, Kebijakan Privasi, Syarat & Ketentuan)
- Kolom 6: Kontak Kami (telepon, email, alamat kantor pusat — Bogor, Jawa Barat)
- Baris bawah: copyright

## 4. Komponen yang Perlu Dibuat (Dev Checklist)

- [ ] Navbar dengan dropdown "Produk"
- [ ] Hero dengan video/gambar background + overlay + stats bar
- [ ] Section "Tentang Kami" (video thumbnail + fitur list)
- [ ] Card grid "Kenapa Memilih Dombantara" (4 kartu ikon)
- [ ] Card grid "Produk Kami" (4 kartu gambar + link)
- [ ] Step indicator "Cara Kerja" (4 langkah + panah)
- [ ] Timeline horizontal "Proses Kami" (5 titik)
- [ ] Galeri grid + video testimoni (2 kolom)
- [ ] Carousel artikel/edukasi
- [ ] CTA banner full-width
- [ ] Footer multi-kolom

## 5. Catatan

- Semua CTA utama mengarah ke WhatsApp (konsisten dengan model bisnis broker/konsultasi Dombantara).
- Struktur mengikuti pola "trust building → produk → proses → sosial proof → konversi" yang umum untuk situs company profile agribisnis.
