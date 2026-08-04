"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { 
  ChevronRight, 
  ShieldCheck, 
  Tag, 
  Truck, 
  ArrowRight,
  Search,
  ChevronDown,
  Heart,
  Headphones,
  Box,
  Droplet,
  HeartPulse,
  LayoutGrid,
  MoreHorizontal,
  ShoppingCart,
  Star
} from "lucide-react";

// Mock Data
const products = [
  {
    id: 1,
    title: "Pakan Domba Premium",
    categoryId: "pakan",
    weight: "20 Kg",
    desc: "Pakan lengkap dan seimbang untuk domba segala umur.",
    price: 195000,
    image: "/pakan.png",
    badge: "Terlaris",
  },
  {
    id: 2,
    title: "Konsentrat Domba",
    categoryId: "pakan",
    weight: "20 Kg",
    desc: "Meningkatkan pertumbuhan dan kualitas daging.",
    price: 175000,
    image: "/pakan.png",
  },
  {
    id: 3,
    title: "Pakan Kambing Complete",
    categoryId: "pakan",
    weight: "20 Kg",
    desc: "Nutrisi lengkap untuk kambing sehat dan aktif.",
    price: 185000,
    image: "/pakan.png",
    badge: "Promo",
  },
  {
    id: 4,
    title: "Pelet Hi-Protein",
    categoryId: "pakan",
    weight: "20 Kg",
    desc: "Tinggi protein untuk performa optimal.",
    price: 210000,
    image: "/pakan.png",
  },
  {
    id: 5,
    title: "Paket Breeding Domba",
    categoryId: "hewan",
    weight: "1 Jantan, 5 Betina",
    desc: "Paket indukan unggul siap kawin untuk memulai breeding.",
    price: 15000000,
    image: "1484557985045-edf25e08da73",
    badge: "Rekomendasi",
  },
  {
    id: 6,
    title: "Paket Fattening Domba",
    categoryId: "hewan",
    weight: "10 Ekor Bakalan",
    desc: "Paket domba bakalan siap penggemukan dengan prospek tinggi.",
    price: 12500000,
    image: "1484557985045-edf25e08da73",
  },
  {
    id: 7,
    title: "Paket Breeding Kambing",
    categoryId: "hewan",
    weight: "1 Jantan, 5 Betina",
    desc: "Paket indukan kambing Etawa berkualitas tinggi.",
    price: 18000000,
    image: "1484557985045-edf25e08da73",
  },
  {
    id: 8,
    title: "Paket Fattening Kambing",
    categoryId: "hewan",
    weight: "10 Ekor Bakalan",
    desc: "Paket kambing bakalan unggul untuk penggemukan cepat.",
    price: 14500000,
    image: "1484557985045-edf25e08da73",
  }
];

const categories = [
  { id: "hewan", label: "Bibit Ternak", desc: "Penyediaan hewan berkualitas mulai dari paket breeding hingga fattening.", icon: Box },
  { id: "pakan", label: "Pakan Ternak", desc: "Pakan berkualitas untuk mendukung pertumbuhan ternak yang sehat dan produktif.", icon: Box },
  { id: "vitamin", label: "Obat & Vitamin", desc: "Obat-obatan dan vitamin untuk menjaga imunitas dan kesehatan ternak.", icon: Droplet },
  { id: "obat", label: "Suplemen & Mineral", desc: "Suplemen dan mineral lengkap untuk performa maksimal.", icon: HeartPulse },
  { id: "kandang", label: "Kandang & Aksesoris", desc: "Peralatan kandang tangguh dan tahan lama untuk kenyamanan ternak.", icon: LayoutGrid },
  { id: "peralatan", label: "Peralatan Peternakan", desc: "Alat-alat esensial untuk memaksimalkan operasional harian peternakan.", icon: Box },
  { id: "layanan", label: "Layanan & Konsultasi", desc: "Layanan profesional dan konsultasi peternakan.", icon: Headphones },
  { id: "lainnya", label: "Lainnya", desc: "Berbagai kebutuhan pendukung lainnya.", icon: MoreHorizontal },
];

