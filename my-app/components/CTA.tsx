import Link from "next/link";
const CTA = () => {
  return (

    <section className="py-20 bg-[#0B493A]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to start a secure transaction?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of others who use our platform for safe, reliable,
          and fast escrow services.
        </p>
        <div className="flex justify-center items-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#062B22] bg-[#F3B659] hover:bg-transparent hover:text-[#F3B659] border-2 border-[#F3B659] rounded-full transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>

      </div>
    </section>

  )
}
export default CTA;