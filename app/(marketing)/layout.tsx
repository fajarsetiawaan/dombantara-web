import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-base/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-wide text-accent-primary">
            DOMBANTARA
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/katalog" className="text-text-muted hover:text-text-primary transition-colors">Katalog</Link>
            <Link href="/tentang" className="text-text-muted hover:text-text-primary transition-colors">Tentang Kami</Link>
            <Link href="/kemitraan" className="text-text-muted hover:text-text-primary transition-colors">Kemitraan</Link>
            <Link href="/kontak" className="text-text-muted hover:text-text-primary transition-colors">Kontak</Link>
          </nav>
          <div className="flex items-center gap-4">
            <WhatsAppCTA size="sm" className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border-subtle bg-surface py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl text-text-primary mb-4">DOMBANTARA</h2>
          <p className="text-text-muted max-w-md mx-auto mb-8">
            Ekosistem protein halal domba & kambing premium. Menghubungkan peternak unggul dengan bisnis kuliner Anda.
          </p>
          <WhatsAppCTA />
          <p className="text-text-muted text-sm mt-12">
            &copy; {new Date().getFullYear()} Dombantara. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <WhatsAppCTA iconOnly />
      </div>
    </div>
  );
}
