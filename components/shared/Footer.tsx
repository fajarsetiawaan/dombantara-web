"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E4225] text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12 md:mb-16">
          {/* Logo Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <img 
                src="/images/logo-dombantara/dombatara logo-besar.png" 
                alt="Dombantara" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform" 
              />
              <div>
                <h1 className="font-display font-bold leading-none text-2xl md:text-3xl tracking-wide">DOMBANTARA</h1>
                <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 text-accent-primary">Domba Nusantara</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 md:mb-8 md:pr-4">
              Peternakan domba terintegrasi berbasis teknologi untuk Indonesia yang lebih baik.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dombantara/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61592675289833" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@Dombantara" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white"
              >
                <FaYoutube size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@dombantara" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Navigasi Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 md:mb-6">Navigasi</h3>
            <ul className="space-y-3 md:space-y-4 text-white/80 text-sm">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Beranda</Link></li>
              <li><Link href="/ekosistem" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Ekosistem</Link></li>
              <li><Link href="/market" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Market</Link></li>
              <li><Link href="/artikel" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Artikel</Link></li>
              <li><Link href="/kontak" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Kontak</Link></li>
            </ul>
          </div>

          {/* Ekosistem Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 md:mb-6">Ekosistem</h3>
            <ul className="space-y-3 md:space-y-4 text-white/80 text-sm">
              <li><Link href="/ekosistem/farm" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Farm</Link></li>
              <li><Link href="/ekosistem/fresh" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Fresh</Link></li>
              <li><Link href="/ekosistem/supply" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Supply</Link></li>
              <li><Link href="/ekosistem/academy" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Academy</Link></li>
              <li><Link href="/ekosistem/tech" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Tech</Link></li>
              <li><Link href="/ekosistem/partner" className="hover:text-white hover:translate-x-1 inline-block transition-transform py-1">Dombantara Partner</Link></li>
            </ul>
          </div>

          {/* Kontak Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 md:mb-6">Kontak</h3>
            <ul className="space-y-4 md:space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span className="leading-relaxed block">
                  Jl. Raya Ciomas No.88,<br />
                  Bogor, Jawa Barat 16610,<br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a 
                  href="https://wa.me/6282299199143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent-primary transition-colors"
                >
                  +62 822-9919-9143
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@dombantara.id</span>
              </li>
            </ul>
          </div>

          {/* Jam Operasional Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 md:mb-6">Jam Operasional</h3>
            <div className="space-y-3 md:space-y-4 text-white/80 text-sm mb-6 md:mb-8">
              <div>
                <p className="font-semibold text-white">Senin - Jumat</p>
                <p>08.00 - 17.00 WIB</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sabtu</p>
                <p>08.00 - 14.00 WIB</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-white mb-3">Berlangganan Newsletter</p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 md:py-2.5 pl-4 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent-primary transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-primary transition-colors p-2 md:p-1 rounded-md"
                  aria-label="Berlangganan"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60 text-center md:text-left">
          <p>© 2026 Dombantara. Hak cipta dilindungi.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
