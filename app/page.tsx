"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Leaf, 
  Stethoscope, 
  CheckCircle2,
  Truck,
  FileText,
  Search,
  MessageSquare,
  CreditCard,
  PackageCheck,
  Star,
  MapPin,
  Tractor,
  Store,
  HeartHandshake,
  Factory,
  Sprout,
  Settings,
  GraduationCap,
  Laptop,
  Link2
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=2000" 
            alt="Peternakan Domba" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container relative z-20 mx-auto px-6 lg:px-10 flex flex-col justify-center h-full pb-24">
          <div className="max-w-3xl">
            <Reveal index={0}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Peternakan Domba <br/> Terintegrasi <span className="text-status-success">Indonesia</span>
              </h1>
            </Reveal>
            <Reveal index={1}>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                Dombantara menghadirkan domba premium, layanan sesuai syariat, dan teknologi modern untuk Indonesia yang lebih baik.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="flex flex-wrap items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  Pesan Sekarang <ArrowRight size={18} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold transition-all"
                >
                  Lihat Peternakan
                </motion.button>
              </div>
            </Reveal>
          </div>
          
          {/* Play Video Button - Floating Right */}
          <Reveal index={3} className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 cursor-pointer group">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              className="w-16 h-16 rounded-full border-2 border-white/50 backdrop-blur-md flex items-center justify-center text-white transition-colors"
            >
              <Play size={24} className="ml-1" />
            </motion.div>
            <span className="text-white text-sm font-bold tracking-wider uppercase">Video Profil</span>
          </Reveal>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal index={4}>
              <div className="bg-[#0B301A]/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10 shadow-2xl border border-white/20">
                <div className="flex items-center gap-4 px-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-status-success shrink-0">
                    <PackageCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-2xl">50.000+</h4>
                    <p className="text-white/70 text-sm">Domba Disalurkan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-status-success shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-2xl">34</h4>
                    <p className="text-white/70 text-sm">Provinsi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-status-success shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-2xl">10+</h4>
                    <p className="text-white/70 text-sm">Tahun Pengalaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-status-success shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-2xl">10.000+</h4>
                    <p className="text-white/70 text-sm">Pelanggan Puas</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MITRA KOLABORASI */}
      <section className="pt-32 pb-12 bg-white overflow-hidden relative border-none">
        <div className="container mx-auto px-6 lg:px-10 text-center mb-10">
          <p className="text-text-secondary text-sm font-semibold">Dipercaya oleh berbagai perusahaan dan institusi</p>
        </div>
        
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative w-full flex overflow-hidden">
            {/* Gradient masking for smooth fade on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-scroll items-center gap-20 pr-20 py-4">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-20 items-center">
                  {[
                    "https://upload.wikimedia.org/wikipedia/en/e/e0/IPB_logo_with_namestyle.png",
                    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo_Kementerian_Pertanian_Republik_Indonesia.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Indofood_logo-en.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_Telkom_Indonesia_2013.png",
                    "https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_PLN.svg"
                  ].map((logoUrl, idx) => (
                    <div key={idx} className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer h-12 w-32">
                      <img 
                        src={logoUrl} 
                        alt="Partner Logo" 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TENTANG KAMI */}
      <section className="pt-32 pb-20 container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Thumbnail */}
          <Reveal index={0}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-2xl border border-border-subtle"
            >
              <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=1000" alt="Video Profil Dombantara" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl"
                >
                  <Play size={32} className="ml-2" />
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-6 text-white font-bold flex items-center gap-2 drop-shadow-md">
                <Play size={16} /> Video Profil Dombantara
              </div>
              <div className="absolute bottom-6 right-6 text-white font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-sm">
                02:45
              </div>
            </motion.div>
          </Reveal>

          {/* Copywriting */}
          <div>
            <Reveal index={1}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> Tentang Kami
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                Lebih dari Sekadar Peternakan. Kami Membangun Masa Depan.
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Dombantara adalah ekosistem peternakan terintegrasi berbasis teknologi, yang menghubungkan peternak dengan masyarakat. Kami berkomitmen menghadirkan domba berkualitas, layanan profesional, dan keberkahan untuk setiap ibadah Anda.
              </p>
            </Reveal>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, title: "Peternakan Modern" },
                { icon: Leaf, title: "Pakan Alami Berkualitas" },
                { icon: Stethoscope, title: "Perawatan Profesional" },
                { icon: ShieldCheck, title: "Sesuai Syariat dan Aman" }
              ].map((item, idx) => (
                <Reveal index={3 + idx} key={idx}>
                  <div className="flex gap-4 items-center group">
                    <div className="w-12 h-12 rounded-xl bg-accent-background text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">{item.title}</h4>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KENAPA MEMILIH DOMBANTARA */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Dekorasi blur di background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-status-success/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-10 text-center relative z-10">
          <Reveal index={0}>
            <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span> Kenapa Memilih Dombantara? <span className="w-8 h-px bg-primary"></span>
            </div>
            <h2 className="font-display text-4xl font-bold text-text-primary mb-16">
              Kualitas Terbaik, Layanan Terbaik, Kepercayaan Terbaik.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PackageCheck, title: "Peternakan Modern", desc: "Kandang higienis, teknologi terintegrasi, dan pengawasan kesehatan berkala." },
              { icon: Truck, title: "Pengiriman Nasional", desc: "Aman, cepat, dan tepat waktu ke seluruh Indonesia dengan armada khusus." },
              { icon: ShieldCheck, title: "Sesuai Syariat", desc: "Proses sesuai syariat Islam, dari pemilihan hingga penyembelihan." },
              { icon: FileText, title: "Dokumentasi Lengkap", desc: "Laporan dokumentasi, video, dan sertifikat untuk setiap pesanan." }
            ].map((card, idx) => (
              <Reveal index={1 + idx} key={idx}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl border border-border-subtle hover:border-primary/30 shadow-sm hover:shadow-xl transition-all text-left group h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-background text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <card.icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">{card.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EKOSISTEM KAMI */}
      <section className="py-24 container mx-auto px-6 lg:px-10 text-center relative">
        {/* Dekorasi blur di background untuk glassmorphism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-status-success/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

        <Reveal index={0}>
          <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 justify-center flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span> Ekosistem Dombantara <span className="w-8 h-px bg-primary"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-16 max-w-3xl mx-auto relative z-10">
            Integrasi Hulu ke Hilir untuk Kualitas Tanpa Kompromi
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-10">
          {[
            { icon: Store, title: "Dombantara Fresh", desc: "Penyediaan daging domba segar berkualitas premium untuk kebutuhan Anda." },
            { icon: HeartHandshake, title: "Dombantara Care", desc: "Layanan pelaksanaan Qurban dan Aqiqah profesional sesuai syariat Islam." },
            { icon: Factory, title: "Dombantara Process", desc: "Rumah Potong Hewan (RPH) bersertifikat halal dan higienis." },
            { icon: Sprout, title: "Dombantara Agri", desc: "Produksi pakan bernutrisi, pupuk organik, dan plastik silase bermutu." },
            { icon: Settings, title: "Dombantara Works", desc: "Rancang bangun mesin dan peralatan peternakan berteknologi tinggi." },
            { icon: GraduationCap, title: "Dombantara Academy", desc: "Pusat edukasi dan pelatihan modern bagi para peternak mitra." },
            { icon: Laptop, title: "Dombantara Digital", desc: "Solusi sistem dan aplikasi cerdas untuk manajemen peternakan." },
            { icon: Link2, title: "Dombantara Connect", desc: "Jaringan kemitraan strategis yang menghubungkan seluruh ekosistem." }
          ].map((prod, idx) => (
            <Reveal index={idx % 4} key={idx}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/40 shadow-[0_8px_32px_rgba(11,48,26,0.03)] hover:shadow-[0_8px_32px_rgba(11,48,26,0.08)] transition-all h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 shadow-sm">
                  <prod.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="relative z-10 font-bold font-display text-xl mb-3 text-text-primary">{prod.title}</h3>
                <p className="relative z-10 text-text-muted text-sm leading-relaxed mb-8 flex-1">{prod.desc}</p>
                <span className="relative z-10 text-primary font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all mt-auto group-hover:text-status-success">
                  Pelajari Lebih Lanjut <ArrowRight size={14} />
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* 6. CARA KERJA & PROSES KAMI */}
      <section className="py-24 bg-surface/50 border-y border-border-subtle relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10 text-center relative z-10">
          
          {/* Cara Kerja */}
          <div className="mb-32">
            <Reveal index={0}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 justify-center flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> Cara Kerja <span className="w-8 h-px bg-primary"></span>
              </div>
              <h2 className="font-display text-4xl font-bold text-text-primary mb-16">
                Mudah, Aman, dan Terpercaya
              </h2>
            </Reveal>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative">
              {/* Garis penghubung di desktop */}
              <div className="hidden md:block absolute top-8 left-16 right-16 h-px border-t-2 border-dashed border-border-strong -z-10"></div>
              
              {[
                { icon: Search, title: "Pilih Produk", desc: "Pilih domba atau paket sesuai kebutuhan Anda." },
                { icon: MessageSquare, title: "Konsultasi", desc: "Tim kami siap membantu konsultasi gratis." },
                { icon: CreditCard, title: "Pembayaran", desc: "Pembayaran aman dan terverifikasi otomatis." },
                { icon: Truck, title: "Pengiriman", desc: "Pengiriman aman atau layanan kami proseskan." }
              ].map((step, idx) => (
                <Reveal index={1 + idx} key={idx} className="flex flex-col items-center max-w-[200px] bg-surface/50 md:bg-transparent p-4 md:p-0 rounded-2xl">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-primary/20 relative"
                  >
                    {idx + 1}
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-white text-primary border-2 border-surface flex items-center justify-center shadow-sm">
                      <step.icon size={18} />
                    </div>
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proses Kami */}
          <div>
            <Reveal index={0}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 justify-center flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> Proses Kami <span className="w-8 h-px bg-primary"></span>
              </div>
              <h2 className="font-display text-4xl font-bold text-text-primary mb-16">
                Dari Peternakan hingga Ke Tangan Anda
              </h2>
            </Reveal>

            <div className="relative max-w-6xl mx-auto py-10 bg-white rounded-[3rem] shadow-sm border border-border-subtle p-8 md:p-12">
              <div className="absolute top-1/2 left-12 right-12 h-px bg-border-subtle -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                {[
                  { icon: Search, title: "Seleksi Domba" },
                  { icon: Leaf, title: "Perawatan Optimal" },
                  { icon: Stethoscope, title: "Cek Kesehatan" },
                  { icon: PackageCheck, title: "Siap Disalurkan" },
                  { icon: Truck, title: "Pengiriman Aman" }
                ].map((node, idx) => (
                  <Reveal index={1 + idx} key={idx}>
                    <div className="flex flex-col items-center text-center group cursor-default">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center mb-4 ring-8 ring-surface border border-border-subtle shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                      >
                        <node.icon size={22} />
                      </motion.div>
                      <h4 className="font-bold mb-1 text-sm md:text-base">{node.title}</h4>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GALERI & TESTIMONI (Bento Box) */}
      <section className="py-24 container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Galeri - Bento Grid */}
          <div>
            <Reveal index={0}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
                Galeri Peternakan
              </div>
            </Reveal>
            
            <Reveal index={1}>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <motion.div whileHover={{ scale: 0.98 }} className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-md border border-border-subtle">
                  <img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Galeri Utama" />
                </motion.div>
                <motion.div whileHover={{ scale: 0.98 }} className="rounded-[1.5rem] overflow-hidden aspect-square shadow-md border border-border-subtle">
                  <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Galeri 1" />
                </motion.div>
                <motion.div whileHover={{ scale: 0.98 }} className="rounded-[1.5rem] overflow-hidden aspect-square shadow-md border border-border-subtle">
                  <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Galeri 2" />
                </motion.div>
              </div>
            </Reveal>
            
            <Reveal index={2}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-surface border border-border-subtle text-primary w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white shadow-sm transition-colors"
              >
                Lihat Semua Galeri <ArrowRight size={18} />
              </motion.button>
            </Reveal>
          </div>

          {/* Testimoni */}
          <div>
            <Reveal index={0}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
                Testimoni Pelanggan
              </div>
            </Reveal>

            <Reveal index={1}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#4D4537] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden mb-8 h-[380px] flex flex-col justify-center shadow-2xl"
              >
                <div className="absolute inset-0 z-0 opacity-40">
                  <img src="https://images.unsplash.com/photo-1555020478-f68285cb1594?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Customer" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4D4537] via-[#4D4537]/90 to-transparent z-10"></div>
                
                <div className="relative z-20 max-w-sm">
                  <div className="flex gap-1 text-status-warning mb-6">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed mb-8 italic text-white/90 font-medium">
                    &quot;Alhamdulillah, domba qurban dari Dombantara sangat berkualitas, pengiriman tepat waktu dan proses mudah. Sangat direkomendasikan!&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 ring-2 ring-white/30">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Avatar" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Bapak Hendra</h4>
                      <p className="text-sm text-white/70">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer transition-colors"
                  >
                    <Play size={24} className="ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal index={2}>
              <div className="flex items-center justify-between bg-surface/50 p-4 rounded-2xl border border-border-subtle">
                <div className="flex -space-x-3">
                  {[
                    "1500648767791-00dcc994a43e", "1534528741775-53994a69daeb", "1570295999919-56ceb5ecca61", "1580489944761-15a19d654956"
                  ].map((id, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=100`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    +2k
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="font-bold text-text-primary text-lg">4.9/5</span>
                    <Star size={18} fill="currentColor" className="text-status-warning" />
                  </div>
                  <p className="text-xs text-text-muted">Dari 2.350+ ulasan terverifikasi</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. ARTIKEL & EDUKASI */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal index={0}>
              <div className="text-primary font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> Artikel & Edukasi
              </div>
              <h2 className="font-display text-4xl font-bold text-text-primary">
                Belajar, Berbagi, Menginspirasi
              </h2>
            </Reveal>
            <Reveal index={1} className="flex gap-2 mt-6 md:mt-0">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center hover:bg-white hover:text-primary transition-colors bg-surface">
                <ArrowRight size={20} className="rotate-180" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center hover:bg-white hover:text-primary transition-colors bg-surface">
                <ArrowRight size={20} />
              </motion.button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "1543877087-ebf71fde2be1", tag: "Edukasi", date: "25 Mei 2024", title: "Tips Memilih Domba Qurban yang Berkualitas" },
              { img: "1563636619-e9143da7973b", tag: "Edukasi", date: "18 Mei 2024", title: "Manfaat Susu Domba untuk Kesehatan Keluarga" },
              { img: "1511117833895-4b473c0b85d6", tag: "Berita", date: "10 Mei 2024", title: "Mengenal Peternakan Modern Dombantara" },
              { img: "1484557985045-edf25e08da73", tag: "Edukasi", date: "5 Mei 2024", title: "Panduan Aqiqah Praktis Sesuai Syariat Islam" }
            ].map((post, idx) => (
              <Reveal index={2 + idx} key={idx}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden border border-border-subtle hover:border-primary/20 hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden p-2 pb-0">
                    <img src={`https://images.unsplash.com/photo-${post.img}?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center text-xs mb-4 font-medium">
                      <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">{post.tag}</span>
                      <span className="text-text-muted">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-4 line-clamp-2 leading-snug">{post.title}</h3>
                    <div className="mt-auto pt-4 border-t border-border-subtle text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca Selengkapnya <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BOTTOM BANNER */}
      <section className="py-24 container mx-auto px-6 lg:px-10">
        <Reveal index={0}>
          <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            </div>
            
            {/* Animasi dekorasi lingakaran */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 border-4 border-dashed border-white/20 rounded-full z-0"
            ></motion.div>

            <div className="relative z-10 p-12 md:p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Siap Berqurban Bersama Dombantara?
                </h2>
                <p className="text-white/80 text-lg mb-0">
                  Percayakan ibadah qurban Anda kepada kami. Amanah, sesuai syariat, dan penuh keberkahan.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary hover:bg-surface px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shrink-0"
              >
                Hubungi Kami via WhatsApp
              </motion.button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
