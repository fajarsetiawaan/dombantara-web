const fs = require('fs');

const content = `"use client";

import Link from "next/link";
import { 
  ChevronRight, 
  Store, 
  ChefHat, 
  Milk,
  CheckCircle2,
  ShoppingCart,
  ChevronLeft,
  ShieldCheck,
  Snowflake,
  PackageCheck,
  Truck,
  HeartHandshake,
  ArrowRight,
  Phone
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function FreshPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 min-h-[500px] flex items-center bg-white overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 w-2/3"></div>
          <img 
            src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80" 
            alt="Raw Lamb Meat" 
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-text-primary">Beranda</Link>
            <ChevronRight size={12} />
            <Link href="/ekosistem" className="hover:text-text-primary">Ekosistem</Link>
            <ChevronRight size={12} />
            <span className="text-text-primary">Dombantara Fresh</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-primary border border-green-100 font-bold text-[10px] uppercase tracking-wider mb-6">
                <Store size={14} /> DOMBANTARA FRESH
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary mb-6 leading-tight">
                Produk Segar & Olahan Berkualitas Premium
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-lg">
                Dari peternakan modern kami langsung ke meja Anda. Daging segar, olahan, dan susu domba berkualitas tinggi untuk gaya hidup sehat dan halal.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <CheckCircle2 size={16} className="text-primary" /> Segar Setiap Hari
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <ShieldCheck size={16} className="text-primary" /> Halal & Higienis
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <CheckCircle2 size={16} className="text-primary" /> Tanpa Pengawet
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                  <Snowflake size={16} className="text-primary" /> Rantai Dingin Terjaga
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Features Bar */}
      <div className="relative -mt-16 z-30 mb-24 container mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-border-strong">
            <div className="flex items-center gap-4 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F7F4] flex items-center justify-center text-primary shrink-0">
                <Store size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary">100%</h4>
                <p className="text-xs text-text-muted">Daging Domba Berkualitas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F7F4] flex items-center justify-center text-primary shrink-0">
                <Snowflake size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary">Cold Chain</h4>
                <p className="text-xs text-text-muted">Terjaga Hingga Sampai ke Anda</p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F7F4] flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary">Halal</h4>
                <p className="text-xs text-text-muted">Bersertifikat MUI</p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F7F4] flex items-center justify-center text-primary shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary">Pengiriman Cepat</h4>
                <p className="text-xs text-text-muted">ke Seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kategori Produk */}
      <section className="mb-24 container mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-[10px] uppercase tracking-wider mb-2">KATEGORI PRODUK KAMI</p>
          <h2 className="font-display text-3xl font-bold text-text-primary">Pilihan Produk Fresh untuk Keluarga Sehat</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-border-subtle flex flex-col group hover:shadow-lg transition-all">
            <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
              <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=600" alt="Daging Segar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-black/40 backdrop-blur flex items-center justify-center text-white">
                <Store size={20} />
              </div>
            </div>
            <h3 className="font-bold text-lg text-text-primary mb-2">Daging Segar</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">Potongan daging domba segar pilihan dengan kualitas premium.</p>
            <Link href="/market" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all border border-border-strong rounded-full px-4 py-2 self-start hover:bg-surface">
              Lihat Produk <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-border-subtle flex flex-col group hover:shadow-lg transition-all">
            <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
              <img src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600" alt="Produk Olahan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-black/40 backdrop-blur flex items-center justify-center text-white">
                <ChefHat size={20} />
              </div>
            </div>
            <h3 className="font-bold text-lg text-text-primary mb-2">Produk Olahan</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">Berbagai produk olahan praktis, lezat, dan siap saji.</p>
            <Link href="/market" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all border border-border-strong rounded-full px-4 py-2 self-start hover:bg-surface">
              Lihat Produk <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-border-subtle flex flex-col group hover:shadow-lg transition-all">
            <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
              <img src="https://images.unsplash.com/photo-1550583724599-e61e05307b22?auto=format&fit=crop&q=80&w=600" alt="Susu & Olahan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-black/40 backdrop-blur flex items-center justify-center text-white">
                <Milk size={20} />
              </div>
            </div>
            <h3 className="font-bold text-lg text-text-primary mb-2">Susu & Olahan</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">Susu domba murni dan olahan bergizi untuk kesehatan keluarga.</p>
            <Link href="/market" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all border border-border-strong rounded-full px-4 py-2 self-start hover:bg-surface">
              Lihat Produk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Produk Terlaris */}
      <section className="mb-24 container mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary font-bold text-[10px] uppercase tracking-wider mb-2">PRODUK TERLARIS</p>
            <h2 className="font-display text-2xl font-bold text-text-primary">Favorit Keluarga Indonesia</h2>
          </div>
          <Link href="/market" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
            Lihat Semua Produk <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {[
              { title: "Domba Karkas Segar", weight: "1 Kg", price: "Rp 165.000", img: "1603048297172-c92544798d5e" },
              { title: "Iga Domba Premium", weight: "1 Kg", price: "Rp 225.000", img: "1555939594-58d7cb561ad1" },
              { title: "Domba Slice", weight: "500 Gr", price: "Rp 95.000", img: "1603048297172-c92544798d5e" },
              { title: "Bakso Domba", weight: "500 Gr", price: "Rp 75.000", img: "1529193591184-b1d58069ecdd" },
              { title: "Sosis Domba", weight: "500 Gr", price: "Rp 75.000", img: "1529193591184-b1d58069ecdd" },
              { title: "Susu Domba Murni", weight: "1 Liter", price: "Rp 55.000", img: "1550583724599-e61e05307b22" },
            ].map((prod, i) => (
              <div key={i} className="min-w-[240px] w-[240px] bg-white rounded-2xl border border-border-subtle p-3 flex flex-col group hover:shadow-lg transition-all snap-start">
                <div className="h-40 rounded-xl overflow-hidden mb-4 relative bg-surface">
                  <img src={\`https://images.unsplash.com/photo-\${prod.img}?auto=format&fit=crop&q=80&w=400\`} alt={prod.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-sm text-text-primary leading-tight mb-1">{prod.title}</h3>
                <p className="text-xs text-text-muted mb-4">{prod.weight}</p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="font-bold text-primary">{prod.price}</p>
                  <button className="w-8 h-8 rounded-full border border-border-strong flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
                    <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary z-10 hidden lg:flex">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary z-10 hidden lg:flex">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Kualitas Terjamin */}
      <section className="bg-white py-24 mb-24 border-y border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <p className="text-primary font-bold text-[10px] uppercase tracking-wider mb-2">KUALITAS YANG TERJAMIN</p>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-12">Kami Menjaga Kualitas di Setiap Tahap</h2>
              
              <div className="flex justify-between relative">
                <div className="absolute top-6 left-0 right-0 h-[2px] bg-border-strong -z-10"></div>
                
                {[
                  { icon: Store, title: "Peternakan Modern", desc: "Domba sehat dipelihara di kandang modern dengan pakan berkualitas." },
                  { icon: ShieldCheck, title: "Higienis & Halal", desc: "Proses sesuai standar halal dan higienis di setiap tahap produksi." },
                  { icon: Snowflake, title: "Rantai Dingin", desc: "Teknologi cold chain menjaga kesegaran dari peternakan hingga rumah Anda." },
                  { icon: PackageCheck, title: "Kontrol Kualitas", desc: "Pemeriksaan ketat untuk memastikan kualitas terbaik sebelum dikirim." },
                  { icon: Store, title: "Sampai ke Meja Anda", desc: "Produk segar dan aman sampai ke meja untuk keluarga tercinta." },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center max-w-[120px] bg-white group">
                    <div className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <step.icon size={20} />
                    </div>
                    <h4 className="font-bold text-[11px] text-text-primary mb-2 leading-tight">{step.title}</h4>
                    <p className="text-[9px] text-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-[400px] shrink-0">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1542282811-943ef1a6470b?auto=format&fit=crop&q=80&w=800" alt="Family Dining" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA & Trust Indicators */}
      <section className="container mx-auto px-6 lg:px-10 mb-20">
        <div className="bg-[#0E2A1D] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 p-10 lg:p-14 relative z-10">
            <h2 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
              Nikmati Produk Berkualitas Langsung dari Peternakan Terpercaya
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-md">
              Belanja mudah, aman, dan cepat melalui toko online Dombantara Fresh. Kami antar kesegaran hingga ke rumah Anda.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/market" className="inline-flex items-center gap-2 bg-white text-[#0E2A1D] px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Belanja Sekarang <ArrowRight size={16} />
              </Link>
              <Link href="/kontak" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                Atau Hubungi Kami via WhatsApp <Phone size={16} />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A1D] via-transparent to-transparent z-10 lg:hidden"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0E2A1D] to-transparent z-10 hidden lg:block"></div>
            
            <div className="h-full flex items-center justify-center p-10 lg:pr-20 lg:pl-10 relative z-20">
              <div className="grid grid-cols-2 gap-8 text-white w-full max-w-md">
                <div className="flex flex-col gap-3">
                  <Truck size={24} className="text-green-400" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Pengiriman Cepat</h4>
                    <p className="text-[10px] text-white/60 leading-relaxed">Seluruh Indonesia</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <ShieldCheck size={24} className="text-green-400" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Dikemas Higienis</h4>
                    <p className="text-[10px] text-white/60 leading-relaxed">dan Aman</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <CheckCircle2 size={24} className="text-green-400" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Garansi Kesegaran</h4>
                    <p className="text-[10px] text-white/60 leading-relaxed">100%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <HeartHandshake size={24} className="text-green-400" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Layanan Pelanggan</h4>
                    <p className="text-[10px] text-white/60 leading-relaxed">Responsif</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements for right side */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
              <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80" alt="Texture" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Trust Indicators footer extension */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-text-primary mb-1">Halal & Terpercaya</h4>
              <p className="text-[10px] text-text-muted leading-relaxed">Bersertifikat MUI dan proses sesuai syariat Islam.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0">
              <Store size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-text-primary mb-1">Peternakan Sendiri</h4>
              <p className="text-[10px] text-text-muted leading-relaxed">Dari peternakan kami sendiri untuk kualitas terbaik.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0">
              <PackageCheck size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-text-primary mb-1">Teknologi Modern</h4>
              <p className="text-[10px] text-text-muted leading-relaxed">Didukung teknologi cold chain dan sistem terintegrasi.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface border border-border-subtle flex items-center justify-center text-primary shrink-0">
              <HeartHandshake size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-text-primary mb-1">Melayani Indonesia</h4>
              <p className="text-[10px] text-text-muted leading-relaxed">Siap melayani kebutuhan Anda di seluruh Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
`

fs.writeFileSync('app/ekosistem/fresh/page.tsx', content);
