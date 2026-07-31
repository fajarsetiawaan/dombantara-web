"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { Button } from "@/components/ui/Button";

const SHEEP_DATA = [
  {
    id: "garut",
    name: "GARUT",
    image: "/images/hero-sheep.png",
  },
  {
    id: "batur",
    name: "BATUR",
    // Fallback to same image for now until we generate a new one
    image: "/images/hero-sheep.png", 
  },
  {
    id: "merino",
    name: "MERINO",
    // Fallback to same image for now until we generate a new one
    image: "/images/hero-sheep.png", 
  }
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % SHEEP_DATA.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + SHEEP_DATA.length) % SHEEP_DATA.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSheep = SHEEP_DATA[currentIndex];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-base">
      
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <h1 
          key={currentSheep.id + "-bg"}
          className="text-[20vw] font-display font-bold leading-none tracking-tighter text-accent-primary opacity-5 animate-reveal"
          style={{ whiteSpace: 'nowrap' }}
        >
          {currentSheep.name}
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              PLATFORM PASOKAN DOMBA PREMIUM
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
              Selamat Datang di <span className="text-accent-primary">Dombantara</span> Indonesia
            </h1>
            
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              Solusi pasokan daging domba & kambing premium dari hulu hingga hilir melalui ekosistem yang terintegrasi & inovatif.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm md:text-base text-text-primary font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-status-success" />
                Kualitas Premium
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-status-success" />
                RPA Tersertifikasi
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-status-success" />
                Pasokan Rutin
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppCTA size="lg" message="Halo Dombantara, saya ingin info pasokan daging untuk bisnis saya.">
                Mulai Sekarang &rarr;
              </WhatsAppCTA>
              <Button variant="ghost" size="lg" className="gap-2 text-text-primary hover:text-accent-primary">
                <PlayCircle size={24} />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Product View with Carousel */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex flex-col items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              {/* Orbital rings behind sheep */}
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-border-subtle/50 rounded-full animate-[orbit_30s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-accent-primary/20 rounded-full animate-[reverse-orbit_20s_linear_infinite]" />
              
              <div 
                key={currentSheep.id + "-img"}
                className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px] animate-float transition-all duration-500 ease-out z-20"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <Image
                  src={currentSheep.image}
                  alt={currentSheep.name}
                  fill
                  className="object-contain drop-shadow-2xl mix-blend-multiply" 
                  priority
                />
              </div>
            </div>

            {/* Carousel Controls (Positioned under the sheep) */}
            <div className="absolute bottom-0 flex items-center gap-6 z-30">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-surface hover:bg-border-subtle border border-border-subtle text-text-primary transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {SHEEP_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentIndex ? "w-8 bg-accent-primary" : "w-2 bg-border-subtle hover:bg-border-strong"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-surface hover:bg-border-subtle border border-border-subtle text-text-primary transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
