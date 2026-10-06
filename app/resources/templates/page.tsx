import Link from "next/link";
import { 
  FileSpreadsheet, 
  DollarSign, 
  Users, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function CaritaTemplates() {
  const templateCategories = [
    {
      title: "Funding & Grant Writing",
      icon: <FileSpreadsheet className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Project concept structures",
        "Funding proposal frameworks",
        "Budget and budget-narrative structures",
        "Funder information frameworks"
      ]
    },
    {
      title: "Fundraising",
      icon: <DollarSign className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Fundraising planning resources",
        "Donor development structures",
        "Campaign planning resources",
        "Event planning frameworks"
      ]
    },
    {
      title: "Crowdfunding",
      icon: <Users className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Campaign planning structures",
        "Campaign briefing resources",
        "Storytelling frameworks",
        "Application preparation resources"
      ]
    },
    {
      title: "Advocacy & Human Rights",
      icon: <Scale className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Advocacy planning structures",
        "Documentation frameworks",
        "Proposal & reporting structures",
        "Communication preparation resources"
      ]
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Practical Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Start With a Structure. Build It Around Your Work.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Creating a strong proposal, fundraising campaign, or advocacy communication is easier when you begin with a clear framework. CaritaEducatrice Templates provide practical starting points tailored for professional organisations.
          </p>
        </div>

        {/* Template Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {templateCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E2A38]">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Adapt, Don't Copy Warning Box */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden mb-16">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
              <AlertCircle className="w-4 h-4 text-[#C9A227]" />
              Adapt, Don&apos;t Copy
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Designed as Starting Points
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
              CaritaEducatrice templates are intended as practical starting points rather than universal answers. Your organisation, funder, audience, legal requirements, and project circumstances may require adjustments to the structure.
            </p>
            <p className="text-white/80 text-xs sm:text-sm italic">
              Always review relevant current requirements before submitting an application or formal document.
            </p>
          </div>
        </div>

        {/* Browse Templates CTA Banner */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">
              Ready to streamline your workflow?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our collection of adaptable frameworks and jumpstart your next project.
            </p>
          </div>
          <div>
            <Link 
              href="/templates" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              Explore Templates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}