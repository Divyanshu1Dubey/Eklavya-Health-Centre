"use client";
import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle, BookOpen, Activity, Search, Leaf, BarChart,
  Pill, Zap, ChevronDown, ChevronUp, Heart, ArrowRight, Phone
} from "lucide-react";
import { faqs, patientResources } from "@/data/index";
import { doctor } from "@/data/doctor";
import PatientResourcesGrid from "@/components/sections/PatientResourcesGrid";

const iconMap: Record<string, any> = {
  activity: Activity,
  search: Search,
  leaf: Leaf,
  "bar-chart": BarChart,
  pill: Pill,
  zap: Zap,
};

function FAQAccordion({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base">
          {faq.question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary-50 text-primary-600">
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function PatientCornerPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "General", "Appointments", "Diabetes", "Thyroid", "PCOS", "Pediatric"];

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

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
                <Heart size={13} />
                Patient Resources
              </div>
              <h1 className="font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                Patient Corner
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                Everything you need to prepare for your visit, understand your condition, and manage your health between appointments.
              </p>
            </div>
            {/* Right: image */}
            <div className="page-hero-image">
              <div className="page-hero-image-glow" />
              <img
                src="/images/hero-patient.png"
                alt="Patient care at SAI SHREE HEALTH CARE"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resources Grid component */}
      <PatientResourcesGrid resources={patientResources} />

      {/* FAQs */}
      <section className="py-20 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-tag mx-auto w-fit">
              <HelpCircle size={13} />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              Common Questions Answered
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <FAQAccordion key={i} faq={faq} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              No FAQs found for this category.
            </div>
          )}

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">
              Don't see your question here?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary inline-flex">
                Ask Dr. Sahu <ArrowRight size={15} />
              </Link>
              <a href={`tel:${doctor.phone}`} className="btn-secondary inline-flex">
                <Phone size={15} /> Call the Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for visit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                What to Bring to Your First Visit
              </h3>
              <ul className="space-y-3">
                {[
                  "Previous medical reports and blood test results",
                  "List of current medications with dosages",
                  "Referral letter from your GP (if any)",
                  "Glucometer with recent readings (for diabetic patients)",
                  "Details of symptoms including onset and duration",
                  "Family history of hormonal or metabolic conditions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                Before Blood Tests
              </h3>
              <ul className="space-y-3">
                {[
                  "Fast for 8–12 hours for fasting blood glucose and lipid tests",
                  "Avoid thyroid medication before TSH tests (consult doctor)",
                  "Drink water — staying hydrated is fine during fasting",
                  "Avoid heavy exercise the day before hormonal tests",
                  "Note any medications that may affect test results",
                  "Come for morning tests when possible for accurate results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
