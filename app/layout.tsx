import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main className="relative overflow-hidden">
          {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
