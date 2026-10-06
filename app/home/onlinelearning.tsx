import { Globe, Video, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function OnlineLearning() {
  const deliveryModes = [
    {
      title: "Live Online",
      description: "Join a facilitator-led course through live online sessions.",
      icon: Video,
      badge: "Interactive",
    },
    {
      title: "Self-Paced",
      description: "Where offered, work through the course materials at your own pace[cite: 1].",
      icon: Clock,
      badge: "Flexible",
    },
    {
      title: "UK Face-to-Face",
      description: "Attend an in-person cohort at a UK venue where face-to-face delivery is scheduled[cite: 1].",
      icon: MapPin,
      badge: "In-Person",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Globe className="w-4 h-4 text-[#0F5C4A]" />
            Global Accessibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-4">
            Learn From Wherever You Are
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            CaritaEducatrice courses are available online to participants anywhere in the world[cite: 1]. Choose the learning format that suits your organisation[cite: 1].
          </p>
          
          {/* Core Uniformity Tagline */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200/80 px-5 py-2.5 rounded-2xl shadow-2xs text-xs sm:text-sm font-semibold text-[#1E2A38]">
            <CheckCircle2 className="w-4 h-4 text-[#0F5C4A]" />
            <span>Same course. Same core materials. Different way to learn[cite: 1].</span>
          </div>
        </div>

        {/* Delivery Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryModes.map((mode, index) => {
            const IconComponent = mode.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xs transition-all duration-300 hover:shadow-xl hover:border-[#0F5C4A]/40 group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A] text-white flex items-center justify-center shadow-md group-hover:bg-[#C9A227] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-[#0F5C4A] border border-gray-200">
                      {mode.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#0F5C4A] transition-colors">
                    {mode.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Card Footer Accent */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#0F5C4A] transition-colors">
                  <span>Delivery Model</span>
                  <span>Option 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}