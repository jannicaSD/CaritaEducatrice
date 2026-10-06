"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileSub = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F5C4A]">
              CaritaEducatrice
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-6">
            
            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("courses")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown("courses")}
                className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors"
              >
                Courses <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "courses" && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-100 shadow-xl rounded-xl p-4 py-3 grid gap-2 z-50">

                  {/* All Courses */}
                  <Link
                    href="/courses/allcourses"
                    className="text-sm font-semibold text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    All Courses
                  </Link>

                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Course Categories Mapped to Actual Folders */}
                  <Link
                    href="/courses/flagshipcourse"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    Fundraising & Grant Writing
                  </Link>

                  <Link
                    href="/courses/campaigncourse"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    Community & Events Fundraising
                  </Link>

                  <Link
                    href="/courses/crowdfunding"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    Crowdfunding
                  </Link>

                  <Link
                    href="/courses/ngomarketing"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    NGO & Nonprofit Development
                  </Link>

                  <Link
                    href="/courses/ecosoccourse"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    UN & Human-Rights Advocacy
                  </Link>

                  <Link
                    href="/courses/rightswriting"
                    className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg"
                  >
                    Pakistan & Social Justice
                  </Link>

                </div>
              )}
            </div>

            {/* Consultancy Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('consultancy')} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('consultancy')}
                className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors"
              >
                Consultancy <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'consultancy' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-100 shadow-xl rounded-xl p-4 py-3 grid gap-2 z-50">
                  <Link href="/consultancy/grant-writing" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Grant Writing & Funding Coaching</Link>
                  <Link href="/consultancy/strategy" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Fundraising Strategy & Team Building</Link>
                  <Link href="/consultancy/campaign-design" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Crowdfunding Campaign Design</Link>
                  <Link href="/consultancy/human-rights" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">UN & Human-Rights Advocacy Writing</Link>
                  <Link href="/consultancy/un-accreditation" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">UN Accreditation Support</Link>
                </div>
              )}
            </div>

            {/* Who We Serve Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('serve')} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('serve')}
                className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors"
              >
                Who We Serve <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'serve' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-xl rounded-xl p-4 py-3 grid gap-2 z-50">
                  <Link href="/whoweserve/ngo-charities" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">NGOs & Charities</Link>
                  <Link href="/whoweserve/trustees-boards" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Trustees & Boards</Link>
                  <Link href="/whoweserve/community-groups" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Community Groups</Link>
                  <Link href="/whoweserve/researchers-academics" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Researchers & Academics</Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 shadow-xl rounded-xl p-4 py-3 grid gap-2 z-50">
                  <Link href="/about/our-story" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Our Story</Link>
                  <Link href="/about/founder" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Founder (Jacob Daniel Gill)</Link>
                  <Link href="/about/why-carita" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Why CaritaEducatrice</Link>
                  <Link href="/about/our-approach" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Our Approach</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('resources')}
                className="flex items-center gap-1 text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors"
              >
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 shadow-xl rounded-xl p-4 py-3 grid gap-2 z-50">
                  <Link href="/resources/articles" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Articles & Guides</Link>
                  <Link href="/resources/templates" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Templates & Checklists</Link>
                  <Link href="/resources/directory" className="text-sm text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 p-2 rounded-lg">Human-Rights Directory</Link>
                </div>
              )}
            </div>

            <Link href="/faq" className="text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 rounded-lg transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="text-sm font-medium text-[#1E2A38] hover:text-[#0F5C4A] px-3 py-2 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#0F5C4A] hover:bg-[#C9A227] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E2A38] hover:text-[#0F5C4A] hover:bg-gray-50 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          
          {/* Mobile Courses Accordion */}
          <div>
            <button 
              onClick={() => toggleMobileSub('courses')} 
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-[#1E2A38]"
            >
              Courses <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'courses' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'courses' && (
              <div className="pl-4 grid gap-2 py-2 border-l-2 border-[#0F5C4A]/20 my-1">
                <Link href="/courses/allcourses" className="text-sm text-[#0F5C4A] font-semibold">All Courses</Link>
                <Link href="/courses/flagshipcourse" className="text-sm text-gray-600">Fundraising & Grant Writing</Link>
                <Link href="/courses/campaigncourse" className="text-sm text-gray-600">Community & Events Fundraising</Link>
                <Link href="/courses/crowdfunding" className="text-sm text-gray-600">Crowdfunding Series</Link>
                <Link href="/courses/ngomarketing" className="text-sm text-gray-600">NGO & Nonprofit Development</Link>
                <Link href="/courses/ecosoccourse" className="text-sm text-gray-600">UN & Human-Rights Advocacy</Link>
                <Link href="/courses/rightswriting" className="text-sm text-gray-600">Pakistan & Social Justice</Link>
              </div>
            )}
          </div>

          {/* Mobile Consultancy Accordion */}
          <div>
            <button 
              onClick={() => toggleMobileSub('consultancy')} 
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-[#1E2A38]"
            >
              Consultancy <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'consultancy' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'consultancy' && (
              <div className="pl-4 grid gap-2 py-2 border-l-2 border-[#0F5C4A]/20 my-1">
                <Link href="/consultancy/grant-writing" className="text-sm text-gray-600">Grant Writing Coaching</Link>
                <Link href="/consultancy/strategy" className="text-sm text-gray-600">Fundraising Strategy & Team Building</Link>
                <Link href="/consultancy/campaign-design" className="text-sm text-gray-600">Campaign Design</Link>
                <Link href="/consultancy/human-rights" className="text-sm text-gray-600">Human-Rights Advocacy</Link>
                <Link href="/consultancy/un-accreditation" className="text-sm text-gray-600">UN Accreditation Support</Link>
              </div>
            )}
          </div>

          {/* Mobile Who We Serve Accordion */}
          <div>
            <button 
              onClick={() => toggleMobileSub('serve')} 
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-[#1E2A38]"
            >
              Who We Serve <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'serve' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'serve' && (
              <div className="pl-4 grid gap-2 py-2 border-l-2 border-[#0F5C4A]/20 my-1">
                <Link href="/whoweserve/ngo-charities" className="text-sm text-gray-600">NGOs & Charities</Link>
                <Link href="/whoweserve/trustees-boards" className="text-sm text-gray-600">Trustees & Boards</Link>
                <Link href="/whoweserve/community-groups" className="text-sm text-gray-600">Community Groups</Link>
                <Link href="/whoweserve/researchers-academics" className="text-sm text-gray-600">Researchers & Academics</Link>
              </div>
            )}
          </div>

          {/* Mobile About Accordion */}
          <div>
            <button 
              onClick={() => toggleMobileSub('about')} 
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-[#1E2A38]"
            >
              About <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'about' && (
              <div className="pl-4 grid gap-2 py-2 border-l-2 border-[#0F5C4A]/20 my-1">
                <Link href="/about/our-story" className="text-sm text-gray-600">Our Story</Link>
                <Link href="/about/founder" className="text-sm text-gray-600">Founder</Link>
                <Link href="/about/why-carita" className="text-sm text-gray-600">Why CaritaEducatrice</Link>
                <Link href="/about/our-approach" className="text-sm text-gray-600">Our Approach</Link>
              </div>
            )}
          </div>

          {/* Mobile Resources Accordion */}
          <div>
            <button 
              onClick={() => toggleMobileSub('resources')} 
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-[#1E2A38]"
            >
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'resources' && (
              <div className="pl-4 grid gap-2 py-2 border-l-2 border-[#0F5C4A]/20 my-1">
                <Link href="/resources/articles" className="text-sm text-gray-600">Articles & Guides</Link>
                <Link href="/resources/templates" className="text-sm text-gray-600">Templates & Checklists</Link>
                <Link href="/resources/directory" className="text-sm text-gray-600">Human-Rights Directory</Link>
              </div>
            )}
          </div>

          <div className="py-2">
            <Link href="/faq" className="block py-2 text-base font-medium text-[#1E2A38]">FAQ</Link>
            <Link href="/contact" className="block py-2 text-base font-medium text-[#1E2A38]">Contact</Link>
          </div>

          <div className="pt-4">
            <Link 
              href="/contact" 
              className="block w-full text-center bg-[#0F5C4A] hover:bg-[#C9A227] text-white font-medium py-3 rounded-xl shadow-sm transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

        </div> 
      )}
    </header>
  );
}