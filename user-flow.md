# User Flow — Website Dombantara

Melengkapi `arsitektur-dombantara.md`. Dokumen ini memetakan alur pengguna per persona, disesuaikan dengan route yang sudah didefinisikan: halaman utama, `admin`, `member`.

---

## 1. Persona

| Persona | Route group | Aktif mulai fase |
|---|---|---|
| Pembeli B2B (resto, warung sate/soto/gulai, nasi Arab) | Landing Page | 1 |
| Calon mitra peternak / jagal | Landing Page → `admin` internal | 1–2 |
| Tim ops Dombantara (internal) | `(dashboard)` | 2 |
| Mitra peternak terdaftar (self-service) | `(member)` | 3 |

---

## 2. Flow — Pembeli B2B (Fase 1, prioritas utama)

Tujuan flow: sampai ke WhatsApp secepat mungkin, tanpa friksi form/login.

```
Landing (/)
 ├─ Lihat hero: positioning + CTA WhatsApp langsung
 ├─ Scroll: solusi/produk (live animal vs karkas)
 ├─ (opsional) → /katalog
 │     └─ lihat varian produk, harga indikatif
 │     └─ CTA "Tanya via WhatsApp" per item
 ├─ (opsional) → /tentang
 │     └─ kredibilitas: mitra peternak, jagal, cakupan
 └─ → /kontak atau klik CTA WA mengambang
       └─ WhatsApp terbuka dengan pesan pre-filled
```

**Prinsip flow ini:**
- Tidak ada akun/login di jalur ini sama sekali.
- Maksimal 2 klik dari landing ke WhatsApp.
- CTA WA harus muncul di setiap section penting (hero, katalog, footer) — bukan cuma satu tempat.

---

## 3. Flow — Calon Mitra Peternak/Jagal (Fase 1–2)

```
Landing (/) atau langsung /kemitraan
 ├─ Baca syarat kemitraan (kualitas ternak, jadwal pasok)
 ├─ CTA "Daftar jadi Mitra" → form singkat (nama, lokasi kandang, kapasitas)
 │     └─ submit → notifikasi ke tim ops (belum perlu akun)
 └─ Tim ops follow-up manual via WhatsApp/telepon
     └─ Jika disetujui → tim ops input manual ke (dashboard)/mitra
```

Fase 1: form ini boleh sesederhana mungkin (bahkan Google Form dulu kalau perlu), asal datanya nanti konsisten dengan skema `mitra` di data-access layer supaya bisa dipindah tanpa rework.

---

## 4. Flow — Tim Ops Internal (Fase 2, setelah ada repeat order)

```
Login → (dashboard)/
 ├─ /mitra
 │    ├─ lihat daftar mitra peternak & jagal, kapasitas, status
 │    └─ tambah/update mitra baru (dari hasil follow-up manual)
 ├─ /order
 │    ├─ catat order B2B masuk (produk, qty, buyer, jadwal kirim)
 │    ├─ assign ke mitra peternak yang sesuai
 │    └─ tandai status: dipesan → dipotong (jika perlu jagal) → dikirim → lunas
 └─ /laporan
      └─ ringkasan: volume terjual, mitra aktif, repeat-order rate
```

Ini adalah tool internal, bukan untuk dilihat pembeli/mitra. Prioritas: cepat diinput dari HP, bukan dashboard kompleks.

---

## 5. Flow — Mitra Peternak Self-Service (Fase 3)

```
Login mitra → (member)/dashboard
 ├─ lihat riwayat pasokan yang sudah dikirim
 ├─ lihat status pembayaran
 ├─ update ketersediaan stok/kapasitas kandang
 └─ (lanjutan) ajukan pasokan baru langsung dari dashboard
```

Baru dibangun setelah `(dashboard)` internal fase 2 stabil dan jumlah mitra sudah cukup banyak sehingga follow-up manual tidak lagi efisien.

---

## 6. Prinsip Lintas Flow

1. **Fase 1 tidak boleh butuh akun apa pun** — semua flow publik berakhir di WhatsApp, bukan form kompleks atau checkout.
2. **Setiap flow baru di fase lanjut adalah tambahan, bukan pengganti** — pembeli B2B tetap bisa pakai jalur WA langsung walau `(member)` sudah aktif untuk mitra.
3. **Data yang diinput manual oleh ops di fase 2 harus mengikuti skema yang sama** dengan yang nanti dipakai self-service mitra di fase 3 — supaya migrasinya tinggal ganti UI, bukan ganti struktur data.
4. **Setiap CTA punya satu tujuan jelas** — jangan campur CTA "beli" dan CTA "jadi mitra" di komponen/section yang sama.
