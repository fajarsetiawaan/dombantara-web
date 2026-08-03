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
  Star
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function BreedingDetailPage() {
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
            <span className="text-text-primary">Breeding</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center">
            
            {/* Background Gradient & Image Logic */}
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div className="absolute top-0 right-0 h-full w-full md:w-3/5 z-0">
              <img 
                src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=1200" 
                alt="Breeding" 
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="font-bold tracking-widest text-sm uppercase mb-4 text-primary flex items-center gap-2">
                  <Leaf size={16} /> DOMBANTARA BREEDING
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-[1.1] mb-6">
                  Membangun Generasi <span className="text-primary">Ternak Unggul</span> untuk Masa Depan Peternakan Indonesia
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                  Program pembibitan Dombantara berfokus pada seleksi genetik, manajemen reproduksi, dan perawatan profesional untuk menghasilkan ternak dengan kualitas terbaik.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-text-primary mb-1"><LinkIcon size={14} className="text-status-success"/> Genetik Unggul</div>
                    <p className="text-[10px] text-text-muted leading-relaxed">Seleksi ketat untuk kualitas terbaik</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-text-primary mb-1"><ShieldCheck size={14} className="text-status-success"/> Sehat & Kuat</div>
                    <p className="text-[10px] text-text-muted leading-relaxed">Kesehatan prima dari indukan hingga anakan</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-text-primary mb-1"><LineChart size={14} className="text-status-success"/> Produktivitas Tinggi</div>
                    <p className="text-[10px] text-text-muted leading-relaxed">Pertumbuhan optimal dan konsisten</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-bold text-sm text-text-primary mb-1"><HeartPulse size={14} className="text-status-success"/> Berkelanjutan</div>
                    <p className="text-[10px] text-text-muted leading-relaxed">Populasi berkualitas untuk masa depan</p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 right-0 w-full md:w-[70%] bg-primary rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Tractor size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">15.000+</span></div>
                  <div className="text-white/80 text-[10px] text-center">Ternak di Breeding Setiap Tahun</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Building2 size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">8+</span></div>
                  <div className="text-white/80 text-[10px] text-center">Fasilitas Breeding Modern</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Microscope size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">100%</span></div>
                  <div className="text-white/80 text-[10px] text-center">Seleksi Genetik Terencana</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white px-2">
                  <div className="flex items-center gap-2 mb-1"><Stethoscope size={16} className="text-white/80" /> <span className="font-display font-bold text-xl lg:text-2xl">100%</span></div>
                  <div className="text-white/80 text-[10px] text-center">Kesehatan & Kualitas Terverifikasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROSES BREEDING TERINTEGRASI */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Proses Breeding Terintegrasi</h2>
            <p className="text-text-secondary">Kami memastikan setiap tahapan breeding dilakukan secara terencana, terukur, dan profesional.</p>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { num: 1, title: "Seleksi Indukan", desc: "Pemilihan indukan unggul dengan kriteria genetik, kesehatan, dan fisik ideal.", icon: Tractor },
              { num: 2, title: "Perkawinan Terencana", desc: "Program perkawinan terarah untuk menghasilkan keturunan berkualitas.", icon: RefreshCw },
              { num: 3, title: "Kelahiran & Monitoring", desc: "Pemantauan kelahiran dan kondisi anakan secara intensif dan berkelanjutan.", icon: Baby },
              { num: 4, title: "Perawatan & Nutrisi", desc: "Perawatan, nutrisi seimbang, dan vaksinasi untuk pertumbuhan optimal.", icon: Wheat },
              { num: 5, title: "Evaluasi Pertumbuhan", desc: "Monitoring bobot, kesehatan, dan perkembangan untuk seleksi berkala.", icon: LineChart },
              { num: 6, title: "Bibit Unggul", desc: "Menghasilkan bibit unggul siap untuk program breeding berikutnya atau distribusi.", icon: Star }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center snap-start shrink-0">
                <div className="bg-white border border-border-subtle rounded-3xl p-6 w-[220px] h-[220px] flex flex-col hover:border-primary/30 hover:shadow-lg transition-all text-center group relative">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <step.icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm mb-2">{step.num}. {step.title}</h3>
                  <p className="text-[10px] text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="w-8 shrink-0 flex justify-center text-border-subtle">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MIDDLE SECTION (3 Columns) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Col 1: Program Breeding Dombantara (Span 6) */}
            <div className="lg:col-span-6">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-3">Program Breeding Dombantara</h2>
              <p className="text-text-secondary text-sm mb-8">Program pembibitan kami didukung oleh teknologi, pengalaman, dan komitmen untuk kualitas terbaik.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { img: "1511117833895-4b473c0b85d6", title: "Indukan Unggul", points: ["Seleksi ketat indukan jantan & betina", "Struktur tubuh ideal", "Riwayat reproduksi baik", "Bebas penyakit menular"] },
                  { img: "1534067783141-86ea4bdfd188", title: "Seleksi Genetik", points: ["Evaluasi genetik berkelanjutan", "Pemilihan karakter unggul", "Meningkatkan kualitas populasi", "Program silsilah terstruktur"] },
                  { img: "1524024969020-6126cd23467f", title: "Perawatan Anak Ternak", points: ["Monitoring kesehatan intensif", "Nutrisi awal berkualitas", "Vaksinasi lengkap", "Lingkungan bersih & nyaman"] }
                ].map((prog, idx) => (
                  <div key={idx} className="bg-surface rounded-2xl overflow-hidden border border-border-subtle flex flex-col">
                    <div className="h-28 overflow-hidden"><img src={`https://images.unsplash.com/photo-${prog.img}?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover" /></div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="font-bold text-xs mb-3">{prog.title}</h4>
                      <ul className="space-y-2 mb-4 flex-1">
                        {prog.points.map((p, i) => <li key={i} className="flex gap-2 text-[9px] text-text-secondary"><CheckCircle2 size={12} className="text-status-success shrink-0" />{p}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-start">
                <Link href="#" className="px-5 py-2 border border-border-subtle rounded-full text-xs font-bold text-primary hover:bg-surface flex items-center gap-2">
                  Lihat Semua Program <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Col 2: Standar Seleksi Indukan (Span 3) */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-3">Standar Seleksi Indukan</h2>
              <p className="text-text-secondary text-sm mb-8">Setiap indukan melalui seleksi ketat sesuai standar Dombantara.</p>
              
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, title: "Kesehatan Prima", desc: "Bebas penyakit, vaksinasi lengkap" },
                  { icon: Activity, title: "Struktur Tubuh Ideal", desc: "Postur, ukuran, dan keserasian tubuh" },
                  { icon: LineChart, title: "Pertumbuhan Optimal", desc: "Bobot ideal dan pertambahan stabil" },
                  { icon: Briefcase, title: "Riwayat Reproduksi Baik", desc: "Fertilitas tinggi & produktivitas konsisten" },
                  { icon: LinkIcon, title: "Genetik Unggul", desc: "Silsilah jelas dan potensi keturunan terbaik" }
                ].map((std, idx) => (
                  <div key={idx} className="flex gap-4 items-center bg-surface/50 p-3 rounded-xl border border-border-subtle/50">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-status-success shadow-sm shrink-0"><std.icon size={18} /></div>
                    <div>
                      <div className="font-bold text-xs">{std.title}</div>
                      <div className="text-[10px] text-text-muted">{std.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Contoh Animal Record (Span 3) */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-3">Contoh Animal Record</h2>
              <p className="text-text-secondary text-sm mb-8">Setiap ternak memiliki data dan riwayat tercatat secara digital.</p>
              
              <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
                <div className="relative h-32">
                  <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <span className="bg-primary text-white text-[9px] font-bold px-2 py-1 rounded">Terverifikasi</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-black/70 backdrop-blur text-white text-[9px] font-mono px-2 py-1 rounded border border-white/20">ID: BR-00127</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Jenis</span><span className="font-medium">Domba Garut</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Tanggal Lahir</span><span className="font-medium">12 Januari 2025</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Indukan</span><span className="font-medium">Betina A01</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Program</span><span className="font-medium">Breeding Program</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Status Kesehatan</span><span className="font-medium text-status-success">Sehat</span></div>
                  <div className="flex justify-between border-b border-border-subtle/50 pb-2"><span className="text-text-muted">Vaksinasi</span><span className="font-medium text-status-success">Lengkap</span></div>
                  <div className="flex justify-between"><span className="text-text-muted">Bobot Saat Ini</span><span className="font-medium">28 kg</span></div>
                </div>
                <div className="p-3 bg-surface border-t border-border-subtle">
                  <Link href="#" className="w-full py-2 bg-white border border-border-subtle rounded-lg text-[11px] font-bold hover:border-primary text-center flex items-center justify-center gap-1">
                    Lihat Detail Record <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BREEDING UNTUK BERBAGAI KEBUTUHAN */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Breeding untuk Berbagai Kebutuhan</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Tractor, title: "Untuk Peternak", desc: "Dapatkan bibit unggul untuk mengembangkan usaha peternakan Anda dengan hasil lebih optimal.", img: "1563636619-e9143da7973b" },
              { icon: Users, title: "Untuk Mitra", desc: "Program pengembangan populasi ternak bersama untuk rantai pasok yang berkelanjutan.", img: "1524024969020-6126cd23467f" },
              { icon: LineChart, title: "Untuk Investor", desc: "Investasi pada program breeding berkualitas untuk ekosistem peternakan yang tumbuh berkelanjutan.", img: "1515516089376-88db1e26e9b0" }
            ].map((kebutuhan, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-border-subtle flex shadow-sm group">
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <kebutuhan.icon size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-2 text-text-primary">{kebutuhan.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{kebutuhan.desc}</p>
                </div>
                <div className="w-1/3 min-w-[120px] relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${kebutuhan.img}?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-primary rounded-[2rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="lg:w-2/5 relative z-10 text-center lg:text-left">
                <h2 className="font-display text-3xl font-bold text-white mb-4">Tertarik Mengembangkan Ternak Berkualitas Bersama Dombantara?</h2>
                <p className="text-white/80 text-sm">
                  Tim kami siap membantu Anda merancang program breeding yang sesuai dengan kebutuhan Anda.
                </p>
              </div>
              
              <div className="lg:w-3/5 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 w-full">
                <div className="flex gap-6 justify-center w-full md:w-auto">
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Headset size={24} className="text-status-success" />
                    <span className="font-bold text-xs">Konsultasi Gratis</span>
                    <span className="text-[10px] text-white/70 max-w-[100px]">Dapatkan konsultasi program breeding</span>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Users size={24} className="text-status-success" />
                    <span className="font-bold text-xs">Tim Profesional</span>
                    <span className="text-[10px] text-white/70 max-w-[100px]">Didukung oleh ahli peternakan berpengalaman</span>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <ShieldCheck size={24} className="text-status-success" />
                    <span className="font-bold text-xs">Pendampingan Penuh</span>
                    <span className="text-[10px] text-white/70 max-w-[100px]">Pendampingan dari awal hingga hasil optimal</span>
                  </div>
                </div>
                
                <Link href="#" className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-xs hover:bg-surface transition-all shadow-lg flex items-center gap-2 shrink-0">
                  Konsultasi Sekarang <ArrowRight size={14} />
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
