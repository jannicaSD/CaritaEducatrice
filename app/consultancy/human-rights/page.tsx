import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  ShieldAlert, 
  Send, 
  Scale, 
  Building2, 
  BookOpen,
  UserCheck
} from "lucide-react";

export default function CaritaHumanRightsAdvocacyCoaching() {
  const helpAreas = [
    {
      title: "Human-Rights Funding Proposals",
      description: "CaritaEducatrice can draft or review funding proposals for organisations working with international human-rights funders.",
      icon: FileText
    },
    {
      title: "Documentation Reports",
      description: "We can support the preparation and review of documentation reports that present relevant information clearly and credibly.",
      icon: BookOpen
    },
    {
      title: "Urgent Appeals",
      description: "Where appropriate, we can work with organisations preparing urgent appeals concerning documented human-rights situations.",
      icon: ShieldAlert
    },
    {
      title: "Allegation Letters",
      description: "Consultancy can include drafting or reviewing allegation letters intended for relevant UN Special Procedures.",
      icon: Scale
    },
    {
      title: "Individual Communications",
      description: "CaritaEducatrice can support organisations working on individual communications to UN treaty bodies.",
      icon: UserCheck
    }
  ];

  const processSteps = [
    { number: "01", title: "Understand the Situation", text: "We listen to the organisation, case or advocacy issue." },
    { number: "02", title: "Identify the Appropriate Mechanism", text: "We consider which funder, UN mechanism or advocacy route genuinely fits the situation." },
    { number: "03", title: "Establish the Evidence", text: "We work through the relevant information and supporting documentation." },
    { number: "04", title: "Draft or Review", text: "CaritaEducatrice can coach your team, review an existing document or draft alongside you." },
    { number: "05", title: "Quality & Sourcing Check", text: "The document is reviewed for clarity, evidence and the requirements of its intended audience." },
    { number: "06", title: "Prepare for Submission", text: "We help you make the final document as clear and appropriate as possible before submission." }
  ];

  const targetAudiences = [
    "Human-rights organisations",
    "Advocacy organisations",
    "NGOs and charities",
    "Organisations documenting human-rights concerns",
    "Groups engaging with UN Special Procedures",
    "Organisations preparing communications to UN treaty bodies"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="un-human-rights-advocacy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            UN & Human-Rights Advocacy Writing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Prepare credible advocacy documents for international human-rights mechanisms.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            CaritaEducatrice provides hands-on support for organisations working on human-rights issues, helping communicate evidence and concerns through appropriate international mechanisms with strict format and evidentiary rigor.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* Evidence Matters Note */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 sm:p-8 mb-16 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] flex-shrink-0 mt-1">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Evidence Matters</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Human-rights advocacy requires more than compelling language. CaritaEducatrice’s approach is built around evidence, sourcing, and the specific requirements of the mechanism being approached. Where information is uncertain, incomplete, or time-sensitive, it is identified and verified rather than presented as established fact.
              </p>
            </div>
          </div>

          {/* What We Can Help With Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              What We Can Help With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* How We Work Process Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center">
              How We Work
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

          {/* Who This Is For & A Careful Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Who This Is For */}
            <div className="lg:col-span-6 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0F5C4A]" />
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
            </div>

            {/* A Careful Approach to Sensitive Issues */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Core Principles
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">A Careful Approach to Sensitive Issues</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  CaritaEducatrice does not attribute harm to entire countries, communities, or religions.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Where courses or consultancy deal with persecution, violence, or human-rights violations, the approach is to identify the specific, named, and documented actors responsible.
                </p>
              </div>
            </div>

          </div>

          {/* Start With a Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If you have a live human-rights advocacy or documentation challenge, book a free discovery call. CaritaEducatrice can assess the situation and explain honestly whether consultancy is appropriate and what form that support could take.
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