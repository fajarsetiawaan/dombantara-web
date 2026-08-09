"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, ChevronDown, ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const glassDropClasses = `absolute -inset-x-4 -inset-y-2 rounded-full backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -z-10 scale-90 group-hover:scale-100 ${isScrolled || theme === "light"
      ? "bg-primary/5 border border-primary/10 shadow-[0_4px_16px_rgba(11,48,26,0.06)]"
      : "bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
    }`;

  const isLightText = !isScrolled && theme === "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white text-text-primary shadow-sm"
            : theme === "light"
              ? "bg-transparent text-text-primary"
              : "bg-transparent text-white"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src={isScrolled || theme === "light" ? "/images/logo-dombantara/dombatara logo/4-cropped.png" : "/images/logo-dombantara/dombatara logo-besar.png"} 
              alt="Dombantara" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain" 
            />
            <div>
              <h1 className="font-display font-bold leading-none text-lg md:text-xl">DOMBANTARA</h1>
              <p className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-0.5 ${isScrolled || theme === "light" ? 'text-primary' : 'text-white/80'}`}>Domba Nusantara</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                <div className="absolute top-[40px] -left-4 w-56 bg-white rounded-2xl shadow-xl shadow-black/5 border border-border-subtle opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden text-text-primary">
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

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/keranjang" className={`p-2 rounded-full transition-colors relative ${isScrolled || theme === "light" ? 'text-text-primary hover:bg-surface' : 'text-white hover:bg-white/10'}`}>
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Link>
            <button className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-white hover:text-primary'}`}>
              <Phone size={16} /> Hubungi Kami
            </button>
          </div>

          {/* Mobile Right Actions & Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/keranjang" className={`p-2 rounded-full relative transition-colors ${isLightText ? 'text-white' : 'text-text-primary'}`}>
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-md ${isLightText ? 'text-white' : 'text-text-primary'}`}
              aria-label="Buka Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <span className="font-display font-bold text-xl text-primary">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-surface rounded-full text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col gap-2 text-base font-bold text-text-primary">
                  <Link 
                    href="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-surface hover:text-primary transition-colors"
                  >
                    Beranda
                  </Link>
                  <Link 
                    href="/ekosistem" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-surface hover:text-primary transition-colors"
                  >
                    Ekosistem
                  </Link>
                  <div className="pl-8 flex flex-col gap-1 text-sm font-medium text-text-secondary border-l-2 border-surface ml-6 my-2">
                    <Link href="/ekosistem/farm" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Farm</Link>
                    <Link href="/ekosistem/fresh" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Fresh</Link>
                    <Link href="/ekosistem/supply" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Supply</Link>
                    <Link href="/ekosistem/tech" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Tech</Link>
                    <Link href="/ekosistem/academy" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Academy</Link>
                    <Link href="/ekosistem/partner" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Dombantara Partner</Link>
                  </div>
                  <Link 
                    href="/market" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-surface hover:text-primary transition-colors"
                  >
                    Market
                  </Link>
                  <Link 
                    href="/artikel" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-surface hover:text-primary transition-colors"
                  >
                    Artikel
                  </Link>
                  <Link 
                    href="/kontak" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-surface hover:text-primary transition-colors"
                  >
                    Kontak
                  </Link>
                </nav>
              </div>

              <div className="p-6 border-t border-border-subtle bg-surface/50">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  <Phone size={18} /> Hubungi Kami
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
