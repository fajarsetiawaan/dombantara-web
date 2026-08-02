"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, ChevronDown } from "lucide-react";

const ekosistemMenu = [
  { title: "Dombantara Farm", desc: "Peternakan" },
  { title: "Dombantara Fresh", desc: "Fresh Food" },
  { title: "Dombantara Supply", desc: "Rantai Pasok" },
  { title: "Dombantara Academy", desc: "Edukasi & Pelatihan" },
  { title: "Dombantara Tech", desc: "Sistem & Aplikasi" },
  { title: "Dombantara Partner", desc: "Jaringan Kemitraan" },
];

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
          <div className={`w-8 h-8 rounded flex items-center justify-center font-bold font-display ${isScrolled || theme === "light" ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            D
          </div>
          <div>
            <h1 className="font-display font-bold leading-none text-lg">DOMBANTARA</h1>
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

          <div className="relative group py-6 cursor-pointer">
            <Link href="/produk" className="relative block">
              <span className="relative z-10 flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                Ekosistem <ChevronDown size={14} className="group-hover:text-primary transition-all duration-300 group-hover:rotate-180" />
              </span>
              <span className={glassDropClasses}></span>
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0">
              <div className="w-56 bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-2 flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                {ekosistemMenu.map((item, idx) => (
                  <Link href="/produk" key={idx} className="block group/item px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors relative z-10">
                    <h3 className="font-display font-bold text-[11px] tracking-widest text-text-primary group-hover/item:text-primary transition-colors">{item.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>

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

        <button className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-white hover:text-primary'
          }`}>
          <Phone size={16} /> Hubungi Kami
        </button>
      </div>
    </header>
  );
}
