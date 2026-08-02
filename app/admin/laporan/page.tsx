"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/data-access/order.service";
import { getMitras } from "@/lib/data-access/mitra.service";
import { Order, Mitra } from "@/lib/types";
import { TrendingUp, Users, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function LaporanPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [mitras, setMitras] = useState<Mitra[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [orderData, mitraData] = await Promise.all([getOrders(), getMitras()]);
      setOrders(orderData);
      setMitras(mitraData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalPendapatan = orders.reduce((sum, order) => sum + order.totalHarga, 0);
  const totalVolumeKg = orders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => item.satuan === 'KG' ? itemSum + item.kuantitas : itemSum, 0);
  }, 0);
  const activeMitras = mitras.filter(m => m.status === 'AKTIF').length;

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  if (loading) {
    return <div className="p-10 text-center text-text-muted">Memuat laporan...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-text-primary">Laporan & Statistik</h1>
        <p className="text-text-muted text-sm mt-1">Ringkasan performa operasional Dombantara.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between group hover:border-primary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <TrendingUp size={24} />
            </div>
            <span className="flex items-center text-xs font-bold text-status-success bg-status-success/10 px-2 py-1 rounded">
              +15% <ArrowUpRight size={14} className="ml-1" />
            </span>
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Total Nilai Order (Bulan Ini)</p>
            <h3 className="font-display text-3xl font-bold text-text-primary">{formatRupiah(totalPendapatan)}</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between group hover:border-accent-primary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform">
              <ShoppingBag size={24} />
            </div>
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Total Volume Terjual</p>
            <h3 className="font-display text-3xl font-bold text-text-primary">{totalVolumeKg} <span className="text-lg text-text-muted">KG</span></h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between group hover:border-secondary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium mb-1">Mitra Aktif</p>
            <h3 className="font-display text-3xl font-bold text-text-primary">{activeMitras} <span className="text-lg text-text-muted">Mitra</span></h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-primary p-6 rounded-2xl shadow-md text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 w-32 h-32 translate-x-8 translate-y-8 rounded-full bg-white blur-xl"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="text-primary-light">
              Repeat Order Rate
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-white/80 text-sm font-medium mb-1">Retensi Pembeli B2B</p>
            <h3 className="font-display text-3xl font-bold text-white">85%</h3>
          </div>
        </div>

      </div>
      
      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-sm h-96 flex flex-col">
        <h3 className="font-display font-bold text-lg mb-6">Trend Pemesanan (Mingguan)</h3>
        <div className="flex-1 bg-surface rounded-xl border border-border-subtle border-dashed flex items-center justify-center">
          <p className="text-text-muted">Area Grafik (Chart.js / Recharts placeholder)</p>
        </div>
      </div>
    </div>
  );
}
