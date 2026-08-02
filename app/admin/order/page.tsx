"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/data-access/order.service";
import { Order } from "@/lib/types";
import { Plus, Search, Filter } from "lucide-react";

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DIPESAN": return "bg-status-info/10 text-status-info border border-status-info/20";
      case "DIPOTONG": return "bg-status-warning/10 text-status-warning border border-status-warning/20";
      case "DIKIRIM": return "bg-accent-primary/10 text-accent-primary border border-accent-primary/20";
      case "LUNAS": return "bg-status-success/10 text-status-success border border-status-success/20";
      default: return "bg-surface text-text-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-text-primary">Daftar Order B2B</h1>
          <p className="text-text-muted text-sm mt-1">Pantau status pemesanan dari pembeli B2B.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm">
          <Plus size={18} /> Buat Order Baru
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-subtle flex items-center justify-between bg-surface/50">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Cari ID atau nama pembeli..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-border-subtle rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <button className="flex items-center gap-2 text-sm text-text-primary border border-border-subtle bg-white px-3 py-2 rounded-md hover:bg-surface transition-colors">
            <Filter size={16} /> Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface text-text-muted text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Order ID</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Pembeli</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Item & Kuantitas</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Total Harga</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Tgl Target Kirim</th>
                <th className="px-6 py-4 font-bold border-b border-border-subtle">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-text-muted">Memuat data...</td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-text-muted">Belum ada order.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-surface/50 transition-colors cursor-pointer">
                    <td className="px-6 py-4 font-medium text-text-primary">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">{order.namaPembeli}</div>
                      <div className="text-xs text-text-muted">{order.tipeB2B}</div>
                    </td>
                    <td className="px-6 py-4">
                      {order.items.map((item, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-bold">{item.kuantitas} {item.satuan}</span> - {item.namaProduk}
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 font-bold text-text-primary">{formatRupiah(order.totalHarga)}</td>
                    <td className="px-6 py-4 text-text-muted">
                      {new Date(order.tanggalTargetKirim).toLocaleDateString("id-ID", {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
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
