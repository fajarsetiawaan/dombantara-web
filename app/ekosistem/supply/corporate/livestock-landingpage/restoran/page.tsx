"use client";

import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { 
  ChevronRight, 
  Store,
  Beef,
  Flame,
  Truck,
  CheckCircle,
  Scale,
  Settings,
  ArrowRight
} from "lucide-react";

export default function RestoranLandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-3/4"></div>
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80" 
            alt="Restoran Supply" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-20">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-text-primary">Beranda</Link>
              <ChevronRight size={12} />
              <Link href="/ekosistem/supply/corporate" className="hover:text-text-primary">Corporate Supply</Link>
              <ChevronRight size={12} />
              <Link href="/ekosistem/supply/corporate/livestock-landingpage" className="hover:text-text-primary">Solusi Bisnis</Link>
              <ChevronRight size={12} />
              <span className="text-primary">Restoran & Jaringan Kuliner</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider mb-6">
              RESTORAN & JARINGAN KULINER
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Pasokan Daging Segar & Produk Olahan dengan Standar Konsisten
            </h1>
            
            <p className="text-text-muted mb-8 leading-relaxed text-sm md:text-base">
              Menjaga stabilitas HPP dan kualitas hidangan Anda dengan pasokan daging dan karkas yang memiliki ukuran, potongan, serta spesifikasi yang seragam. Dombantara siap mendukung skala restoran dari UMKM hingga jaringan nasional.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="bg-primary text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Hubungi Sales Korporasi
              </button>
              <button className="bg-white text-text-primary font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 border border-border-strong hover:bg-surface transition-colors">
                Lihat Katalog Produk
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Jaminan Kualitas
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Harga Kompetitif
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Custom Order
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Khusus Restoran */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">Mengapa Restoran Memilih Dombantara?</h2>
          <p className="text-sm text-text-muted max-w-2xl mx-auto mb-12">
            Kami memahami tantangan industri kuliner dalam menjaga konsistensi rasa dan ukuran hidangan untuk mengontrol biaya.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-border-subtle hover:border-primary/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Scale size={32} />
              </div>
              <h3 className="font-bold text-text-primary mb-3">Spesifikasi Konsisten</h3>
              <p className="text-xs text-text-muted leading-relaxed">Berat, ketebalan, dan ukuran potongan yang seragam untuk menjaga standar porsi dan Harga Pokok Penjualan (HPP).</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-subtle hover:border-primary/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Truck size={32} />
              </div>
              <h3 className="font-bold text-text-primary mb-3">Pengiriman Fleksibel</h3>
              <p className="text-xs text-text-muted leading-relaxed">Jadwal pengiriman yang dapat disesuaikan dengan kapasitas penyimpanan dan operasional dapur Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-subtle hover:border-primary/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Settings size={32} />
              </div>
              <h3 className="font-bold text-text-primary mb-3">Custom Requirement</h3>
              <p className="text-xs text-text-muted leading-relaxed">Menerima pesanan produk olahan kustom (private label) dan marinasi khusus sesuai resep restoran Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solusi Produk */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-12 text-center">Solusi Produk yang Tersedia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Karkas */}
            <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-surface relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1603048297172-c925447989d9?auto=format&fit=crop&q=80&w=600`} alt="Daging Segar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur text-primary flex items-center justify-center">
                  <Beef size={20} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-text-primary mb-3">Karkas & Daging Segar</h3>
                <ul className="text-xs text-text-muted leading-relaxed mb-6 space-y-2 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Karkas Domba & Kambing (Whole)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Daging Slice (Premium / Regular)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Daging Iga (Ribs)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Tenderloin & Sirloin</li>
                </ul>
              </div>
            </div>

            {/* Olahan */}
            <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-surface relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600`} alt="Produk Olahan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur text-primary flex items-center justify-center">
                  <Flame size={20} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-text-primary mb-3">Produk Olahan Siap Masak</h3>
                <ul className="text-xs text-text-muted leading-relaxed mb-6 space-y-2 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Sate Domba Siap Bakar</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Daging Kebab (Frozen)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Bakso & Sosis Domba</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Daging Burger (Patty)</li>
                </ul>
              </div>
            </div>

            {/* Custom */}
            <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-surface relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1627308595229-7830f5c90683?auto=format&fit=crop&q=80&w=600`} alt="Custom Order" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur text-primary flex items-center justify-center">
                  <Store size={20} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-text-primary mb-3">Custom Order & Private Label</h3>
                <ul className="text-xs text-text-muted leading-relaxed mb-6 space-y-2 flex-1">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Marinasi dengan bumbu khusus</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Packaging dengan brand Anda</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Formula resep kolaboratif</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Potongan spesifik (Grams/Slice)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-text-primary rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/30 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-white font-display font-bold text-3xl mb-4 leading-tight">
                Siap Meningkatkan Standar Kualitas Restoran Anda?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Tim sales kami siap membantu Anda menyusun rencana pengadaan daging dan olahan domba yang paling sesuai dengan kapasitas dan kebutuhan jaringan kuliner Anda.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col gap-3">
              <button className="w-full md:w-auto bg-white text-text-primary font-bold py-4 px-8 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-surface transition-colors shadow-lg">
                Jadwalkan Konsultasi <ArrowRight size={16} />
              </button>
              <button className="w-full md:w-auto bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                Unduh Company Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
