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
import { careHighlights, faqs, siteInfo, testimonials, treatments, trustPoints } from 'data';

const Home = () => {
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
        <section className="wrapper pt-6 pb-10 pb-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 p-lg-10 text-white" data-reveal="zoom">
              <div className="row align-items-center gy-8">
                <div className="col-lg-7 position-relative" data-reveal="left" style={{ '--reveal-delay': '80ms', zIndex: 2 }}>
                  <span className="section-badge mb-4">
                    Dr. Akash Tamrakar | Jhansi & Gursarai
                  </span>
                  <h1 className="display-3 text-white mb-4">
                    Dr. Akash Tamrakar for physician care, chest care, and long-term recovery support.
                  </h1>
                  <p className="lead text-white text-opacity-85 mb-4">
                    Dr. Akash Tamrakar helps families with diabetes, thyroid disorders, heart and chest issues, blood pressure concerns, and chronic disease follow-up with clear and evidence-based care.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mb-5">
                    <NextLink href="/contact" title="Book Appointment" className="btn btn-power" />
                    <NextLink href={`https://wa.me/${siteInfo.whatsapp}`} title="WhatsApp Clinic" className="btn btn-teal" target="_blank" />
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
                      <p className="mb-0">{siteInfo.role} focused on chronic disease control, preventive care, and practical follow-up for families across Jhansi and nearby towns.</p>
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
                  <h3 className="h5 mb-2">Trusted Physician Care</h3>
                  <p className="mb-0">Known among families searching for the best doctor in Jhansi and nearby areas.</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '90ms' }}>
                <div className="clean-card h-100 text-center">
                  <Activity className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">Multi-condition Expertise</h3>
                  <p className="mb-0">Focused diagnosis and treatment for diabetes, thyroid, chest, heart, and BP disorders.</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '160ms' }}>
                <div className="clean-card h-100 text-center">
                  <MapPin className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">Jhansi and Gursarai Access</h3>
                  <p className="mb-0">Conveniently located in Jhansi, with regular patients from Gursarai and nearby towns.</p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '230ms' }}>
                <div className="clean-card h-100 text-center">
                  <CalendarCheck2 className="text-teal mb-3" size={28} aria-hidden="true" />
                  <h3 className="h5 mb-2">Structured Follow-up</h3>
                  <p className="mb-0">Clear treatment roadmap and follow-up planning for long-term medical stability.</p>
                </div>
              </div>
            </div>

            <div className="row align-items-center g-8">
              <div className="col-lg-5" data-reveal="left">
                <span className="section-badge mb-3">Why patients visit Dr. Akash</span>
                <h2 className="display-5 mb-4">Strong clinical judgement, calm communication, and consistent follow-up.</h2>
                <p className="mb-4">
                  Dr. Akash focuses on root-cause diagnosis and treatment plans patients can follow in daily life. This improves disease control and reduces confusion for long-term care.
                </p>
                <NextLink href="/about" title="Learn about the doctor" className="btn btn-outline-primary rounded-pill" />
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
                <span className="section-badge mb-3">Core services</span>
                <h2 className="display-5 mb-0">Specialized medical services for chronic disease control and stable recovery.</h2>
              </div>
              <NextLink href="/treatments" title="View all treatments" className="btn btn-teal rounded-pill mt-4 mt-md-0" />
            </div>
            <Cards arr={treatments} />
          </div>
        </section>

        <section className="wrapper py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card journey-card h-100">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Visit overview</span>
                  <h2 className="display-5 mb-4">Simple care flow, clear follow-up, and fast appointment coordination.</h2>
                  <p className="mb-4">
                    Patients can share their concerns, connect by phone or WhatsApp, and arrive with the right details already mapped out before the consultation begins.
                  </p>
                  <div className="journey-meta mb-4">
                    <span><Clock3 size={15} aria-hidden="true" />Structured consultation and follow-up</span>
                    <span><PhoneCall size={15} aria-hidden="true" />Fast appointment response</span>
                    <span><MapPin size={15} aria-hidden="true" />Patient-friendly clinic access</span>
                  </div>
                  <div className="journey-note p-4 rounded-4">
                    <p className="mb-2 fw-bold text-dark-blue">Before you visit</p>
                    <p className="mb-0 text-dark-blue text-opacity-85">
                      Keep previous reports, current medicines, and recent symptoms ready so the consultation starts with full context.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
                <span className="section-badge mb-3">Patient journey</span>
                <h2 className="display-5 mb-4">From first consultation to follow-up, the process stays simple.</h2>
                <ol className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><BadgeCheck size={16} aria-hidden="true" />Detailed consultation and symptom mapping</li>
                  <li><Stethoscope size={16} aria-hidden="true" />Targeted clinical and lab investigations</li>
                  <li><HeartPulse size={16} aria-hidden="true" />Medication, nutrition, and lifestyle optimization</li>
                  <li><ShieldCheck size={16} aria-hidden="true" />Follow-up for sustained disease control</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper brand-surface py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-5" data-reveal="left">
                <span className="section-badge mb-3 bg-soft-purple-tint text-teal">FAQs</span>
                <h2 className="display-5 mb-4">Common patient questions</h2>
                <p className="text-white text-opacity-85 mb-0">
                  These quick answers help patients understand treatment approach, follow-up, and what to expect before consultation.
                </p>
                <div className="faq-side-note mt-5 p-4 rounded-4">
                  <p className="mb-2 fw-bold text-white">Helpful before booking</p>
                  <p className="mb-0 text-white text-opacity-85">
                    You can contact the clinic directly if you need guidance on reports, timing, or which symptoms need priority attention.
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
                <span className="section-badge mb-3">Testimonials</span>
                <h2 className="display-5 mb-0">What patients say about their consultation experience.</h2>
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

        <section className="wrapper py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <span className="section-badge mb-3">Visit Dr. Akash Tamrakar</span>
                <h2 className="display-5 mb-4">Visit Dr. Akash Tamrakar in Jhansi, also serving Gursarai.</h2>
                <p className="mb-4">
                  {siteInfo.address.join(', ')}
                </p>
                <p className="mb-2"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                <p className="mb-0"><strong>Hours:</strong> {siteInfo.clinicHoursText}</p>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                <div className="subtle-card overflow-hidden">
                  <iframe
                    src={siteInfo.mapsEmbed}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Omkar Bhawan, in front of Vatsalya Hospital (Dr. Pramod Gupta), Karila ji road, Medical gate no 2, Jhansi, Uttar Pradesh 284128"
                  />
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
