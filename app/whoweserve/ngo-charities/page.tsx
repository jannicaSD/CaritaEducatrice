import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Target, 
  Globe, 
  Scale, 
  Users, 
  Building2, 
  Compass,
  Briefcase
} from "lucide-react";

export default function CaritaNGOsCharitiesSection() {
  const helpAreas = [
    {
      title: "Grant Writing & Funding",
      description: "Develop stronger funding proposals, identify appropriate funding opportunities and build the skills needed to approach funders effectively.",
      icon: FileText
    },
    {
      title: "Fundraising Strategy",
      description: "Build a practical annual fundraising plan and develop a more organised approach to donor development.",
      icon: Target
    },
    {
      title: "Crowdfunding",
      description: "Develop crowdfunding campaigns and navigate relevant platform eligibility and verification requirements.",
      icon: Globe
    },
    {
      title: "UN & Human-Rights Engagement",
      description: "For organisations working on human-rights issues, Carita can support proposals, reports, urgent appeals, allegation letters and communications to relevant UN mechanisms.",
      icon: Scale
    },
    {
      title: "Team Development",
      description: "Carita's courses build lasting internal capacity, while consultancy allows the organisation to work directly with us on a live funding or advocacy challenge.",
      icon: Users
    }
  ];

  const targetAudiences = [
    "Small and large NGOs",
    "Registered charities",
    "Community organisations",
    "Grassroots organisations",
    "Advocacy organisations",
    "Internationally focused organisations",
    "Organisations working across the UK and Pakistan"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="ngos-charities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            NGOs & Charities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Practical training and consultancy for organisations doing important work.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            NGOs and charities often have strong programmes and committed teams, but turning that work into sustainable funding, credible proposals and effective advocacy requires a specialised set of skills. Carita works with organisations at all stages of growth.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* How Carita Can Help Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              How Carita Can Help
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

          {/* Who This Can Include Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#0F5C4A]" />
              Who This Can Include
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudiences.map((audience, aIdx) => (
                <div key={aIdx} className="bg-white border border-gray-200/60 rounded-xl px-4 py-3 flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training or Consultancy? Comparison Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
            <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F5C4A]/10 px-3 py-1 rounded-lg text-[#0F5C4A]">
                  Capacity Building
                </span>
                <h4 className="text-xl font-bold text-[#1E2A38] mt-4 mb-2">Training</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Suited to organisations that want to build their own team's long-term capability and foundational skillset across proposal writing and strategy.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F5C4A]/10 px-3 py-1 rounded-lg text-[#0F5C4A]">
                  Direct Support
                </span>
                <h4 className="text-xl font-bold text-[#1E2A38] mt-4 mb-2">Consultancy</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Suited to organisations with a specific live challenge — such as a funding application, fundraising strategy, crowdfunding campaign or UN submission. Both approaches can be combined where appropriate.
                </p>
              </div>
            </div>
          </div>

          {/* Start a Conversation Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start a Conversation</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If you are not sure which Carita service is right for your organisation, book a free, no-obligation discovery call. We will look at your situation first and recommend the most appropriate next step.
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