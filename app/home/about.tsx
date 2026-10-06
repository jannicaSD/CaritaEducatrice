import { Shield, Globe2, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutCarita() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Training Built From Real-World Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Carita Educatrice exists because good intentions alone are not enough.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Organisations doing important work often need stronger access to the skills required to fund their programmes, communicate their evidence and advocate effectively[cite: 1].
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Carita Educatrice was founded and is led by <strong className="text-[#1E2A38]">Jacob Daniel Gill</strong>, a charity director and trustee working across the United Kingdom and Pakistan[cite: 1].
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              This UK/Pakistan perspective informs the organisation&apos;s approach: combining practical fundraising and grant-writing skills with an understanding of the legal, compliance and human-rights realities that can arise when organisations work across borders[cite: 1].
            </p>
          </div>

          {/* Right Column: Why "CaritaEducatrice"? Highlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F5C4A]/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                Why &quot;CaritaEducatrice&quot;?
              </h3>
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-[#0F5C4A]">Carita Educatrice</strong> (Carita = charity/care, Educatrice = educator) represents our commitment to providing expert education and practical support to civil society organizations working to create positive social change[cite: 1].
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-200/80 pt-4">
                That idea sits at the heart of the organisation: helping people represent their causes, communities and organisations with greater capability and credibility[cite: 1].
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-200/60">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center flex-shrink-0 mt-1">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E2A38] mb-1">Cross-Border Insight</h4>
              <p className="text-sm text-gray-600">Bridging the UK and Pakistan operational and compliance landscapes[cite: 1].</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E2A38] mb-1">Charity Leadership</h4>
              <p className="text-sm text-gray-600">Led by active charity directors and trustees with frontline experience[cite: 1].</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E2A38] mb-1">Credible Representation</h4>
              <p className="text-sm text-gray-600">Empowering causes and communities to advocate with complete confidence[cite: 1].</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}