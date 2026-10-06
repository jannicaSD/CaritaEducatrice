import Link from "next/link";
import { BookOpen, PhoneCall, Mail, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0F5C4A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0F5C4A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-14 lg:p-16 shadow-xl text-center relative overflow-hidden">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
            Take the Next Step
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Strengthen Your Organisation?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you&apos;re choosing your first fundraising course, preparing a funding proposal, planning a crowdfunding campaign or working on an international advocacy submission, CaritaEducatrice can help you identify the right next step.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Explore Courses Button */}
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#b59020] text-[#1E2A38] font-bold px-8 py-4 rounded-2xl shadow-md transition-all duration-200 hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Book Discovery Call Button */}
            <Link
              href="/consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-2xl shadow-md transition-all duration-200 backdrop-blur-md"
            >
              <PhoneCall className="w-5 h-5 text-[#C9A227]" />
              <span>Book a Free Discovery Call</span>
            </Link>

            {/* Contact CaritaEducatrice Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200"
            >
              <Mail className="w-5 h-5 text-white/80" />
              <span>Contact CaritaEducatrice</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}