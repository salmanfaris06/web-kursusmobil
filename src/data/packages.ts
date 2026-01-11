export interface Package {
  id: string;
  name: string;
  type: 'manual' | 'matic';
  tier: 'basic' | 'pro';
  meetings: number;
  price: number;
  priceFormatted: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export const packages: Package[] = [
  {
    id: 'manual-basic',
    name: 'Paket Manual - Basic',
    type: 'manual',
    tier: 'basic',
    meetings: 4,
    price: 500000,
    priceFormatted: 'Rp 500.000',
    description: 'Dasar pengenalan mobil manual.',
    features: [
      '4x Pertemuan',
      'Mobil Manual + BBM',
      'Instruktur Profesional',
    ],
  },
  {
    id: 'manual-pro',
    name: 'Paket Manual - Pro',
    type: 'manual',
    tier: 'pro',
    meetings: 8,
    price: 850000,
    priceFormatted: 'Rp 850.000',
    description: 'Paket lengkap sampai mahir.',
    features: [
      '8x Pertemuan',
      'Mobil Manual + BBM',
      'Instruktur Profesional',
      'Materi Parkir & Tanjakan',
    ],
    recommended: true,
  },
  {
    id: 'matic-basic',
    name: 'Paket Matic - Basic',
    type: 'matic',
    tier: 'basic',
    meetings: 4,
    price: 600000,
    priceFormatted: 'Rp 600.000',
    description: 'Dasar pengenalan mobil matic.',
    features: [
      '4x Pertemuan',
      'Mobil Matic + BBM',
      'Instruktur Profesional',
    ],
  },
  {
    id: 'matic-pro',
    name: 'Paket Matic - Pro',
    type: 'matic',
    tier: 'pro',
    meetings: 8,
    price: 950000,
    priceFormatted: 'Rp 950.000',
    description: 'Pilihan praktis & nyaman.',
    features: [
      '8x Pertemuan',
      'Mobil Matic + BBM',
      'Instruktur Profesional',
      'Safety Driving',
    ],
    recommended: true,
  },
];
