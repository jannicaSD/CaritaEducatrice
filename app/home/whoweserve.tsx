import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Scale, 
  GraduationCap, 
  Church, 
  BookOpenCheck, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

export default function WhoWeServe() {
  const audiences = [
    {
      title: "NGOs & Charities",
      description: "From first fundraising plans to established multi-channel programmes.",
      icon: Building2,
      badge: "Core Audience",
    },
    {
      title: "Trustees & Boards",
      description: "For organisations that need stronger fundraising, governance and compliance understanding[cite: 1].",
      icon: ShieldCheck,
      badge: "Governance",
    },
    {
      title: "Community & Grassroots Organisations",
      description: "For groups with important community projects but limited access to specialist fundraising expertise[cite: 1].",
      icon: Users,
      badge: "Grassroots",
    },
    {
      title: "Advocacy & Human-Rights Organisations",
      description: "For organisations engaging funders, UN mechanisms and international advocacy processes[cite: 1].",
      icon: Scale,
      badge: "International",
    },
    {
      title: "Schools & Education Charities",
      description: "For schools, PTAs, \"Friends of\" groups and education-focused organisations developing sustainable fundraising strategies[cite: 1].",
      icon: GraduationCap,
      badge: "Education",
    },
    {
      title: "Faith-Based Organisations",
      description: "For churches, parishes and ministries fundraising for buildings, missions and community work[cite: 1].",
      icon: Church,
      badge: "Faith & Ministry",
    },
    {
      title: "Scholars & Researchers",
      description: "For academics seeking public, private or institutional funding[cite: 1].",
      icon: BookOpenCheck,
      badge: "Academic",
    },
    {
      title: "Social Entrepreneurs",
      description: "For projects and earned-income ideas seeking matching funds or start-up capital[cite: 1].",
      icon: Lightbulb,
      badge: "Innovation",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Audience Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Built for Organisations Making a Difference
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Tailored professional training and consultancy designed for the practical realities of changemakers, leaders, and institutions[cite: 1].
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-2xs transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#0F5C4A] border border-gray-200">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1E2A38] mb-2.5 group-hover:text-[#0F5C4A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Subdued Footer Link / Indicator */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0F5C4A] group-hover:text-[#C9A227] transition-colors">
                  <span>Explore pathways</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}