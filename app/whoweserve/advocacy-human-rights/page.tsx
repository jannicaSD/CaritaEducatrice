import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  BookOpen, 
  AlertCircle, 
  Send, 
  Globe2, 
  Megaphone, 
  ShieldCheck 
} from "lucide-react";

export default function CaritaAdvocacyHumanRightsSection() {
  const helpAreas = [
    {
      title: "Human-Rights Funding Proposals",
      description: "Develop or review proposals intended for international human-rights funders with professional precision.",
      icon: FileText
    },
    {
      title: "Documentation Reports",
      description: "Support the preparation of reports that present relevant information clearly, rigorously and responsibly.",
      icon: BookOpen
    },
    {
      title: "Urgent Appeals & Allegation Letters",
      description: "Carita works with organisations preparing urgent appeals or allegation letters for relevant UN Special Procedures.",
      icon: AlertCircle
    },
    {
      title: "Treaty-Body Communications",
      description: "Support organisations preparing individual communications to UN treaty bodies effectively.",
      icon: Send
    },
    {
      title: "UN Accreditation",
      description: "Help organisations prepare for an ECOSOC consultative-status application, including document preparation and application support.",
      icon: Globe2
    },
    {
      title: "Advocacy Campaigns",
      description: "For a specific live situation, Carita can design a bespoke advocacy and outreach campaign rather than adapting a generic template.",
      icon: Megaphone
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="advocacy-human-rights">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Advocacy & Human-Rights Organisations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Build stronger funding, documentation and international advocacy work.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Advocacy and human-rights organisations often need to communicate complex and sensitive issues to funders, international organisations and UN mechanisms. Carita provides specialist training and consultancy around human-rights funding proposals, documentation, advocacy writing and UN engagement.
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

          {/* Evidence & Responsible Attribution & Training & Consultancy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">Evidence & Responsible Attribution</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's human-rights work follows a clear evidentiary discipline. Sensitive issues are handled carefully, and harm is attributed to specific, named and documented actors rather than to an entire country, community or religion.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Engagement Formats
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">Training & Consultancy</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Organisations can choose between building internal capability through Carita's courses or working directly with Carita on a live proposal, report, advocacy campaign or UN submission.
                </p>
              </div>
            </div>
          </div>

          {/* Start With a Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start With a Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about the issue, organisation or submission you are working on. Carita can assess where it can contribute and recommend an appropriate scope of support.
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