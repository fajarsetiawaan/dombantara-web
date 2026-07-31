export type ProductCategory = "live_animal" | "karkas" | "daging_cut";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceIndicative: number;
  unit: "ekor" | "kg";
  available: boolean;
  imageUrl?: string;
  features?: string[]; // e.g. ["Gratis sembelih", "Siap antar"]
}
