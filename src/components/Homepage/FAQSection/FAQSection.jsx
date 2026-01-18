import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How long does delivery take within Bangladesh?",
    answer:
      "Standard shipping to any address in Bangladesh takes 3 to 5 business days. Express options are available at checkout for delivery within 1 to 2 days.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Bangladeshi debit/credit cards (Visa, MasterCard, Amex), bKash, Nagad, Rocket, and cash on delivery for orders up to ৳15,000.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes. Items can be returned or exchanged within 30 days of receipt, provided they are unused, in original packaging, and accompanied by the order invoice.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship only within Bangladesh. International shipping may be added in the future—stay tuned to our newsletter for updates.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After your order is processed, you’ll receive a tracking number via email and SMS. Use that number on our “Track Order” page to see real‑time status.",
  },
  {
    question: "Are the products authentic and locally sourced?",
    answer:
      "All items are **genuine, sourced from verified Bangladeshi manufacturers** or trusted international partners. We guarantee quality and provide a certificate of authenticity for premium goods.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>

          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>

                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-400">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
