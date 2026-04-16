import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ChevronRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="footer-bg text-white">
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Ready to take control of your health?
              </h3>
              <p className="text-blue-100 mt-1 text-sm">
                Schedule your consultation with Dr. Sahu today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${doctor.phone}`}
                className="flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-full hover:bg-primary-50 transition-colors text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-colors text-sm shadow-md"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm leading-tight font-heading">
                    Dr. Sandeep K. Sahu
                  </p>
                  <p className="text-primary-300 text-xs leading-tight">Endocrinologist</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {doctor.clinicName} — providing expert endocrine care in Cuttack, Odisha. Early diagnosis and quality of life are our priorities.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-5 font-heading">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Dr. Sahu", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Health Blogs", href: "/blogs" },
                  { label: "Patient Corner", href: "/patient-corner" },
                  { label: "Book Appointment", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent-400 group-hover:translate-x-1 transition-transform"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-5 font-heading">Our Services</h4>
              <ul className="space-y-2.5">
                {services.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-slate-300 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-blue-400 group-hover:translate-x-1 transition-transform"
                      />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-5 font-heading">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-accent-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm">{doctor.address}</p>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="text-accent-400 shrink-0" />
                  <a
                    href={`tel:${doctor.phone}`}
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                  >
                    {doctor.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="text-accent-400 shrink-0" />
                  <a
                    href={`mailto:${doctor.email}`}
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                  >
                    {doctor.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock size={16} className="text-accent-400 shrink-0" />
                  <p className="text-slate-300 text-sm">{doctor.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} {doctor.clinicName}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
