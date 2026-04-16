"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Activity, Search, Leaf, BarChart, Pill, Zap, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  activity: Activity,
  search: Search,
  leaf: Leaf,
  "bar-chart": BarChart,
  pill: Pill,
  zap: Zap,
};

export default function PatientResourcesGrid({ resources }: { resources: any[] }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" ref={containerRef}>
      {/* Subtle Background Motion */}
      <div
        className="absolute inset-0 bg-gradient-animated opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(-45deg, #F4FAFC 0%, #E8F4FB 50%, #F4FAFC 100%)" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary-200 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mx-auto w-fit mb-4">
              <Activity size={13} />
              Health Resources
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Resources</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Curated guides and information to help you better understand and manage your endocrine condition.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {resources.map((resource, index) => {
            const Icon = iconMap[resource.icon] || Activity;
            const isFeatured = index === 0;
            const bgImage = resource.image || "/images/hero-patient.png";

            // Apply large layout purely to the first item (Featured)
            const gridClass = isFeatured
              ? "md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[460px] lg:min-h-[500px]"
              : "md:col-span-1 min-h-[300px] lg:min-h-[340px]";

            return (
              <Link key={resource.title} href={`/resources/${resource.slug}`} className={`group relative block overflow-hidden rounded-3xl cursor-pointer ${gridClass}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative"
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={bgImage}
                      alt={resource.title}
                      fill
                      loading={isFeatured ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-primary-900/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Pill (Top Left) */}
                  <div className="absolute top-6 left-6 z-10 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md bg-white/20 border border-white/30 text-white flex items-center gap-1.5">
                    <Icon size={14} className="text-accent-400" />
                    {resource.category}
                  </div>

                  {/* Content (Bottom Anchored) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 z-10 flex flex-col justify-end transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                    <h3 className={`font-extrabold text-white font-heading mb-2 leading-tight drop-shadow-sm ${isFeatured ? 'text-2xl lg:text-4xl' : 'text-xl'}`}>
                      {resource.title}
                    </h3>

                    {/* Excerpt sliding up smoothly */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-[max-height] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <div className="pt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <p className={`text-slate-200 leading-relaxed mb-4 ${isFeatured ? 'text-base lg:text-lg max-w-xl' : 'text-sm'}`}>
                          {resource.description}
                        </p>

                        <div className="flex items-center gap-2 text-accent-400 font-bold text-sm tracking-wider uppercase">
                          Read More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Tip Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/80 backdrop-blur-md border border-primary-100 rounded-3xl p-6 lg:p-8 text-center max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-slate-600 text-base">
            <strong className="text-primary-700">Need personalized guidance?</strong> These resources are general guides. For advice specific to your condition and medication, please{" "}
            <a 
              href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:underline"
            >
              book a consultation
            </a>{" "}
            with Dr. Sahu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
