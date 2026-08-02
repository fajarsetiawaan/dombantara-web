import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary font-bold font-display text-xl">
                D
              </div>
              <div>
                <h1 className="font-display font-bold leading-none text-xl">DOMBANTARA</h1>
                <p className="text-xs font-bold tracking-widest uppercase mt-0.5 text-accent-primary">Domba Nusantara</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Peternakan domba terintegrasi berbasis teknologi untuk Indonesia yang lebih baik.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer font-bold text-xs">IG</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer font-bold text-xs">FB</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer font-bold text-xs">YT</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer font-bold text-xs">TT</div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold mb-4">Produk</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white">Qurban</Link></li>
              <li><Link href="#" className="hover:text-white">Aqiqah</Link></li>
              <li><Link href="#" className="hover:text-white">Bibit Domba</Link></li>
              <li><Link href="#" className="hover:text-white">Susu & Olahan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kemitraan</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white">Menjadi Mitra</Link></li>
              <li><Link href="#" className="hover:text-white">Keuntungan Mitra</Link></li>
              <li><Link href="#" className="hover:text-white">Cara Bergabung</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Perusahaan</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-white">Visi & Misi</Link></li>
              <li><Link href="#" className="hover:text-white">Tim Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Bantuan</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-white">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> 0811-1234-5678</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@dombantara.com</span>
            <span className="flex items-center gap-2 hidden lg:flex"><MapPin size={14} /> Bogor, Jawa Barat, Indonesia</span>
          </div>
          <p>© 2024 Dombantara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
