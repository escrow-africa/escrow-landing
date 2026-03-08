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
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-auto aspect-[3/1] flex items-center gap-1">
                <Image
                  src="/logo.png"
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link
              href="#why-escrow"
              className={`relative group ${isActive("#why-escrow") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Why Escrow
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#features") ? "w-0" : ""}`}
              ></span>
            </Link>
           
            <Link
              href="#our-services"
              className={`relative group ${isActive("#our-services") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Our Services
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
             <Link
              href="#team"
              className={`relative group ${isActive("#team") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] font-medium transition-colors`}
            >
              Team
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#F3B659] transition-all duration-300 group-hover:w-full ${isActive("#how-it-works") ? "w-0" : ""}`}
              ></span>
            </Link>
            <Link
              href="#faq"
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
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className={`${isActive("/login") ? "text-white" : "text-[#F3B659]"} border-2 border-[#F3B659] font-medium px-4 py-1  hover:bg-[#F3B659] hover:text-[#062B22] rounded-full transition-colors relative group overflow-hidden`}
            >
              <span className="relative z-10">Log in</span>
            </Link>
            <Link
              href="/signup"
              className="bg-[#F3B659] text-[#062B22] border-2 border-[#F3B659] px-4 py-1 rounded-full font-medium hover:bg-[#062B22] hover:text-[#F3B659] transition-all duration-300"
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
              <div className="  absolute top-16 left-0 w-full bg-[#062B22] rounded-md h-fit border-t border-gray-100 flex flex-col items-center gap-4 py-6 hover:underline">
                <Link
                  href="#features"
                  className={`${isActive("#features") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`} 
                  onClick={toggleMenu}
                >
                  Features
                </Link>
                <Link
                  href="#workflows"
                  className={`${isActive("#workflows") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`}
                  onClick={toggleMenu}
                >
                  Workflows
                </Link>
                <Link
                  href="#teams"
                  className={`${isActive("#teams") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`}
                  onClick={toggleMenu}
                >
                  Teams
                </Link>

                <Link href="#faq" className={`${isActive("#faq") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`} onClick={toggleMenu}>
                  FAQs
                </Link>
                  <Link href="/blog" className={`${isActive("/blog") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline`} onClick={toggleMenu}>
                  Blog
                </Link>
                <Link
                  href="/login"
                  className={`${isActive("/login") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline border-2 border-[#F3B659] px-4 py-1 rounded-full font-medium`}
                  onClick={toggleMenu}
                >
                  
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className={`${isActive("/signup") ? "text-white" : "text-[#F3B659]"} hover:text-[#F3B659] hover:underline border-2 border-[#F3B659] px-4 py-1 rounded-full font-medium`}
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
