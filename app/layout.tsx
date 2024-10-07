// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/models/Header/Navbar";

export const metadata: Metadata = {
  title: "بنك أبو ظبى التجارى",
  description: "تصميم موقع خاص ببنك ابو ظبى التجاري",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="ar">
      <body className="bg-slate-100 font-cairo">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
