import Link from "next/link";
import { 
  ShieldCheck, 
  BookOpen, 
  Globe, 
  Layers, 
  CheckCircle2, 
  Target, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function OurStoryAbout() {
  const programmaticAreas = [
    "Grant writing and fundraising",
    "Crowdfunding and donor development",
    "NGO marketing and networking",
    "UN engagement and accreditation",
    "Human-rights advocacy and documentation",
    "Economic justice and peacebuilding",
    "Specialist advocacy relating to Pakistan's religious minorities",
  ];

  const coursePackItems = [
    { title: "Course Book", desc: "The core reference and learning material." },
    { title: "Aims & Contents", desc: "A clear framework showing what the course covers and expected learning outcomes." },
    { title: "Facilitator Slide Deck", desc: "Structured material supporting live delivery and discussion." },
    { title: "Participant Workbook", desc: "Practical exercises and activities that help turn learning into usable skills." },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Training People to Represent the Causes That Matter
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            CaritaEducatrice was created around a simple principle: organisations doing important work should have access to practical knowledge that helps them secure funding, communicate their work effectively, and engage with institutions that influence change.
          </p>
        </div>

        {/* Meaning & Audience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: The Name & Purpose */}
          <div className="lg:col-span-5 bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                About <span className="text-[#0F5C4A]">CaritaEducatrice</span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                CaritaEducatrice stands for empowerment, education, and advocacy. Inspired by the principles of care and structured learning, our mission sits at the heart of our work.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We provide professional training and consultancy for NGOs, charities, trustees, community organisations, advocacy groups, researchers, and other changemakers.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs font-semibold text-[#0F5C4A]">
              Empowering Purpose & Credibility
            </div>
          </div>

          {/* Right Column: Programmatic Focus Areas */}
          <div className="lg:col-span-7 bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-6">
                <Target className="w-4 h-4 text-[#C9A227]" />
                Core Focus Areas
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Programmes Focus On Practical Areas Including:
              </h3>
              <ul className="space-y-3 mb-8">
                {programmaticAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xs text-white/70 pt-4 border-t border-white/10">
              Designed for real-world application across local and international sectors.
            </div>
          </div>

        </div>

        {/* From Knowledge to Practical Capability & Course Pack */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xs">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              Rigorous Standards
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-4">
              From Knowledge to Practical Capability
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              CaritaEducatrice&apos;s approach is not simply to explain concepts. Courses use named and researched sources, practical templates, worked examples, scripted discussion exercises, and structured participant materials. Every course is built around a complete four-part learning pack:
            </p>
          </div>

          {/* 4-Part Course Pack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursePackItems.map((pack, pIndex) => (
              <div key={pIndex} className="bg-[#FAF7F2] border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F5C4A] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                    0{pIndex + 1}
                  </div>
                  <h4 className="font-bold text-[#1E2A38] text-base mb-2">{pack.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pack.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Community & Long-Term Capacity Building */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Global Community */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                A Global Online Learning Community
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                CaritaEducatrice&apos;s courses are delivered online and are open to participants worldwide. Face-to-face delivery is also available in the UK for participants who can attend in person.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The aim is to make professional development accessible while keeping training grounded in real organisational and advocacy practice.
              </p>
            </div>
          </div>

          {/* Long-Term Capacity Building */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                Building Capacity for the Long Term
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                CaritaEducatrice is ultimately about capacity building. Rather than creating dependency on external consultants, our training and consultancy help people develop the knowledge, tools, and confidence to continue independently.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether the need is a funding proposal, crowdfunding campaign, or UN engagement, the objective is to build capability for the long term.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}