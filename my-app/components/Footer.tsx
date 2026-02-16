import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 shadow-lg rounded-full">
              <Image
                src="/10.png"
                alt="Escrow Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-[#062B22] mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#062B22] mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#062B22] mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Escrow Africa. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://x.com/EscrowAfricaNG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#062B22] hover:text-[#F3B659] transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link
              href="https://linkedin.com/in/escrow-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#062B22] hover:text-[#F3B659] transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://Instagram.com/escrowafricang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#062B22] hover:text-[#F3B659] transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              href="https://tiktok.com/@escrowafricang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#062B22] hover:text-[#F3B659] transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
