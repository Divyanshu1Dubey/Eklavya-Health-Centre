import { Fragment } from 'react';
import Image from 'next/image';
import NextLink from 'components/NextLink';

import PageProgress from 'components/PageProgress';
import Cards from 'components/Cards';
import Seo from 'components/Seo';
import { careHighlights, faqs, siteInfo, treatments, trustPoints } from 'data';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Best General Physician in Jhansi"
        description="Eklavya Healthcare Centre in Jhansi offers expert general medicine, critical care, diabetes, thyroid, heart, chest, and hypertension treatment by Dr. Akash Tamrakar."
        canonical={siteInfo.url}
        image={`${siteInfo.url}${siteInfo.logo}`}
      />

      <main className="content-wrapper overflow-hidden">
        <section className="wrapper pt-6 pb-10 pb-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 p-lg-10 text-white">
              <div className="row align-items-center gy-8">
                <div className="col-lg-7 position-relative" style={{ zIndex: 2 }}>
                  <span className="section-badge mb-4">
                    Trusted clinic in Jhansi
                  </span>
                  <h1 className="display-3 text-white mb-4">
                    Personalized medicine, critical care insight, and faster recovery plans.
                  </h1>
                  <p className="lead text-white text-opacity-85 mb-4">
                    Eklavya Healthcare Centre helps patients and families manage diabetes, thyroid disorders, hypertension, asthma, chest complaints, and other long-term health concerns with clear diagnosis and practical treatment.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mb-5">
                    <NextLink href="/contact" title="Book Appointment" className="btn btn-power" />
                    <NextLink href={`https://wa.me/${siteInfo.whatsapp}`} title="WhatsApp Clinic" className="btn btn-teal" target="_blank" />
                  </div>
                  <div className="d-flex flex-wrap">
                    {trustPoints.map((point) => (
                      <span className="trust-pill" key={point}>
                        <i className="uil uil-check" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5 position-relative" style={{ zIndex: 2 }}>
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
                      <p className="mb-1 fw-bold text-teal">Dr. Akash Tamrakar</p>
                      <p className="mb-0">MBBS, DNB. General Medicine and critical care specialist focused on chronic disease management and practical patient recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="row align-items-center g-8">
              <div className="col-lg-5">
                <span className="section-badge mb-3">Why patients visit us</span>
                <h2 className="display-5 mb-4">Strong clinical judgement, calm communication, and consistent follow-up.</h2>
                <p className="mb-4">
                  We focus on the real causes of recurring illness and on treatment plans patients can actually follow. That means less confusion, fewer repeated visits, and clearer recovery steps for families in Jhansi and nearby areas.
                </p>
                <NextLink href="/about" title="Learn about the doctor" className="btn btn-outline-primary rounded-pill" />
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  {careHighlights.map((item) => (
                    <div className="col-md-6" key={item.id}>
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
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-6">
              <div>
                <span className="section-badge mb-3">Core services</span>
                <h2 className="display-5 mb-0">Medical care built around chronic illness, prevention, and long-term stability.</h2>
              </div>
              <NextLink href="/treatments" title="View all treatments" className="btn btn-teal rounded-pill mt-4 mt-md-0" />
            </div>
            <Cards arr={treatments} />
          </div>
        </section>

        <section className="wrapper py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6">
                <div className="clean-card p-3 p-md-4">
                  <Image
                    src="/img/home/hero-bg.webp"
                    alt="Clinic environment"
                    width={1200}
                    height={900}
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <span className="section-badge mb-3">Patient journey</span>
                <h2 className="display-5 mb-4">From first consultation to follow-up, the process stays simple.</h2>
                <ol className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><i className="uil uil-check" />Clinical consultation and symptom review</li>
                  <li><i className="uil uil-check" />Targeted tests or ECG/echo when needed</li>
                  <li><i className="uil uil-check" />Medication, lifestyle, and monitoring guidance</li>
                  <li><i className="uil uil-check" />Follow-up care for long-term control</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper brand-surface py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-5">
                <span className="section-badge mb-3 bg-white text-dark">FAQs</span>
                <h2 className="display-5 mb-4">Common patient questions</h2>
                <p className="text-white text-opacity-85 mb-0">
                  These answers help new visitors know what to expect before they visit the clinic.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="accordion accordion-wrapper" id="clinicFaq">
                  {faqs.map((faq, index) => (
                    <div className="card plain mb-3" key={faq.id}>
                      <div className="card-header">
                        <button
                          className={index === 0 ? 'collapsed' : ''}
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq-${faq.id}`}
                          aria-expanded={index !== 0}
                          aria-controls={`faq-${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`faq-${faq.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#clinicFaq"
                      >
                        <div className="card-body text-white text-opacity-85">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-12 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6">
                <span className="section-badge mb-3">Visit the clinic</span>
                <h2 className="display-5 mb-4">Located for easy access in Jhansi.</h2>
                <p className="mb-4">
                  {siteInfo.address.join(', ')}
                </p>
                <p className="mb-2"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                <p className="mb-0"><strong>Hours:</strong> Mon-Sat (10am to 5pm) | Wed & Sun (12pm to 5pm)</p>
              </div>
              <div className="col-lg-6">
                <div className="subtle-card overflow-hidden">
                  <iframe
                    src={siteInfo.mapsEmbed}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eklavya Healthcare Centre location"
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
