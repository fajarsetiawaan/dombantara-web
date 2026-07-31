import { Order } from "@/lib/types/order";
import mockData from "@/src/mocks/order.json";

const USE_MOCK = true;

export async function getOrderList(): Promise<Order[]> {
  if (USE_MOCK) {
    return mockData as Order[];
  }
  
  // TODO: Implement InsForge query here
  return [];
}

export async function getOrderById(id: string): Promise<Order | null> {
  if (USE_MOCK) {
    const order = (mockData as Order[]).find((o) => o.id === id);
    return order || null;
  }
  
  // TODO: Implement InsForge query here
  return null;
}
