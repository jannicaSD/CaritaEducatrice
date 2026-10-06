import Link from "next/link";
import { 
  FileText, 
  CalendarDays, 
  Megaphone, 
  Globe2, 
  Scale, 
  BookMarked, 
  ArrowRight 
} from "lucide-react";

export default function CourseCategories() {
  const categories = [
    {
      title: "Grant Writing & Fundraising",
      description: "Build practical skills in fundraising strategy, grant writing, donor development, major gifts, corporate partnerships and fundraising management.",
      link: "/courses/grant-writing",
      icon: FileText,
      badge: "Flagship Certificate",
    },
    {
      title: "Community & Special Events",
      description: "Learn how to plan, develop and manage community fundraising events as a sustainable source of revenue.",
      link: "/courses/events-fundraising",
      icon: CalendarDays,
      badge: "53 Sessions",
    },
    {
      title: "Crowdfunding",
      description: "Understand crowdfunding platforms, campaign design, donor engagement, registration requirements and cross-border considerations.",
      link: "/courses/crowdfunding",
      icon: Megaphone,
      badge: "New in 2026",
    },
    {
      title: "UN Engagement & Accreditation",
      description: "Develop practical knowledge of UN treaty bodies, Universal Periodic Review processes and ECOSOC consultative status.",
      link: "/courses/un-engagement",
      icon: Globe2,
      badge: "International Advocacy",
    },
    {
      title: "Human-Rights Advocacy & Writing",
      description: "Develop proposals, reports, urgent appeals and other documentation for international human-rights engagement.",
      link: "/courses/human-rights",
      icon: Scale,
      badge: "Specialised Training",
    },
    {
      title: "Pakistan & Social Justice",
      description: "Understand the legal, social and advocacy context surrounding Pakistan's religious minorities, poverty and persecution.",
      link: "/courses/pakistan-social-justice",
      icon: BookMarked,
      badge: "Cross-Border Insight",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Curriculum Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Explore Our Training
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Sixteen professional courses built from real sources, structured with templates, and designed for immediate organizational impact.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#0F5C4A] border border-gray-200 shadow-2xs">
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
                <div className="pt-4 border-t border-gray-200/60">
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5C4A] hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore {category.title.split(" ")[0]} Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}