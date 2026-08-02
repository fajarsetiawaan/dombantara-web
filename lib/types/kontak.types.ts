export interface AnggotaTim {
  id: string;
  role: string;
  name: string;
  description: string;
  avatarUrl: string;
  whatsapp: string;
}

export interface Lokasi {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  imageUrl: string;
  type: "office" | "farm";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
