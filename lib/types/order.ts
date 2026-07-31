export type OrderStatus = "dipesan" | "dipotong" | "dikirim" | "lunas";

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  buyerName: string;
  buyerContact: string;
  buyerAddress: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  orderDate: string;
  deliveryDate: string;
  assignedMitraId?: string; // id of peternak/jagal assigned
}
