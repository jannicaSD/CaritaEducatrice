import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Target, 
  FileText, 
  Search, 
  Users, 
  CheckSquare, 
  Send, 
  Building2 
} from "lucide-react";

export default function CaritaGrantWritingCoaching() {
  const helpAreas = [
    {
      title: "Develop the Funding Concept",
      description: "We help clarify the project, its purpose, the need it addresses and the case for support before you begin writing.",
      icon: Target
    },
    {
      title: "Build the Application",
      description: "CaritaEducatrice can work with you on the key components of a funder-ready application, including the project concept, narrative, budget and supporting information.",
      icon: FileText
    },
    {
      title: "Find the Right Funding Fit",
      description: "Rather than applying indiscriminately, we help identify funders and opportunities that genuinely fit your organisation and project.",
      icon: Search
    },
    {
      title: "Coach or Co-Write",
      description: "Choose whether we coach your team to develop internal capacity or draft alongside you as a genuine consultancy partner.",
      icon: Users
    },
    {
      title: "Review & Polish",
      description: "Before submission, documents go through a structured review and sourcing check so that the application is clear, coherent and appropriate.",
      icon: CheckSquare
    },
    {
      title: "Reporting & Follow-Through",
      description: "Where required, we support reporting obligations and the follow-through needed to maintain a constructive funder relationship.",
      icon: Send
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery Call", text: "We listen to your organisation, project and funding challenge." },
    { number: "02", title: "Fit Mapping", text: "We identify the funding opportunities that genuinely fit your situation." },
    { number: "03", title: "Build the Foundation", text: "Together we develop the project summary, budget and central case for support." },
    { number: "04", title: "Coach or Co-Write", text: "You choose whether CaritaEducatrice coaches your team or works alongside you." },
    { number: "05", title: "Review & Polish", text: "The application receives a structured quality and sourcing review." },
    { number: "06", title: "Submission & Follow-Through", text: "We help you make a strong submission and support reporting afterwards." }
  ];

  const targetAudiences = [
    "NGOs and charities",
    "Community and grassroots organisations",
    "Trustees and boards",
    "Advocacy organisations",
    "Faith-based organisations",
    "Schools and education charities",
    "Social enterprises seeking appropriate funding"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="grant-writing-coaching">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Grant Writing & Funding Coaching
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Turn a strong idea into a funder-ready application.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            CaritaEducatrice works alongside organisations to turn a raw project idea into a clear, credible and properly developed funding application. Our consultancy supports you through the full journey from concept to follow-through.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* How We Can Help Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              How We Can Help
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

          {/* Consultancy Process Timeline / Grid */}
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

          {/* Who This Is For & Why Work With Us Grid */}
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
                  Our Approach
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">Why Work With CaritaEducatrice?</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  CaritaEducatrice consultancy follows the same discipline as its training: practical work grounded in named sources, tested approaches, and adaptable tools.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  The objective is not simply to produce one application. Where appropriate, the engagement should also leave your organisation with stronger internal capability for the next opportunity.
                </p>
              </div>
            </div>

          </div>

          {/* Start With a Conversation Callout & Buttons */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Conversation</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Every consultancy engagement begins with a free, no-obligation discovery call. Tell us about your organisation, your project, and where you are currently stuck. We will give you an honest view of where CaritaEducatrice can help and what level of support you actually need.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/book-consultation" 
                className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
              >
                Book a Free Consultation
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}