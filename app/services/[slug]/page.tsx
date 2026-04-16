import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity, Zap, Heart, TrendingDown, BarChart2, Cpu,
  CheckCircle, AlertCircle, ArrowRight, ChevronLeft, Phone, Calendar
} from "lucide-react";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";

const iconMap: Record<string, any> = {
  activity: Activity,
  zap: Zap,
  heart: Heart,
  "trending-down": TrendingDown,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} Treatment in Cuttack | Dr. Sandeep K. Sahu`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage(props: { params: Params }) {
  const params = await props.params;
  
  // Debug check requested by user
  console.log(params.slug);

  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Activity;
  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 hero-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${service.color}20`, color: service.color }}
              >
                <Icon size={30} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-heading">
                {service.title}
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {service.keyFacts.map((fact) => (
                <div key={fact.label} className="stat-card">
                  <p className="text-lg font-bold text-blue-600 font-heading">{fact.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </div>

              {/* Symptoms */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5 font-heading flex items-center gap-2">
                  <AlertCircle size={22} className="text-amber-500" />
                  Common Symptoms
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.symptoms.map((symptom) => (
                    <div
                      key={symptom}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-slate-700 text-sm">{symptom}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <strong className="text-blue-700">Note:</strong> These symptoms can be caused by many conditions. Please consult Dr. Sahu for an accurate diagnosis before drawing conclusions.
                </p>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5 font-heading flex items-center gap-2">
                  <CheckCircle size={22} className="text-green-500" />
                  Our Treatment Approach
                </h2>
                <div className="space-y-3">
                  {service.treatments.map((treatment, i) => (
                    <div
                      key={treatment}
                      className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{ background: `${service.color}20`, color: service.color }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-slate-700 text-sm">{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book CTA */}
              <div className="card p-6 bg-blue-600 border-0 text-white">
                <h3 className="text-xl font-bold font-heading mb-2">
                  Book a Consultation
                </h3>
                <p className="text-blue-100 text-sm mb-5">
                  Don't let symptoms go undiagnosed. Speak with Dr. Sahu today.
                </p>
                <a
                  href={`https://wa.me/917008512773?text=${encodeURIComponent(`Hello, I want to book an appointment for ${service?.title || 'a Consultation'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-blue-700 font-bold py-3 rounded-xl mb-3 hover:bg-blue-50 transition-colors"
                >
                  <Calendar size={16} />
                  Book Appointment
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-500/40 hover:bg-blue-500/60 text-white font-semibold py-3 rounded-xl transition-colors border border-white/20"
                >
                  <Phone size={16} />
                  {doctor.phone}
                </a>
              </div>

              {/* Doctor info */}
              <div className="card p-5">
                <h3 className="font-bold text-slate-800 mb-3 font-heading">Your Specialist</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                    SS
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{doctor.name}</p>
                    <p className="text-xs text-slate-500">{doctor.qualifications}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {doctor.clinicName}, {doctor.address}
                </p>
              </div>

              {/* Other services */}
              <div>
                <h3 className="font-bold text-slate-800 mb-4 font-heading">Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => {
                    const OtherIcon = iconMap[s.icon] || Activity;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${s.color}15`, color: s.color }}
                        >
                          <OtherIcon size={14} />
                        </div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors flex-1">
                          {s.title}
                        </span>
                        <ArrowRight size={13} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
