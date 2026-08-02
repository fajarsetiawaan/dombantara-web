import { Order } from '../types';
import orderData from '../../src/mocks/order.json';

const USE_MOCK = true;

export const getOrders = async (): Promise<Order[]> => {
  if (USE_MOCK) {
    return orderData as Order[];
  }
  // TODO: Fetch from InsForge
  return [];
};

export const getOrderById = async (id: string): Promise<Order | null> => {
  if (USE_MOCK) {
    return (orderData as Order[]).find((o) => o.id === id) || null;
  }
  return null;
};
