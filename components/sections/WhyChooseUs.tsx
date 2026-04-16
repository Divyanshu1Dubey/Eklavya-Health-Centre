"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Shield, UserCheck, FlaskConical, HeartHandshake, Calendar } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Patient-Centered Approach",
    description: "Every treatment plan is completely personalized to your unique history, lifestyle, and goals. We listen first, believing in treating the whole person — not just the disease or the symptoms.",
    featured: true,
  },
  {
    icon: Shield,
    title: "DM Qualified",
    description: "Super-specialist training from premier institutions ensures elite care.",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based",
    description: "Treatments grounded in the absolute latest clinical research guidelines.",
    featured: false,
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Care",
    description: "Building resilient patient relationships for consistent chronic management.",
    featured: false,
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" ref={containerRef}>
      {/* ─── Animated Ambient Background ─── */}
      <div 
        className="absolute inset-0 bg-gradient-animated opacity-40 pointer-events-none"
        style={{ background: "linear-gradient(-45deg, #F4FAFC 0%, #E8F4FB 50%, #F4FAFC 100%)" }} 
      />

      {/* Floating Ambient Blobs */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-10 md:-right-20 w-[400px] h-[400px] bg-primary-200 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent-200 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* ─── LEFT: Content & CTA ─── */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm mb-6 text-primary-600 text-sm font-bold tracking-wider uppercase">
                <Shield size={16} />
                Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-800 mb-6 font-heading leadingTight tracking-tight">
                Why Patients <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                   Trust Dr. Sahu
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                With a deep commitment to treating the cause rather than just the symptoms, our clinic offers world-class endocrinology care built around your specific needs.
              </p>
              
              <a
                href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-blue hover:-translate-y-1 hover:shadow-xl group"
                style={{ background: '#25D366' }}
              >
                <Calendar size={18} className="group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                Book Your Consultation
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT: Cards Layout ─── */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-6">
              
              {/* Featured Card */}
              {reasons.filter(r => r.featured).map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative backdrop-blur-xl bg-gradient-to-br from-white to-primary-50/50 border border-white rounded-[2rem] p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-primary-600/15 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md bg-gradient-to-br from-primary-600 to-accent-500 text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-800 mb-3 font-heading">
                          {reason.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Grid for Remaining Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {reasons.filter(r => !r.featured).map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + (0.1 * index), ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="group relative backdrop-blur-xl bg-white/70 border border-white/60 rounded-3xl p-6 lg:p-7 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-primary-600/10 transition-all duration-400 overflow-hidden flex flex-col"
                    >
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white border border-slate-100 text-primary-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-primary-100 group-hover:bg-primary-50">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2 font-heading leading-tight">
                          {reason.title}
                        </h3>
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
