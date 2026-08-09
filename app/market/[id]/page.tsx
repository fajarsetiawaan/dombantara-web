"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star, 
  Share2, 
  Heart, 
  Minus, 
  Plus, 
  ShoppingCart,
  ShieldCheck,
  X,
  CreditCard,
  MessageCircle,
  Ticket
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// Dummy data (in a real app, this would be fetched from API)
const productDetails = {
  id: 1,
  title: "Domba Garut Premium Siap Qurban (Tanduk Mewah)",
  rating: 4.8,
  sold: 1250,
  reviews: 342,
  price: 4750000,
  formattedPrice: "Rp 4.750.000",
  description: "Domba Garut kualitas premium hasil peternakan organik Dombantara. Memiliki tanduk mewah melingkar, bulu lebat, dan postur gagah. Sangat cocok untuk Qurban, Aqiqah, atau kontes ketangkasan. Hewan dijamin sehat, bebas penyakit, dan dirawat dengan pakan bernutrisi tinggi (silase jagung dan konsentrat khusus).",
  images: [
    "1484557985045-edf25e08da73",
    "1516467508483-a7212febe31a",
    "1500595046643-32f8832a832e"
  ],
  specs: {
    "Kategori": "Domba Qurban",
    "Usia": "10-12 Bulan",
    "Berat Badan": "40 - 45 kg",
    "Jenis Kelamin": "Jantan",
    "Kesehatan": "Bersertifikat Sehat",
    "Pengiriman": "Tersedia ke 20+ Kota"
  },
  shopInfo: {
    name: "Dombantara Farm (Pusat)",
    location: "Bandung, Jawa Barat",
    avatar: "1599305090598-fe179d501227"
  }
};

