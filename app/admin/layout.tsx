"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ShoppingCart, BarChart, LogOut, Search, Bell } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard Ops", path: "/admin/laporan", icon: LayoutDashboard }, // using laporan as main ops dashboard
    { name: "Manajemen Mitra", path: "/admin/mitra", icon: Users },
    { name: "Daftar Order", path: "/admin/order", icon: ShoppingCart },
    { name: "Laporan", path: "/admin/laporan", icon: BarChart },
  ];

  return (
    <div className="flex h-screen bg-base overflow-hidden font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border-subtle hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-border-subtle">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo-dombantara/dombatara logo/4-cropped.png" alt="Dombantara" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="font-display font-bold text-primary leading-none tracking-wide text-xl">DOMBANTARA</h1>
              <p className="text-[10px] text-text-muted font-bold tracking-widest uppercase mt-0.5">Internal Ops</p>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 px-3 mt-4">Menu Utama</div>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-text-muted hover:bg-surface hover:text-text-primary"
                }`}
              >
                <Icon size={18} className={isActive ? "text-primary" : "text-text-muted"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border-subtle">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-status-error hover:bg-status-error/10 transition-colors w-full font-medium text-sm">
            <LogOut size={18} />
            Keluar Sistem
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-border-subtle flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Cari ID Mitra, Order, dll..." 
                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border-subtle rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full hover:bg-surface flex items-center justify-center text-text-muted relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-status-error rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-border-subtle mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                AD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-text-primary">Admin Pusat</p>
                <p className="text-xs text-text-muted">Tim Operasional</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
