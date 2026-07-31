"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/lib/utils/useScrollReveal";

export default function TentangPage() {
  const contentRef = useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-24" ref={contentRef}>
      <SectionHeading 
        eyebrow="Tentang Dombantara" 
        title="Komitmen pada Kualitas & Keberlanjutan" 
        description="Dombantara hadir untuk menjembatani jarak antara peternak berkualitas dengan kebutuhan protein premium di kota."
        className="mb-16"
      />
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-display text-3xl mb-4 text-accent-primary">Jaringan Peternak Kami</h3>
          <p className="text-text-muted text-lg mb-6 leading-relaxed">
            Kami bermitra dengan peternak-peternak terpilih yang memiliki komitmen pada kesejahteraan hewan, nutrisi alami, dan manajemen kandang yang baik. Dengan bekerja sama langsung, kami memastikan rantai pasok yang pendek dan transparan.
          </p>
        </div>
        <div>
          <h3 className="font-display text-3xl mb-4 text-accent-primary">Cakupan Area</h3>
          <p className="text-text-muted text-lg leading-relaxed">
            Saat ini Dombantara fokus melayani kebutuhan bisnis kuliner B2B di wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek). Kami memastikan pengiriman yang tepat waktu dengan standar higienitas tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}
