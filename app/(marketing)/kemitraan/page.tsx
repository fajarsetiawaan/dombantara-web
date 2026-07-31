"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function KemitraanPage() {
  const [formData, setFormData] = useState({
    name: "",
    type: "peternak",
    location: "",
    capacity: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman form (hanya console.log untuk saat ini)
    console.log("Form Kemitraan Disubmit:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <Reveal className="mb-16">
        <SectionHeading 
          eyebrow="Kemitraan" 
          title="Bergabung Bersama Dombantara" 
          description="Jadilah bagian dari ekosistem pasokan protein halal terpercaya. Kami membuka peluang bagi peternak dan Rumah Potong Hewan (RPA) berkualitas."
        />
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div className="space-y-8">
            <h3 className="text-2xl font-display text-accent-primary">Syarat Kemitraan Peternak</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="bg-surface text-accent-primary flex items-center justify-center w-6 h-6 rounded-full text-sm shrink-0">1</span>
                Memiliki kandang mandiri dengan standar sirkulasi dan kebersihan yang baik.
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-surface text-accent-primary flex items-center justify-center w-6 h-6 rounded-full text-sm shrink-0">2</span>
                Menggunakan pakan berkualitas dan tidak menggunakan zat berbahaya/dilarang.
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-surface text-accent-primary flex items-center justify-center w-6 h-6 rounded-full text-sm shrink-0">3</span>
                Siap mematuhi jadwal pasok dan bersedia dilakukan audit berkala oleh tim ops Dombantara.
              </li>
            </ul>

            <h3 className="text-2xl font-display text-accent-primary pt-6 border-t border-border-subtle">Syarat Kemitraan RPA / Jagal</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="bg-surface text-accent-primary flex items-center justify-center w-6 h-6 rounded-full text-sm shrink-0">1</span>
                Memiliki sertifikasi halal atau menerapkan standar penyembelihan syar&apos;i secara ketat.
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-surface text-accent-primary flex items-center justify-center w-6 h-6 rounded-full text-sm shrink-0">2</span>
                Menerapkan standar sanitasi dan higienitas tinggi.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <Card className="p-2 border-border-subtle">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-status-success/20 text-status-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display text-text-primary mb-2">Terima Kasih!</h3>
                  <p className="text-text-muted mb-8">Data pendaftaran kemitraan Anda telah kami terima. Tim operasional kami akan segera menghubungi Anda melalui WhatsApp atau telepon.</p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>Kirim Ulang</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display text-text-primary mb-6">Form Pendaftaran Mitra</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-primary">Nama Lengkap / Nama Farm</label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        className="w-full h-11 px-4 rounded-md bg-base border border-border-subtle text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-shadow"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium text-text-primary">Jenis Kemitraan</label>
                      <select 
                        id="type"
                        className="w-full h-11 px-4 rounded-md bg-base border border-border-subtle text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-shadow"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                      >
                        <option value="peternak">Mitra Peternak</option>
                        <option value="jagal">Mitra Jagal (RPA)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium text-text-primary">Lokasi Kandang / Tempat Pemotongan</label>
                      <input 
                        id="location"
                        type="text" 
                        required
                        placeholder="Contoh: Bogor, Jawa Barat"
                        className="w-full h-11 px-4 rounded-md bg-base border border-border-subtle text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-shadow"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>

                    {formData.type === "peternak" && (
                      <div className="space-y-2">
                        <label htmlFor="capacity" className="text-sm font-medium text-text-primary">Kapasitas Kandang (Ekor)</label>
                        <input 
                          id="capacity"
                          type="number"
                          placeholder="Misal: 100"
                          className="w-full h-11 px-4 rounded-md bg-base border border-border-subtle text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-shadow"
                          value={formData.capacity}
                          onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium text-text-primary">Nomor WhatsApp / HP Aktif</label>
                      <input 
                        id="contact"
                        type="tel"
                        required
                        placeholder="Misal: 08123456789"
                        className="w-full h-11 px-4 rounded-md bg-base border border-border-subtle text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-shadow"
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      />
                    </div>

                    <Button type="submit" className="w-full mt-4" size="lg">Daftar Sekarang</Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
