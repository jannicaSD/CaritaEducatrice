import Link from "next/link";
import { 
  BookOpen, 
  DollarSign, 
  Users, 
  Globe2, 
  Scale, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles,
  ShieldAlert
} from "lucide-react";

export default function CaritaArticles() {
  const articleTopics = [
    {
      icon: <DollarSign className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Fundraising & Grant Writing",
      desc: "Understanding funding approaches, proposal development, donor relationships, and sustainable fundraising practice."
    },
    {
      icon: <Users className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Crowdfunding",
      desc: "Practical considerations for developing effective campaigns and working with online crowdfunding platforms."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#0F5C4A]" />,
      title: "NGO Development",
      desc: "Organisational capacity, marketing, networking, communication, and long-term sustainable development."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#0F5C4A]" />,
      title: "UN Engagement",
      desc: "Understanding international mechanisms and identifying opportunities for appropriate NGO engagement."
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Human-Rights Advocacy",
      desc: "Documentation, proposal writing, reporting, advocacy communications, and international mechanism engagement."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#0F5C4A]" />,
      title: "Economic Justice & Social Issues",
      desc: "Research and discussion around poverty, peacebuilding, social justice, and related organisational work."
    }
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            Knowledge Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2A38] mb-6">
            Ideas, Research & Practical Perspectives
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The CaritaEducatrice Articles section provides accessible discussion and practical perspectives on fundraising, NGO development, advocacy, human rights, and related areas of professional practice to help organisations identify areas where further support is useful.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articleTopics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/85 rounded-3xl p-8 flex flex-col justify-between shadow-2xs hover:border-[#0F5C4A]/40 transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F5C4A]/10 flex items-center justify-center mb-6 group-hover:bg-[#0F5C4A] group-hover:text-white transition-colors">
                  {/* Clone icon or handle color if needed, Lucide icons inherit text color */}
                  <div className="text-[#0F5C4A] group-hover:text-white transition-colors">
                    {topic.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Research With Context & Call to Action Banner */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <ShieldAlert className="w-4 h-4" />
              Research With Context
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">
              Grounded in Verified Sources
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Where appropriate, CaritaEducatrice articles draw on named sources and verified information. Please note that time-sensitive information should always be checked against the relevant current source before being relied upon.
            </p>
          </div>

          <div>
            <Link 
              href="/articles" 
              className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all duration-200 whitespace-nowrap text-sm sm:text-base"
            >
              Explore Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}