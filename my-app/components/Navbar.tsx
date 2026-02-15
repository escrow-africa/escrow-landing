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
    <nav className="fixed w-full z-50 bg-[#062B22] backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-auto aspect-[3/1]">
                <Image
                  src="/escrow logo1.png"
                  alt="Escrow Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link
              href="#features"
              className={`relative group ${isActive("#features") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Features
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#features") ? "w-0" : ""}`}></span>
            </Link>
            <Link
              href="#how-it-works"
              className={`relative group ${isActive("#how-it-works") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              How it Works
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}></span>
            </Link>
            <Link
              href="#"
              className={`relative group ${isActive("#") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              FAQ
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#") ? "w-0" : ""}`}></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className={`${isActive("/login") ? "text-white" : "text-[#F3B659]"} border-2 border-[#F3B659] font-medium px-4 py-2.5 hover:text-[#F3B659] hover:bg-transparent rounded-md transition-colors relative group overflow-hidden`}
            >
              <span className="relative z-10">Log in</span>
            </Link>
            <Link
              href="/signup"
              className="bg-[#F3B659] text-[#062B22] border-2 border-[#F3B659] px-4 py-2.5 rounded-md font-medium hover:bg-[#062B22] hover:text-[#F3B659] transition-all duration-300"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden flex items-center ">
            <button className="text-gray-600 p-2" onClick={toggleMenu}>
              {isOpen ? (
                <X size={32} color="#F3B659" />
              ) : (
                <Menu size={32} color="#F3B659" />
              )}
            </button>
            {isOpen && (
              <div className="  absolute top-16 left-46  w-[50%] bg-[#062B22] rounded-md h-30 border-t border-gray-100 flex flex-col items-center gap-4 py-6 hover:underline">
                <Link
                  href="/login"
                  className={`${isActive("/login") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`}
                  onClick={toggleMenu}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className={`${isActive("/signup") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`}
                  onClick={toggleMenu}
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
