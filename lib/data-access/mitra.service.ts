import { Mitra, PasokanHistory } from '../types';
import mitraData from '../../src/mocks/mitra.json';
import pasokanData from '../../src/mocks/pasokan.json';

const USE_MOCK = true;

export const getMitras = async (): Promise<Mitra[]> => {
  if (USE_MOCK) {
    return mitraData as Mitra[];
  }
  // TODO: Fetch from InsForge
  return [];
};

export const getMitraById = async (id: string): Promise<Mitra | null> => {
  if (USE_MOCK) {
    return (mitraData as Mitra[]).find((m) => m.id === id) || null;
  }
  return null;
};

export const getPasokanByMitraId = async (mitraId: string): Promise<PasokanHistory[]> => {
  if (USE_MOCK) {
    return (pasokanData as PasokanHistory[]).filter((p) => p.mitraId === mitraId);
  }
  return [];
};
