"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/lib/utils/useScrollReveal";
import { HeroCarousel } from "@/components/marketing/HeroCarousel";
import { ArrowUpRight, Leaf, Bone, CheckSquare, Layers, Wheat, Microscope, Recycle, GraduationCap } from "lucide-react";

export default function LandingPage() {
  const solutionRef = useScrollReveal();
  const credibilityRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Tentang Kami Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Image/Diagram */}
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl bg-white border border-border-subtle shadow-sm flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-medium">
                  [Diagram Ekosistem Placeholder - Masukkan gambar di public/images/ecosystem-diagram.png]
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col">
              <div className="text-sm font-bold text-accent-primary uppercase tracking-wider mb-4">TENTANG KAMI</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">Digitalisasi Peternakan</h2>
              
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                PT Dombantara Indonesia merupakan perusahaan startup agritech di bidang peternakan. Kami memanfaatkan platform digital yang komprehensif, mengintegrasikan peternakan secara efisien dari hulu ke hilir.
              </p>
              
              <blockquote className="border-l-4 border-accent-primary pl-6 py-2 mb-8">
                <p className="text-xl text-text-primary font-medium leading-relaxed">
                  &quot;Berkolaborasi menciptakan sistem peternakan digital yang terintegrasi dari hulu ke hilir secara berkelanjutan&quot;
                </p>
              </blockquote>
              
              <p className="text-text-muted leading-relaxed">
                Kami berkolaborasi melalui berbagai sistem kemitraan mulai dari kemitraan ternak, kemitraan bisnis, kemitraan supplier, kemitraan tabungan qurban dan kemitraan reseller.
              </p>
            </div>
            
          </div>
        </div>
      </section>

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

            {/* Card 5 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Wheat className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba feed</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA FEED</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Nutrisi Pakan</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Penyediaan pakan bernutrisi tinggi untuk menunjang pertumbuhan ternak premium secara optimal dan efisien.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Microscope className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba care</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA CARE</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Kesehatan Ternak</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Riset genetika dan pemantauan kesehatan hewan ternak secara berkala oleh tim dokter hewan ahli kami.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 7 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <Recycle className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba waste</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA WASTE</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Solusi Olah Limbah</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Mengolah limbah peternakan menjadi pupuk organik yang bernilai guna demi mendukung keberlanjutan lingkungan.
              </p>
              <div className="self-end w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted group-hover:bg-accent-primary group-hover:text-white transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Card 8 */}
            <div className="group flex flex-col p-6 rounded-3xl bg-white border border-border-subtle hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 text-accent-primary font-bold">
                <GraduationCap className="w-6 h-6" />
                <span className="text-lg tracking-tight">domba academy</span>
              </div>
              <div className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">DOMBA ACADEMY</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">Pusat Edukasi Peternak</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                Pusat pelatihan bagi mitra peternak untuk standardisasi kualitas pemeliharaan modern dan efisien.
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
