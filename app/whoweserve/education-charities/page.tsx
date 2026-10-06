import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Target, 
  Users, 
  HeartHandshake, 
  Globe, 
  ShieldCheck, 
  GraduationCap 
} from "lucide-react";

export default function CaritaSchoolsEducationSection() {
  const helpAreas = [
    {
      title: "Funding Proposals",
      description: "Develop stronger applications for projects and programmes that require external educational funding.",
      icon: FileText
    },
    {
      title: "Fundraising Strategy",
      description: "Build a development plan that the wider school or education community can actively support.",
      icon: Target
    },
    {
      title: "Community & Events Fundraising",
      description: "Explore practical fundraising approaches that can be seamlessly adapted to school and community environments.",
      icon: Users
    },
    {
      title: "Donor Development",
      description: "Understand how to build, develop and maintain long-term relationships with supporters and donors.",
      icon: HeartHandshake
    },
    {
      title: "Crowdfunding",
      description: "Where appropriate, develop a targeted crowdfunding campaign around a defined educational project.",
      icon: Globe
    },
    {
      title: "Team & Board Engagement",
      description: "Help governors, trustees, staff and volunteers understand their key role in supporting institutional fundraising.",
      icon: ShieldCheck
    }
  ];

  const targetAudiences = [
    "Schools",
    "Education charities",
    "PTAs",
    "“Friends of” groups",
    "Governors",
    "Education-focused community organisations"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="schools-education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Schools & Education Charities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Strengthen the funding and development work behind educational impact.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Schools, education charities, PTAs, governors and “Friends of” groups can all face the challenge of building a sustainable approach to fundraising. Carita helps education-focused organisations develop fundraising capability and communicate projects effectively.
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

          {/* Practical Adaptable Support & Who Can Benefit Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Practical Support */}
            <div className="lg:col-span-6 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#0F5C4A]/10 px-3 py-1 rounded-lg text-[#0F5C4A]">
                  Methodology
                </span>
                <h3 className="text-xl font-bold text-[#1E2A38] mt-4 mb-3">Practical, Adaptable Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Carita's training is designed around practical application. Courses pair core principles with templates, checklists and worked examples so participants can apply what they learn directly to their own organisation.
                </p>
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="lg:col-span-6 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#0F5C4A]" />
                  Who Can Benefit
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {targetAudiences.map((audience, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Start a Conversation Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Start a Conversation</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If your school or education organisation has a project that needs funding, book a free discovery call. Carita can help you determine whether training, consultancy or both would be the right fit.
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