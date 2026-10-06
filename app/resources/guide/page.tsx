import Link from "next/link";
import { 
  FileText, 
  DollarSign, 
  Users, 
  Globe2, 
  Scale, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function CaritaGuides() {
  const guideCategories = [
    {
      icon: <FileText className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Grant Writing",
      desc: "Understand the essential elements of a funding proposal and how to develop your project information into a funder-ready application."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Fundraising",
      desc: "Explore approaches to donor development, fundraising planning, events, corporate partnerships, individual giving, and other sustainable activities."
    },
    {
      icon: <Users className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Crowdfunding",
      desc: "Understand crowdfunding fundamentals, campaign planning, platform considerations, and relevant compliance issues across regions."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#0F5C4A]" />,
      title: "UN Engagement",
      desc: "Learn about treaty bodies, Universal Periodic Review, ECOSOC consultative status, and other areas covered by our specialized training."
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Human-Rights Documentation",
      desc: "Understand different forms of proposals, reports, urgent appeals, allegation letters, and communications to international mechanisms."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Practical Resources
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Practical Guidance for Real-World Organisational Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            CaritaEducatrice Guides are designed to turn complex subjects into clear, practical steps—complementing our courses and consultancy by helping organisations work through specific tasks in a structured way.
          </p>
        </div>

        {/* Guides Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guideCategories.map((guide, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/85 rounded-3xl p-8 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center mb-6 group-hover:bg-[#0F5C4A] transition-colors">
                  <div className="text-[#0F5C4A] group-hover:text-white transition-colors">
                    {guide.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Built for Application Card / Final Grid Slot */}
          <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                Built for Application
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Actionable Insights
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                The purpose of a CaritaEducatrice Guide is not simply to provide information, but to help you understand the subject, identify relevant considerations, and apply them directly to your work.
              </p>
            </div>
          </div>
        </div>

        {/* Browse Guides Banner CTA */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">
              Ready to explore our comprehensive reference materials?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Access structured guides built to support your organisation&apos;s ongoing initiatives.
            </p>
          </div>
          <div>
            <Link 
              href="/guides" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              Browse Guides
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}