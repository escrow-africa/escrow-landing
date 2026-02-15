import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
                <Image
                  src="/escrow logo 2.png"
                  alt="Escrow Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Secure, fast, and reliable escrow services for freelancers and businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-blue-600">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Security</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Escrow Service. All rights reserved.
          </p>
          <div className="flex space-x-6">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
             <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
