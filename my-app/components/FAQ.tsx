"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "What is Escrow and how does it protect me?",
    answer:
      "Escrow is a financial arrangement where a third party holds and regulates payment of the funds required for two parties involved in a given transaction. It helps make transactions more secure by keeping the payment in a secure escrow account which is only released when all of the terms of an agreement are met as overseen by the escrow company.",
  },
  {
    question: "How long does a transaction take?",
    answer:
      "The length of a transaction depends on the inspection period agreed upon by both parties. Once the buyer receives the merchandise and accepts it, funds are typically released within 24 hours.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept valuable payment methods including bank transfers, credit cards, and select cryptocurrency options to ensure convenience for all our users.",
  },
  {
    question: "Is my money safe with Escrow Africa?",
    answer:
      "Yes, absolutely. We use bank-grade security and encryption to protect your funds and personal information. Your money is held in a regulated trust account until the transaction is successfully completed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#062B22] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-[#062B22] text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5 text-[#F3B659]" />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
