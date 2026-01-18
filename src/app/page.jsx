import LoginButton from "@/components/Button/LoginButton/LoginButton";
import FAQSection from "@/components/Homepage/FAQSection/FAQSection";
import NewsLetterSection from "@/components/Homepage/NewsLetterSection/NewsLetterSection";
import SpecialOfferSection from "@/components/Homepage/SpecialOfferSection/SpecialOfferSection";
import TestimonialSection from "@/components/Homepage/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <p>Hello Next js</p>
      <LoginButton />
      <TestimonialSection />
      <NewsLetterSection />
      <SpecialOfferSection />
      <FAQSection />
    </div>
  );
}
