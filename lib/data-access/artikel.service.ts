import { Artikel, KategoriArtikel } from "../types/artikel.types";
import mockArtikel from "../../src/mocks/artikel.json";

const USE_MOCK = true;

export const getSemuaArtikel = async (): Promise<Artikel[]> => {
  if (USE_MOCK) {
    return mockArtikel as Artikel[];
  }
  // TODO: Fetch from InsForge API
  return [];
};

export const getKategoriArtikel = async (): Promise<KategoriArtikel[]> => {
  if (USE_MOCK) {
    return [
      { id: "all", name: "Semua Artikel", slug: "semua-artikel", count: 32, iconName: "LayoutGrid" },
      { id: "qurban", name: "Qurban", slug: "qurban", count: 8, iconName: "HeartHandshake" },
      { id: "aqiqah", name: "Aqiqah", slug: "aqiqah", count: 6, iconName: "Gift" },
      { id: "peternakan", name: "Peternakan", slug: "peternakan", count: 7, iconName: "Tractor" },
      { id: "kesehatan", name: "Kesehatan Domba", slug: "kesehatan-domba", count: 5, iconName: "Stethoscope" },
      { id: "susu", name: "Susu & Olahan", slug: "susu-olahan", count: 3, iconName: "Droplets" },
      { id: "teknologi", name: "Teknologi", slug: "teknologi", count: 3, iconName: "Cpu" }
    ];
  }
  return [];
};

export const getArtikelPopuler = async (): Promise<Artikel[]> => {
  if (USE_MOCK) {
    // Return top 5 articles sorted by views
    return (mockArtikel as Artikel[]).sort((a: Artikel, b: Artikel) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  }
  return [];
};
