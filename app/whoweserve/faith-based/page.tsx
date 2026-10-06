import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Target, 
  FileText, 
  Users, 
  HeartHandshake, 
  Globe, 
  Church, 
  ShieldCheck 
} from "lucide-react";

export default function CaritaFaithBasedSection() {
  const helpAreas = [
    {
      title: "Fundraising Strategy",
      description: "Build a practical fundraising plan around your organisation's core priorities and community impact.",
      icon: Target
    },
    {
      title: "Grant Writing",
      description: "Develop professional funding proposals for appropriate projects, community programmes and initiatives.",
      icon: FileText
    },
    {
      title: "Community Fundraising",
      description: "Explore events and community-based fundraising approaches that can be sensitively adapted to your organisation.",
      icon: Users
    },
    {
      title: "Donor Development",
      description: "Build stronger, lasting relationships with individual supporters, congregations and donors with integrity.",
      icon: HeartHandshake
    },
    {
      title: "Crowdfunding",
      description: "Assess whether crowdfunding is appropriate for a particular project and develop the campaign where suitable.",
      icon: Globe
    },
    {
      title: "Team Development",
      description: "Help trustees, staff and volunteers understand their respective roles in ethical fundraising.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="faith-based-organisations">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Faith-Based Organisations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Fundraise with purpose, structure and integrity.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Faith-based organisations often combine community service, charitable activity, buildings, missions and ministry work with a need for sustainable fundraising. Carita provides training and consultancy that helps develop practical capability while maintaining absolute integrity in donor relationships.
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

          {/* Practical Approach & For Churches, Parishes & Ministries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Practical Approach */}
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F5C4A]/10 px-3 py-1 rounded-lg text-[#0F5C4A]">
                  Methodology
                </span>
                <h3 className="text-xl font-bold text-[#1E2A38] mt-4 mb-3">A Practical Approach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's wider fundraising training covers areas including individual giving, major gifts, events, corporate partnerships, grassroots fundraising, stewardship and evaluation. The aim is to give organisations practical approaches they can adapt rather than generic fundraising slogans.
                </p>
              </div>
            </div>

            {/* For Churches, Parishes & Ministries */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A227] mb-4">
                  <Church className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-3">For Churches, Parishes & Ministries</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Carita's framework specifically supports churches, parishes and ministries fundraising for buildings, missions and community outreach initiatives with complete transparency and integrity.
                </p>
              </div>
            </div>

          </div>

          {/* Training or Consultancy Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 mb-16 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Training or Consultancy</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose <strong className="text-[#1E2A38]">training</strong> when your organisation wants to build internal long-term capability. Choose <strong className="text-[#1E2A38]">consultancy</strong> when you have a specific live fundraising or funding challenge that requires direct, expert support.
            </p>
          </div>

          {/* Start With a Conversation Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Conversation</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a free, no-obligation discovery call and explain what your organisation is trying to achieve. Carita will help identify the most appropriate way forward.
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