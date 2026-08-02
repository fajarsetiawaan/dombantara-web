"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  Award,
  Video,
  FileText,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  Leaf,
  GraduationCap
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function AcademyPage() {
  const primaryColor = "#166534"; // Green theme for Academy
  const accentColor = "#22c55e"; 

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 bg-surface pb-32">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-1/2 bg-surface"></div>
          <div className="hidden lg:block lg:w-1/2 relative bg-[#0B2014]">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000" 
              alt="Academy Seminar" 
              className="w-full h-full object-cover opacity-50 text-transparent"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 block lg:hidden opacity-10 bg-[#0B2014]">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
            alt="Academy Seminar" 
            className="w-full h-full object-cover text-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 to-surface"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 pt-10">
          <div className="w-full lg:w-[55%]">
            <Reveal index={0}>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-text-muted font-medium mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
                <span>&gt;</span>
                <Link href="/ekosistem" className="hover:text-primary transition-colors">Ekosistem</Link>
                <span>&gt;</span>
                <span style={{ color: primaryColor }}>Dombantara Academy</span>
              </div>

              <p className="font-bold tracking-widest text-xs uppercase mb-4" style={{ color: primaryColor }}>DOMBANTARA ACADEMY</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] mb-6">
                Mencetak Peternak Hebat, <span style={{ color: primaryColor }}>Membangun Masa Depan</span> Peternakan Indonesia
              </h1>
              <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                Dombantara Academy adalah pusat pembelajaran dan pengembangan kapasitas untuk peternak, profesional, dan generasi muda agar siap menghadapi tantangan peternakan modern.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#166534]/20 bg-[#166534]/5 shadow-sm">
                  <div className="text-[#166534]">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary">Ilmu Praktis Berbasis Data</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#166534]/20 bg-[#166534]/5 shadow-sm">
                  <div className="text-[#166534]">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary">Didukung Ahli Berpengalaman</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#166534]/20 bg-[#166534]/5 shadow-sm">
                  <div className="text-[#166534]">
                    <FileText size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary">Sertifikasi Berlaku Nasional</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#166534]/20 bg-[#166534]/5 shadow-sm">
                  <div className="text-[#166534]">
                    <Leaf size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary">Membangun Ekosistem</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM UNGGULAN (5 CARDS) */}
      <section className="pt-20 pb-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#166534] mb-3">
              Program Unggulan
            </h2>
            <p className="text-sm text-text-secondary">Program pelatihan lengkap untuk setiap kebutuhan peternakan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Pelatihan Peternakan", icon: GraduationCap, img: "1516253593875-bd7ba2a62e1a", url: "/produk",
                desc: "Pelatihan dasar hingga lanjutan untuk meningkatkan keterampilan dan produktivitas peternakan."
              },
              {
                title: "Workshop & Praktik", icon: Users, img: "1573164713988-8665fc963095", url: "/produk",
                desc: "Kegiatan hands-on dengan instruktur berpengalaman untuk hasil yang nyata."
              },
              {
                title: "Sertifikasi", icon: Award, img: "1517048676732-5ac56ef09624", url: "/produk",
                desc: "Sertifikasi kompetensi yang diakui untuk meningkatkan kredibilitas dan profesionalitas."
              },
              {
                title: "Webinar & Seminar", icon: Video, img: "1588196749597-9ff0c200698b", url: "/produk",
                desc: "Akses materi terbaru dari para ahli kapan saja dan di mana saja."
              },
              {
                title: "Artikel & Resource", icon: BookOpen, img: "1457369804613-52c61a468e7d", url: "/produk",
                desc: "Kumpulan artikel, panduan, dan referensi lengkap seputar dunia peternakan."
              }
            ].map((card, idx) => (
              <Reveal index={idx % 5} key={idx} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl hover:border-[#166534]/30 transition-all">
                  <div className="h-32 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=600`} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#166534]/80 via-transparent to-transparent"></div>
                    
                    {/* Icon tag on top left */}
                    <div className="absolute top-3 left-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white">
                      <GraduationCap size={14} />
                    </div>

                    {/* Main Icon */}
                    <div className="absolute -bottom-6 left-4 w-12 h-12 bg-[#166534] rounded-full flex items-center justify-center text-white shadow-md border-4 border-white z-10">
                      <card.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg mb-2 text-text-primary">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6">
                      {card.desc}
                    </p>
                    <Link href={card.url} className="inline-flex items-center gap-2 text-[#166534] font-bold text-xs hover:gap-3 transition-all mt-auto">
                      Pelajari <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BANNER STATISTIK */}
      <section className="py-12 bg-[#166534]/5 border-y border-[#166534]/10">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="font-display text-2xl font-bold text-[#166534] mb-2">Belajar Hari Ini, Panen Masa Depan</h2>
              <p className="text-sm text-text-secondary">Dombantara Academy hadir untuk mendukung setiap langkah Anda menjadi peternak yang lebih baik dan berkelanjutan.</p>
            </div>
            
            <div className="md:w-1/2 flex flex-wrap gap-6 md:justify-end">
              <div className="flex items-center gap-3">
                <div className="text-[#166534]">
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-primary">10.000+</h4>
                  <p className="text-[10px] text-text-muted">Peserta Aktif</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#166534]">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-primary">250+</h4>
                  <p className="text-[10px] text-text-muted">Program Pelatihan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#166534]">
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-primary">15+</h4>
                  <p className="text-[10px] text-text-muted">Ahli & Praktisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERJALANAN BELAJAR & TESTIMONIAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            
            {/* Left: Perjalanan Belajar */}
            <div className="lg:w-7/12">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Perjalanan Belajar Anda</h2>
              <p className="text-sm text-text-secondary mb-12">Dari pemula hingga menjadi ahli, kami dampingi setiap langkah Anda.</p>
              
              <div className="flex items-start justify-between relative mb-12 max-w-2xl">
                {/* Connecting Line */}
                <div className="absolute top-5 left-10 right-10 h-0.5 bg-border-subtle -z-10"></div>
                
                {[
                  { num: 1, title: "Pelajari", desc: "Akses materi yang relevan" },
                  { num: 2, title: "Praktik", desc: "Terapkan ilmu di lapangan" },
                  { num: 3, title: "Evaluasi", desc: "Ukur dan tingkatkan" },
                  { num: 4, title: "Sertifikasi", desc: "Dapatkan pengakuan" },
                  { num: 5, title: "Berkembang", desc: "Jadi peternak yang lebih baik" },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center w-24">
                    <div className="w-10 h-10 rounded-full bg-[#166534] text-white font-bold flex items-center justify-center mb-4 shadow-md border-4 border-white">
                      {step.num}
                    </div>
                    <h4 className="font-bold text-xs text-text-primary mb-1">{step.title}</h4>
                    <p className="text-[9px] text-text-muted leading-tight">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Box Bawah */}
              <div className="bg-[#166534]/5 border border-[#166534]/20 rounded-2xl p-6 relative overflow-hidden max-w-2xl">
                <div className="relative z-10 w-3/4">
                  <h4 className="font-bold text-[#166534] text-sm mb-2">Siap Memajukan Peternakan Indonesia</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Bersama Dombantara Academy, kita bangun generasi peternak yang kompeten, berdaya saing, dan berkelanjutan.
                  </p>
                </div>
                {/* Ilustrasi Domba (Simple SVG placeholder) */}
                <svg className="absolute right-4 bottom-4 w-24 h-24 text-[#166534]/10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                </svg>
              </div>
            </div>

            {/* Right: Testimonial Box */}
            <div className="lg:w-5/12">
              <div className="bg-[#064E3B] text-white rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 p-8 text-white/10">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />
                  </svg>
                </div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex-1 p-8 pb-4 flex flex-col justify-end">
                    <p className="text-lg leading-relaxed font-medium italic mb-8">
                      "Ilmu yang saya dapat di Dombantara Academy sangat membantu meningkatkan hasil ternak dan manajemen peternakan saya. Terima kasih Dombantara!"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                        {/* Avatar */}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Agus Santoso</h4>
                        <p className="text-xs text-white/60">Peternak Domba, Garut</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image bottom */}
                  <div className="h-64 mt-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#064E3B] to-transparent z-10 h-16"></div>
                    <img src="https://images.unsplash.com/photo-1595859703065-2144365b21ea?auto=format&fit=crop&q=80&w=800" alt="Agus Santoso" className="w-full h-full object-cover object-top" />
                    
                    {/* Carousel Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-[#0B2014]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-[#166534] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
               <GraduationCap size={400} />
            </div>

            <div className="lg:w-1/2 relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Siap Tingkatkan Ilmu, Bangun Masa Depan Lebih Baik</h2>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Jadilah bagian dari komunitas peternak modern yang terus belajar, berbagi, dan bertumbuh bersama.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/produk" className="px-6 py-3.5 bg-white text-[#166534] rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all text-sm">
                  Jelajahi Program &rarr;
                </Link>
                <Link href="/kontak" className="px-6 py-3.5 bg-transparent border border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all text-sm">
                  Gabung Komunitas &rarr;
                </Link>
              </div>
            </div>
            
            <div className="lg:w-5/12 relative z-10 flex justify-around w-full">
              {[
                { icon: BookOpen, title: "Belajar" },
                { icon: TrendingUp, title: "Berkembang" },
                { icon: Leaf, title: "Berdampak" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-bold text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
