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

export default function AllCoursesPage() {
  // Core Specialist & Flagship Categories (CaritaEducatrice Focus)
  const coreCategories = [
    {
      categoryNumber: "01",
      categoryTitle: "Fundraising & Grant Writing",
      description: "Master the entire fundraising journey from donor motivation and grant writing to individual giving, major gifts, and evaluation.",
      courses: [
        {
          title: "Grant Writing & Fundraising Coach",
          subtitle: "A Ten-Day Professional Certificate Course",
          duration: "20 sessions",
          bestFor: "NGO staff, fundraisers, trustees, charity leaders and consultants.",
          href: "/courses/flagshipcourse",
          badge: "Comprehensive"
        },
        {
          title: "Writing Funding Proposals",
          subtitle: "A focused practical course for stronger applications",
          duration: "4 sessions",
          bestFor: "NGO staff, project officers, researchers, consultants and funding professionals.",
          href: "/courses/flagshipcourse",
          badge: "Practical"
        }
      ]
    },
    {
      categoryNumber: "02",
      categoryTitle: "Community & Events Fundraising",
      description: "Explore community fundraising and special events as serious revenue-generating activities for charities and organizations.",
      courses: [
        {
          title: "Community & Special Events Fundraising",
          subtitle: "Comprehensive revenue-generating activities & ethics",
          duration: "53 sessions",
          bestFor: "Fundraisers, charities, community organisations, volunteers and trustees.",
          href: "/courses/campaigncourse",
          badge: "Detailed Guide"
        }
      ]
    },
    {
      categoryNumber: "03",
      categoryTitle: "Crowdfunding",
      description: "Practical training across campaign planning, platform selection, storytelling, supporter engagement, and cross-border compliance.",
      courses: [
        {
          title: "Crowdfunding Fundamentals & Platform Landscape",
          subtitle: "Introduction & platform comparison (JustGiving, GoFundMe, etc.)",
          duration: "4 sessions",
          bestFor: "Charities, social entrepreneurs, and project leaders.",
          href: "/courses/crowdfunding",
          badge: "Series Part 1"
        },
        {
          title: "Designing a Winning Crowdfunding Campaign",
          subtitle: "Structure, goal setting, storytelling & momentum",
          duration: "5 sessions",
          bestFor: "Campaign managers and fundraisers.",
          href: "/courses/crowdfunding",
          badge: "Series Part 2"
        },
        {
          title: "Registering & Connecting with Major Platforms",
          subtitle: "Eligibility, documentation, verification & presence",
          duration: "5 sessions",
          bestFor: "Organisations setting up official accounts.",
          href: "/courses/crowdfunding",
          badge: "Platform Guide"
        },
        {
          title: "Cross-Border Crowdfunding: UK/Pakistan Compliance",
          subtitle: "Compliance considerations & fund transfer logistics",
          duration: "4 sessions",
          bestFor: "Cross-border initiatives and social projects.",
          href: "/courses/crowdfunding",
          badge: "Specialist"
        }
      ]
    },
    {
      categoryNumber: "04",
      categoryTitle: "NGO & Nonprofit Development",
      description: "Strengthen your organization's visibility, communication, brand identity, and professional relationships.",
      courses: [
        {
          title: "NGO Marketing & Networking",
          subtitle: "Visibility, digital presence, storytelling & coalition-building",
          duration: "6 sessions",
          bestFor: "NGO professionals, charity staff, fundraisers and leaders.",
          href: "/courses/ngomarketing",
          badge: "Essential"
        }
      ]
    },
    {
      categoryNumber: "05",
      categoryTitle: "UN & Human-Rights Advocacy",
      description: "Understand international human-rights mechanisms, ECOSOC accreditation, and specialized rights-based reporting.",
      courses: [
        {
          title: "UN Treaty Bodies & Universal Periodic Review",
          subtitle: "Introduction to international human-rights engagement",
          duration: "8 sessions",
          bestFor: "Advocacy officers, human-rights organisations and researchers.",
          href: "/courses/ecosoccourse",
          badge: "Advocacy"
        },
        {
          title: "Registering for ECOSOC Consultative Status",
          subtitle: "Eligibility, documentation and UN system engagement",
          duration: "5 sessions",
          bestFor: "NGOs and charities seeking international accreditation.",
          href: "/courses/ecosoccourse",
          badge: "Accreditation"
        },
        {
          title: "Writing Proposals, Reports & Urgent Appeals",
          subtitle: "Specialised writing for international human rights organisations",
          duration: "6 sessions",
          bestFor: "Human-rights organisations and advocacy officers.",
          href: "/courses/rightswriting",
          badge: "Specialist"
        }
      ]
    },
    {
      categoryNumber: "06",
      categoryTitle: "Pakistan, Social Justice & Development",
      description: "Rigorously sourced programmes examining legal status, poverty, social justice, and peacebuilding practice.",
      courses: [
        {
          title: "Pakistan's Religious Minorities — Poverty & Justice",
          subtitle: "Legal status, advocacy needs & careful documentation",
          duration: "20 sessions",
          bestFor: "NGOs, human-rights professionals and social justice organisations.",
          href: "/courses/rightswriting",
          badge: "Flagship Research"
        },
        {
          title: "Economic Justice & Peacebuilding",
          subtitle: "Poverty reduction, community development & peacebuilding practice",
          duration: "38 sessions",
          bestFor: "Community development and peacebuilding practitioners.",
          href: "/courses/rightswriting",
          badge: "Comprehensive"
        }
      ]
    }
  ];

  // Extended Professional Training Categories (Organisational & Industry Subjects)
  const extendedTrainingCategories = [
    {
      title: "Business & Management",
      subjects: [
        "Audit, Compliance & Governance",
        "Business Process Management Training",
        "Communication and Writing Skills",
        "Corporate Communication Training",
        "Corporate Governance Training",
        "Customer Service",
        "Executive Development Training",
        "Human Resource Management",
        "Leadership and Management",
        "Learning and Development",
        "Office Administration",
        "Personal & Professional Development",
        "Public Relations Training",
        "Sales and Marketing",
        "Strategy and Strategic Planning",
        "Sustainability and CSR Training"
      ]
    },
    {
      title: "Digital Transformation & Innovation",
      subjects: [
        "Artificial Intelligence (AI) Training",
        "Creativity and Innovation Training",
        "Data Management and Business Intelligence Training",
        "Digital Transformation Training"
      ]
    },
    {
      title: "HSE & Security",
      subjects: [
        "Cybersecurity Training Courses",
        "Health, Safety and Environment (HSE)",
        "Emergency & Crisis Management"
      ]
    },
    {
      title: "Accreditations & Certifications",
      subjects: [
        "KHDA Accreditation Support",
        "PMI Standards & Training",
        "HRCI Certification Training"
      ]
    },
    {
      title: "Engineering & Technical",
      subjects: [
        "Construction Management & Civil Engineering",
        "Maintenance Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Root Cause Analysis",
        "Corrosion, Metallurgy and Inspection",
        "Instrumentation and Process Control",
        "Mining Engineering"
      ]
    },
    {
      title: "Energy",
      subjects: [
        "Energy Transition Training",
        "Oil and Gas Training",
        "Hydrogen Training",
        "Renewable Energy Training"
      ]
    },
    {
      title: "Operational & Logistic",
      subjects: [
        "Contract Management & Law",
        "Legal Training",
        "Procurement, Logistics and Supply Chain Management",
        "Project Management",
        "Public Private Partnerships (PPP)",
        "Quality Control & Risk Management"
      ]
    },
    {
      title: "Finance & Investment",
      subjects: [
        "Accounting and Finance",
        "Banking, Investment & Insurance",
        "Tax and Revenue",
        "Finance and Budgeting Training",
        "Fraud and Financial Audit",
        "Joint Venture",
        "Real Estate Investment and Finance",
        "Treasury and Investment Management"
      ]
    },
    {
      title: "Sector Specific",
      subjects: [
        "Agribusiness Sustainability",
        "Fintech and Blockchain",
        "Healthcare Management",
        "Hospitality & Tourism",
        "Humanitarian Development",
        "Information Technology",
        "Media and Telecom",
        "National Security Management",
        "Police and Law Enforcement",
        "Public Sector Management",
        "Ships and Ports Management",
        "Social Insurance and Retirement",
        "Traffic Management",
        "Urban Planning & Development"
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
            CaritaEducatrice provides practical, research-led professional training for individuals and organisations working to secure funding, strengthen institutional frameworks, communicate complex initiatives, and engage with international advocacy mechanisms.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium text-gray-700">
            <span className="bg-[#FAF7F2] px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0F5C4A]" /> Online training available worldwide
            </span>
            <span className="bg-[#FAF7F2] px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0F5C4A]" /> Face-to-face delivery available in the UK
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
            Designed to Turn Knowledge into Practical Capability
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our courses combine carefully researched content with practical exercises, adaptable templates, worked examples and structured learning materials. Each programme can be taken individually without a fixed order.
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

      {/* Extended Professional Training Subjects Section */}
      <section className="py-20 bg-white border-t border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F5C4A] bg-[#0F5C4A]/10 px-3 py-1 rounded-full">
              Comprehensive Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1E2A38] mt-3">
              Extended Professional Training Subjects
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Explore specialized modules and subject domains across business management, technical engineering, governance, energy, and sector-specific operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedTrainingCategories.map((group, gIdx) => (
              <div key={gIdx} className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1E2A38] mb-4 pb-3 border-b border-gray-200 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0F5C4A]" />
                    {group.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {group.subjects.map((subject, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-gray-700 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              Recommended Future Course Expansions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Tailored to CaritaEducatrice's NGO, charity, fundraising, advocacy and social-impact positioning. These forthcoming programmes will be published as new materials are researched and approved.
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
                  Coming Soon [Client Approval]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn With CaritaEducatrice */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1E2A38]">Why Learn With CaritaEducatrice?</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Built around real-world nonprofit, leadership, and operational realities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Research-Led</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                CaritaEducatrice courses are built around named sources, books and verified primary research tailored for social impact and professional excellence.
              </p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Practical by Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Training combines core principles with practical exercises, templates, checklists and worked examples.
              </p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Complete Course Packages</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Participants receive comprehensive materials including Course Books, Aims & Contents, Facilitator Slide Decks and Participant Workbooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Training & CTA Section */}
      <section className="bg-[#FAF7F2] py-20 border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-4">
            Train Your Whole Team
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            CaritaEducatrice supports group and organisational bookings. Bring your fundraising team, trustees, project staff, advocacy officers or wider organisation together around the same practical training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Ask About Group Training
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

    </div>
  );
}