"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Snowflake,
  PackageCheck,
  ShoppingCart,
  MessageSquare,
  Award,
  Truck,
  HeartHandshake,
  Timer,
  Store,
  ChefHat,
  Milk,
  Tractor
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function FreshPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 bg-surface pb-32">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-1/2 bg-surface"></div>
          <div className="hidden lg:block lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=2000" 
              alt="Raw Lamb Meat" 
              className="w-full h-full object-cover text-transparent"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
        </div>

        {/* Mobile Background Image (Only visible on small screens) */}
        <div className="absolute inset-0 z-0 block lg:hidden opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=1000" 
            alt="Raw Lamb Meat" 
            className="w-full h-full object-cover text-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 pt-10">
          <div className="w-full lg:w-[55%]">
            <Reveal index={0}>
              <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">DOMBANTARA FRESH</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] mb-6">
                Produk Segar & Olahan Berkualitas Premium untuk <span className="text-primary">Keluarga Indonesia</span>
              </h1>
              <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                Daging domba dan produk olahan premium yang dihasilkan dari peternakan modern terintegrasi, diproses higienis, dan dikirim segar hingga ke meja Anda.
              </p>
              
              {/* Feature Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-white">
                    <Leaf size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">100% Segar<br/>& Higienis</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-white">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Tanpa Pengawet<br/>Berbahaya</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-white">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Halal &<br/>Terjamin</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-white">
                    <Snowflake size={20} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Cold Chain<br/>Terjaga</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Bar */}
        <div className="absolute -bottom-16 left-0 right-0 z-20">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal index={1}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white p-6 md:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-border-strong">
                  <div className="flex flex-col items-center text-center lg:px-4">
                    <PackageCheck size={24} className="text-primary/60 mb-3" />
                    <h4 className="font-bold text-sm text-text-primary">Produk Berkualitas Premium</h4>
                  </div>
                  <div className="flex flex-col items-center text-center lg:px-4">
                    <ShieldCheck size={24} className="text-primary/60 mb-3" />
                    <h4 className="font-bold text-sm text-text-primary">Proses Higienis & Modern</h4>
                  </div>
                  <div className="flex flex-col items-center text-center lg:px-4">
                    <Truck size={24} className="text-primary/60 mb-3" />
                    <h4 className="font-bold text-sm text-text-primary">Dikirim Segar Cepat & Tepat Waktu</h4>
                  </div>
                  <div className="flex flex-col items-center text-center lg:px-4">
                    <HeartHandshake size={24} className="text-primary/60 mb-3" />
                    <h4 className="font-bold text-sm text-text-primary">Kepuasan Pelanggan Terjamin</h4>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. PILIHAN PRODUK TERBAIK (3 CARDS) */}
      <section className="pt-32 pb-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 text-primary">
              <div className="h-px w-8 bg-primary/30"></div>
              <Leaf size={16} />
              <div className="h-px w-8 bg-primary/30"></div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
              Pilihan Produk Terbaik untuk Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal index={0} className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl transition-all">
                <div className="h-56 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=600" alt="Daging Segar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                    <Store size={20} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-2xl text-white mb-1">Daging Segar</h3>
                    <p className="text-white/80 text-xs tracking-wider uppercase">Dombantara Segar</p>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    Potongan daging domba segar berkualitas premium.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["Lamb Shoulder", "Lamb Rack", "Lamb Leg", "Lamb Shank", "Lamb Cube"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-text-primary font-medium">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/market" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                    Lihat Semua Produk <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal index={1} className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl transition-all">
                <div className="h-56 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600" alt="Olahan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                    <ChefHat size={20} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-2xl text-white mb-1">Olahan & Ready to Cook</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    Praktis, lezat, dan siap saji kapan saja.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["Sosis Domba", "Bakso Domba", "Kebab Domba", "Rendang Domba", "Sate Domba"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-text-primary font-medium">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/market" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                    Lihat Semua Produk <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal index={2} className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl transition-all">
                <div className="h-56 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600" alt="Dairy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                    <Milk size={20} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-2xl text-white mb-1">Dairy & Minuman</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    Susu domba murni dan olahan bergizi tinggi.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {["Susu Domba Segar", "Yogurt Domba", "Keju Domba", "Susu Pasteurisasi", "Susu Fermentasi"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-text-primary font-medium">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/market" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                    Lihat Semua Produk <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. KENAPA MEMILIH KAMI? */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Kenapa Memilih Dombantara Fresh?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Tractor, title: "Bersumber dari\nPeternakan Sendiri", desc: "Hewan dipelihara dengan standar tinggi dan penuh perhatian." },
              { icon: ShieldCheck, title: "Diproses Secara\nHigienis", desc: "Menggunakan fasilitas modern dan tenaga profesional." },
              { icon: Award, title: "Sertifikasi &\nHalal Terjamin", desc: "Terjamin kehalalan dan keamanan produknya." },
              { icon: Snowflake, title: "Tanpa Pengawet\nBerbahaya", desc: "Aman untuk dikonsumsi seluruh keluarga." },
              { icon: Truck, title: "Pengiriman Cepat\ndan Aman", desc: "Menggunakan cold chain untuk menjaga kesegaran." },
              { icon: HeartHandshake, title: "Layanan Pelanggan\nTerbaik", desc: "Kami siap membantu kebutuhan Anda." },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary border border-border-strong">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm text-text-primary whitespace-pre-line leading-snug">
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

      {/* 4. DARI PETERNAKAN KE MEJA ANDA (PROCESS TIMELINE) */}
      <section className="py-24 bg-surface border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Dari Peternakan ke Meja Anda
            </h2>
          </div>

          <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex items-center justify-center min-w-max px-4 mx-auto">
              {[
                { num: 1, title: "Peternakan Modern", desc: "Domba dipelihara dengan pakan berkualitas dan monitoring kesehatan terintegrasi.", img: "1484557985045-edf25e08da73" },
                { num: 2, title: "Pemotongan Higienis", desc: "Proses penyembelihan di RPH modern sesuai standar halal MUI.", img: "1543877087-ebf71fde2be1" },
                { num: 3, title: "Pemrosesan Premium", desc: "Daging dipotong, diproses, dan dikemas dengan standar kebersihan tinggi.", img: "1603048297172-c92544798d5e" },
                { num: 4, title: "Cold Chain Terjaga", desc: "Disimpan dan dikirim dengan sistem pendingin untuk menjaga kesegaran.", img: "1519003722824-194d4455a60c" },
                { num: 5, title: "Sampai di Meja Anda", desc: "Produk segar dan lezat siap dinikmati bersama keluarga tercinta.", img: "1544148103-0773bf10d330" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center">
                  {/* Circle Step */}
                  <div className="flex flex-col items-center w-48 text-center relative group">
                    <div className="relative w-32 h-32 rounded-full bg-white p-1 shadow-md mb-5 group-hover:scale-105 transition-transform">
                      <img 
                        src={`https://images.unsplash.com/photo-${step.img}?auto=format&fit=crop&q=80&w=250&h=250`} 
                        alt={step.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                      {/* Number Badge */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm">
                        {step.num}
                      </div>
                    </div>
                    <h4 className="font-bold text-text-primary text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed px-4">{step.desc}</p>
                  </div>

                  {/* Arrow connecting steps */}
                  {idx < 4 && (
                    <div className="w-16 flex items-center justify-center -mt-20 text-primary/30">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1a2e22] text-white shadow-2xl p-10 md:p-12">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
              
              <div className="lg:w-2/5">
                <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Nikmati Produk Segar dan Berkualitas dari Dombantara Fresh
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Pesan sekarang dan rasakan perbedaannya.
                </p>
              </div>

              <div className="lg:w-1/3 flex items-center justify-center gap-8 lg:gap-12">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary-light">
                    <Truck size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">GRATIS ONGKIR</h4>
                    <p className="text-[9px] text-white/60">Syarat & ketentuan berlaku</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary-light">
                    <Timer size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">PENGIRIMAN CEPAT</h4>
                    <p className="text-[9px] text-white/60">Ke seluruh Indonesia</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary-light">
                    <PackageCheck size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">KEMASAN AMAN</h4>
                    <p className="text-[9px] text-white/60">Tetap segar sampai tujuan</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm">
                  Belanja Sekarang <ShoppingCart size={18} />
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-sm">
                  <MessageSquare size={18} /> Order via WhatsApp
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
