import { Search, FileCheck, ShieldAlert, HeartHandshake } from "lucide-react";

export default function TheCaritaApproach() {
  const principles = [
    {
      title: "Evidence",
      description: "We use named sources, research and verified information rather than unsupported claims.",
      icon: Search,
      tag: "Verified Research",
    },
    {
      title: "Practicality",
      description: "Learning is paired with templates, checklists and worked examples[cite: 1].",
      icon: FileCheck,
      tag: "Actionable Tools",
    },
    {
      title: "Transparency",
      description: "When information may change — such as regulations, fees or deadlines — we identify that clearly and direct participants to verify the current position[cite: 1].",
      icon: ShieldAlert,
      tag: "Clear Guidelines",
    },
    {
      title: "Responsibility",
      description: "Sensitive subjects are handled carefully, with appropriate content notes and a clear distinction between documented actors and broad communities[cite: 1].",
      icon: HeartHandshake,
      tag: "Ethical Standards",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Our Core Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Evidence. Practice. Honesty.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The CaritaEducatrice approach places rigorous sourcing, transparency, and ethical responsibility at the center of everything we do[cite: 1].
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#0F5C4A] border border-gray-200 shadow-2xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#0F5C4A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Detail */}
                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#0F5C4A] transition-colors">
                  <span>CaritaEducatrice Standard</span>
                  <span>0{index + 1} / 04</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}