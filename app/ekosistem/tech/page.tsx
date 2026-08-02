"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  CheckCircle2,
  Clock,
  Laptop,
  Smartphone,
  Cpu,
  Wifi,
  Database,
  BarChart4,
  Activity,
  Layers,
  Search,
  MessageSquare,
  ShieldCheck,
  Settings,
  Cloud,
  Code2,
  Tractor,
  GraduationCap,
  Store,
  Truck,
  Link2,
  Zap,
  LayoutDashboard,
  Headset,
  RefreshCw,
  Users,
  MapPin
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function TechPage() {
  const primaryColor = "#6D28D9"; // Purple theme for Tech

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 bg-surface pb-32">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-1/2 bg-surface"></div>
          <div className="hidden lg:block lg:w-1/2 relative bg-[#0B0F19]">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
              alt="Dashboard" 
              className="w-full h-full object-cover opacity-30 text-transparent"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 block lg:hidden opacity-5 bg-[#0B0F19]">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
            alt="Dashboard" 
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
                <span style={{ color: primaryColor }}>Dombantara Tech</span>
              </div>

              <p className="font-bold tracking-widest text-xs uppercase mb-4" style={{ color: primaryColor }}>DOMBANTARA TECH</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] mb-6">
                Teknologi Cerdas untuk Peternakan Modern yang <span style={{ color: primaryColor }}>Lebih Produktif</span>
              </h1>
              <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                Dombantara Tech menghadirkan solusi digital terintegrasi berbasis data, IoT, dan AI untuk membantu peternak mengelola usaha dengan lebih efisien, akurat, dan menguntungkan.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#6D28D9]/20 shadow-sm text-[#6D28D9]">
                    <Clock size={18} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Data Real-time<br/>& Akurat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#6D28D9]/20 shadow-sm text-[#6D28D9]">
                    <Database size={18} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Keputusan<br/>Berbasis Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#6D28D9]/20 shadow-sm text-[#6D28D9]">
                    <Activity size={18} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Efisiensi<br/>Operasional</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#6D28D9]/20 shadow-sm text-[#6D28D9]">
                    <BarChart4 size={18} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Produktivitas<br/>Meningkat</span>
                </div>
              </div>

              <Link href="/produk" className="inline-flex items-center gap-3 px-8 py-4 bg-[#6D28D9] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm">
                Jelajahi Solusi Kami <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Floating Bar */}
        <div className="absolute -bottom-12 left-0 right-0 z-20">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal index={1}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white py-6 px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-x-0 lg:divide-x divide-border-strong">
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/10">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">10.000+</h4>
                      <p className="text-[10px] text-text-muted">Pengguna Aktif</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/10">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">350+</h4>
                      <p className="text-[10px] text-text-muted">Peternakan Terhubung</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/10">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">1,2 Juta+</h4>
                      <p className="text-[10px] text-text-muted">Data Hewan Terproses / Hari</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/10">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">99,5%</h4>
                      <p className="text-[10px] text-text-muted">Uptime Sistem</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/10">
                      <Headset size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">24/7</h4>
                      <p className="text-[10px] text-text-muted">Support Teknologi</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SOLUSI TEKNOLOGI TERINTEGRASI (6 CARDS) */}
      <section className="pt-32 pb-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 text-[#6D28D9]">
              <div className="h-px w-8 bg-[#6D28D9]/30"></div>
              <Laptop size={16} />
              <div className="h-px w-8 bg-[#6D28D9]/30"></div>
            </div>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">
              Solusi Teknologi Terintegrasi
            </h2>
            <p className="text-sm text-text-secondary">Satu platform untuk mengelola seluruh aspek peternakan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Farm Management System", icon: LayoutDashboard, img: "1460925895917-afdab827c52f", url: "/produk",
                desc: "Kelola data hewan, kandang, pakan, kesehatan, reproduksi, dan keuangan dalam satu platform.",
                features: ["Manajemen Hewan", "Manajemen Kandang", "Manajemen Pakan", "Laporan & Analitik"]
              },
              {
                title: "IoT & Monitoring", icon: Wifi, img: "1518314916590-f5158d586614", url: "/produk",
                desc: "Pantau kondisi kandang secara real-time dengan sensor IoT yang terhubung.",
                features: ["Suhu & Kelembapan", "Kualitas Udara", "Ammonia Monitoring", "CCTV Monitoring"]
              },
              {
                title: "AI & Analytics", icon: Cpu, img: "1451187580459-43490279c0fa", url: "/produk",
                desc: "Analisis data menggunakan AI untuk prediksi, rekomendasi, dan deteksi dini masalah.",
                features: ["Prediksi Pertumbuhan", "Deteksi Penyakit Dini", "Rekomendasi Pakan", "Forecasting Produksi"]
              },
              {
                title: "Traceability System", icon: Search, img: "1603048297172-c92544798d5e", url: "/produk",
                desc: "Lacak asal usul hewan dan produk secara transparan dari hulu hingga hilir.",
                features: ["QR Code Tracking", "Riwayat Kesehatan", "Asal Usul Hewan", "Sertifikasi Digital"]
              },
              {
                title: "Smart Feeding", icon: Zap, img: "1550583724-b2692b85b150", url: "/produk",
                desc: "Sistem pemberian pakan otomatis dan terukur untuk efisiensi maksimal.",
                features: ["Automated Feeding", "Jadwal Pakan Cerdas", "Kontrol Porsi", "Monitoring Konsumsi"]
              },
              {
                title: "Mobile Application", icon: Smartphone, img: "1512941937669-90a1b58e7e9c", url: "/produk",
                desc: "Akses semua data dan kontrol peternakan Anda kapan saja dan di mana saja.",
                features: ["Dashboard Mobile", "Notifikasi Real-time", "Input Data Cepat", "Laporan Harian"]
              }
            ].map((card, idx) => (
              <Reveal index={idx % 3} key={idx} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl hover:border-[#6D28D9]/30 transition-all">
                  <div className="h-40 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=600`} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9]/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#6D28D9] shadow-md border border-[#6D28D9]/10">
                      <card.icon size={20} />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-xl mb-3 text-text-primary">{card.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {card.desc}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {card.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-primary font-medium">
                          <CheckCircle2 size={16} className="text-[#6D28D9] shrink-0 mt-0.5" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={card.url} className="inline-flex items-center gap-2 text-[#6D28D9] font-bold text-sm hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEKNOLOGI YANG KAMI GUNAKAN */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Teknologi yang Kami Gunakan
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, title: "Internet of Things (IoT)", desc: "Sensor pintar untuk monitoring real-time" },
              { icon: Cpu, title: "Artificial Intelligence", desc: "AI untuk analisis dan prediksi cerdas" },
              { icon: Cloud, title: "Cloud Computing", desc: "Penyimpanan data aman dan skalabel" },
              { icon: BarChart4, title: "Big Data Analytics", desc: "Analisis data besar untuk insight mendalam" },
              { icon: Smartphone, title: "Mobile Technology", desc: "Akses mobile untuk kemudahan kontrol" },
              { icon: Code2, title: "API Integration", desc: "Integrasi dengan sistem & perangkat lain" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#6D28D9] bg-[#6D28D9]/5 border border-[#6D28D9]/20 shadow-sm">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm text-text-primary leading-snug">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EKOSISTEM TERINTEGRASI & CTA */}
      <section className="py-24 bg-surface border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            
            {/* Left: Diagram Ekosistem */}
            <div className="lg:w-1/2">
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Ekosistem Terintegrasi</h3>
              <p className="text-text-muted text-sm mb-10">Dombantara Tech terhubung dengan seluruh pilar ekosistem kami</p>
              
              <div className="flex items-stretch justify-between relative h-[380px]">
                {/* Pilar Ekosistem (Kiri) */}
                <div className="flex flex-col justify-between z-10 py-2">
                  {[
                    { title: "Dombantara Farm", desc: "Data peternakan dari hulu", icon: Tractor, color: "#145C33" },
                    { title: "Dombantara Supply", desc: "Supply chain & distribusi", icon: Truck, color: "#E06B0F" },
                    { title: "Dombantara Fresh", desc: "Produksi & pengolahan", icon: Store, color: "#397A35" },
                    { title: "Dombantara Academy", desc: "Edukasi & pelatihan", icon: GraduationCap, color: "#0284C7" },
                    { title: "Dombantara Partner", desc: "Kemitraan & kolaborasi", icon: Link2, color: "#B45309" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-border-subtle hover:border-[#6D28D9]/50 transition-colors w-56 relative group">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm" style={{ backgroundColor: item.color }}>
                        <item.icon size={14} strokeWidth={2} />
                      </div>
                      <div>
                        <h5 className="font-bold text-[10px] text-text-primary leading-none mb-1">{item.title}</h5>
                        <p className="text-[8px] text-text-muted leading-none">{item.desc}</p>
                      </div>
                      {/* Connection Dot */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#6D28D9] group-hover:scale-150 transition-transform"></div>
                    </div>
                  ))}
                </div>

                {/* Tengah: Dombantara Tech */}
                <div className="flex items-center justify-center relative z-20">
                  <div className="w-36 h-36 bg-white rounded-3xl shadow-xl border-2 border-[#6D28D9] flex flex-col items-center justify-center p-4 relative z-20 animate-[pulse_4s_ease-in-out_infinite]">
                    <div className="w-12 h-12 rounded-xl bg-[#6D28D9]/10 text-[#6D28D9] flex items-center justify-center mb-2">
                      <Laptop size={24} />
                    </div>
                    <h4 className="font-display font-bold text-center text-[#6D28D9] text-xs leading-tight">DOMBANTARA<br/>TECH</h4>
                    
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#6D28D9]/20 scale-110 animate-[ping_3s_ease-in-out_infinite]"></div>
                  </div>
                </div>

                {/* Hasil/Keuntungan (Kanan) */}
                <div className="flex flex-col justify-between z-10 py-2">
                  {[
                    "Data Terintegrasi",
                    "Keputusan Lebih Baik",
                    "Efisiensi Operasional",
                    "Kualitas Terjamin",
                    "Keuntungan Meningkat"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white px-4 py-3 rounded-full shadow-sm border border-border-subtle w-40 text-center relative group hover:border-[#6D28D9]/50 transition-colors">
                      <span className="font-bold text-[10px] text-text-primary">{item}</span>
                      {/* Connection Dot */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#6D28D9] group-hover:scale-150 transition-transform"></div>
                    </div>
                  ))}
                </div>

                {/* Connecting Lines (Background SVG) */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: "drop-shadow(0 0 2px rgba(109, 40, 217, 0.2))" }}>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#CBD5E1" />
                      <stop offset="100%" stopColor="#6D28D9" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6D28D9" />
                      <stop offset="100%" stopColor="#CBD5E1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Left lines */}
                  <path d="M 230 40 C 300 40, 300 190, 370 190" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 230 115 C 300 115, 300 190, 370 190" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 230 190 L 370 190" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 230 265 C 300 265, 300 190, 370 190" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 230 340 C 300 340, 300 190, 370 190" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  
                  {/* Right lines */}
                  <path d="M 520 190 C 580 190, 580 40, 640 40" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 520 190 C 580 190, 580 115, 640 115" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 520 190 L 640 190" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 520 190 C 580 190, 580 265, 640 265" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                  <path d="M 520 190 C 580 190, 580 340, 640 340" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_3s_linear_infinite]" />
                </svg>
                
                {/* Add simple CSS animation for the dashed lines */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes dash {
                    to { stroke-dashoffset: -24; }
                  }
                `}} />
              </div>
            </div>

            {/* Right: CTA Box */}
            <div className="lg:w-1/2">
              <div className="bg-[#2E1065] text-white rounded-[2rem] overflow-hidden shadow-2xl relative">
                {/* Background Image inside CTA */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Tech Expert" className="w-full h-full object-cover text-transparent" />
                </div>
                
                <div className="relative z-10 p-10 md:p-12">
                  <h3 className="font-display font-bold text-3xl mb-4 leading-tight">Siap membawa peternakan Anda ke level berikutnya?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-sm">
                    Gunakan teknologi cerdas Dombantara Tech untuk mengelola peternakan dengan lebih efisien dan menguntungkan.
                  </p>
                  
                  <div className="space-y-4 max-w-sm">
                    <button className="w-full px-6 py-4 bg-white text-[#6D28D9] rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm">
                      <MessageSquare size={18} /> Konsultasi via WhatsApp
                    </button>
                    <button className="w-full px-6 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-sm">
                      Jadwalkan Demo Sistem
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA (Mengapa Memilih) */}
      <section className="py-20 bg-[#1E1B4B]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-white mb-2">Mengapa Memilih Dombantara Tech?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Tractor, title: "Dibangun untuk Peternak", desc: "Solusi yang dirancang khusus untuk kebutuhan peternakan Indonesia" },
              { icon: Layers, title: "Mudah Digunakan", desc: "Antarmuka intuitif, mudah dipahami dan digunakan" },
              { icon: ShieldCheck, title: "Aman & Terpercaya", desc: "Sistem keamanan berlapis, data aman dan terlindungi" },
              { icon: Headset, title: "Support 24/7", desc: "Tim teknis siap membantu kapan saja Anda butuhkan" },
              { icon: RefreshCw, title: "Berkelanjutan", desc: "Teknologi untuk peternakan yang berkelanjutan di masa depan" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="text-white/80">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm text-white leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-white/60 leading-relaxed pr-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
