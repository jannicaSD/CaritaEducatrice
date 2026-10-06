import Link from "next/link";
import {
  Mail,
  Phone,
  Calendar,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const steps = [
    {
      step: "01",
      title: "Tell us about your organisation",
      description:
        "We'll learn about your work, goals and current challenge.",
    },
    {
      step: "02",
      title: "Identify the gap",
      description:
        "We'll discuss where additional training, strategy or practical support could help.",
    },
    {
      step: "03",
      title: "Identify the next step",
      description:
        "We'll recommend an appropriate course, consultancy scope, or honestly tell you if CaritaEducatrice isn't the right fit.",
    },
  ];

  return (
    <section
      id="contact"
      className="border-b border-gray-200/60 bg-[#FAF7F2] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0F5C4A]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#0F5C4A] sm:text-sm">
            <Calendar className="h-4 w-4 text-[#0F5C4A]" />
            Get in Touch
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E2A38] sm:text-4xl lg:text-5xl">
            Let&apos;s Find Where CaritaEducatrice Can Work for You
          </h2>

          <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            Every relationship with CaritaEducatrice starts with a conversation. Book a
            free, no-obligation discovery call to discuss your organisation,
            project or funding challenge.
          </p>
        </div>

        {/* 3-Step Discovery Process */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col justify-between rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#0F5C4A]/40 hover:shadow-xl"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tight text-[#0F5C4A] transition-colors group-hover:text-[#C9A227]">
                    {item.step}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-[#FAF7F2] text-[#0F5C4A]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#1E2A38] transition-colors group-hover:text-[#0F5C4A]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6 text-xs font-semibold text-gray-400">
                Discovery Process Step {item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information & Action Card */}
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1E2A38]">
              Direct Contact &amp; Delivery
            </h3>

            <div className="space-y-4 text-sm text-gray-600 sm:text-base">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email
                  </span>

                  <a
                    href="mailto:info@caritaeducatrice.org"
                    className="font-medium text-[#1E2A38] transition-colors hover:text-[#0F5C4A]"
                  >
                    info@caritaeducatrice.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Phone
                  </span>

                  <a
                    href="tel:+440000000000"
                    className="font-medium text-[#1E2A38] transition-colors hover:text-[#0F5C4A]"
                  >
                    [ADD PHONE]
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A]">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Location &amp; Delivery
                  </span>

                  <p className="font-medium text-[#1E2A38]">
                    Based in: United Kingdom, with an ongoing presence in
                    Pakistan
                  </p>
                </div>
              </div>

              {/* Formats */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F5C4A]/10 text-[#0F5C4A]">
                  <Globe className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Formats
                  </span>

                  <p className="font-medium text-[#1E2A38]">
                    Delivery: Online worldwide · Face-to-face UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200/80 bg-[#FAF7F2] p-8 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5C4A] text-white shadow-md">
              <Calendar className="h-7 w-7" />
            </div>

            <h4 className="mb-2 text-xl font-bold text-[#1E2A38]">
              Schedule Your Session
            </h4>

            <p className="mb-6 text-sm text-gray-600">
              Pick a time that suits your diary for a focused 30-minute
              introductory chat.
            </p>

            <Link
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0F5C4A] px-8 py-3.5 font-bold text-white shadow-md transition-all duration-200 hover:bg-[#C9A227] hover:text-[#1E2A38]"
            >
              <span>Book a Call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}