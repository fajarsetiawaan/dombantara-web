"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Leaf, 
  Truck, 
  HeadphonesIcon,
  ShoppingCart,
  ChevronDown,
  Star,
  ChevronRight,
  Package,
  SlidersHorizontal,
  ChevronLeft
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { getProducts } from "@/lib/data-access/produk.service";
import type { Product } from "@/lib/types";

const CATEGORIES = [
  { name: "Semua Produk", icon: Package },
  { name: "Qurban", icon: Package },
  { name: "Aqiqah", icon: Package },
  { name: "Bibit Domba", icon: Leaf },
  { name: "Susu & Olahan", icon: Package },
  { name: "Karkas", icon: Package },
  { name: "Paket Bundle", icon: Package }
];

const BREEDS = ["Domba Garut", "Domba Merino", "Domba Texel", "Domba Dorper", "Domba Lokal"];

export default function ProdukPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("Semua Produk");
  
  // Filter States
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [maxWeight, setMaxWeight] = useState(80);
  const [selectedPrice, setSelectedPrice] = useState("Semua Harga");
  
  // Collapsible Sidebar State
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category Filter
      if (activeCategory !== "Semua Produk" && p.category !== activeCategory) return false;
      
      // Breed Filter
      if (selectedBreeds.length > 0 && p.breed && !selectedBreeds.includes(p.breed)) return false;
      
      // Weight Filter
      if (p.weightNum && p.weightNum > maxWeight) return false;
      
      // Price Filter
      if (selectedPrice === "< Rp 2.000.000" && p.price >= 2000000) return false;
      if (selectedPrice === "Rp 2.000.000 - Rp 4.000.000" && (p.price < 2000000 || p.price > 4000000)) return false;
      if (selectedPrice === "Rp 4.000.000 - Rp 6.000.000" && (p.price < 4000000 || p.price > 6000000)) return false;
      if (selectedPrice === "> Rp 6.000.000" && p.price <= 6000000) return false;

      return true;
    });
  }, [products, activeCategory, selectedBreeds, maxWeight, selectedPrice]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header theme="light" />
      
      <main className="pt-20">
        {/* Breadcrumb & Hero */}
        <div className="bg-white pb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=2000" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-10 relative z-10 pt-8">
            <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
              <Link href="/" className="hover:text-primary">Beranda</Link>
              <ChevronRight size={14} />
              <span className="text-text-primary font-medium">Produk</span>
            </div>

            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
                Produk Dombantara Untuk Kebutuhan Anda
              </h1>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Kami menyediakan domba dan produk olahan berkualitas premium dengan standar terbaik, sesuai syariat dan kebutuhan Anda.
              </p>

              <div className="flex flex-wrap gap-8">
                {[
                  { icon: ShieldCheck, text: "Kualitas Premium" },
                  { icon: Leaf, text: "Sesuai Syariat" },
                  { icon: Truck, text: "Pengiriman Amanah" },
                  { icon: HeadphonesIcon, text: "Layanan Terpercaya" }
                ].map((ft, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-surface text-primary flex items-center justify-center">
                      <ft.icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-text-primary text-center w-20">{ft.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="container mx-auto px-6 lg:px-10 -mt-6 relative z-20 mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-border-subtle flex overflow-x-auto hide-scrollbar gap-2">
            {CATEGORIES.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl whitespace-nowrap transition-all font-medium ${
                  activeCategory === cat.name 
                    ? "bg-[#0B301A] text-white shadow-md" 
                    : "text-text-muted hover:bg-surface hover:text-text-primary"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeCategory === cat.name ? 'bg-white/20' : 'bg-surface'}`}>
                  <cat.icon size={18} />
                </div>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-6 lg:px-10 pb-24 flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT SIDEBAR - FILTERS */}
          <motion.div 
            initial={false}
            animate={{ width: isSidebarExpanded ? 280 : 72 }}
            className="hidden lg:block shrink-0 relative bg-surface border border-border-subtle rounded-3xl h-fit overflow-hidden"
          >
            {/* Expanded View */}
            <div className={`p-6 w-[280px] transition-opacity duration-300 ${isSidebarExpanded ? 'opacity-100' : 'opacity-0 invisible absolute'}`}>
              <div className="flex items-center justify-between mb-8">
                <button 
                  onClick={() => setIsSidebarExpanded(false)} 
                  className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm hover:bg-primary/20 transition-all hover:scale-105"
                  title="Tutup Filter"
                >
                  <SlidersHorizontal size={20} />
                </button>
                <button 
                  onClick={() => { setSelectedBreeds([]); setMaxWeight(80); setSelectedPrice("Semua Harga"); }}
                  className="text-primary text-sm font-bold hover:underline"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center justify-between">Jenis Domba <ChevronDown size={16} /></h4>
                  <div className="space-y-3">
                {BREEDS.map((breed, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBreeds.includes(breed) ? 'bg-primary border-primary' : 'border-border-strong group-hover:border-primary'}`}>
                      {selectedBreeds.includes(breed) && <CheckIcon />}
                    </div>
                    <span className="text-sm text-text-primary">{breed}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-border-subtle pt-6">
              <h4 className="font-bold flex items-center justify-between">Berat Maksimal (kg) <ChevronDown size={16} /></h4>
              <input 
                type="range" 
                min="10" 
                max="80" 
                value={maxWeight} 
                onChange={(e) => setMaxWeight(parseInt(e.target.value))}
                className="w-full accent-primary" 
              />
              <div className="flex justify-between text-xs text-text-muted">
                <span>10 kg</span>
                <span>{maxWeight} kg</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-border-subtle pt-6">
              <h4 className="font-bold flex items-center justify-between">Harga <ChevronDown size={16} /></h4>
              <div className="space-y-3">
                {["Semua Harga", "< Rp 2.000.000", "Rp 2.000.000 - Rp 4.000.000", "Rp 4.000.000 - Rp 6.000.000", "> Rp 6.000.000"].map((price, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedPrice === price ? 'border-primary' : 'border-border-strong group-hover:border-primary'}`}>
                      {selectedPrice === price && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                    </div>
                    <span className="text-sm text-text-primary">{price}</span>
                  </label>
                ))}
              </div>
            </div>

              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                Terapkan Filter
              </button>
            </div>
            </div>

            {/* Collapsed View */}
            <div className={`flex flex-col items-center py-6 w-[72px] transition-opacity duration-300 ${!isSidebarExpanded ? 'opacity-100' : 'opacity-0 invisible absolute'}`}>
              <button 
                onClick={() => setIsSidebarExpanded(true)} 
                className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                title="Buka Filter"
              >
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - PRODUCT GRID */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <p className="text-text-muted font-medium">{filteredProducts.length} Produk ditemukan</p>
              <div className="flex items-center gap-2 text-sm bg-white px-4 py-2 rounded-lg border border-border-subtle shadow-sm cursor-pointer">
                Urutkan: Terpopuler <ChevronDown size={14} />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((prod, idx) => (
                    <Reveal index={idx % 10} key={prod.id}>
                      <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[1.5rem] border border-border-subtle hover:border-primary/30 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col h-full"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                          <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          
                          <div className="absolute top-4 left-4 flex gap-2">
                            {prod.badge && (
                              <span className="bg-[#0B301A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                {prod.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="font-bold text-lg mb-2 text-text-primary line-clamp-1">{prod.name}</h3>
                          <p className="text-sm text-text-muted mb-4 line-clamp-2">{prod.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                            {prod.weight && (
                              <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted bg-surface px-2.5 py-1 rounded-md">
                                <Package size={12} /> {prod.weight}
                              </span>
                            )}
                            {prod.age && (
                              <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted bg-surface px-2.5 py-1 rounded-md">
                                <Leaf size={12} /> {prod.age}
                              </span>
                            )}
                            {prod.volume && (
                              <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted bg-surface px-2.5 py-1 rounded-md">
                                <Package size={12} /> {prod.volume}
                              </span>
                            )}
                          </div>

                          <div className="font-display font-bold text-xl text-text-primary mb-5">
                            Rp {prod.price.toLocaleString('id-ID')}
                          </div>

                          <div className="flex gap-2">
                            <button className="flex-1 border border-border-strong text-text-primary font-bold py-2.5 rounded-xl hover:bg-surface transition-colors text-sm">
                              Lihat Detail
                            </button>
                            <button className="w-12 flex items-center justify-center bg-[#0B301A] text-white rounded-xl hover:bg-[#0B301A]/90 transition-colors shadow-md shrink-0">
                              <ShoppingCart size={18} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </Reveal>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!loading && filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="border border-border-strong bg-white px-8 py-3 rounded-full font-bold text-sm text-text-primary hover:bg-surface transition-colors shadow-sm flex items-center gap-2">
                  Muat Lebih Banyak <ChevronDown size={16} />
                </button>
              </div>
            )}
            
            {!loading && filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-text-muted mb-4">Tidak ada produk yang sesuai dengan filter.</p>
                <button onClick={() => { setSelectedBreeds([]); setMaxWeight(80); setSelectedPrice("Semua Harga"); }} className="text-primary font-bold underline">Reset Filter</button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Trust Signals */}
      <section className="bg-white py-16 border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Kualitas Terjamin", desc: "Hewan sehat, terawat, dan melalui seleksi ketat oleh tim profesional.", icon: ShieldCheck },
              { title: "Pengiriman Aman", desc: "Pengiriman cepat dan aman ke seluruh Indonesia.", icon: Truck },
              { title: "Sesuai Syariat", desc: "Proses sesuai syariat Islam dan diawasi oleh ahli.", icon: Leaf },
              { title: "Layanan 24/7", desc: "Tim kami siap membantu Anda kapan saja dan di mana saja.", icon: HeadphonesIcon }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Simple Carousel/Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-12">Dipercaya Ribuan Pelanggan</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { t: "Dombanya sehat, besar, dan sesuai syariat. Pengirimannya juga tepat waktu. Terima kasih Dombantara!", n: "Ahmad Fauzi", loc: "Jakarta" },
              { t: "Pelayanan sangat baik dan profesional. Dari konsultasi sampai pengiriman semuanya sangat memuaskan.", n: "Siti Aisyah", loc: "Bandung" },
              { t: "Sudah 3 tahun qurban di Dombantara. Selalu puas dengan kualitas dan layanannya. Recommended!", n: "Budi Santoso", loc: "Surabaya" }
            ].map((testi, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle">
                <p className="text-text-primary italic mb-6 leading-relaxed">&quot;{testi.t}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+11}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{testi.n}</h5>
                    <p className="text-xs text-text-muted">{testi.loc}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-status-warning mt-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 bg-white pb-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-[#2D452B] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
              <img src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D452B] to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Belum Menemukan yang Anda Cari?
              </h3>
              <p className="text-white/80 mb-8">
                Tim kami siap membantu Anda menemukan produk yang sesuai dengan kebutuhan Anda.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-surface transition-colors shadow-lg w-fit">
                Konsultasi via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
