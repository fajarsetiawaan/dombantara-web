"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Activity, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard Saya", path: "/member/dashboard", icon: Home },
    { name: "Riwayat Pasokan", path: "/member/dashboard", icon: Package }, // Combine pasokan view in dashboard for now
    { name: "Update Kapasitas", path: "/member/kapasitas", icon: Activity },
  ];

  return (
    <div className="flex h-screen bg-base overflow-hidden font-body relative">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-border-subtle flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold font-display">M</div>
          <span className="font-display font-bold text-secondary">Mitra Area</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-text-muted hover:text-primary">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar (Desktop & Mobile) */}
      <aside className={`fixed md:relative top-0 left-0 h-full w-64 bg-primary text-white z-40 transform transition-transform duration-300 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-20 flex items-center px-6 border-b border-white/10 mt-16 md:mt-0">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo-dombantara/dombatara logo-besar.png" alt="Dombantara" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="font-display font-bold text-white leading-none tracking-wide text-xl">DOMBANTARA</h1>
              <p className="text-[10px] text-accent-primary font-bold tracking-widest uppercase mt-0.5">Mitra Peternak</p>
            </div>
          </Link>
        </div>
        
        <div className="px-6 py-6 border-b border-white/10">
          <p className="text-sm font-bold text-white">Pak Budi Farm</p>
          <p className="text-xs text-white/60">ID: MTR-001</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${
                  isActive 
                    ? "bg-white/20 text-white" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} className={isActive ? "text-white" : "text-white/70"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full font-medium text-sm">
            <LogOut size={18} />
            Keluar Akun
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden pt-16 md:pt-0">
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