export default function LivestockSupplyPage() {
  const [activeTab, setActiveTab] = useState("hewan");

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[500px] flex items-center">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-2/3"></div>
          <img 
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80" 
            alt="Livestock Background" 
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
            <span className="text-[#F15A23]">Livestock Supply</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-[#0e2a47] mb-4">
                Livestock Supply
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-md">
                Kebutuhan lengkap untuk peternakan Anda. Kualitas terjamin, harga kompetitif.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-[10px] sm:text-xs font-bold text-text-secondary">
                <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#F15A23]" /> Kualitas Terjamin</div>
                <div className="flex items-center gap-2"><Tag size={18} className="text-[#F15A23]" /> Harga Kompetitif</div>
                <div className="flex items-center gap-2"><Truck size={18} className="text-[#F15A23]" /> Pengiriman Cepat</div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full max-w-sm">
              <div className="bg-[#F15A23] rounded-2xl p-6 shadow-xl text-white">
                <div className="flex items-start gap-4 mb-4">
                  <Truck size={32} className="opacity-90 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">Pengiriman ke Seluruh Indonesia</h3>
                    <p className="text-xs text-white/80">Aman, cepat, dan terpercaya</p>
                  </div>
                </div>
                <button className="w-full bg-white text-[#F15A23] hover:bg-orange-50 font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-6">
                  Lihat Info Pengiriman <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#F5F7FA] py-12 flex-1">
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* Categories Navigation */}
          <div className="bg-white rounded-2xl shadow-sm border border-border-subtle p-2 mb-12 overflow-x-auto">
            <div className="flex min-w-max">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex-1 flex flex-col items-center justify-center min-w-[150px] p-4 border-b-2 transition-all ${
                    activeTab === cat.id ? 'border-[#F15A23]' : 'border-transparent hover:border-border-subtle'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                    activeTab === cat.id ? 'bg-[#F15A23] text-white' : 'bg-surface text-text-secondary group-hover:bg-slate-100'
                  }`}>
                    <cat.icon size={24} />
                  </div>
                  <span className={`text-xs font-bold text-center ${
                    activeTab === cat.id ? 'text-[#F15A23]' : 'text-text-secondary'
                  }`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0e2a47] mb-2">{categories.find(c => c.id === activeTab)?.label}</h2>
              <p className="text-xs text-text-secondary">{categories.find(c => c.id === activeTab)?.desc}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Cari produk..." 
                  className="pl-9 pr-4 py-2 rounded-xl border border-border-subtle text-xs w-64 focus:outline-none focus:border-[#F15A23]"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle bg-white rounded-xl text-xs font-bold text-text-primary hover:bg-surface">
                Urutkan <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {products.filter(p => p.categoryId === activeTab).map((product) => (
              <Link href={`/market/${product.id}`} key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle flex flex-col group hover:shadow-lg hover:border-[#F15A23]/30 transition-all duration-300 h-full cursor-pointer block">
                {/* Image Area */}
                <div className="h-44 relative overflow-hidden bg-surface shrink-0">
                  <img 
                    src={product.image.startsWith('/') ? product.image : `https://images.unsplash.com/photo-${product.image}?auto=format&fit=crop&q=80&w=400`} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 text-transparent"
                  />
                </div>

                {/* Content Area */}
                <div className="p-2.5 flex flex-col gap-1.5 flex-1">
                  <h3 className="font-bold text-text-primary text-sm leading-snug line-clamp-2 group-hover:text-[#F15A23] transition-colors">
                    {product.badge && (
                      <span className="inline-flex items-center justify-center bg-[#F15A23] text-white text-[9px] font-bold px-1.5 rounded mr-1.5 align-middle leading-tight h-[16px]">
                        {product.badge}
                      </span>
                    )}
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 text-[11px] text-text-secondary">
                    <Star size={11} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">4.8</span>
                  </div>

                  <div className="flex flex-col mt-auto pt-1 gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-bold text-white bg-red-500 px-1 rounded leading-tight h-[14px] flex items-center">-5%</span>
                      <span className="text-[10px] text-text-muted line-through">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price * 1.05)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#F15A23] text-sm leading-tight">Rp {product.price.toLocaleString('id-ID')}</p>
                      <span className="text-[10px] text-text-muted">1rb+ terjual</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#F15A23] shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#0e2a47] mb-1">Produk Berkualitas</h4>
                <p className="text-[10px] text-text-secondary leading-relaxed">Hanya produk terbaik untuk ternak Anda.</p>
              </div>
            </div>
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#F15A23] shrink-0">
                <Tag size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#0e2a47] mb-1">Harga Terjangkau</h4>
                <p className="text-[10px] text-text-secondary leading-relaxed">Harga kompetitif untuk keuntungan maksimal.</p>
              </div>
            </div>
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#F15A23] shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#0e2a47] mb-1">Pengiriman Cepat</h4>
                <p className="text-[10px] text-text-secondary leading-relaxed">Kirim cepat dan aman ke seluruh Indonesia.</p>
              </div>
            </div>
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#F15A23] shrink-0">
                <Headphones size={20} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#0e2a47] mb-1">Layanan Konsultasi</h4>
                <p className="text-[10px] text-text-secondary leading-relaxed">Tim ahli siap membantu kebutuhan peternakan Anda.</p>
              </div>
            </div>
          </div>

          {/* Footer Consultant CTA */}
          <div className="bg-[#F15A23] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Headphones size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Butuh bantuan memilih produk yang tepat?</h3>
                <p className="text-sm text-white/80">Tim kami siap membantu Anda menemukan produk terbaik untuk peternakan Anda.</p>
              </div>
            </div>
            <button className="px-6 py-3.5 bg-white text-[#F15A23] rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shrink-0 flex items-center gap-2">
              Hubungi Konsultan <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
