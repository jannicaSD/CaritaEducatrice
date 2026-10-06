import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Globe, 
  FileText, 
  MessageSquareText, 
  ShieldCheck, 
  ArrowRightLeft, 
  Building2,
  BookOpen
} from "lucide-react";

export default function CaritaCrowdfundingDesignCoaching() {
  const helpAreas = [
    {
      title: "Choose the Right Platform",
      description: "CaritaEducatrice can help assess which platform is appropriate for your particular campaign. Covering platforms including JustGiving, GoFundMe, GlobalGiving, and Localgiving.",
      icon: Globe
    },
    {
      title: "Develop Your Campaign Brief",
      description: "We help turn your project into a clear campaign brief that communicates what you are trying to achieve and why support is needed.",
      icon: FileText
    },
    {
      title: "Strengthen the Story",
      description: "A crowdfunding campaign needs a clear and credible story. We work with you to develop the campaign narrative and supporting messaging.",
      icon: MessageSquareText
    },
    {
      title: "Platform Registration",
      description: "We can guide your organisation through the relevant eligibility and verification requirements for the selected platform.",
      icon: ShieldCheck
    },
    {
      title: "Cross-Border Considerations",
      description: "Where funds are moving between the UK and Pakistan, consultancy includes the relevant cross-border compliance work identified for the project.",
      icon: ArrowRightLeft
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery", text: "We understand your project, organisation and fundraising objective." },
    { number: "02", title: "Platform Fit", text: "We identify the crowdfunding platform that genuinely fits your situation." },
    { number: "03", title: "Campaign Brief", text: "We develop the foundation of your campaign." },
    { number: "04", title: "Story & Messaging", text: "We work on the narrative and presentation of the campaign." },
    { number: "05", title: "Registration & Verification", text: "We guide the application through the relevant platform's eligibility and verification process." },
    { number: "06", title: "Cross-Border Review", text: "Where applicable, we address the UK/Pakistan funding-transfer considerations relevant to the engagement." }
  ];

  const targetAudiences = [
    "NGOs and charities",
    "Community organisations",
    "Grassroots organisations",
    "Faith-based organisations",
    "Social-impact projects",
    "Organisations raising funds across the UK and Pakistan"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="crowdfunding-campaign-design">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Crowdfunding Campaign Design & Platform Registration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Turn your project into a structured crowdfunding campaign.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Crowdfunding can open new routes to funding, but choosing an appropriate platform, preparing the campaign and meeting eligibility requirements all matter. CaritaEducatrice provides hands-on support, including cross-border considerations between the UK and Pakistan.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* How CaritaEducatrice Can Help Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              How CaritaEducatrice Can Help
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

          {/* Our Consultancy Process Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center">
              Our Consultancy Process
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

          {/* Who This Is For & Why Work With CaritaEducatrice Grid */}
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

            {/* Why Work With CaritaEducatrice */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Research-Driven Approach
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">Why Work With CaritaEducatrice?</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  CaritaEducatrice's crowdfunding consultancy is connected to its wider research and training work.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  The organisation maintains live-verified research into the actual rules and requirements of the platforms it teaches and works with, ensuring time-sensitive details are handled with precision.
                </p>
              </div>
            </div>

          </div>

          {/* Ready to Explore Crowdfunding? Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Ready to Explore Crowdfunding?</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Start with a free, no-obligation discovery call. Tell us about your project and fundraising goal, and CaritaEducatrice can help determine whether crowdfunding is an appropriate route and what support you may need.
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