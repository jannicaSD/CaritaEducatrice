import Link from "next/link";
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Globe,
  BookOpen
} from "lucide-react";

export default function CaritaCrowdfundingFundamentalsCourse() {
  const learningAreas = [
    "Core principles and mechanics of modern crowdfunding",
    "Understanding the wider global platform landscape",
    "Evaluating different crowdfunding models (reward, donation, equity)",
    "Matching campaign objectives with appropriate platforms",
    "Assessing feasibility, audience reach, and campaign readiness",
    "Strategic planning for initial campaign traction"
  ];

  const targetAudience = [
    "NGO leaders & project managers",
    "Fundraisers & community organisers",
    "Social enterprise founders",
    "Campaigners planning public fundraising initiatives"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="crowdfunding-fundamentals-course">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header Tag */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Crowdfunding Training
          </div>
        </div>

        {/* Main Course Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Banner Accent */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#0F5C4A] bg-[#0F5C4A]/10 px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
                Specialist Crowdfunding Programme
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2A38] mt-3">
                Crowdfunding Fundamentals & Platform Landscape
              </h2>
              <p className="text-sm sm:text-base text-[#C9A227] font-semibold mt-1">
                An Introduction to Crowdfunding Principles & Platforms
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-gray-200/60 px-5 py-3 rounded-2xl text-center">
              <span className="block text-xl font-bold text-[#0F5C4A]">4</span>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Sessions</span>
            </div>
          </div>

          {/* Course Overview Description */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#1E2A38] mb-3">Programme Overview</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              CaritaEducatrice&apos;s crowdfunding training provides practical learning across the development, planning, and implementation of crowdfunding campaigns, including platform considerations and cross-border fundraising. This introductory course provides a solid foundation for understanding crowdfunding as a fundraising approach and helps participants evaluate the different types of platforms and campaign models available.
            </p>
          </div>

          {/* Grid Layout for Key Areas & Best Suited To */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">
            
            {/* Left Column: Key Learning Areas */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#1E2A38] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0F5C4A]" />
                Key Learning Areas
              </h3>
              <div className="space-y-3">
                {learningAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-3.5 rounded-xl border border-gray-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Best Suited To */}
            <div className="lg:col-span-5 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold text-[#1E2A38] mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#0F5C4A]" />
                  Best Suited To
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Ideal for organisations and individuals exploring digital crowdfunding campaigns:
                </p>
                <div className="space-y-3">
                  {targetAudience.map((target, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action Call-to-Buttons Footer */}
          <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Available online worldwide and face-to-face in the UK.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/courses/crowdfunding-fundamentals" 
                className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
              >
                View Full Course Details
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

        </div>

      </div>
    </section>
  );
}