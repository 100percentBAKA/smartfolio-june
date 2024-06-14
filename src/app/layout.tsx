import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Adarsh G S",
  description: "Showcasing Adarsh's Projects and Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
      </body>
    </html>
  );
}
