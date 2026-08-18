"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-[#062B22] backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-auto aspect-[3/1] flex items-center gap-1">
                <Image
                  src="https://res.cloudinary.com/drpuv22rm/image/upload/v1781797760/logo_wldlmg.png"
                  alt="Escrow Logo"
                  width={35}
                  height={50}
                  className="object-contain shadow-lg "
                  priority
                />
                <div className="font-bold">
                  <p className="text-white">Escrow</p>
                  <span className="text-[#F3B659]">Africa</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link
              href="/about"
              className={`relative group ${isActive("/about") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              About Us
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#features") ? "w-0" : ""}`}
              ></span>
            </Link>

            <Link
              href="/#our-services"
              className={`relative group ${isActive("#our-services") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Our Services
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
            <Link
              href="/pricing"
              className={`relative group ${isActive("/pricing") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Pricing
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
            <Link
              href="/teams"
              className={`relative group ${isActive("/teams") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Team
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
            <Link
              href="/#faq"
              className={`relative group ${isActive("#faq") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              FAQs
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#faq") ? "w-0" : ""}`}
              ></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group ${isActive("/blog") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Blog
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Link
              href="/waitlist"
              className="bg-[#F3B659] text-[#062B22] border-2 border-[#F3B659] px-6 py-2 rounded-full font-medium hover:bg-transparent hover:text-[#F3B659] transition-all duration-300"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="flex items-center lg:hidden">
            <button className="text-gray-600 p-2" onClick={toggleMenu}>
              {isOpen ? (
                <X size={32} color="#F3B659" />
              ) : (
                <Menu size={32} color="#F3B659" />
              )}
            </button>
            {isOpen && (
              <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#062B22] border-t border-white/10 flex flex-col items-center justify-start gap-6 py-12 px-6 overflow-y-auto z-50">
                <Link
                  href="/about"
                  className={`text-xl font-medium ${isActive("/about") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/#our-services"
                  className={`text-xl font-medium ${isActive("#our-services") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  Our Services
                </Link>
                <Link
                  href="/pricing"
                  className={`text-xl font-medium ${isActive("/pricing") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
                <Link
                  href="/teams"
                  className={`text-xl font-medium ${isActive("/teams") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  Team
                </Link>

                <Link
                  href="/#faq"
                  className={`text-xl font-medium ${isActive("#faq") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  FAQs
                </Link>
                <Link
                  href="/blog"
                  className={`text-xl font-medium ${isActive("/blog") ? "text-white" : "text-[#F3B659]"} hover:text-white transition-colors`}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                
                <div className="w-full flex flex-col items-center gap-4 mt-8">
                  <Link
                    href="/waitlist"
                    className="w-full max-w-xs text-center bg-[#F3B659] text-[#062B22] border-2 border-[#F3B659] py-3 rounded-full font-semibold hover:bg-transparent hover:text-[#F3B659] transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
