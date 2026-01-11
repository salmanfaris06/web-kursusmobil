export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}

export const features: Feature[] = [
  {
    id: 'pickup',
    title: 'Antar Jemput Gratis',
    description: 'Tidak perlu repot datang ke kantor. Kami menyediakan layanan antar jemput gratis untuk area dalam kota Jambi.',
    icon: 'directions_car',
    iconColor: 'text-primary',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 'guarantee',
    title: 'Jaminan SIM A/C',
    description: 'Kami mendampingi proses pembuatan SIM Anda mulai dari administrasi hingga tes, dijamin resmi dan legal.',
    icon: 'verified',
    iconColor: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    id: 'experience',
    title: 'Pengalaman 10+ Tahun',
    description: 'Didukung oleh instruktur tersertifikasi, sabar, dan profesional yang telah meluluskan ribuan pengemudi handal.',
    icon: 'school',
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
];
