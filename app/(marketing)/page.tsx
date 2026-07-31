"use client";

import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useScrollReveal } from "@/lib/utils/useScrollReveal";

export default function LandingPage() {
  const heroRef = useScrollReveal();
  const solutionRef = useScrollReveal();
  const credibilityRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4" ref={heroRef}>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary leading-none mb-6">
              Pasokan Daging <span className="text-accent-primary">Premium</span> untuk Bisnis Anda
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl">
              Dombantara menghubungkan peternak domba & kambing pilihan dengan bisnis kuliner, memberikan kualitas karkas terbaik dengan pasokan terjamin.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppCTA size="lg" message="Halo Dombantara, saya ingin info pasokan daging untuk restoran saya." />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-surface" ref={solutionRef}>
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Solusi Kami" 
            title="Sesuai Kebutuhan Anda" 
            description="Kami menyediakan opsi pembelian hewan hidup maupun karkas siap pakai, menyesuaikan dengan kapasitas operasional dapur Anda."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-base border-border-subtle hover:border-accent-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Live Animal (Hewan Hidup)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted mb-6">
                  Pilihan hewan sehat bersertifikat. Cocok untuk Anda yang memiliki fasilitas atau standar penyembelihan sendiri. Tersedia opsi layanan penyembelihan di RPA mitra kami.
                </p>
                <ul className="space-y-2 text-text-primary mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    Bebas pilih bobot & jenis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    Kesehatan terjamin
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-base border-border-subtle hover:border-accent-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Karkas & Daging Potong</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted mb-6">
                  Daging siap pakai tanpa repot memikirkan proses potong. Daging bersih, potongan standar, siap diolah langsung oleh tim dapur Anda.
                </p>
                <ul className="space-y-2 text-text-primary mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    Efisiensi waktu & tenaga
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    Potongan konsisten
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24" ref={credibilityRef}>
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            align="center"
            eyebrow="Kredibilitas" 
            title="Mitra Terpercaya" 
            description="Kami bekerja sama dengan peternak berpengalaman dan Rumah Potong Hewan tersertifikasi halal di sekitar Anda."
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="font-display text-3xl">PETERNAK LOKAL</div>
            <div className="font-display text-3xl">RPA HALAL</div>
            <div className="font-display text-3xl">HIGIENIS</div>
            <div className="font-display text-3xl">TEPAT WAKTU</div>
          </div>
        </div>
      </section>
    </div>
  );
}
