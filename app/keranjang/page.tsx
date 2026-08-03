"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Trash2, 
  Minus, 
  Plus, 
  TicketPercent, 
  ChevronRight, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  Lock,
  ShoppingCart,
  Truck,
  CreditCard,
  CheckSquare,
  Award,
  Headphones,
  Tag
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// Mock Data
const initialCartItems = [
  {
    id: 1,
    title: "Domba Garut Premium",
    image: "1511117833895-4b473c0b85d6",
    specs: "25 - 35 Kg • Jantan • 1 - 2 Tahun",
    price: 3250000,
    qty: 1,
    selected: true,
  },
  {
    id: 2,
    title: "Kambing Etawa Premium",
    image: "1524024973434-c3dd717a61d6",
    specs: "20 - 30 Kg • Jantan • 1 - 2 Tahun",
    price: 2850000,
    qty: 1,
    selected: true,
  },
  {
    id: 3,
    title: "Sapi Limousin",
    image: "1570044569429-161b96a86c67",
    specs: "300 - 400 Kg • Jantan • 2 - 3 Tahun",
    price: 28500000,
    qty: 1,
    selected: true,
  }
];

export default function KeranjangPage() {
  const [items, setItems] = useState(initialCartItems);

  // Handlers
  const handleQtyChange = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const handleToggleSelect = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
  };

  const handleToggleSelectAll = () => {
    const allSelected = items.length > 0 && items.every(item => item.selected);
    setItems(items.map(item => ({ ...item, selected: !allSelected })));
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleDeleteSelected = () => {
    setItems(items.filter(item => !item.selected));
  };

  const selectedItems = items.filter(item => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const allSelected = items.length > 0 && items.every(item => item.selected);

  return (
    <main className="min-h-screen bg-[#F5F7FA] flex flex-col">
      <Header theme="light" />

      <div className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-[#0e2a47] mb-2">Keranjang Belanja</h1>
              <div className="flex items-center gap-1.5 text-sm text-[#166534] font-medium">
                <ShieldCheck size={16} />
                <span>Semua transaksi aman & terpercaya</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-[10px] sm:text-xs font-bold text-text-secondary">
              <div className="flex items-center gap-2"><Award size={18} className="text-[#166534]" /> Hewan Berkualitas</div>
              <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#166534]" /> Proses Syariah</div>
              <div className="flex items-center gap-2"><Truck size={18} className="text-[#166534]" /> Pengiriman Aman</div>
              <div className="flex items-center gap-2"><Headphones size={18} className="text-[#166534]" /> Layanan Profesional</div>
            </div>
          </div>

          {/* Stepper */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle mb-8 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px]">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#166534] text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#0e2a47] text-sm"><ShoppingCart size={14} /> Keranjang</div>
                  <div className="text-xs text-text-muted mt-0.5">Review produk</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 2 */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-surface text-text-secondary flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-text-secondary text-sm"><Truck size={14} /> Pengiriman</div>
                  <div className="text-xs text-text-muted mt-0.5">Pilih lokasi & metode</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 3 */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-surface text-text-secondary flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-text-secondary text-sm"><CreditCard size={14} /> Pembayaran</div>
                  <div className="text-xs text-text-muted mt-0.5">Pilih metode pembayaran</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 4 */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-surface text-text-secondary flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-text-secondary text-sm"><CheckSquare size={14} /> Konfirmasi</div>
                  <div className="text-xs text-text-muted mt-0.5">Pesanan diproses</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: CART ITEMS */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {/* Select All Bar */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-border-subtle flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${allSelected ? 'bg-[#166534] border-[#166534] text-white' : 'border-slate-300 bg-white group-hover:border-[#166534]'}`}>
                    {allSelected && <CheckCircle2 size={14} className="fill-current text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={allSelected} onChange={handleToggleSelectAll} />
                  <span className="font-bold text-sm text-[#0e2a47]">Pilih Semua ({items.length})</span>
                </label>
                <button 
                  onClick={handleDeleteSelected}
                  disabled={selectedItems.length === 0}
                  className={`text-sm font-bold transition-colors ${selectedItems.length > 0 ? 'text-red-500 hover:text-red-700' : 'text-text-muted'}`}
                >
                  Hapus yang dipilih
                </button>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-2xl shadow-sm border border-border-subtle overflow-hidden flex flex-col divide-y divide-border-subtle">
                {items.length === 0 ? (
                  <div className="p-12 text-center text-text-muted font-medium">
                    Keranjang Anda masih kosong. Mari mulai berbelanja!
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                      {/* Checkbox */}
                      <label className="pt-2 cursor-pointer group shrink-0">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${item.selected ? 'bg-[#166534] border-[#166534] text-white' : 'border-slate-300 bg-white group-hover:border-[#166534]'}`}>
                          {item.selected && <CheckCircle2 size={14} className="fill-current text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={item.selected} onChange={() => handleToggleSelect(item.id)} />
                      </label>
                      
                      {/* Image */}
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0">
                        <img 
                          src={`https://images.unsplash.com/photo-${item.image}?auto=format&fit=crop&q=80&w=300`} 
                          className="w-full h-full object-cover"
                          alt={item.title}
                        />
                      </div>

                      {/* Details & Controls Flex Container */}
                      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                        
                        {/* Details */}
                        <div className="flex flex-col justify-start">
                          <h3 className="font-bold text-[#0e2a47] text-sm sm:text-base leading-snug mb-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-text-secondary mb-2">{item.specs}</p>
                          <div className="inline-flex items-center gap-1 bg-[#166534]/10 text-[#166534] px-2 py-0.5 rounded text-[10px] font-bold self-start">
                            <ShieldCheck size={12} /> Kualitas Premium
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex flex-col justify-between items-start sm:items-end sm:min-w-[120px]">
                          <p className="font-bold text-[#166534] text-sm sm:text-base">
                            Rp {item.price.toLocaleString('id-ID')}
                          </p>
                          
                          <div className="flex items-center gap-4 mt-4 sm:mt-auto">
                            <button 
                              onClick={() => handleDelete(item.id)}
                              className="text-text-muted hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                            <div className="flex items-center border border-border-subtle rounded-lg bg-white overflow-hidden shadow-sm">
                              <button 
                                onClick={() => handleQtyChange(item.id, -1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-surface text-text-secondary transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <input 
                                type="text" 
                                value={item.qty}
                                readOnly
                                className="w-7 h-7 text-center font-bold text-xs bg-transparent border-none p-0 focus:ring-0 text-[#0e2a47]"
                              />
                              <button 
                                onClick={() => handleQtyChange(item.id, 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-surface text-[#166534] transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Voucher Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-border-subtle flex items-center justify-between mt-2 cursor-pointer hover:border-[#166534] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#166534]">
                    <TicketPercent size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0e2a47] text-sm">Punya kode voucher?</h3>
                    <p className="text-xs text-text-secondary mt-0.5">Gunakan untuk mendapatkan potongan harga</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-bold text-sm text-[#166534] group-hover:translate-x-1 transition-transform">
                  Masukkan kode <ChevronRight size={16} />
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle sticky top-28">
                <h2 className="font-bold text-lg text-[#0e2a47] mb-6">Ringkasan Pesanan</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Subtotal ({selectedItems.length} item)</span>
                    <span className="font-bold text-[#0e2a47]">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Ongkir</span>
                    <span className="font-bold text-[#166534]">Gratis</span>
                  </div>
                </div>

                <div className="border-t border-border-subtle pt-6 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0e2a47]">Total</span>
                    <span className="font-display font-bold text-2xl text-[#166534]">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* Free Shipping Banner */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <ShieldCheck className="text-[#166534] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-sm text-[#166534]">Anda menghemat ongkir</h4>
                    <p className="text-xs text-emerald-700 mt-1">Selamat! Anda mendapatkan gratis ongkir.</p>
                  </div>
                  <span className="text-2xl ml-auto">🎉</span>
                </div>

                {/* Actions */}
                <div className="space-y-3 mb-8">
                  <button 
                    onClick={() => alert("Halaman Lanjut ke Pengiriman akan diimplementasikan pada tahap selanjutnya.")}
                    disabled={selectedItems.length === 0}
                    className="w-full py-3.5 rounded-xl bg-[#166534] text-white font-bold hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Lock size={16} /> Lanjut ke Pengiriman <ArrowRight size={16} />
                  </button>
                  <Link href="/market" className="w-full py-3.5 rounded-xl bg-white border border-border-subtle text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center gap-2">
                    <ArrowLeft size={16} /> Belanja Lagi
                  </Link>
                </div>

                {/* Payment Methods */}
                <div>
                  <p className="text-xs font-bold text-text-muted mb-3">Metode Pembayaran</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-blue-600">BCA</div>
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-[#F15A23]">BNI</div>
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-[#0B5599]">BRI</div>
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-[#0B5599]">Mandiri</div>
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-red-600">CIMB NIAGA</div>
                    <div className="px-2 py-1 border border-border-subtle rounded bg-white text-[9px] font-bold text-[#00A550]">QRIS</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Trust Badges Footer Section (As in Mockup) */}
      <div className="bg-white border-t border-border-subtle py-12 mt-auto">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0e2a47] text-sm mb-1">100% Sesuai Syariat</h4>
                <p className="text-xs text-text-secondary leading-snug">Diproses sesuai syariat Islam</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0e2a47] text-sm mb-1">Kualitas Terjamin</h4>
                <p className="text-xs text-text-secondary leading-snug">Hewan pilihan & berkualitas</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                <Tag size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0e2a47] text-sm mb-1">Harga Transparan</h4>
                <p className="text-xs text-text-secondary leading-snug">Tidak ada biaya tersembunyi</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                <Headphones size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0e2a47] text-sm mb-1">Layanan Profesional</h4>
                <p className="text-xs text-text-secondary leading-snug">Tim kami siap membantu Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
