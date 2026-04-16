"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Award, Users, TrendingUp, Building2, HeartPulse } from "lucide-react";
import { doctor } from "@/data/doctor";

const iconMap: Record<string, any> = {
  award: Award,
  users: Users,
  "trending-up": TrendingUp,
  building: Building2,
};

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-slate-50"
    >
      {/* ─── Animated Premium Loop Background ─── */}
      <div 
        className="absolute inset-0 bg-gradient-animated opacity-70 pointer-events-none"
        style={{
           background: "linear-gradient(-45deg, #F4FAFC 0%, #E0F7F5 50%, #F4FAFC 100%)" 
        }} 
      />

      {/* Decorative Orbs for Visual Depth */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-[400px] h-[400px] bg-primary-100/60 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-[5%] w-[500px] h-[500px] bg-accent-100/50 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center mb-16 flex flex-col items-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-sm mb-6 text-primary-700 text-sm font-bold tracking-wider uppercase"
           >
             <HeartPulse size={16} className="text-accent-500 animate-pulse" />
             Trusted Care Backed by Experience
           </motion.div>
        </div>

        {/* ─── Glass Responsive Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctor.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Award;
            
            // Extract numeric and text pieces for react-countup
            const numberMatch = stat.value.match(/\d+/);
            const prefix = stat.value.split(/\d+/)[0];
            const number = numberMatch ? parseInt(numberMatch[0], 10) : 0;
            const suffix = stat.value.split(/\d+/)[1] || "";

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.1 * index, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-blue hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Inner hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Subtle Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-500 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-accent-500 transition-colors duration-300" />
                  </div>
                  
                  {/* CountUp Animation */}
                  <div className="flex items-baseline justify-center font-heading font-extrabold text-[2.75rem] text-slate-800 mb-2 leading-none">
                    {prefix}
                    {isInView ? (
                      <CountUp 
                        end={number} 
                        duration={2.5} 
                        useEasing={true}
                        separator="," 
                      />
                    ) : "0"}
                    <span className="text-primary-600">{suffix}</span>
                  </div>
                  
                  {/* Animated Separator */}
                  <div className="w-8 h-1 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full mb-4 group-hover:w-16 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-500" />
                  
                  <p className="text-slate-500 font-semibold text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
