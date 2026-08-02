export const tokens = {
  colors: {
    base: '#FFFFFF', // Background (putih bersih)
    surface: '#F8F9FA', // Background lembut untuk card / banner
    primary: '#145C33', // Hijau tua / Forest green utama
    secondary: '#1A7A42', // Hijau terang untuk hover
    accent: {
      primary: '#EC9A3C', // Aksen (jarang dipakai, mungkin untuk highlight)
      hover: '#D9892A',
      background: '#F0F6F2', // Background krem kehijauan untuk ikon
    },
    text: {
      primary: '#1A1A1A', // Hitam tegas untuk judul
      muted: '#666666', // Abu-abu gelap untuk paragraf
      inverse: '#FFFFFF', // Teks di atas warna utama
      brand: '#145C33', // Teks hijau
    },
    border: {
      subtle: '#EAEAEA', // Border tipis abu-abu
      strong: '#D1D5DB', // Border sedikit lebih tebal
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444', 
      info: '#3B82F6', 
    },
  },
  typography: {
    fontFamily: {
      display: ['var(--font-inter)', 'sans-serif'],
      body: ['var(--font-inter)', 'sans-serif'],
    },
  },
};
