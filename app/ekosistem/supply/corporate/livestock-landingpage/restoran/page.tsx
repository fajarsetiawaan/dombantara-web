"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Store,
  Beef,
  Flame,
  Truck,
  CheckCircle,
  Scale,
  Settings,
  ArrowRight,
  AlertTriangle,
  XCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  Wallet,
  FileText
} from "lucide-react";

export default function RestoranLandingPage() {
  const [activeTesti, setActiveTesti] = useState(1);

  const testimonials = [
    {
      id: 0,
      name: "Siska Saraswati",
      role: "Manajer Katering, Bandung",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      text: "Daging selalu fresh dan potongannya rapi sesuai request. Sangat membantu efisiensi waktu tim dapur kami saat melayani ribuan porsi."
    },
    {
      id: 1,
      name: "Budi Santoso",
      role: "Owner Restoran Sate, Jakarta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "Sebelumnya kami sering mengalami masalah stok dan kualitas. Setelah bekerja sama dengan Dombantara, pasokan menjadi jauh lebih stabil."
    },
    {
      id: 2,
      name: "Ahmad Rizky",
      role: "Chef Executive, Hotel Bintang 4",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80",
      text: "Kualitas karkasnya konsisten, persentase dagingnya tinggi, dan bersih. Sangat direkomendasikan untuk kebutuhan hotel atau banquet."
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface overflow-hidden border-b border-border-subtle">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-10 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                B2B Pasokan Restoran & Hotel
              </div>
              
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Pasokan daging domba yang <span className="text-primary">dapat diandalkan</span>
              </h1>
              
              <p className="text-text-muted text-lg mb-10 max-w-xl leading-relaxed">
                Amankan operasional dapur Anda dengan pasokan stabil, kualitas konsisten, dan pengiriman terjadwal dari jaringan peternak terverifikasi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2">
                  Konsultasi Pasokan <ArrowRight size={18} />
                </button>
                <button className="bg-white border border-border-strong hover:border-primary hover:text-primary text-text-primary font-bold py-4 px-8 rounded-xl transition-all text-center">
                  Lihat Spesifikasi
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border-subtle">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-text-primary mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-text-muted">Peternak mitra</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-text-primary mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-text-muted">Ketepatan waktu</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-text-primary mb-1">24h</div>
                  <div className="text-xs sm:text-sm text-text-muted">Dukungan B2B</div>
                </div>
              </div>
            </div>

            {/* Right Content / Image Collage */}
            <div className="relative flex justify-center lg:justify-end h-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative w-full max-w-[500px] h-[400px] lg:h-[500px]">
                {/* Main Image */}
                <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                    alt="Professional Chef" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-sm font-bold mb-3 border border-white/30">
                      <ShieldCheck size={16} /> Quality Control Ketat
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Setiap potongan daging melewati proses seleksi, penimbangan, dan verifikasi kualitas sebelum dikirim.
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="hidden md:flex absolute -left-8 top-16 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle items-center gap-4 animate-float">
                  <div className="w-12 h-12 rounded-full bg-status-success/10 flex items-center justify-center text-status-success">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-bold uppercase mb-1">Status Pasokan</div>
                    <div className="font-bold text-text-primary">Tersedia Harian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* MITRA KOLABORASI */}
      <section className="pt-20 pb-16 bg-surface overflow-hidden relative border-none">
        <div className="container mx-auto px-6 lg:px-10 mb-8">
            <h2 className="text-lg md:text-xl font-display font-bold text-text-primary text-left">
              Dipercaya oleh mitra kuliner & institusi
            </h2>
        </div>
        
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative w-full flex overflow-hidden">
            {/* Gradient masking for smooth fade on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-scroll items-center gap-20 pr-20 py-4">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-20 items-center">
                  {[
                    "https://upload.wikimedia.org/wikipedia/en/e/e0/IPB_logo_with_namestyle.png",
                    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo_Kementerian_Pertanian_Republik_Indonesia.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Indofood_logo-en.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_Telkom_Indonesia_2013.png",
                    "https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_PLN.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Baru_Pelindo_%282021%29.png"
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

      {/* Produk & Layanan Baru */}
      <section className="py-20 bg-surface border-b border-border-subtle relative">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4 max-w-3xl">
            Satu supplier untuk semua kebutuhan kambing dan domba bisnis kuliner Anda
          </h2>
          <p className="text-text-muted text-base md:text-lg mb-12 max-w-3xl leading-relaxed">
            Pilih produk sesuai kebutuhan operasional: hewan hidup, jasa potong, atau karkas siap masak dengan pasokan terjadwal dan kualitas terstandar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?auto=format&fit=crop&q=80" 
                  alt="Domba / kambing hidup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Domba / kambing hidup</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Cocok untuk aqiqah, qurban, peternakan, dan kebutuhan distribusi hewan hidup.
                </p>
                <div className="flex-1 mb-8">
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Berat:</strong> 20-25 kg</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Umur:</strong> &gt; 1 tahun (Cukup Umur)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Kesehatan:</strong> Tersertifikasi (SKKH)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="mb-5">
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Estimasi Harga B2B</div>
                    <div className="text-2xl font-display font-bold text-primary">
                      Rp 2.500.000 <span className="text-sm text-text-muted font-normal">/ ekor</span>
                    </div>
                  </div>
                  <button className="bg-surface hover:bg-primary hover:text-white text-text-primary font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2">
                    Pesan Sekarang <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative">
              <div className="absolute top-4 right-4 z-10 bg-accent-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Paling Diminati
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80" 
                  alt="Hewan + jasa potong" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Hewan + jasa potong</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Kami siapkan hewan, proses penyembelihan halal, penanganan, dan pengemasan.
                </p>
                <div className="flex-1 mb-8">
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Berat Hidup:</strong> 25-30 kg</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Hasil Bersih:</strong> ± 12 kg (Karkas, Jeroan, Kepala)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Metode:</strong> 100% Halal Tersertifikasi</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="mb-5">
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Estimasi Harga B2B</div>
                    <div className="text-2xl font-display font-bold text-primary">
                      Rp 2.750.000 <span className="text-sm text-text-muted font-normal">/ ekor</span>
                    </div>
                  </div>
                  <button className="bg-surface hover:bg-primary hover:text-white text-text-primary font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2">
                    Pesan Sekarang <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80" 
                  alt="Karkas siap masak" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Karkas siap masak</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Siap olah untuk dapur profesional dengan standar kualitas dan berat yang konsisten.
                </p>
                <div className="flex-1 mb-8">
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Berat Karkas:</strong> 10-12 kg</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Potongan:</strong> Utuh / Belah 2 / Belah 4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Suhu Kirim:</strong> Chilled / Frozen (-18°C)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="mb-5">
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Estimasi Harga B2B</div>
                    <div className="text-2xl font-display font-bold text-primary">
                      Rp 115.000 <span className="text-sm text-text-muted font-normal">/ kg</span>
                    </div>
                  </div>
                  <button className="bg-surface hover:bg-primary hover:text-white text-text-primary font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2">
                    Pesan Sekarang <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bd6693?auto=format&fit=crop&q=80" 
                  alt="Daging potongan khusus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Daging potongan khusus</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Pesan bagian spesifik (dadu sate, slice, iga, paha murni) yang siap olah tanpa repot memisahkan tulang sendiri.
                </p>
                <div className="flex-1 mb-8">
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Pilihan Bagian:</strong> Dadu Sate / Slice / Iga / Paha</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Kemasan:</strong> Vacuum pack 1 kg - 5 kg</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Kondisi:</strong> Frozen / Chilled</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="mb-5">
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Estimasi Harga B2B</div>
                    <div className="text-2xl font-display font-bold text-primary">
                      Rp 135.000 <span className="text-sm text-text-muted font-normal">/ kg</span>
                    </div>
                  </div>
                  <button className="bg-surface hover:bg-primary hover:text-white text-text-primary font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2">
                    Pesan Sekarang <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" 
                  alt="Jeroan, kepala & tulang" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Jeroan, kepala & tulang</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Bahan baku spesifik yang krusial untuk menu masakan Nusantara otentik seperti sop kaki, tengkleng, dan gulai.
                </p>
                <div className="flex-1 mb-8">
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Jenis:</strong> Kepala, Kaki, Tulang Iga, Jeroan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Kondisi:</strong> Sudah direbus / Mentah bersih</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span><strong>Kemasan:</strong> Plastik PE standar F&B</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle">
                  <div className="mb-5">
                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Estimasi Harga B2B</div>
                    <div className="text-2xl font-display font-bold text-primary">
                      Rp 45.000 <span className="text-sm text-text-muted font-normal">/ kg</span>
                    </div>
                  </div>
                  <button className="bg-surface hover:bg-primary hover:text-white text-text-primary font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2">
                    Pesan Sekarang <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Down Arrow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary border border-border-subtle shadow-md cursor-pointer hover:bg-surface transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>
      </section>

      {/* Tantangan & Solusi */}
      <section className="py-24 bg-white border-b border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          
          <div className="mb-24">
            <div className="inline-block px-3 py-1 rounded-full bg-status-error/10 text-status-error text-xs font-bold uppercase tracking-widest mb-4">
              Masalah Bisnis
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-12 max-w-3xl leading-tight">
              Gangguan pasokan bisa langsung memukul operasional bisnis kuliner
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="bg-surface p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                  <AlertTriangle className="text-status-warning" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3">Pasokan tidak konsisten</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Stok kosong membuat menu tidak tersedia dan pelanggan kecewa.
                </p>
              </div>
              
              <div className="bg-surface p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                  <XCircle className="text-status-error" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3">Kualitas berubah-ubah</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ukuran dan kualitas yang tidak seragam menekan margin bisnis.
                </p>
              </div>
              
              <div className="bg-surface p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                  <Clock className="text-status-warning" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3">Pengiriman terlambat</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Keterlambatan mengganggu operasional dapur dan jadwal produksi.
                </p>
              </div>

              <div className="bg-surface p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border-subtle mb-6 shadow-sm">
                  <Wallet className="text-status-error" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3">Harga fluktuatif</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Harga daging yang naik-turun mendadak membuat HPP sulit dikontrol.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Solusi Dombantara
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-text-primary mb-12 max-w-3xl leading-tight">
              Satu sistem pasokan yang lebih stabil, terukur, dan mudah dikelola
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div className="bg-white p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent-background flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3 text-lg">Jaringan peternak terverifikasi</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Sumber pasokan lebih stabil dan dapat ditingkatkan sesuai kebutuhan.
                </p>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent-background flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3 text-lg">Quality control berlapis</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Standar kualitas dan penimbangan yang lebih konsisten.
                </p>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent-background flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <Truck size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3 text-lg">Distribusi terjadwal</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Pengiriman sesuai jadwal operasional bisnis Anda.
                </p>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-[24px] border border-border-subtle flex flex-col items-start transition-shadow hover:shadow-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent-background flex items-center justify-center text-primary mb-6 border border-primary/10">
                  <FileText size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-3 text-lg">Kontrak harga B2B</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Kepastian harga untuk periode tertentu guna mengamankan margin profit.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Proses, Bukti, Testimoni */}
      <section className="py-24 bg-surface border-b border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          
          {/* Section 1: Proses */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-12">
              Proses sederhana, transparan, dan cepat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Konsultasi Kebutuhan", text: "Volume, frekuensi, spesifikasi, dan area pengiriman." },
                { step: "2", title: "Simulasi Harga", text: "Estimasi biaya dan rekomendasi skema pasokan." },
                { step: "3", title: "Quality Control", text: "Seleksi, penimbangan, dan verifikasi sebelum kirim." },
                { step: "4", title: "Pengiriman Rutin", text: "Distribusi sesuai jadwal yang telah disepakati." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 lg:p-8 rounded-[24px] border border-border-subtle shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 text-border-subtle group-hover:text-primary/10 transition-colors">
                    <span className="font-display text-8xl font-bold opacity-30 -mr-4 -mt-8 block">{item.step}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-primary font-bold mb-2">Langkah 0{item.step}</div>
                    <h3 className="font-bold text-text-primary text-xl mb-3">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Testimoni Carousel */}
          <div className="border-t border-border-subtle pt-24 relative overflow-hidden">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-widest mb-4">
                Testimoni
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
                Apa kata pelanggan kami
              </h2>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
              <div className="flex justify-center items-center h-[320px] md:h-[280px] relative">
                {testimonials.map((testi, i) => {
                  const isActive = i === activeTesti;
                  const isLeft = i === (activeTesti - 1 + testimonials.length) % testimonials.length;
                  const isRight = i === (activeTesti + 1) % testimonials.length;
                  
                  let transform = "translateX(0) scale(0)";
                  let opacity = 0;
                  let zIndex = 0;
                  let blur = "blur-0";

                  if (isActive) {
                    transform = "translateX(0) scale(1)";
                    opacity = 1;
                    zIndex = 20;
                  } else if (isLeft) {
                    transform = "translateX(-45%) scale(0.85)";
                    opacity = 0.4;
                    zIndex = 10;
                    blur = "blur-[2px]";
                  } else if (isRight) {
                    transform = "translateX(45%) scale(0.85)";
                    opacity = 0.4;
                    zIndex = 10;
                    blur = "blur-[2px]";
                  }

                  return (
                    <div 
                      key={testi.id}
                      className={`absolute w-full max-w-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${blur} ${!isActive && 'cursor-pointer hover:opacity-60'}`}
                      style={{ transform, opacity, zIndex }}
                      onClick={() => !isActive && setActiveTesti(i)}
                    >
                      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[32px] border border-border-subtle shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 text-center sm:text-left">
                          <div className="w-14 h-14 rounded-full bg-surface border border-border-subtle flex items-center justify-center overflow-hidden mx-auto sm:mx-0 shrink-0">
                             <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-bold text-text-primary text-lg">{testi.name}</h4>
                            <p className="text-sm text-text-muted">{testi.role}</p>
                          </div>
                        </div>
                        <p className="text-text-primary leading-relaxed text-base font-medium text-center sm:text-left">
                          &ldquo;{testi.text}&rdquo;
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Controls */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button 
                  onClick={() => setActiveTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
                  className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-surface hover:text-primary transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <div className="flex gap-3">
                  {testimonials.map((_, i) => (
                     <button 
                       key={i} 
                       onClick={() => setActiveTesti(i)}
                       className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeTesti ? 'bg-primary w-8' : 'bg-border-strong hover:bg-primary/50'}`} 
                       aria-label={`Go to testimonial ${i + 1}`}
                     />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveTesti((prev) => (prev + 1) % testimonials.length)} 
                  className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center hover:bg-surface hover:text-primary transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* FAQ & CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
          {/* FAQ */}
          <div className="mb-32">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8 text-center">Tanya Jawab Seputar Pasokan</h2>
            <div className="bg-surface rounded-[24px] border border-border-subtle shadow-sm overflow-hidden p-2">
              {[
                "Berapa minimal order untuk harga B2B?",
                "Apakah bisa membuat kontrak pasokan bulanan?",
                "Area pengiriman mencakup wilayah mana saja?",
                "Bagaimana sistem pembayaran untuk mitra korporat?"
              ].map((question, idx, arr) => (
                <div 
                  key={idx} 
                  className={`flex items-center justify-between p-4 sm:p-6 ${idx !== arr.length - 1 ? 'border-b border-border-subtle' : ''} cursor-pointer hover:bg-white rounded-2xl transition-colors`}
                >
                  <span className="font-bold text-text-primary text-sm sm:text-base md:text-lg">{question}</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border-subtle text-text-muted">
                    <ChevronDown size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-primary rounded-[40px] px-6 py-10 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-8 uppercase tracking-widest">
                Konsultasi Gratis
              </div>
              <h2 className="text-white font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                Amankan pasokan daging untuk operasional bisnis Anda
              </h2>
              <p className="text-white/80 text-base md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                Dapatkan simulasi kebutuhan pasokan, estimasi harga, dan rekomendasi jadwal pengiriman yang disesuaikan dengan kapasitas restoran Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary font-bold py-4 px-6 sm:px-10 w-full sm:w-auto rounded-2xl text-base md:text-lg transition-colors hover:bg-surface shadow-xl flex items-center justify-center gap-2">
                  Jadwalkan Konsultasi <ArrowRight size={20} />
                </button>
                <button className="bg-primary border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-bold py-4 px-6 sm:px-10 w-full sm:w-auto rounded-2xl text-base md:text-lg transition-all shadow-lg flex items-center justify-center">
                  Chat via WhatsApp
                </button>
              </div>
              <div className="text-white/60 text-sm mt-8 flex items-center justify-center gap-2">
                <Clock size={16} /> Respon cepat dalam 24 jam • Tim khusus sales B2B
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Simple Footer */}
      <footer className="bg-white py-12 border-t border-border-subtle mt-16">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-primary mb-2">Dombantara</h3>
            <p className="text-sm text-text-muted max-w-sm">
              Domba Nusantara - Peternakan domba terintegrasi Indonesia yang lebih baik.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3 text-text-muted">
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors font-bold text-xs">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors font-bold text-xs">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors font-bold text-xs">IN</a>
            </div>
            <p className="text-xs text-text-muted">
              &copy; 2026 Dombantara. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
