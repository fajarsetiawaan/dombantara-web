"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, ChevronDown, ShoppingCart } from "lucide-react";

// Menu Ekosistem dihapus karena sekarang menjadi halaman tersendiri

export default function Header({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassDropClasses = `absolute -inset-x-4 -inset-y-2 rounded-full backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -z-10 scale-90 group-hover:scale-100 ${isScrolled || theme === "light"
      ? "bg-primary/5 border border-primary/10 shadow-[0_4px_16px_rgba(11,48,26,0.06)]"
      : "bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white text-text-primary shadow-sm"
          : theme === "light"
            ? "bg-transparent text-text-primary"
            : "bg-transparent text-white"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={isScrolled || theme === "light" ? "/images/logo-dombantara/dombatara logo/4-cropped.png" : "/images/logo-dombantara/dombatara logo-besar.png"} 
            alt="Dombantara" 
            className="w-12 h-12 object-contain" 
          />
          <div>
            <h1 className="font-display font-bold leading-none text-xl">DOMBANTARA</h1>
            <p className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${isScrolled || theme === "light" ? 'text-primary' : 'text-white/80'}`}>Domba Nusantara</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-bold text-[11px] lg:text-xs tracking-[0.15em] uppercase">
          <Link href="/" className="group flex items-center justify-center py-6">
            <div className="relative">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Beranda</span>
              <span className={glassDropClasses}></span>
            </div>
          </Link>

          <div className="group flex items-center justify-center py-6 cursor-pointer">
            <div className="relative">
              <Link href="/ekosistem" className="relative z-10 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                Ekosistem <ChevronDown size={14} className="group-hover:-rotate-180 transition-transform duration-300" />
              </Link>
              <span className={glassDropClasses}></span>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[40px] -left-4 w-56 bg-white rounded-2xl shadow-xl shadow-black/5 border border-border-subtle opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden">
                <div className="py-2 flex flex-col font-bold text-[11px] text-left">
                  <Link href="/ekosistem/farm" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Farm</Link>
                  <Link href="/ekosistem/fresh" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Fresh</Link>
                  <Link href="/ekosistem/supply" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Supply</Link>
                  <Link href="/ekosistem/tech" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Tech</Link>
                  <Link href="/ekosistem/academy" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Academy</Link>
                  <Link href="/ekosistem/partner" className="px-5 py-3 hover:bg-surface text-text-secondary hover:text-primary transition-colors">Dombantara Partner</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/market" className="group flex items-center justify-center py-6">
            <div className="relative">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Market</span>
              <span className={glassDropClasses}></span>
            </div>
          </Link>

          <Link href="/artikel" className="group flex items-center justify-center py-6">
            <div className="relative">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Artikel</span>
              <span className={glassDropClasses}></span>
            </div>
          </Link>

          <Link href="/kontak" className="group flex items-center justify-center py-6">
            <div className="relative">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Kontak</span>
              <span className={glassDropClasses}></span>
            </div>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/keranjang" className={`p-2 rounded-full transition-colors relative ${isScrolled || theme === "light" ? 'text-text-primary hover:bg-surface' : 'text-white hover:bg-white/10'}`}>
            <ShoppingCart size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </Link>
          <button className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-white hover:text-primary'
            }`}>
            <Phone size={16} /> Hubungi Kami
          </button>
        </div>
      </div>
    </header>
  );
}
