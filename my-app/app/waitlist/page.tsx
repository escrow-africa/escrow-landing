"use client";

import { Mail, User, Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WaitlistPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F7FAF8] flex items-center justify-center p-4 py-24 md:py-32">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F3B659]/10 to-transparent rounded-bl-full pointer-events-none" />
        
        <Link
          href="/"
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-50 transition-colors text-[#062B22]/60 hover:text-[#062B22] flex items-center gap-1 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>

        <div className="mt-4">
          {!submitted ? (
            <>
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-[#062B22]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#062B22]">
                  <Mail className="w-6 h-6 text-[#F3B659]" />
                </div>
                <h1 className="text-2xl font-bold text-[#062B22] mb-2">
                  Join the Waitlist
                </h1>
                <p className="text-sm text-gray-500">
                  Be the first to know when we launch and gain exclusive early access to Escrow Africa.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10 block w-full rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#F3B659]/50 focus:border-[#F3B659] py-2.5 text-gray-900 text-sm focus:outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  </div>

                  <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="pl-10 block w-full rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#F3B659]/50 focus:border-[#F3B659] py-2.5 text-gray-900 text-sm focus:outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Phone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 block w-full rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#F3B659]/50 focus:border-[#F3B659] py-2.5 text-gray-900 text-sm focus:outline-none transition-all"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 block w-full rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#F3B659]/50 focus:border-[#F3B659] py-2.5 text-gray-900 text-sm focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-semibold text-[#062B22] bg-[#F3B659] hover:bg-[#F3B659]/90 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed transition-all mt-4 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#062B22]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Adding to waitlist...
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600 animate-in zoom-in duration-300">
                <CheckCircle2 className="w-8 h-8 text-[#0B493A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#062B22] mb-2">
                You&apos;re on the list!
              </h2>
              <p className="text-sm text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
                Thank you for joining our waitlist. We will notify you at <strong className="text-[#062B22]">{email}</strong> as soon as we launch.
              </p>
              <Link
                href="/"
                className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#062B22] hover:bg-[#0B493A] transition-colors"
              >
                Go Back Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
