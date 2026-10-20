import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  Users, 
  ArrowRight, 
  Globe, 
  Calendar,
  Layers,
  CheckCircle2
} from "lucide-react";
import { extendedTrainingCategories } from "./extendedtraining";

export default function AllCoursesPage() {
  // Core Specialist Catalog (Carita Flagship & Specialized Series)
  const coreCategories = [
    {
      categoryNumber: "01",
      categoryTitle: "Fundraising & Grant Writing",
      description: "Master the entire fundraising journey from donor motivation and grant writing to individual giving, major gifts, and evaluation[cite: 1].",
      courses: [
        {
          title: "Grant Writing & Fundraising Coach",
          subtitle: "A Ten-Day Professional Certificate Course",
          duration: "20 sessions[cite: 1]",
          bestFor: "NGO staff, fundraisers, trustees, charity leaders and consultants[cite: 1].",
          href: "/courses/flagshipcourse",
          badge: "Comprehensive"
        },
        {
          title: "Writing Funding Proposals",
          subtitle: "A focused practical course for stronger applications",
          duration: "4 sessions[cite: 1]",
          bestFor: "NGO staff, project officers, researchers, consultants and funding professionals[cite: 1].",
          href: "/courses/flagshipcourse",
          badge: "Practical"
        }
      ]
    },
    {
      categoryNumber: "02",
      categoryTitle: "Community & Events Fundraising",
      description: "Explore community fundraising and special events as serious revenue-generating activities for charities and organizations[cite: 1].",
      courses: [
        {
          title: "Community & Special Events Fundraising",
          subtitle: "Comprehensive revenue-generating activities & ethics",
          duration: "53 sessions[cite: 1]",
          bestFor: "Fundraisers, charities, community organisations, volunteers and trustees[cite: 1].",
          href: "/courses/campaigncourse",
          badge: "Detailed Guide"
        }
      ]
    },
    {
      categoryNumber: "03",
      categoryTitle: "Crowdfunding",
      description: "Practical training across campaign planning, platform selection, storytelling, supporter engagement, and cross-border compliance[cite: 1].",
      courses: [
        {
          title: "Crowdfunding Fundamentals & Platform Landscape",
          subtitle: "Introduction & platform comparison (JustGiving, GoFundMe, etc.)",
          duration: "4 sessions[cite: 1]",
          bestFor: "Charities, social entrepreneurs, and project leaders[cite: 1].",
          href: "/courses/crowdfunding",
          badge: "Series Part 1"
        },
        {
          title: "Designing a Winning Crowdfunding Campaign",
          subtitle: "Structure, goal setting, storytelling & momentum",
          duration: "5 sessions[cite: 1]",
          bestFor: "Campaign managers and fundraisers[cite: 1].",
          href: "/courses/crowdfunding",
          badge: "Series Part 2"
        },
        {
          title: "Registering & Connecting with Major Platforms",
          subtitle: "Eligibility, documentation, verification & presence",
          duration: "5 sessions[cite: 1]",
          bestFor: "Organisations setting up official accounts[cite: 1].",
          href: "/courses/crowdfunding",
          badge: "Platform Guide"
        },
        {
          title: "Cross-Border Crowdfunding: UK/Pakistan Compliance",
          subtitle: "Compliance considerations & fund transfer logistics",
          duration: "4 sessions[cite: 1]",
          bestFor: "Cross-border initiatives and social projects[cite: 1].",
          href: "/courses/crowdfunding",
          badge: "Specialist"
        }
      ]
    },
    {
      categoryNumber: "04",
      categoryTitle: "NGO & Nonprofit Development",
      description: "Strengthen your organization's visibility, communication, brand identity, and professional relationships[cite: 1].",
      courses: [
        {
          title: "NGO Marketing & Networking",
          subtitle: "Visibility, digital presence, storytelling & coalition-building",
          duration: "6 sessions[cite: 1]",
          bestFor: "NGO professionals, charity staff, fundraisers and leaders[cite: 1].",
          href: "/courses/ngomarketing",
          badge: "Essential"
        }
      ]
    },
    {
      categoryNumber: "05",
      categoryTitle: "UN & Human-Rights Advocacy",
      description: "Understand international human-rights mechanisms, ECOSOC accreditation, and specialized rights-based reporting[cite: 1].",
      courses: [
        {
          title: "UN Treaty Bodies & Universal Periodic Review",
          subtitle: "Introduction to international human-rights engagement",
          duration: "8 sessions[cite: 1]",
          bestFor: "Advocacy officers, human-rights organisations and researchers[cite: 1].",
          href: "/courses/ecosoccourse",
          badge: "Advocacy"
        },
        {
          title: "Registering for ECOSOC Consultative Status",
          subtitle: "Eligibility, documentation and UN system engagement",
          duration: "5 sessions[cite: 1]",
          bestFor: "NGOs and charities seeking international accreditation[cite: 1].",
          href: "/courses/ecosoccourse",
          badge: "Accreditation"
        },
        {
          title: "Writing Proposals, Reports & Urgent Appeals",
          subtitle: "Specialised writing for international human rights organisations",
          duration: "6 sessions[cite: 1]",
          bestFor: "Human-rights organisations and advocacy officers[cite: 1].",
          href: "/courses/rightswriting",
          badge: "Specialist"
        }
      ]
    },
    {
      categoryNumber: "06",
      categoryTitle: "Pakistan, Social Justice & Development",
      description: "Rigorously sourced programmes examining legal status, poverty, social justice, and peacebuilding practice[cite: 1].",
      courses: [
        {
          title: "Pakistan's Religious Minorities — Poverty & Justice",
          subtitle: "Legal status, advocacy needs & careful documentation",
          duration: "20 sessions[cite: 1]",
          bestFor: "NGOs, human-rights professionals and social justice organisations[cite: 1].",
          href: "/courses/rightswriting",
          badge: "Flagship Research"
        },
        {
          title: "Economic Justice & Peacebuilding",
          subtitle: "Poverty reduction, community development & peacebuilding practice",
          duration: "38 sessions[cite: 1]",
          bestFor: "Community development and peacebuilding practitioners[cite: 1].",
          href: "/courses/rightswriting",
          badge: "Comprehensive"
        }
      ]
    }
  ];

  const upcomingExpansions = [
    {
      title: "Advanced Fundraising & Donor Development",
      items: ["Fundraising Strategy & Donor Development", "Major Gifts & Individual Giving", "Corporate Partnerships & Sponsorship", "Digital Fundraising & Donor Engagement"]
    },
    {
      title: "NGO Leadership & Organisational Development",
      items: ["Strategic Planning for NGOs & Charities", "NGO Management & Organisational Development", "Board Governance & Trustee Development"]
    },
    {
      title: "Project Management & Finance",
      items: ["Project Management for NGOs", "Monitoring, Evaluation & Learning (MEL)", "Financial Management & Budgeting", "Professional Communication & Report Writing"]
    },
    {
      title: "Digital & Emerging Practice",
      items: ["AI & Digital Tools for NGOs & Charities"]
    }
  ];

  const extendedSubjectCount = extendedTrainingCategories.reduce(
    (total, category) => total + category.courses.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 border-b border-gray-200/60 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Practical Training & Professional Development
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E2A38] tracking-tight leading-tight max-w-4xl mx-auto">
            Practical Training for Fundraising, Advocacy & Leadership
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Carita provides practical, research-led professional training for individuals and organisations working to secure funding, strengthen institutional frameworks, communicate complex initiatives, and engage with international advocacy mechanisms[cite: 1].
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium text-gray-700">
            <span className="bg-[#FAF7F2] px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0F5C4A]" /> Online training available worldwide[cite: 1]
            </span>
            <span className="bg-[#FAF7F2] px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0F5C4A]" /> Face-to-face delivery available in the UK[cite: 1]
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#courses-list"
              className="inline-flex items-center gap-2 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Browse Core Programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1E2A38] font-medium px-8 py-4 rounded-2xl border border-gray-300 transition-all text-sm sm:text-base"
            >
              Book a Free Consultation
              <Calendar className="w-4 h-4 text-[#0F5C4A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Context Banner */}
      <section className="py-12 bg-[#FAF7F2] border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E2A38] mb-3">
            Designed to Turn Knowledge into Practical Capability[cite: 1]
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our courses combine carefully researched content with practical exercises, adaptable templates, worked examples and structured learning materials. Each programme can be taken individually without a fixed order[cite: 1].
          </p>
        </div>
      </section>

      {/* Main Core Specialist Course Categories Grid */}
      <section id="courses-list" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A38]">Core Specialist Catalog</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">Our flagship professional certificate and structured training series.</p>
          </div>

          {coreCategories.map((category, idx) => (
            <div key={idx} className="bg-white border border-gray-200/85 rounded-3xl p-6 sm:p-10 shadow-lg">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F5C4A] bg-[#0F5C4A]/10 px-3 py-1 rounded-full">
                    Category {category.categoryNumber}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mt-2">
                    {category.categoryTitle}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 max-w-md sm:text-right">
                  {category.description}
                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.courses.map((course, cIdx) => (
                  <div key={cIdx} className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold bg-white text-[#0F5C4A] px-2.5 py-1 rounded-lg border border-gray-200">
                          {course.badge}
                        </span>
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#0F5C4A]" /> {course.duration}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1E2A38] mb-1">{course.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">{course.subtitle}</p>
                      <p className="text-xs text-gray-500 mb-6 font-medium">
                        <strong className="text-[#1E2A38]">Best suited to:</strong> {course.bestFor}
                      </p>
                    </div>

                    <Link
                      href={course.href}
                      className="inline-flex items-center justify-between w-full bg-white hover:bg-[#0F5C4A] hover:text-white text-[#1E2A38] border border-gray-200 font-medium px-4 py-3 rounded-xl text-xs sm:text-sm transition-all group"
                    >
                      <span>View Course Details</span>
                      <ArrowRight className="w-4 h-4 text-[#0F5C4A] group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Extended Professional Training Subjects Section (Interactive Accordion Style with Full Detailed Content) */}
      <section className="border-y border-gray-200/60 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F5C4A]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0F5C4A]">
              <Layers className="h-4 w-4" /> Professional Training Directory
            </span>
            <h2 className="mt-4 text-2xl font-bold text-[#1E2A38] sm:text-4xl">
              Extended Professional Training Subjects
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Explore additional professional subject areas across management, digital innovation, safety, technical disciplines, energy, finance and sector-specific practice[cite: 2]. Open any subject to review its proposed overview, audience, learning outcomes, and module outlines[cite: 2].
            </p>
            <p className="mt-3 text-xs text-gray-500">
              {extendedTrainingCategories.length} subject categories · {extendedSubjectCount} proposed subjects · Course scope and availability confirmed on request[cite: 2]
            </p>
          </div>

          <div className="space-y-8">
            {extendedTrainingCategories.map((category, categoryIndex) => (
              <section
                key={category.title}
                className="rounded-3xl border border-gray-200/80 bg-[#FAF7F2] p-5 sm:p-8"
              >
                <div className="mb-6 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F5C4A]">
                      Category {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-[#1E2A38] sm:text-2xl">
                      {category.title}
                    </h3>
                  </div>
                  <span className="w-fit rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600">
                    {category.courses.length} subjects
                  </span>
                </div>
                <p className="mb-6 max-w-4xl text-sm leading-relaxed text-gray-600">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {category.courses.map((course: any) => (
                    <details
                      key={course.title}
                      className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm"
                    >
                      <summary className="cursor-pointer list-none">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-lg bg-[#0F5C4A]/10 px-2.5 py-1 text-[11px] font-semibold text-[#0F5C4A]">
                            {course.badge}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3.5 w-3.5 text-[#0F5C4A]" /> Duration: {course.duration}
                          </span>
                        </div>
                        <h4 className="mt-3 text-base font-bold text-[#1E2A38] sm:text-lg">
                          {course.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-[#0F5C4A]">{course.subtitle}</p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {course.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5C4A]">
                          View full subject details
                          <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                        </span>
                      </summary>

                      <div className="mt-5 border-t border-gray-100 pt-5 space-y-4">
                        <div>
                          <h5 className="text-sm font-bold text-[#1E2A38]">Who this subject is for</h5>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">{course.bestFor}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#1E2A38]">Key Learning Outcomes</h5>
                          <ul className="mt-1 space-y-1.5">
                            {course.learningOutcomes?.map((outcome: string, oIdx: number) => (
                              <li key={oIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] mt-0.5 flex-shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {course.modules && (
                          <div>
                            <h5 className="text-sm font-bold text-[#1E2A38]">Proposed Module Outline</h5>
                            <ul className="mt-1 space-y-2">
                              {course.modules.map((mod: any, mIdx: number) => (
                                <li key={mIdx} className="text-xs sm:text-sm text-gray-600 bg-[#FAF7F2] p-2.5 rounded-xl border border-gray-200/60">
                                  <strong className="text-[#1E2A38] block mb-0.5">{mod.title}</strong>
                                  <span>{mod.detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {course.practicalOutput && (
                          <div className="bg-[#0F5C4A]/5 p-3 rounded-xl border border-[#0F5C4A]/10 text-xs text-gray-700">
                            <strong className="text-[#0F5C4A] block mb-0.5">Suggested Practical Output:</strong>
                            {course.practicalOutput}
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Future Course Expansion */}
      <section className="py-16 bg-[#FAF7F2] border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F5C4A] bg-[#0F5C4A]/10 px-3 py-1 rounded-full">
              Coming Soon
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mt-3">
              Recommended Future Course Expansions[cite: 1]
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Tailored to Carita's NGO, charity, fundraising, advocacy and social-impact positioning. These forthcoming programmes will be published as new materials are researched and approved[cite: 1].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingExpansions.map((exp, eIdx) => (
              <div key={eIdx} className="bg-white border border-gray-200/70 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <h4 className="text-base font-bold text-[#1E2A38] mb-4 pb-2 border-b border-gray-200">
                    {exp.title}
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {exp.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C4A] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-block text-center text-xs font-semibold bg-[#FAF7F2] text-gray-500 py-2 rounded-xl border border-gray-200">
                  Coming Soon [Client Approval][cite: 1]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With Carita */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38]">Why Learn With Carita?</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Built around real-world nonprofit, leadership, and operational realities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Research-Led[cite: 1]</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Carita courses are built around named sources, books and verified primary research tailored for social impact and professional excellence[cite: 1].
              </p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Practical by Design[cite: 1]</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Training combines core principles with practical exercises, templates, checklists and worked examples[cite: 1].
              </p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Complete Course Packages[cite: 1]</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Participants receive comprehensive materials including Course Books, Aims & Contents, Facilitator Slide Decks and Participant Workbooks[cite: 1].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Training & CTA Section */}
      <section className="bg-[#FAF7F2] py-20 border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-4">
            Train Your Whole Team[cite: 1]
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Carita supports group and organisational bookings. Bring your fundraising team, trustees, project staff, advocacy officers or wider organisation together around the same practical training[cite: 1].
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Ask About Group Training[cite: 1]
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1E2A38] font-medium px-8 py-4 rounded-2xl border border-gray-300 transition-all text-sm sm:text-base"
            >
              Book a Free Consultation[cite: 1]
              <Calendar className="w-4 h-4 text-[#0F5C4A]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}