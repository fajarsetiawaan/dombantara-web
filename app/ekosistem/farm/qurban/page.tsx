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
  Info
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function QurbanDetailPage() {
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
            <span className="text-text-primary">Qurban Dombantara</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden pb-8">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[480px] flex items-center">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=2000" 
                alt="Qurban Dombantara" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4 lg:w-2/3"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-2/3 lg:w-1/2 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Qurban Berkualitas,<br/><span className="text-primary">Amanah & Tepat Sasaran</span>
                </h1>
                <p className="text-text-secondary md:text-base leading-relaxed mb-8">
                  Dombantara Qurban menghadirkan hewan terbaik dari peternakan sendiri dengan proses sesuai syariat, dikelola profesional dan disalurkan hingga ke pelosok.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-start gap-2">
                    <ShieldCheck size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Sesuai Syariat</div>
                      <div className="text-[9px] text-text-muted leading-tight">Dikelola sesuai syariat Islam</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Hewan Ternak Terbaik</div>
                      <div className="text-[9px] text-text-muted leading-tight">Sehat, berkualitas, & terverifikasi</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={20} className="text-status-success shrink-0" />
                    <div>
                      <div className="font-bold text-[11px] leading-tight">Tepat Sasaran</div>
                      <div className="text-[9px] text-text-muted leading-tight">Disalurkan ke yang berhak</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="#paket" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                    Lihat Paket Qurban <ArrowRight size={16} />
                  </Link>
                  <Link href="#proses" className="px-6 py-3 bg-white text-primary border border-primary rounded-full font-bold text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    <PlayCircle size={16} /> Cara Berqurban
                  </Link>
                </div>
              </Reveal>
            </div>
            
            {/* Stats Bar Overlapping Bottom Right */}
            <div className="absolute bottom-0 right-0 w-full md:w-[70%] lg:w-[60%] bg-[#0f2e1a] rounded-tl-3xl z-30">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 py-6 px-4">
                <div className="flex flex-col items-center text-center text-white px-2">
                  <ShieldCheck size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-xs mb-1">100% Amanah</div>
                  <div className="text-white/70 text-[9px]">Dikelola profesional dan transparan</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <CheckCircle2 size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-xs mb-1">Hewan Sehat</div>
                  <div className="text-white/70 text-[9px]">Pemeriksaan kesehatan berkala & vaksinasi</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <Activity size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-xs mb-1">Proses Sesuai Syariat</div>
                  <div className="text-white/70 text-[9px]">Penyembelihan oleh tenaga ahli</div>
                </div>
                <div className="flex flex-col items-center text-center text-white px-2">
                  <FileText size={20} className="text-status-success mb-2" />
                  <div className="font-bold text-xs mb-1">Dokumentasi</div>
                  <div className="text-white/70 text-[9px]">Foto, video & laporan distribusi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (White Background) */}
      <section className="py-6 bg-white border-b border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-border-subtle/50">
            <div className="flex items-center gap-4 px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Star size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">10.000+</div>
                <div className="text-[10px] text-text-muted leading-tight">Hewan Qurban<br/>Tahun 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Users size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">25.000+</div>
                <div className="text-[10px] text-text-muted leading-tight">Penerima Manfaat<br/>di Seluruh Indonesia</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">250+</div>
                <div className="text-[10px] text-text-muted leading-tight">Lokasi Penyaluran<br/>(Kota & Pelosok)</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><BadgeCheck size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">100%</div>
                <div className="text-[10px] text-text-muted leading-tight">Sesuai Syariat<br/>dan Amanah</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 justify-center md:justify-start col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><FileText size={20} /></div>
              <div>
                <div className="font-display font-bold text-lg md:text-xl text-text-primary leading-tight">Dokumentasi<br/>Lengkap</div>
                <div className="text-[10px] text-text-muted leading-tight">Foto, Video & Laporan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUR QURBAN */}
      <section id="proses" className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">Alur Qurban Dombantara</h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-8 snap-x snap-mandatory scrollbar-hide items-start">
            {[
              { num: 1, title: "Pilih Hewan", desc: "Pilih hewan qurban sesuai kebutuhan Anda.", icon: SearchCheck },
              { num: 2, title: "Pemesanan", desc: "Isi data & lakukan pembayaran.", icon: ShoppingCart },
              { num: 3, title: "Pemeriksaan", desc: "Hewan diperiksa kesehatannya secara menyeluruh.", icon: FileCheck },
              { num: 4, title: "Penyembelihan", desc: "Dilakukan sesuai syariat oleh tenaga profesional.", icon: Activity },
              { num: 5, title: "Pengemasan", desc: "Daging dikemas rapi dan higienis.", icon: Package },
              { num: 6, title: "Distribusi", desc: "Disalurkan ke penerima yang berhak.", icon: Truck },
              { num: 7, title: "Dokumentasi", desc: "Laporan, foto & video untuk Anda.", icon: FileText }
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

      {/* 4. PAKET QURBAN PILIHAN */}
      <section id="paket" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-display text-3xl font-bold text-text-primary">Paket Qurban Pilihan</h2>
            <div className="text-[10px] text-text-muted hidden md:block">
              <Info size={12} className="inline mr-1 text-primary"/>
              Berat hewan adalah kisaran. Berat final akan disesuaikan saat hari penyembelihan.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1: Domba Premium */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="absolute top-3 left-3 bg-status-success text-white text-[9px] font-bold px-2 py-1 rounded z-10">Paling Populer</div>
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="bg-black/50 backdrop-blur rounded p-1"><ShieldCheck size={12} className="text-white"/></div>
                  <div className="bg-black/50 backdrop-blur rounded p-1"><CheckCircle2 size={12} className="text-white"/></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Domba Premium</h4>
                <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Activity size={12} className="text-status-success"/> 25 - 35 Kg</div>
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Users size={12} className="text-status-success"/> 1 Orang / Shahibul</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 3.250.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 2: Kambing Premium */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="bg-black/50 backdrop-blur rounded p-1"><ShieldCheck size={12} className="text-white"/></div>
                  <div className="bg-black/50 backdrop-blur rounded p-1"><CheckCircle2 size={12} className="text-white"/></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Kambing Premium</h4>
                <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Activity size={12} className="text-status-success"/> 25 - 35 Kg</div>
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Users size={12} className="text-status-success"/> 1 Orang / Shahibul</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 3.950.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 3: Domba Super */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="bg-black/50 backdrop-blur rounded p-1"><ShieldCheck size={12} className="text-white"/></div>
                  <div className="bg-black/50 backdrop-blur rounded p-1"><CheckCircle2 size={12} className="text-white"/></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Domba Super</h4>
                <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Activity size={12} className="text-status-success"/> 35 - 45 Kg</div>
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Users size={12} className="text-status-success"/> 1 - 2 Orang</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 4.850.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 4: Sapi Patungan */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="absolute top-3 left-3 bg-status-warning text-white text-[9px] font-bold px-2 py-1 rounded z-10">Best Value</div>
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1524024969020-6126cd23467f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="bg-black/50 backdrop-blur rounded p-1"><ShieldCheck size={12} className="text-white"/></div>
                  <div className="bg-black/50 backdrop-blur rounded p-1"><CheckCircle2 size={12} className="text-white"/></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Sapi Patungan</h4>
                <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Activity size={12} className="text-status-success"/> 250 - 300 Kg</div>
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Users size={12} className="text-status-success"/> Untuk 7 Orang</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 2.950.000 <span className="text-[10px] font-normal text-text-muted">/ Orang</span></div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

            {/* Card 5: Sapi Utuh */}
            <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:border-primary transition-all shadow-sm flex flex-col relative group">
              <div className="h-40 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1524024969020-6126cd23467f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="bg-black/50 backdrop-blur rounded p-1"><ShieldCheck size={12} className="text-white"/></div>
                  <div className="bg-black/50 backdrop-blur rounded p-1"><CheckCircle2 size={12} className="text-white"/></div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-sm mb-3">Sapi Utuh</h4>
                <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Activity size={12} className="text-status-success"/> 450 - 600 Kg</div>
                  <div className="flex items-center gap-1 text-[10px] text-text-secondary"><Users size={12} className="text-status-success"/> Untuk 7 Orang</div>
                </div>
                <div className="font-display font-bold text-lg text-text-primary mb-4">Rp 19.500.000</div>
                <button className="w-full py-2 bg-white border border-border-subtle rounded-xl text-[10px] font-bold text-primary hover:border-primary flex justify-center items-center gap-2 transition-colors">
                  Pilih Paket <ShoppingCart size={12} />
                </button>
              </div>
            </div>

          </div>
          
          <div className="text-[10px] text-text-muted mt-6 text-center md:hidden">
            <Info size={12} className="inline mr-1 text-primary"/>
            Berat hewan adalah kisaran. Berat final akan disesuaikan saat hari penyembelihan.
          </div>
        </div>
      </section>

      {/* 5. MIDDLE SECTION (3 Columns) */}
      <section className="py-10 bg-surface border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Layanan Qurban Dombantara */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col">
              <h3 className="font-display text-lg font-bold text-text-primary mb-4">Layanan Qurban Dombantara</h3>
              <div className="space-y-4 mb-6 flex-1">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Headset size={16}/></div>
                  <div>
                    <h4 className="font-bold text-[11px] mb-1">Konsultasi Gratis</h4>
                    <p className="text-[9px] text-text-muted">Tim kami siap membantu Anda memilih hewan qurban terbaik.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin size={16}/></div>
                  <div>
                    <h4 className="font-bold text-[11px] mb-1">Penyaluran Tepat Sasaran</h4>
                    <p className="text-[9px] text-text-muted">Daging qurban disalurkan ke daerah yang membutuhkan.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><FileText size={16}/></div>
                  <div>
                    <h4 className="font-bold text-[11px] mb-1">Laporan Lengkap</h4>
                    <p className="text-[9px] text-text-muted">Dapatkan laporan, foto & video sebagai bukti amanah kami.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-24">
                <img src="https://images.unsplash.com/photo-1593113565694-c700e5f29d2f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Kenapa Berqurban */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col justify-center relative">
              <h3 className="font-display text-lg font-bold text-text-primary mb-4">Kenapa Berqurban di Dombantara?</h3>
              <div className="space-y-3 relative z-10">
                {[
                  "Peternakan sendiri, kualitas terjamin",
                  "Proses sesuai syariat dan higienis",
                  "Harga transparan, tidak ada biaya tersembunyi",
                  "Dokumentasi lengkap dan terpercaya",
                  "Pengalaman lebih dari 5 tahun"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-[10px] font-medium text-text-secondary">
                    <CheckCircle2 size={14} className="text-status-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-surface rounded-2xl flex flex-col items-center justify-center border border-border-subtle shadow-sm rotate-3 opacity-90 z-0">
                <ShieldCheck size={28} className="text-[#0f2e1a] mb-1" />
                <div className="font-bold text-[10px] text-[#0f2e1a] tracking-widest">AMANAH</div>
                <div className="text-[5px] font-bold text-text-muted mt-1 uppercase text-center leading-tight">Profesional<br/>Transparan</div>
              </div>
            </div>

            {/* Testimoni */}
            <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm flex flex-col justify-center">
              <h3 className="font-display text-lg font-bold text-text-primary mb-4">Testimoni Pekurban</h3>
              <div className="text-xs italic text-text-secondary mb-6 leading-relaxed">
                "Alhamdulillah qurban melalui Dombantara sangat amanah. Hewannya sehat, prosesnya jelas, dan dokumentasinya lengkap. InsyaAllah tahun depan qurban lagi di sini."
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" /></div>
                <div>
                  <div className="font-bold text-[11px]">Andi Pratama</div>
                  <div className="text-[9px] text-text-muted mb-1">Pekurban 2023</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-status-warning text-status-warning" />)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <div className="bg-[#0f2e1a] rounded-[2rem] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="lg:w-1/3 relative z-10 text-center lg:text-left flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 hidden md:flex text-white"><SearchCheck size={24}/></div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Siap Berqurban Tahun Ini?</h2>
                  <p className="text-white/80 text-[11px] leading-relaxed">
                    Qurban Anda, Kebahagiaan Mereka.<br/>Mari berbagi keberkahan bersama Dombantara.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-2/3 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 w-full">
                <div className="flex gap-6 justify-center w-full md:w-auto">
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <ShieldCheck size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-[11px]">Amanah</div>
                      <div className="text-[9px] text-white/70">Terpercaya & transparan</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <Users size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-[11px]">Profesional</div>
                      <div className="text-[9px] text-white/70">Dikelola oleh tim ahli</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center text-white gap-2">
                    <MapPin size={20} className="text-status-success" />
                    <div>
                      <div className="font-bold text-[11px]">Tepat Sasaran</div>
                      <div className="text-[9px] text-white/70">Untuk yang berhak</div>
                    </div>
                  </div>
                </div>
                
                <Link href="#paket" className="px-6 py-3 bg-white text-[#0f2e1a] rounded-xl font-bold text-xs hover:bg-surface transition-all shadow-lg flex items-center gap-2 shrink-0">
                  Pesan Qurban Sekarang <ArrowRight size={14} />
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
