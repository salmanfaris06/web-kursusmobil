export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  whatsapp: string;
  phone: string;
  email: string;
  address: string;
  addressShort: string;
  operatingHours: string;
  mapUrl: string;
  mapImage: string;
  heroImage: string;
  navLinks: NavLink[];
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "NASYA",
  tagline: "Kursus Mengemudi Terpercaya di Jambi",
  description:
    "Belajar mengemudi Cepat, Aman, & Terpercaya dengan instruktur profesional. Kami bantu sampai mahir dan dapat SIM.",
  whatsapp: "628127304929",
  phone: "+62 812-7304-929",
  email: "info@nasyajambi.vercel.app",
  address: "Jl. Pangeran Hidayat No. 45, Kota Baru, Jambi, Indonesia 36129",
  addressShort: "Jl. Pangeran Hidayat No. 45, Kota Baru, Jambi",
  operatingHours: "Senin - Minggu (08:00 - 17:00)",
  mapUrl: "https://maps.google.com/?q=Kursus+mengemudi+mobil+Nasya",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2aqb0YZc0ierdZn2mQrSpAEJR6VXSyr5Q-XHFSMorkzK0k6I-CWhuXnZgLL2dIMa8JTVTJps8ILlS-ht95k2HorSMTsH21WBTZSp_-S5QgH2O6wrYCggu4RXaRpRit1ukxXxEsREIKcaO2SjEMZQ803voH0wm-rviTW8Q9SEkngiGp6oCJfJLNs2N84yXNjFlImrpOW3I9eknj_aAOGwc4gGqiMWMYywd6m6_iscM7QXHy5sXM7z2E1hh99CX966JZ1X_Mqv9GtY",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCt1NWQqrgZSq32Hvi1lOaruFM8gaReC0kCQxz7qGOjt_3O_S7spdj3bslubopMfXN3DFzCM7FG0K2wbFQTBx3AbJheeYRrNNjnagAwVnoqp0__CjWVGoM8x0UibLKPn9n_1LyAQYvK9nF8f5pRWNIhlnHKdoGwV5aJvYtuCaziaevm2BiFEAP0Rzdpdpf-oHPWQ2Gu7vu63HnyUl31GZZvvZjEfE8scpfoGSKdImv2y27xZO_UxMesUwTtJL6m9z4sNnyg0X6DAPM",
  navLinks: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#fitur" },
    { label: "Harga", href: "#harga" },
    { label: "Kontak", href: "#kontak" },
  ],
  social: {
    facebook: "https://facebook.com/nasyajambi",
    instagram: "https://instagram.com/nasyajambi",
    tiktok: "https://tiktok.com/@nasyajambi",
  },
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = "Halo, saya ingin mendaftar kursus mengemudi NASYA";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
