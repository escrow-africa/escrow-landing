import Link from "next/link";
import { useState } from "react";
import WaitlistModal from "../components/WaitlistModal";
const CTA = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    
    return(
        
        <section className="py-20 bg-[#0B493A]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start a secure transaction?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of others who use our platform for safe, reliable,
              and fast escrow services.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#062B22] bg-[#F3B659] hover:bg-[#062B22] hover:text-[#F3B659] rounded-full "
            >
              Get Started Now
            </Link>
            
            <button
             onClick={() => setIsWaitlistOpen(true)}
              className=" ml-4 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#F3B659] border-2 border-[#F3B659] hover:bg-[#F3B659] hover:text-[#062B22] rounded-full mt-4 md:mt-0"
            >
              Join the Waitlist
              </button>
            
          </div>
           <WaitlistModal 
                isOpen={isWaitlistOpen} 
                onClose={() => setIsWaitlistOpen(false)} 
              />
        </section>
        
    )
}
export default CTA;