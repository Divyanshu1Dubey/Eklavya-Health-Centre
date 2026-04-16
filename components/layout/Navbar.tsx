"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { doctor } from "@/data/doctor";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Patient Corner", href: "/patient-corner" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Spacer to prevent content jump when navbar is fixed */}
      <div className="h-20" />
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto ${scrolled ? "top-2 sm:top-4 lg:top-6" : "top-2 sm:top-4"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-visible relative ${scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200/70 rounded-2xl px-4 md:px-6 h-14 md:h-16"
              : "bg-white/75 backdrop-blur-md shadow-sm border border-white/60 rounded-2xl px-4 md:px-6 h-14 md:h-16"
            }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50">
            {/* You can replace this whole block with an actual <img src="/logo.png" /> */}
            <div className={`flex items-center transition-all ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-animated flex items-center justify-center shadow-blue logo-bg relative overflow-hidden group-hover:shadow-teal transition-all"
                style={{ background: 'linear-gradient(-45deg, #1B6CA8 0%, #0BA898 50%, #1B6CA8 100%)' }}
              >
                <span className="text-white font-bold text-sm md:text-base relative z-10">SAI</span>
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] sm:text-[15px] font-extrabold text-slate-800 leading-tight font-heading tracking-tight whitespace-nowrap">
                Dr. Sandeep K. Sahu
              </p>
              <p className="text-[9px] sm:text-[11px] text-primary-600 font-bold leading-tight uppercase tracking-wider mt-0.5">
                Endocrinologist
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 ${pathname === link.href
                    ? "text-primary-700 bg-primary-50 shadow-sm"
                    : "text-slate-500 hover:text-primary-600 hover:bg-slate-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 md:gap-4 z-50">
            {/* Phone Logo/Icon explicitly optimized instead of showing the long number */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${doctor.phone}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all border border-slate-100 hover:border-primary-100 group"
                aria-label="Call Clinic"
                title={doctor.phone}
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <a
              href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-animated text-white text-[13px] font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-blue hover:-translate-y-0.5 group"
              style={{ background: '#25D366' }}
            >
              <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
              Book
            </a>
          </div>

          {/* Mobile Right CTA & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            {/* Compact Phone Logo for Mobile */}
            <a
              href={`tel:${doctor.phone}`}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 border border-primary-100 active:scale-95 transition-transform"
              aria-label="Call Clinic"
            >
              <Phone size={15} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors border border-transparent hover:border-slate-200 relative overflow-hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Absolute positioning for Mobile Menu to make it float seamlessly below */}
          <div
            className={`absolute top-[calc(100%+12px)] left-0 right-0 lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-2xl p-3 shadow-2xl flex flex-col gap-1 mx-0 md:mx-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-3 rounded-xl text-[14px] font-bold transition-all ${pathname === link.href
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary-600"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100">
                <a
                  href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-animated text-white font-bold py-3.5 rounded-xl shadow-blue active:scale-[0.98] transition-transform"
                  style={{ background: '#25D366' }}
                >
                  <Calendar size={16} />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
