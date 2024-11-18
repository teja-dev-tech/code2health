import {Navbar} from "../components/layout/Navbar"
import { HeroSection } from "@/components/layout/sections/hero"
import {BenefitsSection} from "@/components/layout/sections/benefits"
import { FeaturesSection } from "@/components/layout/sections/features"
import { ServicesSection } from "@/components/layout/sections/services"
import {TestimonialSection} from "@/components/layout/sections/testimonial"
import { CommunitySection } from "@/components/layout/sections/community"
import { PricingSection } from "@/components/layout/sections/pricing"
import { ContactSection } from "@/components/layout/sections/contact"
import { FAQSection } from "@/components/layout/sections/faq"
import { FooterSection } from "@/components/layout/sections/footer"
export const metadata = {
  title: "code2health",
  description: "code2health is a platform that helps you to track your health and fitness goals. It provides you with a personalized plan to help you achieve your goals. You can track your progress, set reminders, and get motivation to stay on track. code2health also provides you with a community of like-minded people who can support you on your journey to better health.",
  
}
export default function Home() {
  return (<>
     <Navbar />
    <HeroSection />
    <BenefitsSection />
    <FeaturesSection />
    <ServicesSection />
    <TestimonialSection />
    <CommunitySection />
    <PricingSection />
    <ContactSection />
      <FAQSection />
      <FooterSection />
  </>
  )
}

