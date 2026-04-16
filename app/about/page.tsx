import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap, Award, Heart, CheckCircle, Stethoscope,
  BookOpen, Calendar, ArrowRight, Quote
} from "lucide-react";
import { doctor } from "@/data/doctor";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Dr. Sandeep K. Sahu – DM Endocrinologist, Cuttack",
  description:
    "Learn about Dr. Sandeep K. Sahu's qualifications (MBBS, MD, DM Endocrinology), expertise, and philosophy of patient care at SAI SHREE HEALTH CARE, Cuttack.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="page-hero-split">
            {/* Left: text */}
            <div className="page-hero-text">
              <div className="section-tag w-fit mb-5">
                <Stethoscope size={13} />
                About the Doctor
              </div>
              <h1 className="font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                {doctor.name}
              </h1>
              <p className="text-primary-600 text-lg font-semibold mb-4">
                {doctor.qualifications} • {doctor.title}
              </p>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                {doctor.bio}
              </p>
            </div>
            {/* Right: image */}
            <div className="page-hero-image">
              <div className="page-hero-image-glow" />
              <img
                src="/images/hero-about.png"
                alt="Dr. Sandeep K. Sahu — Endocrinologist Cuttack"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Image col */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-100 to-primary-50 max-w-sm mx-auto lg:ml-auto lg:mr-0 shadow-lg group">
                <Image
                  src="/images/about-doctor.png"
                  alt="Dr. Sandeep K. Sahu"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Philosophy quote card */}
              <div className="mt-6 bg-primary-600 rounded-2xl p-6 text-white">
                <Quote size={20} className="text-primary-300 mb-3" />
                <p className="italic text-base leading-relaxed font-heading">
                  "{doctor.philosophy}"
                </p>
                <p className="text-primary-200 text-sm mt-3 font-semibold">
                  — {doctor.name}
                </p>
              </div>
            </div>

            {/* Content col */}
            <div className="order-2 lg:order-1">
              <div className="heading-line" />
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Background &amp; Biography
              </h2>

              <div className="space-y-5 mb-10">
                {doctor.fullBio.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {doctor.stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-3xl font-bold text-primary-600 font-heading">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto w-fit">
              <GraduationCap size={13} />
              Education &amp; Training
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              Academic Journey
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {doctor.achievements.map((ach, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card p-5 ml-2">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-slate-800 font-heading">{ach.title}</h3>
                    <span className="text-xs bg-primary-50 text-primary-600 font-bold px-2.5 py-1 rounded-full shrink-0">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-primary-600 text-sm font-medium mb-1">{ach.institution}</p>
                  <p className="text-slate-500 text-sm">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto w-fit">
              <Award size={13} />
              Areas of Expertise
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              What We Treat
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto mb-10">
            {doctor.expertise.map((item) => (
              <span key={item} className="expertise-badge text-base px-5 py-2.5">
                <CheckCircle size={14} />
                {item}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary inline-flex">
              <BookOpen size={16} />
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag mx-auto w-fit mb-4">
            <Heart size={13} />
            Our Mission
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
            Committed to Your Long-Term Health
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            At SAI SHREE HEALTH CARE, our mission is to make expert endocrine care accessible to every patient in Cuttack and the surrounding regions. We believe that no one should suffer through undiagnosed hormonal conditions when effective treatments exist.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every consultation with Dr. Sahu is an investment in your long-term quality of life. Our goal isn't just to prescribe medication — it's to educate, empower, and partner with you throughout your health journey.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
