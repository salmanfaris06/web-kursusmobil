# Panduan Mengganti Konten Website NASYA

Dokumen ini berisi petunjuk lengkap untuk mengganti teks, gambar, harga, dan konten lainnya di website NASYA Kursus Mengemudi Jambi.

---

## Daftar Isi

1. [Struktur File](#1-struktur-file)
2. [Mengganti Nomor WhatsApp](#2-mengganti-nomor-whatsapp)
3. [Mengganti Konten Hero Section](#3-mengganti-konten-hero-section)
4. [Mengganti Harga Paket](#4-mengganti-harga-paket)
5. [Mengganti Statistik](#5-mengganti-statistik)
6. [Mengganti Testimoni/Review](#6-mengganti-testimonireview)
7. [Mengganti Data Instruktur](#7-mengganti-data-instruktur)
8. [Mengganti FAQ](#8-mengganti-faq)
9. [Mengganti Informasi Kontak (Footer)](#9-mengganti-informasi-kontak-footer)
10. [Mengganti Gambar](#10-mengganti-gambar)
11. [Mengganti SEO & Meta Tags](#11-mengganti-seo--meta-tags)
12. [Tips Penting](#12-tips-penting)

---

## 1. Struktur File

Semua file konten berada di folder `src/components/landing/`:

```
src/
├── components/
│   └── landing/
│       ├── Hero.astro         ← Bagian header utama
│       ├── Pricing.astro      ← Harga paket kursus
│       ├── Stats.astro        ← Statistik & gallery
│       ├── Reviews.astro      ← Testimoni siswa
│       ├── Team.astro         ← Data instruktur
│       ├── FAQ.astro          ← Pertanyaan umum
│       ├── Footer.astro       ← Footer & kontak
│       ├── WhatsAppFAB.astro  ← Tombol WhatsApp melayang
│       ├── Header.astro       ← Navigasi
│       ├── CTA.astro          ← Call to Action
│       └── ...
└── layouts/
    └── Layout.astro           ← SEO & Meta tags
```

---

## 2. Mengganti Nomor WhatsApp

**PENTING:** Nomor WhatsApp digunakan di beberapa file. Ganti di SEMUA file berikut:

### File yang perlu diubah:

| File                                       | Baris      |
| ------------------------------------------ | ---------- |
| `src/components/landing/Hero.astro`        | Baris 10   |
| `src/components/landing/Pricing.astro`     | Baris 65   |
| `src/components/landing/FAQ.astro`         | Baris 29   |
| `src/components/landing/Team.astro`        | Baris 20   |
| `src/components/landing/Footer.astro`      | Baris 9    |
| `src/components/landing/WhatsAppFAB.astro` | Baris 2    |
| `src/components/landing/CTA.astro`         | (cek file) |

### Contoh format:

```javascript
// SEBELUM (contoh)
const whatsappLink =
  "https://wa.me/628127304929?text=Halo%20NASYA,%20saya%20ingin%20mendaftar%20kursus%20mengemudi";

// SESUDAH (ganti dengan nomor Anda)
const whatsappLink =
  "https://wa.me/628xxxxxxxxxx?text=Halo%20NASYA,%20saya%20ingin%20mendaftar%20kursus%20mengemudi";
```

**Format nomor:**

- Gunakan kode negara tanpa tanda `+` (contoh: `62` untuk Indonesia)
- Tidak boleh ada spasi atau tanda hubung
- Contoh: `628123456789` (bukan `+62-812-345-6789`)

---

## 3. Mengganti Konten Hero Section

**File:** `src/components/landing/Hero.astro`

### 3.1 Judul Utama (Baris 23-26)

```html
<!-- SEBELUM -->
<h1 class="hero-title ...">
  Kursus Mengemudi<br />
  <span class="text-primary">NASYA</span> Jambi
</h1>

<!-- SESUDAH (contoh) -->
<h1 class="hero-title ...">
  Belajar Nyetir<br />
  <span class="text-primary">Bersama NASYA</span>
</h1>
```

### 3.2 Subtitle (Baris 29-31)

```html
<p class="hero-subtitle ...">
  Belajar mengemudi dengan instruktur berpengalaman 10+ tahun. Dapatkan SIM
  dengan cepat, aman, dan terpercaya.
</p>
```

### 3.3 Badge/Keunggulan (Baris 35-52)

```html
<span>Antar-Jemput Gratis</span>
<!-- Badge 1 -->
<span>Jaminan Lulus SIM</span>
<!-- Badge 2 -->
<span>Instruktur 10+ Tahun</span>
<!-- Badge 3 -->
```

### 3.4 Social Proof (Baris 79)

```html
<span class="...">Dipercaya 500+ siswa di Jambi</span>
```

### 3.5 Tombol CTA (Baris 87)

```html
<span>Daftar NASYA Sekarang</span>
```

### 3.6 Floating Badge (Baris 119)

```html
<span class="...">Berpengalaman 10+ Tahun</span>
```

---

## 4. Mengganti Harga Paket

**File:** `src/components/landing/Pricing.astro`

### Struktur Data Paket (Baris 2-63)

```javascript
const plans = [
  {
    name: "Paket Manual - Basic", // Nama paket
    price: "Rp 750.000", // Harga
    period: "4x pertemuan", // Periode
    popular: false, // true = tampil "Rekomendasi"
    transmission: "manual", // manual atau matic
    features: [
      // Daftar fitur
      "4x pertemuan latihan mengemudi",
      "Durasi 1,5 jam per pertemuan",
      "Instruktur berpengalaman",
      "Mobil manual berkondisi baik",
      "Layanan antar-jemput",
    ],
  },
  // ... paket lainnya
];
```

### Menambah Paket Baru

Salin struktur di atas dan tambahkan ke array `plans`.

### Menghapus Paket

Hapus objek paket dari array `plans`.

### Catatan Harga (Baris 133-135)

```html
<p class="...">
  * Harga sudah termasuk bensin, mobil, dan instruktur. Hubungi kami untuk info
  lebih lanjut.
</p>
```

---

## 5. Mengganti Statistik

**File:** `src/components/landing/Stats.astro`

### Data Statistik (Baris 2-7)

```javascript
const stats = [
  { value: 500, suffix: "+", label: "Siswa Lulus" },
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 98, suffix: "%", label: "Tingkat Kelulusan" },
  { value: 4.9, suffix: "", label: "Rating Google" },
];
```

**Keterangan:**

- `value`: Angka statistik
- `suffix`: Akhiran ("+", "%", atau kosong "")
- `label`: Label di bawah angka

### Gallery Images (Baris 9-14)

```javascript
const galleryImages = [
  "https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop",
  // Tambahkan URL gambar lainnya
];
```

---

## 6. Mengganti Testimoni/Review

**File:** `src/components/landing/Reviews.astro`

### Data Review (Baris 2-21)

```javascript
const reviews = [
  {
    name: "Andi Pratama", // Nama siswa
    role: "Siswa NASYA", // Role/keterangan
    quote: "Belajar di NASYA ...", // Isi testimoni
    image: "https://...", // URL foto profil
  },
  // ... review lainnya
];
```

### Menambah Review Baru

Tambahkan objek baru ke array `reviews`:

```javascript
{
  name: "Nama Siswa Baru",
  role: "Siswa NASYA",
  quote: "Testimoni dari siswa...",
  image: "https://link-foto-profil.jpg"
}
```

---

## 7. Mengganti Data Instruktur

**File:** `src/components/landing/Team.astro`

### Data Instruktur (Baris 2-18)

```javascript
const instructors = [
  {
    name: "Instruktur Senior", // Nama instruktur
    role: "Instruktur berpengalaman 10+ tahun...", // Deskripsi
    image: "https://...", // URL foto
  },
  // ... instruktur lainnya
];
```

---

## 8. Mengganti FAQ

**File:** `src/components/landing/FAQ.astro`

### Data FAQ (Baris 2-27)

```javascript
const faqs = [
  {
    question: "Berapa biaya kursus mengemudi di NASYA?",
    answer: "NASYA menyediakan 4 paket: Paket Manual Basic...",
  },
  // ... FAQ lainnya
];
```

### Menambah FAQ Baru

```javascript
{
  question: "Pertanyaan baru?",
  answer: "Jawaban untuk pertanyaan baru."
}
```

---

## 9. Mengganti Informasi Kontak (Footer)

**File:** `src/components/landing/Footer.astro`

### Link Navigasi (Baris 2-7)

```javascript
const navLinks = [
  { label: "Harga", href: "#pricing" },
  { label: "Instruktur", href: "#team" },
  { label: "Tentang", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];
```

### Social Media Links (Baris 12-28)

```javascript
const socialLinks = [
  {
    icon: "...", // SVG path
    label: "Instagram",
    href: "#", // Ganti dengan link Instagram Anda
  },
  // ... social media lainnya
];
```

**Ganti `href: "#"` dengan link social media Anda:**

- Instagram: `https://instagram.com/username_anda`
- TikTok: `https://tiktok.com/@username_anda`

### Info Kontak (Baris 83-96)

```html
<li>Jambi, Indonesia</li>
<!-- Alamat -->
<li>+62 812-3456-7890</li>
<!-- Nomor telepon -->
<li>Senin - Minggu, 08:00 - 17:00</li>
<!-- Jam operasional -->
```

### Copyright (Baris 102-104)

```html
<p class="...">© 2026 NASYA Kursus Mengemudi. All rights reserved.</p>
```

---

## 10. Mengganti Gambar

### 10.1 Gambar dari URL (Unsplash, dll)

Gunakan format URL Unsplash dengan parameter:

```
https://images.unsplash.com/photo-ID?w=LEBAR&h=TINGGI&fit=crop
```

Contoh:

```
https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop
```

### 10.2 Gambar Lokal

1. Simpan gambar di folder `public/images/`
2. Referensikan dengan path `/images/nama-file.jpg`

```javascript
// Contoh penggunaan gambar lokal
const heroImage = "/images/hero-banner.jpg";
```

### 10.3 Ukuran Gambar yang Direkomendasikan

| Lokasi          | Ukuran (px) | Aspect Ratio |
| --------------- | ----------- | ------------ |
| Hero Banner     | 1920 x 1080 | 16:9         |
| Gallery         | 600 x 400   | 3:2          |
| Foto Instruktur | 600 x 600   | 1:1          |
| Foto Testimoni  | 200 x 200   | 1:1          |
| Avatar          | 100 x 100   | 1:1          |

---

## 11. Mengganti SEO & Meta Tags

**File:** `src/layouts/Layout.astro`

### Title & Description (Baris 14-17)

```javascript
const {
  title = "Kursus Mengemudi NASYA Jambi - Cepat, Aman, Terpercaya",
  description = "Kursus mengemudi terpercaya di Jambi...",
  ogImage = "/og-image.jpg",
} = Astro.props;
```

### Keywords (Baris 30)

```html
<meta name="keywords" content="kursus mengemudi jambi, les mobil jambi, ..." />
```

### Site URL (Baris 20)

```javascript
const siteUrl = "https://nasyajambi.vercel.app"; // Ganti dengan domain Anda
```

---

## 12. Tips Penting

### Sebelum Mengedit

1. **Backup file** sebelum melakukan perubahan
2. **Jalankan dev server** untuk melihat perubahan langsung:
   ```bash
   npm run dev
   ```
3. Buka `http://localhost:4321` di browser

### Format Teks

- Gunakan `<br />` untuk baris baru dalam HTML
- Gunakan `\n` untuk baris baru dalam JavaScript string
- Untuk karakter khusus di URL, gunakan encoding:
  - Spasi: `%20`
  - Koma: `%2C`

### Setelah Mengedit

1. **Simpan file** (Ctrl+S / Cmd+S)
2. **Refresh browser** untuk melihat perubahan
3. **Build & test** sebelum deploy:
   ```bash
   npm run build
   npm run preview
   ```

### Deploy ke Vercel

Setelah semua perubahan selesai:

```bash
git add .
git commit -m "Update konten website"
git push
```

Vercel akan otomatis deploy perubahan Anda.

---

## Contoh Perubahan Cepat

### Ganti Semua Nomor WhatsApp Sekaligus

Gunakan fitur "Find and Replace" di code editor:

1. Tekan `Ctrl+Shift+H` (VS Code)
2. Cari: `628127304929`
3. Ganti dengan: `628xxxxxxxxxx` (nomor Anda)
4. Klik "Replace All"

---

## Butuh Bantuan?

Jika ada pertanyaan atau kesulitan, hubungi developer atau buat issue di repository GitHub.

---

**Terakhir diupdate:** Januari 2026
