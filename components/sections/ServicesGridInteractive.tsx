"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Activity, Zap, Heart, TrendingDown, BarChart2, Cpu, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, any> = {
  activity: Activity,
  zap: Zap,
  heart: Heart,
  "trending-down": TrendingDown,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
};

export default function ServicesGridInteractive({ services }: { services: any[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" ref={containerRef}>
      {/* Ambient Moving Background */}
      <div 
        className="absolute inset-0 bg-gradient-animated opacity-60 pointer-events-none"
        style={{ background: "linear-gradient(-45deg, #F4FAFC 0%, #E8F4FB 50%, #F4FAFC 100%)" }} 
      />
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accent-200 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-min">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Activity;
            const isExpanded = expandedId === service.slug;

            // Uneven, dynamic grid sizing rules
            let gridClass = "md:col-span-1";
            let isFeatured = false;
            
            if (index === 0) {
              gridClass = "md:col-span-2 lg:col-span-2 lg:row-span-2"; // Featured top-left huge card
              isFeatured = true;
            } else if (index === 4) {
              gridClass = "md:col-span-2 lg:col-span-2"; // Wider card near bottom
            }

            return (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={!isExpanded ? { y: -6, scale: 1.015 } : {}}
                onClick={() => setExpandedId(isExpanded ? null : service.slug)}
                className={`group relative backdrop-blur-xl border rounded-3xl overflow-hidden cursor-pointer shadow-blue hover:shadow-2xl transition-all duration-500 ${gridClass} ${
                  isFeatured 
                    ? "bg-gradient-to-br from-white to-primary-50/60 border-primary-100" 
                    : "bg-white/70 border-white/80"
                }`}
              >
                {/* Inner Glow */}
                <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${isFeatured ? 'bg-gradient-to-br from-primary-100/40 to-transparent' : 'bg-gradient-to-br from-primary-50/50 to-transparent'}`} />
                
                <motion.div layout className={`relative z-10 flex flex-col h-full ${isFeatured ? 'p-8 lg:p-12' : 'p-6 lg:p-8'}`}>
                  
                  {/* Top content row flex */}
                  <div className={`flex items-start gap-4 lg:gap-6 ${isFeatured ? 'mb-6' : 'mb-4'}`}>
                    {/* Icon Box */}
                    <motion.div 
                      layout
                      className={`rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm ${
                        isFeatured ? 'w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-md' : 'w-14 h-14 bg-white border border-slate-100 text-primary-600 group-hover:bg-primary-50 group-hover:border-primary-100'
                      }`}
                    >
                      <Icon size={isFeatured ? 32 : 24} />
                    </motion.div>
                    
                    <div className="flex-1 mt-1">
                      <motion.h2 layout className={`font-bold text-slate-800 font-heading mb-2 leading-tight ${isFeatured ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
                        {service.title}
                      </motion.h2>
                      {isFeatured && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-bold uppercase tracking-wider mb-2 border border-accent-100">
                          Featured Speciality
                        </div>
                      )}
                    </div>
                  </div>

                  <motion.p layout className={`text-slate-600 leading-relaxed ${isFeatured ? 'text-lg lg:text-xl max-w-2xl' : 'text-sm'}`}>
                    {service.shortDescription}
                  </motion.p>
                  
                  {/* Default collapsed symptoms pills */}
                  <AnimatePresence mode="popLayout">
                    {!isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`flex flex-wrap gap-2 mt-auto pt-6`}
                      >
                        {service.symptoms.slice(0, isFeatured ? 5 : 2).map((sym: string) => (
                          <span key={sym} className={`px-3 py-1.5 rounded-full border bg-white/50 text-slate-600 ${isFeatured ? 'text-sm border-primary-100' : 'text-xs border-slate-200'}`}>
                            {sym}
                          </span>
                        ))}
                        {service.symptoms.length > (isFeatured ? 5 : 2) && (
                          <span className={`flex items-center gap-1 font-semibold px-3 py-1.5 rounded-full border border-primary-100 bg-primary-50 text-primary-600 ${isFeatured ? 'text-sm' : 'text-xs'} group-hover:bg-primary-600 group-hover:text-white transition-colors`}>
                            +{service.symptoms.length - (isFeatured ? 5 : 2)} details <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded Content Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-slate-200/60">
                          <h4 className="font-bold text-slate-800 font-heading mb-4 flex items-center gap-2">
                            <Activity size={16} className="text-primary-600" /> Complete Treatment Scope
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                            {service.symptoms.map((sym: string) => (
                              <div key={sym} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={16} className="text-accent-500 shrink-0 mt-0.5" />
                                <span>{sym}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Link 
                            href={`/services/${service.slug}`}
                            onClick={(e) => e.stopPropagation()} // prevent collapsing when clicking link
                            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-animated text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-blue hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/30 active:scale-95"
                            style={{ background: 'linear-gradient(-45deg, #1B6CA8 0%, #0BA898 50%, #1B6CA8 100%)' }}
                          >
                            Explore Comprehensive Deep-Dive
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
