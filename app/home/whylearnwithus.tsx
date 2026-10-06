import { Search, FileText, Building2, Layers, CheckCircle2 } from "lucide-react";

export default function WhyLearnWithUs() {
  const differentiators = [
    {
      title: "Research First",
      description: "Every course is built from named sources or verified research. Claims are credited, and time-sensitive information is clearly identified.",
      icon: Search,
    },
    {
      title: "Learn & Apply",
      description: "Principles are paired with adaptable templates, checklists and worked examples so participants can put their learning into practice[cite: 1].",
      icon: FileText,
    },
    {
      title: "Built for Real Organisations",
      description: "The training is designed around the practical realities faced by NGOs, charities, trustees, fundraisers and advocacy organisations[cite: 1].",
      icon: Building2,
    },
  ];

  const coursePackItems = [
    "Course Book[cite: 1]",
    "Aims & Contents[cite: 1]",
    "Facilitator Slide Deck[cite: 1]",
    "Participant Workbook (Permanent access to reuse and adapt)[cite: 1]",
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            The CaritaEducatrice Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Training Built Differently
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            No generic slogans, no unverified claims—just rigorous, evidence-based professional development designed for real impact[cite: 1].
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#C9A227] transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#0F5C4A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: The Four-Part Course Pack */}
        <div className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#0F5C4A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                Complete Course Material
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38]">
                Keep Your Resources
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Every participant receives a complete four-part course pack to keep permanently for future use and organizational adaptation[cite: 1].
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coursePackItems.map((packItem, pIndex) => (
                <div 
                  key={pIndex} 
                  className="bg-white border border-gray-200/80 rounded-2xl p-5 flex items-start gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#1E2A38]">
                    {packItem}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}