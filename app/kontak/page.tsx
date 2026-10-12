import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Reveal from '@/components/ui/Reveal';
import { 
  MessageCircle, ShieldCheck, Clock, CheckCircle2,
  Mail, Phone, Camera, Send, MapPin, Map,
  ChevronDown, ArrowRight
} from 'lucide-react';
import { getTimKontak, getLokasiKontak, getFaqKontak } from '@/lib/data-access/kontak.service';

export default async function KontakPage() {
  const timList = await getTimKontak();
  const lokasiList = await getLokasiKontak();
  const faqList = await getFaqKontak();

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[url('https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Copy */}
            <div>
              <Reveal index={0}>
                <div className="text-primary font-bold tracking-widest text-xs lg:text-sm uppercase mb-4 flex items-center gap-2">
                  KONTAK KAMI
                </div>
              </Reveal>
              <Reveal index={1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 max-w-xl">
                  Mari Bangun Peternakan Indonesia Bersama <span className="text-primary">Dombantara</span>
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className="text-text-muted text-lg mb-10 max-w-lg leading-relaxed">
                  Kami siap membantu Anda untuk kebutuhan qurban, aqiqah, pembelian bibit, kemitraan, atau informasi lainnya.
                </p>
              </Reveal>
              
              <Reveal index={3}>
                <div className="flex flex-col sm:flex-row gap-6 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-status-success/10 text-status-success flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">Respon Cepat</div>
                      <div className="text-text-muted text-xs">Tim kami siap membantu Anda</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-status-success/10 text-status-success flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">Aman & Terpercaya</div>
                      <div className="text-text-muted text-xs">Transaksi aman, terjamin syariah</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-status-success/10 text-status-success flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">Berpengalaman</div>
                      <div className="text-text-muted text-xs">Dipercaya 10.000+ pelanggan</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Floating Card */}
            <Reveal index={4} className="hidden lg:flex justify-end">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-border-subtle max-w-sm relative">
                <div className="absolute -top-6 right-8 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                  <MessageCircle size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-text-primary pr-12">Cara tercepat menghubungi kami</h3>
                <p className="text-text-muted text-sm mb-8 leading-relaxed">
                  Chat langsung dengan tim kami melalui WhatsApp untuk mendapatkan respon tercepat.
                </p>
                <a 
                  href="https://wa.me/6282299199143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  Chat via WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <section className="py-16 container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Column 1: Hubungi Kami Cards */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl mb-6 text-text-primary">Hubungi Kami</h2>
            
            <a 
              href="https://wa.me/6282299199143" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between bg-white p-5 rounded-2xl border border-primary/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">WhatsApp</div>
                  <div className="text-xs text-text-muted">Respon paling cepat</div>
                  <div className="font-bold text-primary text-sm mt-0.5">+62 822-9919-9143</div>
                </div>
              </div>
              <ArrowRight size={18} className="text-text-muted group-hover:text-primary transition-colors" />
            </a>

            <a href="mailto:info@dombantara.id" className="flex items-center justify-between bg-white p-5 rounded-2xl border border-border-subtle hover:border-primary/20 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface text-text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">Email</div>
                  <div className="text-xs text-text-muted">Kirim pertanyaan Anda</div>
                  <div className="font-bold text-text-primary text-sm mt-0.5">info@dombantara.id</div>
                </div>
              </div>
              <ArrowRight size={18} className="text-text-muted group-hover:text-primary transition-colors" />
            </a>

            <div className="flex items-center justify-between bg-white p-5 rounded-2xl border border-border-subtle shadow-sm group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface text-text-primary flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">Telepon</div>
                  <div className="text-xs text-text-muted">Senin - Sabtu, 08.00 - 17.00 WIB</div>
                  <div className="font-bold text-text-primary text-sm mt-0.5">(0251) 123-4567</div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/dombantara/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between bg-white p-5 rounded-2xl border border-border-subtle hover:border-primary/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface text-text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <Camera size={22} />
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">Instagram</div>
                  <div className="text-xs text-text-muted">Lihat aktivitas kami</div>
                  <div className="font-bold text-text-primary text-sm mt-0.5">@dombantara</div>
                </div>
              </div>
              <ArrowRight size={18} className="text-text-muted group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Column 2: Kirim Pesan Form */}
          <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm">
            <h3 className="font-display font-bold text-xl mb-2 text-text-primary">Kirim Pesan</h3>
            <p className="text-sm text-text-muted mb-6">
              Isi form di bawah ini, tim kami akan segera menghubungi Anda.
            </p>

            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Nama Lengkap*" className="w-full bg-surface rounded-xl py-3 px-4 text-sm border border-border-subtle focus:outline-none focus:border-primary/50" required />
              </div>
              <div>
                <input type="tel" placeholder="Nomor WhatsApp*" className="w-full bg-surface rounded-xl py-3 px-4 text-sm border border-border-subtle focus:outline-none focus:border-primary/50" required />
              </div>
              <div className="relative">
                <select className="w-full bg-surface rounded-xl py-3 px-4 text-sm border border-border-subtle focus:outline-none focus:border-primary/50 appearance-none text-text-muted">
                  <option value="" disabled selected>Pilih Jenis Kebutuhan</option>
                  <option value="qurban">Qurban & Aqiqah</option>
                  <option value="mitra">Kemitraan</option>
                  <option value="bibit">Pembelian Bibit</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
              </div>
              <div>
                <textarea rows={4} placeholder="Tulis pesan Anda di sini..." className="w-full bg-surface rounded-xl py-3 px-4 text-sm border border-border-subtle focus:outline-none focus:border-primary/50 resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                Kirim Pesan <Send size={16} />
              </button>
            </form>
          </div>

          {/* Column 3: Map & Jam Operasional */}
          <div className="space-y-6">
            <div className="bg-surface rounded-3xl overflow-hidden h-64 border border-border-subtle relative group cursor-pointer">
              {/* Dummy Map Image */}
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Map" />
              
              {/* Overlay Marker Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 bg-white p-3 rounded-2xl shadow-lg border border-border-subtle text-center">
                <div className="font-bold text-xs text-text-primary mb-1">Kantor Pusat Dombantara</div>
                <div className="text-[9px] text-text-muted mb-2">Jl. Raya Ciomas No.88, Bogor</div>
                <div className="text-[10px] text-primary font-bold flex items-center justify-center gap-1">
                  Lihat di Google Maps <ArrowRight size={10} />
                </div>
              </div>
              <MapPin size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 text-primary drop-shadow-md" />
            </div>

            <div className="bg-white rounded-3xl p-6 border border-border-subtle shadow-sm">
              <h3 className="font-display font-bold text-lg mb-4 text-text-primary">Jam Operasional</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex justify-between items-center">
                  <span>Senin - Jumat</span>
                  <span className="font-medium text-text-primary">08.00 - 17.00 WIB</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sabtu</span>
                  <span className="font-medium text-text-primary">08.00 - 15.00 WIB</span>
                </li>
                <li className="flex justify-between items-center text-status-error/80">
                  <span>Minggu</span>
                  <span className="font-medium">Tutup</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-xs">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-status-success"></span>
                </span>
                <span className="font-bold text-text-primary">Kami online sekarang</span>
                <span className="text-text-muted ml-auto">Siap membantu Anda!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi Kami */}
      <section className="py-16 bg-surface border-y border-border-subtle">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal index={0}>
            <h2 className="font-display font-bold text-2xl mb-8 text-text-primary">Lokasi Kami</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {lokasiList.map((lokasi, idx) => (
              <Reveal index={idx + 1} key={lokasi.id}>
                <div className="bg-white rounded-3xl p-6 border border-border-subtle flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="sm:w-1/3 aspect-video sm:aspect-square rounded-2xl overflow-hidden shrink-0">
                    <img src={`https://images.unsplash.com/photo-${lokasi.imageUrl}?auto=format&fit=crop&q=80&w=400`} alt={lokasi.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {lokasi.type === 'office' ? <Map size={14} /> : <MapPin size={14} />}
                      </div>
                      <h3 className="font-bold text-lg text-text-primary">{lokasi.name}</h3>
                    </div>
                    <p className="text-sm text-text-muted mb-4 whitespace-pre-line leading-relaxed">
                      {lokasi.address}
                    </p>
                    <button className="self-start text-xs font-bold text-text-primary border border-border-strong px-4 py-2 rounded-xl hover:bg-surface hover:text-primary hover:border-primary/30 transition-colors flex items-center gap-2">
                      Lihat Rute <MapPin size={12} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-16 container mx-auto px-6 lg:px-10">
        <Reveal index={0}>
          <h2 className="font-display font-bold text-2xl mb-8 text-text-primary">Tim Kami Siap Membantu Anda</h2>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timList.map((tim, idx) => (
            <Reveal index={idx + 1} key={tim.id}>
              <div className="bg-white border border-border-subtle rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all flex flex-col justify-between h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-surface shrink-0 border border-border-subtle">
                    <img src={`https://images.unsplash.com/photo-${tim.avatarUrl}?auto=format&fit=crop&q=80&w=200`} alt={tim.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1">{tim.role}</div>
                    <h4 className="font-bold text-lg text-text-primary mb-1 leading-tight">{tim.name}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{tim.description}</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/6282299199143" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto w-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={14} /> Chat via WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 container mx-auto px-6 lg:px-10">
        <Reveal index={0}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display font-bold text-2xl text-text-primary">Pertanyaan yang Sering Diajukan</h2>
            <a href="#" className="hidden sm:flex text-primary font-bold text-sm items-center gap-1 hover:gap-2 transition-all">
              Lihat semua FAQ <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {faqList.map((faq, idx) => (
            <Reveal index={idx + 1} key={faq.id}>
              <details className="group bg-white rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden open:border-primary/30 open:shadow-md transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-sm text-text-primary group-open:text-primary transition-colors">
                  {faq.question}
                  <span className="transition group-open:rotate-180 text-text-muted group-open:text-primary shrink-0 ml-4">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-border-subtle pt-4 mt-2">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <a href="#" className="text-primary font-bold text-sm inline-flex items-center gap-1">
            Lihat semua FAQ <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 container mx-auto px-6 lg:px-10">
        <Reveal index={0}>
          <div className="bg-primary rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
            </div>
            <div className="absolute right-0 bottom-0 w-64 md:w-96 transform translate-x-10 translate-y-10 z-10 pointer-events-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Sheep_in_gray.jpg" className="w-full mix-blend-screen opacity-50 rounded-full blur-sm" alt="Sheep decoration" />
            </div>

            <div className="relative z-20 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Masih Punya Pertanyaan?</h2>
              <p className="text-white/80 text-lg">Jangan ragu untuk menghubungi kami.<br className="hidden md:block" /> Tim Dombantara siap membantu Anda!</p>
            </div>
            
            <div className="relative z-20 shrink-0">
              <a 
                href="https://wa.me/6282299199143" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary hover:bg-surface px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl transition-transform hover:scale-105 active:scale-95"
              >
                <MessageCircle size={24} /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
