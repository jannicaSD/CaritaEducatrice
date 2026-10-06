import Link from "next/link";
import { Sparkles, CheckCircle2, Calendar, FileText, Target, ArrowRight } from "lucide-react";

export default function GrantWritingConsultancyPage() {
  const benefits = [
    "Comprehensive review of your existing grant applications or proposals",
    "Strategic alignment with target foundation or institutional funder priorities",
    "Clear articulation of project theory of change, objectives, and impact",
    "Budget coherence, financial narrative alignment, and risk mitigation",
    "One-on-one coaching sessions to refine your pitching and writing confidence"
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 border-b border-gray-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Consultancy & Coaching
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E2A38] tracking-tight leading-tight">
            Grant Writing & Funding Coaching
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Transform your fundraising proposals into compelling, funder-ready narratives. Carita provides expert guidance, strategic reviews, and hands-on coaching to help your organization secure vital grants and capital.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
            >
              Book a Discovery Consultation
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-6">
              How Carita Helps You Win Grants
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Securing funding requires more than just filling out forms—it demands a rigorous, evidence-based case for support that aligns perfectly with funder guidelines. Whether you are applying for institutional grants, philanthropic trusts, or corporate foundations, our coaching service ensures your project stands out.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/60">
                  <CheckCircle2 className="w-5 h-5 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Next Steps / CTA Box */}
            <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Ready to accelerate your fundraising success?</h3>
              <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
                Schedule a free discovery call to discuss your upcoming proposal deadlines and find out how we can work alongside your team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0F5C4A] font-semibold hover:underline text-sm sm:text-base"
              >
                Get started with a free consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}