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
      }
    ]
  };

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Best Doctor in Jhansi | Physician and Chest Doctor"
        description={`${siteInfo.name} is trusted for diabetes, thyroid, heart, chest, and chronic care. Consult one of the best doctors in Jhansi and Gursarai for focused treatment by an experienced physician and chest care specialist.`}
        canonical={siteInfo.url}
        image={`${siteInfo.url}${siteInfo.logo}`}
        keywords={[
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

        <section className="wrapper pt-6 pb-10 pb-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 p-lg-10 text-white" data-reveal="zoom">
              <div className="row align-items-center gy-8">
                <div className="col-lg-7 position-relative" data-reveal="left" style={{ '--reveal-delay': '80ms', zIndex: 2 }}>
                  <span className="section-badge mb-4">
                    {t.doctorLocationSubtitle}
                  </span>
                  <h1 className="display-3 text-white mb-4">
                    {t.doctorMainHeroTitle}
                  </h1>
                  <p className="lead text-white text-opacity-85 mb-4">
                    {t.doctorMainHeroDescription}
                  </p>
                  <div className="d-flex flex-wrap gap-3 mb-5">
                    <NextLink href="/contact" title={t.bookAppointment} className="btn btn-power" />
                    <NextLink href={`https://wa.me/${siteInfo.whatsapp}`} title={t.whatsappClinic} className="btn btn-whatsapp" target="_blank" />
                  </div>
                  <div className="d-flex flex-wrap">
                    {trustPoints.map((point) => (
                      <span className="trust-pill" key={point}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5 position-relative" data-reveal="right" style={{ '--reveal-delay': '180ms', zIndex: 2 }}>
                  <div className="subtle-card p-3 p-md-4">
                    <Image
                      src="/img/dr-akash-profile.png"
                      alt="Dr. Akash Tamrakar"
                      width={900}
                      height={1100}
                      className="img-fluid rounded-4"
                      priority
                    />
                    <div className="mt-4 p-3 p-md-4 bg-white rounded-4 text-dark-blue">
                      <p className="mb-1 fw-bold text-teal">{siteInfo.doctorName}</p>
                      <p className="mb-0">{t.doctorBioCard}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="row g-4 mb-7">
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '20ms' }}>
                <div className="clean-card h-100 text-center">
                  <ShieldCheck className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">{t.pillar1Title}</h3>
                  <p className="mb-0">{t.pillar1Desc}</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '90ms' }}>
                <div className="clean-card h-100 text-center">
                  <Activity className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">{t.pillar2Title}</h3>
                  <p className="mb-0">{t.pillar2Desc}</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '160ms' }}>
                <div className="clean-card h-100 text-center">
                  <MapPin className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">{t.pillar3Title}</h3>
                  <p className="mb-0">{t.pillar3Desc}</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '230ms' }}>
                <div className="clean-card h-100 text-center">
                  <CalendarCheck2 className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">{t.pillar4Title}</h3>
                  <p className="mb-0">{t.pillar4Desc}</p>
                </div>
              </div>
            </div>

            <div className="row align-items-center g-8">
              <div className="col-lg-5" data-reveal="left">
                <span className="section-badge mb-3">{t.whyPatientsVisit}</span>
                <h2 className="display-5 mb-4">{t.clinicalJudgement}</h2>
                <p className="mb-4">
                  {t.rootCauseDiagnosis}
                </p>
                <NextLink href="/about" title={t.learnAboutDoctor} className="btn btn-outline-primary rounded-pill" />
              </div>
              <div className="col-lg-7" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                <div className="row g-4">
                  {careHighlights.map((item) => (
                    <div className="col-md-6" key={item.id} data-reveal="zoom" style={{ '--reveal-delay': `${item.id * 70}ms` }}>
                      <div className="clean-card h-100">
                        <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary me-3">0{item.id}</span>
                          <h3 className="h5 mb-0">{item.title}</h3>
                        </div>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light-grey py-12 py-md-14">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-6" data-reveal="left">
              <div>
                <span className="section-badge mb-3">{t.coreServicesTag}</span>
                <h2 className="display-5 mb-0">{t.coreServicesTitle}</h2>
              </div>
              <NextLink href="/treatments" title={t.viewAllTreatments} className="btn btn-teal rounded-pill mt-4 mt-md-0" />
            </div>
            <Cards arr={treatments} />
          </div>
        </section>

        <section className="wrapper py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card journey-card h-100">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">{t.visitOverviewTag}</span>
                  <h2 className="display-5 mb-4">{t.visitOverviewTitle}</h2>
                  <p className="mb-4">
                    {t.visitOverviewDescription}
                  </p>
                  <div className="journey-meta mb-4">
                    <span><Clock3 size={15} aria-hidden="true" />{t.visitMetaConsultation}</span>
                    <span><PhoneCall size={15} aria-hidden="true" />{t.visitMetaAppointment}</span>
                    <span><MapPin size={15} aria-hidden="true" />{t.visitMetaAccess}</span>
                  </div>
                  <div className="journey-note p-4 rounded-4">
                    <p className="mb-2 fw-bold text-dark-blue">{t.beforeYouVisit}</p>
                    <p className="mb-0 text-dark-blue text-opacity-85">
                      {t.beforeYouVisitDesc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
                <span className="section-badge mb-3">{t.patientJourneyTag}</span>
                <h2 className="display-5 mb-4">{t.patientJourneyTitle}</h2>
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

        <section className="wrapper brand-surface py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-5" data-reveal="left">
                <span className="section-badge mb-3 bg-soft-purple-tint text-teal">{t.faqTag}</span>
                <h2 className="display-5 mb-4">{t.faqTitle}</h2>
                <p className="text-white text-opacity-85 mb-0">
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
        </section>

        <section className="wrapper bg-light-grey py-12 py-md-14">
          <div className="container">
            <div className="row align-items-end mb-6" data-reveal="left">
              <div className="col-lg-8">
                <span className="section-badge mb-3">{t.testimonialsTag}</span>
                <h2 className="display-5 mb-0">{t.testimonialsTitle}</h2>
              </div>
            </div>
            <div className="row g-4">
              {testimonials.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={item.id} data-reveal="zoom" style={{ '--reveal-delay': `${index * 70}ms` }}>
                  <div className="clean-card testimonial-card h-100">
                    <p className="mb-4 testimonial-quote">“{item.quote}”</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="mb-0 fw-bold text-dark-blue">{item.name}</p>
                        <p className="mb-0 text-muted">{item.location}</p>
                      </div>
                      <span className="testimonial-stars" aria-label="5 star rating">★★★★★</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrapper brand-surface py-12 py-md-14">
          <div className="container">
            <div className="text-center mb-10" data-reveal="zoom">
              <h2 className="display-4 text-white mb-0">{t.ourCenters}</h2>
            </div>
            <div className="row g-6 justify-content-center">
              {siteInfo.locations.map((loc, idx) => (
                <div key={loc.id} className="col-lg-5" data-reveal="zoom" style={{ '--reveal-delay': `${idx * 100}ms` }}>
                  <div className="bg-white rounded-4 overflow-hidden h-100 shadow-lg d-flex flex-column hover-lift transition-all">
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
                        <div className="table-responsive rounded-3 overflow-hidden border">
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
      </main>
    </Fragment>
  );
};

export default Home;
