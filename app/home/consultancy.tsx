import Link from "next/link";
import { 
  FileEdit, 
  Target, 
  Megaphone, 
  Scale, 
  Building, 
  MessageSquareCode, 
  GraduationCap, 
  ArrowRight,
  PhoneCall
} from "lucide-react";

export default function ConsultancySection() {
  const services = [
    {
      title: "Grant Writing & Funding Coaching",
      description: "From the initial idea to a funder-ready application, including concept development, budgets, narrative, submission and follow-up.",
      icon: FileEdit,
      tag: "Core Service",
    },
    {
      title: "Fundraising Strategy & Team Building",
      description: "Develop fundraising plans, engage boards and volunteers and establish systems for tracking donor activity and organisational impact[cite: 1].",
      icon: Target,
      tag: "Strategy",
    },
    {
      title: "Crowdfunding Campaign Design",
      description: "Develop campaign strategy, storytelling, platform selection, registration and cross-border compliance considerations[cite: 1].",
      icon: Megaphone,
      tag: "Platform Support",
    },
    {
      title: "UN & Human-Rights Advocacy Writing",
      description: "Draft or review funding proposals, reports, urgent appeals and communications for relevant UN mechanisms[cite: 1].",
      icon: Scale,
      tag: "International Advocacy",
    },
    {
      title: "UN Accreditation Support",
      description: "Support organisations preparing ECOSOC consultative-status applications, including document preparation and submission planning[cite: 1].",
      icon: Building,
      tag: "Accreditation",
    },
    {
      title: "Bespoke Advocacy & Campaign Design",
      description: "Develop a tailored advocacy and outreach strategy around a specific case, issue or community need[cite: 1].",
      icon: MessageSquareCode,
      tag: "Tailored Support",
    },
    {
      title: "Grant Writing for Scholars & Researchers",
      description: "Support researchers and academics in identifying suitable funders and developing strong funding proposals[cite: 1].",
      icon: GraduationCap,
      tag: "Academic",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Direct Practitioner Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Need Help With a Live Funding or Advocacy Challenge?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Courses build your team's capacity. Consultancy puts CaritaEducatrice alongside your team when you need practical support right now[cite: 1].
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#0F5C4A] border border-gray-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#0F5C4A] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Link */}
                <div className="pt-4 border-t border-gray-200/60">
                  <Link
                    href="/consultancy"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5C4A] hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Discovery Call Card CTA Box */}
          <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-md">
                <PhoneCall className="w-6 h-6 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Have a specific challenge?
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Book a free discovery call and walk away with a clear picture of how CaritaEducatrice can support your organisation right now[cite: 1].
              </p>
            </div>

            <div className="pt-4 border-t border-white/15">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}