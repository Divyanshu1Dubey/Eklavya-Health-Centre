"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, X, ArrowUp } from "lucide-react";
import { doctor } from "@/data/doctor";

const WhatsAppIcon = ({ size = 30 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.452-4.437 9.885-9.885 9.885m8.413-18.286A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4 items-end">
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-500 hover:text-primary-600 hover:bg-white transition-all transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} strokeWidth={2.5} />
        </button>
      )}

      {/* Premium WhatsApp Booking */}
      <a
        href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] focus:outline-none z-50 group relative border border-[#25D366]/50"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap bg-slate-900/90 backdrop-blur-sm font-semibold tracking-wide text-white text-xs py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-white/10">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Now - always visible */}
      <a
        href={`tel:${doctor.phone}`}
        className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-teal transition-all hover:-translate-y-0.5 relative"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-40" />
        <Phone size={15} />
        <span>Call Now</span>
      </a>
    </div>
  );
}
