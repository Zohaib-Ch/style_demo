import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "@/providers/lenis-provider";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Style | Premium Textile, Fabric, and Apparel Manufacturers",
  description: "Experience award-winning, premium textile, apparel and ICT manufacturing. Built for quality, driven by innovation, and committed to sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
