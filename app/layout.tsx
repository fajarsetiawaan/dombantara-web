import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dombantara",
  description: "Ekosistem protein halal domba & kambing premium",
  icons: {
    icon: "/images/logo-dombantara/dombatara logo/4-cropped.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-body bg-base text-text-primary antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
