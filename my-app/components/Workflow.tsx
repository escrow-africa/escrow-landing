
import { motion } from "framer-motion";
import Image from "next/image";

const WorkFlow = () => {
  const cards = [
    {
      title: "E-commerce Transactions",
      img: "/ecommerce.png",
      alt: "E-commerce",
      description:
        "Protect online purchases from fraud and non-delivery. Funds are only released when the buyer confirms receipt.",
    },
    {
      title: "Car Sales",
      img: "/car-sales.png",
      alt: "Car sales",
      description:
        "Avoid risky transfers and fake payment proofs. Secure large payments until ownership and documentation are verified.",
    },
    {
      title: "Property Rentals",
      img: "/rental.png",
      alt: "Property rentals",
      description:
        "Protect deposits and advance rent payments. Release funds only after keys and agreement terms are confirmed.",
    },
    {
      title: "Freelance Services",
      img: "/freelance.png",
      alt: "Freelance services",
      description:
        "No more “work delivered, payment missing.” Clients deposit upfront — funds release when work is approved.",
    },
    {
      title: "Instagram Vendors",
      img: "/insta-vendor.png",
      alt: "Instagram vendors",
      description:
        "Sell confidently on social media. Customers pay into secure escrow — you ship without fear of chargebacks.",
    },
  ];

  return (
    <section className="py-20 lg:py-24" id="workflows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Who Needs Our Services
        </h2>

       
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {cards.concat(cards).map((card, idx) => (
              
              <div
                key={idx}
                className="min-w-[280px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 flex justify-center">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-black mb-2 px-4">
                  {card.title}
                </h3>
                <p className="text-center text-gray-600 px-4 pb-6">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;