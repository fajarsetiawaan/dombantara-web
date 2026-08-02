"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Play,
  Tractor,
  Home,
  Users,
  ShieldCheck,
  ArrowRight,
  Leaf,
  Stethoscope,
  CheckCircle2,
  Truck,
  Building,
  GraduationCap,
  Laptop,
  Link2,
  Store,
  MapPin,
  MessageSquare
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";
import { useState } from "react";

export default function EkosistemPage() {
  const [activeNode, setActiveNode] = useState(0);

  const ecosystemNodes = [
    { 
      id: "farm",
      title: "Dombantara Farm", 
      desc: "Fondasi peternakan berkualitas tinggi",
      icon: Tractor,
      details: "Semua nilai berawal dari peternakan. Dengan manajemen modern dan standar tinggi, kami memastikan kualitas terbaik di setiap tahap.",
      url: "/ekosistem/farm",
      color: "#145C33"
    },
    { 
      id: "fresh",
      title: "Dombantara Fresh", 
      desc: "Produk segar dan olahan berkualitas premium",
      icon: Store,
      details: "Penyediaan daging domba segar dan produk olahan premium yang dijamin higienis, halal, dan penuh nutrisi untuk konsumen.",
      url: "/ekosistem/fresh",
      color: "#397A35"
    },
    { 
      id: "supply",
      title: "Dombantara Supply", 
      desc: "Sistem supply chain dan distribusi terpercaya",
      icon: Truck,
      details: "Infrastruktur logistik terdepan yang memastikan setiap produk dan kebutuhan peternakan terdistribusi dengan aman dan tepat waktu.",
      url: "/ekosistem/supply",
      color: "#E06B0F"
    },
    { 
      id: "partner",
      title: "Dombantara Partner", 
      desc: "Jaringan kemitraan strategis untuk tumbuh bersama",
      icon: Link2,
      details: "Jaringan kerja sama strategis antara Dombantara dan berbagai pemangku kepentingan untuk membangun ketahanan pangan dan ekonomi sirkular.",
      url: "/ekosistem/partner",
      color: "#BA8B2D"
    },
    { 
      id: "academy",
      title: "Dombantara Academy", 
      desc: "Edukasi dan pelatihan untuk peternak dan mitra",
      icon: GraduationCap,
      details: "Pusat edukasi dan pengembangan kapasitas peternak melalui pelatihan, workshop, sertifikasi kompetensi, serta literasi digital untuk memajukan peternakan nasional.",
      url: "/ekosistem/academy",
      color: "#0284C7"
    },
    { 
      id: "tech",
      title: "Dombantara Tech", 
      desc: "Teknologi digital untuk efisiensi dan inovasi",
      icon: Laptop,
      details: "Inovasi digital untuk peternakan modern. Dilengkapi dengan perangkat IoT, aplikasi manajemen, dan sistem analisis data yang cerdas.",
      url: "/ekosistem/tech",
      color: "#6D28D9"
    },
  ];

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 bg-white overflow-hidden pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] overflow-hidden flex flex-col">
            {/* Main Hero Area */}
            <div className="relative min-h-[550px] flex items-center p-8 md:p-12 lg:p-16">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=2000" 
                  alt="Ekosistem Dombantara" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4"></div>

              {/* Content */}
              <div className="relative z-20 w-full md:w-3/5">
                <Reveal index={0}>
                  <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">EKOSISTEM DOMBANTARA</p>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                    Integrasi Hulu ke Hilir untuk Kualitas Tanpa Kompromi
                  </h1>
                  <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                    Dombantara membangun ekosistem peternakan terintegrasi berbasis teknologi, dari peternakan hingga ke tangan konsumen, menciptakan nilai berkelanjutan bagi semua.
                  </p>
                  
                  {/* Video Button */}
                  <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary-hover transition-all">
                      <Play size={20} className="ml-1" />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary group-hover:text-primary transition-colors">Tonton Video Ekosistem</div>
                      <div className="text-sm text-text-muted">2:45 menit</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Stats Bar (Integrated into Hero bottom) */}
            <div className="relative z-20 bg-[#1e2920] text-white p-6 md:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-x-0 lg:divide-x divide-white/10">
                <div className="flex items-start gap-4 lg:px-4">
                  <div className="shrink-0 mt-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/1998/1998664.png" className="w-8 h-8 opacity-80 filter invert" alt="Sheep" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl mb-1">50.000+</div>
                    <div className="text-white/80 text-sm font-medium">Domba Ternak</div>
                    <div className="text-white/60 text-xs mt-1">Berkualitas</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:px-4">
                  <div className="shrink-0 mt-1">
                    <MapPin size={32} className="text-white/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl mb-1">12+</div>
                    <div className="text-white/80 text-sm font-medium">Lokasi Peternakan</div>
                    <div className="text-white/60 text-xs mt-1">di Indonesia</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:px-4">
                  <div className="shrink-0 mt-1">
                    <Users size={32} className="text-white/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl mb-1">10.000+</div>
                    <div className="text-white/80 text-sm font-medium">Pelanggan Puas</div>
                    <div className="text-white/60 text-xs mt-1">di Seluruh Indonesia</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:px-4">
                  <div className="shrink-0 mt-1">
                    <ShieldCheck size={32} className="text-white/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl mb-1">100%</div>
                    <div className="text-white/80 text-sm font-medium">Sesuai Syariat</div>
                    <div className="text-white/60 text-xs mt-1">dan Standar Mutu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CIRCULAR DIAGRAM SECTION */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/4">
              <Reveal index={0}>
                <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">SATU EKOSISTEM, SALING TERHUBUNG</p>
                <h2 className="font-display text-4xl font-bold text-text-primary leading-tight mb-6">
                  Enam Pilar yang Saling Menguatkan
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Setiap pilar memiliki peran penting dan saling terhubung untuk menciptakan rantai nilai peternakan yang efisien, terintegrasi, dan berkelanjutan.
                </p>
                <button className="px-6 py-3 border border-border-strong rounded-full font-bold text-text-primary hover:bg-white hover:shadow-md transition-all flex items-center gap-2">
                  Pelajari Seluruh Pilar <ArrowRight size={16} />
                </button>
              </Reveal>
            </div>

            {/* Middle Diagram */}
            <div className="lg:w-2/4 flex justify-center relative min-h-[500px] w-full">
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                
                {/* Dashed Circle */}
                <div className="absolute inset-10 rounded-full border-2 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]"></div>
                
                {/* Center Logo */}
                <div className="relative z-20 w-40 h-40 bg-white rounded-full shadow-[0_10px_40px_rgba(20,92,51,0.15)] border-4 border-white flex flex-col items-center justify-center">
                  <div className="text-primary font-bold font-display text-4xl mb-1">D</div>
                  <div className="text-xs font-bold text-primary text-center leading-tight">DOMBANTARA<br/>ECOSYSTEM</div>
                </div>

                {/* Orbiting Nodes */}
                {ecosystemNodes.map((node, i) => {
                  const angle = (i * 360) / 6; // 6 nodes = 60 degrees each
                  const radius = 200; // Distance from center
                  
                  // Convert polar to cartesian (adjusting to start from top)
                  const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                  const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                  const isActive = activeNode === i;

                  return (
                    <div 
                      key={node.id}
                      className="absolute z-30 transition-all duration-500 cursor-pointer"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                      onMouseEnter={() => setActiveNode(i)}
                    >
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                        style={{
                          backgroundColor: isActive ? node.color : '#ffffff',
                          color: isActive ? '#ffffff' : node.color,
                          borderColor: isActive ? 'transparent' : node.color + '40',
                          borderWidth: isActive ? '0' : '1px'
                        }}
                      >
                        <node.icon size={24} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      
                      {/* Node Label Tooltip-style */}
                      <div className={`
                        absolute w-max bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm transition-all duration-300 pointer-events-none
                        ${isActive ? 'opacity-100 border-primary/30' : 'opacity-0 border-border-subtle'}
                        ${x > 0 ? 'left-20 top-2' : x < 0 ? 'right-20 top-2' : y < 0 ? 'bottom-20 -left-1/2' : 'top-20 -left-1/2'}
                      `}>
                        <div className="font-bold text-sm" style={{ color: node.color }}>{node.title}</div>
                        <div className="text-text-muted text-xs">{node.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content (Dynamic) */}
            <div className="lg:w-1/4">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle relative overflow-hidden transition-all duration-300">
                <div 
                  className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ color: ecosystemNodes[activeNode].color }}
                >
                  {(() => {
                    const Icon = ecosystemNodes[activeNode].icon;
                    return <Icon size={28} strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: ecosystemNodes[activeNode].color }}>
                  {ecosystemNodes[activeNode].id === 'farm' ? 'Farm sebagai Fondasi' : ecosystemNodes[activeNode].title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 min-h-[80px]">
                  {ecosystemNodes[activeNode].details}
                </p>
                <Link href={ecosystemNodes[activeNode].url} className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all">
                  Selengkapnya tentang {ecosystemNodes[activeNode].id.charAt(0).toUpperCase() + ecosystemNodes[activeNode].id.slice(1)} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 6 PILAR EKOSISTEM (Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-10">ENAM PILAR EKOSISTEM KAMI</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                id: "farm", title: "Dombantara Farm", icon: Tractor, img: "1484557985045-edf25e08da73", url: "/ekosistem/farm", color: "#145C33",
                features: ["Domba", "Kambing", "Breeding", "Penggemukan", "Qurban", "Aqiqah", "RPH", "Jasa Jagal"]
              },
              {
                id: "fresh", title: "Dombantara Fresh", icon: Store, img: "1603048297172-c92544798d5e", url: "/ekosistem/fresh", color: "#397A35",
                features: ["Daging Segar", "Susu Domba", "Frozen Food", "Ready to Cook", "Olahan Premium"]
              },
              {
                id: "supply", title: "Dombantara Supply", icon: Truck, img: "1519003722824-194d4455a60c", url: "/ekosistem/supply", color: "#E06B0F",
                features: ["Livestock Supply", "Corporate Supply", "Distribusi Nasional", "Cold Chain", "Procurement"]
              },
              {
                id: "academy", title: "Dombantara Academy", icon: GraduationCap, img: "1517048676732-5ac56ef09624", url: "/ekosistem/academy", color: "#0284C7",
                features: ["Pelatihan & Workshop", "Sertifikasi", "Webinar", "Artikel & Panduan", "Edukasi Peternak"]
              },
              {
                id: "tech", title: "Dombantara Tech", icon: Laptop, img: "1451187580459-43490279c0fa", url: "/ekosistem/tech", color: "#6D28D9",
                features: ["Farm Management", "IoT Sensors", "Data Analytics", "Mobile App", "Traceability"]
              },
              {
                id: "partner", title: "Dombantara Partner", icon: Link2, img: "1556761175-5973dc0f32e7", url: "/ekosistem/partner", color: "#BA8B2D",
                features: ["Mitra Peternak", "Reseller & Distributor", "Corporate Partner", "Investor", "Pemerintah"]
              }
            ].map((pilar, idx) => (
              <Reveal index={idx % 6} key={idx} className="h-full">
                <div className="bg-white border border-border-subtle rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all h-full flex flex-col">
                  {/* Card Header */}
                  <div className="p-5 flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: pilar.color }}
                    >
                      <pilar.icon size={18} />
                    </div>
                    <h3 className="font-bold text-sm leading-tight" style={{ color: pilar.color }}>{pilar.title}</h3>
                  </div>
                  
                  {/* Card Image */}
                  <div className="h-32 w-full overflow-hidden px-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${pilar.img}?auto=format&fit=crop&q=80&w=400`} 
                      alt={pilar.title} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Card Features List */}
                  <div className="p-5 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {pilar.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={pilar.url} className="text-text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 hover:text-primary transition-colors mt-auto">
                      Jelajahi Pilar <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RANTAI NILAI TERINTEGRASI */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/4">
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">RANTAI NILAI TERINTEGRASI</p>
              <h2 className="font-display text-4xl font-bold text-text-primary leading-tight mb-4">
                Perjalanan Nilai dari Hulu ke Hilir
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Kami mengelola setiap tahap dengan standar tertinggi, untuk memastikan kualitas, keamanan, dan kepuasan pelanggan.
              </p>
              <button className="px-5 py-2.5 border border-border-strong rounded-full text-xs font-bold text-text-primary hover:bg-white hover:shadow-md transition-all flex items-center gap-2">
                Lihat Proses Lengkap <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Process Flow */}
            <div className="lg:w-3/4 w-full overflow-x-auto pb-8 lg:pb-0 hide-scrollbar">
              <div className="flex items-center min-w-max px-4">
                {[
                  { num: 1, title: "Peternakan", desc: "Bibit unggul dan perawatan terstandar di peternakan modern.", img: "1484557985045-edf25e08da73" },
                  { num: 2, title: "Pengelolaan", desc: "Manajemen pakan, kesehatan, dan lingkungan berbasis teknologi.", img: "1543877087-ebf71fde2be1" },
                  { num: 3, title: "Distribusi", desc: "Rantai pasok dan logistik yang aman dan terpercaya.", img: "1519003722824-194d4455a60c" },
                  { num: 4, title: "Produk", desc: "Produk segar dan olahan berkualitas untuk berbagai kebutuhan.", img: "1603048297172-c92544798d5e" },
                  { num: 5, title: "Konsumen", desc: "Hingga ke tangan konsumen dengan kualitas terbaik dan aman.", img: "1544148103-0773bf10d330" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    {/* Circle Step */}
                    <div className="flex flex-col items-center w-40 text-center relative group">
                      <div className="relative w-28 h-28 rounded-full bg-white p-1 shadow-md mb-4 group-hover:scale-105 transition-transform">
                        <img 
                          src={`https://images.unsplash.com/photo-${step.img}?auto=format&fit=crop&q=80&w=200&h=200`} 
                          alt={step.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                        {/* Number Badge */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                          {step.num}
                        </div>
                      </div>
                      <h4 className="font-bold text-text-primary text-sm mb-2">{step.title}</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed px-2">{step.desc}</p>
                    </div>

                    {/* Arrow connecting steps */}
                    {idx < 4 && (
                      <div className="w-12 flex items-center justify-center -mt-16 text-primary/40">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1a2e22] text-white shadow-2xl p-10 md:p-12 lg:p-16">
            
            {/* Background Texture/Image */}
            <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=1600" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
              <div className="lg:w-1/3">
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Bergabung dalam Ekosistem Dombantara
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Mari tumbuh bersama dalam ekosistem peternakan terintegrasi untuk masa depan yang lebih baik.
                </p>
              </div>

              <div className="lg:w-1/2 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-xl border border-white/20">
                    <Users size={20} className="text-white/90" />
                  </div>
                  <h4 className="font-bold text-xs mb-1">Untuk Peternak</h4>
                  <p className="text-[10px] text-white/60 leading-relaxed">Tingkatkan produktivitas dan pendapatan Anda.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-xl border border-white/20">
                    <Building size={20} className="text-white/90" />
                  </div>
                  <h4 className="font-bold text-xs mb-1">Untuk Bisnis</h4>
                  <p className="text-[10px] text-white/60 leading-relaxed">Solusi supply terpercaya untuk bisnis Anda.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-xl border border-white/20">
                    <GraduationCap size={20} className="text-white/90" />
                  </div>
                  <h4 className="font-bold text-xs mb-1">Untuk Masyarakat</h4>
                  <p className="text-[10px] text-white/60 leading-relaxed">Edukasi dan produk berkualitas untuk kehidupan lebih baik.</p>
                </div>
              </div>

              <div className="lg:w-auto shrink-0">
                <button className="w-full lg:w-auto px-6 py-4 bg-white text-primary rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm">
                  Hubungi Kami Sekarang <MessageSquare size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
