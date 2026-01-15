---
title: "NASYA Driving School Landing Page"
slug: "nasya-landing-page"
created: "2026-01-11"
status: "ready-for-dev"
stepsCompleted: [1, 2, 3, 4]
tech_stack: ["Astro 5.x", "Tailwind CSS 4.x", "TypeScript 5.x", "Vercel"]
files_to_modify: []
files_to_create:
  - "package.json"
  - "tsconfig.json"
  - "astro.config.mjs"
  - "tailwind.config.mjs"
  - ".gitignore"
  - "src/styles/global.css"
  - "src/layouts/Layout.astro"
  - "src/pages/index.astro"
  - "src/components/Header.astro"
  - "src/components/Hero.astro"
  - "src/components/Features.astro"
  - "src/components/FeatureCard.astro"
  - "src/components/PackageCard.astro"
  - "src/components/Packages.astro"
  - "src/components/TestimonialCard.astro"
  - "src/components/Testimonials.astro"
  - "src/components/Location.astro"
  - "src/components/Footer.astro"
  - "src/components/WhatsAppFAB.astro"
  - "src/data/site.ts"
  - "src/data/packages.ts"
  - "src/data/testimonials.ts"
  - "src/data/features.ts"
  - "public/favicon.svg"
code_patterns:
  [
    "Astro components",
    "Tailwind utility-first",
    "TypeScript data files",
    "Static site generation",
  ]
test_patterns: ["Visual testing", "Lighthouse audit", "Cross-device testing"]
---

# Tech-Spec: NASYA Driving School Landing Page

**Created:** 2026-01-11  
**Status:** ✅ Ready for Development

---

## Overview

### Problem Statement

NASYA driving school owner di Jambi menghabiskan waktu berlebihan untuk menjawab pertanyaan berulang via chat/telepon (harga, manual/matic, lokasi). Calon siswa ragu mendaftar karena tidak ada informasi transparan yang bisa diakses secara online, menyebabkan hilangnya leads potensial.

### Solution

Membuat static landing page dengan Astro + Tailwind CSS yang menampilkan semua informasi penting (paket, harga, lokasi, USP) secara transparan, dengan CTA langsung ke WhatsApp untuk konversi leads.

### Scope

**In Scope:**

- Hero section dengan headline + USP badges + primary CTA
- Features section dengan 3 keunggulan utama (Antar-Jemput, Jaminan SIM, Instruktur Berpengalaman)
- 4 Package cards (Manual Basic/Pro, Matic Basic/Pro) dengan harga
- Testimonials section (3-5 dummy reviews)
- Google Maps embed untuk lokasi
- Floating WhatsApp button (FAB)
- Mobile-first responsive design
- SEO meta tags
- Deploy ke Vercel

**Out of Scope:**

- User login/registration
- Payment gateway integration
- Real-time schedule booking
- Admin dashboard
- Blog/CMS

---

## Context for Development

### Codebase Status

**CONFIRMED CLEAN SLATE** - No existing codebase. Project will be initialized from scratch.

### Tech Stack

| Layer     | Technology   | Version |
| --------- | ------------ | ------- |
| Framework | Astro        | ^5.0.0  |
| Styling   | Tailwind CSS | ^4.0.0  |
| Language  | TypeScript   | ^5.0.0  |
| Hosting   | Vercel       | -       |

### Project Structure

```
nasya_kursusmobil/
├── public/
│   ├── favicon.svg
│   └── images/              # Placeholder images
├── src/
│   ├── components/          # Astro components
│   ├── layouts/             # Base layout
│   ├── pages/               # Routes
│   ├── data/                # Content data (TS)
│   └── styles/              # Global CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Design Tokens

```typescript
// Colors
const colors = {
  primary: "#1E40AF", // Blue-800 - main brand
  secondary: "#3B82F6", // Blue-500 - accents
  accent: "#25D366", // WhatsApp green
  dark: "#1F2937", // Gray-800 - text
  light: "#F9FAFB", // Gray-50 - backgrounds
};

