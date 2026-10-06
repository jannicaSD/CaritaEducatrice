import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Target, 
  ShieldCheck, 
  FileText, 
  Globe, 
  ArrowRightLeft, 
  BookOpen 
} from "lucide-react";

export default function CaritaTrusteesBoardsSection() {
  const helpAreas = [
    {
      title: "Board Engagement in Fundraising",
      description: "Carita's fundraising work helps trustees and board members understand how they can become active participants in fundraising rather than leaving the responsibility entirely to staff.",
      icon: Users
    },
    {
      title: "Fundraising Strategy",
      description: "Develop an annual fundraising approach that gives the organisation and its board a clearer view of priorities and opportunities.",
      icon: Target
    },
    {
      title: "Compliance Awareness",
      description: "For organisations working across the UK and Pakistan, Carita addresses relevant considerations such as foreign-contribution rules and cross-border fund transfers where they apply.",
      icon: ShieldCheck
    },
    {
      title: "Funding Proposals",
      description: "Support trustees and teams in understanding what makes a credible, properly developed funding application.",
      icon: FileText
    },
    {
      title: "Crowdfunding",
      description: "Help boards understand platform selection, campaign development and relevant eligibility and verification considerations.",
      icon: Globe
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="trustees-boards">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Trustees & Boards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Give trustees the knowledge and tools to contribute meaningfully to fundraising and organisational development.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Trustees have an important role in helping organisations remain sustainable, accountable and effective. Carita works with trustees and boards who want to strengthen their understanding of fundraising, donor development, compliance and practical governance responsibilities.
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

          {/* UK & Pakistan Context & Verification Note */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-4">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">For UK & Pakistan Trustees</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's experience across the UK/Pakistan corridor means that its work can address practical issues faced by trustees working across these contexts. Where regulations, fees or deadlines may change, our approach is to flag the need for live verification rather than present potentially outdated information as current.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Engagement Options
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">Training or Direct Consultancy</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-4">
                  Boards can engage Carita through training designed to build internal capability or through consultancy focused on a specific organisational challenge.
                </p>
                <p className="text-xs sm:text-sm text-gray-200 italic">
                  * Consultancy is individually scoped after a free discovery call.
                </p>
              </div>
            </div>
          </div>

          {/* Begin With a Conversation Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Begin With a Conversation</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about your organisation, board and current challenge. Carita will help you determine whether training, consultancy or a combination of both would be most useful.
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