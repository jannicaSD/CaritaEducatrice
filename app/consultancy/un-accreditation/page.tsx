import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  FileSearch, 
  Layers, 
  FileEdit, 
  Send, 
  Clock, 
  Building2, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export default function CaritaUNAccreditationSupport() {
  const helpAreas = [
    {
      title: "Document Audit",
      description: "We review the documentation required for your organisation's application and identify areas that need attention before submission.",
      icon: FileSearch
    },
    {
      title: "Category Selection",
      description: "CaritaEducatrice can help you understand and select the appropriate category of consultative status for your organisation.",
      icon: Layers
    },
    {
      title: "Application Preparation",
      description: "We work with you through the preparation of the application and its supporting information.",
      icon: FileEdit
    },
    {
      title: "Submission Support",
      description: "We can support the preparation of the application for submission through the relevant UN process.",
      icon: Send
    },
    {
      title: "Deadline Planning",
      description: "The consultancy is planned around the annual application timetable, including the stated 1 June deadline identified in our training material.",
      icon: Clock
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery Call", text: "We understand your organisation and its reason for seeking consultative status." },
    { number: "02", title: "Eligibility & Document Review", text: "We examine the relevant organisational information and documentation." },
    { number: "03", title: "Category Selection", text: "We identify the appropriate consultative-status category." },
    { number: "04", title: "Application Preparation", text: "We work through the application and supporting material." },
    { number: "05", title: "Review & Submission Preparation", text: "The application receives a structured review before submission." },
    { number: "06", title: "Next Steps", text: "We explain what needs to happen next and what the organisation should continue to monitor." }
  ];

  const targetAudiences = [
    "NGOs",
    "Charities",
    "Human-rights organisations",
    "Advocacy organisations",
    "Organisations seeking a formal route for engagement with the UN"
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-gray-200/60" id="un-accreditation-support">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#0F5C4A]/10 text-[#0F5C4A] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0F5C4A]" />
            UN Accreditation Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A38] mt-4 tracking-tight">
            Prepare your organisation for ECOSOC consultative-status application.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            CaritaEducatrice provides consultancy support to organisations seeking to prepare an application for ECOSOC consultative status. The service is designed around practical preparation, including document review, category selection, and the submission process.
          </p>
        </div>

        {/* Main Content Card Container */}
        <div className="bg-white border border-gray-200/85 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mt-12">
          
          {/* Time-Sensitive Notice Banner */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 sm:p-8 mb-16 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] flex-shrink-0 mt-1">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2">Important Verification Note</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Because UN procedures and deadlines can change, time-sensitive information (such as the annual 1 June application window) should always be verified against the current official source before a live submission.
              </p>
            </div>
          </div>

          {/* What CaritaEducatrice Can Help With Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center sm:text-left">
              What CaritaEducatrice Can Help With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpAreas.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-[#FAF7F2] border border-gray-200/70 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-md">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0F5C4A]/10 flex items-center justify-center text-[#0F5C4A] mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1E2A38] mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Process Grid */}
          <div className="mb-16 bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-8 text-center">
              Our Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-xs relative">
                  <span className="text-2xl font-black text-[#0F5C4A]/30 block mb-2">{step.number}</span>
                  <h4 className="text-base font-bold text-[#1E2A38] mb-1">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who This Is For & Why CaritaEducatrice Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-stretch">
            
            {/* Who This Is For */}
            <div className="lg:col-span-6 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0F5C4A]" />
                  Who This Is For
                </h3>
                <div className="space-y-3 mt-6">
                  {targetAudiences.map((audience, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800 bg-[#FAF7F2] px-4 py-3 rounded-xl border border-gray-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0F5C4A] flex-shrink-0" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why CaritaEducatrice */}
            <div className="lg:col-span-6 bg-[#0F5C4A] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg text-[#C9A227]">
                  Expertise & Rigor
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">Why CaritaEducatrice?</h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed mb-6">
                  CaritaEducatrice’s UN consultancy draws on the same sourced and researched practice used in our UN engagement training.
                </p>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  The aim is not simply to complete paperwork, but to help an organisation understand the process and prepare its application carefully.
                </p>
              </div>
            </div>

          </div>

          {/* Begin With a Free Discovery Call Section */}
          <div className="bg-[#FAF7F2] border border-gray-200/70 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Begin With a Free Discovery Call</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us about your organisation and why you are considering ECOSOC consultative status. CaritaEducatrice will assess your situation and explain honestly what support may be appropriate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/book-consultation" 
                className="inline-flex items-center gap-3 bg-[#0F5C4A] hover:bg-[#0c493a] text-white font-medium px-8 py-4 rounded-2xl shadow-md transition-all text-sm sm:text-base"
              >
                Book a Free Discovery Call
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}