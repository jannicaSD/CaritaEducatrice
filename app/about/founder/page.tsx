import Link from "next/link";
import { 
  UserCheck, 
  Briefcase, 
  ShieldAlert, 
  CheckCircle2, 
  Target, 
  BookOpenCheck,
  Scale,
  Sparkles
} from "lucide-react";

export default function FounderPhilosophy() {
  const practicalNeeds = [
    "Developing fundable project proposals",
    "Understanding different funding opportunities",
    "Building sustainable fundraising strategies",
    "Communicating impact effectively",
    "Developing donor relationships",
    "Preparing advocacy documentation",
    "Understanding international human-rights mechanisms",
    "Navigating organisational and regulatory requirements",
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Grounded in Real-World Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover the founder&apos;s journey, our practical approach to training, and our unwavering commitment to responsible and transparent practice.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-4 bg-[#FAF7F2] border border-gray-200/80 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center mb-6 shadow-md">
              <UserCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-1">
              Jacob Daniel Gill
            </h3>
            <p className="text-sm font-semibold text-[#0F5C4A] mb-4">
              Founder, Trainer & Charity Practitioner
            </p>
            <span className="inline-block bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
              UK- & Pakistan-Based
            </span>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Briefcase className="w-4 h-4" />
              Charity Director & Trustee
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38]">
              Leadership Shaped by Practice
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              CaritaEducatrice was founded by Jacob Daniel Gill, a UK- and Pakistan-based charity director and trustee with extensive experience working across charitable, fundraising, training, and advocacy environments.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              His work has shaped CaritaEducatrice&apos;s emphasis on practical knowledge, responsible fundraising, evidence-based advocacy, and organisational capacity building.
            </p>
          </div>

        </div>

        {/* Practical Approach Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Realities on the ground */}
          <div className="lg:col-span-6 bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                A Practical Approach to Professional Training
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                CaritaEducatrice&apos;s training philosophy comes from working with the realities faced by organisations on the ground. Charities and NGOs often have strong ideas and a clear commitment to their communities, but may need additional support with:
              </p>
              <ul className="space-y-3 mb-6">
                {practicalNeeds.map((need, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                CaritaEducatrice was developed to address these practical needs through structured training and consultancy.
              </p>
            </div>
          </div>

          {/* Right: Usable Knowledge & Responsible Practice */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Box 1: Experience Translated */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-2xs flex-1">
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                Experience Translated Into Usable Knowledge
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The emphasis is on turning experience and research into resources that participants can actually use. Rather than presenting fundraising or advocacy as purely theoretical subjects, CaritaEducatrice combines principles with practical tools, templates, examples, and exercises so participants can adapt them to their own organisational circumstances.
              </p>
            </div>

            {/* Box 2: Commitment to Responsible Practice */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-2xs flex-1">
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                A Commitment to Responsible Practice
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                CaritaEducatrice&apos;s work places importance on accuracy, transparency, and responsible representation. Participants are encouraged to verify current regulations, fees, deadlines, and eligibility requirements before acting.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Sensitive subjects are approached carefully. Our training avoids attributing responsibility for harm to entire countries, communities, or religions, attributing harms instead to specific documented actors supported by appropriate sources.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Purpose Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            The Purpose Behind CaritaEducatrice
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            To help people and organisations develop the practical capability to fund, communicate, represent, and advance the causes they serve.
          </p>
        </div>

      </div>
    </section>
  );
}