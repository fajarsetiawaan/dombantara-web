export interface Artikel {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  imageUrl: string;
  readTime: string;
  views: number;
}

export interface KategoriArtikel {
  id: string;
  name: string;
  slug: string;
  count: number;
  iconName: string;
}
