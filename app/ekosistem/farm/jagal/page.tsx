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
  Package,
  Droplet,
  Users,
  Activity,
  Truck,
  FileCheck,
  Scissors,
  Scale,
  Building2,
  Snowflake,
  BadgeCheck,
  Calendar,
  Headset,
  CircleDollarSign,
  Timer
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function JagalDetailPage() {
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
            <span className="text-text-primary">Jasa Jagal</span>
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
                alt="Jasa Jagal Dombantara" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="font-bold tracking-widest text-sm uppercase mb-4 text-primary">
                  JAGAL DOMBANTARA
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Jagal Profesional,<br/>Halal, Higienis & Amanah
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                  Layanan jagal domba, kambing, dan sapi dengan standar halal dan kebersihan tinggi oleh tenaga ahli berpengalaman untuk hasil terbaik.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#pesan" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Pesan Layanan Jagal <ArrowRight size={16} />
                  </Link>
                  <Link href="#proses" className="px-6 py-3 bg-white text-primary border border-border-subtle rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    <PlayCircle size={16} /> Lihat Alur Proses
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 right-0 w-full md:w-[85%] bg-primary rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Star size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Sesuai Syariah</div>
                  <div className="text-white/80 text-[10px]">Disembelih sesuai syariat islam oleh juru sembelih bersertifikat.</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <ShieldCheck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Higienis</div>
                  <div className="text-white/80 text-[10px]">Proses bersih, steril, dan bebas kontaminasi.</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <CheckCircle2 size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Daging Berkualitas</div>
                  <div className="text-white/80 text-[10px]">Daging segar, terjaga mutunya, siap dikonsumsi.</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Truck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-sm mb-1">Layanan Cepat</div>
                  <div className="text-white/80 text-[10px]">Proses cepat dan pengiriman tepat waktu.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALUR PROSES JAGAL */}
      <section id="proses" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Alur Proses Jagal Dombantara</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-8 snap-x snap-mandatory scrollbar-hide items-start">
            {[
              { num: 1, title: "Pemeriksaan Hewan", desc: "Pemeriksaan kesehatan hewan sebelum proses penyembelihan.", icon: FileCheck },
              { num: 2, title: "Penyembelihan", desc: "Penyembelihan sesuai syariat oleh juru sembelih bersertifikat.", icon: Activity },
              { num: 3, title: "Pengeluaran Darah", desc: "Darah dikeluarkan sempurna untuk menjaga kualitas daging.", icon: Droplet },
              { num: 4, title: "Pengulitan", desc: "Proses pengulitan dilakukan dengan hati-hati dan higienis.", icon: Scissors },
              { num: 5, title: "Pemotongan", desc: "Pemotongan sesuai kebutuhan dan standar kebersihan.", icon: Activity },
              { num: 6, title: "Penimbangan & QC", desc: "Penimbangan dan quality control sebelum pengemasan.", icon: Scale },
              { num: 7, title: "Pengemasan", desc: "Daging dikemas rapi, bersih, dan aman untuk distribusi.", icon: Package },
              { num: 8, title: "Distribusi", desc: "Pengiriman cepat ke lokasi Anda dengan kondisi terjaga.", icon: Truck }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start snap-start shrink-0">
                <div className="flex flex-col items-center w-36 text-center relative group">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[10px] mb-4 absolute -top-3 left-4 shadow-sm z-10">
                    {step.num}
                  </div>
                  <div className="bg-surface border border-border-subtle rounded-2xl p-4 w-full h-28 flex flex-col items-center justify-center mb-4 group-hover:border-primary group-hover:shadow-md transition-all relative">
                    <step.icon size={24} className="text-primary mb-2" strokeWidth={1.5} />
                    <h3 className="font-bold text-[10px] leading-tight text-text-primary">{step.title}</h3>
                  </div>
                  <p className="text-[9px] text-text-secondary leading-relaxed px-2">{step.desc}</p>
                </div>
                {idx < 7 && (
                  <div className="w-6 h-28 flex items-center justify-center shrink-0">
                    <ArrowRight size={12} className="text-border-subtle" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MIDDLE SECTION (2 Columns) */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Col 1: Layanan Jagal Kami (Span 7) */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Layanan Jagal Kami</h2>
              <p className="text-text-secondary text-sm mb-6">Melayani berbagai kebutuhan dengan standar terbaik.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { img: "1543877087-ebf71fde2be1", title: "Jagal Domba", desc: "Layanan jagal domba sesuai syariat dengan hasil daging premium." },
                  { img: "1511117833895-4b473c0b85d6", title: "Jagal Kambing", desc: "Proses jagal kambing higienis dan cepat sesuai kebutuhan Anda." },
                  { img: "1524024969020-6126cd23467f", title: "Jagal Sapi", desc: "Layanan jagal sapi profesional untuk kebutuhan qurban, akikah, dan lainnya." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm hover:border-primary transition-colors flex flex-col group">
                    <div className="h-32 overflow-hidden relative">
                      <img src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 left-2 bg-primary/90 text-white p-1.5 rounded-lg backdrop-blur-sm"><ShieldCheck size={16}/></div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed flex-1">{item.desc}</p>
                      <Link href="#pesan" className="mt-4 text-[10px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Pesan Sekarang <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Fasilitas & Peralatan Modern (Span 5) */}
            <div className="lg:col-span-5 bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col">
              <h2 className="font-display text-xl font-bold text-text-primary mb-2">Fasilitas & Peralatan Modern</h2>
              <p className="text-text-secondary text-xs mb-6">Dilengkapi fasilitas modern untuk hasil jagal yang higienis dan aman.</p>
              
              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* Row 1 */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0"><Building2 size={16} /></div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[10px] mb-1">Ruang Penyembelihan</h4>
                    <p className="text-[8px] text-text-muted mb-2">Khusus dan bersih</p>
                    <div className="rounded-lg overflow-hidden h-16 w-full"><img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0"><Snowflake size={16} /></div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[10px] mb-1">Cold Room</h4>
                    <p className="text-[8px] text-text-muted mb-2">Menjaga kesegaran</p>
                    <div className="rounded-lg overflow-hidden h-16 w-full"><img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="flex gap-3 mt-2">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0"><Droplet size={16} /></div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[10px] mb-1">Sistem Drainase & Sanitasi Baik</h4>
                    <div className="rounded-lg overflow-hidden h-16 w-full mt-2"><img src="https://images.unsplash.com/photo-1524024969020-6126cd23467f?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0"><BadgeCheck size={16} /></div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[10px] mb-1">Kebersihan Terjaga</h4>
                    <p className="text-[8px] text-text-muted mb-2">Setiap Proses</p>
                    <div className="rounded-lg overflow-hidden h-16 w-full"><img src="https://images.unsplash.com/photo-1515516089376-88db1e26e9b0?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" /></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN & TESTIMONIAL */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Keunggulan (Span 7) */}
            <div className="lg:col-span-7 bg-white border border-border-subtle rounded-3xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Keunggulan Layanan Jagal Dombantara</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { icon: Star, title: "100% Halal", desc: "Sesuai syariat islam" },
                  { icon: ShieldCheck, title: "Higienis & Bersih", desc: "Standar kebersihan tinggi" },
                  { icon: Users, title: "Tenaga Profesional", desc: "Juru sembelih bersertifikat" },
                  { icon: CheckCircle2, title: "Daging Segar", desc: "Kualitas terjaga, siap konsumsi" },
                  { icon: Truck, title: "Layanan Cepat", desc: "Proses cepat & pengiriman tepat" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col text-center items-center">
                    <div className="w-12 h-12 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-primary mb-3"><item.icon size={20} /></div>
                    <h4 className="font-bold text-[11px] mb-1 text-text-primary leading-tight">{item.title}</h4>
                    <p className="text-[9px] text-text-muted leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial (Span 5) */}
            <div className="lg:col-span-5 bg-white border border-border-subtle rounded-3xl p-8 shadow-sm flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-text-primary mb-2">Dipercaya Banyak Pelanggan</h3>
              <p className="text-text-secondary text-xs mb-6">Ribuan pelanggan puas dengan layanan jagal kami.</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="border border-border-subtle rounded-2xl p-4 text-center shrink-0">
                  <div className="flex items-center justify-center gap-2 font-display text-3xl font-bold text-text-primary mb-1">
                    <Star size={24} className="fill-status-warning text-status-warning" /> 4.9/5
                  </div>
                  <div className="text-[10px] text-text-muted mb-2">(1200+ Ulasan)</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-status-warning text-status-warning" />)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-xs italic text-text-secondary mb-4 leading-relaxed">
                    "Layanan jagal sangat memuaskan, proses cepat, higienis, daging segar dan rapi. Terpercaya!"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" /></div>
                    <div>
                      <div className="font-bold text-[11px]">— Budi Santoso</div>
                      <div className="text-[9px] text-text-muted">Pelanggan Setia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section id="pesan" className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-[#0f2e1a] rounded-[2rem] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              {/* Deco background */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="lg:w-1/3 relative z-10 text-center lg:text-left flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 hidden md:flex text-white"><Calendar size={24}/></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Butuh Layanan Jagal?</h2>
                  <p className="text-white/80 text-[11px] leading-relaxed">
                    Pesan sekarang dan dapatkan layanan jagal profesional untuk kebutuhan Anda.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-2/3 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 w-full">
                <div className="flex gap-4 md:gap-8 justify-center w-full md:w-auto">
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Headset size={20} className="text-status-success" />
                    <div className="font-bold text-[11px]">Konsultasi Gratis</div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <CircleDollarSign size={20} className="text-status-success" />
                    <div className="font-bold text-[11px]">Harga Transparan</div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Timer size={20} className="text-status-success" />
                    <div className="font-bold text-[11px]">Jadwal Fleksibel</div>
                  </div>
                </div>
                
                <Link href="#" className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-xs hover:bg-surface transition-all shadow-lg flex items-center gap-2 shrink-0">
                  <Headset size={16}/> Pesan Layanan Jagal <ArrowRight size={14} />
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
