import Link from "next/link";
import { Award, Clock, FileCheck, ArrowRight, BookOpen } from "lucide-react";

export default function FeaturedCourses() {
  const featuredCourses = [
    {
      number: "Featured Course 01",
      title: "Grant Writing & Fundraising Coach",
      subtitle: "A Ten-Day Professional Certificate Course",
      description: "A comprehensive programme covering the complete fundraising development journey — from understanding why people give and building a case for support to grant writing, trusts and foundations, government funding, individual giving, major gifts, digital fundraising, events, corporate partnerships, fundraising ethics and stewardship.",
      sessions: "20 sessions",
      features: ["Certificate of Completion", "Practical exercises & templates", "Full 4-part course pack"],
      link: "/courses/grant-writing-coach",
      badge: "Flagship Certificate",
    },
    {
      number: "Featured Course 02",
      title: "Community & Special Events Fundraising",
      subtitle: "Sustainable Revenue & Event Management",
      description: "A comprehensive course covering the planning, development and management of community and special fundraising events — including auctions, fairs, sales, house tours, retail partnerships, fashion shows, major-gift solicitation and prospect research[cite: 1].",
      sessions: "53 sessions",
      features: ["Practical event-planning tools", "Legal & ethical considerations", "Turnkey case studies"],
      link: "/courses/community-events-fundraising",
      badge: "Comprehensive Training",
    },
    {
      number: "Featured Course 03",
      title: "Writing Funding Proposals",
      subtitle: "Focused Short Course",
      description: "Learn how to understand funders, structure a fundable proposal, develop trustworthy budgets and budget narratives, and improve your submission and learning process[cite: 1].",
      sessions: "4 sessions",
      features: ["Proposal structure", "Budget development", "Review & submission"],
      link: "/courses/writing-funding-proposals",
      badge: "Short Course",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <BookOpen className="w-4 h-4 text-[#0F5C4A]" />
            Featured Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Learn Skills You Can Use Immediately
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every CaritaEducatrice course combines researched principles with practical tools, templates, checklists and worked examples[cite: 1].
          </p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {featuredCourses.map((course, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
            >
              <div>
                {/* Top Tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F5C4A]">
                    {course.number}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-[#1E2A38] border border-gray-200">
                    {course.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-[#1E2A38] mb-1 group-hover:text-[#0F5C4A] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs font-medium text-[#0F5C4A] mb-4">
                  {course.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Session Pill */}
                <div className="inline-flex items-center gap-2 bg-[#FAF7F2] text-[#1E2A38] px-3 py-1.5 rounded-xl text-xs font-semibold mb-6 border border-gray-200/60">
                  <Clock className="w-4 h-4 text-[#0F5C4A]" />
                  <span>{course.sessions}</span>[cite: 1]
                </div>

                {/* Feature List */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-gray-100">
                  {course.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <FileCheck className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Course Link */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={course.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5C4A] hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>View Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}