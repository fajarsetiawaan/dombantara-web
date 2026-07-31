export type MitraStatus = "active" | "inactive" | "pending";
export type MitraRole = "peternak" | "jagal";

export interface Mitra {
  id: string;
  name: string;
  role: MitraRole;
  phone: string;
  address: string;
  capacity?: number; // for peternak
  status: MitraStatus;
  joinedAt: string; // ISO date string
}
