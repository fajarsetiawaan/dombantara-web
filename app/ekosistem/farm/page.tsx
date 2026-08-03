"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  Tractor,
  CheckCircle2,
  Home,
  Users,
  ShieldCheck,
  ArrowRight,
  Leaf,
  Stethoscope,
  Activity,
  PackageCheck,
  MessageSquare,
  Building,
  GraduationCap
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/ui/Reveal";

export default function FarmPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getCardStyle = (category: string) => {
    if (!hoveredCategory) return 'border-border-subtle hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]';
    if (hoveredCategory === category) return 'border-primary shadow-[0_15px_40px_rgba(15,46,26,0.25)] scale-[1.03] z-20 relative ring-2 ring-primary/20';
    return 'opacity-40 grayscale blur-[1.5px] scale-[0.97] border-border-subtle pointer-events-none';
  };

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      {/* Top Breadcrumb Space (White Background) */}
      <div className="bg-white pt-24 pb-4 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <Link href="/market" className="hover:text-primary transition-colors">Ekosistem</Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">Dombantara Farm</span>
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
                alt="Dombantara Farm" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4"></div>

            {/* Content */}
            <div className="relative z-20 w-full md:w-3/5 p-8 md:p-12 lg:p-16">
              <Reveal index={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                  <Tractor size={14} /> DOMBANTARA FARM
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Peternakan Modern Terintegrasi, Dari Hulu untuk Kualitas Terbaik
                </h1>
                <p className="text-text-secondary md:text-lg leading-relaxed mb-8 max-w-xl">
                  Semua aktivitas peternakan dan layanan operasional kami kelola dengan standar tinggi, teknologi modern, dan sesuai syariat.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Sehat", 
                    "Sesuai Syariat", 
                    "Berkualitas Tinggi", 
                    "Terukur"
                  ].map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-border-subtle px-4 py-2 rounded-full text-sm font-bold text-text-primary shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                        <CheckCircle2 size={12} />
                      </div>
                      {tag}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-primary py-10 relative z-20 -mt-6">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="flex items-center gap-4 px-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Tractor size={24} className="text-white/80" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl lg:text-3xl">50.000+</div>
                <div className="text-white/70 text-sm">Domba Ternak</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Home size={24} className="text-white/80" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl lg:text-3xl">12+</div>
                <div className="text-white/70 text-sm">Lokasi Peternakan</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Users size={24} className="text-white/80" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl lg:text-3xl">10.000+</div>
                <div className="text-white/70 text-sm">Pelanggan Puas</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-white/80" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl lg:text-3xl">100%</div>
                <div className="text-white/70 text-sm">Sesuai Syariat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN KAMI */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 flex justify-center items-center gap-2">
              <span className="w-8 h-px bg-primary"></span> Layanan Kami <span className="w-8 h-px bg-primary"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-text-primary">
              Semua Kebutuhan Peternakan dalam Satu Ekosistem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_192px_1fr_1fr] gap-6 lg:gap-8">
            {/* ROW 1 */}
            {/* Card 1 & 2: Livestock */}
            {[
              { img: "1543877087-ebf71fde2be1", icon: Tractor, title: "Domba", desc: "Domba berkualitas unggul untuk berbagai kebutuhan.", url: "/ekosistem/farm/domba" },
              { img: "1511117833895-4b473c0b85d6", icon: Tractor, title: "Kambing", desc: "Kambing sehat dan terawat dengan standar terbaik.", url: "/ekosistem/farm/kambing" },
            ].map((card, idx) => (
              <Reveal index={idx} key={`livestock-${idx}`}>
                <Link href={card.url} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col h-full ${getCardStyle('livestock')}`}
                >
                  <div className="relative h-40 lg:h-36 overflow-hidden p-2 pb-0">
                    <img 
                      src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=500`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg">
                      <card.icon size={16} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-4 flex-1">{card.desc}</p>
                    <div className="text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
                </Link>
              </Reveal>
            ))}

            {/* THE PIZZA DIAGRAM (Center Column, Spanning 2 Rows) */}
            <div className="hidden lg:flex row-span-2 items-center justify-center">
              <div className="relative w-48 h-48 bg-surface rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)] border-8 border-surface z-20 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 rounded-full overflow-hidden">
                  {/* Top Left: Livestock */}
                  <div 
                    className="bg-[#0f2e1a] text-white flex flex-col items-center justify-center p-2 border-r-[3px] border-b-[3px] border-surface hover:bg-primary transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredCategory('livestock')}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest -rotate-45 mt-4 ml-4">Livestock</span>
                  </div>
                  {/* Top Right: Produksi */}
                  <div 
                    className="bg-[#1b4d3e] text-white flex flex-col items-center justify-center p-2 border-b-[3px] border-surface hover:bg-primary transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredCategory('produksi')}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest rotate-45 mt-4 mr-4">Produksi</span>
                  </div>
                  {/* Bottom Left: Ibadah */}
                  <div 
                    className="bg-[#2d6a4f] text-white flex flex-col items-center justify-center p-2 border-r-[3px] border-surface hover:bg-primary transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredCategory('ibadah')}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest rotate-45 mb-4 ml-4">Ibadah</span>
                  </div>
                  {/* Bottom Right: Service */}
                  <div 
                    className="bg-[#40916c] text-white flex flex-col items-center justify-center p-2 hover:bg-primary transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredCategory('service')}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest -rotate-45 mb-4 mr-4">Service</span>
                  </div>
                </div>
                
                {/* Center Donut Hole */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-surface rounded-full shadow-inner flex items-center justify-center z-10 border-4 border-white">
                  <div className="font-display font-bold text-lg text-primary">D</div>
                </div>
              </div>
            </div>

            {/* Card 3 & 4: Produksi */}
            {[
              { img: "1563636619-e9143da7973b", icon: Leaf, title: "Breeding", desc: "Program pembibitan selektif untuk genetika unggul.", url: "/ekosistem/farm/breeding" },
              { img: "1484557985045-edf25e08da73", icon: Activity, title: "Penggemukan", desc: "Penggemukan terkontrol untuk hasil optimal.", url: "/ekosistem/farm/fattening" },
            ].map((card, idx) => (
              <Reveal index={idx+2} key={`produksi-${idx}`}>
                <Link href={card.url} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col h-full ${getCardStyle('produksi')}`}
                >
                  <div className="relative h-40 lg:h-36 overflow-hidden p-2 pb-0">
                    <img 
                      src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=500`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg">
                      <card.icon size={16} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-4 flex-1">{card.desc}</p>
                    <div className="text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
                </Link>
              </Reveal>
            ))}

            {/* ROW 2 */}
            {/* Card 5 & 6: Ibadah */}
            {[
              { img: "1543877087-ebf71fde2be1", icon: Building, title: "Qurban", desc: "Domba pilihan untuk ibadah qurban yang sempurna.", url: "/ekosistem/farm/qurban" },
              { img: "1511117833895-4b473c0b85d6", icon: Users, title: "Aqiqah", desc: "Layanan aqiqah praktis, aman, dan sesuai syariat.", url: "/ekosistem/farm/aqiqah" },
            ].map((card, idx) => (
              <Reveal index={idx+4} key={`ibadah-${idx}`}>
                <Link href={card.url} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col h-full ${getCardStyle('ibadah')}`}
                >
                  <div className="relative h-40 lg:h-36 overflow-hidden p-2 pb-0">
                    <img 
                      src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=500`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg">
                      <card.icon size={16} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-4 flex-1">{card.desc}</p>
                    <div className="text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
                </Link>
              </Reveal>
            ))}

            {/* Card 7 & 8: Service */}
            {[
              { img: "1563636619-e9143da7973b", icon: Building, title: "RPH", desc: "Rumah Potong Hewan modern dengan standar higienis.", url: "/ekosistem/farm/rph" },
              { img: "1484557985045-edf25e08da73", icon: PackageCheck, title: "Jasa Jagal", desc: "Jasa jagal profesional, halal, dan terpercaya.", url: "/ekosistem/farm/jagal" },
            ].map((card, idx) => (
              <Reveal index={idx+6} key={`service-${idx}`}>
                <Link href={card.url} className="block h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col h-full ${getCardStyle('service')}`}
                >
                  <div className="relative h-40 lg:h-36 overflow-hidden p-2 pb-0">
                    <img 
                      src={`https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&q=80&w=500`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg">
                      <card.icon size={16} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-4 flex-1">{card.desc}</p>
                    <div className="text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Selengkapnya <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROSES TERJAMIN */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-20">
            <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 flex justify-center items-center gap-2">
              <span className="w-8 h-px bg-primary"></span> Proses Terjamin <span className="w-8 h-px bg-primary"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-text-primary">
              Dari Pemeliharaan Hingga Layanan, Kami Jaga Setiap Proses
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line connecting steps */}
            <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-border-strong border-dashed border-b-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { icon: Leaf, title: "1. Pemilihan Bibit", desc: "Bibit unggul dipilih secara selektif untuk hasil terbaik." },
                { icon: Home, title: "2. Pemeliharaan", desc: "Dipelihara dengan pakan berkualitas dan kandang sehat." },
                { icon: Stethoscope, title: "3. Monitoring Kesehatan", desc: "Kesehatan ternak dipantau rutin oleh tim ahli." },
                { icon: PackageCheck, title: "4. Penggemukan", desc: "Program penggemukan terukur dan terkontrol." },
                { icon: ShieldCheck, title: "5. Layanan & Distribusi", desc: "Siap melayani kebutuhan Anda dengan aman & tepat waktu." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mb-6 relative group cursor-default">
                    {/* Circle Background */}
                    <div className="absolute inset-2 bg-primary/10 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"></div>
                    <step.icon size={28} className="text-primary relative z-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-text-primary mb-3 text-lg">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative rounded-[2rem] overflow-hidden bg-primary text-white shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=1600" 
                alt="Peternak" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>

            <div className="relative z-20 p-10 md:p-16 lg:p-20 md:w-3/4 lg:w-2/3">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Siap mendapatkan ternak terbaik untuk kebutuhan Anda?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Tim kami siap membantu Anda memilih ternak terbaik dengan pelayanan profesional dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Konsultasi via WhatsApp
                </button>
                <button className="w-full sm:w-auto px-8 py-4 text-white hover:text-white/80 font-bold transition-all flex items-center justify-center gap-2">
                  Atau Hubungi Kami <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Keunggulan Bottom Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
            {[
              { icon: Home, title: "Kandang Modern", desc: "Higienis, nyaman, dan sesuai standar kesehatan hewan." },
              { icon: Leaf, title: "Pakan Berkualitas", desc: "Pakan pilihan untuk pertumbuhan optimal dan sehat." },
              { icon: GraduationCap, title: "Tim Profesional", desc: "Tenaga ahli berpengalaman di bidangnya." },
              { icon: ShieldCheck, title: "Sesuai Syariat", desc: "Proses sesuai syariat Islam dari hulu hingga hilir." }
            ].map((feat, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <feat.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">{feat.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
