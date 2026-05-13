import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import NextLink from './NextLink';
import { useLanguage } from '../context/LanguageContext';

const IntroShowcase = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canAutoplayVideo, setCanAutoplayVideo] = useState(true);

  const mediaBase = encodeURI('/img/New folder');

  const introSlides = [
    {
      type: 'video',
      src: `${mediaBase}/49812-optimized.mp4`,
      poster: `${mediaBase}/49812-poster.webp`,
      eyebrow: t.clinicalExcellence,
      title: t.designedForTrust,
      description: '',
      objectPosition: 'center center',
      orientation: 'landscape'
    },
    {
      type: 'image',
      src: `${mediaBase}/Gemini_Generated_Image_ktd849ktd849ktd8.png`,
      eyebrow: t.calmEnvironment,
      title: t.designedForTrust,
      description: '',
      objectPosition: 'center center',
      orientation: 'landscape'
    },
    {
      type: 'image',
      src: `${mediaBase}/Gemini_Generated_Image_obgnldobgnldobgn.png`,
      eyebrow: t.completeSupport,
      title: t.premiumHealthcareService,
      description: '',
      objectPosition: 'center center',
      orientation: 'landscape'
    },
    {
      type: 'video',
      src: `${mediaBase}/143376-optimized.mp4`,
      poster: `${mediaBase}/143376-poster.webp`,
      eyebrow: t.advancedTreatment,
      title: t.worldClassPhysicians,
      description: '',
      objectPosition: 'center center',
      orientation: 'landscape'
    },
    {
      type: 'video',
      src: `${mediaBase}/8460068-optimized.mp4`,
      webmSrc: `${mediaBase}/8460068-optimized.webm`,
      poster: `${mediaBase}/8460068-poster.webp`,
      eyebrow: t.advancedTreatment,
      title: t.worldClassPhysicians,
      description: '',
      objectPosition: 'center center',
      orientation: 'landscape'
    },
    {
      type: 'video',
      src: `${mediaBase}/11970942-optimized.mp4`,
      poster: `${mediaBase}/11970942-poster.webp`,
      eyebrow: t.clinicalExcellence,
      title: t.focusedDiagnosisHeader,
      description: '',
      objectPosition: 'center top',
      orientation: 'portrait'
    },

    {
      type: 'video',
      src: `${mediaBase}/6130559-optimized.mp4`,
      poster: `${mediaBase}/6130559-poster.webp`,
      eyebrow: t.movingCare,
      title: t.absolutePriority,
      description: '',
      objectPosition: 'center top',
      orientation: 'portrait'
    }
  ];

  const introBadges = [
    { icon: ShieldCheck, label: t.safeTreatmentPlanning },
    { icon: Stethoscope, label: t.physicianLedConsultation },
    { icon: HeartPulse, label: t.longTermChronicCare },
  ];

  const impactPromoStyles = {
    card: {
      maxWidth: '58rem',
      borderRadius: '1.5rem',
      padding: '1.25rem',
      background: 'linear-gradient(135deg, rgba(10, 66, 77, 0.1), rgba(11, 116, 104, 0.16))',
      border: '1px solid rgba(11, 116, 104, 0.18)',
      boxShadow: '0 18px 45px rgba(8, 49, 58, 0.14)',
      backdropFilter: 'blur(14px)'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1rem'
    },
    item: {
      borderRadius: '1.15rem',
      padding: '1rem 1.1rem',
      background: 'rgba(255, 255, 255, 0.72)',
      border: '1px solid rgba(255, 255, 255, 0.7)',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.65)'
    },
    label: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      marginBottom: '0.45rem',
      padding: '0.3rem 0.75rem',
      borderRadius: '999px',
      background: 'rgba(11, 116, 104, 0.12)',
      color: '#0b7468',
      fontSize: '0.78rem',
      fontWeight: 800,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    },
    value: {
      marginBottom: 0,
      color: '#0b1f24',
      fontSize: '1.02rem',
      fontWeight: 700,
      lineHeight: 1.45
    }
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData;
    setCanAutoplayVideo(!(reduceMotion || isMobile || saveData));

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % introSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [introSlides.length]);

  const activeSlide = introSlides[activeIndex];

  return (
    <section className="wrapper pt-0 pb-8 pb-md-10 intro-premium">
      <div className="intro-fullscreen intro-premium-shell">
        <div className="intro-media-frame intro-media-frame-full intro-media-frame-premium">
          <div key={activeSlide.src} className={`position-absolute w-100 h-100 top-0 left-0 ${activeSlide.orientation === 'portrait' ? 'is-portrait-slide' : ''}`}>
            {activeSlide.type === 'video' ? (
              <video
                className={`intro-media w-100 h-100 ${activeSlide.orientation === 'portrait' ? 'intro-media-portrait' : ''}`}
                autoPlay={canAutoplayVideo}
                muted
                loop
                playsInline
                preload="metadata"
                poster={activeSlide.poster}
                style={{ objectFit: 'cover', objectPosition: activeSlide.objectPosition || 'center center' }}
              >
                {activeSlide.webmSrc ? <source src={activeSlide.webmSrc} type="video/webm" /> : null}
                <source src={activeSlide.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={activeSlide.src}
                alt={activeSlide.title}
                fill
                priority={activeIndex === 0}
                sizes="100vw"
                className="intro-media intro-image"
                style={{ objectFit: 'cover', objectPosition: activeSlide.objectPosition || 'center center' }}
              />
            )}

            <div className="intro-overlay" style={{ opacity: 0.6 }} />

            <div className="intro-media-copy intro-media-copy-full intro-glass-panel">
              <span className="intro-eyebrow">{activeSlide.eyebrow}</span>
              <p className="intro-media-title mb-0">{activeSlide.title}</p>
              <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
                <NextLink href="/contact" title={t.bookAppointment} className="btn btn-power" />
              </div>
            </div>
          </div>

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

        <div className="container intro-content-below premium-section-panel premium-section-panel-glow">
          <div className="premium-section-header centered">
            <span className="section-badge intro-badge mb-4">{t.premiumMedicalBlue}</span>
            <h2 className="display-4 mb-4 intro-title">
              {t.oneCalmFirstImpression}
            </h2>
            <p className="intro-lead mb-4">
              {t.openingShowcaseDescription}
            </p>
            <div className="impact-promo-card mx-auto mb-4 text-start text-lg-center" style={impactPromoStyles.card}>
              <div className="impact-promo-grid" style={impactPromoStyles.grid}>
                <div className="impact-promo-item" style={impactPromoStyles.item}>
                  <span className="impact-promo-label" style={impactPromoStyles.label}>Experience</span>
                  <p className="impact-promo-value" style={impactPromoStyles.value}>10+ years across internal medicine, ICU care, and academic practice</p>
                </div>
                <div className="impact-promo-item" style={impactPromoStyles.item}>
                  <span className="impact-promo-label" style={impactPromoStyles.label}>Patient care</span>
                  <p className="impact-promo-value" style={impactPromoStyles.value}>Structured care for diabetes, thyroid, heart, chest, BP, kidney, liver, and asthma</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <NextLink href="/contact" title="Book Appointment" className="btn btn-power" />
              <NextLink href="/about" title="Meet the Doctor" className="btn btn-outline-primary rounded-pill" />
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 intro-badge-row">
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
      </div>
    </section>
  );
};

export default IntroShowcase;
