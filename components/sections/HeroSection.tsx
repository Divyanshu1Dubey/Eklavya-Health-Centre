"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Star, Award, CheckCircle, Users } from "lucide-react";
import { doctor } from "@/data/doctor";

const expertisePills = [
  "Diabetes", "Thyroid", "PCOS", "Obesity", "Growth Disorders", "Metabolism"
];

export default function HeroSection() {
  return (
    <section className="hero-portfolio lg:min-h-screen flex items-start lg:items-center relative overflow-hidden">
      {/* Subtle background accents — very soft, no heavy gradients */}
      <div className="hero-bg-accent hero-bg-accent--top" />
      <div className="hero-bg-accent hero-bg-accent--bottom" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start lg:items-center lg:min-h-[calc(100vh-80px)] pt-2 pb-16 lg:pt-0 lg:pb-0">

          {/* ─── LEFT: Content ─── */}
          <div className="order-1 flex flex-col justify-center">
            {/* Trust Badge */}
            <div className="hero-trust-badge">
              <Award size={12} />
              DM Endocrinology • S.C.B Medical College, Cuttack
            </div>

            {/* Heading */}
            <h1 className="hero-heading">
              Expert Care for{" "}
              <span className="gradient-text">Hormonal</span>{" "}
              &amp; Metabolic Health
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              &ldquo;{doctor.tagline}&rdquo;
            </p>

            <p className="hero-description">
              <strong className="text-slate-800">{doctor.name}</strong> brings over a decade of specialized endocrinological expertise to patients in Cuttack and across Odisha. From diabetes to thyroid disorders, we provide evidence-based, compassionate care.
            </p>

            {/* Expertise Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {expertisePills.map((item) => (
                <span key={item} className="expertise-badge">
                  <CheckCircle size={12} />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
              >
                <Calendar size={17} />
                Book Appointment
              </a>
              <a href={`tel:${doctor.phone}`} className="btn-secondary">
                <Phone size={17} />
                {doctor.phone}
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {["PM", "RM", "SP"].map((init) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-700"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">5000+ patients trust Dr. Sahu</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for appointments
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Portfolio Doctor Image ─── */}
          <div className="order-2 flex justify-center lg:justify-end mt-8 lg:mt-0 lg:-mt-24">
            <div className="hero-image-wrapper">
              {/* Soft decorative glow behind doctor */}
              <div className="hero-image-glow" />

              {/* Doctor image */}
              <div className="hero-image-container">
                <Image
                  src="/images/home-hero.png"
                  alt={`${doctor.name} – Endocrinologist in Cuttack`}
                  width={600}
                  height={720}
                  priority
                  className="hero-doctor-img"
                />
              </div>

              {/* Floating rating badge — minimal, non-card */}
              <div className="hero-floating-badge hero-floating-badge--rating animate-float">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="hero-badge-value">4.9</span>
                <span className="hero-badge-label">Rating</span>
              </div>

              {/* Floating experience badge */}
              <div className="hero-floating-badge hero-floating-badge--experience animate-float-reverse">
                <div className="hero-badge-icon">
                  <Users size={14} />
                </div>
                <div>
                  <span className="hero-badge-value">10+</span>
                  <span className="hero-badge-label">Years Exp.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clinic Info Bar */}
        <div className="hero-clinic-bar">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-slate-200">
            <div className="flex items-center gap-3 sm:pr-6">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Clinic</p>
                <p className="text-sm font-semibold text-slate-800">{doctor.clinicName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:px-6">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-800">Mangalabag, Cuttack</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:pl-6">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-600">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Consultation Hours</p>
                <p className="text-sm font-semibold text-slate-800">Mon–Sat: 10AM–8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
