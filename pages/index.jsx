import { Fragment } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock3,
  ShieldCheck,
  BadgeCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  CalendarCheck2
} from 'lucide-react';
import NextLink from 'components/NextLink';

import PageProgress from 'components/PageProgress';
import Cards from 'components/Cards';
import Seo from 'components/Seo';
import IntroShowcase from 'components/IntroShowcase';
import { useLanguage } from '../src/context/LanguageContext';

const Home = () => {
  const { data: { careHighlights, faqs, siteInfo, testimonials, treatments, trustPoints }, t } = useLanguage();
  const summarizeText = (text, max = 130) => (text.length > max ? `${text.slice(0, max).trimEnd()}...` : text);
  const authorityCitations = siteInfo.authorityReferences.map((item) => ({
    '@type': 'CreativeWork',
    name: item.label,
    url: item.url,
    description: item.summary
  }));
  const getInitials = (name = '') => name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
  const renderTestimonialCard = (item, keyPrefix = '') => {
    const initials = getInitials(item.name);
    return (
      <div className="marquee-item" key={`${keyPrefix}${item.id}`}>
        <div className="clean-card testimonial-card h-100 mb-0">
          <p className="mb-4 testimonial-quote">“{item.quote}”</p>
          <div className="testimonial-meta">
            <span className="testimonial-avatar" aria-hidden="true">{initials}</span>
            <div className="testimonial-info">
              <p className="mb-0 fw-bold text-dark-blue">{item.name}</p>
              <p className="mb-0 text-muted fs-14">{item.location}</p>
              <p className="mb-0 testimonial-doctor">Care by {siteInfo.doctorName}</p>
            </div>
            <span className="testimonial-stars" aria-label="5 star rating">★★★★★</span>
          </div>
        </div>
      </div>
    );
  };
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${siteInfo.url}/#home-faq`,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteInfo.url}/#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteInfo.url}/`
          }
        ]
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${siteInfo.url}/#webpage`,
        url: siteInfo.url,
        name: `Dr. Akash Tamrakar - best doctor in Jhansi and Gursarai`,
        description: `${siteInfo.doctorName} provides physician consultation for diabetes, thyroid, chest, heart, kidney, liver, asthma, blood pressure, and critical care concerns in Jhansi and Gursarai.`,
        author: { '@id': `${siteInfo.url}#author` },
        reviewedBy: { '@id': `${siteInfo.url}#doctor` },
        publisher: { '@id': `${siteInfo.url}#organization` },
        datePublished: siteInfo.lastUpdated,
        dateModified: siteInfo.lastUpdated,
        citation: authorityCitations,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.intro-media-title', '.intro-lead', '.trust-byline']
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'Article',
        '@id': `${siteInfo.url}/#doctor-article`,
        headline: 'Dr. Akash Tamrakar, physician in Jhansi and Gursarai',
        description: `${siteInfo.name} provides physician-led care for diabetes, thyroid, heart, chest, asthma, blood pressure, kidney, liver, and chronic disease follow-up.`,
        author: { '@id': `${siteInfo.url}#author` },
        publisher: { '@id': `${siteInfo.url}#organization` },
        mainEntityOfPage: { '@id': `${siteInfo.url}/#webpage` },
        datePublished: siteInfo.lastUpdated,
        dateModified: siteInfo.lastUpdated,
        citation: authorityCitations,
        inLanguage: 'en-IN'
      },
      {
        '@type': 'HowTo',
        '@id': `${siteInfo.url}/#consultation-howto`,
        name: `How to consult ${siteInfo.doctorName} at ${siteInfo.name}`,
        description: 'A simple patient consultation process for appointment booking, clinical review, diagnostic planning, treatment, and follow-up.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Book an appointment', text: 'Call, WhatsApp, or use the contact form to request a consultation slot.' },
          { '@type': 'HowToStep', position: 2, name: 'Share symptoms and history', text: 'Discuss symptoms, past treatment, current medicines, and relevant reports during consultation.' },
          { '@type': 'HowToStep', position: 3, name: 'Review tests when needed', text: 'Complete targeted lab or diagnostic tests when clinically required.' },
          { '@type': 'HowToStep', position: 4, name: 'Follow a treatment plan', text: 'Receive medicine, lifestyle, nutrition, and follow-up guidance based on the diagnosis.' }
        ]
      }
    ]
  };

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Dr. Akash Tamrakar | Physician in Jhansi"
        description="Consult Dr. Akash Tamrakar at Eklavya Healthcare Centre for diabetes, thyroid, heart, chest, asthma, blood pressure, and chronic care in Jhansi."
        canonical={siteInfo.url}
        image={`${siteInfo.url}${siteInfo.logo}`}
        keywords={[
          'dr akash tamrakar',
          'dr akash tamrakar best doctor in jhansi',
          'akash tamrakar doctor jhansi',
          'best doctor in jhansi',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'best doctor in gursarai',
          'best doctor in jhansi up',
          'best doctor in gursarai up',
          'general physician in jhansi',
          'critical care specialist in jhansi'
        ]}
        jsonLd={homeJsonLd}
      />

      <main className="content-wrapper overflow-hidden">
        <IntroShowcase />
        <div className="section-divider" aria-hidden="true" />

        <section className="wrapper pt-6 pb-10 pb-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 p-lg-10 text-white animate-nav-drop" style={{ animationDelay: '0.1s' }}>
              <div className="row align-items-center gy-8">
                <div className="col-lg-7 position-relative hero-copy-column" style={{ zIndex: 2 }}>
                  <span className="section-badge mb-3 hero-animate-up" style={{ animationDelay: '0.2s' }}>
                    {t.doctorLocationSubtitle}
                  </span>
                  <h1 className="display-3 text-white mb-3 hero-heading hero-animate-up" style={{ animationDelay: '0.3s' }}>
                    {t.doctorMainHeroTitle}
                  </h1>
                  <p className="lead text-white text-opacity-85 mb-4 hero-lead hero-animate-up" style={{ animationDelay: '0.4s' }}>
                    {summarizeText(t.doctorMainHeroDescription, 140)}
                  </p>
                  <div className="d-flex flex-wrap gap-3 hero-actions hero-animate-up" style={{ animationDelay: '0.5s' }}>
                    <NextLink href="/contact" title={t.bookAppointment} className="btn btn-power" />
                    <NextLink href={`https://wa.me/${siteInfo.whatsapp}`} title={t.whatsappClinic} className="btn btn-whatsapp" target="_blank" />
                  </div>
                </div>
                <div className="col-lg-5 position-relative hero-media-column text-center hero-animate-up" style={{ animationDelay: '0.5s', zIndex: 2 }}>
                  <div className="hero-doctor-card d-inline-block position-relative">
                    <Image
                      src="/img/dr-akash-profile.png"
                      alt="Dr. Akash Tamrakar"
                      width={480}
                      height={580}
                      className="img-fluid rounded-4 hero-doctor-image"
                      priority
                    />
                    <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 p-2 p-md-3">
                      <div className="bg-white rounded-3 p-2 shadow-lg text-dark-blue hero-doctor-bio">
                        <p className="mb-0 fw-bold fs-14 text-teal">{siteInfo.doctorName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-12 py-md-14 section-surface section-visibility orb-surface">
          <div className="container">
            <div className="premium-section-header centered mb-6" data-reveal="zoom">
              <div className="premium-section-heading-frame">
                <span className="section-badge mb-0">{t.coreServicesTag}</span>
                <h2 className="display-5 mb-0 section-heading-dark">What treatments are available?</h2>
              </div>
            </div>
            <div className="text-center mb-6" data-reveal="zoom" style={{ '--reveal-delay': '80ms' }}>
              <NextLink href="/treatments" title={t.viewAllTreatments} className="btn btn-teal rounded-pill" />
            </div>
            <Cards arr={treatments} />
          </div>
        </section>

        <section className="wrapper premium-section-light pb-8 pb-md-12 section-surface section-visibility orb-surface">
          <div className="container">
            <div className="premium-section-header centered mb-6" data-reveal="zoom">
              <div className="premium-section-heading-frame">
                <span className="section-badge mb-0">{t.premiumMedicalBlue}</span>
                <h2 className="display-4 mb-0 section-heading-dark">Why choose Eklavya Healthcare Centre?</h2>
              </div>
            </div>
            <div className="trust-overview-panel p-3 p-md-4 mb-7 premium-section-panel premium-section-panel-glow" data-reveal="zoom">
              <div className="row g-3 g-xl-4">
                <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '20ms' }}>
                  <article className="trust-quick-card h-100">
                    <span className="trust-quick-icon"><ShieldCheck size={20} aria-hidden="true" /></span>
                    <h3 className="h5 mb-2">{t.pillar1Title}</h3>
                    <p className="mb-0 trust-quick-copy">{t.pillar1Desc}</p>
                  </article>
                </div>
                <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '90ms' }}>
                  <article className="trust-quick-card h-100">
                    <span className="trust-quick-icon"><Activity size={20} aria-hidden="true" /></span>
                    <h3 className="h5 mb-2">{t.pillar2Title}</h3>
                    <p className="mb-0 trust-quick-copy">{t.pillar2Desc}</p>
                  </article>
                </div>
                <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '160ms' }}>
                  <article className="trust-quick-card h-100">
                    <span className="trust-quick-icon"><MapPin size={20} aria-hidden="true" /></span>
                    <h3 className="h5 mb-2">{t.pillar3Title}</h3>
                    <p className="mb-0 trust-quick-copy">{t.pillar3Desc}</p>
                  </article>
                </div>
                <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '230ms' }}>
                  <article className="trust-quick-card h-100">
                    <span className="trust-quick-icon"><CalendarCheck2 size={20} aria-hidden="true" /></span>
                    <h3 className="h5 mb-2">{t.pillar4Title}</h3>
                    <p className="mb-0 trust-quick-copy">{t.pillar4Desc}</p>
                  </article>
                </div>
              </div>
            </div>

            {/* Testimonials Marquee Section */}
            <div className="row align-items-center mb-6 mt-10" data-reveal="left">
              <div className="col-12 text-center">
                <div className="premium-section-heading-frame">
                  <span className="section-badge mb-0">{t.testimonialsTag}</span>
                  <h2 className="display-5 mb-0 section-heading-dark">{t.testimonialsTitle}</h2>
                </div>
                <p className="testimonial-lead mt-3 mb-0">{t.testimonialsLead}</p>
              </div>
            </div>
            <div className="row mb-12">
              <div className="col-12">
                <div className="marquee-wrapper testimonial-surface px-3">
                  <div className="marquee-track">
                    <div className="marquee-content">
                      {testimonials.map((item) => renderTestimonialCard(item))}
                    </div>
                    {/* Duplicate track for seamless infinite scrolling */}
                    <div className="marquee-content" aria-hidden="true">
                      {testimonials.map((item) => renderTestimonialCard(item, 'dup-'))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-start g-4 g-lg-6 premium-section-panel premium-section-panel-soft p-4 p-lg-5 mx-0">
              <div className="col-lg-5" data-reveal="left">
                <span className="section-badge mb-3">{t.whyPatientsVisit}</span>
                <h2 className="display-5 mb-4 section-heading-dark">How does the clinic plan chronic care?</h2>
                <p className="trust-byline mb-3">{t.trustByline}</p>
                <p className="mb-4 trust-intro premium-copy">{summarizeText(t.rootCauseDiagnosis, 160)}</p>
                <div className="trust-fast-points mb-4">
                  {trustPoints.slice(0, 3).map((point) => (
                    <div className="trust-promise-item" key={point}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <NextLink href="/about" title={t.learnAboutDoctor} className="btn btn-outline-primary rounded-pill" />
              </div>
              <div className="col-lg-7" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                <div className="trust-grid-header mb-3">
                  <span className="section-badge">{t.trustHighlightsTag}</span>
                  <h3 className="h4 mb-0 text-dark-blue">{t.trustHighlightsTitle}</h3>
                </div>
                <div className="row g-3">
                  {careHighlights.map((item) => (
                    <div className="col-md-6" key={item.id} data-reveal="zoom" style={{ '--reveal-delay': `${item.id * 70}ms` }}>
                      <article className="trust-highlight-card h-100">
                        <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary me-3">0{item.id}</span>
                          <h3 className="h5 mb-0">{item.title}</h3>
                        </div>
                        <p className="mb-0">{item.description}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-divider" aria-hidden="true" />

        <section className="wrapper premium-section-light py-10 py-md-12 section-surface section-visibility">
          <div className="container">
            <div className="premium-section-panel p-4 p-md-5" data-reveal="zoom">
              <div className="row g-4 align-items-start">
                <div className="col-lg-4">
                  <span className="section-badge mb-3">Clinical references</span>
                  <h2 className="h3 mb-3 section-heading-dark">What do public health sources say?</h2>
                  <p className="premium-copy mb-2">Last updated: May 14, 2026.</p>
                  <p className="premium-copy mb-0">These data points explain why early diagnosis, regular follow-up, and prevention matter for common chronic conditions.</p>
                </div>
                <div className="col-lg-8">
                  <div className="row g-3">
                    {siteInfo.authorityReferences.map((item) => (
                      <div className="col-md-4" key={item.id}>
                        <article className="premium-list-card h-100 p-3">
                          <p className="fw-bold text-dark-blue mb-2">{item.label}</p>
                          <p className="premium-copy mb-3">{item.summary}</p>
                          <a href={item.url} target="_blank" rel="noreferrer" className="fw-bold text-teal">
                            Source
                          </a>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-12 py-md-14 section-surface section-visibility orb-surface orb-surface-soft">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card journey-card premium-section-panel h-100 position-relative journey-orb">
                  <div className="position-absolute top-0 end-0 p-4 opacity-10 d-none d-sm-block">
                    <Stethoscope size={100} />
                  </div>
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">{t.visitOverviewTag}</span>
                  <h2 className="display-4 text-dark-blue mb-4">{t.visitOverviewTitle}</h2>
                  <p className="journey-byline mb-3">{t.visitOverviewByline}</p>
                  <p className="lead mb-4 text-dark-blue opacity-75">
                    {t.visitOverviewDescription}
                  </p>
                  <div className="journey-meta mb-4">
                    <span className="journey-pill"><Clock3 size={16} className="text-teal" />{t.visitMetaConsultation}</span>
                    <span className="journey-pill"><PhoneCall size={16} className="text-teal" />{t.visitMetaAppointment}</span>
                    <span className="journey-pill"><MapPin size={16} className="text-teal" />{t.visitMetaAccess}</span>
                  </div>
                  <div className="journey-note p-4 rounded-4 shadow-sm border-start border-4 border-teal">
                    <p className="mb-2 fw-bold text-dark-blue fs-18">{t.beforeYouVisit}</p>
                    <p className="mb-0 text-dark-blue text-opacity-85 fs-15">
                      {t.beforeYouVisitDesc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
                <span className="section-badge mb-3">{t.patientJourneyTag}</span>
                <h2 className="display-5 mb-4 section-heading-dark">How does a consultation work?</h2>
                <ol className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><BadgeCheck size={16} aria-hidden="true" />{t.journeyStep1}</li>
                  <li><Stethoscope size={16} aria-hidden="true" />{t.journeyStep2}</li>
                  <li><HeartPulse size={16} aria-hidden="true" />{t.journeyStep3}</li>
                  <li><ShieldCheck size={16} aria-hidden="true" />{t.journeyStep4}</li>
                </ol>
              </div>
            </div>
          </div>
        </section>



        <div className="section-divider" aria-hidden="true" />

        <section className="wrapper premium-section-light py-12 py-md-14 section-surface section-visibility orb-surface">
          <div className="container">
            <div className="premium-section-header centered mb-10" data-reveal="zoom">
              <div className="premium-section-heading-frame">
                <span className="section-badge mb-0">{t.clinicLocation}</span>
                <h2 className="display-4 mb-0 section-heading-dark">Where can patients visit?</h2>
              </div>
            </div>
            <div className="row g-6 justify-content-center">
              {siteInfo.locations.map((loc, idx) => (
                <div key={loc.id} className="col-lg-5" data-reveal="zoom" style={{ '--reveal-delay': `${idx * 100}ms` }}>
                  <div className="premium-location-card h-100 d-flex flex-column hover-lift transition-all">
                    <div className="position-relative" style={{ height: '240px' }}>
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        className="object-fit-cover"
                      />
                    </div>
                    <div className="p-4 p-xl-5 flex-grow-1 d-flex flex-column">
                      <h4 className="fs-22 mb-4 text-teal d-flex align-items-center fw-bold">
                        <MapPin size={24} className="me-2 text-teal" />
                        {loc.name}
                      </h4>
                      <div className="mb-4 text-dark-blue">
                        <p className="mb-1 fw-bold fs-15 text-uppercase letter-spacing-1">{t.address}:</p>
                        <p className="mb-0 fw-medium">{loc.address.join(', ')}</p>
                      </div>
                      <div className="mb-5 text-dark-blue">
                        <p className="mb-1 fw-bold fs-15 text-uppercase letter-spacing-1">{t.phone}:</p>
                        <p className="mb-0 fw-bold">{siteInfo.appointmentPhone}</p>
                      </div>
                      
                      <div className="mt-auto">
                        <p className="mb-3 fw-bold text-dark-blue fs-15 text-uppercase letter-spacing-1">{t.hours}:</p>
                        <div className="table-responsive rounded-3 overflow-hidden premium-table-wrap">
                          <table className="table table-borderless mb-0">
                            <tbody>
                              {loc.schedule.map((slot, sIdx) => (
                                <tr key={sIdx} className={sIdx !== loc.schedule.length - 1 ? 'border-bottom' : ''}>
                                  <td className="bg-light fw-medium text-dark-blue py-3 px-3 w-50">{slot.days}</td>
                                  <td className="py-3 px-3 fw-bold text-teal text-end w-50">{slot.time}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <section className="wrapper premium-section-light py-12 py-md-14 section-surface section-visibility orb-surface">
          <div className="container">
            <div className="premium-faq-shell p-4 p-lg-5">
              <div className="row g-8 align-items-start">
                <div className="col-lg-5" data-reveal="left">
                  <div className="premium-section-heading-frame mb-4">
                    <span className="section-badge mb-0">{t.faqTag}</span>
                    <h2 className="display-5 mb-0 section-heading-dark">What do patients ask before visiting?</h2>
                  </div>
                  <p className="premium-copy mb-0">
                    {t.faqDescription}
                  </p>
                  <div className="faq-side-note mt-5 p-4 rounded-4">
                    <p className="mb-2 fw-bold text-white">{t.faqSideNoteTitle}</p>
                    <p className="mb-0 text-white text-opacity-85">
                      {t.faqSideNoteDesc}
                    </p>
                  </div>
                </div>
                <div className="col-lg-7" data-reveal="right" style={{ '--reveal-delay': '90ms' }}>
                  <div className="row g-3 faq-grid" id="clinicFaq">
                    {faqs.map((faq, index) => (
                      <div className="col-12" key={faq.id}>
                        <div className="card plain faq-card">
                          <div className="card-header">
                            <button
                              className={index === 0 ? '' : 'collapsed'}
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq-${faq.id}`}
                              aria-expanded={index === 0}
                              aria-controls={`faq-${faq.id}`}
                            >
                              <span className="faq-question-wrap">
                                <span className="faq-number">0{index + 1}</span>
                                <span>{faq.question}</span>
                              </span>
                              <i className="uil uil-angle-down faq-toggle-icon" aria-hidden="true" />
                            </button>
                          </div>
                          <div
                            id={`faq-${faq.id}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          >
                            <div className="card-body faq-answer">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
