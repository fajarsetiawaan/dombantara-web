import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-base/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-wide text-accent-primary">
            DOMBANTARA
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/katalog" className="text-text-muted hover:text-text-primary transition-colors">Katalog</Link>
            <Link href="/tentang" className="text-text-muted hover:text-text-primary transition-colors">Tentang Kami</Link>
            <Link href="/kemitraan" className="text-text-muted hover:text-text-primary transition-colors">Kemitraan</Link>
            <Link href="/kontak" className="text-text-muted hover:text-text-primary transition-colors">Kontak</Link>
          </nav>
          <div className="flex items-center gap-4">
            <WhatsAppCTA size="sm" className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Logo & About */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold font-display text-xl">D</div>
                <div>
                  <h2 className="font-display text-2xl text-white tracking-wide leading-none">DOMBANTARA</h2>
                  <p className="text-accent-primary text-xs font-bold tracking-widest mt-1">INDONESIA</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Solusi pasokan daging domba & kambing premium dari hulu hingga hilir melalui ekosistem yang terintegrasi & inovatif.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors text-xs font-bold">
                  IG
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors text-xs font-bold">
                  FB
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors text-xs font-bold">
                  YT
                </a>
              </div>
            </div>

            {/* Column 2: Layanan */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Layanan</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Hewan Hidup</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Karkas & Daging</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">RPA Tersertifikasi</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Integrasi Pasokan</Link></li>
              </ul>
            </div>

            {/* Column 3: Informasi */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Informasi</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Katalog Produk</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="hover:text-accent-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 4: Kontak Kami */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Kontak Kami</h3>
              <ul className="space-y-4 text-sm mb-8">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-accent-primary shrink-0" />
                  <span>Jl. Raya Garut - Tasikmalaya No. 45,<br/>Garut, Jawa Barat 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent-primary shrink-0" />
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent-primary shrink-0" />
                  <span>halo@dombantara.id</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="text-accent-primary shrink-0" />
                  <span>Senin - Sabtu (Jum&apos;at Libur):<br/>08:00 - 17:00 WIB</span>
                </li>
              </ul>
              
              <h3 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Newsletter</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="bg-slate-800 border-none rounded-md px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-accent-primary text-white"
                />
                <button className="bg-[#EAB308] text-slate-900 p-2.5 rounded-md hover:bg-yellow-400 transition-colors shrink-0">
                  <Send size={18} />
                </button>
              </div>
            </div>

          </div>
          
          {/* Footer Bottom */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Dombantara Indonesia. All rights reserved.</p>
            <p>No. NIB: 1234567890 | No. Halal: ID1234567890</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <WhatsAppCTA iconOnly />
      </div>
    </div>
  );
}
