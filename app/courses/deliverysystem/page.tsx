import { 
  Globe, 
  MapPin, 
  BookOpenCheck, 
  SlidersHorizontal, 
  HelpCircle, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CaritaDeliveryFormat() {
  const deliveryOptions = [
    {
      icon: Globe,
      title: "Learn Online, Wherever You Are",
      description: "CaritaEducatrice courses are delivered online and are open to participants worldwide, providing access to structured course materials without requiring travel."
    },
    {
      icon: MapPin,
      title: "Face-to-Face Training in the UK",
      description: "Face-to-face delivery is available for participants who are able to attend in person in the UK. Core content remains consistent while adapted to the learning environment."
    },
    {
      icon: BookOpenCheck,
      title: "Practical Learning Materials",
      description: "Depending on the course, participants receive structured learning materials including course books, workbooks, slide decks, templates, checklists, and exercises."
    },
    {
      icon: SlidersHorizontal,
      title: "Flexible Course Selection",
      description: "Courses do not need to be completed in a particular order. Participants can select training according to their current organisational needs and objectives."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="delivery-format">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Flexible Options
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] tracking-tight">
            Delivery & Format
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            Designed to fit your schedule and location, offering rigorous training both online worldwide and in person across the UK.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {deliveryOptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not Sure Where to Start Banner */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center flex-shrink-0 mt-1">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-2">
                Unsure which course is right for you?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                If you are unsure which course is most appropriate for your goals, CaritaEducatrice can help you identify a suitable starting point.
              </p>
            </div>
          </div>
          <Link 
            href="/book-consultation"
            className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-all whitespace-nowrap text-sm sm:text-base flex-shrink-0"
          >
            Find Your Starting Point
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}