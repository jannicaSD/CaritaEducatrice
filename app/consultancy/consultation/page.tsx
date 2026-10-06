import Link from "next/link";
import { 
  Calendar, 
  FileText, 
  TrendingUp, 
  Users, 
  Scale, 
  Award, 
  Megaphone, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Mail,
  Briefcase
} from "lucide-react";

export default function CaritaBookConsultation() {
  const consultancyAreas = [
    {
      title: "Grant Writing & Funding Coaching",
      icon: <FileText className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Move from an initial project idea towards a structured, funder-ready application.",
      points: [
        "Developing the concept & structuring proposal",
        "Building the budget & strengthening project story",
        "Preparing for submission & funder follow-up",
        "Developing longer-term funder relationships"
      ],
      link: "/consultancy/grant-writing"
    },
    {
      title: "Fundraising Strategy & Team Building",
      icon: <TrendingUp className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Develop a more structured approach to fundraising and organisational growth.",
      points: [
        "Annual fundraising planning",
        "Board and volunteer engagement",
        "Donor database development & strategy",
        "Impact tracking and dashboards"
      ],
      link: "/consultancy/fundraising-strategy"
    },
    {
      title: "Crowdfunding Campaign Design",
      icon: <Users className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Develop a structured crowdfunding campaign and navigate platform requirements.",
      points: [
        "Platform considerations & registration",
        "Campaign planning & brief development",
        "Ethical storytelling & visuals",
        "UK/Pakistan cross-border considerations"
      ],
      link: "/consultancy/crowdfunding"
    },
    {
      title: "UN & Human-Rights Advocacy Writing",
      icon: <Scale className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Receive support with professional advocacy documentation and international communications.",
      points: [
        "Funding proposals & documentation reports",
        "Urgent appeals & allegation letters",
        "Treaty-body communications",
        "Evidentiary and formatting requirements"
      ],
      link: "/consultancy/human-rights-advocacy"
    },
    {
      title: "UN Accreditation Support",
      icon: <Award className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Receive specialist support when preparing an application for ECOSOC Consultative Status.",
      points: [
        "Document review & category selection",
        "Application preparation & submission support",
        "Understanding the application process",
        "Preparing around the annual June 1 deadline"
      ],
      link: "/consultancy/un-accreditation"
    },
    {
      title: "Grant Writing for Scholars & Researchers",
      icon: <BookOpen className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Researchers and academics receive tailored support for funding and proposals.",
      points: [
        "Identifying relevant academic funders",
        "Developing a clear funding concept",
        "Preparing a one-page project summary",
        "Strengthening research proposal narratives"
      ],
      link: "/consultancy/academic-grant-writing"
    }
  ];

  const workflowSteps = [
    { num: "01", title: "Discovery Call", desc: "We begin with a conversation about your organisation, project, objectives, and current challenge." },
    { num: "02", title: "Fit Mapping", desc: "We identify the type of support that may be appropriate and clarify what you are trying to achieve." },
    { num: "03", title: "Build the Foundation", desc: "We establish the information, structure, strategy, or documentation needed to move the work forward." },
    { num: "04", title: "Coach or Co-Write", desc: "Depending on engagement, CaritaEducatrice provides coaching, co-writing, review, or practical support." },
    { num: "05", title: "Review & Polish", desc: "We review the work, identify areas requiring improvement, and refine final materials." },
    { num: "06", title: "Submit", desc: "Where relevant, we support you through the preparation and final submission stage." },
    { num: "07", title: "Report & Follow Through", desc: "Support can continue through reporting, follow-up, and development of the next project stage." }
  ];

  const discoveryTopics = [
    "Your organisation or project",
    "What you are currently working on",
    "Your core objectives",
    "The challenge you are facing",
    "Funding or advocacy requirements",
    "The type of support you are considering",
    "The next practical step"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="book-consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Advisory Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Let&apos;s Talk About What You Need
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Have a funding challenge, fundraising goal, crowdfunding campaign, advocacy requirement, or research project that needs support? Book a free discovery call with CaritaEducatrice to discuss your goals.
          </p>
          <div>
            <Link 
              href="/schedule-call" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-base"
            >
              Book Your Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Consultancy Areas Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-3">
              What Can We Help You With?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              CaritaEducatrice provides tailored consultancy across several key areas of professional practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200/85 rounded-3xl p-8 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center mb-6">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1E2A38] mb-3">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {area.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    {area.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={area.link} 
                  className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold text-sm hover:underline pt-4 border-t border-gray-100"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}

            {/* Bespoke Campaign Special Card */}
            <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden lg:col-span-3">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <Megaphone className="w-4 h-4 text-[#C9A227]" />
                    Custom Support
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Bespoke Advocacy & Campaign Design
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    Not every advocacy challenge fits a standard programme. CaritaEducatrice provides tailored support for specific live situations, helping you develop advocacy or outreach campaigns around your unique circumstances, objectives, and audience.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-lg-end">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-6 py-3.5 rounded-2xl shadow-md transition-all text-sm whitespace-nowrap"
                  >
                    Discuss Your Campaign
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* How the Consultation Process Works */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-3">
              How the Consultation Process Works
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              A structured 7-stage pathway from initial discovery to successful submission and follow-through.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, sIdx) => (
              <div key={sIdx} className="bg-[#FAF7F2] border border-gray-200/60 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#0F5C4A] bg-[#0F5C4A]/10 px-2.5 py-1 rounded-full">
                      Step {step.num}
                    </span>
                  </div>
                  <h4 className="font-bold text-[#1E2A38] text-base mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens on Discovery Call & Training vs Consultancy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: What Happens on Discovery Call */}
          <div className="lg:col-span-6 bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">
                What Happens on the Discovery Call?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                You do not need to have everything prepared before the conversation. We may discuss:
              </p>

              <ul className="space-y-3">
                {discoveryTopics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-xs sm:text-sm text-gray-500 italic">
              The purpose is to understand your situation and determine whether CaritaEducatrice&apos;s consultancy services are a suitable fit.
            </div>
          </div>

          {/* Right: Training or Consultancy Comparison */}
          <div className="lg:col-span-6 bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">
                Training or Consultancy?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Not sure which option you need? We provide both professional training and tailored consultancy:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/60">
                  <h4 className="font-bold text-[#0F5C4A] text-sm mb-1">Choose Training If You Want To:</h4>
                  <p className="text-xs text-gray-600">Develop your own skills, train organisational members, learn specific fundraising/advocacy areas, and build long-term capabilities.</p>
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/60">
                  <h4 className="font-bold text-[#0F5C4A] text-sm mb-1">Choose Consultancy If You Need:</h4>
                  <p className="text-xs text-gray-600">Tailored support for a specific project, live funding coaching, document review, co-writing support, or strategic assistance.</p>
                </div>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#0F5C4A] font-medium">
              If you are unsure, the discovery call is the place to start.
            </div>
          </div>

        </div>

        {/* Final Bottom Call to Action Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let&apos;s Discuss Your Project
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-2 leading-relaxed">
            Tell us what you are working on, what you are trying to achieve, and where you need support.
          </p>
          <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-8">
            The initial discovery call is free. Consultancy is individually scoped following the conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/schedule-call" 
              className="inline-flex items-center gap-3 bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-base"
            >
              Book a Free Discovery Call
              <Calendar className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200 text-sm sm:text-base"
            >
              Contact CaritaEducatrice
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}