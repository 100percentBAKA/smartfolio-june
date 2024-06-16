import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReactQueryClientProvider } from "./(providers)/tanstack-query-client-provider";
import { Toaster } from "@/components/ui/toaster"

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
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>

          <main>{children}</main>
          <Toaster />

          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
