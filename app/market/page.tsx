"use client";

import { useState } from "react";

import { 
  Search,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Headset,
  MapPin,
  ChevronDown,
  CreditCard,
  FileText,
  Package,
  Globe,
  Grid,
  ArrowRight,
  LayoutGrid,
  Box,
  Database,
  Gift,
  Heart,
  Beef,
  Milk,
  Wrench,
  Wheat,
  Pill,
  MoreHorizontal
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// Dummy Data untuk Produk
const marketProducts = [
  { id: 1, title: "Domba Garut Premium", badge: "Terverifikasi", category: "Qurban", spec: "10-12 bulan", weight: "40 - 45 kg", price: "Rp 4.750.000", location: "Bandung, Jawa Barat", img: "1484557985045-edf25e08da73" },
  { id: 2, title: "Kambing Etawa Super", badge: "Terverifikasi", category: "Aqiqah", spec: "7-9 bulan", weight: "30 - 35 kg", price: "Rp 3.250.000", location: "Boyolali, Jawa Tengah", img: "1484557985045-edf25e08da73" },
  { id: 3, title: "Sapi Limousin", badge: "Terverifikasi", category: "Qurban", spec: "18-24 bulan", weight: "250 - 300 kg", price: "Rp 24.500.000", location: "Lampung, Lampung", img: "1484557985045-edf25e08da73" },
  { id: 4, title: "Paket Qurban Domba", badge: "Paket", category: "1 Domba + Layanan", spec: "", weight: "25 - 40 kg", price: "Mulai Rp 4.950.000", location: "Tersedia di 20+ kota", img: "1484557985045-edf25e08da73" },
  { id: 5, title: "Paket Aqiqah", badge: "Paket", category: "Kambing + Masak", spec: "", weight: "20 - 25 kg", price: "Mulai Rp 2.250.000", location: "Tersedia di 20+ kota", img: "1484557985045-edf25e08da73" },
  { id: 6, title: "Daging Domba Segar", badge: "Fresh", category: "Tanpa tulang", spec: "", weight: "500 gram", price: "Rp 145.000", location: "Jakarta, DKI Jakarta", img: "1484557985045-edf25e08da73" },
  { id: 7, title: "Susu Domba Segar", badge: "Fresh", category: "Pasteurisasi", spec: "", weight: "1 Liter", price: "Rp 65.000", location: "Bandung, Jawa Barat", img: "1484557985045-edf25e08da73" },
  { id: 8, title: "Jasa Penyembelihan", badge: "Layanan", category: "Sesuai Syariat", spec: "", weight: "Per Hewan", price: "Mulai Rp 250.000", location: "Tersedia di 20+ kota", img: "1484557985045-edf25e08da73" },
];

export default function MarketPage() {
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

          {/* Search Bar (Moved outside) */}
          <div className="flex gap-2 w-full bg-white rounded-xl shadow-sm border border-border-subtle p-2 mb-8">
            <div className="flex items-center px-3 text-text-muted">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Cari produk atau layanan... (contoh: Domba Garut, Paket Qurban, Susu)"
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
            />
            <button className="bg-[#166534] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#166534]/90 transition-colors">
              Cari
            </button>
          </div>

          {/* 3. MAIN LAYOUT (Filter - Grid - Right Sidebar) */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR DELETED - FILTER MOVED TO RIGHT */}

            {/* MIDDLE: PRODUCT GRID */}
            <div className="flex-1 min-w-0">
              
              {/* 2. CATEGORY NAV (Moved to align with grid) */}
              <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide mb-2 items-center justify-start">
                {[
                  { id: 'semua', label: 'Semua', icon: LayoutGrid },
                  { id: 'domba', label: 'Domba', icon: Box },
                  { id: 'kambing', label: 'Kambing', icon: Package },
                  { id: 'sapi', label: 'Sapi', icon: Database },
                  { id: 'qurban', label: 'Qurban', icon: Gift },
                  { id: 'aqiqah', label: 'Aqiqah', icon: Heart },
                  { id: 'daging', label: 'Daging', icon: Beef },
                  { id: 'susu', label: 'Susu', icon: Milk },
                  { id: 'alat', label: 'Alat', icon: Wrench },
                  { id: 'pakan', label: 'Pakan', icon: Wheat },
                  { id: 'obat', label: 'Obat', icon: Pill },
                  { id: 'lainnya', label: 'Lainnya', icon: MoreHorizontal }
                ].map((cat) => (
                  <button 
                    key={cat.id} 
                    className={`flex flex-col items-center gap-2 min-w-[80px] p-2 rounded-2xl transition-all ${
                      cat.id === 'semua' 
                        ? 'bg-[#166534]/10 border border-[#166534]/20' 
                        : 'bg-transparent border border-transparent hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      cat.id === 'semua' ? 'text-[#166534]' : 'text-text-secondary bg-white shadow-sm border border-border-subtle'
                    }`}>
                      <cat.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`text-xs font-bold ${cat.id === 'semua' ? 'text-[#166534]' : 'text-text-secondary'}`}>
                      {cat.label}
                    </span>
                  </button>
                ))}
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
                  <div key={prod.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col group hover:shadow-md transition-all">
                    {/* Image Area */}
                    <div className="h-40 relative overflow-hidden bg-surface">
                      <img 
                        src={`https://images.unsplash.com/photo-${prod.img}?auto=format&fit=crop&q=80&w=400`} 
                        alt={prod.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 text-transparent"
                      />
                      {/* Badge Top Left */}
                      <div className={`absolute top-3 left-3 px-2 py-1 text-[9px] font-bold rounded flex items-center gap-1 shadow-sm
                        ${prod.badge === 'Terverifikasi' ? 'bg-[#166534] text-white' : 
                          prod.badge === 'Paket' ? 'bg-[#7e22ce] text-white' : 
                          prod.badge === 'Fresh' ? 'bg-[#0284c7] text-white' : 
                          'bg-[#d97706] text-white'}`}
                      >
                        {prod.badge === 'Terverifikasi' && <ShieldCheck size={10} />}
                        {prod.badge}
                      </div>
                      
                      {/* Circle Icon Bottom Left */}
                      <div className="absolute -bottom-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-border-subtle text-text-muted shadow-sm z-10 group-hover:text-[#166534] transition-colors">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                           {/* Placeholder generic icon shape based on category */}
                           <circle cx="12" cy="12" r="10" />
                           <path d="M12 8v8M8 12h8" />
                         </svg>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 pt-8 flex-1 flex flex-col">
                      <h3 className="font-bold text-text-primary leading-tight mb-1">{prod.title}</h3>
                      <p className="text-[11px] text-text-secondary mb-3 flex items-center gap-1">
                        {prod.category} {prod.spec && <span className="text-text-muted px-1">•</span>} {prod.spec}
                      </p>
                      
                      <div className="flex items-center gap-1.5 text-[10px] text-text-muted mb-4">
                        <Package size={12} /> {prod.weight}
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        <div>
                          <p className="font-bold text-text-primary text-base">{prod.price}</p>
                          <p className="text-[9px] text-text-muted mt-1 flex items-center gap-1">
                            <MapPin size={10} /> {prod.location}
                          </p>
                        </div>
                        <button className="w-8 h-8 rounded bg-[#166534]/10 text-[#166534] flex items-center justify-center hover:bg-[#166534] hover:text-white transition-colors shrink-0">
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
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

      {/* 4. BOTTOM SECTIONS */}
      <section className="bg-white border-t border-border-subtle py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col xl:flex-row gap-12">
            
            {/* Belanja Mudah Steps */}
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-text-primary mb-8">Belanja Mudah di Dombantara Market</h3>
              
              <div className="flex flex-col sm:flex-row justify-between items-start relative gap-y-8">
                {/* Connecting Line Desktop */}
                <div className="hidden sm:block absolute top-6 left-12 right-12 h-px bg-border-strong -z-10"></div>
                
                {[
                  { num: 1, icon: Search, title: "Pilih Produk", desc: "Temukan produk sesuai kebutuhan Anda menggunakan filter." },
                  { num: 2, icon: Headset, title: "Konsultasi", desc: "Hubungi kami untuk konsultasi dan konfirmasi ketersediaan." },
                  { num: 3, icon: FileText, title: "Checkout", desc: "Lengkapi data dan pilih metode pengiriman yang tersedia." },
                  { num: 4, icon: CreditCard, title: "Pembayaran", desc: "Lakukan pembayaran dengan metode yang aman dan mudah." },
                  { num: 5, icon: Truck, title: "Pengiriman", desc: "Pesanan dikirim dengan aman ke alamat yang Anda tuju." },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center w-full sm:w-32 relative">
                    <div className="w-12 h-12 rounded-full bg-white text-[#166534] border border-[#166534]/30 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                      <step.icon size={20} strokeWidth={1.5} />
                      <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-surface border border-border-subtle text-[9px] font-bold flex items-center justify-center text-text-secondary">{step.num}</div>
                    </div>
                    <h4 className="font-bold text-xs text-text-primary mb-2">{step.title}</h4>
                    <p className="text-[9px] text-text-muted leading-relaxed">{step.desc}</p>
                    
                    {/* Arrow desktop */}
                    {idx !== 4 && <div className="hidden sm:block absolute top-4 -right-6 text-border-strong bg-white px-1">
                      <ArrowRight size={14} />
                    </div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="xl:w-[400px] shrink-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl text-text-primary">Metode Pembayaran</h3>
                <span className="text-xs font-bold text-[#166534] cursor-pointer">Lihat Semua</span>
              </div>
              
              <div className="grid grid-cols-4 gap-3 opacity-60">
                {/* Fake Logos for banks/payments */}
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-800">BCA</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-yellow-500">mandiri</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-600">BRI</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-orange-600">BNI</div>
                
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-500">gopay</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-purple-600">OVO</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-400">DANA</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-orange-500">ShopeePay</div>
                
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-900 italic">VISA</div>
                <div className="h-10 border border-border-subtle rounded-lg flex items-center justify-center text-[10px] font-bold text-red-600">MasterCard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="text-text-muted shrink-0"><ShieldCheck size={24} strokeWidth={1.5}/></div>
              <div>
                <h4 className="font-bold text-xs text-text-primary mb-1">Keamanan Transaksi</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Transaksi aman dengan sistem pembayaran terpercaya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
