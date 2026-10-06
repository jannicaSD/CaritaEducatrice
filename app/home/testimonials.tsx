import { MessageSquareQuote, ShieldCheck, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Participant Voice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            What Our Participants Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We believe testimonials should represent genuine participant and client experiences. No invented quotes. No anonymous claims presented as real feedback.
          </p>
        </div>

        {/* Coming Soon Showcase Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-14 text-center shadow-sm relative overflow-hidden group">
          
          {/* Decorative Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#0F5C4A]/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-[#C9A227] transition-colors">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-4">
            Testimonials Coming Soon
          </h3>

          {/* Main Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Real experiences will appear here as CaritaEducatrice&apos;s courses and consultancy engagements progress.
          </p>

          {/* Trust Commitment Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200/80 px-5 py-2.5 rounded-2xl shadow-2xs text-xs sm:text-sm font-semibold text-[#1E2A38]">
            <ShieldCheck className="w-4 h-4 text-[#0F5C4A]" />
            <span>Built on integrity, transparency, and verified professional standards[cite: 1].</span>
          </div>

        </div>

      </div>
    </section>
  );
}