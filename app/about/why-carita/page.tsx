import { 
  BookOpen, 
  Wrench, 
  Layers, 
  Globe2, 
  ShieldCheck, 
  Target, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function WhyCaritaEducatrice() {
  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Research-Led",
      description: "CaritaEducatrice courses draw on named books, established sources, and verified primary-source research with clear sourcing so participants can understand where key ideas come from."
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Practical by Design",
      description: "Learning is connected to practical application through templates, checklists, worked examples, exercises, and structured activities designed for real organisational situations."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Principles Plus Adaptable Tools",
      description: "We avoid one-size-fits-all solutions. Participants learn the core principle behind an approach and receive practical tools adaptable to their specific organisation or funding environment."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Grounded in UK & Pakistan Experience",
      description: "Connected to charitable and advocacy experience in both the UK and Pakistan, providing valuable practical perspectives across diverse operational and fundraising contexts."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Honest About Change",
      description: "Because regulations, fees, deadlines, and platform requirements change, we emphasize verifying current information rather than presenting time-sensitive data as permanently fixed."
    },
    {
      icon: <Target className="w-6 h-6 text-[#0F5C4A]" />,
      title: "Designed to Build Independence",
      description: "Our goal is not just to help with a single application or campaign, but to help participants develop capabilities they can continue using in all future work."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Practical Training. Research-Led Content. Real-World Application.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            There are many sources of information about fundraising and advocacy. CaritaEducatrice is designed for people who need more than information alone—connecting research, tools, and application.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Motto Banner */}
        <div className="bg-[#0F5C4A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          
          <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-[#C9A227] mb-3">
            Our Core Methodology
          </h3>
          <p className="text-lg sm:text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed">
            Learn the principle. Use the tool. Adapt it to your situation. Build the capability to do it again.
          </p>
        </div>

      </div>
    </section>
  );
}