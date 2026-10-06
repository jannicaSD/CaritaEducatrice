import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Lightbulb, 
  Search, 
  FileText, 
  Globe, 
  Target, 
  ShieldCheck, 
  Briefcase 
} from "lucide-react";

export default function CaritaSocialEntrepreneursSection() {
  const helpAreas = [
    {
      title: "Clarify the Project",
      description: "Develop a clear, compelling explanation of the problem, your proposed solution and your intended impact.",
      icon: Lightbulb
    },
    {
      title: "Identify Funding Opportunities",
      description: "Help identify funders and funding routes that genuinely fit your social-impact project and growth stage.",
      icon: Search
    },
    {
      title: "Grant Writing",
      description: "Develop or review a professional funding proposal that communicates your project's unique value clearly.",
      icon: FileText
    },
    {
      title: "Crowdfunding",
      description: "Where appropriate, assess crowdfunding as a potential funding route and support campaign development.",
      icon: Globe
    },
    {
      title: "Build the Funding Case",
      description: "Help bring together your project story, supporting evidence and budget into a coherent, persuasive case for support.",
      icon: Target
    }
  ];

  const targetAudiences = [
    "Small business owners",
    "Social entrepreneurs",
    "Social-impact projects",
    "Organisations developing earned-income ideas",
    "Projects seeking matching funds or start-up capital"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="social-entrepreneurs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Social Entrepreneurs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Develop the funding case behind your social-impact idea.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Social entrepreneurs often have strong ideas for solving real problems but may need support identifying appropriate funding routes and communicating projects effectively to potential funders. Carita supports initiatives involving matching funds, start-up capital and more.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* Where Carita Can Help Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              Where Carita Can Help
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

          {/* Practical Support & Who This Is For Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Practical, Evidence-Based Support */}
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F5C4A]/10 px-3 py-1 rounded-lg text-[#0F5C4A]">
                  Methodology
                </span>
                <h3 className="text-xl font-bold text-[#1E2A38] mt-4 mb-3">Practical, Evidence-Based Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's approach combines practical fundraising experience with researched training material. Where information is time-sensitive — such as platform rules, fees or deadlines — the need for live verification is emphasized rather than relying on outdated guidelines.
                </p>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="lg:col-span-6 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#0F5C4A]" />
                  Who This Is For
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {targetAudiences.map((audience, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Coaching or Co-Working Note */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 mb-16 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Coaching or Co-Working</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Depending on your project, Carita can coach you through the funding process or work directly alongside you on relevant material. The exact scope is agreed upon after a free discovery call.
            </p>
          </div>

          {/* Start With Your Idea Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With Your Idea</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Have a social-impact project but unsure how to fund it? Book a free discovery call and explain what you are building. Carita will give you an honest assessment of whether and how we can help.
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