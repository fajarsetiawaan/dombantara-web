import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { getProdukList } from "@/lib/data-access/produk.service";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";

export default async function KatalogPage() {
  const products = await getProdukList();

  return (
    <div className="container mx-auto px-4 py-24">
      <Reveal className="mb-16">
        <SectionHeading 
          eyebrow="Katalog" 
          title="Produk Pilihan Kami" 
          description="Pilih jenis produk protein halal yang paling sesuai dengan kebutuhan dapur atau bisnis Anda."
        />
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Reveal key={product.id}>
            <Card className="h-full flex flex-col border-border-subtle bg-base hover:border-accent-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={product.available ? "success" : "default"}>
                    {product.available ? "Tersedia" : "Stok Terbatas"}
                  </Badge>
                  <Badge variant="info">
                    {product.category === "live_animal" ? "Hewan Hidup" : product.category === "karkas" ? "Karkas" : "Daging Potong"}
                  </Badge>
                </div>
                <CardTitle>{product.name}</CardTitle>
                <div className="mt-2 text-2xl font-display text-accent-primary">
                  Rp {product.priceIndicative.toLocaleString('id-ID')} <span className="text-sm text-text-muted font-body">/{product.unit}</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1">
                <p className="text-text-muted mb-6">{product.description}</p>
                {product.features && product.features.length > 0 && (
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-primary">
                        <Check size={16} className="text-accent-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <CardFooter>
                <WhatsAppCTA 
                  className="w-full" 
                  message={`Halo Dombantara, saya tertarik dengan produk ${product.name} (Kode: ${product.id}). Apakah stoknya tersedia?`}
                >
                  Tanya Ketersediaan
                </WhatsAppCTA>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
