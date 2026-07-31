# Arsitektur Website Dombantara

Dokumen ini adalah cetak biru teknis untuk membangun website Dombantara agar rapi, konsisten dengan "cetakan" starter template, dan bisa dipakai dari fase 1 (landing/validasi) sampai fase 3 (ekosistem multi-platform) tanpa bongkar ulang.

---

## 1. Prinsip Arsitektur

1. **Frontend-first** — UI/UX selesai & disetujui dulu dengan dummy data sebelum ada satu pun query backend nyata.
2. **Satu lapisan abstraksi data** — komponen UI *tidak pernah* memanggil sumber data langsung (baik dummy maupun InsForge). Semua lewat `data-access layer` agar saat pindah dari mock ke backend asli, tidak ada perubahan di komponen.
3. **Struktur per-fase tidak berarti folder per-fase** — jangan bikin folder `/fase1`, `/fase2`. Struktur di bawah didesain agar fitur baru tinggal *ditambah*, bukan memaksa reorganisasi folder yang sudah ada.
4. **Governed by AGENTS.md** — semua kerja AI/dev mengacu ke file governance project + PRD sebagai source of truth.

---

## 2. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Backend/DB | InsForge |
| Prototyping | Emergent.sh (ATM/observe-replicate, mockup dari Gemini) |
| Dev produksi | Antigravity IDE |
| Starter | Template "cetakan" |

---

## 3. Struktur Folder

```
dombantara-web/
├── AGENTS.md                     # governance: aturan kerja AI/dev, referensi PRD
├── app/                          # Next.js App Router
│   ├── (marketing)/              # grup route publik — fase 1
│   │   ├── page.tsx              # landing utama
│   │   ├── tentang/
│   │   ├── katalog/              # katalog produk (live animal + karkas)
│   │   ├── kemitraan/            # halaman kemitraan peternak/jagal
│   │   ├── artikel/
│   │   └── kontak/
│   ├── (dashboard)/              # grup route internal — aktif mulai fase 2
│   │   ├── layout.tsx            # auth-gated layout
│   │   ├── mitra/                # data mitra peternak & jagal
│   │   ├── order/                # order B2B, jadwal pasok
│   │   └── laporan/
│   ├── (member)/                 # grup route eksternal untuk mitra — fase 3
│   │   └── dashboard/
│   ├── api/                      # route handlers (proxy tipis ke InsForge)
│   └── layout.tsx
├── components/
│   ├── ui/                       # elemen dasar (button, card, badge) — design system
│   ├── marketing/                # komponen khusus landing/publik
│   ├── dashboard/                # komponen khusus internal ops
│   └── shared/                   # dipakai lintas grup (nav, footer, WA CTA)
├── lib/
│   ├── mock-data/                # dummy data, 1:1 dengan skema masa depan
│   │   ├── mitra.ts
│   │   ├── produk.ts
│   │   └── order.ts
│   ├── data-access/               # satu-satunya pintu ke data
│   │   ├── mitra.service.ts
│   │   ├── produk.service.ts
│   │   └── order.service.ts
│   ├── types/                     # tipe data bersama (dipakai mock & data-access)
│   └── utils/
├── styles/
│   └── tokens.ts                  # design tokens (lihat bagian 5)
└── public/
```

Kenapa dipisah `(marketing)` / `(dashboard)` / `(member)` sebagai *route groups* Next.js: masing-masing bisa punya layout, auth-gate, dan tim kerja berbeda, tapi tetap satu codebase, satu deploy. Saat fase 2/3 aktif, tinggal isi folder yang sudah ada tempatnya — tidak ada migrasi struktur.

---

## 4. Alur Data (Mock → Backend, tanpa refactor komponen)

```
Komponen UI
   ↓ import
lib/data-access/produk.service.ts
   ↓ (fase 1-awal)              ↓ (setelah backend disetujui)
lib/mock-data/produk.ts         InsForge query
```

Aturan: `produk.service.ts` selalu punya signature fungsi yang sama (`getProdukList()`, `getProdukById(id)`, dst), baik isinya masih baca dari mock-data atau sudah query InsForge. Komponen tidak tahu dan tidak peduli mana yang dipakai.

**Checklist audit sebelum handoff ke backend** (sesuai alur kerja yang sudah berjalan): cocokkan tiap field/action yang dipakai UI terhadap `types/` dan `mock-data/` yang ada, baru rancang skema InsForge — supaya tidak ada data yang kelewat.

---

## 5. Design System

Konsisten dengan brand yang sudah dibangun (dark luxury aesthetic):

- **Tipografi**: Bebas Neue untuk heading/display, sans-serif netral untuk body.
- **Warna**: palet dark base + aksen (didefinisikan di `styles/tokens.ts`, bukan hardcode di komponen).
- **Motion**: scroll animation untuk section reveal, dipakai konsisten lewat satu util/hook bersama, bukan diulang per halaman.
- **Grafis**: SVG geometric art sebagai elemen dekoratif, disimpan di `public/graphics/` dan dipakai sebagai komponen React, bukan gambar statis besar.

Semua token (warna, spacing, font-scale) didefinisikan sekali di `styles/tokens.ts` dan dikonsumsi oleh Tailwind config — supaya konsisten dan gampang diubah di satu tempat saat rebranding parsial.

---

## 6. Pemetaan Fase → Bagian yang Aktif

| Fase | Route group aktif | Data layer |
|---|---|---|
| 1 — Validasi pasar | `(marketing)` saja | 100% `mock-data`, CTA utama WhatsApp |
| 2 — Ops mitra & repeat order | `(marketing)` + `(dashboard)` | `data-access` mulai pindah ke InsForge per-modul (mitra dulu, lalu order) |
| 3 — Ekosistem/member area | + `(member)` | Full InsForge, `(member)` untuk mitra peternak lihat performa/pembayaran |

Tidak ada fase yang menghapus/mengubah struktur fase sebelumnya — hanya menambah isi ke folder yang sudah disiapkan.

---

## 7. Governance (AGENTS.md — wajib per project)

Isi minimal `AGENTS.md`:
- Aturan frontend-first: tidak ada query backend/InsForge sebelum UI disetujui eksplisit.
- Lokasi dummy data (`lib/mock-data`) dan kewajiban lewat `lib/data-access`.
- Referensi wajib: Context7 (MCP) + PRD project sebagai source of truth untuk setiap task AI.
- Prosedur handoff backend: audit field/action UI vs mock-data/types sebelum menulis skema InsForge.

---

## 8. Alur Kerja Build

1. Mockup di Gemini → prototipe cepat di Emergent.sh (metode ATM/observe-replicate).
2. Pindah ke Antigravity IDE dengan starter "cetakan" untuk hardening produksi.
3. Bangun `(marketing)` dulu, penuh dummy data.
4. Setelah approve UI, audit field vs `mock-data`/`types`, baru rancang skema InsForge.
5. Aktifkan `(dashboard)` saat mitra & repeat order mulai jalan — tidak sebelumnya.
6. Aktifkan `(member)` saat masuk fase ekosistem/skala.
