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
    <section className="py-20 lg:py-24" id="our-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Who Needs Our Services
        </h2>

        {/* Cards container */}
        <div className="flex justify-center gap-6 overflow-x-auto lg:overflow-hidden">

          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex-shrink-0 w-[220px] lg:w-[200px] p-4 text-center"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <h3 className="text-md font-semibold text-black mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          ))}

        </div>
        <div className="flex gap-3 mt-3 text-center lg:hidden justify-center">
          <MoveLeft color="#F3B659" />
          <h1 className="text-[#F3B659] font-bold">swipe</h1>
          <MoveRight color="#F3B659" />
        </div>

      </div>
    </section>
  );
};

export default WorkFlow;