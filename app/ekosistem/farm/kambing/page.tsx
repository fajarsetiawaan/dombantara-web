"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2,
  Building2,
  Activity,
  Leaf,
  Star,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Stethoscope,
  Wheat,
  Scale,
  FileText,
  Headset,
  Clock,
  Briefcase
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";
import { useState, useEffect } from "react";
import { getKambingFeaturedProducts, FarmProduct } from "@/lib/data-access/farm.service";

export default function KambingDetailPage() {
  const [products, setProducts] = useState<FarmProduct[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    async function loadProducts() {
      const data = await getKambingFeaturedProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const faqs = [
    { q: "Apakah saya bisa memilih kambing langsung di farm?", a: "Tentu saja. Anda dapat mengunjungi peternakan kami dengan membuat janji temu terlebih dahulu dengan tim Farm kami." },
    { q: "Apakah tersedia pengiriman ke luar kota?", a: "Ya, kami menyediakan layanan pengiriman yang aman dan terstandarisasi untuk memastikan kambing sampai dalam kondisi sehat." },
    { q: "Apakah kambing sudah sesuai syariat untuk qurban?", a: "Semua kambing qurban kami dijamin 100% memenuhi syarat sah qurban (sehat, cukup umur, tidak cacat)." },
    { q: "Bagaimana proses pemesanan kambing?", a: "Anda dapat berkonsultasi langsung dengan tim kami melalui WhatsApp, memilih kambing yang tersedia, melakukan pembayaran, dan kambing siap dikirim atau dirawat sementara di farm kami." }
  ];

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* Top Breadcrumb Space (White Background) */}
      <div className="bg-white pt-24 pb-4 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <Link href="/ekosistem" className="hover:text-primary transition-colors">Ekosistem</Link>
            <ChevronRight size={14} />
            <Link href="/ekosistem/farm" className="hover:text-primary transition-colors">Farm</Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">Kambing</span>
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
                src="https://images.unsplash.com/photo-1524024969020-6126cd23467f?auto=format&fit=crop&q=80&w=2000" 
                alt="Kambing Dombantara" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="font-bold tracking-widest text-sm uppercase mb-4 text-text-primary">
                  KAMBING DOMBANTARA
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Kambing Berkualitas Dari Peternakan Terintegrasi
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                  Kambing Dombantara dipelihara dengan standar kesehatan, nutrisi, dan manajemen modern untuk berbagai kebutuhan, mulai dari ibadah hingga pengembangan usaha.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#konsultasi" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Konsultasi Kambing <ArrowRight size={16} />
                  </Link>
                  <Link href="#kategori" className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    Lihat Pilihan Kambing <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 right-0 w-full md:w-[85%] lg:w-[75%] bg-primary rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Building2 size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">12.000+</span></div>
                  <div className="text-white/80 text-xs text-center">Kambing Terpelihara</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Stethoscope size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">100%</span></div>
                  <div className="text-white/80 text-xs text-center">Sehat & Terverifikasi</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Star size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">8+</span></div>
                  <div className="text-white/80 text-xs text-center">Jenis Kambing Unggulan</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><ShieldCheck size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">100%</span></div>
                  <div className="text-white/80 text-xs text-center">Sesuai Syariat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KATEGORI DOMBA */}
      <section id="kategori" className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Kategori Kambing</h2>
            <p className="text-text-secondary">Pilih kambing sesuai kebutuhan Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kambing Qurban", desc: "Kambing sehat, sesuai syariat, siap untuk ibadah qurban.", icon: Building2, points: ["Sesuai syariat", "Sehat & terverifikasi", "Dokumentasi lengkap", "Pengiriman tersedia"], img: "1524024969020-6126cd23467f" },
              { title: "Kambing Pedaging", desc: "Kambing dengan bobot optimal untuk kebutuhan konsumsi.", icon: Activity, points: ["Bobot optimal", "Kualitas daging terbaik", "Pasokan rutin", "Standar kebersihan terjaga"], img: "1515516089376-88db1e26e9b0" },
              { title: "Kambing Breeding", desc: "Indukan unggul untuk program pengembangan populasi.", icon: Leaf, points: ["Genetik terpilih", "Indukan berkualitas", "Program pengembangan", "Pendampingan breeding"], img: "1534067783141-86ea4bdfd188" },
              { title: "Kambing Premium", desc: "Kambing pilihan dengan kualitas terbaik dan performa unggul.", icon: Star, points: ["Seleksi terbaik", "Performa unggul", "Tampilan ideal", "Kualitas terjamin"], img: "1524024969020-6126cd23467f" }
            ].map((cat, idx) => (
              <Reveal index={idx % 4} key={idx}>
                <div className="bg-white rounded-[24px] border border-border-subtle hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
                  <div className="h-40 overflow-hidden relative">
                    <img src={`https://images.unsplash.com/photo-${cat.img}?auto=format&fit=crop&q=80&w=500`} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 pt-8 relative flex-1 flex flex-col">
                    <div className="absolute -top-8 left-6 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                      <cat.icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{cat.title}</h3>
                    <p className="text-text-secondary text-sm mb-6">{cat.desc}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {cat.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-text-primary">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="#unggulan" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Lihat {cat.title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DOMBA UNGGULAN & KENAPA MEMILIH */}
      <section id="unggulan" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Unggulan Carousel */}
            <div className="lg:w-[65%] xl:w-[70%]">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Kambing Unggulan Dombantara</h2>
                  <p className="text-text-secondary">Beberapa pilihan kambing terbaik yang tersedia saat ini.</p>
                </div>
                <Link href="#" className="hidden md:flex text-primary font-bold text-sm items-center gap-2 hover:gap-3 transition-all">
                  Lihat Semua Kambing <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative">
                <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                  {products.map((prod, idx) => (
                    <Reveal index={idx} key={prod.id} className="snap-start shrink-0 w-[240px]">
                      <div className="bg-white rounded-2xl border border-border-subtle hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group">
                        <div className="relative h-40 overflow-hidden p-2 pb-0">
                          <img src={`https://images.unsplash.com/photo-${prod.image}?auto=format&fit=crop&q=80&w=500`} alt={prod.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-4 right-4 bg-status-success text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                            {prod.badge}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="font-display font-bold text-sm mb-4 line-clamp-2">{prod.name}</h3>
                          <div className="space-y-2 text-xs text-text-secondary mb-4 flex-1">
                            <div className="flex justify-between"><span className="text-text-muted">Umur</span> <span className="font-medium text-text-primary">{prod.age}</span></div>
                            <div className="flex justify-between"><span className="text-text-muted">Bobot</span> <span className="font-medium text-text-primary">{prod.weight}</span></div>
                            <div className="flex justify-between"><span className="text-text-muted">Status</span> <span className="font-bold text-primary">{prod.status}</span></div>
                          </div>
                          <Link href="#" className="w-full py-2 flex justify-center items-center gap-2 border border-border-subtle rounded-xl text-xs font-bold hover:border-primary hover:text-primary transition-colors">
                            Detail Kambing <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-border-subtle flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:flex">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right: Sidebar Kenapa Memilih */}
            <div className="lg:w-[35%] xl:w-[30%]">
              <Reveal index={0}>
                <div className="bg-surface rounded-[24px] p-6 lg:p-8 h-full flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-6">Kenapa Memilih Kambing Dombantara?</h3>
                  
                  <div className="space-y-6 flex-1">
                    {[
                      { icon: ShieldCheck, title: "Seleksi Genetik Ketat", desc: "Setiap indukan dipilih berdasarkan kualitas genetik terbaik." },
                      { icon: Stethoscope, title: "Pemeriksaan Kesehatan Rutin", desc: "Setiap kambing diperiksa secara berkala oleh tim ahli." },
                      { icon: Wheat, title: "Pakan Berkualitas", desc: "Nutrisi seimbang untuk pertumbuhan optimal." },
                      { icon: Scale, title: "Monitoring Bobot", desc: "Pemantauan bobot dan perkembangan terukur." },
                      { icon: FileText, title: "Dokumentasi Lengkap", desc: "Setiap kambing memiliki data dan riwayat lengkap." },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 shadow-sm border border-border-subtle">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-text-primary mb-1">{item.title}</h4>
                          <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="#" className="mt-8 w-full py-3 flex justify-center items-center gap-2 bg-white border border-border-subtle rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
                    Selengkapnya Tentang Kualitas Kami <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANIMAL ID & FAQ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Animal ID */}
            <div className="lg:w-[55%]">
              <Reveal index={0}>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Contoh Animal ID Dombantara</h2>
                <p className="text-text-secondary mb-8">Setiap kambing memiliki identitas dan riwayat yang tercatat secara digital.</p>
                
                <div className="bg-white rounded-2xl border border-border-subtle p-6 flex flex-col md:flex-row gap-6 items-center md:items-start shadow-sm mb-6">
                  <div className="w-full md:w-40 shrink-0 relative">
                    <div className="h-40 rounded-xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1515516089376-88db1e26e9b0?auto=format&fit=crop&q=80&w=400" alt="Animal ID" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded text-center truncate">
                      KB-2026-00078
                    </div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-4 text-sm w-full">
                    <div><span className="text-text-muted block text-xs mb-1">ID Dombantara</span><span className="font-bold text-text-primary">KB-2026-00078</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Jenis Kelamin</span><span className="font-medium text-text-primary">Jantan</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Jenis</span><span className="font-medium text-text-primary">Etawa Cross</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Status Kesehatan</span><span className="font-medium text-text-primary">Sehat</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Umur</span><span className="font-medium text-text-primary">11 bulan</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Asal</span><span className="font-medium text-text-primary">Dombantara Farm</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Bobot</span><span className="font-medium text-text-primary">42 kg</span></div>
                    <div><span className="text-text-muted block text-xs mb-1">Status</span><span className="font-bold text-status-success">Siap Qurban</span></div>
                  </div>
                </div>

                <Link href="#" className="w-full py-3 flex justify-center items-center gap-2 bg-white border border-border-subtle rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
                  Lihat Contoh Animal ID Lainnya <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>

            {/* Right: FAQ */}
            <div className="lg:w-[45%]">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Pertanyaan yang Sering Diajukan</h2>
                </div>
                <Link href="#" className="hidden md:flex text-primary font-bold text-sm items-center gap-2 hover:gap-3 transition-all">
                  Lihat Semua FAQ <ArrowRight size={16} />
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-border-subtle last:border-b-0">
                    <button 
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="font-bold text-text-primary text-sm">{faq.q}</span>
                      </div>
                      <ChevronDown size={18} className={`text-text-muted transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 pl-[3.25rem] text-sm text-text-secondary leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section id="konsultasi" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-primary rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="md:w-3/5 relative z-10 text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Temukan Kambing yang Sesuai Kebutuhan Anda</h2>
                <p className="text-white/80 mb-8 max-w-lg">
                  Tim kami siap membantu Anda memilih kambing terbaik untuk ibadah, usaha, maupun kebutuhan lainnya.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex flex-col items-center md:items-start text-white gap-2">
                    <Headset size={24} className="text-status-success" />
                    <span className="font-bold text-sm">Konsultasi Gratis</span>
                    <span className="text-xs text-white/70">Tim ahli siap membantu</span>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-white gap-2">
                    <Clock size={24} className="text-status-success" />
                    <span className="font-bold text-sm">Respon Cepat</span>
                    <span className="text-xs text-white/70">Kami siap melayani Anda</span>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-white gap-2">
                    <Briefcase size={24} className="text-status-success" />
                    <span className="font-bold text-sm">Layanan Profesional</span>
                    <span className="text-xs text-white/70">Berpengalaman & terpercaya</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/5 flex justify-center md:justify-end relative z-10">
                <Link href="#" className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-base hover:bg-surface transition-all shadow-lg flex items-center gap-2 group w-full md:w-auto justify-center">
                  <Headset size={20} className="group-hover:scale-110 transition-transform" /> Konsultasi dengan Tim Farm
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
