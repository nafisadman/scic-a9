import LoginButton from "@/components/Button/LoginButton/LoginButton";
import FAQSection from "@/components/Homepage/FAQSection/FAQSection";
import NewsLetterSection from "@/components/Homepage/NewsLetterSection/NewsLetterSection";
import SpecialOfferSection from "@/components/Homepage/SpecialOfferSection/SpecialOfferSection";
import SectionsHeaderWithStats from "@/components/Homepage/SectionsHeaderWithStats/SectionsHeaderWithStats";
import TestimonialSection from "@/components/Homepage/TestimonialSection/TestimonialSection";
import StatsSection from "@/components/Homepage/StatsSection/StatsSection";
import TrustedLogos from "@/components/Homepage/TrustedLogos/TrustedLogos";
import ContactSection from "@/components/Homepage/ContactSection/ContactSection";

export default function Home() {
  return (
    <div>
      <SectionsHeaderWithStats />
      <TrustedLogos />
      <StatsSection />
      <TestimonialSection />
      <NewsLetterSection />
      <FAQSection />
      {/* <ContactSection /> */}
    </div>
  );
}
