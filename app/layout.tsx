import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Dombantara",
  description: "Ekosistem protein halal domba & kambing premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-body bg-base text-text-primary antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
