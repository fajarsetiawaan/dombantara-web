import { AnggotaTim, Lokasi, FaqItem } from "../types/kontak.types";
import mockKontak from "../../src/mocks/kontak.json";

const USE_MOCK = true;

export const getTimKontak = async (): Promise<AnggotaTim[]> => {
  if (USE_MOCK) {
    return mockKontak.tim as AnggotaTim[];
  }
  return [];
};

export const getLokasiKontak = async (): Promise<Lokasi[]> => {
  if (USE_MOCK) {
    return mockKontak.lokasi as Lokasi[];
  }
  return [];
};

export const getFaqKontak = async (): Promise<FaqItem[]> => {
  if (USE_MOCK) {
    return mockKontak.faq as FaqItem[];
  }
  return [];
};
