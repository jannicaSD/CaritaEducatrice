import Link from "next/link";
import { 
  BookOpen, 
  Award, 
  Users, 
  Scale, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  FileText,
  HeartHandshake
} from "lucide-react";

export default function CaritaCourses() {
  const categories = [
    {
      name: "Fundraising & Grant Writing",
      icon: <FileText className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Specialist programmes covering donor motivations, grant development, and fundraising strategy.",
      courses: [
        {
          title: "Grant Writing & Fundraising Coach — A Ten-Day Professional Certificate Course",
          sessions: "20 sessions",
          ideal: "NGO staff, fundraisers, trustees, charity leaders, and consultants.",
          desc: "A comprehensive professional programme exploring donor motivation, case for support, grant writing, trusts and foundations, government funding, individual giving, major gifts, digital fundraising, events, corporate partnerships, capital campaigns, and ethics.",
          link: "/courses/grant-writing-fundraising-coach"
        },
        {
          title: "Writing Funding Proposals",
          sessions: "4 sessions",
          ideal: "NGO staff, project officers, researchers, and consultants.",
          desc: "A focused practical course for professionals who need to develop clearer, stronger, and more structured funding proposals responding directly to funder requirements.",
          link: "/courses/writing-funding-proposals"
        },
        {
          title: "Community & Special Events Fundraising",
          sessions: "53 sessions",
          ideal: "Fundraisers, community leaders, and charity organisers.",
          desc: "Explore traditional and creative community-based activities including bazaars, auctions, wine-tasting events, retail partnerships, major-gift solicitation, prospect research, and ethics.",
          link: "/courses/community-events-fundraising"
        }
      ]
    },
    {
      name: "Crowdfunding",
      icon: <Users className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Practical guidance across campaign design, platform selection, registration, and cross-border compliance.",
      courses: [
        {
          title: "Crowdfunding Fundamentals & Platform Landscape",
          sessions: "4 sessions",
          desc: "Understand the foundations of crowdfunding and the different platform models available to organisations and campaigns.",
          link: "/courses/crowdfunding-fundamentals"
        },
        {
          title: "Designing a Winning Crowdfunding Campaign",
          sessions: "5 sessions",
          desc: "Learn how to structure a campaign around clear objectives, compelling communication, audience engagement, and planning.",
          link: "/courses/designing-winning-crowdfunding"
        },
        {
          title: "Registering & Connecting with Major Platforms",
          sessions: "5 sessions",
          desc: "Focused on understanding and connecting with JustGiving, GoFundMe, GlobalGiving, and Localgiving.",
          link: "/courses/connecting-crowdfunding-platforms"
        },
        {
          title: "Cross-Border Crowdfunding: UK/Compliance & Fund Transfer",
          sessions: "4 sessions",
          desc: "Explore practical considerations involved in cross-border crowdfunding, compliance, and fund-transfer processes.",
          link: "/courses/cross-border-crowdfunding"
        }
      ]
    },
    {
      name: "NGO & Nonprofit Development",
      icon: <BookOpen className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Strengthen organisational visibility, professional networking, and strategic capacity.",
      courses: [
        {
          title: "NGO Marketing & Networking",
          sessions: "6 sessions",
          desc: "Develop practical approaches to organisational visibility, professional networking, and relationship-building.",
          link: "/courses/ngo-marketing-networking"
        }
      ]
    },
    {
      name: "UN & Human-Rights Advocacy",
      icon: <Scale className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Engagement with international human-rights mechanisms, treaty bodies, and accreditation processes.",
      courses: [
        {
          title: "UN Treaty Bodies & Universal Periodic Review",
          sessions: "8 sessions",
          ideal: "Advocacy officers, NGO professionals, and human-rights researchers.",
          desc: "An introduction to engaging with international human-rights mechanisms with practical attention to treaty bodies and the UPR process.",
          link: "/courses/un-treaty-bodies"
        },
        {
          title: "Registering for ECOSOC Consultative Status & UN Accreditation",
          sessions: "5 sessions",
          desc: "A practical course examining the process of registering for ECOSOC consultative status and engaging with UN accreditation mechanisms.",
          link: "/courses/ecosoc-accreditation"
        },
        {
          title: "Writing Proposals, Reports & Special-Attention Notes",
          sessions: "6 sessions",
          ideal: "Human-rights organisations, advocacy professionals, and consultants.",
          desc: "Develop practical skills for preparing proposals, reports, and special-attention communications for international human-rights organisations.",
          link: "/courses/human-rights-writing"
        }
      ]
    },
    {
      name: "Social Justice & Development",
      icon: <HeartHandshake className="w-6 h-6 text-[#0F5C4A]" />,
      desc: "Specialist programmes examining minority rights, poverty, persecution, and economic justice.",
      courses: [
        {
          title: "Religious Minorities — Poverty, Persecution & Social Justice",
          sessions: "20 sessions",
          desc: "Examines the legal status, poverty, persecution, and advocacy needs of minority communities, approaching sensitive subjects carefully by distinguishing specific documented actors and events.",
          link: "/courses/religious-minorities-justice"
        },
        {
          title: "Economic Justice & Peacebuilding",
          sessions: "38 sessions",
          desc: "A specialist programme exploring economic justice and its vital relationship with sustainable peacebuilding.",
          link: "/courses/economic-justice-peacebuilding"
        }
      ]
    }
  ];

  const targetAudiences = [
    "NGOs and charities",
    "Fundraising professionals",
    "Advocacy officers",
    "Human rights organisations",
    "Community development leaders",
    "Trustees and board members",
    "Independent consultants",
    "Academic researchers",
    "Social-impact organisations",
    "Faith-based organisations",
    "Educational institutions"
  ];

  const courseMaterials = [
    "Course Book",
    "Aims & Contents",
    "Facilitator Slide Deck",
    "Participant Workbook"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Practical Training
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Practical Training for Fundraising, Advocacy & Organisational Development
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Build the knowledge, practical skills, and confidence needed to strengthen your organisation, secure funding, develop effective campaigns, and engage with donors and international mechanisms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="#catalogue" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Browse All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/book-consultation" 
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1E2A38] border border-gray-200 font-medium px-8 py-4 rounded-2xl shadow-2xs transition-all text-sm sm:text-base"
            >
              Book a Free Consultation
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Catalogue Introduction */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16" id="catalogue">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-4">
              Explore Our Training Catalogue
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              CaritaEducatrice training catalogue brings together specialist programmes covering fundraising, grant writing, crowdfunding, NGO development, UN engagement, human-rights advocacy, and social justice. Courses can be taken individually according to your organisation&apos;s needs.
            </p>
          </div>

          {/* Categories Render */}
          <div className="space-y-16">
            {categories.map((cat, cIdx) => (
              <div key={cIdx} className="border-t border-gray-100 pt-12 first:border-t-0 first:pt-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center flex-shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#1E2A38]">{cat.name}</h4>
                    <p className="text-sm text-gray-600">{cat.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.courses.map((course, crIdx) => (
                    <div 
                      key={crIdx} 
                      className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0F5C4A]/40 transition-all duration-200"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-semibold text-[#0F5C4A] bg-[#0F5C4A]/10 px-3 py-1 rounded-full">
                            {course.sessions}
                          </span>
                        </div>
                        <h5 className="text-lg font-bold text-[#1E2A38] mb-3">
                          {course.title}
                        </h5>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                          {course.desc}
                        </p>
                        {course.ideal && (
                          <p className="text-xs text-gray-500 mb-4 italic">
                            <strong className="text-gray-700 not-italic">Ideal for:</strong> {course.ideal}
                          </p>
                        )}
                      </div>

                      <Link 
                        href={course.link} 
                        className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold text-sm hover:underline pt-4 border-t border-gray-200/60"
                      >
                        View Course Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Future Training Areas Box */}
          <div className="mt-16 bg-[#FAF7F2] border border-gray-200/85 rounded-3xl p-8 sm:p-10">
            <h4 className="text-xl font-bold text-[#1E2A38] mb-3">Future Training Areas</h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              CaritaEducatrice&apos;s wider catalogue can be expanded to include additional organisational-development subjects such as:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {["NGO Management", "Strategic Planning", "Nonprofit Leadership", "Board Governance", "Monitoring, Evaluation & Learning", "Impact Measurement & Reporting"].map((area, aIdx) => (
                <div key={aIdx} className="bg-white p-3 rounded-xl border border-gray-200/60 text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold text-sm hover:underline"
            >
              Enquire About Organisational Training
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Training Designed Around Practice */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-3">
              Training Designed Around Practice
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              CaritaEducatrice courses are not simply collections of lectures; they combine rigorous research with hands-on tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200/60">
              <h4 className="font-bold text-[#1E2A38] text-base mb-2">Research</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Courses draw on named sources, books, and verified primary research.</p>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200/60">
              <h4 className="font-bold text-[#1E2A38] text-base mb-2">Practical Application</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Participants work with examples, templates, checklists, and exercises.</p>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200/60">
              <h4 className="font-bold text-[#1E2A38] text-base mb-2">Adaptable Tools</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Templates are designed to be adapted to different organisations and projects.</p>
            </div>
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-gray-200/60">
              <h4 className="font-bold text-[#1E2A38] text-base mb-2">Structured Materials</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Comprehensive packs including course books, slide decks, and workbooks.</p>
            </div>
          </div>

          <div className="bg-[#0F5C4A]/5 border border-[#0F5C4A]/20 rounded-2xl p-6 sm:p-8">
            <h4 className="font-bold text-[#0F5C4A] text-base mb-3">Comprehensive Course Pack Includes:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {courseMaterials.map((mat, mIdx) => (
                <div key={mIdx} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-gray-200/60 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who Are These Courses For? */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-3">
              Who Are These Courses For?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Training is designed for professionals and organisations working across diverse non-profit and impact sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {targetAudiences.map((audience, audIdx) => (
              <div key={audIdx} className="bg-[#FAF7F2] border border-gray-200/60 p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                <span>{audience}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Bottom Call to Action Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Learn Online. Apply in Practice.
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-2 leading-relaxed">
            All CaritaEducatrice courses are available online worldwide. Face-to-face training is available in the UK for participants attending in person.
          </p>
          <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-8">
            Courses do not need to be completed in a particular order. Let us help you find the right fit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="#catalogue" 
              className="inline-flex items-center gap-3 bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Find the Right Course
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/book-consultation" 
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-2xl border border-white/20 transition-all text-sm sm:text-base"
            >
              Book a Free Consultation
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}