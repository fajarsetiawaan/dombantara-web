"use client";

import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Building2,
  FileText,
  Download,
  MessageCircle,
  ClipboardCheck,
  Settings,
  Users,
  Headphones,
  CheckCircle,
  Package,
  Milk,
  Beef,
  Flame,
  BadgeCheck,
  TrendingUp,
  Snowflake,
  CreditCard,
  Target,
  Utensils
} from "lucide-react";

const corporateCategories = [
  {
    id: "livestock",
    title: "Livestock Supply",
    desc: "Pasokan domba dan kambing hidup berkualitas untuk kebutuhan qurban, aqiqah, proyek, dan peternakan.",
    image: "1484557985045-edf25e08da73",
    icon: <Package size={20} />,
    features: [
      "Domba & Kambing Siap Potong",
      "Domba & Kambing Bibit",
      "Pengiriman Antar Daerah"
    ]
  },
  {
    id: "meat",
    title: "Meat Supply",
    desc: "Daging segar higienis dengan standar pemotongan halal dan rantai dingin terjaga.",
    image: "1603048297172-c925447989d9",
    icon: <Beef size={20} />,
    features: [
      "Daging Domba / Kambing",
      "Daging Sapi",
      "Kemasan Vacuum / Bulk"
    ]
  },
  {
    id: "processed",
    title: "Fresh Food",
    desc: "Produk olahan daging praktis berkualitas untuk kebutuhan kuliner dan retail.",
    image: "1555939594-58d7cb561ad1",
    icon: <Flame size={20} />,
    features: [
      "Sate, Kebab, Nugget",
      "Bakso, Sosis, Burger Patty",
      "Custom Recipe & Private Label"
    ]
  },

  {
    id: "dairy",
    title: "Dairy & By-Product",
    desc: "Produk turunan hewan untuk diversifikasi produk dan kebutuhan industri makanan.",
    image: "1550583724599-e61e05307b22",
    icon: <Milk size={20} />,
    features: [
      "Susu Domba",
      "Kulit, Wool, Tulang",
      "By-Product Lainnya"
    ]
  }
];

