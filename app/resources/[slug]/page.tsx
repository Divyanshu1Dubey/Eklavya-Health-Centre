import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Printer, Bookmark, Activity } from "lucide-react";
import { patientResources } from "@/data/index";
import CTASection from "@/components/sections/CTASection";

// Enables static generation for fast loading
export function generateStaticParams() {
  return patientResources.map((resource) => ({
    slug: resource.slug,
  }));
}

// Generate dynamic SEO metadata
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resource = patientResources.find((r) => r.slug === params.slug);
  if (!resource) return {};

  return {
    title: `${resource.title} | Patient Resource | Dr. Sandeep K. Sahu`,
    description: resource.description,
  };
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = patientResources.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  // Gracefully fallback the hero image just in case
  const bgImage = resource.image || "/images/hero-patient.png";

  // Parse simple line breaks created in data structure
  const paragraphs = resource.content.split("\\n\\n").map(p => p.trim());

  return (
    <>
      <article className="bg-white selection:bg-primary-100 selection:text-primary-900">

        {/* Resource Hero */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-12 pt-32">
          {/* Background image optimized with next/image */}
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt={resource.title}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            {/* Double-layered gradient overlay to guarantee text readability against any image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10 opacity-90" />
            <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply opacity-50" />
          </div>

          {/* Hero Content positioned at the bottom relative to page scroll */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full animate-fade-in-up">
            <Link href="/patient-corner" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
              <ArrowLeft size={16} /> Back to Resources
            </Link>

            <div className="mb-6 flex gap-3 items-center">
              <span className="px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-extrabold border border-white/30 uppercase tracking-widest shadow-sm">
                {resource.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight mb-6 drop-shadow-lg">
              {resource.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-medium">
              {resource.description}
            </p>
          </div>
        </section>

        {/* Action bar sticky wrapper */}
        <div className="border-b border-slate-100 bg-slate-50 sticky top-[72px] lg:top-[88px] z-40 transition-shadow hidden sm:block">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between text-sm text-slate-500 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-6">
              <span>Dr. Sandeep K. Sahu</span>
              <span className="text-slate-300">•</span>
              <span>Reviewed: Clinical Guide</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-primary-600 transition-colors"><Share2 size={16} /> Share</button>
              <button className="flex items-center gap-2 hover:text-primary-600 transition-colors hidden md:flex"><Printer size={16} /> Print</button>
              <button className="flex items-center gap-2 hover:text-primary-600 transition-colors"><Bookmark size={16} /> Save</button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">

            {/* Automatically rendered text blocks */}
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-a:text-primary-600">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed md:leading-loose mb-8">
                  {p}
                </p>
              ))}
            </div>

            {/* Key Takeaways UI Box */}
            <div className="my-16 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 font-heading tracking-tight">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center text-primary-600 shadow-sm">
                    <Activity size={24} />
                  </div>
                  Key Care Fundamentals
                </h3>
                <ul className="space-y-5 text-slate-700 font-medium">
                  <li className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    <span className="leading-relaxed">Always follow your prescribed plan strictly. Consistency is the most important factor in endocrinological and metabolic management.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                    <span className="leading-relaxed">Diet and exercise play transformative, foundational roles in determining your long-term success parameters against chronic conditions.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                    <span className="leading-relaxed">Aways maintain an updated logbook of your symptoms, numbers, and physical patterns to discuss in future consultations.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </article>

      <CTASection />
    </>
  );
}
