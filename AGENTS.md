# Aturan Kerja (Governance) Dombantara

Dokumen ini mendokumentasikan aturan-aturan yang wajib dipatuhi oleh agen AI dan pengembang (developer) saat bekerja pada repositori `dombantara.id`.

## 1. Frontend-First Principle
- **Tidak ada query backend nyata di awal**. Seluruh data produk, mitra, dan order harus menggunakan *dummy data* (mock data) hingga antarmuka pengguna (UI/UX) disetujui.
- **Jangan menulis query InsForge** sebelum ada instruksi eksplisit untuk menghubungkan ke backend nyata.

## 2. Abstraksi Data (Satu Lapisan Abstraksi)
- **Komponen UI TIDAK PERNAH mengimpor `lib/mock-data/` secara langsung.**
- Semua akses data (baik dari UI, Server Component, maupun Client Component) harus melewati fungsi-fungsi di dalam `lib/data-access/` (contoh: `mitra.service.ts`, `produk.service.ts`, `order.service.ts`).
- Fungsi di `lib/data-access/` adalah satu-satunya tempat yang membaca mock-data (untuk saat ini) atau memanggil InsForge (di masa depan).

## 3. Lokasi Data Mock & Tipe
- **Tipe Data**: Harus didefinisikan secara strict di dalam `lib/types/` dan dirancang 1:1 mengikuti kemungkinan skema InsForge di masa depan.
- **Mock Data**: Disimpan di `src/mocks/[nama-fitur].json` atau `lib/mock-data/` (lihat catatan di bawah). Mengikuti Global Standards (mock data di `src/mocks/` disesuaikan untuk Next.js App Router).
- **Toggle Ready**: Gunakan `const USE_MOCK = true` di layer service, agar memudahkan migrasi.

## 4. Source of Truth
Selalu rujuk ke dokumen berikut untuk mengambil keputusan (berdasarkan prioritas):
1. `@context7` untuk logika bisnis dan batasan teknis (prioritas tertinggi sesuai Global Standards).
2. `PRD-dombantara.md` untuk scope, fungsionalitas, dan aturan fase saat ini.
3. `arsitektur-dombantara.md` untuk struktur folder dan alur data.
4. `user-flow.md` untuk alur masing-masing persona.
5. `desain.md` untuk token desain, tipografi, dan komponen visual.

## 5. Struktur Route Groups
- Ikuti struktur folder normal:
  - `app/page.tsx`: Untuk landing page dan publik (Fase 1).
  - `app/admin`: Untuk internal ops (Fase 2).
  - `app/member`: Untuk mitra (Fase 3).
- **Jangan mengubah struktur folder per-fase**. Fitur baru ditambahkan ke folder yang sudah disiapkan tanpa tambahan tanda kurung (route groups).

## 6. Desain System (Dark Luxury Aesthetic)
- **Token Desain**: Seluruh token (warna, font scale, spacing) diatur di `styles/tokens.ts` dan dihubungkan ke `tailwind.config.ts`.
- **Tidak ada styling *ad-hoc* / warna hardcode** di komponen UI. Semuanya mengonsumsi Tailwind utility classes yang merujuk ke token desain.
- **Tipografi**: Gunakan **Bebas Neue** untuk heading/display, dan **Inter** (atau sans-serif netral lainnya) untuk body text.

## 7. Handoff ke Backend
- **Audit Wajib**: Sebelum menulis skema InsForge, lakukan pencocokkan ulang: pastikan setiap *field* yang dipakai di komponen UI sudah tercermin sepenuhnya di `lib/types/` dan `lib/mock-data/`.

## 8. Global Standards & Context
- **Primary Source of Truth**: Selalu jadikan `@context7` sebagai referensi utama.
- **Validation**: Verifikasi solusi kode agar sinkron dengan arsitektur di `@context7`.
- **Formatting**: Gunakan Clean Code, pastikan setiap fungsi memiliki type-hinting (TypeScript).
