# Quick Reference - Edit Konten NASYA

## 📱 Nomor WhatsApp (GANTI DI SEMUA FILE!)

```
Cari: 628127304929
Ganti: [NOMOR_ANDA]
```

File yang perlu diubah:

- `Hero.astro` (baris 10)
- `Pricing.astro` (baris 65)
- `FAQ.astro` (baris 29)
- `Team.astro` (baris 20)
- `Footer.astro` (baris 9)
- `WhatsAppFAB.astro` (baris 2)

---

## 💰 Harga Paket → `Pricing.astro`

```javascript
{
  name: "Nama Paket",
  price: "Rp XXX.XXX",
  period: "Xx pertemuan",
  popular: true/false,  // true = badge "Rekomendasi"
  transmission: "manual" / "matic",
  features: ["Fitur 1", "Fitur 2", ...]
}
```

---

## 📊 Statistik → `Stats.astro`

```javascript
{ value: 500, suffix: "+", label: "Siswa Lulus" }
```

---

## ⭐ Testimoni → `Reviews.astro`

```javascript
{
  name: "Nama Siswa",
  role: "Siswa NASYA",
  quote: "Isi testimoni...",
  image: "https://..."
}
```

---

## 👨‍🏫 Instruktur → `Team.astro`

```javascript
{
  name: "Nama Instruktur",
  role: "Deskripsi singkat",
  image: "https://..."
}
```

---

## ❓ FAQ → `FAQ.astro`

```javascript
{
  question: "Pertanyaan?",
  answer: "Jawaban lengkap."
}
```

---

## 🔗 Social Media → `Footer.astro`

Cari `href: "#"` dan ganti dengan:

- Instagram: `https://instagram.com/username`
- TikTok: `https://tiktok.com/@username`

---

## 🖼️ Ukuran Gambar

| Lokasi     | Ukuran    |
| ---------- | --------- |
| Hero       | 1920x1080 |
| Gallery    | 600x400   |
| Instruktur | 600x600   |
| Avatar     | 100x100   |

---

## 🚀 Command

```bash
npm run dev      # Development
npm run build    # Build
npm run preview  # Preview build
```
