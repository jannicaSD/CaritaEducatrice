"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, Mail, Calendar, Sparkles } from "lucide-react";

export default function CaritaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are CaritaEducatrice's courses delivered online or face-to-face?",
      a: "All CaritaEducatrice courses are delivered online through live, facilitated sessions and are open to participants worldwide. Face-to-face delivery is also available in the UK for participants who are able to attend in person."
    },
    {
      q: "Do online and face-to-face courses have the same content?",
      a: "Yes. Online and face-to-face delivery use the same core course content and course materials. The primary difference is the method of delivery. Our standard offering does not currently operate as a hybrid programme, although bespoke arrangements may be possible."
    },
    {
      q: "How long are CaritaEducatrice's courses?",
      a: "Course length varies depending on the subject. The shortest courses currently contain 4 sessions, while the longest contains 53 sessions. Our flagship Grant Writing and Fundraising Coach course is delivered across 20 sessions over ten days."
    },
    {
      q: "What materials are included with a course?",
      a: "Each course comes with a comprehensive four-part course pack including a Course Book, Aims & Contents, Facilitator Slide Deck, and Participant Workbook designed to support learning and continued reference."
    },
    {
      q: "Do I keep the course materials after completing the training?",
      a: "Yes. Participants keep their course materials permanently so they can return to them and use them as a reliable reference after completing the training."
    },
    {
      q: "Are CaritaEducatrice's courses academically accredited?",
      a: "Our courses are professional-development training programmes rather than accredited academic qualifications. Participants receive a CaritaEducatrice certificate of completion. If you require externally accredited CPD, check whether it is required by your professional body."
    },
    {
      q: "Where does the course information and research come from?",
      a: "CaritaEducatrice courses use named books and verified primary-source research with clear sourcing. Time-sensitive information, such as regulations, fees, deadlines, and platform requirements, should always be checked against current sources."
    },
    {
      q: "Do the courses include practical exercises and templates?",
      a: "Yes. Our training connects principles with practical application. Depending on the course, participants work with templates, checklists, worked examples, practical exercises, structured activities, and scripted discussion dialogues."
    },
    {
      q: "I am new to fundraising. Which course should I start with?",
      a: "The Grant Writing and Fundraising Coach — A Ten-Day Professional Certificate Course is the broadest entry point for a comprehensive introduction to fundraising, covering grant writing, trusts and foundations, major gifts, digital fundraising, and more."
    },
    {
      q: "Do I need to take the courses in a particular order?",
      a: "No. The courses address different areas of professional development, so participants do not need to complete them in a particular sequence. You can select courses according to your organisation's current needs."
    },
    {
      q: "Can organisations book training for a group?",
      a: "Yes. CaritaEducatrice offers group and organisational bookings, providing an opportunity for teams, trustees, and staff members to undertake relevant training together."
    },
    {
      q: "Can CaritaEducatrice provide consultancy as well as training?",
      a: "Yes. We provide tailored consultancy alongside training programmes, including grant writing coaching, fundraising strategy, crowdfunding campaign design, UN and human-rights advocacy writing, and UN accreditation support."
    },
    {
      q: "Is consultancy coaching or does CaritaEducatrice actually help write documents?",
      a: "Both options are available. Depending on the engagement, consultancy can involve coaching, co-writing, review, or practical support. The appropriate level of involvement is discussed during the initial discovery conversation."
    },
    {
      q: "How much does consultancy cost?",
      a: "Our course fees are published separately. Consultancy is individually scoped according to the work required, so consultancy fees are discussed after an initial free discovery call."
    },
    {
      q: "How does the consultancy process work?",
      a: "The consultancy process typically follows: Discovery → Fit Mapping → Building the Foundation → Coaching or Co-Writing → Review & Polish → Submission → Reporting & Follow-Through, depending on the project."
    },
    {
      q: "Does CaritaEducatrice work with sensitive human-rights subjects?",
      a: "Yes. Sensitive subjects are handled carefully with appropriate content considerations, content notes, and the option to step out of particular discussions. Harm is attributed to specific documented actors rather than whole communities."
    },
    {
      q: "Does CaritaEducatrice work with organisations outside the UK?",
      a: "Yes. Our courses are available online worldwide. The organisation operates from the UK and maintains an ongoing charitable and advocacy presence in Pakistan."
    },
    {
      q: "Can I ask CaritaEducatrice whether a particular course is right for me?",
      a: "Yes. If you are unsure which course or consultancy service is appropriate, you can discuss your requirements through a free discovery conversation to identify the right support."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Help & Information
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Everything You Need to Know About CaritaEducatrice
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about our courses, training materials, consultancy services, delivery options, and methodological approach.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const numberLabel = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={index}
                className={`bg-white border rounded-3xl transition-all duration-200 overflow-hidden shadow-2xs ${
                  isOpen ? 'border-[#0F5C4A]/50 ring-1 ring-[#0F5C4A]/20' : 'border-gray-200/85 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-sm font-bold text-[#0F5C4A] bg-[#0F5C4A]/10 px-3 py-1 rounded-xl">
                      {numberLabel}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1E2A38]">
                      {faq.q}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0F5C4A]/10 text-[#0F5C4A]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-gray-100 mt-2">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            If your question is not answered here, contact CaritaEducatrice directly. Whether you are exploring professional training, looking for fundraising support, or considering a consultancy engagement, we can start with a conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-base"
            >
              Contact CaritaEducatrice
              <Mail className="w-5 h-5" />
            </Link>
            <Link 
              href="/book-consultation" 
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200 text-sm sm:text-base"
            >
              Book a Free Consultation
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}