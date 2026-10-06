import Link from "next/link";
import { 
  FileText, 
  Coins, 
  Megaphone, 
  Globe2, 
  ShieldCheck, 
  Wrench, 
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function ResourcesHub() {
  const resourceCategories = [
    {
      title: "Grant Writing Guides",
      description: "Practical guidance for developing stronger funding proposals.",
      link: "/resources/grant-writing",
      icon: FileText,
      badge: "Guides",
    },
    {
      title: "Fundraising Resources",
      description: "Tools and ideas for developing sustainable fundraising programmes[cite: 1].",
      link: "/resources/fundraising",
      icon: Coins,
      badge: "Strategy",
    },
    {
      title: "Crowdfunding Guides",
      description: "Understand campaign planning, platforms and donor engagement[cite: 1].",
      link: "/resources/crowdfunding",
      icon: Megaphone,
      badge: "Digital Campaigns",
    },
    {
      title: "UN & Advocacy Resources",
      description: "Resources for organisations engaging international human-rights mechanisms[cite: 1].",
      link: "/resources/un-advocacy",
      icon: Globe2,
      badge: "International",
    },
    {
      title: "UK/Pakistan Compliance Resources",
      description: "Practical information for organisations working across the UK/Pakistan funding environment[cite: 1].",
      link: "/resources/uk-pakistan-compliance",
      icon: ShieldCheck,
      badge: "Cross-Border",
    },
    {
      title: "Templates & Checklists",
      description: "Practical tools designed to support day-to-day organisational work[cite: 1].",
      link: "/resources/templates",
      icon: Wrench,
      badge: "Toolbox",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <BookOpen className="w-4 h-4 text-[#0F5C4A]" />
            Knowledge Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            CaritaEducatrice Resources
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore expert guides, practical toolkits, and cross-border compliance resources built to support your organization every day[cite: 1].
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xs transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-[#0F5C4A] border border-gray-200">
                      {category.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#0F5C4A] transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5C4A] hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Guides</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Looking for full documentation and toolkits?
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              Access our complete library of practical tools, checklists, and templates designed for immediate organizational application.
            </p>
            <div className="pt-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b59020] text-[#1E2A38] font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all duration-200 hover:scale-105"
              >
                <span>Explore the Resource Centre</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}