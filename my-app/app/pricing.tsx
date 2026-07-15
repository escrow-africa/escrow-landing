"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Headset, Lock, ShieldCheck, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for first-time users who want a secure, guided way to start escrow transactions.",
    featured: false,
    features: [
      "Secure deal setup",
      "Milestone-based release",
      "Email support",
      "Basic transaction dashboard",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "Custom",
    description: "Built for teams handling frequent or higher-value transactions with more control and support.",
    featured: true,
    features: [
      "Everything in Starter",
      "Priority support",
      "Advanced dispute handling",
      "Faster onboarding for teams",
    ],
    cta: "Book a demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations that need tailored workflows, dedicated support, and compliance-ready operations.",
    featured: false,
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom workflows",
      "Flexible integrations",
    ],
    cta: "Talk to sales",
  },
];

const highlights = [
  {
    title: "Transparent protection",
    text: "Every transaction is structured around clear milestones, secure approvals, and documented release steps.",
    icon: ShieldCheck,
  },
  {
    title: "Built for trust",
    text: "We combine strong compliance practices with a simple experience so both parties feel confident at every stage.",
    icon: Lock,
  },
  {
    title: "Real human support",
    text: "Need a hand? Our team is available to guide you through setup, payments, and issue resolution.",
    icon: Headset,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#F7FAF8] text-[#062B22]">
      <section className="pt-28 pb-16 bg-linear-to-br from-[#062B22] via-[#0B493A] to-[#0E5E49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-[#F3B659]/40 bg-white/10 px-3 py-1 text-sm font-medium text-[#F3B659]">
              <Sparkles className="mr-2 h-4 w-4" />
              Transparent pricing for secure deals
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Choose the right escrow plan for your next transaction.
            </h1>
            <p className="mt-5 text-lg text-white/80 sm:text-xl">
              Whether you are closing a single deal or managing frequent transactions, our pricing is designed to keep trust, speed, and security at the center.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 shadow-sm ${
                  plan.featured
                    ? "border-[#F3B659] bg-[#F3B659] text-[#062B22]"
                    : "border-white/20 bg-white/10 backdrop-blur-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{plan.name}</h2>
                  {plan.featured ? (
                    <span className="rounded-full bg-[#062B22] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F3B659]">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm opacity-90">{plan.description}</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="pb-1 text-sm opacity-80">/ plan</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`mt-8 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-[#062B22] text-[#F3B659] hover:bg-[#0d3d2e]"
                      : "bg-white text-[#062B22] hover:bg-[#F3B659]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B493A]">
                Why teams choose us
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                A pricing model that grows with your workflow.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From one-off deals to repeat business, our platform keeps your funds secure while reducing friction for every party involved.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3B659]/20 text-[#0B493A]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-[#DCEFE8] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B493A]">
                Need a tailored plan?
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#062B22]">
                Let us build a solution around your transaction volume and compliance needs.
              </h3>
              <p className="mt-4 text-gray-600">
                Share your goals and we will help you design the right package for your team, process, and budget.
              </p>
              <div className="mt-8 space-y-3">
                <Link
                  href="/waitlist"
                  className="flex items-center justify-center rounded-full bg-[#062B22] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B493A]"
                >
                  Request a custom quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/faqs"
                  className="flex items-center justify-center rounded-full border border-[#062B22] px-5 py-3 text-sm font-semibold text-[#062B22] transition-colors hover:bg-[#F7FAF8]"
                >
                  Review common questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}