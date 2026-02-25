import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Escrow Africa",
  description: "Secure, Fast, and Reliable Escrow Services",
 
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
 
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
        
      </body>
    </html>
  );
}
