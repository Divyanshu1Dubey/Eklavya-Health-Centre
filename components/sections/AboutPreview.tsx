import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Heart } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-100 to-primary-50 max-w-md mx-auto lg:mx-0 shadow-lg group">
              <Image
                src="/images/home-about.png"
                alt="Dr. Sandeep K. Sahu"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating qualification card */}
            <div className="absolute bottom-8 -right-4 lg:right-4 glass rounded-2xl p-5 shadow-xl max-w-56">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 font-heading">Qualifications</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    MBBS, MD, DM (Endocrinology)<br />
                    S.C.B Medical College
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="section-tag">
              <Heart size={13} />
              About the Doctor
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">
              Meet{" "}
              <span className="gradient-text">{doctor.name}</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              {doctor.bio}
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Dr. Sahu's patient-centered philosophy — <em className="text-primary-600 font-medium">"treat the person, not just the disease"</em> — has earned him the trust of thousands of patients across Odisha.
            </p>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {doctor.expertise.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  {item}
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-flex">
              Learn More About Dr. Sahu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
