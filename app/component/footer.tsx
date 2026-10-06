"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    courses: [
      { label: "All Courses", href: "/courses/allcourses" },
      { label: "Fundraising & Grant Writing", href: "/courses/flagshipcourse" },
      { label: "NGO Development", href: "/courses/ngomarketing" },
      { label: "Crowdfunding", href: "/courses/crowdfunding" },
      { label: "Un & Human-Rights Advocacy", href: "/courses/ecosoccourse" },
    ],
    consultancy: [
      { label: "Grant Writing Coaching", href: "/consultancy/grant-writing" },
      { label: "Fundraising Strategy", href: "/consultancy/strategy" },
      { label: "Campaign Design", href: "/consultancy/campaign-design" },
      { label: "Human-Rights Advocacy", href: "/consultancy/human-rights" },
      { label: "UN Accreditation", href: "/consultancy/un-accreditation" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Approach", href: "/about/our-approach" },
      { label: "Who We Serve", href: "/whoweserve" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: "https://facebook.com/caritaeducatrice", label: "Facebook" },
    { icon: X, href: "https://twitter.com/caritaeducatrice", label: "X (Twitter)" },
    { icon: ExternalLink, href: "https://linkedin.com/company/carita-educatrice", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1E2A38] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Newsletter Text */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Stay Updated with CaritaEducatrice
              </h3>
              <p className="text-gray-300 text-sm lg:text-base">
                Get the latest insights, course updates, and resources for NGO professionals.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#0F5C4A] transition-colors"
              />
              <button className="px-6 py-3 bg-[#0F5C4A] hover:bg-[#C9A227] text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-white">CaritaEducatrice</h2>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Expert training and consultancy for civil society organizations creating positive social change.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0F5C4A] flex items-center justify-center transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Courses</h3>
            <ul className="space-y-2">
              {links.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#0F5C4A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy Column */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Consultancy</h3>
            <ul className="space-y-2">
              {links.consultancy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#0F5C4A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#0F5C4A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@caritaeducatrice.org"
                className="flex items-start gap-3 text-gray-400 hover:text-[#0F5C4A] transition-colors group text-sm"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#0F5C4A]" />
                <span>info@caritaeducatrice.org</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>[Contact Number]</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>United Kingdom & Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} CaritaEducatrice. All rights reserved.</p>
              <p className="mt-2">
                Helping civil society organizations achieve their missions through expert training and consultancy.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 justify-center md:justify-end text-sm flex-wrap">
              <Link href="#" className="text-gray-400 hover:text-[#0F5C4A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0F5C4A] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0F5C4A] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
