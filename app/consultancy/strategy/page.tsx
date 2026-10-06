import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Target, 
  Users, 
  HeartHandshake, 
  Database, 
  LineChart, 
  Megaphone, 
  Building2,
  Compass
} from "lucide-react";

export default function CaritaFundraisingStrategyCoaching() {
  const helpAreas = [
    {
      title: "Annual Fundraising Planning",
      description: "Develop a practical fundraising plan around your organisation's priorities, opportunities and available capacity.",
      icon: Target
    },
    {
      title: "Board & Volunteer Engagement",
      description: "Help trustees and volunteers understand their role in fundraising and become active participants in developing relationships and opportunities.",
      icon: Users
    },
    {
      title: "Donor Development",
      description: "Build a more structured approach to developing and maintaining relationships with supporters and donors.",
      icon: HeartHandshake
    },
    {
      title: "Fundraising Systems",
      description: "CaritaEducatrice can help establish or strengthen the donor database and supporting processes needed to manage fundraising activity effectively.",
      icon: Database
    },
    {
      title: "Impact & Results",
      description: "Develop an impact dashboard that helps demonstrate what your fundraising is achieving.",
      icon: LineChart
    },
    {
      title: "Multi-Channel Fundraising",
      description: "Where appropriate, fundraising strategy can bring together different approaches including grants, individual donors, corporate relationships, events and crowdfunding.",
      icon: Megaphone
    }
  ];

  const processSteps = [
    { number: "01", title: "Understand Your Organisation", text: "We examine your current position, priorities and fundraising challenge." },
    { number: "02", title: "Identify Opportunities", text: "We map realistic fundraising routes and areas for development." },
    { number: "03", title: "Build the Plan", text: "We develop a practical annual fundraising strategy." },
    { number: "04", title: "Engage the Team", text: "We help bring trustees, staff and volunteers into the fundraising process." },
    { number: "05", title: "Strengthen Your Systems", text: "We work on donor information, tracking and impact measurement." },
    { number: "06", title: "Review & Develop", text: "The strategy can be refined as your organisation learns what works." }
  ];

  const targetAudiences = [
    "NGOs and charities",
    "Trustees and boards",
    "Community organisations",
    "Faith-based organisations",
    "Schools and education charities",
    "Organisations developing their first structured fundraising programme",
    "Organisations looking to strengthen an existing fundraising approach"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="fundraising-strategy-coaching">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Fundraising Strategy & Team Building
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Build a fundraising approach your organisation can actually use.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            CaritaEducatrice helps organisations move from individual fundraising activities to a more deliberate and organised fundraising approach, focusing on annual planning, team engagement, and systems.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* Introductory Approach Note */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 sm:p-8 mb-16 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] flex-shrink-0 mt-1">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Our Tailored Approach</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                CaritaEducatrice does not begin with a generic fundraising package. We begin by understanding your organisation, your current fundraising position and the challenge you are trying to solve. From there, we identify the areas where strategic support will make the most sense.
              </p>
            </div>
          </div>

          {/* What We Can Help You Build Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              What We Can Help You Build
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

          {/* What The Engagement Can Include Process Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center">
              What The Engagement Can Include
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

          {/* Who This Is For & Build Capacity, Not Dependency Grid */}
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

            {/* Build Capacity, Not Dependency */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Our Commitment
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">Build Capacity, Not Dependency</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  The purpose of consultancy is not simply to produce a document and leave.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Where appropriate, CaritaEducatrice works alongside your team so that the organisation develops practical tools and capability that can continue to be used after the engagement.
                </p>
              </div>
            </div>

          </div>

          {/* Start With a Free Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Free Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us where your fundraising currently stands and where you want it to go. CaritaEducatrice will help you understand whether consultancy, training, or a combination of both is the right next step.
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