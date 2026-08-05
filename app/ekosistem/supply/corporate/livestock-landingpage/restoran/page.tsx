"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown,
  Menu,
  ArrowDown,
  Truck,
  TrendingUp,
  Beef,
  Handshake,
  AlertTriangle,
  XCircle,
  CheckCircle,
  User,
  ArrowRight,
  Store,
  Tag,
  Award,
  Users,
  Tractor,
  Calendar,
  MapPin,
  Check,
  ClipboardCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function RestoranLandingPage() {
  const [notifIndex, setNotifIndex] = useState(0);
  const [showNotif, setShowNotif] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndProducts = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveProduct((prev) => (prev + 1) % productsData.length);
    }
    if (isRightSwipe) {
      setActiveProduct((prev) => (prev - 1 + productsData.length) % productsData.length);
    }
  };

  const onTouchEndTesti = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveTesti((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setActiveTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const [activeTesti, setActiveTesti] = useState(0);
  const productsData = [
    {
      id: 'domba',
      title: 'Domba',
      image: 'https://images.unsplash.com/photo-1511117833845-4089906d028b?q=80&w=1200&auto=format&fit=crop',
      description: 'Domba hidup berkualitas tinggi, dipelihara dengan pakan terbaik untuk menghasilkan daging empuk.',
      details: [
        { label: 'Domba Jantan', price: 'Rp 2.500.000 / ekor' },
        { label: 'Domba Betina', price: 'Rp 2.000.000 / ekor' },
        { label: 'Harga per kilo (Hidup)', price: 'Rp 90.000 / kg' }
      ]
    },
    {
      id: 'kambing',
      recommended: true,
      title: 'Kambing',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1200&auto=format&fit=crop',
      description: 'Kambing pilihan dengan rasio daging dan lemak yang ideal untuk berbagai menu andalan restoran.',
      details: [
        { label: 'Kambing Jantan', price: 'Rp 2.800.000 / ekor' },
        { label: 'Kambing Betina', price: 'Rp 2.200.000 / ekor' },
        { label: 'Harga per kilo (Hidup)', price: 'Rp 100.000 / kg' }
      ]
    },
    {
      id: 'karkas',
      title: 'Karkas Siap Masak',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1200&auto=format&fit=crop',
      description: 'Daging potong higienis dan terstandar, 100% halal, siap diolah tanpa repot membersihkan.',
      details: [
        { label: 'Karkas Domba (Utuh)', price: 'Rp 115.000 / kg' },
        { label: 'Karkas Kambing (Utuh)', price: 'Rp 125.000 / kg' },
        { label: 'Daging Potongan Khusus', price: 'Mulai Rp 135.000 / kg' }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Owner Sate Khas Senayan",
      text: "Sejak beralih ke Dombantara, kualitas dan ukuran daging selalu konsisten. Sangat membantu menjaga standar HPP kami.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      name: "Chef Ario",
      role: "Executive Chef Hotel Bintang 5",
      text: "Potongan karkas presisi dan pengiriman selalu on-time. Tidak pernah ada masalah stok kosong selama 6 bulan terakhir.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      name: "Hj. Aminah",
      role: "Pengusaha Aqiqah Nusantara",
      text: "Bisa pesan hewan hidup sesuai syariat dengan surat sehat. Proses potong juga terjamin kehalalannya.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];


  const notifications = [
    { name: "RM Padang Prima", action: "memesan 15 ekor domba", time: "2 jam lalu" },
    { name: "Sate Khas", action: "mulai berlangganan pasokan harian", time: "5 jam lalu" },
    { name: "Hotel Bintang", action: "memesan 20 ekor domba", time: "1 hari lalu" },
    { name: "Resto Sultan", action: "baru saja bergabung menjadi Mitra", time: "Baru saja" },
    { name: "Aqiqah Plus", action: "menyelesaikan pesanan 50 ekor", time: "2 hari lalu" }
  ];

  useEffect(() => {
    // Start showing notifications after 3 seconds
    const initialTimeout = setTimeout(() => {
      setShowNotif(true);
      setTimeout(() => setShowNotif(false), 5000);
    }, 3000);

    const interval = setInterval(() => {
      setNotifIndex((prev) => (prev + 1) % notifications.length);
      setShowNotif(true);
      
      // Hide after 5 seconds
      setTimeout(() => setShowNotif(false), 5000);
    }, 15000); // show a new one every 15 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-body flex flex-col selection:bg-primary selection:text-white relative overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/lp-sheep-image.png" 
            alt="Domba Premium" 
            className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
        </div>

        {/* Top Navbar */}
        <div className="relative z-10 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            {/* Simple logo placeholder to match screenshot */}
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-wide font-display">DOMBANTARA</div>
              <div className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Livestock</div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full pt-16 md:pt-0">
          <div className="max-w-2xl mt-8 sm:mt-12 md:mt-0">
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Dapur Anda<br/>
              Berhenti Masak<br/>
              Karena Kambing &<br/>
              Domba Telat Datang?
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
              Masalah pasokan bukan cuma soal telat.<br/>
              Tapi tentang kepercayaan, kualitas,<br/>
              dan kelangsungan bisnis Anda.
            </p>
            <div className="mt-4 mb-8">
              <Link 
                href="https://wa.me/6281234567890" 
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50"
              >
                <FaWhatsapp size={24} />
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="relative z-10 w-full pb-8 flex flex-col items-center justify-center opacity-70 animate-bounce mt-12">
          <ArrowDown size={20} className="text-white mb-2" />
          <span className="text-white text-xs tracking-wider">Scroll untuk lihat solusinya</span>
        </div>
      </section>

      {/* Mitra Kolaborasi (Under Megatron) */}
      <section className="py-16 md:py-20 bg-white border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-12">
            Mitra Kolaborasi Kami
          </p>
          
          <div className="relative flex flex-col gap-4 md:gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">

            {/* Marquee Row 1 */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4 md:gap-6 shrink-0">
                  {["Resto Sultan", "Sate Khas", "Hotel Bintang", "Aqiqah Plus", "Catering Co.", "Resto Sultan", "Sate Khas"].map((name, j) => (
                    <div key={j} className="flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-border-subtle bg-surface shadow-sm transition-transform hover:scale-105 cursor-pointer group">
                      <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                      <span className="font-display font-bold text-base md:text-lg text-text-primary opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Marquee Row 2 (Reverse) */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-6" style={{ animationDirection: 'reverse' }}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4 md:gap-6 shrink-0">
                  {["Warung Nusantara", "Steak House", "RM Padang Prima", "Wedding Organizer", "Kebab Boss", "Warung Nusantara", "Steak House"].map((name, j) => (
                    <div key={j} className="flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-border-subtle bg-surface shadow-sm transition-transform hover:scale-105 cursor-pointer group">
                      <div className="w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors"></div>
                      <span className="font-display font-bold text-base md:text-lg text-text-primary opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problems Section */}
      <section className="py-20 md:py-28 px-6 bg-surface relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-status-error text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Masalah Yang Sering Anda Hadapi
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              Masalahnya Bukan Sekadar Supplier.
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="relative bg-white border-2 border-red-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center shadow-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full">
                <XCircle className="text-status-error fill-white" size={32} />
              </div>
              <Truck size={48} className="text-status-error mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-neutral-900 text-lg mb-2"><span className="text-status-error">Kiriman</span> Telat</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Pelanggan menunggu, reputasi Anda taruhannya.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border-2 border-red-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center shadow-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full">
                <XCircle className="text-status-error fill-white" size={32} />
              </div>
              <TrendingUp size={48} className="text-status-error mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-neutral-900 text-lg mb-2">Harga <span className="text-status-error">Naik Turun</span></h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Margin keuntungan jadi tidak menentu.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border-2 border-red-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center shadow-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full">
                <XCircle className="text-status-error fill-white" size={32} />
              </div>
              <Beef size={48} className="text-status-error mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-neutral-900 text-lg mb-2">Kualitas <span className="text-status-error">Tidak Konsisten</span></h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Ukuran, berat, dan kondisi berbeda setiap kiriman.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white border-2 border-red-50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center shadow-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full">
                <XCircle className="text-status-error fill-white" size={32} />
              </div>
              <Handshake size={48} className="text-status-error mb-4" strokeWidth={1.5} />
              <h4 className="font-bold text-neutral-900 text-lg mb-2"><span className="text-status-error">Nego</span> Terus</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Setiap order harus nego ulang. Buang waktu dan tenaga.
              </p>
            </div>

          </div>

          {/* Warning Banner */}
          <div className="bg-red-50/50 border border-status-error/30 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left max-w-4xl mx-auto">
            <AlertTriangle className="text-status-error shrink-0" size={32} />
            <p className="text-sm md:text-base text-neutral-800">
              Kalau Anda mengalami salah satu masalah di atas, Anda tidak butuh supplier baru. <strong className="text-status-error">Anda butuh sistem pasokan.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 3. Bridge Section */}
      <section className="bg-[#051109] py-20 md:py-24 px-6 text-white overflow-hidden relative rounded-[40px] md:rounded-[80px] mx-4 md:mx-8 my-12 md:my-20 shadow-2xl">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-primary/20 blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Karena Itu
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Dombantara Dibangun.
            </h2>
          </div>

          {/* Flowchart */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-8 mb-16">
            
            {/* Box 1 */}
            <div className="flex flex-col items-center justify-center border-2 border-primary/40 rounded-2xl p-6 w-full md:w-56 bg-black/40 backdrop-blur-sm">
              <Tractor size={40} className="text-white mb-3" />
              <div className="font-bold text-white text-center">Mitra<br/>Dombantara</div>
            </div>

            {/* Arrow 1 */}
            <ArrowRight size={32} className="text-primary hidden md:block shrink-0" />
            <ArrowDown size={32} className="text-primary block md:hidden shrink-0" />

            {/* Box 2 (Center) */}
            <div className="flex flex-col items-center justify-center border-2 border-primary rounded-3xl p-8 w-full md:w-72 bg-primary/10 backdrop-blur-md shadow-[0_0_30px_rgba(20,92,51,0.2)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-none tracking-wide font-display">DOMBANTARA</div>
                  <div className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Livestock</div>
                </div>
              </div>
              <div className="text-sm text-gray-300 text-center font-medium">Sistem Terintegrasi & Terjamin</div>
            </div>

            {/* Arrow 2 */}
            <ArrowRight size={32} className="text-primary hidden md:block shrink-0" />
            <ArrowDown size={32} className="text-primary block md:hidden shrink-0" />

            {/* Box 3 */}
            <div className="flex flex-col items-center justify-center border-2 border-primary/40 rounded-2xl p-6 w-full md:w-56 bg-black/40 backdrop-blur-sm">
              <Store size={40} className="text-white mb-3" />
              <div className="font-bold text-white text-center">Restoran, Hotel,<br/>Catering & Instansi</div>
            </div>

          </div>

          <p className="text-center text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Menjembatani peternak dan pelaku usaha<br className="hidden md:block" />
            melalui sistem pasokan yang transparan, stabil, dan terpercaya.
          </p>
        </div>
      </section>

      {/* 4. Solutions Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Solusi Dari Dombantara
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              Pasokan Stabil, Bisnis Tenang.
            </h2>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-6 lg:gap-8 mt-4">
            
            {/* Card 1 */}
            <div className="relative bg-[#F7FAF8] rounded-2xl p-6 pt-14 flex flex-col items-center text-center h-full">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg shadow-primary/20 border-4 border-white">
                <Truck size={32} className="text-white" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                   <CheckCircle className="text-primary fill-white" size={16} />
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-2"><span className="text-primary">Kirim</span> Tepat Waktu</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Pengiriman harian, tepat waktu, sesuai jadwal yang disepakati.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#F7FAF8] rounded-2xl p-6 pt-14 flex flex-col items-center text-center h-full">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg shadow-primary/20 border-4 border-white">
                <Tag size={32} className="text-white" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                   <CheckCircle className="text-primary fill-white" size={16} />
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-2">Harga <span className="text-primary">Tetap</span></h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Harga transparan dan stabil, tanpa kejutan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#F7FAF8] rounded-2xl p-6 pt-14 flex flex-col items-center text-center h-full">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg shadow-primary/20 border-4 border-white">
                <Award size={32} className="text-white" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                   <CheckCircle className="text-primary fill-white" size={16} />
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-2">Kualitas <span className="text-primary">Konsisten</span></h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Domba & kambing sehat, standar terjaga setiap saat.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative bg-[#F7FAF8] rounded-2xl p-6 pt-14 flex flex-col items-center text-center h-full">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3 shadow-lg shadow-primary/20 border-4 border-white">
                <ClipboardCheck size={32} className="text-white" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                   <CheckCircle className="text-primary fill-white" size={16} />
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg mb-2">Proses <span className="text-primary">Mudah</span></h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Order, konfirmasi, hingga pengiriman. Praktis dan tanpa ribet.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Produk & Layanan Baru */}
      <section className="py-20 md:py-28 bg-surface relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-20">
            <h3 className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Papan Harga
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              Produk & Layanan
            </h2>

          </div>

          <div className="relative w-full max-w-5xl mx-auto px-4 pb-8 pt-4">
            <div 
              className={`flex justify-center items-center relative transition-all duration-500 ease-in-out ${expandedProduct ? 'h-[750px] sm:h-[650px]' : 'h-[500px] sm:h-[450px]'}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEndProducts}
            >
              {productsData.map((prod, i) => {
                const isActive = i === activeProduct;
                const isLeft = i === (activeProduct - 1 + productsData.length) % productsData.length;
                const isRight = i === (activeProduct + 1) % productsData.length;
                
                let transform = "translateX(0) scale(0)";
                let opacity = 0;
                let zIndex = 0;
                let blur = "blur-0";

                if (isActive) {
                  transform = "translateX(0) scale(1)";
                  opacity = 1;
                  zIndex = 20;
                } else if (isLeft) {
                  transform = "translateX(-40%) scale(0.85)";
                  opacity = 0.6;
                  zIndex = 10;
                  blur = "blur-[4px]";
                } else if (isRight) {
                  transform = "translateX(40%) scale(0.85)";
                  opacity = 0.6;
                  zIndex = 10;
                  blur = "blur-[4px]";
                }

                return (
                  <div 
                    key={prod.id}
                    className={`absolute w-full max-w-[85vw] sm:max-w-[380px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${blur} ${!isActive && 'cursor-pointer hover:opacity-100'}`}
                    style={{ transform, opacity, zIndex }}
                    onClick={() => !isActive && setActiveProduct(i)}
                  >
                    <div className="bg-white rounded-[32px] border border-border-subtle overflow-hidden shadow-xl flex flex-col group h-full">
                      <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                        <img 
                          src={prod.image} 
                          alt={prod.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* {prod.recommended && ( */}
                        {prod.id === 'kambing' && (
                          <div className="absolute top-4 right-4 bg-accent-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                            Recommended
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1 bg-white">
                        <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                          {prod.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                          {prod.description}
                        </p>
                        
                        <div className="mt-auto">
                          {/* Expand Button */}
                          <button 
                            onClick={(e) => { e.stopPropagation(); setExpandedProduct(expandedProduct === prod.id ? null : prod.id); }}
                            className="w-full py-4 px-5 mb-2 rounded-2xl bg-surface border border-border-subtle text-text-primary font-bold text-sm sm:text-base flex items-center justify-between hover:bg-primary/5 hover:border-primary/30 transition-colors"
                          >
                            Lihat Detail Harga
                            <div className={`transition-transform duration-300 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-border-subtle ${expandedProduct === prod.id ? 'rotate-180 bg-primary border-primary text-white' : 'text-text-primary'}`}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                            </div>
                          </button>
                          
                          {/* Expanded Details */}
                          <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedProduct === prod.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                          >
                            <ul className="space-y-0 mb-6 bg-white border border-border-subtle rounded-2xl overflow-hidden shadow-sm">
                              {prod.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex justify-between items-center text-xs sm:text-sm p-4 border-b border-border-subtle last:border-0 hover:bg-surface transition-colors">
                                  <span className="text-text-muted">{detail.label}</span>
                                  <span className="font-bold text-primary">{detail.price}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="flex flex-col gap-3 w-full">
                              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center gap-2 shadow-md hover:shadow-lg">
                                Pesan Sekarang 
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                              </button>
                              <button className="bg-white border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3.5 px-6 rounded-2xl w-full text-center transition-all flex justify-center items-center shadow-sm">
                                Minta Harga Percobaan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div></div>
          
        </div>
      </section>

      




      {/* 5. Stats Banner Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="relative w-full overflow-hidden rounded-[24px] md:rounded-[40px] bg-black">
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1516223594879-a78c18cb9c02?auto=format&fit=crop&q=80" 
              alt="Peternakan Domba" 
              className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center pt-0 md:pt-0">
                <Tractor size={48} className="text-primary mb-4" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">500+</div>
                <div className="text-lg font-bold text-white mb-1">Mitra Dombantara</div>
                <div className="text-sm text-gray-400">Terseleksi & Terpercaya</div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center pt-10 md:pt-0">
                <Calendar size={48} className="text-primary mb-4" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Setiap Hari</div>
                <div className="text-lg font-bold text-white mb-1">Pasokan Dikirim</div>
                <div className="text-sm text-gray-400">Tanpa Putus</div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center pt-10 md:pt-0">
                <MapPin size={48} className="text-primary mb-4" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Jabodetabek</div>
                <div className="text-lg font-bold text-white mb-1">Jangkauan Luas</div>
                <div className="text-sm text-gray-400">Kirim ke seluruh area</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Testimoni Carousel */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="relative overflow-hidden">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-widest mb-4">
                Testimoni
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
                Apa kata pelanggan kami
              </h2>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
              <div 
                className="flex justify-center items-center h-[320px] md:h-[280px] relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEndTesti}
              >
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
            </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white relative z-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
          <div>
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8 text-center">Tanya Jawab Seputar Pasokan</h2>
            <div className="bg-surface rounded-[24px] border border-border-subtle shadow-sm overflow-hidden p-2">
              {[
                {
                  q: "Berapa minimal pesanan untuk mendapatkan harga khusus restoran?",
                  a: "Untuk mendapatkan harga langganan khusus rumah makan atau warung sate, minimal pemesanannya sangat fleksibel. Biasanya mulai dari 2-3 ekor (atau karkas) per pengiriman, tergantung kesepakatan jadwal kirim ke dapur Anda."
                },
                {
                  q: "Apakah Dombantara bisa menjamin pasokan stabil setiap hari?",
                  a: "Tentu. Sistem langganan kami dirancang khusus agar operasional dapur Anda tidak pernah berhenti. Kami akan mengunci harga dan menjadwalkan pengiriman rutin sesuai kebutuhan harian atau mingguan Anda tanpa takut kehabisan stok."
                },
                {
                  q: "Apakah daging bisa langsung dipotong sesuai kebutuhan menu sate/gulai?",
                  a: "Sangat bisa! Kami menyediakan layanan karkas utuh maupun pemotongan spesifik (potongan dadu untuk sate, tulang untuk gulai, dll) yang semuanya diproses di Rumah Potong Hewan (RPH) bersertifikat halal."
                },
                {
                  q: "Bagaimana sistem pembayarannya untuk langganan restoran?",
                  a: "Pembayaran sangat mudah. Kami menyediakan sistem invoice untuk kemudahan pembayaran mingguan atau bulanan (Term of Payment) khusus bagi mitra warung makan dan restoran yang sudah berlangganan tetap."
                },
                {
                  q: "Apakah pesanan diantar langsung ke dapur restoran?",
                  a: "Betul. Armada pengiriman kami (cold-chain untuk karkas) siap mengantar pesanan langsung ke pintu dapur restoran atau warung Anda di seluruh wilayah Jabodetabek agar kesegaran daging selalu terjaga."
                },
                {
                  q: "Bagaimana jika kualitas daging yang datang kurang bagus?",
                  a: "Kami memberikan Garansi Penggantian 100%. Jika daging atau karkas yang tiba di dapur Anda tidak sesuai dengan standar kesepakatan, kami akan menggantinya agar pelayanan restoran Anda ke pelanggan tidak terganggu."
                }
              ].map((item, idx, arr) => (
                <div 
                  key={idx} 
                  className={`p-4 sm:p-6 ${idx !== arr.length - 1 ? 'border-b border-border-subtle' : ''} transition-colors group relative z-30`}
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className={`font-bold text-sm sm:text-base md:text-lg ${openFaq === idx ? 'text-primary' : 'text-text-primary group-hover:text-primary transition-colors'}`}>
                      {item.q}
                    </span>
                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border-subtle transition-all duration-300 shadow-sm shrink-0 ml-4 ${openFaq === idx ? 'text-white bg-primary border-primary rotate-180' : 'text-text-primary group-hover:text-primary'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  
                  {/* Accordion Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed pr-14">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
</div></section>

{/* 6. Final CTA Section */}
      <section className="px-4 md:px-8 py-10 md:py-20 bg-white">
        <div className="bg-[#0A0A0A] rounded-[24px] md:rounded-[40px] py-16 px-6 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary/10 blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.2] mb-6">
              Coba Dulu, <span className="text-[#34D399]">Buktikan Sendiri</span><br/>
              Bedanya.
            </h2>
            <div className="text-gray-300 text-base md:text-lg mb-12 space-y-6 max-w-3xl mx-auto leading-relaxed">
              <p>
                Order pertama Anda kami beri harga percobaan. Kalau ternyata tidak lebih baik dari suplier Anda sekarang, tidak ada kewajiban lanjut — tapi begitu coba sekali, dapur Anda kemungkinan besar tidak mau kembali ke cara lama.
              </p>
              <p>
                Jumlah mitra baru per kawasan kami batasi agar jadwal kirim harian tetap tepat waktu untuk semua pelanggan — amankan slot untuk usaha Anda sebelum kuota kawasan penuh.
              </p>
            </div>
            
            <Link 
              href="https://wa.me/6281234567890" 
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-lg md:text-xl py-5 px-8 md:px-12 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-green-900/30 w-full sm:w-auto"
            >
              <FaWhatsapp size={28} />
              Coba Order Pertama
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check size={16} className="text-primary" strokeWidth={3} />
                Konsultasi Gratis
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check size={16} className="text-primary" strokeWidth={3} />
                Respons Cepat
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check size={16} className="text-primary" strokeWidth={3} />
                Tanpa Komitmen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Popup */}
      <div 
        className={`fixed top-6 left-4 md:top-8 md:left-8 z-50 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-border-subtle p-4 pr-6 max-w-[320px] flex gap-4 items-center transition-all duration-700 transform ${
          showNotif ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 relative">
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
          <MapPin size={24} />
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-900 mb-0.5">{notifications[notifIndex].name}</p>
          <p className="text-xs text-neutral-600 leading-snug">
            {notifications[notifIndex].action}{' '}
            <span className="font-semibold text-primary">{notifications[notifIndex].time}</span>
          </p>
        </div>
      </div>


      {/* 7. Footer */}
      <footer className="bg-[#051109] pt-20 pb-10 px-6 text-white border-t border-white/5 relative z-10 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[200px] bg-primary/10 blur-[120px] pointer-events-none"></div>
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16 relative z-10">
          
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#051109] font-display font-bold text-xl shadow-lg">
                D
              </div>
              <div>
                <div className="font-display font-bold text-xl tracking-wider leading-none mb-1">DOMBANTARA</div>
                <div className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Domba Nusantara</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Membangun ekosistem peternakan domba yang terintegrasi, transparan, dan berkelanjutan untuk Indonesia yang lebih baik.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-gray-400">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-gray-400">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-gray-400">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 text-gray-400 font-bold">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex justify-center items-center relative z-10">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dombantara. Hak cipta dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}

