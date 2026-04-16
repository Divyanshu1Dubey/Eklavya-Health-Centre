import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Zap, Heart, TrendingDown, BarChart2, Cpu, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import ServicesGridInteractive from "@/components/sections/ServicesGridInteractive";

export const metadata: Metadata = {
  title: "Endocrinology Services in Cuttack | Dr. Sandeep K. Sahu",
  description:
    "Comprehensive endocrine services: Diabetes, Thyroid, PCOS, Obesity, Growth Disorders & Metabolic conditions. Expert care by Dr. Sandeep K. Sahu in Cuttack.",
};

const iconMap: Record<string, any> = {
  activity: Activity,
  zap: Zap,
  heart: Heart,
  "trending-down": TrendingDown,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="page-hero-split">
            {/* Left: text */}
            <div className="page-hero-text">
              <div className="section-tag w-fit mb-5">
                <Activity size={13} />
                What We Treat
              </div>
              <h1 className="font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                Comprehensive Endocrine Services
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                From common conditions like diabetes and thyroid disorders to complex hormonal imbalances — expert, personalized care for the full spectrum of endocrine health.
              </p>
            </div>
            {/* Right: image */}
            <div className="page-hero-image">
              <div className="page-hero-image-glow" />
              <img
                src="/images/hero-services.jpg"
                alt="Endocrinology Services — Dr. Sandeep K. Sahu"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Interactive Bento) */}
      <ServicesGridInteractive services={services} />

      {/* Why early diagnosis matters */}
      <section className="py-16 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
            Early Diagnosis Makes All the Difference
          </h2>
          <p className="text-slate-600 mb-8">
            Hormonal disorders often develop slowly and silently. Many patients live with symptoms for years before receiving the right diagnosis. At SAI SHREE HEALTH CARE, we use advanced diagnostics to identify conditions early — when they are easiest to treat and manage.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Earlier Treatment", "Better Outcomes", "Fewer Complications", "Quality of Life"].map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle size={18} className="text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-slate-700 text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
