import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/index";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <Star size={13} />
            Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 text-lg">
            Real stories from real patients whose lives have been transformed through expert endocrine care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Patient info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.condition} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-card border border-slate-100">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-slate-900">4.9 / 5.0</p>
              <p className="text-sm text-slate-500">Based on 200+ patient reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
