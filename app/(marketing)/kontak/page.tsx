"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { MapPin, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <Reveal className="mb-16">
        <SectionHeading 
          eyebrow="Kontak" 
          title="Hubungi Dombantara" 
          description="Tim operasional kami siap membantu kebutuhan pasokan daging premium untuk bisnis Anda maupun pertanyaan seputar kemitraan."
          align="center"
        />
      </Reveal>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Reveal>
            <Card className="h-full text-center border-border-subtle bg-base">
              <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent-primary mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-display text-xl mb-2 text-text-primary">Telepon / WhatsApp</h4>
                <p className="text-text-muted mb-4">+62 812-3456-7890</p>
                <WhatsAppCTA size="sm" variant="secondary" className="w-full">Chat Sekarang</WhatsAppCTA>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="h-full text-center border-border-subtle bg-base">
              <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent-primary mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-display text-xl mb-2 text-text-primary">Email</h4>
                <p className="text-text-muted mb-4">halo@dombantara.id</p>
                <a href="mailto:halo@dombantara.id" className="text-accent-primary text-sm hover:underline font-medium">Kirim Email</a>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="h-full text-center border-border-subtle bg-base">
              <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-accent-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-display text-xl mb-2 text-text-primary">Kantor Pusat</h4>
                <p className="text-text-muted text-sm">
                  Jl. Contoh Alamat No. 123,<br/>
                  Jakarta Selatan,<br/>
                  DKI Jakarta, 12345
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-surface rounded-xl p-8 md:p-12 text-center border border-border-subtle">
            <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">Butuh Penawaran Khusus B2B?</h3>
            <p className="text-text-muted max-w-2xl mx-auto mb-8 text-lg">
              Untuk pemesanan volume besar dan jadwal pasokan rutin untuk bisnis Anda, tim kami akan memberikan penawaran harga spesial (Contract Pricing).
            </p>
            <WhatsAppCTA size="lg" message="Halo Dombantara, saya tertarik membicarakan kontrak pasokan (B2B) untuk usaha saya.">
              Diskusikan Kebutuhan B2B
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
