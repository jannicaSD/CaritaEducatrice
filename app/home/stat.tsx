import { BookOpen, Clock, Library, Layers } from "lucide-react";

export default function TrustStatsBar() {
  const stats = [
    {
      id: 1,
      number: "16",
      label: "Professional Training Courses",
      description: "Rigoursly developed curriculum across multiple clusters",
      icon: BookOpen,
    },
    {
      id: 2,
      number: "190+",
      label: "Contact Hours",
      description: "In-depth training contact time across all offerings",
      icon: Clock,
    },
    {
      id: 3,
      number: "55+",
      label: "Named Source Books",
      description: "Working library of cited authors and primary research",
      icon: Library,
    },
    {
      id: 4,
      number: "4-Part",
      label: "Course Pack",
      description: "Book, Aims & Contents, Slide Deck & Workbook per course",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#0F5C4A] font-bold mb-2">
            The Evidence Base
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#1E2A38] tracking-tight">
            Research-led training. Practical resources. Evidence you can trace.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className="bg-[#FAF7F2] border border-gray-100 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-md hover:border-[#0F5C4A]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-[#0F5C4A] tracking-tight mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-base font-bold text-[#1E2A38] mb-1">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 pt-3 border-t border-gray-200/60">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}