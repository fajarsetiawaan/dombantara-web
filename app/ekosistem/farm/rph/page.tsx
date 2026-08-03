"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PlayCircle,
  Star,
  BadgeCheck,
  FileCheck,
  Award,
  Factory,
  Snowflake,
  FlaskConical,
  Package,
  Box,
  Droplet,
  Users,
  ShoppingBag,
  Briefcase,
  Activity,
  Truck,
  Settings,
  Headset,
  BookOpen
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function RPHDetailPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* Top Breadcrumb Space */}
      <div className="bg-white pt-24 pb-4 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <Link href="/ekosistem" className="hover:text-primary transition-colors">Ekosistem</Link>
            <ChevronRight size={14} />
            <Link href="/ekosistem/farm" className="hover:text-primary transition-colors">Farm</Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">RPH</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=2000" 
                alt="RPH Dombantara" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="font-bold tracking-widest text-sm uppercase mb-4 text-primary">
                  RPH DOMBANTARA
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  RPH Modern,<br/><span className="text-primary">Aman & Higienis</span>
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                  RPH Dombantara menerapkan standar halal, higienis, dan kesejahteraan hewan terbaik untuk menghasilkan produk berkualitas dan aman dikonsumsi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#fasilitas" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Lihat Fasilitas RPH <ArrowRight size={16} />
                  </Link>
                  <Link href="#proses" className="px-6 py-3 bg-white text-primary border border-border-subtle rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    <PlayCircle size={16} /> Alur Proses Kami
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 right-0 w-full md:w-[85%] bg-primary rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Star size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Halal & Sesuai Syariah</div>
                  <div className="text-white/80 text-[10px]">Proses sesuai syariat Islam dan diawasi oleh ahli</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <ShieldCheck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Higienis & Aman</div>
                  <div className="text-white/80 text-[10px]">Standar kebersihan tinggi di setiap tahap</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <CheckCircle2 size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Kualitas Terjamin</div>
                  <div className="text-white/80 text-[10px]">Daging segar, sehat, dan berkualitas</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Truck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Distribusi Cepat</div>
                  <div className="text-white/80 text-[10px]">Pengiriman aman dengan rantai dingin terjaga</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALUR PROSES RPH DOMBANTARA */}
      <section id="proses" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Alur Proses RPH Dombantara</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-8 snap-x snap-mandatory scrollbar-hide items-start">
            {[
              { num: 1, title: "Penerimaan Hewan", desc: "Pemeriksaan kesehatan dan kelayakan hewan.", icon: Truck },
              { num: 2, title: "Istirahat & Pemandian", desc: "Hewan diistirahatkan dan dimandikan untuk mengurangi stres.", icon: Droplet },
              { num: 3, title: "Penyembelihan", desc: "Penyembelihan sesuai syariat Islam oleh juru sembelih bersertifikat.", icon: Activity },
              { num: 4, title: "Pengulitan & Eviscerasi", desc: "Pengulitan dan pembuangan jeroan dengan standar kebersihan tinggi.", icon: Settings },
              { num: 5, title: "Pendinginan (Chilling)", desc: "Daging didinginkan untuk menjaga kesegaran dan kualitas.", icon: Snowflake },
              { num: 6, title: "Pemotongan & Pengemasan", desc: "Pemotongan sesuai standar dan pengemasan higienis.", icon: Package },
              { num: 7, title: "Distribusi", desc: "Pengiriman dengan rantai dingin ke seluruh Indonesia.", icon: Truck }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start snap-start shrink-0">
                <div className="flex flex-col items-center w-40 text-center relative group">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[10px] mb-4 absolute -top-3 left-4 shadow-sm z-10">
                    {step.num}
                  </div>
                  <div className="bg-surface border border-border-subtle rounded-2xl p-5 w-full h-32 flex flex-col items-center justify-center mb-4 group-hover:border-primary group-hover:shadow-md transition-all relative">
                    <step.icon size={28} className="text-primary mb-2" strokeWidth={1.5} />
                    <h3 className="font-bold text-[11px] leading-tight text-text-primary">{step.title}</h3>
                  </div>
                  <p className="text-[9px] text-text-secondary leading-relaxed px-2">{step.desc}</p>
                </div>
                {idx < 6 && (
                  <div className="w-6 h-32 flex items-center justify-center shrink-0">
                    <ArrowRight size={14} className="text-border-subtle" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MIDDLE SECTION (2 Columns) */}
      <section id="fasilitas" className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Col 1: Fasilitas RPH Modern (Span 8) */}
            <div className="lg:col-span-8 bg-white border border-border-subtle rounded-3xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-3">Fasilitas RPH Modern</h2>
              <p className="text-text-secondary text-sm mb-8 max-w-xl">Dilengkapi teknologi dan infrastruktur modern untuk memastikan proses yang aman, cepat, dan higienis.</p>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left bullet points */}
                <div className="w-full md:w-1/3 space-y-4">
                  {[
                    "Bangunan & peralatan sesuai standar NKV",
                    "Sistem sanitasi & drainase modern",
                    "Ruang proses bertekanan negatif",
                    "Cold storage & rantai dingin terjaga",
                    "Tenaga ahli profesional & bersertifikat"
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-text-primary font-medium">
                      <CheckCircle2 size={18} className="text-status-success mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Right Image Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: "Area Penyembelihan", desc: "Bersih, higienis, dan sesuai syariat", img: "1563636619-e9143da7973b" },
                    { title: "Ruang Pengulitan", desc: "Peralatan modern & higienis", img: "1511117833895-4b473c0b85d6" },
                    { title: "Ruang Chilling", desc: "Suhu terkontrol menjaga kesegaran", img: "1543877087-ebf71fde2be1" },
                    { title: "Cold Storage", desc: "Penyimpanan suhu -18°C", img: "1524024969020-6126cd23467f" },
                    { title: "Laboratorium", desc: "Uji kualitas & keamanan produk", img: "1534067783141-86ea4bdfd188" },
                    { title: "Area Pengemasan", desc: "Pengemasan vakum & rapi", img: "1515516089376-88db1e26e9b0" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="rounded-xl overflow-hidden h-24 mb-3 border border-border-subtle relative group">
                        <img src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute bottom-1 right-1 bg-white/90 p-1 rounded backdrop-blur"><CheckCircle2 size={10} className="text-primary"/></div>
                      </div>
                      <h4 className="font-bold text-[10px] mb-1">{item.title}</h4>
                      <p className="text-[9px] text-text-muted leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2: Sertifikasi & Standar (Span 4) */}
            <div className="lg:col-span-4 bg-white border border-border-subtle rounded-3xl p-8 shadow-sm h-full flex flex-col">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Sertifikasi & Standar</h2>
              
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                {[
                  { icon: FileCheck, title: "NKV", desc: "Nomor Kontrol Veteriner Dinas Peternakan" },
                  { icon: Award, title: "Halal MUI", desc: "Sertifikat Halal Majelis Ulama Indonesia" },
                  { icon: ShieldCheck, title: "HACCP", desc: "Hazard Analysis Critical Control Point" },
                  { icon: BookOpen, title: "ISO 22000", desc: "Sistem Manajemen Keamanan Pangan" },
                  { icon: CheckCircle2, title: "Good Slaughtering Practice (GSP)", desc: "Praktik Penyembelihan yang Baik" }
                ].map((cert, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-status-success shrink-0"><cert.icon size={24} /></div>
                    <div>
                      <div className="font-bold text-sm text-text-primary">{cert.title}</div>
                      <div className="text-[10px] text-text-secondary">{cert.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN & BUTUH LAYANAN */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Keunggulan (Span 8) */}
            <div className="lg:col-span-8 bg-white border border-border-subtle rounded-3xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Keunggulan RPH Dombantara</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: Star, title: "100% Sesuai Syariah", desc: "Diawasi juru sembelih bersertifikat" },
                  { icon: ShieldCheck, title: "Higienis", desc: "Standar kebersihan internasional" },
                  { icon: CheckCircle2, title: "Kualitas Terjamin", desc: "Daging segar & aman dikonsumsi" },
                  { icon: Factory, title: "Kapasitas Besar", desc: "Melayani ribuan ekor setiap hari" },
                  { icon: Truck, title: "Distribusi Luas", desc: "Pengiriman ke seluruh wilayah Indonesia" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <item.icon size={28} className="text-primary mb-4" strokeWidth={1.5} />
                    <h4 className="font-bold text-xs mb-2 text-text-primary">{item.title}</h4>
                    <p className="text-[9px] text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Butuh Layanan CTA (Span 4) */}
            <div className="lg:col-span-4 bg-primary rounded-3xl p-8 shadow-lg flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Butuh Layanan RPH?</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  Kami siap melayani kebutuhan Anda untuk pemotongan hewan dalam skala kecil hingga besar dengan standar terbaik.
                </p>
                <Link href="#" className="w-full py-4 bg-white text-primary rounded-xl font-bold text-sm hover:bg-surface transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Headset size={18} /> Konsultasi Sekarang <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM STRIP */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-[#0f2e1a] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl">
              
              <div className="md:w-1/4 text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">Melayani Berbagai Kebutuhan Anda</h3>
                <p className="text-[10px] text-white/70">RPH Dombantara melayani berbagai kebutuhan pelanggan dengan kualitas terbaik.</p>
              </div>

              <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
                {[
                  { icon: Activity, title: "Pemotongan Qurban", desc: "Sesuai syariat & higienis" },
                  { icon: Users, title: "Aqiqah", desc: "Praktis, aman, dan terpercaya" },
                  { icon: ShoppingBag, title: "Kebutuhan Retail", desc: "Daging segar berkualitas" },
                  { icon: Factory, title: "Kebutuhan Industri", desc: "Pasokan daging skala besar" },
                  { icon: Briefcase, title: "Kerjasama & Mitra", desc: "Solusi untuk bisnis Anda" }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                    <card.icon size={20} className="text-primary mb-2" strokeWidth={1.5} />
                    <h4 className="font-bold text-[10px] text-text-primary mb-1 leading-tight">{card.title}</h4>
                    <p className="text-[8px] text-text-secondary leading-tight">{card.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
