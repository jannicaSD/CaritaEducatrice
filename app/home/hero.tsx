import Link from "next/link";
import { ArrowRight, Calendar, Globe, MapPin, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAF7F2] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
              Professional Training & Consultancy for NGOs, Charities & Advocacy Organisations
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E2A38] leading-[1.15]">
              Training the People Who Fund and Defend <span className="text-[#0F5C4A]">the Causes That Matter</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#1E2A38]/80 leading-relaxed max-w-2xl">
              Practical, research-led training and consultancy in grant writing, fundraising, crowdfunding, UN engagement and human-rights advocacy. Built for NGOs, charities, trustees and advocacy organisations working across the UK and Pakistan — and available online to organisations anywhere in the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="inline-flex justify-center items-center gap-2 bg-[#0F5C4A] hover:bg-[#C9A227] text-white font-medium px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 text-base"
              >
                Explore Our Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/consultation"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-[#1E2A38] border border-gray-300 font-medium px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 text-base"
              >
                <Calendar className="w-4 h-4 text-[#0F5C4A]" />
                Book a Free Consultation
              </Link>
            </div>

            {/* Small Delivery Statement / Notice */}
            <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#1E2A38]/70 font-medium">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#0F5C4A]" />
                <span>Online worldwide (Live facilitated & self-paced)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0F5C4A]" />
                <span>UK face-to-face delivery available</span>
              </div>
            </div>

          </div>

          {/* Right Visual / Trust Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
              
              <div className="absolute -top-3 -right-3 bg-[#C9A227] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Rigorously Sourced
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1E2A38]">The CaritaEducatrice Standard</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Nothing taught here is invented; every course draws on named books, primary sources, or live-verified regulatory research.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-gray-100">
                  <div className="font-bold text-[#0F5C4A] text-sm">01</div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1E2A38] uppercase">Four-Part Course Packs</h4>
                    <p className="text-xs text-gray-600">Course Book, Aims & Contents, Slide Deck, & Workbook.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-gray-100">
                  <div className="font-bold text-[#0F5C4A] text-sm">02</div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1E2A38] uppercase">Principle + Template</h4>
                    <p className="text-xs text-gray-600">Actionable templates and checklists to use the same week.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-gray-100">
                  <div className="font-bold text-[#0F5C4A] text-sm">03</div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#1E2A38] uppercase">Cross-Border Insight</h4>
                    <p className="text-xs text-gray-600">Built from active trusteeship across the UK/Pakistan corridor.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}