// Typography
const fonts = {
  sans: ["Inter", "system-ui", "sans-serif"],
};
```

---

## Implementation Plan

### Phase 1: Project Setup (Tasks 1-5)

- [ ] **Task 1: Initialize Astro Project**

  - File: `package.json`
  - Action: Run `npm create astro@latest` or create manually with dependencies
  - Dependencies:
    ```json
    {
      "name": "nasya-driving-school",
      "type": "module",
      "scripts": {
        "dev": "astro dev",
        "build": "astro build",
        "preview": "astro preview"
      },
      "dependencies": {
        "astro": "^5.0.0",
        "@astrojs/tailwind": "^6.0.0",
        "@astrojs/vercel": "^8.0.0",
        "@astrojs/sitemap": "^3.0.0"
      },
      "devDependencies": {
        "tailwindcss": "^4.0.0",
        "typescript": "^5.0.0"
      }
    }
    ```

- [ ] **Task 2: Create TypeScript Config**

  - File: `tsconfig.json`
  - Action: Configure TypeScript for Astro
  - Content:
    ```json
    {
      "extends": "astro/tsconfigs/strict",
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"],
          "@components/*": ["src/components/*"],
          "@layouts/*": ["src/layouts/*"],
          "@data/*": ["src/data/*"]
        }
      }
    }
    ```

- [ ] **Task 3: Configure Astro**

  - File: `astro.config.mjs`
  - Action: Setup Astro with Tailwind, Sitemap, and Vercel adapter
  - Content:

    ```javascript
    import { defineConfig } from "astro/config";
    import tailwind from "@astrojs/tailwind";
    import sitemap from "@astrojs/sitemap";
    import vercel from "@astrojs/vercel";

    export default defineConfig({
      output: "static",
      adapter: vercel(),
      integrations: [tailwind(), sitemap()],
      site: "https://nasya-driving.vercel.app",
    });
    ```

- [ ] **Task 4: Configure Tailwind**

  - File: `tailwind.config.mjs`
  - Action: Setup Tailwind with custom colors and fonts
  - Content:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
      theme: {
        extend: {
          colors: {
            primary: "#1E40AF",
            secondary: "#3B82F6",
            accent: "#25D366",
            dark: "#1F2937",
            light: "#F9FAFB",
          },
          fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
          },
        },
      },
      plugins: [],
    };
    ```

- [ ] **Task 5: Setup Global Styles**
  - File: `src/styles/global.css`
  - Action: Import Tailwind directives (v4 syntax)
  - Content:

    ```css
    @import "tailwindcss";

    /* Base styles */
    html {
      scroll-behavior: smooth;
    }
    ```

  - Notes: Tailwind v4 uses @import syntax. Custom utilities defined in tailwind.config.mjs.

### Phase 2: Data Layer (Tasks 6-9)

