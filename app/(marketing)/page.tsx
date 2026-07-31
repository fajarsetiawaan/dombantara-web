"use client";

import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/utils/useScrollReveal";
import { CheckCircle2, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const heroRef = useScrollReveal();
  const solutionRef = useScrollReveal();
  const credibilityRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-base">
        <div className="container mx-auto px-4" ref={heroRef}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="max-w-xl z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                PLATFORM PASOKAN DOMBA PREMIUM
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
                Selamat Datang di <span className="text-accent-primary">Dombantara</span> Indonesia
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                Solusi pasokan daging domba & kambing premium dari hulu hingga hilir melalui ekosistem yang terintegrasi & inovatif.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-10 text-sm md:text-base text-text-primary font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-status-success" />
                  Kualitas Premium
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-status-success" />
                  RPA Tersertifikasi
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-status-success" />
                  Pasokan Rutin
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppCTA size="lg" message="Halo Dombantara, saya ingin info pasokan daging untuk bisnis saya.">
                  Mulai Sekarang &rarr;
                </WhatsAppCTA>
                <Button variant="ghost" size="lg" className="gap-2 text-text-primary hover:text-accent-primary">
                  <PlayCircle size={24} />
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Right Column: Orbital Animation */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
              {/* Outer Orbit */}
              <div className="absolute w-full h-full max-w-[600px] max-h-[600px] rounded-full border border-border-subtle/50 animate-[orbit_30s_linear_infinite]">
                {/* Badge 1 (Outer Bottom Left) */}
                <div className="absolute top-[85%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-fit h-fit animate-[reverse-orbit_30s_linear_infinite]">
                  <div className="whitespace-nowrap bg-surface border border-border-subtle shadow-lg px-4 py-2 rounded-full flex flex-col items-center gap-1 animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-xs font-medium text-text-primary">Mitra Peternak Terpilih</span>
                    <div className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                  </div>
                </div>
                {/* Badge 2 (Outer Bottom Right) */}
                <div className="absolute top-[75%] left-[90%] -translate-x-1/2 -translate-y-1/2 w-fit h-fit animate-[reverse-orbit_30s_linear_infinite]">
                  <div className="whitespace-nowrap bg-surface border border-border-subtle shadow-lg px-4 py-2 rounded-full flex flex-col items-center gap-1 animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-xs font-medium text-text-primary">RPA Halal</span>
                    <div className="w-6 h-6 rounded-full bg-status-success/20 text-status-success flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Orbit */}
              <div className="absolute w-[70%] h-[70%] rounded-full border border-accent-primary/20 animate-[orbit_20s_linear_infinite]">
                {/* Badge 3 (Middle Top Right) */}
                <div className="absolute top-[10%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-fit h-fit animate-[reverse-orbit_20s_linear_infinite]">
                  <div className="whitespace-nowrap bg-surface border border-border-subtle shadow-lg px-4 py-2 rounded-full flex flex-col items-center gap-1 animate-float">
                    <span className="text-xs font-medium text-text-primary">Pasokan Lancar</span>
                    <div className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner Orbit (Decorative) */}
              <div className="absolute w-[45%] h-[45%] rounded-full border border-border-subtle/30 bg-surface/30 backdrop-blur-sm" />

              {/* Center Image */}
              <div className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <Image 
                  src="/images/hero-sheep.png" 
                  alt="Premium Sheep" 
                  width={250} 
                  height={250} 
                  className="object-contain drop-shadow-2xl mix-blend-multiply"
                  priority
                />
              </div>
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
