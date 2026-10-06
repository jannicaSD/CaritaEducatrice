import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Search, 
  FileText, 
  Edit3, 
  Users, 
  BookOpen, 
  ShieldCheck 
} from "lucide-react";

export default function CaritaResearchersAcademicsSection() {
  const helpAreas = [
    {
      title: "Find the Right Funder",
      description: "Identify funding opportunities that genuinely align with your specific research objectives and project scope.",
      icon: Search
    },
    {
      title: "Develop a Strong One-Pager",
      description: "Turn your complex research idea into a clear, compelling one-page presentation that communicates value effectively.",
      icon: FileText
    },
    {
      title: "Strengthen the Proposal",
      description: "Review and polish a competitive funding proposal, focusing on communicating your research and funding case with clarity.",
      icon: Edit3
    },
    {
      title: "Coaching or Co-Writing",
      description: "Carita can coach you through the writing process or work alongside you directly as an active drafting partner.",
      icon: Users
    }
  ];

  const targetAudiences = [
    "Scholars",
    "Researchers",
    "Academics",
    "Research teams"
  ];

  const practicalSupports = [
    "Funder identification",
    "Project positioning",
    "One-page project pitches",
    "Proposal development",
    "Proposal review",
    "Final polishing"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="researchers-academics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Researchers & Academics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Turn strong research into a clear and competitive funding case.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Researchers and academics often have the expertise behind an excellent project but need to communicate that work effectively to funders and evaluators. Carita provides specialist grant-writing support tailored specifically for scholars and research teams.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* How Carita Can Help Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              How Carita Can Help
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpAreas.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-md">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1E2A38] mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Who This Is For & Research Expertise Meets Funding Communication */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Who This Is For */}
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0F5C4A]" />
                  Who This Is For
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  Designed for applicants in any discipline and at any career stage, including those applying to public agencies, private foundations and institutional funders.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {targetAudiences.map((audience, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-white px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Expertise Meets Funding Communication */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Our Approach
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">Research Expertise Meets Funding Communication</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Carita does not replace your subject expertise. Instead, our consultancy helps translate that rigorous expertise into a polished proposal that a funding audience can easily understand and evaluate.
                </p>
              </div>
            </div>

          </div>

          {/* Practical Support Checklist Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-xl font-bold text-[#1E2A38] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#0F5C4A]" />
              Practical Support Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {practicalSupports.map((support, sIdx) => (
                <div key={sIdx} className="bg-white border border-gray-200/60 rounded-xl px-4 py-3 flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                  <span>{support}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Start With a Free Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Free Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about your research, your funding goal and where you need help. Carita can then recommend an appropriate consultancy scope.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/book-consultation" 
                className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
              >
                Book a Free Discovery Call
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}