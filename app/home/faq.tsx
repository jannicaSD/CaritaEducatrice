"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are CaritaEducatrice courses available online?",
      answer: "Yes. Courses are available online to participants anywhere in the world.",
    },
    {
      question: "Can I attend in person?",
      answer: "Face-to-face delivery is available for participants who can attend in person in the United Kingdom[cite: 1].",
    },
    {
      question: "Do I need to complete the courses in order?",
      answer: "No. Each course stands alone, although related courses are grouped into learning clusters[cite: 1].",
    },
    {
      question: "Are CaritaEducatrice courses academically accredited?",
      answer: "CaritaEducatrice courses are professional-development training rather than accredited academic qualifications. Each course provides a CaritaEducatrice certificate of completion[cite: 1].",
    },
    {
      question: "Do I receive course materials?",
      answer: "Yes. Participants receive the complete four-part course pack[cite: 1].",
    },
    {
      question: "Can my organisation book a course for the whole team?",
      answer: "Yes. Group and organisational bookings are available[cite: 1].",
    },
    {
      question: "Are the courses only for Pakistan-focused organisations?",
      answer: "No. Many courses apply to NGOs and charities internationally. Pakistan-specific courses are clearly identified[cite: 1].",
    },
    {
      question: "Can CaritaEducatrice write a proposal for us?",
      answer: "Consultancy can involve either coaching your team or working alongside you to draft and develop documents[cite: 1].",
    },
    {
      question: "How much does consultancy cost?",
      answer: "Consultancy is scoped individually after a discovery call[cite: 1].",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/65">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <HelpCircle className="w-4 h-4 text-[#0F5C4A]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Clear answers regarding our professional courses, delivery modes, course packs, and consultancy services[cite: 1].
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#0F5C4A]/40"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1E2A38]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white text-[#0F5C4A] border border-gray-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#0F5C4A] text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-200/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner CTA */}
        <div className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-10 text-center shadow-xs">
          <h3 className="text-xl font-bold text-[#1E2A38] mb-2">
            Have a question not answered here?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Get in touch with our team or book a free discovery call to discuss your organisation&apos;s specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0F5C4A] hover:bg-[#C9A227] text-white hover:text-[#1E2A38] font-bold px-6 py-3 rounded-2xl shadow-md transition-all duration-200"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}