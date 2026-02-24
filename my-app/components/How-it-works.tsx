import Image from "next/image";
const HowItWorks = () => {
    return(
        
        <section id="how-it-works" className="py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/escrow.png"
                  alt="How it works illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto shadow-lg rounded-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How Escrow Works
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
  <div className="step-icon">
    <img src="/escrow logo 32.png" alt="logo" />
  </div>
  <div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Buyer and Seller Agree to Terms</h3>
    <p className="text-gray-600">
      Both parties agree to the terms of the transaction, including price, merchandise description, and shipping.
    </p>
  </div>
</div>
 <div className="flex gap-4">
                    <div className="step-icon">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Buyer Pays Escrow
                      </h3>
                      <p className="text-gray-600">
                        The buyer submits payment to our secure Escrow account.
                        We verify the payment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="step-icon">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Seller Ships Merchandise
                      </h3>
                      <p className="text-gray-600">
                        Upon payment verification, the seller is authorized to
                        ship merchandise and submit tracking information.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="step-icon">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Buyer Accepts Merchandise
                      </h3>
                      <p className="text-gray-600">
                        The buyer has a set number of days to inspect the
                        merchandise and accept or reject it.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="step-icon">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Escrow Releases Funds
                      </h3>
                      <p className="text-gray-600">
                        We release funds to the seller from the Escrow account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    )

}
export default HowItWorks;