export default function CorporateSupplyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[500px] flex items-center">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 w-2/3"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            alt="Corporate Logistics" 
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-text-primary">Beranda</Link>
            <ChevronRight size={12} />
            <Link href="/ekosistem/supply" className="hover:text-text-primary">Dombantara Supply</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Corporate Supply</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Corporate Supply
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-lg">
                Solusi pasokan hewan & produk daging berkualitas untuk kebutuhan bisnis, instansi, hotel, restoran, katering, dan retail.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <BadgeCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-text-primary">Kualitas Terjamin</h4>
                    <p className="text-[10px] text-text-muted">Standar premium</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Settings size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-text-primary">Pasokan Stabil</h4>
                    <p className="text-[10px] text-text-muted">Terjadwal & konsisten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-text-primary">Harga Kompetitif</h4>
                    <p className="text-[10px] text-text-muted">Skala bisnis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Headphones size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-text-primary">Layanan Profesional</h4>
                    <p className="text-[10px] text-text-muted">Tim dedicated support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Float Card */}
            <div className="w-full max-w-sm lg:max-w-xs shrink-0">
              <div className="bg-text-primary rounded-3xl p-6 shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/30 rounded-full blur-2xl -ml-10 -mb-10"></div>
                
                <div className="relative z-10 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 border border-white/10">
                    <Headphones size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3">
                    Butuh Penawaran Khusus untuk Bisnis Anda?
                  </h3>
                  <p className="text-white/70 text-xs mb-6 leading-relaxed">
                    Dapatkan penawaran terbaik sesuai kebutuhan dan volume perusahaan Anda.
                  </p>
                  <button className="w-full bg-white text-text-primary font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-surface transition-colors">
                    Minta Penawaran <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Row */}
      <section className="py-8 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-sm">
            <div className="flex flex-nowrap lg:grid lg:grid-cols-5 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 min-w-[250px] lg:min-w-0 snap-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary mb-1 leading-snug">Melayani Instansi & Perusahaan</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed">Pemerintah, BUMN, Swasta, Hotel, Restoran, Katering, Retail</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4 min-w-[250px] lg:min-w-0 snap-start lg:border-l lg:border-border-subtle lg:pl-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ClipboardCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary mb-1 leading-snug">Sesuai Standar & Regulasi</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed">Halal, Kesehatan Hewan, HACCP, dan ISO</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 min-w-[250px] lg:min-w-0 snap-start lg:border-l lg:border-border-subtle lg:pl-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary mb-1 leading-snug">Pengiriman Terjadwal</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed">Jadwal rutin harian, mingguan, atau bulanan</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 min-w-[250px] lg:min-w-0 snap-start lg:border-l lg:border-border-subtle lg:pl-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary mb-1 leading-snug">Keamanan & Ketelusuran</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed">Traceability setiap produk dari hulu ke hilir</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4 min-w-[250px] lg:min-w-0 snap-start lg:border-l lg:border-border-subtle lg:pl-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary mb-1 leading-snug">Dedicated Account Manager</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed">Pendampingan khusus untuk kebutuhan bisnis Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Column: Categories Grid */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-8">Kategori Pasokan untuk Korporasi</h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
                {corporateCategories.map((cat) => (
                  <div key={cat.id} className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300 group h-full">
                    <div className="h-32 bg-gray-300 relative overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${cat.image}?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={cat.title} />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-primary">
                        {cat.icon}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-lg text-text-primary mb-1">{cat.title}</h3>
                      <p className="text-[10px] text-text-secondary leading-relaxed mb-4">
                        {cat.desc}
                      </p>
                      <div className="mt-auto flex gap-2">
                        <Link href="/ekosistem/supply/corporate/livestock-landingpage" className="flex-1 text-center border border-border-subtle rounded-xl py-2.5 text-[10px] font-bold text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                          Lihat Detail
                        </Link>
                        <button className="w-9 shrink-0 flex items-center justify-center border border-border-subtle rounded-xl text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors" title="Hubungi Sales Corporate">
                          <MessageCircle size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Steps Timeline (Moved here to fill space) */}
              <div className="mt-16">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-8">Proses Pemesanan Mudah</h2>
                
                <div className="relative">
                  <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border-subtle z-0"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border-subtle flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors shrink-0 mb-4">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-text-primary mb-1">1. Konsultasi Kebutuhan</h4>
                        <p className="text-[10px] text-text-secondary leading-relaxed">Sampaikan kebutuhan produk, volume, dan jadwal Anda.</p>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border-subtle flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors shrink-0 mb-4">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-text-primary mb-1">2. Penawaran Harga</h4>
                        <p className="text-[10px] text-text-secondary leading-relaxed">Tim kami mengirimkan penawaran terbaik.</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border-subtle flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors shrink-0 mb-4">
                        <ClipboardCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-text-primary mb-1">3. Konfirmasi & PO</h4>
                        <p className="text-[10px] text-text-secondary leading-relaxed">Pemesanan dikonfirmasi sesuai kesepakatan.</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border-subtle flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors shrink-0 mb-4">
                        <Truck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-text-primary mb-1">4. Produksi & Pengiriman</h4>
                        <p className="text-[10px] text-text-secondary leading-relaxed">Proses pemenuhan dan pengiriman sesuai jadwal.</p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-border-subtle flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors shrink-0 mb-4">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-text-primary mb-1">5. Layanan Purna Jual</h4>
                        <p className="text-[10px] text-text-secondary leading-relaxed">Evaluasi berkala untuk menjaga kepuasan dan kualitas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="sticky top-28 bg-text-primary rounded-3xl p-6 lg:p-8 shadow-xl">
                <h3 className="text-white font-bold text-lg leading-snug mb-8">
                  Keuntungan Bermitra dengan Dombantara Supply
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 border border-white/10">
                      <Target size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">Pasokan Terjamin</h4>
                      <p className="text-[11px] text-white/70 leading-relaxed">Ketersediaan stok stabil sesuai kebutuhan bisnis Anda.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 border border-white/10">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">Kualitas Premium</h4>
                      <p className="text-[11px] text-white/70 leading-relaxed">Hewan sehat, daging segar, dan higienis.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 border border-white/10">
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">Harga Kompetitif</h4>
                      <p className="text-[11px] text-white/70 leading-relaxed">Skema harga terbaik untuk pembelian skala besar.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 border border-white/10">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">Layanan Fleksibel</h4>
                      <p className="text-[11px] text-white/70 leading-relaxed">Sesuai kebutuhan volume, jadwal & lokasi Anda.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 border border-white/10">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">Dokumentasi Lengkap</h4>
                      <p className="text-[11px] text-white/70 leading-relaxed">Sertifikat halal, kesehatan hewan, dan dokumen pendukung lainnya.</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
                  <button className="w-full bg-white text-text-primary font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-surface transition-colors">
                    Hubungi Sales Corporate <ArrowRight size={16} />
                  </button>
                  <div className="text-center relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative bg-text-primary px-4 text-[10px] text-white/50">atau</span>
                  </div>
                  <button className="w-full bg-transparent border border-white/20 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                    <Download size={14} /> Unduh Company Profile
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Clients Section */}
      <section className="py-12 border-t border-border-subtle bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <h3 className="text-sm font-bold text-text-primary mb-8">Telah Dipercaya oleh Berbagai Instansi & Perusahaan</h3>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-60 grayscale">
            {/* Mockup logos with text styling */}
            <span className="font-black italic text-xl tracking-tighter text-blue-800">mandiri</span>
            <span className="font-black italic text-xl tracking-widest text-blue-700">BCA</span>
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-lg text-blue-900 leading-none">Garuda Indonesia</span>
              <span className="text-[8px] tracking-widest">THE AIRLINE OF INDONESIA</span>
            </div>
            <span className="font-black italic text-xl text-red-600">JNE<span className="text-blue-900">EXPRESS</span></span>
            <span className="font-serif text-sm tracking-widest text-neutral-800">Hotel Indonesia Kempinski</span>
            <span className="font-bold text-lg text-blue-800 bg-yellow-400 px-2 italic">SARI ROTI</span>
            <span className="font-black text-xl text-red-700 uppercase">Abuba <span className="font-light text-sm">STEAK</span></span>
            <span className="font-bold text-sm text-green-700 flex items-center gap-1"><Utensils size={16} /> Katering Indonesia</span>
            <div className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg">& Banyak Lagi</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 relative overflow-hidden bg-text-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e2a47] via-[#0e2a47]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
              Siap menjadi mitra pasokan terpercaya bisnis Anda?
            </h2>
            <p className="text-white/80 text-sm mb-8 leading-relaxed max-w-lg">
              Tim kami siap membantu memenuhi kebutuhan pasokan hewan dan produk daging berkualitas.
            </p>
            <button className="bg-white text-primary font-bold py-3.5 px-8 rounded-xl text-sm flex items-center gap-2 hover:bg-surface transition-colors shadow-xl">
              Hubungi Sales Sekarang <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
