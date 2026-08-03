"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2,
  Tractor,
  Activity,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Wheat,
  Scale,
  FileText,
  Headset,
  Users,
  Briefcase,
  LineChart,
  Link as LinkIcon,
  Microscope,
  Baby,
  RefreshCw,
  HeartPulse,
  ArrowRight,
  Building2,
  Star,
  Timer,
  Wind,
  Package,
  Zap,
  Check,
  Search
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function FatteningDetailPage() {
  const chartData = [
    { label: "Jan", val: 28 },
    { label: "Feb", val: 32 },
    { label: "Mar", val: 36 },
    { label: "Apr", val: 40 },
    { label: "Mei", val: 44 },
    { label: "Jun (Target)", val: 45 }
  ];

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
            <span className="text-text-primary">Fattening</span>
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
                src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=2000" 
                alt="Fattening" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="font-bold tracking-widest text-sm uppercase mb-4 text-primary">
                  FATTENING DOMBANTARA
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-[1.1] mb-6">
                  Penggemukan Optimal, <span className="text-primary">Hasil Maksimal</span>
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                  Program penggemukan Dombantara dirancang dengan manajemen modern, pakan berkualitas, dan monitoring ketat untuk menghasilkan domba dengan bobot optimal, sehat, dan siap memenuhi kebutuhan pasar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#konsultasi" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Konsultasi Program <ArrowRight size={16} />
                  </Link>
                  <Link href="#proses" className="px-6 py-3 bg-white text-primary border border-border-subtle rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    <Timer size={16} /> Lihat Proses Kami
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 right-0 w-full md:w-[75%] bg-primary rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Scale size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Bobot Optimal</div>
                  <div className="text-white/80 text-[10px]">Manajemen pakan terukur</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Wheat size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Pakan Berkualitas</div>
                  <div className="text-white/80 text-[10px]">Nutrisi seimbang untuk pertumbuhan maksimal</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <ShieldCheck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Kesehatan Terjaga</div>
                  <div className="text-white/80 text-[10px]">Monitoring rutin oleh tim profesional</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Building2 size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Siap Pasar</div>
                  <div className="text-white/80 text-[10px]">Domba siap jual dengan kualitas terbaik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROSES PENGGEMUKAN KAMI */}
      <section id="proses" className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Proses Penggemukan Kami</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { num: 1, title: "Seleksi Awal", desc: "Pemilihan domba dengan potensi pertumbuhan terbaik dan kondisi sehat.", icon: Search },
              { num: 2, title: "Adaptasi & Karantina", desc: "Adaptasi lingkungan baru dan karantina untuk memastikan kesehatan.", icon: ShieldCheck },
              { num: 3, title: "Pakan Berkualitas", desc: "Pemberian pakan bergizi tinggi yang diformulasikan khusus untuk penggemukan.", icon: Wheat },
              { num: 4, title: "Monitoring Rutin", desc: "Pemantauan bobot, pakan, dan kesehatan secara berkala oleh tim ahli.", icon: LineChart },
              { num: 5, title: "Perawatan Kesehatan", desc: "Vaksinasi, vitamin, dan perawatan untuk menjaga domba tetap sehat.", icon: HeartPulse },
              { num: 6, title: "Siap Pasar", desc: "Domba mencapai bobot optimal dan siap memenuhi kebutuhan Anda.", icon: Building2 }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center snap-start shrink-0">
                <div className="bg-white border border-border-subtle rounded-3xl p-6 w-[220px] h-[220px] flex flex-col hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs mb-4">
                    {step.num}
                  </div>
                  <div className="text-primary mb-3"><step.icon size={20} /></div>
                  <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                  <p className="text-[10px] text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="w-8 shrink-0 flex justify-center text-border-subtle">
                    <ArrowRight size={20} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ANIMAL GROWTH RECORD (DASHBOARD) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Dombantara Animal Growth Record</h2>
            <p className="text-text-secondary text-sm">Monitoring real-time perkembangan domba selama program penggemukan.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Left Card: Animal Info */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-6 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 lg:w-1/3 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-full md:w-40 lg:w-full xl:w-40 shrink-0 relative rounded-2xl overflow-hidden h-48 md:h-full lg:h-48 xl:h-full">
                <img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-status-success text-white text-[10px] font-bold px-2 py-1 rounded">On Progress</div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 text-xs">
                <div className="col-span-2 flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">ID Animal</span><span className="font-bold">DM-FAT-2026-00125</span>
                </div>
                <div className="col-span-2 flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Jenis</span><span className="font-medium">Domba Garut</span>
                </div>
                <div className="col-span-2 flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Program</span><span className="font-medium">Fattening Premium</span>
                </div>
                <div className="col-span-2 flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Mulai Program</span><span className="font-medium">10 Januari 2026</span>
                </div>
                <div className="col-span-2 flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Umur Saat Ini</span><span className="font-medium">8 Bulan</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Bobot Awal</span><span className="font-medium">28 Kg</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Bobot Saat Ini</span><span className="font-bold text-primary">42 Kg</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Target Bobot</span><span className="font-medium">45 Kg</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle/50 pb-2">
                  <span className="text-text-muted">Status</span><span className="font-medium text-status-success bg-status-success/10 px-2 py-0.5 rounded-full">On Progress</span>
                </div>
              </div>
            </div>

            {/* Right Card: Line Chart */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-6 lg:w-2/3 shadow-sm flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="font-bold text-sm">Grafik Perkembangan Bobot</div>
                <div className="text-right">
                  <div className="text-[10px] text-text-muted">ADG (Average Daily Gain)</div>
                  <div className="font-display font-bold text-xl text-primary">0,35 Kg/hari</div>
                  <div className="text-[9px] text-text-secondary">Target ADG: 0,30 - 0,40 Kg/hari</div>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="flex-1 w-full relative min-h-[200px] mb-6 border-b border-l border-border-subtle flex flex-col justify-end">
                <div className="absolute inset-0 z-0 flex flex-col justify-between pt-4">
                  {[50, 40, 30, 20, 10, 0].map(val => (
                    <div key={val} className="w-full border-t border-border-subtle/30 h-0 relative">
                      <span className="absolute -left-6 -top-2 text-[9px] text-text-muted">{val}</span>
                    </div>
                  ))}
                </div>
                
                {/* Custom SVG Line */}
                <div className="absolute inset-0 z-10 pl-6 pt-4 pb-2 pr-6">
                  <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <polygon points="0,200 0,88 100,72 200,56 300,40 400,24 500,20 500,200" fill="url(#gradientLine)" />
                    <polyline points="0,88 100,72 200,56 300,40 400,24 500,20" fill="none" stroke="#22c55e" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Dots */}
                    <circle cx="0" cy="88" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="100" cy="72" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="200" cy="56" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="300" cy="40" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="400" cy="24" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="500" cy="20" r="4" fill="white" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    
                    {/* Labels above dots */}
                    <text x="0" cy="76" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">28 Kg</text>
                    <text x="100" cy="60" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">32 Kg</text>
                    <text x="200" cy="44" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">36 Kg</text>
                    <text x="300" cy="28" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">40 Kg</text>
                    <text x="400" cy="12" fontSize="10" fill="#333" fontWeight="bold" textAnchor="middle">44 Kg</text>
                    <text x="500" cy="8" fontSize="10" fill="#22c55e" fontWeight="bold" textAnchor="end">45 Kg (Tg)</text>
                  </svg>
                  
                  {/* X-Axis labels */}
                  <div className="absolute bottom-[-20px] left-0 right-0 pl-6 pr-6 flex justify-between text-[9px] text-text-muted font-medium">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun (Target)</span>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border-subtle/50 text-center">
                <div>
                  <div className="text-[10px] text-text-muted mb-1">Kenaikan Bobot Total</div>
                  <div className="font-display font-bold text-lg text-primary">+14 Kg</div>
                </div>
                <div>
                  <div className="text-[10px] text-text-muted mb-1">Konsumsi Pakan Rata-rata</div>
                  <div className="font-display font-bold text-lg text-text-primary">1,8 Kg/hari</div>
                </div>
                <div>
                  <div className="text-[10px] text-text-muted mb-1">Efisiensi Pakan (FCR)</div>
                  <div className="font-display font-bold text-lg text-text-primary">6,2</div>
                </div>
                <div>
                  <div className="text-[10px] text-text-muted mb-1">Persentase Target</div>
                  <div className="font-display font-bold text-lg text-status-success">93%</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Small Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Feed Record */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm"><Wheat size={16} /></div>
                <div>
                  <div className="font-bold text-xs">Feed Record</div>
                  <div className="text-[9px] text-text-muted">Manajemen pakan terukur setiap hari.</div>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-16 h-16 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-border-subtle" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-primary" strokeDasharray="60, 100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[8px]">
                    <span className="font-bold text-primary">60%</span>
                  </div>
                </div>
                <div className="flex-1 text-[10px] space-y-2">
                  <div className="flex justify-between border-b border-border-subtle/50 pb-1"><span className="text-text-muted">Konsumsi Harian</span><span className="font-bold">1,8 Kg</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-1"><span className="text-text-muted">Kualitas Pakan</span><span className="font-medium text-primary">Premium</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-1"><span className="text-text-muted">Frekuensi</span><span className="font-medium">2x Sehari</span></div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-subtle text-center">
                <div className="text-[10px] text-text-muted">Kondisi Tubuh (BCS)</div>
                <div className="font-bold text-xs text-status-success">6,2 (Baik)</div>
              </div>
            </div>

            {/* Health Record */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm"><HeartPulse size={16} /></div>
                <div>
                  <div className="font-bold text-xs">Health Record</div>
                  <div className="text-[9px] text-text-muted">Riwayat kesehatan dan perawatan.</div>
                </div>
              </div>
              <div className="flex-1 text-[10px] space-y-3">
                <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-text-muted"><CheckCircle2 size={12} className="text-status-success"/> Vaksinasi</span><span className="font-bold">Lengkap</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-text-muted"><CheckCircle2 size={12} className="text-status-success"/> Pemeriksaan Rutin</span><span className="font-bold">Terakhir: 01 Mei 2026</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-text-muted"><CheckCircle2 size={12} className="text-status-success"/> Kondisi Tubuh (BCS)</span><span className="font-bold">5/5 (Baik)</span></div>
                <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-text-muted"><CheckCircle2 size={12} className="text-status-success"/> Riwayat Penyakit</span><span className="font-bold">Tidak Ada</span></div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-subtle flex justify-between items-center">
                <span className="text-[10px] text-text-muted">Status Kesehatan:</span>
                <span className="bg-status-success text-white font-bold text-[10px] px-2 py-0.5 rounded">Excellent</span>
              </div>
            </div>

            {/* Dokumentasi */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm"><FileText size={16} /></div>
                <div>
                  <div className="font-bold text-xs">Dokumentasi</div>
                  <div className="text-[9px] text-text-muted">Dokumentasi aktivitas dan perkembangan.</div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-4 gap-2 mb-4">
                <div className="rounded-lg overflow-hidden h-16"><img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" /></div>
                <div className="rounded-lg overflow-hidden h-16"><img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" /></div>
                <div className="rounded-lg overflow-hidden h-16"><img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" /></div>
                <div className="rounded-lg overflow-hidden h-16 bg-black/80 flex items-center justify-center text-white text-xs font-bold relative">
                  <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover opacity-40 absolute inset-0" />
                  <span className="relative z-10">+12</span>
                </div>
              </div>
              <Link href="#" className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-text-primary hover:border-primary hover:text-primary text-center flex justify-center items-center gap-1 transition-colors">
                Lihat Semua Dokumentasi <ArrowRight size={12} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PILIHAN PROGRAM & FASILITAS */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Pilihan Program */}
            <div>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Pilihan Program Penggemukan</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border border-border-subtle rounded-2xl p-5 text-center flex flex-col hover:border-primary transition-colors">
                  <div className="text-primary mb-3 flex justify-center"><Timer size={20} /></div>
                  <h4 className="font-bold text-sm mb-1">Reguler</h4>
                  <div className="text-[10px] font-bold text-text-muted mb-2">60 - 90 hari</div>
                  <p className="text-[9px] text-text-secondary leading-relaxed flex-1">Kenaikan bobot 0.2 - 0.3 Kg/hari. Untuk kebutuhan standar.</p>
                </div>
                
                <div className="bg-primary border border-primary rounded-2xl p-5 text-center flex flex-col shadow-lg relative transform scale-105 z-10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-status-warning text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">Populer</div>
                  <div className="text-white mb-3 flex justify-center"><Star size={20} className="fill-white" /></div>
                  <h4 className="font-bold text-sm text-white mb-1">Premium</h4>
                  <div className="text-[10px] font-bold text-white/80 mb-2">90 - 120 hari</div>
                  <p className="text-[9px] text-white/90 leading-relaxed flex-1">Kenaikan bobot 0.3 - 0.4 Kg/hari. Hasil maksimal dan berkualitas.</p>
                </div>

                <div className="bg-white border border-border-subtle rounded-2xl p-5 text-center flex flex-col hover:border-primary transition-colors">
                  <div className="text-primary mb-3 flex justify-center"><Zap size={20} /></div>
                  <h4 className="font-bold text-sm mb-1">Ekspres</h4>
                  <div className="text-[10px] font-bold text-text-muted mb-2">30 - 60 hari</div>
                  <p className="text-[9px] text-text-secondary leading-relaxed flex-1">Kenaikan bobot 0.15 - 0.2 Kg/hari. Untuk kebutuhan mendesak.</p>
                </div>
              </div>
              
              <Link href="#" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all justify-end w-full">
                Lihat Detail Program <ArrowRight size={14} />
              </Link>
            </div>

            {/* Fasilitas */}
            <div>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Fasilitas Penggemukan Modern</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mb-2 shadow-sm border border-border-subtle"><Building2 size={16}/></div>
                  <span className="text-[9px] font-bold mb-1">Kandang Nyaman<br/>& Bersih</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mb-2 shadow-sm border border-border-subtle"><Wind size={16}/></div>
                  <span className="text-[9px] font-bold mb-1">Sistem Ventilasi<br/>Optimal</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mb-2 shadow-sm border border-border-subtle"><Package size={16}/></div>
                  <span className="text-[9px] font-bold mb-1">Tempat Pakan<br/>Otomatis</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mb-2 shadow-sm border border-border-subtle"><Activity size={16}/></div>
                  <span className="text-[9px] font-bold mb-1">Area Exercise<br/>Terbatas</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary mb-2 shadow-sm border border-border-subtle"><ShieldCheck size={16}/></div>
                  <span className="text-[9px] font-bold mb-1">Sistem Biosecurity<br/>Ketat</span>
                </div>
              </div>

              <div className="flex gap-4 h-32">
                <div className="flex-1 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
                <div className="w-1/4 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
                <div className="w-1/4 rounded-xl overflow-hidden"><img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section id="konsultasi" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-primary rounded-[2rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="lg:w-2/5 relative z-10 text-center lg:text-left flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 hidden md:flex text-white"><Headset size={24}/></div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Siap Memulai Program Penggemukan?</h2>
                  <p className="text-white/80 text-xs leading-relaxed">
                    Tim ahli kami siap membantu Anda mendapatkan hasil penggemukan terbaik sesuai kebutuhan dan target Anda.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-3/5 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 w-full">
                <div className="flex gap-4 md:gap-8 justify-center w-full md:w-auto">
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Headset size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-xs">Konsultasi Gratis</div>
                      <div className="text-[9px] text-white/70">Analisis kebutuhan Anda</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Users size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-xs">Tim Profesional</div>
                      <div className="text-[9px] text-white/70">Berpengalaman dan ahli</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <CheckCircle2 size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-xs">Hasil Terjamin</div>
                      <div className="text-[9px] text-white/70">Kualitas dan kepuasan</div>
                    </div>
                  </div>
                </div>
                
                <Link href="#" className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-xs hover:bg-surface transition-all shadow-lg flex items-center gap-2 shrink-0">
                  <Headset size={16}/> Konsultasi Sekarang <ArrowRight size={14} />
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
