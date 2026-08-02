"use client";

import { useState } from "react";
import { Save, AlertCircle } from "lucide-react";

export default function UpdateKapasitasPage() {
  const [kapasitas, setKapasitas] = useState(50);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="font-display text-3xl font-bold text-text-primary">Update Kapasitas Kandang</h1>
        <p className="text-text-muted text-sm mt-2">Bantu tim operasional kami mengetahui ketersediaan stok domba yang siap panen di kandang Anda minggu ini.</p>
      </div>

      <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          
          <div className="bg-surface/50 border border-border-subtle rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle size={20} className="text-accent-primary shrink-0 mt-0.5" />
            <div className="text-sm text-text-muted">
              <p className="font-bold text-text-primary mb-1">Penting!</p>
              <p>Hanya laporkan jumlah ekor yang benar-benar siap potong minggu ini sesuai dengan standar berat Dombantara (di atas 25 kg).</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="kapasitas" className="block text-sm font-bold text-text-primary mb-2">
                Jumlah Ekor Siap Panen (Minggu Ini)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="kapasitas"
                  min="0"
                  value={kapasitas}
                  onChange={(e) => setKapasitas(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xl font-bold"
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted font-bold">
                  Ekor
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="catatan" className="block text-sm font-bold text-text-primary mb-2">
                Catatan Tambahan (Opsional)
              </label>
              <textarea
                id="catatan"
                rows={3}
                placeholder="Contoh: Ada 5 ekor betina, sisanya jantan..."
                className="w-full px-4 py-3 bg-white border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              ></textarea>
            </div>

            {isSuccess && (
              <div className="bg-status-success/10 text-status-success px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Kapasitas berhasil diupdate! Tim ops akan segera menghubungi Anda.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Menyimpan..."
              ) : (
                <>
                  <Save size={20} />
                  Simpan Update Kapasitas
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