export default function ProductDetailPage() {
  const [qty, setQty] = useState(1);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [activePaymentCategory, setActivePaymentCategory] = useState("va");

  const subtotal = productDetails.price * qty;

  return (
    <main className="min-h-screen bg-surface flex flex-col">
      <Header theme="light" />

      <div className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[11px] lg:text-xs text-text-muted mb-6">
            <Link href="/" className="hover:text-[#166534]">Beranda</Link>
            <ChevronRight size={12} />
            <Link href="/market" className="hover:text-[#166534]">Market</Link>
            <ChevronRight size={12} />
            <span className="text-text-primary">Domba Garut Premium</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* LEFT: Image Gallery */}
            <div className="w-full lg:w-[350px] shrink-0">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle aspect-square mb-3 relative group">
                <img 
                  src={`https://images.unsplash.com/photo-${productDetails.images[activeImage]}?auto=format&fit=crop&q=80&w=800`} 
                  alt={productDetails.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {productDetails.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${activeImage === idx ? 'border-[#166534]' : 'border-transparent hover:border-border-subtle'}`}
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${img}?auto=format&fit=crop&q=80&w=150`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Ulasan Pembeli */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4 text-text-primary flex items-center justify-between">
                  Ulasan Pembeli
                  <span className="text-sm font-normal text-[#166534] hover:underline cursor-pointer">Lihat Semua</span>
                </h3>

                {/* Rating Summary Box */}
                <div className="border border-border-subtle rounded-xl p-6 bg-white shadow-sm mb-6 flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex items-end gap-2 mb-2">
                      <Star size={36} className="fill-yellow-400 text-yellow-400 -mt-1" />
                      <span className="font-display font-bold text-4xl leading-none text-text-primary">5.0</span>
                      <span className="text-text-muted font-bold text-lg leading-none mb-0.5">/ 5.0</span>
                    </div>
                    <p className="font-bold text-sm text-text-primary mb-1">100% pembeli merasa puas</p>
                    <p className="text-xs text-text-muted">167 rating • 124 ulasan</p>
                  </div>

                  <div className="w-full flex flex-col gap-1.5 border-t border-border-subtle pt-6">
                    {[
                      { star: 5, count: 164, pct: 98 },
                      { star: 4, count: 3, pct: 2 },
                      { star: 3, count: 0, pct: 0 },
                      { star: 2, count: 0, pct: 0 },
                      { star: 1, count: 0, pct: 0 },
                    ].map((row) => (
                      <div key={row.star} className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1 w-6 text-text-secondary shrink-0">
                          <Star size={10} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{row.star}</span>
                        </div>
                        <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                          <div className="h-full bg-[#166534] rounded-full" style={{ width: `${row.pct}%` }}></div>
                        </div>
                        <div className="w-10 text-right text-text-muted">({row.count})</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Mock Review 1 */}
                  <div className="border border-border-subtle rounded-xl p-4 bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full object-cover border border-border-subtle" />
                      <div>
                        <p className="font-bold text-sm text-text-primary">Budi Santoso</p>
                        <div className="flex text-yellow-400 mt-0.5">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-current" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">Dombanya sangat gagah dan sehat. Pengiriman cepat sampai tujuan dengan aman. Sangat cocok untuk kurban tahun ini.</p>
                    <p className="text-[10px] text-text-muted mt-2">2 hari lalu • Varian: Premium</p>
                  </div>
                  
                  {/* Mock Review 2 */}
                  <div className="border border-border-subtle rounded-xl p-4 bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full object-cover border border-border-subtle" />
                      <div>
                        <p className="font-bold text-sm text-text-primary">Andi Saputra</p>
                        <div className="flex text-yellow-400 mt-0.5">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-current" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">Mantap! Sesuai dengan deskripsi dan foto. Sangat memuaskan belanja ternak di sini, sangat profesional.</p>
                    <p className="text-[10px] text-text-muted mt-2">1 minggu lalu • Varian: Standar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: Product Details */}
            <div className="flex-1 min-w-0 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-border-subtle">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1 className="text-xl lg:text-2xl font-bold text-text-primary leading-snug">
                  {productDetails.title}
                </h1>
                <div className="flex gap-2 shrink-0">
                  <button className="w-10 h-10 rounded-full bg-surface text-text-secondary flex items-center justify-center hover:text-[#166534] hover:bg-[#166534]/10 transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-surface text-text-secondary flex items-center justify-center hover:text-red-500 hover:bg-red-50 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-text-secondary mb-6">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-text-primary underline">{productDetails.rating}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-border-subtle"></div>
                <span className="underline">{productDetails.reviews} Penilaian</span>
                <div className="w-1 h-1 rounded-full bg-border-subtle"></div>
                <span>{productDetails.sold}+ Terjual</span>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-display font-bold text-[#166534]">
                  {productDetails.formattedPrice}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs font-bold text-white bg-red-500 px-1.5 py-0.5 rounded">-5%</span>
                  <span className="text-sm text-text-muted line-through">Rp 5.000.000</span>
                </div>
              </div>

              <div className="border-t border-b border-border-subtle py-6 mb-6">
                <h3 className="font-bold text-text-primary mb-4">Pilih Varian (opsional)</h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg border-2 border-[#166534] text-[#166534] font-bold text-sm bg-[#166534]/5">Standar</button>
                  <button className="px-4 py-2 rounded-lg border border-border-subtle text-text-secondary font-medium text-sm hover:border-text-muted">Premium (+Rp 500rb)</button>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-text-primary mb-4 text-lg">Spesifikasi Lengkap</h3>
                <div className="grid grid-cols-1 gap-y-3 gap-x-8 text-sm mb-6">
                  {Object.entries(productDetails.specs).map(([key, value]) => (
                    <div key={key} className="flex border-b border-border-subtle pb-2">
                      <span className="w-1/3 text-text-muted">{key}</span>
                      <span className="w-2/3 font-medium text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="font-bold text-text-primary mb-3">Detail Produk</h4>
                <p className="text-text-secondary leading-relaxed">
                  {productDetails.description}
                </p>
              </div>



            </div>

            {/* RIGHT: Sticky Checkout Box */}
            <div className="w-full lg:w-[320px] shrink-0 sticky top-28 hidden lg:block">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                <h3 className="font-bold text-text-primary mb-4">Atur Jumlah & Catatan</h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border border-border-subtle rounded-lg">
                    <button 
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-8 h-8 flex items-center justify-center text-text-secondary hover:bg-surface rounded-l-lg transition-colors disabled:opacity-50"
                      disabled={qty <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <input 
                      type="text" 
                      value={qty}
                      readOnly
                      className="w-12 h-8 text-center font-bold text-sm bg-transparent border-none focus:ring-0"
                    />
                    <button 
                      onClick={() => setQty(qty + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#166534] hover:bg-[#166534]/10 rounded-r-lg transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-xs text-text-muted">Tersedia: <strong>14</strong></span>
                </div>

                <div className="mb-3">
                  <input 
                    type="text" 
                    placeholder="Tambahkan catatan (opsional)" 
                    className="w-full bg-surface border border-border-subtle rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-center border border-border-subtle rounded-lg overflow-hidden bg-surface focus-within:border-[#166534] focus-within:ring-1 focus-within:ring-[#166534] transition-all">
                    <div className="pl-3 pr-2 text-text-muted">
                      <Ticket size={16} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Masukkan promo" 
                      className="w-full bg-transparent py-2 text-sm focus:outline-none border-none"
                    />
                    <button className="px-4 py-2 h-full text-[#166534] text-xs font-bold hover:bg-[#166534]/5 transition-colors border-l border-border-subtle">
                      Klaim
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-text-secondary">Subtotal</span>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] text-white bg-red-500 px-1 rounded font-bold">-5%</span>
                      <span className="text-xs text-text-muted line-through">Rp {(subtotal + (qty * 250000)).toLocaleString('id-ID')}</span>
                    </div>
                    <span className="font-bold text-lg text-text-primary">
                      Rp {(subtotal).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => alert("Berhasil! Produk telah ditambahkan ke keranjang Anda.")}
                    className="w-full py-3 rounded-xl bg-[#166534] text-white font-bold text-sm hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} /> Masukkan Keranjang
                  </button>
                  <Link 
                    href="/keranjang"
                    className="w-full py-3 rounded-xl bg-white border-2 border-[#166534] text-[#166534] font-bold text-sm hover:bg-[#166534]/5 transition-all flex items-center justify-center"
                  >
                    Beli Langsung
                  </Link>
                </div>
                
                {/* Secondary Actions */}
                <div className="flex items-center justify-center gap-4 mt-5 text-text-primary font-bold text-[13px]">
                  <button className="flex items-center gap-1.5 hover:text-[#166534] transition-colors">
                    <MessageCircle size={16} /> Chat
                  </button>
                  <div className="w-[1px] h-4 bg-border-subtle"></div>
                  <button className="flex items-center gap-1.5 hover:text-[#166534] transition-colors">
                    <Heart size={16} /> Wishlist
                  </button>
                  <div className="w-[1px] h-4 bg-border-subtle"></div>
                  <button className="flex items-center gap-1.5 hover:text-[#166534] transition-colors">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-subtle p-4 z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => alert("Berhasil! Produk telah ditambahkan ke keranjang Anda.")}
          className="flex-1 py-3 rounded-xl border border-[#166534] text-[#166534] font-bold bg-white flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
        </button>
        <button 
          onClick={() => setIsCheckoutModalOpen(true)}
          className="flex-[2] py-3 rounded-xl bg-[#166534] text-white font-bold shadow-sm"
        >
          Beli Sekarang
        </button>
      </div>

      {/* XENDIT CHECKOUT MODAL MOCK */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#0e2a47] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard size={20} className="text-[#00e1ff]" />
                <span className="font-bold text-lg">Secure Payment</span>
              </div>
              <button 
                onClick={() => setIsCheckoutModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-center text-text-secondary text-sm mb-1">Total Pembayaran</p>
              <p className="text-center font-display font-bold text-3xl text-text-primary mb-6">
                Rp {(subtotal).toLocaleString('id-ID')}
              </p>

              <div className="bg-surface border border-border-subtle rounded-xl p-4 mb-6 text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-text-secondary">Merchant</span>
                  <span className="font-bold text-text-primary">Dombantara App</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-text-secondary">Order ID</span>
                  <span className="font-mono text-text-primary">DMB-{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Produk</span>
                  <span className="text-text-primary truncate ml-4 text-right">{qty}x {productDetails.title}</span>
                </div>
              </div>

              <div className="mb-6 max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* VIRTUAL ACCOUNT */}
                <button 
                  onClick={() => setActivePaymentCategory(activePaymentCategory === "va" ? "" : "va")}
                  className="w-full flex items-center justify-between py-3 border-b border-border-subtle text-left group"
                >
                  <p className="font-bold text-text-primary text-sm">Virtual Account</p>
                  {activePaymentCategory === "va" ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
                </button>
                {activePaymentCategory === "va" && (
                  <div className="space-y-2.5 mt-3 mb-4">
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">BCA</div>
                        <span className="font-medium text-sm">BCA Virtual Account</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#0B5599] rounded flex items-center justify-center text-white text-[10px] font-bold">MDR</div>
                        <span className="font-medium text-sm">Mandiri Virtual Account</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#F15A23] rounded flex items-center justify-center text-white text-[10px] font-bold">BNI</div>
                        <span className="font-medium text-sm">BNI Virtual Account</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                  </div>
                )}

                {/* MOBILE BANKING */}
                <button 
                  onClick={() => setActivePaymentCategory(activePaymentCategory === "mb" ? "" : "mb")}
                  className="w-full flex items-center justify-between py-3 border-b border-border-subtle text-left group"
                >
                  <p className="font-bold text-text-primary text-sm">Mobile Banking</p>
                  {activePaymentCategory === "mb" ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
                </button>
                {activePaymentCategory === "mb" && (
                  <div className="space-y-2.5 mt-3 mb-4">
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">m-BCA</div>
                        <span className="font-medium text-sm">BCA Mobile</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#0B5599] rounded flex items-center justify-center text-white text-[10px] font-bold">Livin&apos;</div>
                        <span className="font-medium text-sm">Livin&apos; by Mandiri</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                  </div>
                )}

                {/* ATM TRANSFER */}
                <button 
                  onClick={() => setActivePaymentCategory(activePaymentCategory === "atm" ? "" : "atm")}
                  className="w-full flex items-center justify-between py-3 border-b border-border-subtle text-left group"
                >
                  <p className="font-bold text-text-primary text-sm">ATM Transfer</p>
                  {activePaymentCategory === "atm" ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
                </button>
                {activePaymentCategory === "atm" && (
                  <div className="space-y-2.5 mt-3 mb-4">
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-slate-400 rounded flex items-center justify-center text-white text-[10px] font-bold">ATM</div>
                        <span className="font-medium text-sm">Transfer ATM (Semua Bank)</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                  </div>
                )}

                {/* E-WALLET & QRIS */}
                <button 
                  onClick={() => setActivePaymentCategory(activePaymentCategory === "ewallet" ? "" : "ewallet")}
                  className="w-full flex items-center justify-between py-3 border-b border-border-subtle text-left group"
                >
                  <p className="font-bold text-text-primary text-sm">E-Wallet & QRIS</p>
                  {activePaymentCategory === "ewallet" ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
                </button>
                {activePaymentCategory === "ewallet" && (
                  <div className="space-y-2.5 mt-3 mb-2">
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#4C3494] rounded flex items-center justify-center text-white text-[10px] font-bold">OVO</div>
                        <span className="font-medium text-sm">OVO</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#118EE9] rounded flex items-center justify-center text-white text-[10px] font-bold">DANA</div>
                        <span className="font-medium text-sm">DANA</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:border-[#0e2a47] hover:bg-slate-50 transition-colors text-left group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-[#00A550] rounded flex items-center justify-center text-white text-[10px] font-bold">Qris</div>
                        <span className="font-medium text-sm">QRIS (Gopay, ShopeePay, dll)</span>
                      </div>
                      <ChevronRight size={16} className="text-text-muted group-hover:text-[#0e2a47]" />
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  alert("Ini adalah simulasi integrasi Xendit. Di tahap produksi, ini akan memanggil API Xendit untuk membuat Invoice.");
                  setIsCheckoutModalOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-[#0e2a47] text-white font-bold hover:bg-[#091b2f] transition-colors"
              >
                Simulasikan Pembayaran
              </button>
              
              <div className="text-center mt-4 text-[10px] text-text-muted flex items-center justify-center gap-1">
                <ShieldCheck size={12} />
                Secured by Xendit Payment Gateway
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
