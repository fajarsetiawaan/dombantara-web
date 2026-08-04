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
  Tag,
  MapPin,
  User,
  Phone,
  Edit2,
  ChevronUp,
  ChevronDown
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
  const [currentStep, setCurrentStep] = useState(1);
  const [saveAddress, setSaveAddress] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
              <h1 className="text-3xl font-display font-bold text-[#0e2a47] mb-2">
                {currentStep === 1 ? 'Keranjang Belanja' : currentStep === 2 ? 'Pengiriman' : currentStep === 3 ? 'Pembayaran' : 'Konfirmasi Pesanan'}
              </h1>
              {currentStep === 4 ? (
                <div className="text-sm text-text-secondary">
                  Periksa kembali detail pesanan Anda sebelum dilakukan
                </div>
              ) : currentStep === 3 ? (
                <div className="text-sm text-text-secondary">
                  Pilih metode pembayaran yang paling nyaman untuk Anda
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-sm text-[#166534] font-medium">
                  <ShieldCheck size={16} />
                  <span>Semua transaksi aman & terpercaya</span>
                </div>
              )}
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
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${currentStep > 1 ? 'bg-emerald-50 text-[#166534]' : 'bg-[#166534] text-white'}`}>
                  {currentStep > 1 ? <CheckCircle2 size={16} className="text-[#166534]" /> : '1'}
                </div>
                <div>
                  <div className={`flex items-center gap-1.5 font-bold text-sm ${currentStep > 1 ? 'text-text-secondary' : 'text-[#0e2a47]'}`}><ShoppingCart size={14} /> Keranjang</div>
                  <div className="text-xs text-text-muted mt-0.5">Review produk</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 2 */}
              <div className={`flex items-center gap-3 ${currentStep < 2 ? 'opacity-50' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${currentStep > 2 ? 'bg-emerald-50 text-[#166534]' : currentStep === 2 ? 'bg-[#166534] text-white' : 'bg-surface text-text-secondary'}`}>
                  {currentStep > 2 ? <CheckCircle2 size={16} className="text-[#166534]" /> : '2'}
                </div>
                <div>
                  <div className={`flex items-center gap-1.5 font-bold text-sm ${currentStep > 2 ? 'text-text-secondary' : currentStep === 2 ? 'text-[#0e2a47]' : 'text-text-secondary'}`}><Truck size={14} /> Pengiriman</div>
                  <div className="text-xs text-text-muted mt-0.5">Pilih lokasi & metode</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 3 */}
              <div className={`flex items-center gap-3 ${currentStep < 3 ? 'opacity-50' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${currentStep > 3 ? 'bg-emerald-50 text-[#166534]' : currentStep === 3 ? 'bg-[#166534] text-white' : 'bg-surface text-text-secondary'}`}>
                  {currentStep > 3 ? <CheckCircle2 size={16} className="text-[#166534]" /> : '3'}
                </div>
                <div>
                  <div className={`flex items-center gap-1.5 font-bold text-sm ${currentStep > 3 ? 'text-text-secondary' : currentStep === 3 ? 'text-[#0e2a47]' : 'text-text-secondary'}`}><CreditCard size={14} /> Pembayaran</div>
                  <div className="text-xs text-text-muted mt-0.5">Pilih metode pembayaran</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-border-subtle mx-4"></div>
              {/* Step 4 */}
              <div className={`flex items-center gap-3 ${currentStep < 4 ? 'opacity-50' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 4 ? 'bg-[#166534] text-white' : 'bg-surface text-text-secondary'}`}>4</div>
                <div>
                  <div className={`flex items-center gap-1.5 font-bold text-sm ${currentStep >= 4 ? 'text-[#0e2a47]' : 'text-text-secondary'}`}><CheckSquare size={14} /> Konfirmasi</div>
                  <div className="text-xs text-text-muted mt-0.5">Pesanan diproses</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: MAIN CONTENT */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {currentStep === 1 ? (
                <>
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
                </>
              ) : currentStep === 2 ? (
                <div className="space-y-6">
                  {/* PENGIRIMAN FORM */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    
                    {/* SAVED ADDRESSES */}
                    <div className="mb-8">
                      <p className="text-xs font-bold text-text-secondary mb-4">Pilih alamat tersimpan</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Saved Address Card */}
                        <label className="border border-[#166534] bg-emerald-50/20 rounded-xl p-4 cursor-pointer relative transition-all block">
                          <div className="absolute top-4 left-4">
                            <CheckCircle2 size={18} className="fill-[#166534] text-white" />
                          </div>
                          <div className="pl-8">
                            <div className="inline-block bg-emerald-100 text-[#166534] text-[9px] font-bold px-2 py-0.5 rounded mb-2">
                              UTAMA
                            </div>
                            <h4 className="font-bold text-[#0e2a47] text-sm mb-1">Andi Wijaya</h4>
                            <p className="text-xs text-text-secondary mb-2">0812-3456-7890</p>
                            <p className="text-xs text-text-secondary leading-relaxed mb-4">
                              Jl. Raya Cileunyi No. 123, Cileunyi, Kec. Cileunyi,<br/>
                              Kab. Bandung, Jawa Barat 40622
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle rounded-lg text-xs font-bold text-[#166534] hover:bg-emerald-50 transition-colors">
                                <Edit2 size={12} /> Ubah
                              </button>
                              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle rounded-lg text-xs font-bold text-red-500 hover:bg-red-50 transition-colors">
                                <Trash2 size={12} /> Hapus
                              </button>
                            </div>
                          </div>
                        </label>

                        {/* Add New Address Card */}
                        <button className="border border-dashed border-border-subtle hover:border-[#166534] rounded-xl p-4 flex flex-col items-center justify-center text-text-muted hover:text-[#166534] hover:bg-emerald-50/30 transition-all h-full min-h-[160px]">
                          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center mb-3">
                            <Plus size={20} />
                          </div>
                          <span className="text-sm font-bold">Tambah Alamat Baru</span>
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-border-subtle pt-6 relative">
                      <span className="absolute top-0 left-0 -mt-2.5 bg-white pr-3 text-[11px] font-bold text-text-muted">Atau masukkan alamat baru</span>
                      
                      <h2 className="font-bold text-lg text-[#0e2a47] mb-6 flex items-center gap-2 mt-4">
                        <User size={20} className="text-[#166534]" /> Informasi Penerima
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-secondary mb-2">Nama Lengkap</label>
                        <input type="text" placeholder="Masukkan nama penerima" className="w-full border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#166534]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-secondary mb-2">Nomor WhatsApp</label>
                        <input type="tel" placeholder="Contoh: 08123456789" className="w-full border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#166534]" />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    <h2 className="font-bold text-lg text-[#0e2a47] mb-6 flex items-center gap-2">
                      <MapPin size={20} className="text-[#166534]" /> Alamat Pengiriman
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-text-secondary mb-2">Provinsi</label>
                          <select className="w-full border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#166534] bg-white appearance-none">
                            <option value="">Pilih Provinsi</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-text-secondary mb-2">Kota/Kabupaten</label>
                          <select className="w-full border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#166534] bg-white appearance-none">
                            <option value="">Pilih Kota/Kab</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Garut">Garut</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-secondary mb-2">Detail Alamat (Jalan, RT/RW, Patokan)</label>
                        <textarea rows={3} placeholder="Contoh: Jl. Diponegoro No. 22, RT 01/RW 02, Rumah pagar hitam" className="w-full border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#166534] resize-none"></textarea>
                      </div>

                      <label className="flex items-center gap-3 cursor-pointer group pt-2">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${saveAddress ? 'bg-[#166534] border-[#166534] text-white' : 'border-slate-300 bg-white group-hover:border-[#166534]'}`}>
                          {saveAddress && <CheckCircle2 size={14} className="fill-current text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={saveAddress} onChange={() => setSaveAddress(!saveAddress)} />
                        <span className="text-sm font-bold text-[#0e2a47]">Simpan untuk menjadi alamat utama</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    <h2 className="font-bold text-lg text-[#0e2a47] mb-6 flex items-center gap-2">
                      <Truck size={20} className="text-[#166534]" /> Metode Pengiriman
                    </h2>
                    <div className="flex flex-col gap-3">
                      
                      {/* Ambil di Peternakan */}
                      <label className="border-2 border-[#166534] bg-emerald-50/20 rounded-xl p-4 flex items-center gap-4 cursor-pointer relative transition-all shadow-sm">
                        <div className="text-[#166534] shrink-0">
                          <CheckCircle2 size={24} className="fill-current text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-1">Ambil di Peternakan</h3>
                          <p className="text-xs text-text-secondary">Ambil mandiri di Farm Dombantara (Self-pickup)</p>
                        </div>
                        <div className="font-bold text-[#166534] text-sm shrink-0">
                          Gratis
                        </div>
                      </label>

                      {/* Dombantara Delivery */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-6 h-6 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-1">Dombantara Delivery</h3>
                          <p className="text-xs text-text-secondary">Dikirim langsung oleh tim internal kami (Aman & Terjamin)</p>
                        </div>
                        <div className="font-bold text-[#0e2a47] text-sm shrink-0">
                          Rp 50.000
                        </div>
                      </label>

                      {/* Pengiriman Standard */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-6 h-6 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[#0e2a47] text-sm">Pengiriman Standard</h3>
                            <span className="bg-emerald-100 text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded">Rekomendasi</span>
                          </div>
                          <p className="text-xs text-text-secondary">Estimasi tiba 2 - 3 hari kerja</p>
                        </div>
                        <div className="font-bold text-[#166534] text-sm shrink-0">
                          Gratis
                        </div>
                      </label>

                      {/* Pengiriman Express */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-6 h-6 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-1">Pengiriman Express</h3>
                          <p className="text-xs text-text-secondary">Estimasi tiba 1 hari kerja</p>
                        </div>
                        <div className="font-bold text-[#0e2a47] text-sm shrink-0">
                          Rp 25.000
                        </div>
                      </label>

                      {/* Lalamove */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-6 h-6 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-1">Lalamove</h3>
                          <p className="text-xs text-text-secondary">Estimasi tiba hari ini (Instant)</p>
                        </div>
                        <div className="font-bold text-[#0e2a47] text-sm shrink-0">
                          Rp 150.000
                        </div>
                      </label>

                    </div>
                  </div>
                </div>
              ) : currentStep === 3 ? (
                <div className="space-y-6">
                  {/* PEMBAYARAN FORM (Step 3) */}
                  
                  {/* Metode Pembayaran */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    <h2 className="font-bold text-lg text-[#0e2a47] mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs">1</div>
                      Metode Pembayaran
                    </h2>
                    
                    <div className="mb-4">
                      <p className="text-xs text-text-secondary mb-3">Pilih metode pembayaran</p>
                      <div className="flex overflow-x-auto gap-2 pb-2">
                        <button className="px-4 py-2 bg-emerald-50 text-[#166534] rounded-lg text-xs font-bold border border-emerald-200 whitespace-nowrap">Semua Metode</button>
                        <button className="px-4 py-2 bg-white text-text-secondary rounded-lg text-xs font-medium border border-border-subtle hover:border-[#166534] whitespace-nowrap">Transfer Bank</button>
                        <button className="px-4 py-2 bg-white text-text-secondary rounded-lg text-xs font-medium border border-border-subtle hover:border-[#166534] whitespace-nowrap">Virtual Account</button>
                        <button className="px-4 py-2 bg-white text-text-secondary rounded-lg text-xs font-medium border border-border-subtle hover:border-[#166534] whitespace-nowrap">E-Wallet</button>
                        <button className="px-4 py-2 bg-white text-text-secondary rounded-lg text-xs font-medium border border-border-subtle hover:border-[#166534] whitespace-nowrap">QR Code</button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {/* BCA VA */}
                      <div className="border border-[#166534] rounded-xl overflow-hidden shadow-sm bg-emerald-50/10">
                        <label className="flex items-center gap-4 p-4 cursor-pointer relative transition-all">
                          <div className="text-[#166534] shrink-0">
                            <CheckCircle2 size={20} className="fill-current text-white" />
                          </div>
                          <div className="w-12 h-8 bg-white rounded border border-border-subtle flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">BCA</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#0e2a47] text-sm">BCA Virtual Account</h3>
                            <p className="text-xs text-text-secondary">Bayar melalui Virtual Account BCA</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-emerald-100 text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded">Rekomendasi</span>
                            <ChevronUp size={16} className="text-text-secondary" />
                          </div>
                        </label>
                        <div className="px-14 pb-4">
                          <p className="text-xs text-text-secondary bg-white p-3 border border-border-subtle rounded-lg">Setelah klik "Bayar Sekarang", Anda akan mendapatkan nomor Virtual Account untuk melakukan pembayaran.</p>
                        </div>
                      </div>

                      {/* BNI VA */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="w-12 h-8 rounded border border-border-subtle flex items-center justify-center text-[10px] font-bold text-[#F15A23] shrink-0">BNI</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">BNI Virtual Account</h3>
                          <p className="text-xs text-text-secondary">Bayar melalui Virtual Account BNI</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>
                      
                      {/* BRI VA */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="w-12 h-8 rounded border border-border-subtle flex items-center justify-center text-[10px] font-bold text-[#0B5599] shrink-0">BRI</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">BRI Virtual Account</h3>
                          <p className="text-xs text-text-secondary">Bayar melalui Virtual Account BRI</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>

                      {/* Mandiri VA */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="w-12 h-8 rounded border border-border-subtle flex items-center justify-center text-[10px] font-bold text-[#0B5599] shrink-0">Mandiri</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">Mandiri Virtual Account</h3>
                          <p className="text-xs text-text-secondary">Bayar melalui Virtual Account Mandiri</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>

                      {/* E-Wallet */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="flex gap-1 shrink-0 w-12 justify-center">
                          <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center text-[6px] font-bold text-white">OVO</div>
                          <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[6px] font-bold text-white">DANA</div>
                        </div>
                        <div className="flex-1 ml-2">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">E-Wallet</h3>
                          <p className="text-xs text-text-secondary">Bayar menggunakan saldo e-wallet</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>

                      {/* QRIS */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="w-12 h-8 rounded border border-border-subtle flex items-center justify-center text-[12px] font-bold text-red-600 shrink-0">QRIS</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">QRIS</h3>
                          <p className="text-xs text-text-secondary">Bayar dengan QR Code</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>
                      
                      {/* Transfer Bank Manual */}
                      <label className="border border-border-subtle hover:border-[#166534] bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all">
                        <div className="w-5 h-5 rounded-full border border-border-subtle shrink-0"></div>
                        <div className="w-12 h-8 rounded border border-border-subtle flex items-center justify-center shrink-0">
                          <CreditCard size={16} className="text-text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0e2a47] text-sm mb-0.5">Transfer Bank Manual</h3>
                          <p className="text-xs text-text-secondary">Transfer ke rekening bank Dombantara secara manual</p>
                        </div>
                        <ChevronDown size={16} className="text-text-secondary" />
                      </label>

                    </div>
                  </div>

                  {/* Detail Pembayaran Banner */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    <h2 className="font-bold text-lg text-[#0e2a47] mb-6 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs">2</div>
                      Detail Pembayaran
                    </h2>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-border-subtle rounded-xl bg-slate-50">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="text-[#166534] shrink-0" size={24} />
                        <div>
                          <h4 className="font-bold text-sm text-[#0e2a47]">Transaksi aman & terlindungi</h4>
                          <p className="text-xs text-text-secondary mt-0.5">Data Anda dienkripsi dan transaksi dijamin aman.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-xs font-bold text-text-muted flex items-center gap-1"><ShieldCheck size={14}/> SSL SECURE</div>
                        <div className="text-xs font-bold text-text-muted flex items-center gap-1"><CreditCard size={14}/> PCI DSS</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* KONFIRMASI PESANAN FORM (Step 4) */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-border-subtle">
                      <h2 className="font-bold text-lg text-[#0e2a47] flex items-center gap-2">
                        <CheckSquare size={20} className="text-[#166534]" /> Ringkasan Informasi Pesanan
                      </h2>
                      <button onClick={() => setCurrentStep(2)} className="text-sm font-bold text-[#166534] flex items-center gap-1 hover:underline">
                        <Edit2 size={14} /> Ubah
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Alamat Pengiriman */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                          <MapPin size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-text-muted mb-1">Alamat Pengiriman</p>
                          <h4 className="font-bold text-[#0e2a47] text-sm mb-1">Andi Wijaya</h4>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            Jl. Raya Cileunyi No. 123, Cileunyi, Kec. Cileunyi,<br/>
                            Kab. Bandung, Jawa Barat 40622<br/>
                            0812-3456-7890
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border-subtle"></div>

                      {/* Metode Pengiriman */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                          <Truck size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-text-muted mb-1">Metode Pengiriman</p>
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-[#0e2a47] text-sm">Pengiriman Standar</h4>
                                <span className="bg-emerald-100 text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded">Rekomendasi</span>
                              </div>
                              <p className="text-xs text-text-secondary">Estimasi tiba 2 - 3 hari kerja</p>
                            </div>
                            <div className="font-bold text-[#166534] text-sm">Gratis</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border-subtle"></div>

                      {/* Metode Pembayaran */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                          <CreditCard size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-text-muted mb-1">Metode Pembayaran</p>
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <h4 className="font-bold text-[#0e2a47] text-sm mb-1">BCA Virtual Account</h4>
                              <p className="text-xs text-text-secondary">Bayar melalui Virtual Account BCA</p>
                            </div>
                            <div className="text-blue-600 font-bold text-xl italic pr-2">BCA</div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border-subtle"></div>

                      {/* Catatan Pesanan */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#166534] shrink-0">
                          <Edit2 size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-text-muted mb-1">Catatan Pesanan</p>
                            <button className="text-xs font-bold text-[#166534] flex items-center gap-1 hover:underline">
                              <Edit2 size={12} /> Ubah
                            </button>
                          </div>
                          <p className="text-sm text-[#0e2a47]">Tidak ada catatan</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Banner Aman */}
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[#166534] shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#166534] text-sm mb-1">Tenang, Pesanan Anda Aman</h4>
                      <p className="text-xs text-emerald-800 mb-4 leading-relaxed">Kami menggunakan sistem keamanan berlapis untuk melindungi setiap transaksi Anda.</p>
                      <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-emerald-700"/>
                          <span className="text-[10px] font-bold text-emerald-800 leading-tight">SSL<br/>Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} className="text-emerald-700"/>
                          <span className="text-[10px] font-bold text-emerald-800 leading-tight">PCI DSS<br/>Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-700"/>
                          <span className="text-[10px] font-bold text-emerald-800 leading-tight">100%<br/>Aman</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Persetujuan TNC */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle mt-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className={`mt-0.5 w-6 h-6 rounded border flex items-center justify-center shrink-0 transition-colors ${isConfirmed ? 'bg-[#166534] border-[#166534] text-white' : 'border-slate-300 bg-white group-hover:border-[#166534]'}`}>
                        {isConfirmed && <CheckCircle2 size={16} className="fill-current text-white" />}
                      </div>
                      <input type="checkbox" className="hidden" checked={isConfirmed} onChange={() => setIsConfirmed(!isConfirmed)} />
                      <div>
                        <p className="text-sm font-bold text-[#0e2a47] mb-1">Saya telah memeriksa dan memastikan semua detail pesanan sudah benar.</p>
                        <p className="text-xs text-text-secondary leading-relaxed">Dengan melanjutkan, saya menyetujui <Link href="#" className="font-bold text-[#166534] hover:underline">Syarat & Ketentuan</Link> dan <Link href="#" className="font-bold text-[#166534] hover:underline">Kebijakan Privasi</Link> Dombantara Farm.</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-lg text-[#0e2a47]">Ringkasan Pesanan</h2>
                  {currentStep >= 2 && (
                    <button onClick={() => setCurrentStep(1)} className="text-xs font-bold text-[#166534] hover:underline">
                      Ubah Keranjang
                    </button>
                  )}
                </div>

                {selectedItems.length > 0 && (
                  <div className="mb-6 space-y-4">
                    <p className="text-xs font-bold text-text-secondary">{selectedItems.length} Item</p>
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center">
                        <img src={`https://images.unsplash.com/photo-${item.image}?auto=format&fit=crop&q=80&w=150`} className="w-12 h-12 rounded object-cover shrink-0" />
                        <div className="flex-1 overflow-hidden">
                          <h4 className="font-bold text-[#0e2a47] text-xs truncate">{item.title}</h4>
                          <p className="text-[10px] text-text-secondary truncate">{item.specs.split('•')[0].trim()}</p>
                        </div>
                        <div className="text-xs font-bold text-text-secondary w-4 text-center shrink-0">{item.qty}x</div>
                        <div className="font-bold text-[#166534] text-xs text-right min-w-[70px] shrink-0">Rp {(item.price * item.qty).toLocaleString('id-ID')}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Subtotal ({selectedItems.length} item)</span>
                    <span className="font-bold text-[#0e2a47]">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  {currentStep >= 2 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Ongkir</span>
                      <span className="font-bold text-[#166534]">Gratis</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border-subtle pt-6 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0e2a47]">Total {currentStep === 3 && 'Pembayaran'}</span>
                    <span className="font-display font-bold text-2xl text-[#166534]">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* Free Shipping Banner - Only show in step 2+ */}
                {currentStep >= 2 && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <ShieldCheck className="text-[#166534] shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-bold text-sm text-[#166534]">Anda menghemat ongkir</h4>
                      <p className="text-xs text-emerald-700 mt-1">Selamat! Anda mendapatkan gratis ongkir.</p>
                    </div>
                    <span className="text-2xl ml-auto">🎉</span>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-3 mb-8">
                  {currentStep === 1 ? (
                    <>
                      <button 
                        onClick={() => setCurrentStep(2)}
                        disabled={selectedItems.length === 0}
                        className="w-full py-3.5 rounded-xl bg-[#166534] text-white font-bold hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Isi Data Pengiriman <ArrowRight size={16} />
                      </button>
                      <Link href="/market" className="w-full py-3.5 rounded-xl bg-white border border-border-subtle text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center gap-2">
                        <ArrowLeft size={16} /> Belanja Lagi
                      </Link>
                    </>
                  ) : currentStep === 2 ? (
                    <>
                      <button 
                        onClick={() => setCurrentStep(3)}
                        className="w-full py-3.5 rounded-xl bg-[#166534] text-white font-bold hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2"
                      >
                        Lanjut ke Pembayaran <ArrowRight size={16} />
                      </button>
                      <button 
                        onClick={() => setCurrentStep(1)}
                        className="w-full py-3.5 rounded-xl bg-white border border-border-subtle text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={16} /> Kembali ke Keranjang
                      </button>
                    </>
                  ) : currentStep === 3 ? (
                    <>
                      <button 
                        onClick={() => setCurrentStep(4)}
                        className="w-full py-3.5 rounded-xl bg-[#166534] text-white font-bold hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Lock size={16} /> Bayar Sekarang
                      </button>
                      <p className="text-[10px] text-center text-text-muted mt-2 leading-relaxed">
                        Dengan melanjutkan, Anda menyetujui<br/> <Link href="#" className="font-bold text-[#166534] hover:underline">Syarat & Ketentuan</Link> & <Link href="#" className="font-bold text-[#166534] hover:underline">Kebijakan Privasi</Link>
                      </p>
                      <button 
                        onClick={() => setCurrentStep(2)}
                        className="w-full mt-4 py-3.5 rounded-xl bg-white border border-border-subtle text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={16} /> Kembali ke Pengiriman
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => alert("Pesanan Berhasil Dibuat!")}
                        disabled={!isConfirmed}
                        className="w-full py-3.5 rounded-xl bg-[#166534] text-white font-bold hover:bg-[#15532b] shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Lock size={16} /> Konfirmasi & Buat Pesanan <ArrowRight size={16} />
                      </button>
                      <button 
                        onClick={() => setCurrentStep(3)}
                        className="w-full py-3.5 rounded-xl bg-white border border-border-subtle text-text-primary font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={16} /> Kembali ke Pembayaran
                      </button>
                    </>
                  )}
                </div>

                {/* Payment Methods - only show in Step 1 & 2 */}
                {currentStep < 3 && (
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
                )}

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
