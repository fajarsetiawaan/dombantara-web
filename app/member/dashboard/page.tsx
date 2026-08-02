"use client";

import { useEffect, useState } from "react";
import { getPasokanByMitraId } from "@/lib/data-access/mitra.service";
import { PasokanHistory } from "@/lib/types";
import { CheckCircle2, Clock, Wallet } from "lucide-react";

export default function MemberDashboardPage() {
  const [pasokan, setPasokan] = useState<PasokanHistory[]>([]);
  const [loading, setLoading] = useState(true);

  // Mocking logged in user ID: MTR-001 (Pak Budi Farm)
  const MY_MITRA_ID = "MTR-001";

  useEffect(() => {
    const fetchPasokan = async () => {
      const data = await getPasokanByMitraId(MY_MITRA_ID);
      setPasokan(data);
      setLoading(false);
    };
    fetchPasokan();
  }, []);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const totalDibayar = pasokan
    .filter(p => p.statusPembayaran === 'DIBAYAR')
    .reduce((sum, p) => sum + p.nominalPembayaran, 0);

  const totalBelumDibayar = pasokan
    .filter(p => p.statusPembayaran === 'BELUM_DIBAYAR')
    .reduce((sum, p) => sum + p.nominalPembayaran, 0);

  const totalEkor = pasokan.reduce((sum, p) => sum + p.jumlahEkor, 0);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="font-display text-3xl font-bold text-text-primary">Selamat datang, Pak Budi!</h1>
        <p className="text-text-muted text-sm mt-2">Ini adalah ringkasan kinerja dan pasokan domba Anda ke Dombantara.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <CheckCircle2 size={20} />
            </div>
            <p className="text-text-muted text-sm font-bold uppercase tracking-wider">Total Disetor</p>
          </div>
          <h3 className="font-display text-3xl font-bold text-text-primary">{totalEkor} <span className="text-lg text-text-muted font-body">Ekor</span></h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-center border-l-4 border-l-status-success">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-status-success/10 flex items-center justify-center text-status-success">
              <Wallet size={20} />
            </div>
            <p className="text-text-muted text-sm font-bold uppercase tracking-wider">Sudah Dibayar</p>
          </div>
          <h3 className="font-display text-3xl font-bold text-text-primary">{formatRupiah(totalDibayar)}</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-center border-l-4 border-l-status-warning">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-status-warning/10 flex items-center justify-center text-status-warning">
              <Clock size={20} />
            </div>
            <p className="text-text-muted text-sm font-bold uppercase tracking-wider">Menunggu Pembayaran</p>
          </div>
          <h3 className="font-display text-3xl font-bold text-text-primary">{formatRupiah(totalBelumDibayar)}</h3>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border-subtle">
          <h2 className="font-display text-xl font-bold text-text-primary">Riwayat Pasokan</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface text-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold border-b border-border-subtle">ID Pasokan</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Tanggal Setor</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Jumlah</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Nominal Pembayaran</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-text-muted">Memuat data...</td>
                </tr>
              ) : pasokan.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-text-muted">Belum ada riwayat pasokan.</td>
                </tr>
              ) : (
                pasokan.map((p) => (
                  <tr key={p.id} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-text-primary">{p.id}</td>
                    <td className="px-6 py-4 text-text-muted">
                      {new Date(p.tanggalSetor).toLocaleDateString("id-ID", {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 font-bold">
                      {p.jumlahEkor} Ekor <span className="text-xs text-text-muted font-normal">({p.totalBeratKg} Kg)</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-text-primary">{formatRupiah(p.nominalPembayaran)}</td>
                    <td className="px-6 py-4 text-right">
                      {p.statusPembayaran === 'DIBAYAR' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-status-success/10 text-status-success">
                          Lunas
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-status-warning/10 text-status-warning">
                          Menunggu
                        </span>
                      )}
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
