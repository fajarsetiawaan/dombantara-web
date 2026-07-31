# Desain — Website Dombantara

Memperluas bagian Design System di `arsitektur-dombantara.md` menjadi spesifikasi lengkap. Semua nilai di sini didefinisikan sekali di `styles/tokens.ts` dan dikonsumsi lewat Tailwind config — tidak ada hardcode warna/font di komponen.

---

## 1. Arah Visual

**Light corporate aesthetic** — kesan profesional, bersih, dan institusional (mengikuti gaya nusaqu.id). Ini penting karena target awal adalah pembeli B2B (resto, horeca) yang menilai kredibilitas dari kesan pertama yang rapi, bersih, dan mudah dipindai.

Mood: lugas, minim ornamen berlebihan, background putih/terang dengan aksen hijau zamrud yang segar.

---

## 2. Tipografi

| Peran | Font | Catatan |
|---|---|---|
| Display/Heading | Sans-serif bold (misal Inter) | Dipakai tegas untuk judul section, angka statistik |
| Body/UI | Sans-serif netral (misal Inter) | Keterbacaan tinggi di ukuran kecil, kontras dengan heading lewat bobot (weight) |

Skala ukuran didefinisikan sebagai token (`text-display`, `text-h1`...`h3`, `text-body`, `text-caption`) — bukan ukuran bebas per komponen, supaya konsisten dan mudah di-audit.

---

## 3. Warna

Struktur token warna (nilai final ditentukan saat implementasi, prinsip strukturnya):

- `bg-base` — dasar terang/putih (dominan)
- `bg-surface` — abu sangat muda, untuk card/section pembeda
- `accent-primary` — warna aksen hijau brand Dombantara (CTA, badge, ikon)
- `text-primary` / `text-muted` — hitam/slate gelap untuk teks di atas background terang
- `border-subtle` — garis pembatas abu muda tipis

Aturan: hijau dipakai konsisten di titik-titik krusial (CTA WhatsApp, angka statistik). Jangan biarkan aksen jadi warna dominan section.

---

## 4. Grafis & Ikonografi

- **SVG geometric art** sebagai elemen dekoratif (garis, bentuk abstrak terinspirasi motif ternak/pertanian yang disederhanakan) — disimpan sebagai komponen React di `components/shared/graphics/`, bukan file gambar statis, supaya bisa diwarnai ulang via token dan ringan.
- **Fotografi**: gunakan foto terang natural dengan background putih/bersih, selaras dengan clean corporate look.
- **Ikon UI** (bukan dekoratif): set ikon garis tipis (line icon), konsisten stroke-width, dipakai untuk representasi kategori produk, status order, dll.

---

## 5. Motion

- **Scroll reveal**: section muncul dengan fade+slight-translate saat masuk viewport — dipakai lewat satu hook/util bersama (`useScrollReveal` atau setara), bukan diulang manual per halaman.
- **Micro-interaction**: hover state tombol/CTA halus (scale/opacity kecil), bukan animasi besar yang mengganggu.
- **Hindari** animasi berat di halaman katalog/produk yang butuh dibaca cepat oleh pembeli B2B yang terburu-buru.

---

## 6. Komponen Inti (`components/ui/`)

Dibangun sebagai design system kecil, dipakai lintas `(marketing)` dan `(dashboard)`:

| Komponen | Kebutuhan utama |
|---|---|
| `Button` | variant: primary (CTA WA), secondary, ghost |
| `Card` | untuk produk, mitra, statistik |
| `Badge` | status order (dipesan/dikirim/lunas), kategori produk |
| `StatCounter` | angka statistik gaya nusaQu (mitra aktif, ekor terkirim) — tampil hanya kalau datanya nyata |
| `WhatsAppCTA` | komponen CTA WA yang konsisten, dipakai di hero/katalog/footer/floating |
| `SectionHeading` | heading + eyebrow text, dipakai tiap section marketing |

Semua komponen `(dashboard)` internal dibedakan visual (lebih fungsional, kontras lebih rendah, densitas informasi lebih tinggi) dari komponen `(marketing)` yang lebih dekoratif — jangan pakai `Card` versi marketing yang penuh animasi untuk tabel data ops.

---

## 7. Layout & Spacing

- Grid dasar 8pt (spacing kelipatan 8px) sebagai token spacing — konsisten antar section.
- Section marketing: padding vertikal besar & lega (kesan premium); dashboard internal: padding lebih rapat (kesan efisien/kerja).
- Container width dibatasi (misal `max-w-7xl`) untuk `(marketing)`; `(dashboard)` boleh full-width untuk tabel data.

---

## 8. Prinsip Konsistensi Lintas Fase

1. Token desain (warna, font, spacing) **satu sumber kebenaran** — dipakai sama baik di fase 1 landing maupun fase 3 member area, supaya brand tetap terasa satu ekosistem.
2. `(marketing)` boleh lebih ekspresif (animasi, grafis besar); `(dashboard)` dan `(member)` harus lebih fungsional — beda kebutuhan, tapi tetap dari satu design token yang sama, bukan dua sistem desain terpisah.
3. Statistik/social proof (`StatCounter`) baru ditampilkan di landing setelah datanya nyata — jangan pajang angka kosong/placeholder di production.
