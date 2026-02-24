import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  
  Scale,
  Smartphone,
  
  Briefcase,
} from "lucide-react";

const Features = () => {

    return(
<section id="features" className="py-20 lg:py-15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why choose our Escrow service?
              </h2>
              <p className="text-lg text-gray-600">
                We provide a secure environment for your transactions, ensuring
                peace of mind for both buyers and sellers.
              </p>
            </div>

    
            <div className="relative overflow-hidden">
  <motion.div
    className="flex gap-8"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    <div className="card">
      <div className="card-icon bg-blue-100">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Grade Security</h3>
      <p className="text-gray-600">
        Advanced encryption protects every transaction from start to finish.
      </p>
    </div>

    <div className="card">
      <div className="card-icon bg-green-100 text-green-600">
        <Zap className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
      <p className="text-gray-600">
       Automated workflows ensure quick release of funds once conditions are met, keeping your business moving.
      </p>
    </div>

    <div className="card">
      <div className="card-icon bg-blue-100">
        <Scale className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Dispute Resolution</h3>
      <p className="text-gray-600">
        Independent mediation ensures both parties are protected.
      </p>
    </div>
     <div className="card">
      <div className="card-icon bg-blue-100">
        <Globe className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Africa</h3>
      <p className="text-gray-600">
Designed around African markets, currencies, and trade realities.
      </p>
    </div>
     <div className="card">
      <div className="card-icon bg-blue-100">
        <Briefcase className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect for SMEs</h3>
      <p className="text-gray-600">
         Ideal for online sellers, freelancers, and growing businesses.
      </p>
    </div>
     <div className="card">
      <div className="card-icon bg-blue-100">
        <Smartphone className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First Platform</h3>
      <p className="text-gray-600">
       Simple, intuitive experience built for seamless mobile transactions.
      </p>
    </div>

    
  </motion.div>
</div>
            
          </div>
          
        </section>

        
    )
}
export default Features;