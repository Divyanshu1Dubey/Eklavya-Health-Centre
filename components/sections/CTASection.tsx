import Link from "next/link";
import { Phone, Calendar, MapPin } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-animated" 
        style={{background: 'linear-gradient(-45deg, #10395E 0%, #0BA898 50%, #10395E 100%)'}} 
      />
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ctadots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctadots)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-heading">
          Start Your Journey to Better Health
        </h2>
        <p className="text-blue-100 text-xl mb-3 font-heading italic">
          "{doctor.tagline}"
        </p>
        <p className="text-blue-200 text-base mb-10 max-w-2xl mx-auto">
          Don't wait for symptoms to worsen. Early diagnosis and the right treatment can dramatically improve your quality of life. Book a consultation with Dr. Sahu today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-base hover:bg-[#20bd5a]"
          >
            <Calendar size={18} />
            Book an Appointment
          </a>
          <a
            href={`tel:${doctor.phone}`}
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full transition-all border border-white/30 text-base"
          >
            <Phone size={18} />
            {doctor.phone}
          </a>
        </div>

        {/* Clinic address */}
        <div className="inline-flex items-center gap-2 text-blue-200 text-sm">
          <MapPin size={14} />
          {doctor.address}
        </div>
      </div>
    </section>
  );
}
