import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Lightbulb, 
  FileText, 
  Target, 
  Users, 
  Globe, 
  Wrench, 
  HeartHandshake 
} from "lucide-react";

export default function CaritaCommunityGroupsSection() {
  const helpAreas = [
    {
      title: "Develop Your Funding Idea",
      description: "Turn a community need into a clearer project concept and case for support.",
      icon: Lightbulb
    },
    {
      title: "Grant Writing",
      description: "Learn how to communicate your project effectively through a funding proposal or work alongside Carita on a live application.",
      icon: FileText
    },
    {
      title: "Fundraising",
      description: "Develop practical fundraising approaches appropriate to your organisation and available capacity.",
      icon: Target
    },
    {
      title: "Community Fundraising",
      description: "Our wider training includes community and special-events fundraising, providing practical approaches that community organisations can adapt.",
      icon: Users
    },
    {
      title: "Crowdfunding",
      description: "Where appropriate, Carita can help assess crowdfunding as a funding route and support campaign development and platform registration.",
      icon: Globe
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="community-groups">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Community Groups
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Turn community ideas into practical, fundable projects.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Community and grassroots organisations often understand the needs around them better than anyone else. Carita provides training and consultancy designed to help turn that knowledge into clear projects, finding appropriate funding and communicating the case effectively.
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

          {/* Practical Support & For Grassroots Organisations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">Practical Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's approach combines principles with practical tools. Rather than leaving you with theory alone, training and consultancy include adaptable templates, checklists and worked examples.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Grassroots Focus
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">For Grassroots Organisations</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  You do not need to have a large fundraising department to begin. Carita can work with organisations that have a project they believe their community needs but do not yet have an in-house grant writer or development officer.
                </p>
              </div>
            </div>
          </div>

          {/* Start With Your Idea Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With Your Idea</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If you have a project but are unsure how to fund it, book a free discovery call. Explain what you are trying to achieve, and Carita can help you identify the most appropriate next step.
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