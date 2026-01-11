export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Putri Wulandari',
    role: 'Alumni Paket Matic',
    quote: 'Instrukturnya sabar banget ngajarin dari nol. Awalnya takut masuk jalan raya, sekarang sudah berani ke luar kota. Terima kasih Nasya!',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwqco81JwyPg2DVN1uH01tR8sxK2LKhjYTphvuU0LnQiElHpSeasuXPdiJXKYziR00L0aL_7ZJrgu1rK4nVi8lHS1xpUwoWLwZiw7OVAsWShodK6dPaFk9PLoMlQe5QQHPONeiAhT0eK8HNl15rGO1ZOs8YsoS12gjHOC89c4EBSBbHtGOrvxDAPjtvTJeCVwB-htJCUwNWJWWdvazkl9ppmMUsuPEQfMgqJTNmHIC_2BKAaqB1NA-a0ddOkwW32CTJdmBOJrLOQ8',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rudi Hartono',
    role: 'Alumni Paket Manual',
    quote: 'Proses pembuatan SIM dibantu sampai selesai. Sangat recommended buat yang sibuk kerja. Jadwal latihan juga fleksibel bisa sore.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1uuLn2BhlAHc37ssBUyBmpJzOqyUjn8BPLBmwHWS6_kTECuBu5DBX0EYht7PUFERtzILW76CJGoWuSnsot0ItrGx2UpKBG90gclS4nGn19nYtVRc2NyF38s1w1yLopzh1fmGmIfmUw-xuLXYrIKIl_WKM3EQ3uk2binrYdBwYrIpq9z7vrtxxFTVx6lhI3HCZteNbtVJs7emTXWhvNrCpxn3PoohVe71SOfUqexgwrYR2Wd_ZyV0kJ_rV-AQ7jhuVYNqY_-J1yuM',
    rating: 5,
  },
  {
    id: '3',
    name: 'Siti Aminah',
    role: 'Alumni Paket Matic',
    quote: 'Mobilnya bersih dan wangi, AC dingin. Belajar jadi nyaman. Instruktur sangat profesional menjelaskan teknik parkir paralel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_CVtwQycT99pXDjOzKNI5UJE5wrjTXiG_o23EW7qlCHj0YHyHZIpc1dkzd1W9qrq57l8Jx3equ9SxjV_Fzzfm7wKGuw9cuZq5l7PzFKn3dG9VOHE4ct4cU8GWJuai6rnYkSTizW7KbIZnchs8vSJQWEbkZBnFvdlvCtpzsxvQIVcAxFVNGy2sEIIf3-W5HhYWW3RNKozo80ceZj2tYBMLTLu7xOGc__fzywG0tY5iN0wtHn_DfwLcyT47TV35iyDZUbN1ujyDE00',
    rating: 5,
  },
];