- [ ] **Task 6: Create Site Configuration**

  - File: `src/data/site.ts`
  - Action: Define site-wide config with WhatsApp number and nav links
  - Content:

    ```typescript
    export const siteConfig = {
      name: "NASYA",
      tagline: "Kursus Mengemudi Terpercaya di Jambi",
      phone: "628127304929", // TODO: Replace with real number
      whatsappMessage: "Halo, saya ingin mendaftar kursus mengemudi NASYA",
      address: "Jl. Contoh No. 123, Jambi", // TODO: Replace with real address
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082988!2d103.5610091!3d-1.6101229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588e4f1ad0c1b%3A0x6e9aaab89ef77e0!2sJambi%2C%20Kota%20Jambi%2C%20Jambi!5e0!3m2!1sen!2sid!4v1234567890", // TODO: Replace with exact coordinates
      social: {
        instagram: "", // TODO: Add real Instagram URL
        tiktok: "", // TODO: Add real TikTok URL
      },
      navLinks: [
        { label: "Keunggulan", href: "#features" },
        { label: "Paket", href: "#packages" },
        { label: "Testimoni", href: "#testimonials" },
        { label: "Lokasi", href: "#location" },
      ],
    };

    export const getWhatsAppUrl = (message?: string) => {
      const msg = encodeURIComponent(message || siteConfig.whatsappMessage);
      return `https://wa.me/${siteConfig.phone}?text=${msg}`;
    };
    ```

- [ ] **Task 7: Create Package Data**

  - File: `src/data/packages.ts`
  - Action: Define 4 packages with pricing
  - Content:

    ```typescript
    export interface Package {
      id: string;
      name: string;
      type: "manual" | "matic";
      tier: "basic" | "pro";
      meetings: number;
      price: number;
      priceFormatted: string;
      features: string[];
      recommended?: boolean;
    }

    export const packages: Package[] = [
      {
        id: "manual-basic",
        name: "Paket Manual - Basic",
        type: "manual",
        tier: "basic",
        meetings: 4,
        price: 500000,
        priceFormatted: "Rp 500.000",
        features: [
          "4x Pertemuan (@ 90 menit)",
          "Mobil Manual Terawat",
          "Instruktur Berpengalaman",
          "Antar-Jemput Gratis",
        ],
      },
      {
        id: "manual-pro",
        name: "Paket Manual - Pro",
        type: "manual",
        tier: "pro",
        meetings: 8,
        price: 900000,
        priceFormatted: "Rp 900.000",
        features: [
          "8x Pertemuan (@ 90 menit)",
          "Mobil Manual Terawat",
          "Instruktur Berpengalaman",
          "Antar-Jemput Gratis",
          "Jaminan Lulus SIM",
          "Simulasi Ujian Praktek",
        ],
        recommended: true,
      },
      {
        id: "matic-basic",
        name: "Paket Matic - Basic",
        type: "matic",
        tier: "basic",
        meetings: 4,
        price: 600000,
        priceFormatted: "Rp 600.000",
        features: [
          "4x Pertemuan (@ 90 menit)",
          "Mobil Matic Terawat",
          "Instruktur Berpengalaman",
          "Antar-Jemput Gratis",
        ],
      },
      {
        id: "matic-pro",
        name: "Paket Matic - Pro",
        type: "matic",
        tier: "pro",
        meetings: 8,
        price: 1100000,
        priceFormatted: "Rp 1.100.000",
        features: [
          "8x Pertemuan (@ 90 menit)",
          "Mobil Matic Terawat",
          "Instruktur Berpengalaman",
          "Antar-Jemput Gratis",
          "Jaminan Lulus SIM",
          "Simulasi Ujian Praktek",
        ],
        recommended: true,
      },
    ];
    ```

- [ ] **Task 8: Create Testimonial Data**

  - File: `src/data/testimonials.ts`
  - Action: Define 4 dummy testimonials
  - Content:

    ```typescript
    export interface Testimonial {
      id: string;
      name: string;
      role: string;
      quote: string;
      avatar?: string;
    }

    export const testimonials: Testimonial[] = [
      {
        id: "1",
        name: "Andi Pratama",
        role: "Mahasiswa",
        quote:
          "Instrukturnya sabar banget! Saya yang awalnya takut nyetir, sekarang udah lancar dan lulus SIM A.",
      },
      {
        id: "2",
        name: "Siti Rahayu",
        role: "Ibu Rumah Tangga",
        quote:
          "Pelayanan antar-jemput sangat membantu. Tidak perlu repot ke tempat kursus, instruktur yang datang.",
      },
      {
        id: "3",
        name: "Budi Santoso",
        role: "Karyawan Swasta",
        quote:
          "Recommended! Cuma 8x pertemuan langsung bisa. Harga juga worth it dengan fasilitas yang didapat.",
      },
      {
        id: "4",
        name: "Dewi Anggraini",
        role: "Fresh Graduate",
        quote:
          "NASYA beneran jamin lulus SIM. Instrukturnya kasih tips & trik yang berguna banget pas ujian.",
      },
    ];
    ```

- [ ] **Task 9: Create Features Data**

  - File: `src/data/features.ts`
  - Action: Define 3 main features/keunggulan
  - Content:

    ```typescript
    export interface Feature {
      id: string;
      title: string;
      description: string;
      icon: "car" | "certificate" | "users";
    }

    export const features: Feature[] = [
      {
        id: "pickup",
        title: "Antar-Jemput Gratis",
        description:
          "Tidak perlu repot ke tempat kursus. Instruktur kami yang akan menjemput Anda di lokasi yang disepakati.",
        icon: "car",
      },
      {
        id: "guarantee",
        title: "Jaminan Lulus SIM",
        description:
          "Kami berkomitmen membimbing Anda hingga berhasil mendapatkan SIM. Garansi mengulang gratis jika belum lulus.",
        icon: "certificate",
      },
      {
        id: "experience",
        title: "Instruktur Berpengalaman 10+ Tahun",
        description:
          "Tim instruktur profesional dengan pengalaman lebih dari 10 tahun dalam mengajar mengemudi dengan aman.",
        icon: "users",
      },
    ];
    ```

### Phase 3: Layout & Base Components (Tasks 10-12)

- [ ] **Task 10: Create Base Layout**

  - File: `src/layouts/Layout.astro`
  - Action: Create base HTML layout with SEO meta tags
  - Content:

    ```astro
    ---
    import '../styles/global.css';
    import { siteConfig } from '../data/site';

    interface Props {
      title?: string;
      description?: string;
    }

    const {
      title = `${siteConfig.name} - Kursus Mengemudi Jambi`,
      description = 'Kursus mengemudi terpercaya di Jambi. Instruktur berpengalaman 10+ tahun, antar-jemput gratis, jaminan lulus SIM. Daftar sekarang!'
    } = Astro.props;
    ---

    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="kursus mengemudi jambi, les mobil jambi, belajar nyetir jambi, SIM jambi" />

        <!-- Open Graph -->
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <title>{title}</title>
      </head>
      <body class="min-h-screen flex flex-col">
        <slot />
      </body>
    </html>
    ```

- [ ] **Task 11: Create WhatsApp FAB Component**

  - File: `src/components/WhatsAppFAB.astro`
  - Action: Create floating WhatsApp button
  - Content:

    ```astro
    ---
    import { getWhatsAppUrl } from '../data/site';
    const whatsappUrl = getWhatsAppUrl();
    ---

    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat via WhatsApp"
    >
      <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
    ```

- [ ] **Task 12: Create Header/Navigation Component**

  - File: `src/components/Header.astro`
  - Action: Create simple header with logo and anchor nav links
  - Content:

    ```astro
    ---
    import { siteConfig, getWhatsAppUrl } from '../data/site';
    ---

    <header class="bg-white shadow-sm sticky top-0 z-40">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="text-2xl font-bold text-primary">
          {siteConfig.name}
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <a href={link.href} class="text-dark hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t px-4 py-4">
        {siteConfig.navLinks.map((link) => (
          <a href={link.href} class="block py-2 text-dark hover:text-primary">
            {link.label}
          </a>
        ))}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          class="block mt-2 bg-primary text-white text-center px-4 py-2 rounded-lg"
        >
          Daftar Sekarang
        </a>
      </div>
    </header>

    <script>
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      btn?.addEventListener('click', () => menu?.classList.toggle('hidden'));
    </script>
    ```

### Phase 4: Section Components (Tasks 13-21)

- [ ] **Task 13: Create Hero Component**

  - File: `src/components/Hero.astro`
  - Action: Create hero section with headline and primary CTA
  - Content:

    ```astro
    ---
    import { siteConfig, getWhatsAppUrl } from '../data/site';
    ---

    <section class="bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Kursus Mengemudi<br />
          <span class="text-accent">Terpercaya</span> di Jambi
        </h1>

        <!-- Subheadline -->
        <p class="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {siteConfig.tagline}. Dapatkan SIM dengan mudah bersama instruktur berpengalaman 10+ tahun.
        </p>

        <!-- CTA Button -->
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Daftar NASYA Sekarang
        </a>

        <!-- Trust badges -->
        <div class="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <span class="bg-white/20 px-4 py-2 rounded-full">✓ Antar-Jemput Gratis</span>
          <span class="bg-white/20 px-4 py-2 rounded-full">✓ Jaminan Lulus SIM</span>
          <span class="bg-white/20 px-4 py-2 rounded-full">✓ 10+ Tahun Pengalaman</span>
        </div>
      </div>
    </section>
    ```

- [ ] **Task 14: Create Feature Card Component**

  - File: `src/components/FeatureCard.astro`
  - Action: Create reusable feature card with icon, title, and description
  - Content:

    ```astro
    ---
    import type { Feature } from '../data/features';

    interface Props {
      feature: Feature;
    }

    const { feature } = Astro.props;

    const icons = {
      car: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 5h8m-4-9v18m-7-4h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />',
      certificate: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />',
      users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />',
    };
    ---

    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <Fragment set:html={icons[feature.icon]} />
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
      <p class="text-gray-600">{feature.description}</p>
    </div>
    ```

- [ ] **Task 15: Create Features Section**

  - File: `src/components/Features.astro`
  - Action: Create 3-column grid showcasing main USPs
  - Content:

    ```astro
    ---
    import FeatureCard from './FeatureCard.astro';
    import { features } from '../data/features';
    ---

    <section id="features" class="py-16 lg:py-24 bg-light">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-dark mb-4">
          Kenapa Pilih NASYA?
        </h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kami menyediakan layanan kursus mengemudi terbaik dengan berbagai keunggulan untuk kenyamanan Anda.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard feature={feature} />
          ))}
        </div>
      </div>
    </section>
    ```

- [ ] **Task 16: Create Package Card Component**

  - File: `src/components/PackageCard.astro`
  - Action: Create reusable package card with props
  - Notes: Accept Package interface, show "Recommended" badge for pro tiers

- [ ] **Task 17: Create Packages Section**

  - File: `src/components/Packages.astro`
  - Action: Create 4-card grid using PackageCard
  - Notes: 2x2 grid on desktop, 1 column on mobile. Include section id="packages"

- [ ] **Task 18: Create Testimonial Card Component**

  - File: `src/components/TestimonialCard.astro`
  - Action: Create reusable testimonial card
  - Content:

    ```astro
    ---
    import type { Testimonial } from '../data/testimonials';

    interface Props {
      testimonial: Testimonial;
    }

    const { testimonial } = Astro.props;

    // Generate gradient avatar based on name
    const initials = testimonial.name.split(' ').map(n => n[0]).join('');
    ---

    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="flex items-center gap-4 mb-4">
        <!-- Avatar placeholder -->
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
          {initials}
        </div>
        <div>
          <h4 class="font-semibold text-dark">{testimonial.name}</h4>
          <p class="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p class="text-gray-600 italic">"{testimonial.quote}"</p>
    </div>
    ```

- [ ] **Task 19: Create Testimonials Section**

  - File: `src/components/Testimonials.astro`
  - Action: Create testimonial cards grid using TestimonialCard
  - Notes: Include section id="testimonials", 2 columns on tablet, 4 on desktop

- [ ] **Task 20: Create Location Section**

  - File: `src/components/Location.astro`
  - Action: Create Google Maps embed + contact info
  - Notes: Responsive iframe with loading skeleton, section id="location", show WhatsApp CTA

- [ ] **Task 21: Create Footer Component**
  - File: `src/components/Footer.astro`
  - Action: Create simple footer with copyright
  - Notes: Include social links (if available), copyright year

### Phase 5: Main Page & Assets (Tasks 22-24)

- [ ] **Task 22: Create Main Landing Page**

  - File: `src/pages/index.astro`
  - Action: Assemble all components in correct order
  - Content:

    ```astro
    ---
    import Layout from '../layouts/Layout.astro';
    import Header from '../components/Header.astro';
    import Hero from '../components/Hero.astro';
    import Features from '../components/Features.astro';
    import Packages from '../components/Packages.astro';
    import Testimonials from '../components/Testimonials.astro';
    import Location from '../components/Location.astro';
    import Footer from '../components/Footer.astro';
    import WhatsAppFAB from '../components/WhatsAppFAB.astro';
    ---

    <Layout>
      <Header />
      <main>
        <Hero />
        <Features />
        <Packages />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFAB />
    </Layout>
    ```

- [ ] **Task 23: Create Favicon**

  - File: `public/favicon.svg`
  - Action: Create simple SVG favicon with "N" letter
  - Notes: Blue background, white text

- [ ] **Task 24: Create Placeholder Images**
  - Files: `public/images/` directory
  - Action: Create directory and add placeholder note
  - Notes: Will be replaced with real photos later

### Phase 6: Deployment (Tasks 25-26)

- [ ] **Task 25: Create .gitignore**

  - File: `.gitignore`
  - Action: Create .gitignore with standard Astro ignores
  - Content:

    ```
    # Dependencies
    node_modules/

    # Build output
    dist/
    .vercel/

    # Environment
    .env
    .env.local
    .env.production

    # IDE
    .vscode/
    .idea/
    *.swp
    *.swo

    # OS
    .DS_Store
    Thumbs.db

    # Logs
    *.log
    npm-debug.log*
    ```

- [ ] **Task 26: Deploy to Vercel**
  - Action: Connect repo to Vercel and deploy
  - Steps:
    1. Initialize git repo: `git init`
    2. Create `.gitignore`
    3. Commit all files
    4. Connect to Vercel via CLI or dashboard
    5. Deploy and verify

---

## Acceptance Criteria

### Core Functionality

- [ ] **AC-1:** Given a user visits the homepage, when the page loads, then they see the Hero section with NASYA branding and primary CTA button within 3 seconds.

- [ ] **AC-2:** Given a user scrolls past the Hero section, when viewing the Features section, then they see 3 feature cards highlighting Antar-Jemput, Jaminan SIM, and Instruktur Berpengalaman.

- [ ] **AC-3:** Given a user is on any section of the page, when they look at the bottom-right corner, then they see a floating WhatsApp button that stays fixed during scroll.

- [ ] **AC-4:** Given a user clicks the WhatsApp FAB or any "Daftar Sekarang" button, when redirected, then WhatsApp opens with pre-filled message "Halo, saya ingin mendaftar kursus mengemudi NASYA".

- [ ] **AC-5:** Given a user views the Packages section, when comparing options, then they see 4 distinct cards (Manual Basic, Manual Pro, Matic Basic, Matic Pro) with clear pricing and features.

- [ ] **AC-6:** Given a user views the Testimonials section, when reading reviews, then they see at least 3 testimonials with names and quotes.

- [ ] **AC-7:** Given a user views the Location section, when looking at the map, then they see an interactive Google Maps embed showing the Jambi location.

### Responsive Design

- [ ] **AC-8:** Given a user visits on mobile device (< 768px), when viewing any section, then the layout adapts to single-column view with readable text and tappable buttons.

- [ ] **AC-9:** Given a user visits on tablet (768px - 1024px), when viewing packages, then they see a 2-column grid layout.

- [ ] **AC-10:** Given a user visits on desktop (> 1024px), when viewing the full page, then they see proper spacing, max-width containers, and 2x2 or 4-column package grid.

### Performance

- [ ] **AC-11:** Given the site is audited with Lighthouse, when measuring performance, then the score is 90+ for Performance, Accessibility, Best Practices, and SEO.

- [ ] **AC-12:** Given a user on mobile data, when loading the page, then the largest contentful paint (LCP) occurs within 2.5 seconds.

### SEO

- [ ] **AC-13:** Given a search engine crawls the site, when indexing, then it finds proper meta title, description, and Open Graph tags.

---

## Additional Context

### Dependencies

| Package           | Version | Purpose                   |
| ----------------- | ------- | ------------------------- |
| astro             | ^5.0.0  | Core framework            |
| @astrojs/tailwind | ^6.0.0  | Tailwind integration      |
| @astrojs/vercel   | ^8.0.0  | Vercel deployment adapter |
| tailwindcss       | ^4.0.0  | Utility-first CSS         |
| typescript        | ^5.0.0  | Type safety               |

### Testing Strategy

| Type          | Method                 | Coverage                              |
| ------------- | ---------------------- | ------------------------------------- |
| Visual        | Manual browser testing | All sections, 3 breakpoints           |
| Functional    | Click testing          | All CTAs link to correct WhatsApp URL |
| Performance   | Lighthouse audit       | Target 90+ all categories             |
| Cross-browser | BrowserStack or manual | Chrome, Safari, Firefox               |
| Mobile        | Real device testing    | iOS Safari, Android Chrome            |

### Risk Items

1. **Google Maps Embed** - May need API key for production; fallback to static map image
2. **WhatsApp Deep Link** - Works differently on desktop vs mobile; tested wa.me format
3. **Font Loading** - Inter font from Google Fonts; has fallback to system fonts

### Future Considerations (Out of Scope)

- Online payment integration
- Schedule booking system
- Multi-language support
- Blog/content section
- Student portal

---

## Notes

### Content Placeholders (To Be Replaced)

| Item            | Current Placeholder   | Action Needed              |
| --------------- | --------------------- | -------------------------- |
| WhatsApp Number | 628127304929          | Get real number from owner |
| Package Prices  | Rp 500K - 1.1M        | Confirm exact prices       |
| Testimonials    | 4 dummy reviews       | Get real testimonials      |
| Photos          | Gradient placeholders | Get car/instructor photos  |
| Map Location    | Generic Jambi         | Get exact coordinates      |

### Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
