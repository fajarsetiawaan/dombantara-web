'use client';

import { SplineScene } from "@/components/ui/spline-scene";
import { ArrowRight, Leaf, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero3D() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background Gradient & Spotlight for aesthetic depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-accent-primary/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-[#FAFAFA]/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full pt-24 lg:pt-0">

          {/* Left Content */}
          <div className="flex flex-col justify-center text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90 tracking-wide">
                Digitalisasi Peternakan Modern
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Ekosistem <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Terintegrasi.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
              Kami membangun masa depan peternakan dari hulu ke hilir. Dapatkan domba berkualitas premium, tersertifikasi halal, dan terkelola dengan standar tinggi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
              >
                Lihat Katalog
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                Pelajari Kemitraan
              </Link>
            </div>

            {/* Quick Stats / Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white mb-1">
                  <ShieldCheck size={18} className="text-green-400" />
                  <span className="font-bold">100%</span>
                </div>
                <span className="text-xs text-white/50">Tersertifikasi Halal</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Leaf size={18} className="text-green-400" />
                  <span className="font-bold">Premium</span>
                </div>
                <span className="text-xs text-white/50">Kualitas Pakan</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white mb-1">
                  <TrendingUp size={18} className="text-green-400" />
                  <span className="font-bold">24/7</span>
                </div>
                <span className="text-xs text-white/50">Pemantauan</span>
              </div>
            </div>
          </div>

          {/* Right Content: 3D Spline Scene */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end lg:-mr-12 perspective-1000">
            {/* Note: The spline scene URL below is a placeholder. 
                Ganti URL ini dengan model domba realistis yang sedang mengunyah saat sudah siap. */}
            <div className="w-full h-full relative z-10 transform-gpu hover:scale-[1.02] transition-transform duration-700 ease-out">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />
            </div>

            {/* Overlay hint for interaction */}
            <div className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pointer-events-none">
              <span className="text-xs font-medium text-white/80">Drag to interact</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
