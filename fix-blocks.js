const fs = require('fs');
let file = fs.readFileSync('app/ekosistem/supply/corporate/page.tsx', 'utf8');

const missingBlocks = `
      {/* Metrics / Traction */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/20">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <Tractor size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-0.5">50.000+</div>
                <div className="text-xs text-white/90">Domba Ternak</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 md:pl-8">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <Home size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-0.5">12+</div>
                <div className="text-xs text-white/90">Lokasi Peternakan</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 md:pl-8">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <Users size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-0.5">10.000+</div>
                <div className="text-xs text-white/90">Pelanggan Puas</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 md:pl-8">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold mb-0.5">100%</div>
                <div className="text-xs text-white/90">Sesuai Syariat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastruktur & Sertifikasi */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800" alt="Fasilitas" className="w-full rounded-3xl shadow-lg border border-border-subtle" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider mb-6">STANDAR KUALITAS</div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-6">Infrastruktur & Sertifikasi Lengkap</h2>
              <p className="text-sm text-text-secondary mb-8">Dombantara didukung oleh fasilitas pengolahan modern dan standar sertifikasi ketat untuk menjamin keamanan dan kehalalan setiap produk daging yang kami pasok ke bisnis Anda.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-primary shrink-0"><ShieldCheck size={18} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">Sertifikasi Halal MUI</h4>
                    <p className="text-[10px] text-text-secondary">Proses pemotongan 100% syariat</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-primary shrink-0"><FileText size={18} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">SKKH Dinas</h4>
                    <p className="text-[10px] text-text-secondary">Surat Keterangan Kesehatan Hewan</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-primary shrink-0"><Building2 size={18} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">RPH Modern</h4>
                    <p className="text-[10px] text-text-secondary">Rumah Potong Hewan standar higienis</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-primary shrink-0"><Truck size={18} /></div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">Cold Chain System</h4>
                    <p className="text-[10px] text-text-secondary">Pengiriman armada berpendingin khusus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ B2B */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-10 text-center">Frequently Asked Questions (B2B)</h2>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
              <details className="group bg-surface rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Berapa Minimum Order Quantity (MOQ) untuk pengiriman reguler?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  MOQ bervariasi bergantung pada jenis produk dan lokasi pengiriman. Untuk wilayah Jabodetabek, pengiriman daging mulai dari 50 kg dan hewan hidup mulai dari 10 ekor. Hubungi tim sales kami untuk penawaran spesifik.
                </div>
              </details>
              
              <details className="group bg-surface rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Apakah Dombantara menyediakan Term of Payment (ToP) untuk korporasi?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Ya, kami memfasilitasi Term of Payment (ToP) mulai dari 7 hingga 30 hari kalender, yang dapat diajukan setelah lolos verifikasi kredit dan penandatanganan PKS (Perjanjian Kerja Sama).
                </div>
              </details>

              <details className="group bg-surface rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Bagaimana kebijakan retur jika kualitas produk tidak sesuai spesifikasi?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Kami memberikan Garansi Kualitas 100%. Jika ada produk yang diterima di luar spesifikasi yang disepakati, kami akan melakukan penukaran produk maksimal 1x24 jam sejak dilaporkan.
                </div>
              </details>
              
              <details className="group bg-surface rounded-2xl border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-sm text-text-primary">Apakah pengiriman menggunakan armada berpendingin?</h3>
                  <span className="relative ml-4 shrink-0">
                    <ChevronDown size={20} className="text-primary transition duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed border-t border-border-subtle mt-2 pt-4">
                  Ya, seluruh pengiriman produk daging kami menggunakan armada berpendingin (Thermo King) untuk memastikan standar suhu rantai dingin tetap terjaga hingga lokasi Anda.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}`;

file = file.replace(/\{\/\* Clients Section \*\/\}/, missingBlocks);
fs.writeFileSync('app/ekosistem/supply/corporate/page.tsx', file);
