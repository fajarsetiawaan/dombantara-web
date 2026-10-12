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
  Users,
  Activity,
  Truck,
  FileCheck,
  BadgeCheck,
  Headset,
  MapPin,
  FileText,
  SearchCheck,
  ShoppingCart,
  Info,
  ChefHat,
  HeartHandshake,
  Settings,
  CalendarHeart
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function AqiqahDetailPage() {
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
            <span className="text-text-primary">Aqiqah Dombantara</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden pb-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[480px] flex items-center">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=2000" 
                alt="Aqiqah Dombantara" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4 lg:w-2/3"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-2/3 lg:w-1/2 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Aqiqah Berkah,<br/>Amanah & Sesuai Syariat
                </h1>
                <p className="text-text-secondary md:text-base leading-relaxed mb-8 max-w-xl">
                  Dombantara Aqiqah membantu Anda melaksanakan ibadah aqiqah sesuai syariat dengan proses mudah, hewan berkualitas, dan layanan profesional.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Sesuai Syariat</div>
                      <div className="text-[9px] text-text-muted leading-tight">Mengikuti tuntunan syariat Islam</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Hewan Terbaik</div>
                      <div className="text-[9px] text-text-muted leading-tight">Sehat, berkualitas, dan terawat</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Amanah & Profesional</div>
                      <div className="text-[9px] text-text-muted leading-tight">Proses oleh tim ahli dan terpercaya</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Dokumentasi Lengkap</div>
                      <div className="text-[9px] text-text-muted leading-tight">Foto, video & laporan dikirim ke Anda</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="#paket" className="px-6 py-3 bg-[#0f2e1a] text-white rounded-full font-bold text-sm hover:bg-primary transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Lihat Paket Aqiqah <ArrowRight size={16} />
                  </Link>
                  <Link href="#proses" className="px-6 py-3 bg-white text-primary border border-border-subtle rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    <PlayCircle size={16} /> Cara Aqiqah di Dombantara
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Floating Stats Box */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 lg:w-4/5 z-30">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-border-subtle grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-border-subtle/50">
            <div className="flex items-center gap-4 px-2 lg:px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><CheckCircle2 size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">8.000+</div>
                <div className="text-[9px] text-text-muted leading-tight">Aqiqah<br/>Terselenggara</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 lg:px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Users size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">15.000+</div>
                <div className="text-[9px] text-text-muted leading-tight">Keluarga<br/>Bahagia</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 lg:px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">250+</div>
                <div className="text-[9px] text-text-muted leading-tight">Lokasi Layanan<br/>(Kota & Pelosok)</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 lg:px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><BadgeCheck size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">100%</div>
                <div className="text-[9px] text-text-muted leading-tight">Sesuai Syariat<br/>dan Amanah</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 lg:px-4 justify-center md:justify-start col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><FileText size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">Dokumentasi<br/>Lengkap</div>
                <div className="text-[9px] text-text-muted leading-tight">Foto, Video & Laporan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALUR AQIQAH */}
      <section id="proses" className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Alur Aqiqah Dombantara</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-8 snap-x snap-mandatory scrollbar-hide items-start">
            {[
              { num: 1, title: "Konsultasi & Pilih Paket", desc: "Tim kami membantu Anda memilih paket terbaik.", icon: Headset },
              { num: 2, title: "Pemesanan", desc: "Isi data & lakukan pembayaran.", icon: ShoppingCart },
              { num: 3, title: "Persiapan Hewan", desc: "Hewan dipilih, dicek kesehatan, dan dipersiapkan.", icon: FileCheck },
              { num: 4, title: "Penyembelihan", desc: "Dilakukan sesuai syariat oleh tenaga profesional.", icon: Activity },
              { num: 5, title: "Pengolahan", desc: "Daging diolah higienis dan siap saji.", icon: ChefHat },
              { num: 6, title: "Distribusi", desc: "Daging dikirim ke penerima yang Anda tentukan.", icon: Truck },
              { num: 7, title: "Dokumentasi", desc: "Laporan, foto & video dikirim ke Anda.", icon: FileText }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start snap-start shrink-0">
                <div className="flex flex-col items-center w-36 text-center relative group">
                  <div className="w-6 h-6 rounded-full bg-[#0f2e1a] text-white flex items-center justify-center font-bold text-[10px] mb-4 absolute -top-3 left-1/2 -translate-x-1/2 shadow-sm z-10">
                    {step.num}
                  </div>
                  <div className="bg-white border border-border-subtle rounded-2xl p-4 w-full h-28 flex flex-col items-center justify-center mb-4 group-hover:border-primary group-hover:shadow-md transition-all relative mt-3">
                    <step.icon size={24} className="text-[#0f2e1a] mb-2" strokeWidth={1.5} />
                    <h3 className="font-bold text-[10px] leading-tight text-text-primary">{step.title}</h3>
                  </div>
                  <p className="text-[9px] text-text-secondary leading-relaxed px-2">{step.desc}</p>
                </div>
                {idx < 6 && (
                  <div className="w-6 h-28 flex items-center justify-center shrink-0 mt-3">
                    <ArrowRight size={12} className="text-border-subtle" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAKET AQIQAH PILIHAN */}
      <section id="paket" className="py-20 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-display text-3xl font-bold text-text-primary">Paket Aqiqah Pilihan</h2>
            <Link href="#" className="text-[10px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
              Lihat Semua Paket <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1: Paket Ekonomis */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold px-2 py-1 rounded-full z-10">Paket Ekonomis</div>
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Paket Ekonomis</h4>
                <div className="space-y-2 mb-4 flex-1 text-[10px] text-text-secondary">
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> ± 14-16 Kg (Betina)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Masakan Gulai</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Untuk ± 50 Porsi</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 1.650.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 2: Paket Hemat */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Paket Hemat</h4>
                <div className="space-y-2 mb-4 flex-1 text-[10px] text-text-secondary">
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> ± 15-20 Kg (Jantan)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Masakan Gulai</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Untuk ± 60 Porsi</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 1.950.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 3: Paket Premium */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="absolute top-3 left-3 bg-status-success text-white text-[9px] font-bold px-2 py-1 rounded-full z-10">Most Popular</div>
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Paket Premium</h4>
                <div className="space-y-2 mb-4 flex-1 text-[10px] text-text-secondary">
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> ± 18-20 Kg (Jantan)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Masakan Rendang</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Untuk ± 70 Porsi</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 2.450.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 4: Paket Spesial */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Paket Spesial</h4>
                <div className="space-y-2 mb-4 flex-1 text-[10px] text-text-secondary">
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> ± 20-22 Kg (Jantan)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Masakan Rendang</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Untuk ± 80 Porsi</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 2.950.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 5: Paket Istimewa */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="absolute top-3 left-3 bg-status-warning text-white text-[9px] font-bold px-2 py-1 rounded-full z-10">Best Value</div>
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Paket Istimewa</h4>
                <div className="space-y-2 mb-4 flex-1 text-[10px] text-text-secondary">
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> ± 22-25 Kg (Jantan)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Masakan Rendang</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={12} className="text-status-success"/> Untuk ± 100 Porsi</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 3.650.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

          </div>
          
          <div className="text-[10px] text-text-muted mt-6 text-center">
            <Info size={12} className="inline mr-1 text-primary"/>
            Berat hewan adalah kisaran hidup. Masakan dapat disesuaikan sesuai permintaan.
          </div>
        </div>
      </section>

      {/* 4. MIDDLE SECTION (3 Columns) */}
      <section className="py-10 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Layanan Aqiqah Kami */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-text-primary mb-6">Layanan Aqiqah Kami</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-status-success shrink-0"><CheckCircle2 size={18}/></div>
                    <div>
                      <h4 className="font-bold text-[10px] mb-1">Hewan Sehat & Berkualitas</h4>
                      <p className="text-[8px] text-text-muted">Dipilih dari peternakan sendiri yang terawat dan bersertifikat.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-status-success shrink-0"><ChefHat size={18}/></div>
                    <div>
                      <h4 className="font-bold text-[10px] mb-1">Masakan Higienis & Lezat</h4>
                      <p className="text-[8px] text-text-muted">Diolah oleh koki berpengalaman dengan standar kebersihan tinggi.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-status-success shrink-0"><MapPin size={18}/></div>
                    <div>
                      <h4 className="font-bold text-[10px] mb-1">Distribusi Tepat Sasaran</h4>
                      <p className="text-[8px] text-text-muted">Dikirim ke keluarga, kerabat, dan masyarakat yang membutuhkan.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded flex items-center justify-center text-status-success shrink-0"><FileText size={18}/></div>
                    <div>
                      <h4 className="font-bold text-[10px] mb-1">Laporan & Dokumentasi Lengkap</h4>
                      <p className="text-[8px] text-text-muted">Foto, video, dan laporan lengkap sebagai bukti amanah kami.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-full xl:w-2/5 shrink-0 rounded-2xl overflow-hidden h-48 md:h-full lg:h-48 xl:h-full">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Kenapa Aqiqah di Dombantara */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col justify-center relative">
              <h3 className="font-display text-lg font-bold text-text-primary mb-6">Kenapa Aqiqah di Dombantara?</h3>
              <div className="space-y-4 relative z-10">
                {[
                  "Sesuai syariat dan tuntunan ulama",
                  "Hewan dari peternakan sendiri",
                  "Proses amanah & transparan",
                  "Harga transparan, tidak ada biaya tersembunyi",
                  "Tim profesional berpengalaman",
                  "Layanan ke seluruh Indonesia"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-[10px] font-medium text-text-secondary">
                    <CheckCircle2 size={14} className="text-status-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 w-24 h-28 bg-[#f0fdf4] rounded-2xl flex flex-col items-center justify-center border border-status-success/20 shadow-sm opacity-90 z-0 text-center px-2">
                <BadgeCheck size={28} className="text-[#0f2e1a] mb-2" />
                <div className="font-bold text-[10px] text-[#0f2e1a] tracking-widest leading-tight">SESUAI<br/>SYARIAT</div>
                <div className="text-[6px] font-bold text-status-success mt-2 uppercase leading-tight">Amanah<br/>& Terpercaya</div>
              </div>
            </div>

            {/* Testimoni */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col justify-center">
              <h3 className="font-display text-lg font-bold text-text-primary mb-6">Testimoni Keluarga Bahagia</h3>
              <div className="text-3xl text-primary/30 mb-2 leading-none font-serif">"</div>
              <div className="text-xs italic text-text-secondary mb-6 leading-relaxed flex-1">
                Alhamdulillah aqiqah anak kami berjalan lancar bersama Dombantara. Hewannya sehat, masakannya enak, dan distribusinya tepat sasaran. Laporan lengkapnya juga membuat kami tenang.
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" /></div>
                <div>
                  <div className="font-bold text-[11px]">Bapak Andi & Ibu Rina</div>
                  <div className="text-[9px] text-text-muted mb-1">Jakarta</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-status-warning text-status-warning" />)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER (Two-Tone) */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="rounded-[2rem] flex flex-col lg:flex-row shadow-2xl relative overflow-hidden border border-border-subtle">
              
              {/* Left Side (Dark Green) */}
              <div className="bg-[#0f2e1a] p-8 md:p-12 lg:w-2/5 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <h2 className="font-display text-2xl font-bold text-white mb-4 relative z-10">Percayakan Aqiqah Buah Hati Anda Kepada Dombantara</h2>
                <p className="text-white/80 text-xs leading-relaxed relative z-10">
                  Kami siap membantu Anda melaksanakan ibadah aqiqah dengan mudah, amanah, dan penuh keberkahan.
                </p>
              </div>
              
              {/* Right Side (Light Surface) */}
              <div className="bg-surface p-8 md:p-12 lg:w-3/5 flex flex-col justify-center gap-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <CalendarHeart size={24} className="text-status-success mb-2" strokeWidth={1.5} />
                    <div className="font-bold text-[10px] text-text-primary mb-1">Mudah</div>
                    <div className="text-[8px] text-text-muted leading-tight">Proses praktis dan cepat</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <HeartHandshake size={24} className="text-status-success mb-2" strokeWidth={1.5} />
                    <div className="font-bold text-[10px] text-text-primary mb-1">Amanah</div>
                    <div className="text-[8px] text-text-muted leading-tight">Dikelola tim profesional</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <CheckCircle2 size={24} className="text-status-success mb-2" strokeWidth={1.5} />
                    <div className="font-bold text-[10px] text-text-primary mb-1">Berkualitas</div>
                    <div className="text-[8px] text-text-muted leading-tight">Hewan terbaik & olahan lezat</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <MapPin size={24} className="text-status-success mb-2" strokeWidth={1.5} />
                    <div className="font-bold text-[10px] text-text-primary mb-1">Tepat Sasaran</div>
                    <div className="text-[8px] text-text-muted leading-tight">Dikirim ke yang membutuhkan</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border-subtle">
                  <Link href="#paket" className="w-full md:w-auto px-8 py-3 bg-[#0f2e1a] text-white rounded-xl font-bold text-xs hover:bg-primary transition-all shadow-lg flex items-center justify-center gap-2">
                    <CalendarHeart size={16}/> Pesan Aqiqah Sekarang <ArrowRight size={14} />
                  </Link>
                  <div className="text-center md:text-right">
                    <div className="text-[10px] text-text-muted mb-1">Atau hubungi kami di</div>
                    <a 
                      href="https://wa.me/6282299199143" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-sm text-text-primary hover:text-primary transition-colors"
                    >
                      +62 822-9919-9143
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
