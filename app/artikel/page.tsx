import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Reveal from '@/components/ui/Reveal';
import { Search, ChevronDown, LayoutGrid, HeartHandshake, Gift, Tractor, Stethoscope, Droplets, Cpu, Mail, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { getSemuaArtikel, getKategoriArtikel, getArtikelPopuler } from '@/lib/data-access/artikel.service';

export default async function ArtikelPage() {
  const artikelList = await getSemuaArtikel();
  const kategoriList = await getKategoriArtikel();
  const populerList = await getArtikelPopuler();

  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid': return <LayoutGrid size={16} />;
      case 'HeartHandshake': return <HeartHandshake size={16} />;
      case 'Gift': return <Gift size={16} />;
      case 'Tractor': return <Tractor size={16} />;
      case 'Stethoscope': return <Stethoscope size={16} />;
      case 'Droplets': return <Droplets size={16} />;
      case 'Cpu': return <Cpu size={16} />;
      default: return <LayoutGrid size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[url('https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <Reveal index={0}>
            <div className="text-primary font-bold tracking-widest text-xs lg:text-sm uppercase mb-4 flex items-center gap-2">
              ARTIKEL & EDUKASI
            </div>
          </Reveal>
          <Reveal index={1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 max-w-3xl">
              Edukasi, Inspirasi,<br/>
              dan Tips <span className="text-primary">Peternakan</span>
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="text-text-muted text-lg mb-10 max-w-2xl leading-relaxed">
              Temukan berbagai informasi, tips, dan inspirasi seputar peternakan domba modern, qurban, aqiqah, kesehatan hewan, dan banyak lagi.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="relative max-w-xl">
              <input 
                type="text" 
                placeholder="Cari artikel..." 
                className="w-full bg-white rounded-full py-4 pl-6 pr-16 shadow-sm border border-border-subtle focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Left Column - Articles */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-display text-2xl font-bold text-text-primary">Artikel Terbaru</h2>
              <div className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-primary transition-colors">
                Urutkan: Terbaru <ChevronDown size={16} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {artikelList.map((artikel, idx) => (
                <Reveal index={idx % 3} key={artikel.id}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-border-subtle hover:border-primary/20 hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden p-2 pb-0 relative">
                      <img src={`https://images.unsplash.com/photo-${artikel.imageUrl}?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" alt={artikel.title} />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                          {artikel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-lg mb-3 line-clamp-2 leading-snug text-text-primary group-hover:text-primary transition-colors">{artikel.title}</h3>
                      <p className="text-text-muted text-sm line-clamp-3 mb-6 flex-1">{artikel.excerpt}</p>
                      
                      <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                          <img src={`https://images.unsplash.com/photo-${artikel.authorAvatar}?auto=format&fit=crop&q=80&w=100`} className="w-full h-full object-cover" alt={artikel.author} />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-text-primary">{artikel.author}</div>
                          <div className="text-[10px] text-text-muted">{artikel.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted transition-colors"><ChevronLeft size={16} /></button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white font-bold text-sm">1</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted font-bold text-sm transition-colors">2</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted font-bold text-sm transition-colors">3</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted font-bold text-sm transition-colors">4</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted font-bold text-sm transition-colors">5</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-text-muted transition-colors"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 border border-border-subtle shadow-sm">
              <h3 className="font-display font-bold text-lg mb-6 text-text-primary">Kategori</h3>
              <div className="flex flex-col gap-2">
                {kategoriList.map((kat, idx) => (
                  <div key={idx} className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 text-sm text-text-muted group-hover:text-primary transition-colors">
                      {getIcon(kat.iconName)}
                      <span className="font-medium">{kat.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {kat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-3xl p-6 border border-border-subtle shadow-sm">
              <h3 className="font-display font-bold text-lg mb-6 text-text-primary">Artikel Populer</h3>
              <div className="flex flex-col gap-5">
                {populerList.map((pop, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={`https://images.unsplash.com/photo-${pop.imageUrl}?auto=format&fit=crop&q=80&w=150`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={pop.title} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-xs leading-snug mb-1 text-text-primary group-hover:text-primary transition-colors line-clamp-2">{pop.title}</h4>
                      <span className="text-[10px] text-text-muted">{pop.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-surface rounded-3xl p-6 border border-border-subtle shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-status-success/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0">
                  <Mail size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary leading-tight">Dapatkan Informasi Terbaru</h3>
              </div>
              <p className="text-xs text-text-muted mb-6 relative z-10 leading-relaxed">
                Berlangganan newsletter kami untuk mendapatkan artikel terbaru seputar peternakan dan promo menarik.
              </p>
              
              <div className="relative z-10 space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="w-full bg-white rounded-xl py-3 px-4 text-sm shadow-sm border border-border-subtle focus:outline-none focus:border-primary/50"
                />
                <button className="w-full bg-primary text-white rounded-xl py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
                  Berlangganan <Send size={14} />
                </button>
              </div>
              
              <p className="text-[10px] text-text-muted mt-4 text-center relative z-10">
                Kami tidak akan membagikan email Anda.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
