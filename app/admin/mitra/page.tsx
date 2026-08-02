"use client";

import { useEffect, useState } from "react";
import { getMitras } from "@/lib/data-access/mitra.service";
import { Mitra } from "@/lib/types";
import { Plus, Search, Edit2 } from "lucide-react";

export default function MitraPage() {
  const [mitras, setMitras] = useState<Mitra[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMitra = async () => {
      const data = await getMitras();
      setMitras(data);
      setLoading(false);
    };
    fetchMitra();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-text-primary">Manajemen Mitra</h1>
          <p className="text-text-muted text-sm mt-1">Kelola data peternak dan Rumah Potong Hewan (RPA) terdaftar.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
          <Plus size={18} /> Tambah Mitra
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-subtle flex items-center justify-between bg-surface/50">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Cari nama mitra..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-border-subtle rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            <select className="text-sm border border-border-subtle rounded-md px-3 py-2 bg-white text-text-primary focus:outline-none">
              <option>Semua Tipe</option>
              <option>Peternak</option>
              <option>Jagal</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface text-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold border-b border-border-subtle">ID Mitra</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Nama Mitra</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Tipe</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Lokasi</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Kapasitas (Ekor/Mg)</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Status</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-text-muted">Memuat data...</td>
                </tr>
              ) : mitras.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-text-muted">Belum ada data mitra.</td>
                </tr>
              ) : (
                mitras.map((mitra) => (
                  <tr key={mitra.id} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-text-primary">{mitra.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">{mitra.nama}</div>
                      <div className="text-xs text-text-muted">{mitra.kontak}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold tracking-wider ${
                        mitra.tipe === 'PETERNAK' ? 'bg-secondary/10 text-secondary' : 'bg-accent-primary/10 text-accent-primary'
                      }`}>
                        {mitra.tipe}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-muted">{mitra.lokasi}</td>
                    <td className="px-6 py-4 font-medium">{mitra.kapasitas}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                        mitra.status === 'AKTIF' ? 'bg-status-success/10 text-status-success' : 
                        mitra.status === 'PENDING' ? 'bg-status-warning/10 text-status-warning' : 
                        'bg-status-error/10 text-status-error'
                      }`}>
                        {mitra.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-text-muted hover:text-primary transition-colors">
                        <Edit2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
