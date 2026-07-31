"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/lib/utils/useScrollReveal";
import { HeroCarousel } from "@/components/marketing/HeroCarousel";
import { ArrowUpRight, Leaf, Bone, CheckSquare, Layers } from "lucide-react";

export default function LandingPage() {
  const solutionRef = useScrollReveal();
  const credibilityRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Solutions Section */}
      <section className="py-24 bg-white" ref={solutionRef}>
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading 
            align="center"
            eyebrow="APA YANG KAMI TAWARKAN" 
            title="Solusi Kami" 
            description="Solusi Kami untuk pemberdayaan Ekosistem Peternakan Indonesia yang modern dan berkelanjutan"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Leaf className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba farm</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA FARM</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Hewan Hidup</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Pilihan hewan sehat bersertifikat. Cocok untuk Anda yang memiliki fasilitas penyembelihan sendiri dengan standar ketat.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Bone className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba meat</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA MEAT</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Karkas & Daging</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Daging siap pakai, bersih, dan dipotong sesuai standar operasional dapur Anda. Menghemat waktu dan tenaga tim.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <CheckSquare className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba halal</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA HALAL</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi RPA Tersertifikasi</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Fasilitas pemotongan yang dijamin halal, tersertifikasi, dan diawasi ketat demi menjaga standar higienitas.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Layers className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba hub</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA HUB</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Integrasi Pasokan</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Menghubungkan semua pemangku kepentingan dalam satu platform untuk efisiensi dan transparansi pasokan B2B.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

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
