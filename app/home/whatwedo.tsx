import Link from "next/link";
import { BookOpen, Users, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <ShieldCheck className="w-4 h-4 text-[#0F5C4A]" />
            Core Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Build the Skills. Strengthen the Organisation. Advance the Cause.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            caritaeducatrice helps organisations develop the practical skills they need to secure funding, communicate their work, engage decision-makers and build stronger advocacy strategies.
          </p>
        </div>

        {/* Two Pathway Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Pathway 1: Training */}
          <div className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#C9A227] transition-colors">
                <BookOpen className="w-7 h-7" />
              </div>
              
              <div className="text-xs uppercase tracking-wider font-bold text-[#0F5C4A] mb-2">
                Capacity Building
              </div>
              
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                Training
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Develop your team's knowledge and practical skills through structured professional courses. Built with real source tracking, actionable templates, and comprehensive four-part course packs.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>Online worldwide & live facilitated options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>UK face-to-face cohorts available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>Includes Course Book, Slide Deck & Workbook</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pathway 2: Consultancy */}
          <div className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#C9A227] transition-colors">
                <Users className="w-7 h-7" />
              </div>
              
              <div className="text-xs uppercase tracking-wider font-bold text-[#0F5C4A] mb-2">
                Direct Support
              </div>
              
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                Consultancy
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Bring CaritaEducatrice into a live funding, advocacy or international-engagement challenge and work alongside an experienced practitioner to get results right now[cite: 1].
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>Grant writing & funding coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>Crowdfunding campaign design & platform compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
                  <span>UN accreditation & human-rights advocacy writing</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold hover:text-[#C9A227] transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Explore Consultancy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}