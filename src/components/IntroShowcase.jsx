import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import NextLink from './NextLink';
import { useLanguage } from '../context/LanguageContext';

const IntroShowcase = () => {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const mediaBase = encodeURI('/img/New folder');

  const introSlides = [
    {
      type: 'video',
      src: `${mediaBase}/143376-782178665.mp4`,
      poster: `${mediaBase}/img1.jpg`,
      eyebrow: t.advancedTreatment,
      title: t.worldClassPhysicians,
      description: '',
    },
    {
      type: 'image',
      src: `${mediaBase}/img1.jpg`,
      eyebrow: t.clinicalExcellence,
      title: t.focusedDiagnosisHeader,
      description: '',
    },
    {
      type: 'image',
      src: `${mediaBase}/img2.jpg`,
      eyebrow: t.calmEnvironment,
      title: t.designedForTrust,
      description: '',
    },
    {
      type: 'video',
      src: `${mediaBase}/49812-458438865.mp4`,
      poster: `${mediaBase}/Gemini_Generated_Image_obgnldobgnldobgn.png`,
      eyebrow: t.movingCare,
      title: t.absolutePriority,
      description: '',
    },
    {
      type: 'image',
      src: `${mediaBase}/Gemini_Generated_Image_obgnldobgnldobgn.png`,
      eyebrow: t.completeSupport,
      title: t.premiumHealthcareService,
      description: '',
    },
  ];

  const introBadges = [
    { icon: ShieldCheck, label: t.safeTreatmentPlanning },
    { icon: Stethoscope, label: t.physicianLedConsultation },
    { icon: HeartPulse, label: t.longTermChronicCare },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % introSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [introSlides.length]);

  return (
    <section className="wrapper pt-0 pb-8 pb-md-10">
      <div className="intro-fullscreen">
        <div className="intro-media-frame intro-media-frame-full">
          {introSlides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={slide.src}
                className="position-absolute w-100 h-100 top-0 left-0"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: isActive ? 2 : 1,
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                {slide.type === 'video' ? (
                  <video
                    className="intro-media w-100 h-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={slide.poster}
                    style={{ objectFit: 'cover' }}
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={isActive}
                    sizes="100vw"
                    className="intro-media intro-image"
                    style={{ objectFit: 'cover' }}
                  />
                )}

                <div className="intro-overlay" style={{ opacity: 0.6 }} />

                <div className="intro-media-copy intro-media-copy-full">
                  <span className="intro-eyebrow">{slide.eyebrow}</span>
                  <h1 className="intro-media-title">{slide.title}</h1>
                  <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
                    <NextLink href="/contact" title={t.bookAppointment} className="btn btn-power" />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="intro-arrow-nav">
            <button
              type="button"
              className="intro-control-button intro-control-prev"
              onClick={() => setActiveIndex((current) => (current - 1 + introSlides.length) % introSlides.length)}
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="intro-control-button intro-control-next"
              onClick={() => setActiveIndex((current) => (current + 1) % introSlides.length)}
              aria-label="Next slide"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="intro-dots-wrap" aria-label="Slide selection">
            <div className="intro-slide-dots">
              {introSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={index === activeIndex ? 'is-active' : ''}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container intro-content-below">
          <span className="section-badge intro-badge mb-4">{t.premiumMedicalBlue}</span>
          <h2 className="display-4 mb-4 intro-title">
            {t.oneCalmFirstImpression}
          </h2>
          <p className="intro-lead mb-4">
            {t.openingShowcaseDescription}
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <NextLink href="/contact" title={t.bookAppointment} className="btn btn-power" />
            <NextLink href="/about" title={t.visitDoctor} className="btn btn-outline-primary rounded-pill" />
          </div>
          <div className="d-flex flex-wrap gap-3 intro-badge-row">
            {introBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span className="intro-mini-pill" key={badge.label}>
                  <Icon size={16} aria-hidden="true" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroShowcase;