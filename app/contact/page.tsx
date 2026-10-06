import Link from "next/link";
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function CaritaContact() {
  const trainingAreas = [
    "Grant writing and fundraising",
    "Community and special-events fundraising",
    "Crowdfunding",
    "NGO marketing and networking",
    "UN engagement",
    "Human-rights advocacy",
    "Pakistan, poverty, persecution, and social justice"
  ];

  const consultancyAreas = [
    "Grant writing and funding coaching",
    "Fundraising strategy and team building",
    "Crowdfunding campaign design",
    "UN and human-rights advocacy writing",
    "UN accreditation support",
    "Bespoke advocacy and campaign design",
    "Grant writing for scholars and researchers"
  ];

  const discoverySteps = [
    "Your organisation or project",
    "The challenge or opportunity you are working on",
    "Your fundraising, advocacy, or training needs",
    "The support you are looking for",
    "Whether CaritaEducatrice's services are a suitable fit",
    "Possible next steps"
  ];

  const preparationGuide = [
    { title: "Your organisation", desc: "Tell us briefly about your organisation, project, or area of work." },
    { title: "Your objective", desc: "What are you trying to achieve?" },
    { title: "Your current challenge", desc: "What do you need help with?" },
    { title: "Your preferred support", desc: "Let us know whether you are interested in training, consultancy, or are unsure." }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Let’s Find Where CaritaEducatrice Can Work for You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether you are looking for professional training, fundraising support, crowdfunding guidance, human-rights advocacy writing, UN accreditation support, or tailored consultancy, we would be pleased to understand your needs.
          </p>
        </div>

        {/* Discovery Call & Direct Get in Touch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Book a Free Discovery Call */}
          <div className="lg:col-span-7 bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
                Book a Free Discovery Call
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                A discovery call is the first step for consultancy enquiries. During the call, we can discuss:
              </p>
              
              <ul className="space-y-3 mb-8">
                {discoverySteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#0F5C4A] flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link 
                href="/book-consultation" 
                className="inline-flex items-center justify-center gap-3 w-full bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-base"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right: Get in Touch Channels */}
          <div className="lg:col-span-5 bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3.5 py-1 rounded-full text-xs font-semibold mb-6">
                <Mail className="w-4 h-4 text-[#C9A227]" />
                Direct Enquiries
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2 text-[#C9A227] font-semibold text-sm">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                  <p className="text-white/80 text-xs mb-2">For general, course, and consultancy enquiries:</p>
                  <a href="mailto:info@caritaeducatrice.com" className="text-white font-medium text-sm sm:text-base hover:underline">
                    info@caritaeducatrice.com
                  </a>
                </div>

                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2 text-[#C9A227] font-semibold text-sm">
                    <Phone className="w-4 h-4" />
                    Phone
                  </div>
                  <p className="text-white/80 text-xs mb-2">For direct enquiries:</p>
                  <a href="tel:+440000000000" className="text-white font-medium text-sm sm:text-base hover:underline">
                    [Phone Number]
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link 
                href="/book-consultation" 
                className="inline-flex items-center justify-center gap-3 w-full bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-200 text-sm"
              >
                Book a Consultancy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Where We Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-3">Online — Worldwide</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              CaritaEducatrice courses are delivered online and open to participants worldwide, allowing organisations everywhere to access training without travel.
            </p>
          </div>

          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-3">United Kingdom</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Registered and operating from the UK, with face-to-face training available for participants able to attend in person in the UK.
            </p>
          </div>

          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2A38] mb-3">Pakistan</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Maintains an ongoing charitable and advocacy presence in Pakistan, offering training and consultancy relevant to the UK, Pakistan, and internationally.
            </p>
          </div>
        </div>

        {/* Training or Consultancy? Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Looking for a Course */}
          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">Looking for a Course?</h3>
              <p className="text-gray-600 text-sm mb-6">Explore CaritaEducatrice&apos;s professional training in:</p>
              
              <ul className="space-y-3 mb-8">
                {trainingAreas.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center gap-2 w-full bg-[#FAF7F2] hover:bg-gray-100 border border-gray-200 text-[#1E2A38] font-medium px-6 py-3.5 rounded-2xl transition-all text-sm"
              >
                Browse All Courses
                <ArrowRight className="w-4 h-4 text-[#0F5C4A]" />
              </Link>
            </div>
          </div>

          {/* Need Tailored Support */}
          <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 text-[#0F5C4A] flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">Need Tailored Support?</h3>
              <p className="text-gray-600 text-sm mb-6">CaritaEducatrice provides expert consultancy in areas including:</p>
              
              <ul className="space-y-3 mb-8">
                {consultancyAreas.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link 
                href="/consultancy" 
                className="inline-flex items-center justify-center gap-2 w-full bg-[#FAF7F2] hover:bg-gray-100 border border-gray-200 text-[#1E2A38] font-medium px-6 py-3.5 rounded-2xl transition-all text-sm"
              >
                Explore Consultancy
                <ArrowRight className="w-4 h-4 text-[#0F5C4A]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Before You Contact Us Box */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2A38] mb-3">
              Before You Contact Us
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To help us understand your requirements, you may wish to consider the following points. You do not need to have everything prepared before reaching out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {preparationGuide.map((prep, pIdx) => (
              <div key={pIdx} className="bg-[#FAF7F2] border border-gray-200/60 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#0F5C4A] text-base mb-2">{prep.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prep.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs sm:text-sm text-gray-500 italic">
            The initial conversation is simply an opportunity to explain your situation and explore the appropriate next step.
          </div>
        </div>

        {/* Final Bottom Banner Call to Action */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let&apos;s Start the Conversation
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have a project, funding challenge, advocacy need, or training requirement? Tell us what you are working on, and let&apos;s explore where CaritaEducatrice can help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/book-consultation" 
              className="inline-flex items-center gap-3 bg-white text-[#0F5C4A] hover:bg-gray-100 font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm sm:text-base"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="mailto:info@caritaeducatrice.com" 
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200 text-sm sm:text-base"
            >
              Email CaritaEducatrice
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}