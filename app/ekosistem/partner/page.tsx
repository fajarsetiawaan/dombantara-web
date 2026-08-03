"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  MapPin,
  Tractor,
  Store,
  Truck,
  Landmark,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Calendar,
  FileText,
  Rocket,
  CheckSquare,
  Target
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function PartnerPage() {
  const primaryColor = "#166534"; // Corporate Green

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 bg-surface pb-32">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-1/2 bg-surface"></div>
          <div className="hidden lg:block lg:w-1/2 relative bg-[#064E3B]">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000" 
              alt="Partnership Handshake" 
              className="w-full h-full object-cover opacity-80 text-transparent"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent"></div>
            
            {/* Overlay banner at the right edge */}
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-[#064E3B]/90 backdrop-blur-sm border-l border-white/10 hidden xl:flex flex-col items-center justify-center p-6 text-center">
               <div className="w-12 h-12 rounded flex items-center justify-center font-bold font-display text-white border border-white/30 mb-6">
                 D
               </div>
               <p className="text-white font-display font-bold text-lg leading-tight [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase">
                 Bersama Membangun Masa Depan Peternakan Indonesia
               </p>
            </div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 block lg:hidden opacity-10 bg-[#064E3B]">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
            alt="Partnership Handshake" 
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
                <span style={{ color: primaryColor }}>Dombantara Partner</span>
              </div>

              <p className="font-bold tracking-widest text-xs uppercase mb-4" style={{ color: primaryColor }}>DOMBANTARA PARTNER</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] mb-6">
                Bersama Membangun Ekosistem Peternakan yang <span style={{ color: primaryColor }}>Lebih Kuat</span>
              </h1>
              <p className="text-text-secondary md:text-lg leading-relaxed mb-10 max-w-xl">
                Dombantara Partner adalah jaringan kemitraan strategis yang menghubungkan peternak, pelaku usaha, investor, dan institusi untuk menciptakan nilai bersama dan dampak berkelanjutan.
              </p>
              
              {/* Feature Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#166534]/20 shadow-sm text-[#166534]">
                    <Users size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-text-primary leading-tight">Kemitraan<br/>Berkelanjutan</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#166534]/20 shadow-sm text-[#166534]">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-text-primary leading-tight">Transparan &<br/>Amanah</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#166534]/20 shadow-sm text-[#166534]">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-text-primary leading-tight">Pertumbuhan<br/>Bersama</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#166534]/20 shadow-sm text-[#166534]">
                    <HeartHandshake size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-text-primary leading-tight">Dampak Nyata untuk<br/>Peternakan Indonesia</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Stats Bar - Specifically overlapping the right image */}
        <div className="absolute -bottom-8 lg:bottom-12 right-0 left-0 lg:left-1/2 z-20 px-6">
          <Reveal index={1}>
            <div className="bg-[#064E3B] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 py-6 px-6 md:px-8 max-w-4xl mx-auto lg:mr-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-white/10">
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:px-4 text-center lg:text-left">
                  <Users size={28} className="text-white/80" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-xl text-white">1.200+</h4>
                    <p className="text-[10px] text-white/60">Mitra Aktif</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:px-4 text-center lg:text-left">
                  <HeartHandshake size={28} className="text-white/80" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-xl text-white">150+</h4>
                    <p className="text-[10px] text-white/60">Perusahaan & Institusi</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:px-4 text-center lg:text-left">
                  <MapPin size={28} className="text-white/80" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-xl text-white">34</h4>
                    <p className="text-[10px] text-white/60">Provinsi Terjangkau</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:px-4 text-center lg:text-left">
                  <TrendingUp size={28} className="text-white" strokeWidth={2} />
                  <div>
                    <h4 className="font-bold text-xs text-white leading-tight">Tumbuh Bersama<br/>Berdampak Nyata</h4>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. JENIS KEMITRAAN (5 CARDS) */}
      <section className="pt-32 pb-24 bg-white border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-3">
              Jenis Kemitraan
            </h2>
            <p className="text-sm text-text-secondary">Pilih bentuk kemitraan yang sesuai dengan tujuan dan potensi Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Mitra Peternak", icon: Tractor, img: "1595859703065-2144365b21ea", url: "/market",
                desc: "Bergabung sebagai peternak binaan dan tingkatkan produktivitas bersama Dombantara.",
                features: ["Pendampingan & Pelatihan", "Akses Pakan & Sarana", "Jaminan Pasar", "Insentif & Program Loyalitas"]
              },
              {
                title: "Mitra Reseller & Distributor", icon: Store, img: "1542838132-92c53300491e", url: "/market",
                desc: "Jual produk Dombantara dengan dukungan pasokan, harga kompetitif, dan promosi bersama.",
                features: ["Produk Berkualitas", "Harga Kompetitif", "Materi Promosi", "Dukungan Penjualan"]
              },
              {
                title: "Mitra Korporasi", icon: Truck, img: "1519003722824-194d4455a60c", url: "/market",
                desc: "Solusi penyediaan ternak, daging, dan layanan peternakan untuk kebutuhan bisnis Anda.",
                features: ["Supply Terjamin", "Kualitas Premium", "SLA & Layanan Khusus", "Fleksibel & Skalable"]
              },
              {
                title: "Mitra Institusi & Pemerintah", icon: Landmark, img: "1556761175-5973dc0f32e7", url: "/market",
                desc: "Kolaborasi program untuk ketahanan pangan, pemberdayaan peternak, dan pembangunan daerah.",
                features: ["Program Berkelanjutan", "Dampak Sosial Nyata", "Monitoring & Evaluasi", "Laporan Transparan"]
              },
              {
                title: "Mitra Investor", icon: Briefcase, img: "1579226905173-22582c5ea4b5", url: "/market",
                desc: "Investasi berdampak di sektor peternakan dengan model bisnis yang sehat dan bertumbuh.",
                features: ["Prospek Menjanjikan", "Model Bisnis Teruji", "Tata Kelola Baik", "Dampak Berkelanjutan"]
              }
            ].map((card, idx) => (
              <Reveal index={idx % 5} key={idx} className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col h-full group hover:shadow-xl hover:border-[#166534]/30 transition-all">
                  <div className="h-32 relative overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=600`} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Main Icon */}
                    <div className="absolute -bottom-6 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#166534] shadow-md border border-border-subtle z-10 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                      <card.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg mb-2 text-[#166534]">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6">
                      {card.desc}
                    </p>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {card.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-text-primary font-medium">
                          <CheckCircle2 size={14} className="text-[#166534] shrink-0 mt-0.5" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href={card.url} className="inline-flex items-center gap-2 text-[#166534] font-bold text-xs hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEUNTUNGAN MENJADI MITRA */}
      <section className="py-20 bg-[#166534]/5 border-y border-[#166534]/10">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Keuntungan Menjadi Mitra Dombantara
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-x-12 gap-y-10">
            {[
              { icon: Tractor, title: "Ekosistem Terintegrasi", desc: "Akses ke rantai pasok terintegrasi dari hulu ke hilir." },
              { icon: GraduationCap, title: "Pendampingan & Edukasi", desc: "Dukungan pengetahuan, pelatihan, dan konsultasi berkelanjutan." },
              { icon: ShieldCheck, title: "Pasar Terjamin", desc: "Jaminan pasar dan permintaan berkelanjutan seluruh Indonesia." },
              { icon: TrendingUp, title: "Tumbuh Bersama", desc: "Program kemitraan yang adil, transparan, dan saling menguntungkan." },
              { icon: HeartHandshake, title: "Dampak Nyata", desc: "Bersama menciptakan dampak positif untuk negeri." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 max-w-[280px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-[#166534] border-2 border-[#166534]/20 shrink-0">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary leading-tight mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALUR KEMITRAAN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Alur Kemitraan
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative gap-y-12">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-border-subtle -z-10"></div>
            
            {[
              { num: 1, icon: HeartHandshake, title: "Hubungi Kami", desc: "Sampaikan minat dan tujuan kemitraan Anda." },
              { num: 2, icon: FileText, title: "Konsultasi & Seleksi", desc: "Tim kami akan melakukan konsultasi dan seleksi kemitraan." },
              { num: 3, icon: CheckSquare, title: "Kesepakatan", desc: "Penandatanganan perjanjian kemitraan yang saling menguntungkan." },
              { num: 4, icon: Users, title: "Onboarding", desc: "Orientasi, pelatihan, dan persiapan program kemitraan." },
              { num: 5, icon: Rocket, title: "Implementasi", desc: "Pelaksanaan program dan dukungan berkelanjutan." },
              { num: 6, icon: TrendingUp, title: "Monitoring & Evaluasi", desc: "Monitoring kinerja dan evaluasi untuk hasil yang optimal." },
              { num: 7, icon: Target, title: "Tumbuh Bersama", desc: "Pengembangan dan ekspansi kemitraan secara berkelanjutan." },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-full lg:w-32 relative">
                {/* Connecting Line (Mobile Only) */}
                {idx !== 6 && <div className="lg:hidden absolute top-14 bottom-[-3rem] left-1/2 w-px bg-border-subtle -z-10"></div>}
                
                <div className="w-12 h-12 rounded-full bg-white text-[#166534] border-2 border-[#166534] font-bold flex items-center justify-center mb-4 shadow-sm">
                  <step.icon size={20} />
                </div>
                <div className="text-[#166534] font-bold text-[10px] mb-1">{step.num}</div>
                <h4 className="font-bold text-xs text-text-primary mb-2">{step.title}</h4>
                <p className="text-[10px] text-text-muted leading-tight">{step.desc}</p>
                
                {/* Arrow (Desktop Only) */}
                {idx !== 6 && <div className="hidden lg:block absolute top-5 -right-4 text-border-strong">
                  <ArrowRight size={16} />
                </div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MITRA TERPERCAYA (LOGOGRID) */}
      <section className="py-20 bg-surface border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
              Mitra Terpercaya
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Menggunakan teks bernuansa logo sebagai placeholder karena ketiadaan aset gambar */}
            <div className="font-display font-bold text-2xl tracking-tighter text-[#1e3a8a] flex items-center gap-2">
               <Landmark size={28} /> BANK INDONESIA
            </div>
            <div className="font-display font-black text-3xl tracking-tight text-[#ea580c] flex items-center gap-2">
               <Store size={28} /> BULOG
            </div>
            <div className="font-display font-bold text-2xl tracking-widest text-[#0284c7] italic">
               ID FOOD
            </div>
            <div className="font-display font-bold text-2xl tracking-tighter text-[#dc2626] flex items-center">
               <span className="text-white bg-[#dc2626] px-2 py-1 rounded-sm mr-1">WINGS</span> FOOD
            </div>
            <div className="font-display font-bold text-xl tracking-widest text-text-primary">
               trans<span className="text-[#dc2626]">cosmos</span>
            </div>
            <div className="font-display font-black text-xl tracking-tight text-text-primary">
               CJ <span className="text-[#dc2626]">FEED&CARE</span>
            </div>
            <div className="font-display font-semibold text-2xl tracking-wide text-[#166534]">
               wilmar
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xs text-text-muted">dan banyak lagi...</p>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-[#064E3B] rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Background Image inside CTA */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-20 mix-blend-overlay">
              <img src="https://images.unsplash.com/photo-1595859703065-2144365b21ea?auto=format&fit=crop&q=80&w=800" alt="Farm" className="w-full h-full object-cover text-transparent" />
            </div>

            <div className="flex flex-col lg:flex-row items-center p-10 lg:p-16 relative z-10 gap-12 lg:gap-20">
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Siap Menjadi Bagian dari Ekosistem Dombantara?</h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Mari berkolaborasi dan tumbuh bersama untuk membangun masa depan peternakan Indonesia.
                </p>
              </div>
              
              <div className="lg:w-1/2 w-full flex flex-col sm:flex-row gap-6">
                {/* Box 1 */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary text-sm">Konsultasi Kemitraan</h4>
                      <p className="text-[10px] text-text-muted mt-0.5">Hubungi kami untuk konsultasi dan informasi lebih lanjut.</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-[#166534] text-white rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm">
                    Chat WhatsApp
                  </button>
                </div>

                {/* Box 2 */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-border-subtle text-text-secondary flex items-center justify-center shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary text-sm">Jadwalkan Meeting</h4>
                      <p className="text-[10px] text-text-muted mt-0.5">Jadwalkan pertemuan dengan tim kemitraan kami.</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 bg-white border border-border-strong text-text-primary rounded-xl font-bold hover:bg-surface hover:-translate-y-0.5 transition-all text-sm">
                    Jadwalkan Sekarang
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
