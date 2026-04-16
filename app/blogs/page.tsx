import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogs } from "@/data/index";

export const metadata: Metadata = {
  title: "Health Blog | Endocrinology & Diabetes Education | Dr. Sandeep K. Sahu",
  description:
    "Expert articles on diabetes, thyroid health, PCOS, obesity and hormonal disorders by Dr. Sandeep K. Sahu — Endocrinologist in Cuttack.",
};

const categories = ["All", "Diabetes", "Thyroid", "PCOS", "Obesity", "General"];

const categoryColors: Record<string, string> = {
  Diabetes: "bg-primary-100 text-primary-700",
  Thyroid: "bg-slate-200 text-slate-800",
  PCOS: "bg-accent-100 text-accent-700",
  Obesity: "bg-primary-50 text-primary-800",
  General: "bg-slate-100 text-slate-700",
};

export default function BlogsPage() {
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured || b.slug !== featured?.slug);

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
                <BookOpen size={13} />
                Health Education
              </div>
              <h1 className="font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                Health &amp; Wellness Blog
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                Evidence-based articles on endocrinology, metabolism, and living well with chronic hormonal conditions.
              </p>
            </div>
            {/* Right: image */}
            <div className="page-hero-image">
              <div className="page-hero-image-glow" />
              <img
                src="/images/hero-blogs.jpg"
                alt="Health & Wellness Blog — Dr. Sandeep K. Sahu"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-14">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-5">
                Featured Article
              </h2>
              <Link
                href={`/blogs/${featured.slug}`}
                className="card p-0 overflow-hidden flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 h-56 md:h-auto bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center relative overflow-hidden shrink-0">
                  <img src="/images/hero-blogs.jpg" alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  <span className={`absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md ${categoryColors[featured.category] || "bg-white/90 text-slate-700"}`}>
                    {featured.category}
                  </span>
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(featured.date).toLocaleDateString("en-IN", {
                        day: "numeric", month: "long", year: "numeric"
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary-600 transition-colors leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* All Posts Grid */}
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="blog-card group">
                <div className="h-44 bg-gradient-to-br from-slate-50 to-primary-50 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/hero-patient.png" alt={blog.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-40 mix-blend-multiply" />
                  <span className={`absolute top-3 left-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md ${categoryColors[blog.category] || "bg-white/90 text-slate-700"}`}>
                    {blog.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span>{new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 font-heading text-base leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
