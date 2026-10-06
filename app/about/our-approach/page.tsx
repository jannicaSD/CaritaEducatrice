import { 
  Search, 
  Lightbulb, 
  PlayCircle, 
  Wrench, 
  Target, 
  BookOpen, 
  Layers, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function OurApproach() {
  const steps = [
    {
      number: "01",
      title: "Evidence",
      icon: <Search className="w-5 h-5 text-[#0F5C4A]" />,
      desc: "We begin with research. Courses use named sources and verified information, giving participants a clear basis for understanding rather than relying on unsupported claims."
    },
    {
      number: "02",
      title: "Principles",
      icon: <Lightbulb className="w-5 h-5 text-[#0F5C4A]" />,
      desc: "Research is translated into understandable principles. Participants learn what to do, why an approach is useful, and what factors to consider when applying it."
    },
    {
      number: "03",
      title: "Practice",
      icon: <PlayCircle className="w-5 h-5 text-[#0F5C4A]" />,
      desc: "Knowledge becomes more useful when practised. Courses incorporate exercises, discussion, examples, and activities to work through core concepts."
    },
    {
      number: "04",
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-[#0F5C4A]" />,
      desc: "Participants receive practical resources supporting their future work—including templates, checklists, worked examples, planning resources, and proposal structures."
    },
    {
      number: "05",
      title: "Application",
      icon: <Target className="w-5 h-5 text-[#0F5C4A]" />,
      desc: "The final objective is application. Participants are encouraged to adapt what they've learned to their own organisation, project, fundraising, or advocacy situation."
    }
  ];

  const coursePack = [
    "Course Book",
    "Aims & Contents",
    "Facilitator Slide Deck",
    "Participant Workbook"
  ];

  const consultancySteps = [
    "Discovery",
    "Foundation",
    "Development",
    "Review",
    "Submission",
    "Follow-through"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Methodology & Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            From Evidence to Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            CaritaEducatrice&apos;s approach follows a simple, robust progression designed to turn professional knowledge into practical, long-term capability.
          </p>
        </div>

        {/* 5-Stage Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-2xs relative group hover:border-[#0F5C4A]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-[#0F5C4A]/20 group-hover:text-[#0F5C4A]/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Beyond the Classroom & Course Pack Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Training Continues */}
          <div className="lg:col-span-6 bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                Training That Continues Beyond the Classroom
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                CaritaEducatrice courses provide participants with a comprehensive four-part course pack. Participants keep their course materials permanently, giving them a reliable reference to return to whenever needed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coursePack.map((item, i) => (
                  <div key={i} className="bg-[#FAF7F2] border border-gray-200/60 rounded-xl p-3.5 text-xs sm:text-sm font-semibold text-[#1E2A38] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0F5C4A]"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Consultancy with the Same Philosophy */}
          <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3.5 py-1 rounded-full text-xs font-semibold mb-6">
                <Layers className="w-4 h-4 text-[#C9A227]" />
                Expert Support
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Consultancy With the Same Philosophy
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Depending on the service, CaritaEducatrice provides coaching, co-writing, review, strategic development, or practical support following a structured process:
              </p>

              {/* Consultancy Workflow Steps */}
              <div className="flex flex-wrap gap-2 mb-6">
                {consultancySteps.map((cStep, cIdx) => (
                  <span key={cIdx} className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3.5 py-1.5 rounded-full">
                    {cIdx + 1}. {cStep}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs text-white/80 pt-4 border-t border-white/10 leading-relaxed">
              The purpose is not simply to complete the immediate task, but to help clients approach future activities with greater independence.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}