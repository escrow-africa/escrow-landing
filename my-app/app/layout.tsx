import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import {  Plus_Jakarta_Sans} from "next/font/google";


const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
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
        className={jakarta.className}
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
