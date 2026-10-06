import { BookOpen, Clock, Library, Layers, Search, FileCheck } from "lucide-react";

export default function ImpactCredibility() {
  const metrics = [
    {
      number: "16",
      label: "Full training courses",
      description: "Professional, structured learning pathways designed for real-world impact.",
      icon: BookOpen,
    },
    {
      number: "190+",
      label: "Contact hours",
      description: "Comprehensive instructional depth spanning specialist advocacy and fundraising.",
      icon: Clock,
    },
    {
      number: "55+",
      label: "Named source books",
      description: "Rigorous academic and professional references underpinning our curriculum[cite: 1].",
      icon: Library,
    },
    {
      number: "4",
      label: "Core components",
      description: "Included in every participant course pack for permanent organizational reuse[cite: 1].",
      icon: Layers,
    },
  ];

  const standards = [
    {
      title: "Research-Led",
      description: "Named sources and verified research[cite: 1].",
      icon: Search,
    },
    {
      title: "Practical",
      description: "Templates, checklists and worked examples[cite: 1].",
      icon: FileCheck,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Transparent Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            What We Can Show You Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real figures, verified research standards, and tangible curriculum assets built for organizational growth[cite: 1].
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-[#0F5C4A] tracking-tight">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0F5C4A] border border-gray-200/80 flex items-center justify-center shadow-2xs group-hover:bg-[#0F5C4A] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E2A38] mb-2">
                    {item.label}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Standards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((standard, sIndex) => {
            const StdIcon = standard.icon;
            return (
              <div 
                key={sIndex}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-6 sm:p-8 flex items-center gap-6 shadow-2xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <StdIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E2A38] mb-1">
                    {standard.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {standard.description}[cite: 1]
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}