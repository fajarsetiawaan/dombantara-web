import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary font-bold font-display text-2xl group-hover:scale-105 transition-transform">
                D
              </div>
              <div>
                <h1 className="font-display font-bold leading-none text-2xl tracking-wide">DOMBANTARA</h1>
                <p className="text-xs font-bold tracking-widest uppercase mt-1 text-accent-primary">Domba Nusantara</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-8 pr-4">
              Peternakan domba terintegrasi berbasis teknologi untuk Indonesia yang lebih baik.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white">
                <FaYoutube size={18} />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary hover:-translate-y-1 transition-all text-white">
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          {/* Navigasi Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-6">Navigasi</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Beranda</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Ekosistem</Link></li>
              <li><Link href="/artikel" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Artikel</Link></li>
              <li><Link href="/kontak" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Kontak</Link></li>
            </ul>
          </div>

          {/* Ekosistem Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-6">Ekosistem</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Works</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Fresh</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Academy</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Care</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Digital</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Process</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Connect</Link></li>
              <li><Link href="/produk" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Dombantara Agri</Link></li>
            </ul>
          </div>

          {/* Kontak Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jl. Raya Ciomas No.88, Bogor, Jawa Barat 16610, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>0811-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@dombantara.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Dombantara. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
