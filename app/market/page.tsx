"use client";

import { useState } from "react";

import { 
  Search,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Headset,
  ChevronDown,
  CreditCard,
  FileText,
  Package,
  Globe,
  Grid,
  ArrowRight,
  Box,
  Database,
  Gift,
  Heart,
  Beef,
  Milk,
  Wrench,
  Wheat,
  Pill,
  Stethoscope
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import { marketProducts } from "@/lib/mock-data/marketProducts";
import { ProductCard } from "@/components/market/ProductCard";

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState("foryou");
  const [activeMainCategory, setActiveMainCategory] = useState("semua");
  const [openFilters, setOpenFilters] = useState({
    kategori: false,
    jenis: false,
    tujuan: false,
    harga: false,
    lokasi: false
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = (key: keyof typeof openFilters) => {
    setOpenFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen bg-surface">
      <Header theme="light" />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* 1. HERO SECTION & SEARCH */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-subtle mb-8 relative">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="p-8 lg:p-12 lg:w-3/5 z-10 relative">
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-3">
                  Dombantara <span className="text-[#166534]">Market</span>
                </h1>
                <p className="text-text-secondary mb-10">Semua kebutuhan peternakan Anda dalam satu tempat.</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2">
                    <div className="text-[#166534]"><Grid size={24} strokeWidth={1.5}/></div>
                    <div>
                      <p className="font-bold text-sm text-text-primary leading-tight">15.000+</p>
                      <p className="text-[10px] text-text-muted">Produk & Layanan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#166534]"><ShieldCheck size={24} strokeWidth={1.5}/></div>
                    <div>
                      <p className="font-bold text-sm text-text-primary leading-tight">100%</p>
                      <p className="text-[10px] text-text-muted">Terverifikasi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#166534]"><Truck size={24} strokeWidth={1.5}/></div>
                    <div>
                      <p className="font-bold text-sm text-text-primary leading-tight">Pengiriman</p>
                      <p className="text-[10px] text-text-muted">Seluruh Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#166534]"><Headset size={24} strokeWidth={1.5}/></div>
                    <div>
                      <p className="font-bold text-sm text-text-primary leading-tight">Layanan</p>
                      <p className="text-[10px] text-text-muted">Profesional</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Search Bar & Cart */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 flex gap-2 bg-white rounded-xl shadow-sm border border-border-subtle p-2">
              <div className="flex items-center px-3 text-text-muted">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Cari produk atau layanan... (contoh: Domba Garut, Paket Qurban, Susu)"
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
              />
              <button className="bg-[#166534] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#166534]/90 transition-colors shrink-0">
                Cari
              </button>
            </div>
            
            {/* Cart Button */}
            <button className="bg-white rounded-xl shadow-sm border border-border-subtle w-[64px] shrink-0 flex items-center justify-center text-text-secondary hover:text-[#166534] hover:border-[#166534]/30 transition-all relative group">
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                3
              </span>
            </button>
          </div>

          {/* 3. MAIN LAYOUT (Filter - Grid - Right Sidebar) */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR DELETED - FILTER MOVED TO RIGHT */}

            {/* MIDDLE: PRODUCT GRID */}
            <div className="flex-1 min-w-0">
              
              {/* 2. CATEGORY NAV */}
              <div className="mb-8">
                {/* Main Categories */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {['Semua', 'Hewan', 'Produk', 'Layanan', 'Operasional'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveMainCategory(cat.toLowerCase())}
                      className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                        activeMainCategory === cat.toLowerCase()
                          ? 'bg-[#166534] text-white border-[#166534] shadow-sm'
                          : 'bg-white text-text-secondary border-border-subtle hover:border-[#166534]/50 hover:text-[#166534]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Sub Categories */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pt-2 items-center justify-start">
                  {(activeMainCategory === 'semua' ? [
                    { id: 'domba', label: 'Domba', icon: Box },
                    { id: 'kambing', label: 'Kambing', icon: Package },
                    { id: 'sapi', label: 'Sapi', icon: Database },
                    { id: 'daging', label: 'Daging', icon: Beef },
                    { id: 'susu', label: 'Susu', icon: Milk },
                    { id: 'fresh', label: 'Fresh', icon: Package },
                    { id: 'qurban', label: 'Qurban', icon: Gift },
                    { id: 'aqiqah', label: 'Aqiqah', icon: Heart },
                    { id: 'jagal', label: 'Jagal', icon: Wrench },
                    { id: 'rph', label: 'RPH', icon: Box },
                    { id: 'kesehatan', label: 'Jasa Kesehatan', icon: Stethoscope },
                    { id: 'alat', label: 'Alat', icon: Wrench },
                    { id: 'pakan', label: 'Pakan', icon: Wheat },
                    { id: 'obat', label: 'Obat', icon: Pill },
                    { id: 'pupuk', label: 'Pupuk', icon: Package }
                  ] : activeMainCategory === 'hewan' ? [
                    { id: 'domba', label: 'Domba', icon: Box },
                    { id: 'kambing', label: 'Kambing', icon: Package },
                    { id: 'sapi', label: 'Sapi', icon: Database }
                  ] : activeMainCategory === 'produk' ? [
                    { id: 'daging', label: 'Daging', icon: Beef },
                    { id: 'susu', label: 'Susu', icon: Milk },
                    { id: 'fresh', label: 'Fresh Food', icon: Package }
                  ] : activeMainCategory === 'layanan' ? [
                    { id: 'qurban', label: 'Qurban', icon: Gift },
                    { id: 'aqiqah', label: 'Aqiqah', icon: Heart },
                    { id: 'jagal', label: 'Jagal', icon: Wrench },
                    { id: 'rph', label: 'RPH', icon: Box },
                    { id: 'kesehatan', label: 'Jasa Kesehatan', icon: Stethoscope }
                  ] : activeMainCategory === 'operasional' ? [
                    { id: 'alat', label: 'Alat', icon: Wrench },
                    { id: 'pakan', label: 'Pakan', icon: Wheat },
                    { id: 'obat', label: 'Obat', icon: Pill },
                    { id: 'pupuk', label: 'Pupuk', icon: Package }
                  ] : []).map((cat) => (
                    <button 
                      key={cat.id} 
                      className="flex flex-col items-center gap-2 min-w-[80px] p-2 rounded-2xl transition-all bg-transparent border border-transparent hover:bg-white hover:shadow-sm group"
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-text-secondary bg-white shadow-sm border border-border-subtle group-hover:border-[#166534]/30 group-hover:text-[#166534] transition-colors">
                        <cat.icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="text-[11px] font-bold text-text-secondary text-center group-hover:text-text-primary transition-colors">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SPECIAL SHOWCASE SECTIONS */}
              <div className="mb-12">
                {/* Tabs */}
                <div className="flex gap-6 border-b border-border-subtle mb-6 overflow-x-auto scrollbar-hide">
                  {[
                    { id: 'foryou', label: '⭐ For You', items: marketProducts.slice(0, 6) },
                    { id: 'latest', label: '🕒 Latest View', items: marketProducts.slice(4, 8) }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 font-bold text-sm whitespace-nowrap transition-colors relative ${
                        activeTab === tab.id ? 'text-[#166534]' : 'text-text-muted hover:text-text-secondary'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#166534] rounded-t-full"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {([
                    { id: 'foryou', items: marketProducts.slice(0, 6) },
                    { id: 'latest', items: marketProducts.slice(4, 8) }
                  ].find(t => t.id === activeTab)?.items || []).map((prod) => (
                    <div key={prod.id} className="min-w-[240px] w-[240px] snap-start shrink-0 h-auto">
                      <ProductCard prod={prod} />
                    </div>
                  ))}
                </div>
              </div>

              {/* PROMO CAROUSEL */}
              <div className="mb-10 w-full overflow-hidden rounded-2xl relative">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {[
                    {
                      badge: "Spesial Dombantara",
                      title: "Diskon hingga Rp 500.000 untuk Paket Ekosistem!",
                      desc: "Tingkatkan produktivitas farm Anda dengan produk terverifikasi. Pesan sekarang dan dapatkan gratis ongkos kirim ke seluruh Jawa!",
                      btn: "Klaim Promo",
                      bg: "1543877087-ebf71fde2be1",
                      fallbackBg: "#0f2e1a",
                      badgeStyle: "bg-yellow-500 text-yellow-950",
                      btnStyle: "bg-white text-[#0f2e1a]"
                    },
                    {
                      badge: "Promo Qurban",
                      title: "DP Ringan Mulai 10% untuk Sapi & Domba!",
                      desc: "Amankan hewan qurban terbaik Anda sekarang dengan DP ringan. Pelunasan bisa dilakukan H-7 Idul Adha tanpa biaya tambahan.",
                      btn: "Lihat Katalog",
                      bg: "1511117833895-4b473c0b85d6",
                      fallbackBg: "#4a1c1c",
                      badgeStyle: "bg-orange-500 text-white",
                      btnStyle: "bg-white text-[#4a1c1c]"
                    },
                    {
                      badge: "Gratis Ongkir",
                      title: "Bebas Biaya Kirim Pembelian Pakan Grosir!",
                      desc: "Beli pakan minimal 500kg dan nikmati pengiriman gratis ke seluruh peternakan di area Jabodetabek. Promo terbatas!",
                      btn: "Beli Pakan",
                      bg: "1589923188900-85dae523342b",
                      fallbackBg: "#1c3a4a",
                      badgeStyle: "bg-blue-500 text-white",
                      btnStyle: "bg-white text-[#1c3a4a]"
                    },
                    {
                      badge: "Flash Sale",
                      title: "Susu Domba Segar Beli 2 Gratis 1!",
                      desc: "Khusus hari ini, dapatkan promo beli 2 liter gratis 1 liter susu domba pasteurisasi murni berkualitas tinggi langsung dari peternakan.",
                      btn: "Borong Sekarang",
                      bg: "1550583724-b2692b85b150",
                      fallbackBg: "#5a2e15",
                      badgeStyle: "bg-red-500 text-white",
                      btnStyle: "bg-white text-[#5a2e15]"
                    }
                  ].map((promo, idx) => (
                    <div key={idx} style={{ backgroundColor: promo.fallbackBg }} className="min-w-full snap-center rounded-2xl overflow-hidden relative text-white shadow-sm flex items-center justify-between group shrink-0">
                      <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
                        <img src={`https://images.unsplash.com/photo-${promo.bg}?auto=format&fit=crop&q=80&w=1000`} className="w-full h-full object-cover" alt="Promo Background" />
                      </div>
                      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, ${promo.fallbackBg}, ${promo.fallbackBg}E6, transparent)` }}></div>
                      <div className="relative p-6 lg:p-10 z-10 lg:w-3/4">
                        <div className={`inline-block px-3 py-1 font-bold text-xs rounded-full mb-4 shadow-sm ${promo.badgeStyle}`}>
                          {promo.badge}
                        </div>
                        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-3 leading-tight text-white max-w-xl">
                          {promo.title}
                        </h2>
                        <p className="text-white/80 text-sm mb-8 max-w-lg leading-relaxed">
                          {promo.desc}
                        </p>
                        <button className={`${promo.btnStyle} px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 w-fit shadow-lg`}>
                          {promo.btn} <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <p className="text-sm font-bold text-text-primary">Menampilkan 342 produk</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted">Urutkan:</span>
                  <button className="flex items-center gap-2 font-bold text-text-primary">
                    Terbaru <ChevronDown size={14} />
                  </button>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {marketProducts.map((prod) => (
                  <div key={prod.id} className="h-auto">
                    <ProductCard prod={prod} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2">
                <button className="w-8 h-8 rounded bg-[#166534] text-white flex items-center justify-center text-sm font-bold shadow-sm">1</button>
                <button className="w-8 h-8 rounded bg-white border border-border-subtle text-text-secondary hover:bg-surface flex items-center justify-center text-sm font-bold">2</button>
                <button className="w-8 h-8 rounded bg-white border border-border-subtle text-text-secondary hover:bg-surface flex items-center justify-center text-sm font-bold">3</button>
                <span className="text-text-muted">...</span>
                <button className="w-8 h-8 rounded bg-white border border-border-subtle text-text-secondary hover:bg-surface flex items-center justify-center text-sm font-bold">18</button>
                <button className="w-8 h-8 rounded bg-white border border-border-subtle text-text-secondary hover:bg-surface flex items-center justify-center text-sm font-bold">→</button>
              </div>
            </div>

            {/* RIGHT SIDEBAR: FILTER & BENEFITS */}
            <div className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-28 space-y-6">
                
                {/* FILTER SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-border-subtle p-6 max-h-[60vh] overflow-y-auto scrollbar-hide">
                  <div 
                    className={`flex items-center justify-between cursor-pointer ${isFilterOpen ? 'mb-6' : ''}`}
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <h3 className="font-display font-bold text-lg text-text-primary flex items-center gap-2">
                      Filter <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </h3>
                    <button 
                      className="text-xs font-bold text-[#166534]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Reset
                    </button>
                  </div>

                  {isFilterOpen && (
                    <>
                      <div className="space-y-4">
                    {/* Kategori */}
                    <div className="border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter('kategori')}>
                        <h4 className="font-bold text-sm text-text-primary">Kategori</h4>
                        <ChevronDown size={16} className={`transition-transform ${openFilters.kategori ? 'rotate-180' : ''}`} />
                      </div>
                      {openFilters.kategori && (
                        <div className="mt-4 space-y-3">
                          {[
                            { label: "Domba", count: 124, checked: false },
                            { label: "Kambing", count: 98, checked: false },
                            { label: "Sapi", count: 26, checked: false },
                            { label: "Qurban", count: 78, checked: true },
                            { label: "Aqiqah", count: 45, checked: false },
                            { label: "Daging", count: 36, checked: false },
                            { label: "Susu", count: 19, checked: false },
                            { label: "Layanan", count: 22, checked: false }
                          ].map((item, i) => (
                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${item.checked ? 'bg-[#166534] border-[#166534]' : 'border-border-strong group-hover:border-[#166534]'}`}>
                                {item.checked && <CheckCircle2 size={12} className="text-white" />}
                              </div>
                              <span className="text-sm text-text-secondary flex-1">{item.label}</span>
                              <span className="text-xs text-text-muted">({item.count})</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Jenis */}
                    <div className="border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter('jenis')}>
                        <h4 className="font-bold text-sm text-text-primary">Jenis</h4>
                        <ChevronDown size={16} className={`transition-transform ${openFilters.jenis ? 'rotate-180' : ''}`} />
                      </div>
                      {openFilters.jenis && (
                        <div className="mt-4">
                          <button className="w-full flex items-center justify-between bg-surface border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-secondary">
                            Semua Jenis <ChevronDown size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Tujuan */}
                    <div className="border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter('tujuan')}>
                        <h4 className="font-bold text-sm text-text-primary">Tujuan</h4>
                        <ChevronDown size={16} className={`transition-transform ${openFilters.tujuan ? 'rotate-180' : ''}`} />
                      </div>
                      {openFilters.tujuan && (
                        <div className="mt-4">
                          <button className="w-full flex items-center justify-between bg-surface border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-secondary">
                            Semua Tujuan <ChevronDown size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Rentang Harga */}
                    <div className="border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter('harga')}>
                        <h4 className="font-bold text-sm text-text-primary">Rentang Harga</h4>
                        <ChevronDown size={16} className={`transition-transform ${openFilters.harga ? 'rotate-180' : ''}`} />
                      </div>
                      {openFilters.harga && (
                        <div className="mt-4 px-2">
                          <div className="h-1 bg-border-subtle w-full relative mb-4 rounded-full">
                            <div className="absolute left-0 right-1/4 h-full bg-[#166534] rounded-full"></div>
                            <div className="absolute left-0 -ml-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#166534] rounded-full shadow"></div>
                            <div className="absolute right-1/4 -mr-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#166534] rounded-full shadow"></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-text-muted font-bold">
                            <span>Rp 0</span>
                            <span>Rp 50.000.000+</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Lokasi */}
                    <div className="pb-4">
                      <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFilter('lokasi')}>
                        <h4 className="font-bold text-sm text-text-primary">Lokasi Pengiriman</h4>
                        <ChevronDown size={16} className={`transition-transform ${openFilters.lokasi ? 'rotate-180' : ''}`} />
                      </div>
                      {openFilters.lokasi && (
                        <div className="mt-4">
                          <button className="w-full flex items-center justify-between bg-surface border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-secondary">
                            Semua Wilayah <ChevronDown size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-white border border-[#166534] text-[#166534] rounded-lg font-bold text-sm hover:bg-[#166534]/5 transition-colors">
                    Terapkan Filter
                  </button>
                    </>
                  )}
                </div>

                {/* WHY DOMBANTARA SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-border-subtle p-6">
                  <h3 className="font-display font-bold text-lg text-text-primary leading-tight mb-6">
                    Kenapa Belanja di Dombantara Market?
                  </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="text-[#166534] shrink-0"><ShieldCheck size={24} strokeWidth={1.5}/></div>
                    <div>
                      <h4 className="font-bold text-sm text-text-primary mb-1">Produk Terverifikasi</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed">Semua hewan dan produk melalui proses seleksi ketat.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#166534] shrink-0"><CheckCircle2 size={24} strokeWidth={1.5}/></div>
                    <div>
                      <h4 className="font-bold text-sm text-text-primary mb-1">Kualitas Terjamin</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed">Kesehatan, pakan, dan proses sesuai standar.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#166534] shrink-0"><Truck size={24} strokeWidth={1.5}/></div>
                    <div>
                      <h4 className="font-bold text-sm text-text-primary mb-1">Pengiriman Aman</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed">Hewan dan produk dikirim dengan aman dan tepat waktu.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#166534] shrink-0"><Headset size={24} strokeWidth={1.5}/></div>
                    <div>
                      <h4 className="font-bold text-sm text-text-primary mb-1">Layanan Profesional</h4>
                      <p className="text-[10px] text-text-muted leading-relaxed">Tim kami siap membantu Anda sebelum dan sesudah transaksi.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#166534]/5 border border-[#166534]/20 rounded-xl p-4 flex gap-3">
                  <div className="text-[#166534] shrink-0"><CheckCircle2 size={20}/></div>
                  <div>
                    <h4 className="font-bold text-xs text-[#166534] mb-1">Garansi Dombantara</h4>
                    <p className="text-[9px] text-text-secondary leading-relaxed">Jika produk tidak sesuai, kami siap membantu solusi terbaik untuk Anda.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* 5. FOOTER INFO BANNER */}
      <section className="bg-surface py-12 border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex gap-4">
              <div className="text-text-muted shrink-0"><Globe size={24} strokeWidth={1.5}/></div>
              <div>
                <h4 className="font-bold text-xs text-text-primary mb-1">Ekosistem Terintegrasi</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Terhubung langsung dengan pilar Farm, Fresh, Process, Care, Tech, dan Partner.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-text-muted shrink-0"><FileText size={24} strokeWidth={1.5}/></div>
              <div>
                <h4 className="font-bold text-xs text-text-primary mb-1">Informasi Transparan</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Detail produk, harga, dan layanan disampaikan secara transparan.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-text-muted shrink-0"><Headset size={24} strokeWidth={1.5}/></div>
              <div>
                <h4 className="font-bold text-xs text-text-primary mb-1">Dukungan Profesional</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Tim berpengalaman siap membantu Anda kapan saja.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-text-muted shrink-0"><CreditCard size={24} strokeWidth={1.5}/></div>
              <div>
                <h4 className="font-bold text-xs text-text-primary mb-1">Payment Gateway</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Mendukung berbagai metode pembayaran praktis dan aman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
