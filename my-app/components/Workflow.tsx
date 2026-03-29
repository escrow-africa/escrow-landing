import { MoveLeft, MoveRight } from "lucide-react";
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
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Who Needs Our Services
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-black mb-3">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkFlow;