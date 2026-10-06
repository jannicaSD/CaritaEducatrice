import Link from "next/link";
import { 
  Sparkles, 
  BookOpen, 
  Calendar, 
  Users, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function CaritaReadyToDevelop() {
  const highlights = [
    "Practical training designed around real organisational needs",
    "Expert guidance across fundraising, grants, and UN mechanisms",
    "Flexible options for individuals and growing teams"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="ready-to-develop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F5C4A]/5 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A227]/5 rounded-tr-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
              Start Your Journey
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] tracking-tight mb-6">
              Ready to Develop Your Skills?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Whether you are looking to strengthen your fundraising, develop a funding proposal, build a crowdfunding campaign, engage with UN mechanisms, or deepen your understanding of human-rights advocacy, CaritaEducatrice offers practical training designed around real organisational needs.
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0F5C4A] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link 
                href="/courses" 
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
                <Calendar className="w-5 h-5 text-[#C9A227]" />
              </Link>
            </div>

          </div>

          {/* Secondary Cards Grid (Help Choosing & Team Training) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-100 relative z-10">
            
            {/* Card 1: Need Help Choosing */}
            <div className="bg-[#FAF7F2] border border-gray-200/70 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38] mb-2">
                  Need help choosing?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  If you are unsure which course is right for you or your organisation, book a free discovery call and discuss your objectives with CaritaEducatrice.
                </p>
              </div>
              <Link 
                href="/book-consultation"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F5C4A] hover:text-[#0c493a] transition-colors"
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Training for a Team */}
            <div className="bg-[#FAF7F2] border border-gray-200/70 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38] mb-2">
                  Training for a Team?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  CaritaEducatrice also works with organisations that require group training or a tailored learning arrangement.
                </p>
              </div>
              <Link 
                href="/organisational-training"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F5C4A] hover:text-[#0c493a] transition-colors"
              >
                Discuss Organisational Training <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}