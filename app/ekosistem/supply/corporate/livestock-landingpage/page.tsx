"use client";

import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { 
  ShieldCheck, 
  Truck, 
  FileText,
  Users,
  CheckCircle,
  Package,
  BadgeCheck,
  Scale,
  Clock,
  MessageSquare,
  Building2,
  Store,
  ChevronRight,
  Phone,
  Mail,
  ChevronDown,
  MapPin
} from "lucide-react";

export default function LivestockLandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-3/4"></div>
          <img 
            src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80" 
            alt="Sheep Farm" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider mb-6">
              SOLUSI PASOKAN KORPORASI
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Pasokan domba dan kambing yang dapat diandalkan untuk kebutuhan bisnis Anda
            </h1>
            
            <p className="text-text-secondary mb-8 leading-relaxed text-sm md:text-base">
              Dombantara membantu restoran, hotel, katering, distributor, retailer, dan institusi mendapatkan pasokan domba, kambing, daging segar, serta produk olahan dengan kualitas konsisten, pengiriman terjadwal, dan standar halal yang terjaga.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="bg-primary text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Hubungi Sales Korporasi
              </button>
              <button className="bg-white text-text-primary font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 border border-border-strong hover:bg-surface transition-colors">
                Minta Penawaran
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Respon cepat
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Penawaran resmi
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle size={16} className="text-status-success" /> Konsultasi tanpa biaya
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-8 bg-white border-b border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between opacity-70 grayscale">
            <span className="text-xs font-bold text-text-secondary whitespace-nowrap">Dipercaya oleh restoran, hotel & institusi:</span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-12 flex-1">
              <span className="font-bold text-sm">Rumah Makan Padang</span>
              <span className="font-serif italic text-sm">Hotel Santika</span>
              <span className="font-bold text-sm bg-yellow-400 px-2 text-blue-900 rounded">SARI ROTI</span>
              <span className="font-light text-xl italic">Grand Zuri</span>
              <span className="font-bold text-sm">RUMAH SAKIT AMANAH</span>
              <span className="font-bold text-sm flex items-center gap-1"><ShieldCheck size={16} /> PESANTREN MODERN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa korporasi memilih Dombantara? */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">Mengapa korporasi memilih Dombantara?</h2>
          <p className="text-sm text-text-secondary max-w-2xl mx-auto mb-12">
            Kami memahami bahwa bisnis Anda membutuhkan lebih dari sekadar produk. Anda membutuhkan partner yang bisa diandalkan.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kualitas yang Konsisten", icon: <BadgeCheck size={32} />, desc: "Standar seleksi ternak dan produk diterapkan secara berlapis sehingga spesifikasi pesanan tetap terjaga." },
              { title: "Pasokan yang Stabil", icon: <Truck size={32} />, desc: "Jaringan peternak dan sistem pengadaan memungkinkan pemenuhan kebutuhan rutin maupun volume besar." },
              { title: "Pengiriman Terjadwal", icon: <Clock size={32} />, desc: "Sistem distribusi dirancang untuk kebutuhan operasional harian, mingguan, maupun kontrak jangka panjang." },
              { title: "Standar Halal & Higienis", icon: <ShieldCheck size={32} />, desc: "Proses penanganan produk mengikuti praktik kebersihan dan standar halal yang menjadi kebutuhan utama industri makanan." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-border-subtle hover:border-primary/30 transition-colors text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solusi pasokan untuk berbagai jenis bisnis */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-12 text-center">Solusi pasokan untuk berbagai jenis bisnis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Restoran & Jaringan Kuliner", icon: <Store size={20} />, img: "1555939594-58d7cb561ad1", desc: "Pasokan daging segar, karkas, dan produk olahan dengan spesifikasi yang konsisten." },
              { title: "Hotel & Hospitality", icon: <Building2 size={20} />, img: "1566073771259-6a8506099945", desc: "Kebutuhan premium dengan pengiriman terjadwal dan dokumentasi yang rapi." },
              { title: "Katering & Central Kitchen", icon: <Package size={20} />, img: "1577212017184-807dda4dd976", desc: "Volume besar, jadwal rutin, dan fleksibilitas spesifikasi produk." },
              { title: "Distributor & Retailer", icon: <Package size={20} />, img: "1603048297172-c925447989d9", desc: "Kemitraan pasokan jangka panjang dengan dukungan volume dan kontinuitas stok." },
              { title: "Institusi & Proyek", icon: <Users size={20} />, img: "1584148766159-4d6d67e17424", desc: "Pengadaan untuk pesantren, rumah sakit, perusahaan, CSR, dan kebutuhan berskala besar." }
            ].map((sol, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border-subtle overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
                <div className="h-32 bg-surface relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${sol.img}?auto=format&fit=crop&q=80&w=600`} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur text-primary flex items-center justify-center">
                    {sol.icon}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">{sol.title}</h3>
                  <p className="text-[10px] text-text-secondary leading-relaxed mb-4">{sol.desc}</p>
                  <div className="mt-auto flex gap-2">
                    <Link href={sol.title === "Restoran & Jaringan Kuliner" ? "/ekosistem/supply/corporate/livestock-landingpage/restoran" : "#"} className="flex-1 text-center border border-border-subtle rounded-xl py-2.5 text-[10px] font-bold text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors block leading-tight">
                      Lihat Detail
                    </Link>
                    <button className="w-9 shrink-0 flex items-center justify-center border border-border-subtle rounded-xl text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors" title="Hubungi Sales Corporate">
                      <MessageSquare size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yang kami jaga dalam setiap pengiriman */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">Yang kami jaga dalam setiap pengiriman</h2>
              <p className="text-sm text-text-secondary">Bagi korporasi, kepercayaan dibangun dari konsistensi dan detail kecil yang selalu kami jaga.</p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { title: "Spesifikasi produk sesuai pesanan", icon: <FileText size={24} /> },
                { title: "Berat dan jumlah yang akurat", icon: <Scale size={24} /> },
                { title: "Dokumentasi pengiriman", icon: <BadgeCheck size={24} /> },
                { title: "Ketepatan waktu", icon: <Clock size={24} /> },
                { title: "Respons cepat dari tim account", icon: <MessageSquare size={24} /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center text-primary mb-3 bg-white">
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] font-bold text-text-primary leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proses kerja sama */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">Proses kerja sama yang sederhana</h2>
            <p className="text-sm text-text-secondary">Alur yang jelas, transparan, dan efisien untuk kebutuhan bisnis Anda.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border-subtle border-t-2 border-dashed border-primary z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Konsultasi Kebutuhan", icon: <MessageSquare size={24} />, desc: "Tim kami mempelajari volume, frekuensi, spesifikasi, dan lokasi pengiriman Anda." },
                { step: "02", title: "Penawaran Resmi", icon: <FileText size={24} />, desc: "Kami menyiapkan quotation yang jelas, transparan, dan sesuai kebutuhan procurement." },
                { step: "03", title: "Uji Pasokan", icon: <Package size={24} />, desc: "Untuk kebutuhan tertentu, kami dapat memulai dari pengiriman awal sebagai tahap evaluasi." },
                { step: "04", title: "Kontrak & Pengiriman Rutin", icon: <Truck size={24} />, desc: "Setelah spesifikasi disepakati, pasokan berjalan sesuai jadwal yang telah ditentukan." }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary mx-auto mb-4 relative shadow-lg">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 text-sm">{step.title}</h3>
                  <p className="text-[10px] text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-5/12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">Siap memenuhi kebutuhan volume besar</h2>
              <p className="text-white/80 text-sm mb-8">Dombantara memiliki kapasitas dan sistem yang siap mendukung kebutuhan bisnis Anda, kapan pun dibutuhkan.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {["Pasokan harian", "Kontrak jangka panjang", "Pasokan mingguan", "Kebutuhan musiman", "Pengadaan bulanan", "Proyek & event"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full border border-status-success flex items-center justify-center shrink-0">
                      <CheckCircle size={10} className="text-status-success" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: "50.000+", label: "Ekor", sub: "Kapasitas pengadaan per bulan", icon: <Truck size={24}/> },
                { val: "30+", label: "Armada", sub: "Armada berpendingin (refrigerated)", icon: <Truck size={24}/> },
                { val: "JaBoDeTaBek", label: "& sekitarnya", sub: "Cakupan distribusi luas dan terjadwal", icon: <MapPin size={24}/> },
                { val: "100%", label: "Komitmen", sub: "Komitmen kualitas dan ketepatan waktu", icon: <BadgeCheck size={24}/> }
              ].map((metric, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center text-text-primary flex flex-col items-center justify-center h-full gap-2">
                  <div className="text-primary mb-1">{metric.icon}</div>
                  <div className="text-xl font-black mb-0 leading-none">{metric.val}</div>
                  <div className="font-bold text-xs">{metric.label}</div>
                  <div className="text-[9px] text-text-secondary leading-relaxed mt-2">{metric.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Apa kata mitra korporasi kami */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-12 text-center">Apa kata mitra korporasi kami</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-subtle">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center font-bold text-primary">RM</div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary">Rumah Makan Padang Sederhana</h4>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-6 italic">
                "Pasokan selalu tepat waktu dan kualitas daging sangat terjaga. Membantu operasional restoran kami berjalan lancar."
              </p>
              <div className="text-[10px] font-bold text-text-primary">— Manajer Operasional</div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-subtle">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center font-bold text-primary">GZ</div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary">Grand Zuri Hotels</h4>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-6 italic">
                "Dombantara menjadi vendor yang dapat diandalkan untuk kebutuhan daging di seluruh outlet hotel kami."
              </p>
              <div className="text-[10px] font-bold text-text-primary">— Head of Procurement</div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-shadow relative">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-subtle">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center font-bold text-primary"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm text-text-primary">Pesantren Modern As-Salam</h4>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-6 italic">
                "Pengadaan untuk kebutuhan santri sangat terbantu dengan layanan yang profesional dan sesuai syariat."
              </p>
              <div className="text-[10px] font-bold text-text-primary">— Bendahara Yayasan</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ B2B */}
      <section className="py-16 bg-surface border-t border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-10 text-center">Frequently Asked Questions (B2B)</h2>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Berapa Minimum Order Quantity (MOQ) untuk pengiriman reguler?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  MOQ bervariasi bergantung pada jenis produk dan lokasi pengiriman. Untuk wilayah Jabodetabek, pengiriman daging mulai dari 50 kg dan hewan hidup mulai dari 10 ekor. Hubungi tim sales kami untuk penawaran spesifik.
                </div>
              </details>
              
              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Apakah Dombantara menyediakan Term of Payment (ToP) untuk korporasi?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Ya, kami memfasilitasi Term of Payment (ToP) mulai dari 7 hingga 30 hari kalender, yang dapat diajukan setelah lolos verifikasi kredit dan penandatanganan PKS (Perjanjian Kerja Sama).
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Bagaimana kebijakan retur jika kualitas produk tidak sesuai spesifikasi?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Kami memberikan Garansi Kualitas 100%. Jika ada produk yang diterima di luar spesifikasi yang disepakati (misal: suhu produk beku turun, atau spek potongan salah), kami akan melakukan penukaran produk maksimal 1x24 jam sejak produk diterima dan dilaporkan.
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Apakah Dombantara bisa menyesuaikan spesifikasi potongan (custom cut)?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Tentu. Kami memiliki tim butcher profesional yang siap memproses daging sesuai spesifikasi gramasi, jenis potongan (slice, dice, minced), hingga persentase lemak yang dibutuhkan bisnis Anda.
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Apakah pengiriman menggunakan armada berpendingin (chiller/freezer)?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Semua pengiriman produk daging kami menggunakan armada berpendingin khusus (Thermo King) untuk memastikan rantai dingin (cold chain) tetap terjaga dari RPH hingga ke lokasi Anda.
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Dokumen legalitas apa saja yang disertakan dalam pengiriman?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Setiap pengiriman B2B dilengkapi dengan Invoice, Surat Jalan, Salinan Sertifikat Halal MUI, dan Surat Keterangan Kesehatan Hewan (SKKH) dari dinas terkait untuk menjamin keamanan produk.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-[#145C33] rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-xl">
            
            {/* Left Image */}
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#145C33] z-10 opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="CS Agent" 
                className="w-full h-full object-cover object-left"
              />
            </div>
            
            {/* Middle Content */}
            <div className="md:w-1/3 p-8 lg:p-12 flex flex-col justify-center text-white z-20">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4 leading-tight">
                Mari bangun sistem pasokan yang lebih stabil untuk bisnis Anda
              </h2>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Diskusikan kebutuhan pengadaan, spesifikasi produk, volume, dan jadwal distribusi bersama tim sales korporasi Dombantara.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle size={14} className="text-status-success" /> Respon cepat</div>
                <div className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle size={14} className="text-status-success" /> Penawaran resmi</div>
                <div className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle size={14} className="text-status-success" /> Konsultasi tanpa biaya</div>
              </div>
            </div>

            {/* Right Contact Box */}
            <div className="md:w-1/3 p-8 lg:p-12 flex items-center justify-center bg-[#145C33] z-20 border-l border-white/10">
              <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
                <h3 className="font-bold text-text-primary text-sm mb-1">Hubungi Sales Korporasi</h3>
                <p className="text-[10px] text-text-secondary mb-6">Tim kami siap membantu kebutuhan bisnis Anda.</p>
                
                <div className="space-y-4">
                  <a href="https://wa.me/6282299199143" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary text-sm group-hover:text-primary transition-colors">+62 822-9919-9143</div>
                      <div className="text-[10px] text-text-secondary">WhatsApp / Telepon</div>
                    </div>
                  </a>
                  
                  <a href="mailto:sales@dombantara.co.id" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary text-sm group-hover:text-primary transition-colors">sales@dombantara.co.id</div>
                      <div className="text-[10px] text-text-secondary">Email Resmi</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
