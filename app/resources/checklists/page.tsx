import Link from "next/link";
import { 
  CheckSquare, 
  FileText, 
  DollarSign, 
  Users, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";

export default function CaritaChecklists() {
  const checklistCategories = [
    {
      title: "Grant & Proposal Preparation",
      icon: <FileText className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Project information",
        "Objectives and outcomes",
        "Funder requirements",
        "Budget information",
        "Supporting documents",
        "Final review"
      ]
    },
    {
      title: "Fundraising",
      icon: <DollarSign className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Fundraising planning",
        "Donor information",
        "Campaign preparation",
        "Stewardship and follow-up",
        "Evaluation"
      ]
    },
    {
      title: "Crowdfunding",
      icon: <Users className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Platform eligibility",
        "Registration information",
        "Campaign materials",
        "Storytelling and visuals",
        "Campaign launch preparation",
        "Donor follow-up"
      ]
    },
    {
      title: "Human-Rights Advocacy",
      icon: <Scale className="w-5 h-5 text-[#0F5C4A]" />,
      items: [
        "Evidence and documentation",
        "Relevant actors",
        "Dates and locations",
        "Supporting information",
        "Required format",
        "Submission considerations"
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
            Don&apos;t Leave Important Details to the Last Minute
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Good preparation can make the difference between a document that is simply completed and one that is ready for careful review. CaritaEducatrice Checklists provide structured ways to review key elements of your work.
          </p>
        </div>

        {/* Checklists Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {checklistCategories.map((category, index) => (
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

        {/* Practical Final Review Callout Box */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden mb-16">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
              <CheckSquare className="w-4 h-4 text-[#C9A227]" />
              Practical Review
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              A Practical Final Review
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Use a checklist before submitting an application, launching a campaign, or sending an advocacy communication. It can help you identify missing information, inconsistencies, or areas requiring further verification.
            </p>
          </div>
        </div>

        {/* Browse Checklists CTA Banner */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">
              Ready to ensure your projects are fully prepared?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our complete collection of structured review checklists.
            </p>
          </div>
          <div>
            <Link 
              href="/checklists" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              Browse Checklists
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}