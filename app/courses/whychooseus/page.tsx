import { 
  BookOpen, 
  Wrench, 
  Layers, 
  Target, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  FileText,
  Presentation,
  BookMarked
} from "lucide-react";

export default function CaritaWhyChooseUs() {
  const valueProps = [
    {
      icon: BookOpen,
      title: "Research-Led Approach",
      description: "CaritaEducatrice training is built around named sources, books, and verified primary research. Participants are encouraged to understand not only what to do, but the evidence and principles behind the approach."
    },
    {
      icon: Wrench,
      title: "Practical by Design",
      description: "Courses move beyond theory. Participants work with practical examples, templates, checklists, exercises, and structured activities that can be adapted directly to real organisational situations."
    },
    {
      icon: Target,
      title: "Real-World Application",
      description: "Our training connects core principles with practical application. Participants are guided to consider how the material applies to their own organisation, project, fundraising strategy, or advocacy work."
    },
    {
      icon: ShieldCheck,
      title: "Honest & Transparent",
      description: "Funding rules, regulations, fees, deadlines, and institutional requirements can change. Where information is time-sensitive, CaritaEducatrice clearly identifies the need to verify current requirements against official sources."
    }
  ];

  const packageItems = [
    { title: "Course Book", desc: "Comprehensive reading material covering core frameworks." },
    { title: "Aims & Contents", desc: "Clear session objectives and structural breakdown." },
    { title: "Facilitator Slide Deck", desc: "Professional, ready-to-use presentation visuals." },
    { title: "Participant Workbook", desc: "Interactive exercises, templates, and checklists." }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="why-carita-training">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            The CaritaEducatrice Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] tracking-tight">
            Why Choose Our Training?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            Rigorous research meets practical execution. Designed to equip nonprofit leaders, advocates, and organisations for lasting impact.
          </p>
        </div>

        {/* 4 Core Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Banner: Tools You Can Use & The Full Package */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F5C4A]/5 rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-[#C9A227] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              Practical Toolkit Included
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38]">
              Tools You Can Use Long After Training
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Where appropriate, courses provide practical, reusable materials. The full four-part course package can include:
            </p>
          </div>

          {/* 4-Part Package Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packageItems.map((item, pIdx) => (
              <div 
                key={pIdx} 
                className="bg-[#FAF7F2] border border-gray-200/70 p-5 rounded-2xl flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[#0F5C4A] font-bold text-sm sm:text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}