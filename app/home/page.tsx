import Hero from "./hero";
import TrustStatsBar from "./stat";
import WhatWeDo from "./whatwedo";
import WhoWeServe from "./whoweserve";
import CourseCategories from "./coursecategory";
import FeaturedCourses from "./featurecourse";
import WhyLearnWithUs from "./whylearnwithus";
import TheCaritaApproach from "./approch";
import HowItWorks from "./whoweserve";
import ConsultancySection from "./consultancy";
import OnlineLearning from "./onlinelearning";
import ImpactCredibility from "./imapctcredibility";
import TestimonialSection from "./testimonials";
import ResourcesHub from "./resourceshub";
import AboutCarita from "./about";
import FAQSection from "./faq";
import ContactSection from "./contact";
import FinalCTA from "./cat";  


export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStatsBar />
      <WhatWeDo />
      <WhoWeServe />
      <CourseCategories />
      <FeaturedCourses />
      <WhyLearnWithUs />
      <TheCaritaApproach />
      <HowItWorks />
      <ConsultancySection />
      <OnlineLearning />
      <ImpactCredibility />
      <TestimonialSection />
      <ResourcesHub />
      <AboutCarita />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}