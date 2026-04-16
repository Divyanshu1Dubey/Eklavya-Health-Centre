"use client";
import { useState } from "react";
import type { Metadata } from "next";
import {
  Phone, Mail, MapPin, Clock, Calendar, Send,
  CheckCircle, MessageSquare
} from "lucide-react";
import { doctor } from "@/data/doctor";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.phone) return;

    const messagePayload = `Hello, I want to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Condition: ${form.condition || "N/A"}
Preferred Time: ${form.preferredTime || "N/A"}
Details: ${form.message || "None"}`;

    const waLink = `https://wa.me/917008512773?text=${encodeURIComponent(messagePayload)}`;
    
    // Open WhatsApp in a new tab instantly to avoid popup blockers
    window.open(waLink, "_blank");
    
    // Show the confirmation state in the current tab
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="page-hero-split">
            {/* Left: text */}
            <div className="page-hero-text">
              <div className="section-tag w-fit mb-5">
                <Calendar size={13} />
                Get In Touch
              </div>
              <h1 className="font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                Book an Appointment
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                Schedule a consultation with Dr. Sandeep K. Sahu. We respond to all inquiries promptly.
              </p>
            </div>
            {/* Right: image */}
            <div className="page-hero-image">
              <div className="page-hero-image-glow" />
              <img
                src="/images/hero-contact.jpg"
                alt="Book appointment at SAI SHREE HEALTH CARE"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="heading-line" />
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                Request an Appointment
              </h2>

              <div className="mb-8 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Prefer WhatsApp?</h3>
                  <p className="text-sm text-slate-600">Skip the form and chat with our front desk instantly.</p>
                </div>
                <a 
                  href={`https://wa.me/917008512773?text=${encodeURIComponent("Hello, I want to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={30} className="text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    Request Received!
                  </h3>
                  <p className="text-slate-600 mb-5">
                    Thank you, {form.name}. We'll contact you at <strong>{form.phone}</strong> to confirm your appointment.
                  </p>
                  <p className="text-sm text-slate-400">
                    For urgent matters, call us directly at{" "}
                    <a href={`tel:${doctor.phone}`} className="text-primary-600 font-semibold">
                      {doctor.phone}
                    </a>
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", condition: "", message: "", preferredTime: "" }); }}
                    className="mt-6 btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Condition / Reason for Visit
                    </label>
                    <select
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a condition</option>
                      <option value="diabetes">Diabetes / Blood Sugar Issues</option>
                      <option value="thyroid">Thyroid Disorder</option>
                      <option value="pcos">PCOS / Hormonal Imbalance</option>
                      <option value="obesity">Obesity / Weight Issues</option>
                      <option value="growth">Growth Disorder</option>
                      <option value="metabolism">Metabolic Disorder</option>
                      <option value="general">General Endocrine Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Preferred Appointment Time
                    </label>
                    <select
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (10AM – 2PM)</option>
                      <option value="evening">Evening (5PM – 8PM)</option>
                      <option value="any">Any available slot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Briefly describe your symptoms or any recent test results..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!form.name || !form.phone}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    Submit Appointment Request
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    We'll call you within 24 hours to confirm your appointment.
                  </p>
                </div>
              )}
            </div>

            {/* Clinic Info */}
            <div className="space-y-6">
              {/* Quick call */}
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-primary-100 text-xs">For immediate assistance</p>
                    <p className="font-bold text-xl">{doctor.phone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${doctor.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-white text-primary-700 font-bold py-3 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>

              {/* Clinic details */}
              <div className="card p-6">
                <h3 className="font-bold text-slate-800 mb-5 font-heading text-lg">
                  {doctor.clinicName}
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5 font-medium">Address</p>
                      <p className="text-slate-700 text-sm">{doctor.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5 font-medium">Hours</p>
                      <p className="text-slate-700 text-sm">{doctor.hours}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5 font-medium">Email</p>
                      <a href={`mailto:${doctor.email}`} className="text-primary-600 text-sm hover:underline">
                        {doctor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="map-wrapper rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative">
                <iframe
                  title="SAI SHREE HEALTH CARE Location Map"
                  src="https://maps.google.com/maps?q=SAI%20SHREE%20HEALTH%20CARE,%20Near%20Shreema%20Hospital,%20Ring%20Road,%20Mangalabag,%20Cuttack-753001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full h-[300px] bg-slate-100"
                />
              </div>

              {/* Note */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <div className="flex gap-2">
                  <MessageSquare size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-sm">
                    <strong>Walk-ins welcome</strong> subject to availability. Appointment preferred for shorter wait times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
