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
    <footer className="bg-white border-t border-gray-300 pt-16 pb-8 h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-1">
            <a href="/" className="inline-block mb-4 shadow-lg rounded-full">
              <Image
                src="https://res.cloudinary.com/drpuv22rm/image/upload/v1781797743/10_yvcfec.png"
                alt="Escrow Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <p className=" text-[#062B22] font-bold text-xl max-w-xs">
  Secure your transaction with{" "}
  <span className="text-[#F3B659] ">confidence</span>
</p>
            
          </div>


          <div>
            <h3 className="font-semibold text-[#062B22] mb-4 text-sm tracking-wider uppercase">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#F3B659] transition-colors"
                >
                 FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/brand-manifesto"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Brand Manifesto
                </Link>
              </li>
              <li>
                <Link
                  href="/charter"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Charter
                </Link>
              </li>
              <li>
                <Link
                  href="/constitution"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Constitution
                </Link>
              </li>
            </ul>
          </div>

          

          <div>
            <h3 className="font-semibold text-[#062B22] mb-4 text-sm tracking-wider uppercase">Legal & Policies</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              
              <li>
                <Link
                  href="/buyer-protection-policy"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Buyer Protect Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/seller-protection-policy"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Seller Protection Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/dispute-resolution-policy"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Dispute Resolution Policy
                </Link>
              </li>
            </ul>
          </div>
<div>
            <h3 className="font-semibold text-[#062B22] mb-4 text-sm tracking-wider uppercase">Trust & Safety</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/compliance-center"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Compliance Center
                </Link>
              </li>
              <li>
                <Link
                  href="/kyc-identity-verification-policy"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  KYC & Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/fund-protection-policy"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Fund Protection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#062B22] mb-4 text-sm tracking-wider uppercase">Product</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#F3B659] transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
