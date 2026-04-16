import Link from "next/link";
import { ArrowRight, Activity, Zap, Heart, TrendingDown, BarChart2, Cpu } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, any> = {
  activity: Activity,
  zap: Zap,
  heart: Heart,
  "trending-down": TrendingDown,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mx-auto w-fit">
            <Activity size={13} />
            Our Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
            Comprehensive Endocrine Care
          </h2>
          <p className="text-slate-500 text-lg">
            From diabetes management to complex hormonal disorders — we provide expert, evidence-based treatment for the full spectrum of endocrine conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="relative overflow-hidden group rounded-3xl h-[360px] flex items-end shadow-lg"
              >
                {/* Background Image */}
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-primary-900/50 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content relative wrapper */}
                <div className="relative z-10 w-full p-6 text-left">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] shrink-0 transition-colors group-hover:bg-primary-500/80 group-hover:border-primary-400/50">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading drop-shadow-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hidden description & link (Slide Reveal) */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-[max-height] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="pt-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100">
                      <p className="text-slate-200 text-sm leading-relaxed mb-4 drop-shadow">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-wider">
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-secondary inline-flex">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
