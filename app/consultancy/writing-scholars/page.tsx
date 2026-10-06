import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Search, 
  FileText, 
  Edit3, 
  Users, 
  GraduationCap, 
  BookOpen 
} from "lucide-react";

export default function CaritaGrantWritingScholars() {
  const helpAreas = [
    {
      title: "Find the Right Funder",
      description: "Carita can help scholars and researchers identify funding opportunities that are appropriate for their research and project.",
      icon: Search
    },
    {
      title: "Develop the One-Pager",
      description: "A strong first explanation of the research can make a significant difference. We help develop a clear, compelling one-page project pitch.",
      icon: FileText
    },
    {
      title: "Strengthen the Proposal",
      description: "We can review and polish a funding proposal so that the research, project purpose and funding case are communicated clearly.",
      icon: Edit3
    },
    {
      title: "Work With You or Alongside You",
      description: "Develop the proposal yourself with expert coaching, or have Carita work alongside you during the drafting process. Balance agreed upon discovery.",
      icon: Users
    }
  ];

  const processSteps = [
    { number: "01", title: "Understand Your Research", text: "We learn about your research, project and funding objective." },
    { number: "02", title: "Identify Funder Fit", text: "We look for funders whose interests genuinely align with the work." },
    { number: "03", title: "Develop the Pitch", text: "We work on a strong and concise one-page presentation of the project." },
    { number: "04", title: "Develop the Proposal", text: "We help structure, draft, review or polish the application." },
    { number: "05", title: "Review & Refine", text: "The proposal receives a structured quality and sourcing review before submission." }
  ];

  const targetAudiences = [
    "Academic researchers",
    "Scholars",
    "Research teams",
    "Early-career researchers",
    "Established academics",
    "Researchers applying to public agencies",
    "Researchers applying to private foundations",
    "Researchers seeking institutional funding"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="grant-writing-scholars">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Grant Writing for Scholars & Researchers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Turn strong research into a competitive funding proposal.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Carita supports academics, researchers and scholars who need to identify an appropriate funder, communicate their research clearly and develop a competitive grant proposal combining funder research and proposal development.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* What We Can Help With Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              What We Can Help With
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

          {/* Our Process Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center">
              Our Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-xs relative">
                  <span className="text-2xl font-black text-[#0F5C4A]/30 block mb-2">{step.number}</span>
                  <h4 className="text-base font-bold text-[#1E2A38] mb-1">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who This Is For & A Practical Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Who This Is For */}
            <div className="lg:col-span-6 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#0F5C4A]" />
                  Who This Is For
                </h3>
                <div className="space-y-3 mt-6">
                  {targetAudiences.map((audience, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                * Services are available to scholars, researchers, and academics in any discipline and at any career stage.
              </p>
            </div>

            {/* A Practical Approach */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Our Methodology
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">A Practical Approach</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  The objective is not to replace the researcher's expertise.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Carita helps communicate that expertise effectively to the funding audience — matching the research idea to an appropriate opportunity and strengthening the proposal around what evaluators actually need to understand.
                </p>
              </div>
            </div>

          </div>

          {/* Start With a Free Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Free Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about your research, the funding opportunity you have in mind and where you need support. Carita can then recommend an appropriate consultancy scope — whether that means coaching, proposal review or working alongside you on the application.
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