import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { blogs } from "@/data/index";

export default function BlogPreview() {
  const featured = blogs.filter((b) => b.featured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-tag w-fit">
              <BookOpen size={13} />
              Health Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading">
              Latest Health Insights
            </h2>
          </div>
          <Link href="/blogs" className="btn-secondary shrink-0 self-start sm:self-auto">
            View All Blogs <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((blog, idx) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="blog-card group">
              {/* Image with hover effect */}
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                <span className="absolute top-4 left-4 bg-gradient-animated text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {new Date(blog.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 font-heading leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
