import Link from "next/link";
import { 
  Building2, 
  Globe2, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export default function CaritaDirectory() {
  const coveredOrganisations = [
    {
      name: "National Endowment for Democracy (NED)",
      category: "Funding & Support",
      desc: "Grants supporting democratic institutions, human rights, and independent media worldwide."
    },
    {
      name: "European Instrument for Democracy and Human Rights (EIDHR)",
      category: "Institutional Funder",
      desc: "EU mechanism supporting human rights and democracy in non-EU countries."
    },
    {
      name: "Open Society Human Rights Initiative",
      category: "Grantmaking",
      desc: "Philanthropic support for human rights defenders, justice, and accountability."
    },
    {
      name: "Front Line Defenders",
      category: "Advocacy & Protection",
      desc: "Protection and support for human rights defenders at risk globally."
    },
    {
      name: "Christian Solidarity Worldwide (CSW)",
      category: "FoRB Advocacy",
      desc: "Specialist human rights organisation advocating for Freedom of Religion or Belief."
    },
    {
      name: "Minority Rights Group",
      category: "Rights & Representation",
      desc: "Securing the rights of ethnic, religious, and linguistic minorities worldwide."
    },
    {
      name: "United States Commission on International Religious Freedom (USCIRF)",
      category: "Advisory & Monitoring",
      desc: "Independent bipartisan U.S. federal government commission monitoring FoRB abroad."
    }
  ];

  const complementaryTraining = [
    "Human-rights advocacy",
    "Grant writing",
    "UN engagement",
    "Freedom of Religion or Belief",
    "International advocacy",
    "Proposal and report writing"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Working Directory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Human-Rights & Freedom of Religion or Belief Directory
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            CaritaEducatrice maintains a working directory of organisations relevant to human-rights advocacy and Freedom of Religion or Belief (FoRB) to help you identify potential funders and advocacy bodies.
          </p>
        </div>

        {/* Organisations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coveredOrganisations.map((org, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/85 rounded-3xl p-8 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] group-hover:bg-[#0F5C4A] group-hover:text-white transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F5C4A] bg-[#0F5C4A]/10 px-2.5 py-1 rounded-full">
                    {org.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38] mb-2 group-hover:text-[#0F5C4A] transition-colors">
                  {org.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Complementary Training Card */}
          <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Globe2 className="w-4 h-4 text-[#C9A227]" />
                Practical Research
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Complements Our Training
              </h3>
              <p className="text-white/90 text-xs sm:text-sm mb-4">
                This directory directly supports our specialised focus areas:
              </p>
              <ul className="space-y-2">
                {complementaryTraining.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Use as Starting Point Warning Box */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-2">
              Use the Directory as a Starting Point
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              This directory is a research resource, not a guarantee of funding, eligibility, or engagement. Funding priorities, criteria, and procedures can change. Always verify relevant information directly with the organisation concerned before making an application.
            </p>
          </div>
        </div>

        {/* Explore Directory CTA Banner */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">
              Ready to explore our full directory of verified organisations?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Begin your research into human-rights and FoRB funding and advocacy networks.
            </p>
          </div>
          <div>
            <Link 
              href="/directory" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              Explore Human-Rights Directory
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}