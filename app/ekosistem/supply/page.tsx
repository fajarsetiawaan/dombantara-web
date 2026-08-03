"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Snowflake,
  Truck,
  MapPin,
  Users,
  Clock,
  ThumbsUp,
  Building2,
  Box,
  ClipboardList,
  BadgeCheck,
  Headset,
  Tag,
  Package,
  HeartHandshake,
  Timer,
  UtensilsCrossed,
  ShoppingCart,
  Landmark,
  Briefcase,
  MessageSquare
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function SupplyPage() {
  const primaryColor = "#E06B0F"; // Orange theme for Supply

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
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
              alt="Dombantara Supply Truck" 
              className="w-full h-full object-cover text-transparent"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 block lg:hidden opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
            alt="Dombantara Supply Truck" 
            className="w-full h-full object-cover text-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface"></div>
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
                <span style={{ color: primaryColor }}>Dombantara Supply</span>
              </div>

              <p className="font-bold tracking-widest text-xs uppercase mb-4" style={{ color: primaryColor }}>DOMBANTARA SUPPLY</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] mb-6">
                Supply Chain Terpercaya<br/>
                untuk Kebutuhan <span style={{ color: primaryColor }}>Peternakan</span>
              </h1>
              <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                Kami menyediakan sistem supply chain terintegrasi untuk memastikan ketersediaan hewan, produk, dan kebutuhan peternakan sampai ke tangan Anda dengan cepat, aman, dan tepat waktu.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-border-strong shadow-sm text-[#E06B0F]">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Terpercaya<br/>& Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-border-strong shadow-sm text-[#E06B0F]">
                    <Truck size={16} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Distribusi Cepat<br/>Seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-border-strong shadow-sm text-[#E06B0F]">
                    <Snowflake size={16} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Cold Chain<br/>Berkualitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-border-strong shadow-sm text-[#E06B0F]">
                    <ClipboardList size={16} />
                  </div>
                  <span className="text-xs font-bold text-text-primary leading-tight">Sesuai Standar<br/>& Regulasi</span>
                </div>
              </div>
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#E06B0F] bg-[#E06B0F]/10">
                      <Box size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">1.000+</h4>
                      <p className="text-[10px] text-text-muted">Pengiriman per Bulan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#E06B0F] bg-[#E06B0F]/10">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">34</h4>
                      <p className="text-[10px] text-text-muted">Provinsi Terjangkau</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#E06B0F] bg-[#E06B0F]/10">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">500+</h4>
                      <p className="text-[10px] text-text-muted">Klien & Mitra</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#E06B0F] bg-[#E06B0F]/10">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">98.7%</h4>
                      <p className="text-[10px] text-text-muted">Pengiriman Tepat Waktu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:px-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#E06B0F] bg-[#E06B0F]/10">
                      <ThumbsUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">100%</h4>
                      <p className="text-[10px] text-text-muted">Kepuasan Pelanggan</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. LAYANAN SUPPLY KAMI (5 CARDS) */}
      <section className="pt-32 pb-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 text-[#E06B0F]">
              <div className="h-px w-8 bg-[#E06B0F]/30"></div>
              <Truck size={16} />
              <div className="h-px w-8 bg-[#E06B0F]/30"></div>
            </div>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">
              Layanan Supply Kami
            </h2>
            <p className="text-sm text-text-secondary">Solusi lengkap untuk kebutuhan peternakan dan bisnis Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Livestock Supply", icon: Box, img: "1484557985045-edf25e08da73", url: "/market",
                desc: "Penyediaan hewan berkualitas untuk berbagai kebutuhan Anda.",
                features: ["Domba & Kambing Qurban", "Hewan Aqiqah", "Bibit Breeding", "Penggemukan"]
              },
              {
                title: "Corporate Supply", icon: Building2, img: "1556761175-5973dc0f32e7", url: "/market",
                desc: "Solusi pengadaan hewan dan produk untuk kebutuhan korporasi.",
                features: ["Hotel & Restoran", "Catering & Event", "Retail & Supermarket", "Instansi & Pemerintah"]
              },
              {
                title: "Distribusi Nasional", icon: Truck, img: "1519003722824-194d4455a60c", url: "/market",
                desc: "Jangkauan luas ke seluruh Indonesia dengan sistem distribusi handal.",
                features: ["Jangkauan 34 Provinsi", "Armada Terstandar", "Rute Teroptimal", "Pelacakan Real-time"]
              },
              {
                title: "Cold Chain", icon: Snowflake, img: "1603048297172-c92544798d5e", url: "/market",
                desc: "Menjaga kualitas produk dengan rantai dingin terkontrol.",
                features: ["Refrigerated Truck", "Cold Storage", "Suhu Terjaga 0-4°C", "Quality Control"]
              },
              {
                title: "Procurement Solution", icon: ClipboardList, img: "1460925895917-afdab827c52f", url: "/market",
                desc: "Layanan pengadaan terintegrasi sesuai kebutuhan bisnis Anda.",
                features: ["Perencanaan Kebutuhan", "Pengadaan Terencana", "Manajemen Supplier", "Laporan & Analitik"]
              }
            ].map((card, idx) => (
              <Reveal index={idx % 5} key={idx} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl hover:border-[#E06B0F]/30 transition-all">
                  <div className="h-32 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=400`} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#E06B0F] shadow-sm">
                      <card.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg mb-2 text-[#E06B0F]">{card.title}</h3>
                    <p className="text-text-muted text-[11px] leading-relaxed mb-5">
                      {card.desc}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {card.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-text-primary">
                          <CheckCircle2 size={14} className="text-[#E06B0F] shrink-0 mt-0.5" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={card.url} className="inline-flex items-center gap-1.5 text-[#E06B0F] font-bold text-[11px] hover:gap-2.5 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEUNGGULAN DOMBANTARA SUPPLY */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Keunggulan Dombantara Supply
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: BadgeCheck, title: "Kualitas Terjamin", desc: "Hewan dan produk melalui seleksi ketat sesuai standar Dombantara." },
              { icon: ShieldCheck, title: "Keamanan & Higienis", desc: "Proses penanganan sesuai standar higienis dan kesejahteraan hewan." },
              { icon: Truck, title: "Tepat Waktu", desc: "Sistem manajemen distribusi memastikan pengiriman tepat waktu." },
              { icon: Tag, title: "Harga Kompetitif", desc: "Harga terbaik dengan kualitas premium dan layanan profesional." },
              { icon: Headset, title: "Dukungan Profesional", desc: "Tim berpengalaman siap membantu kebutuhan bisnis Anda." },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#E06B0F] bg-white border border-border-strong shadow-sm">
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

      {/* 4. ALUR SUPPLY CHAIN TERINTEGRASI (PROCESS TIMELINE) */}
      <section className="py-24 bg-surface border-t border-border-subtle overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Alur Supply Chain Terintegrasi
            </h2>
          </div>

          <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex items-center justify-center min-w-max px-4 mx-auto">
              {[
                { num: 1, title: "Seleksi & Sourcing", desc: "Pemilihan hewan berkualitas dari peternakan terbaik Dombantara.", img: "1484557985045-edf25e08da73" },
                { num: 2, title: "Check & Kesehatan", desc: "Pemeriksaan kesehatan dan karantina sesuai standar ketat.", img: "1543877087-ebf71fde2be1" },
                { num: 3, title: "Proses & Packing", desc: "Proses sesuai prosedur higienis dan pengemasan standar.", img: "1603048297172-c92544798d5e" },
                { num: 4, title: "Transportasi", desc: "Pengiriman dengan armada terstandar dan sistem cold chain.", img: "1519003722824-194d4455a60c" },
                { num: 5, title: "Distribusi", desc: "Distribusi ke tujuan dengan rute optimal dan monitoring real-time.", img: "1556761175-5973dc0f32e7" },
                { num: 6, title: "Penerimaan", desc: "Penerimaan produk dengan kondisi prima dan sesuai pesanan.", img: "1524178232363-1dc2bf40e365" },
                { num: 7, title: "After Sales Support", desc: "Dukungan purna jual dan layanan pelanggan berkelanjutan.", img: "1550583724-b2692b85b150" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center">
                  {/* Circle Step */}
                  <div className="flex flex-col items-center w-36 text-center relative group">
                    <div className="relative w-24 h-24 rounded-full bg-white p-1 shadow-md mb-4 group-hover:scale-105 transition-transform">
                      <img 
                        src={`https://images.unsplash.com/photo-${step.img}?auto=format&fit=crop&q=80&w=200&h=200`} 
                        alt={step.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                      {/* Number Badge */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#E06B0F] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                        {step.num}
                      </div>
                    </div>
                    <h4 className="font-bold text-text-primary text-[11px] mb-1.5 leading-tight px-1">{step.title}</h4>
                    <p className="text-[9px] text-text-muted leading-relaxed px-2">{step.desc}</p>
                  </div>

                  {/* Arrow connecting steps */}
                  {idx < 6 && (
                    <div className="w-10 flex items-center justify-center -mt-16 text-[#E06B0F]/30">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MITRA & KONSULTASI (SPLIT SECTION) */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Mitra */}
            <div className="lg:w-3/5">
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3">Dipercaya oleh Berbagai Mitra</h3>
              <p className="text-text-muted text-sm mb-10">Bersinergi dengan berbagai perusahaan dan instansi across Indonesia.</p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><Building2 size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Hotel & Resort</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><UtensilsCrossed size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Restoran & Catering</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><ShoppingCart size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Supermarket & Retail</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><Landmark size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Instansi Pemerintah</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><Briefcase size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Perusahaan Swasta</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="text-primary/60"><Users size={24} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-medium text-text-secondary">Organisasi & Komunitas</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 bg-surface p-6 rounded-2xl border border-border-subtle">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E06B0F]/20 text-[#E06B0F] flex items-center justify-center mb-3">
                    <HeartHandshake size={20} />
                  </div>
                  <h4 className="font-bold text-xs text-text-primary mb-1">Mitra Terpercaya</h4>
                  <p className="text-[10px] text-text-muted leading-relaxed">500+ mitra bisnis yang telah mempercayai layanan kami</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E06B0F]/20 text-[#E06B0F] flex items-center justify-center mb-3">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-xs text-text-primary mb-1">Standar Internasional</h4>
                  <p className="text-[10px] text-text-muted leading-relaxed">Proses dan layanan sesuai standar internasional</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E06B0F]/20 text-[#E06B0F] flex items-center justify-center mb-3">
                    <Building2 size={20} />
                  </div>
                  <h4 className="font-bold text-xs text-text-primary mb-1">Kemitraan Berkelanjutan</h4>
                  <p className="text-[10px] text-text-muted leading-relaxed">Komitmen untuk memberikan layanan terbaik berkelanjutan</p>
                </div>
              </div>
            </div>

            {/* Right Side: Consultation Form/Box */}
            <div className="lg:w-2/5">
              <div className="bg-[#1a2e22] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">Butuh Solusi Supply untuk Bisnis Anda?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-10">
                  Tim kami siap membantu menyediakan solusi supply chain yang tepat untuk kebutuhan peternakan Anda.
                </p>
                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-white text-primary rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm">
                    <MessageSquare size={18} className="text-[#E06B0F]" /> Konsultasi via WhatsApp
                  </button>
                  <button className="w-full px-6 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-sm">
                    Hubungi Tim Supply
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1a2e22] text-white shadow-2xl p-10">
            <div className="absolute inset-0 z-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
                alt="Truck Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1a2e22]/90"></div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:items-center justify-between">
              
              <div className="lg:w-1/2">
                <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Mari Bangun Rantai Pasok Peternakan yang Lebih Baik Bersama Dombantara
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Solusi supply chain terintegrasi untuk masa depan peternakan Indonesia.
                </p>
              </div>

              <div className="lg:w-1/4 flex flex-col gap-5 text-white/90">
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-[#E06B0F]" />
                  <div>
                    <h5 className="font-bold text-[10px]">Solusi Terintegrasi</h5>
                    <p className="text-[9px] text-white/50">Hulu ke Hilir</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#E06B0F]" />
                  <div>
                    <h5 className="font-bold text-[10px]">Jangkauan</h5>
                    <p className="text-[9px] text-white/50">Seluruh Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headset size={20} className="text-[#E06B0F]" />
                  <div>
                    <h5 className="font-bold text-[10px]">Layanan Profesional</h5>
                    <p className="text-[9px] text-white/50">24/7</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/4 shrink-0 flex justify-end">
                <button className="w-full lg:w-auto px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-sm">
                  <MessageSquare size={18} className="text-[#E06B0F]" /> Hubungi Kami Sekarang
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
