import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Best Endocrinologist in Cuttack | Dr. Sandeep K. Sahu",
  description: "Dr. Sandeep K. Sahu – DM Endocrinology specialist in Cuttack. Expert treatment for Diabetes, Thyroid, PCOS, Obesity & Hormonal disorders. Book now.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
