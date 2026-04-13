import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { siteInfo } from 'data';

const ContactPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Contact and Book Appointment"
        description="Contact Eklavya Healthcare Centre in Jhansi for appointments with Dr. Akash Tamrakar. Call, WhatsApp, or visit the clinic for general medicine and critical care support."
        canonical={`${siteInfo.url}/contact`}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 text-white">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7">
                  <span className="section-badge mb-3 bg-white text-dark">Book an appointment</span>
                  <h1 className="display-3 text-white mb-4">Talk to the clinic, ask a question, or plan your visit.</h1>
                  <p className="lead text-white text-opacity-85 mb-0">
                    The fastest way to connect is by phone or WhatsApp. For long-term care, bring your previous reports so the consultation can stay focused and efficient.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="subtle-card p-4 bg-white text-dark-blue">
                    <p className="fw-bold text-teal mb-2">Quick contact</p>
                    <p className="mb-2"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                    <p className="mb-2"><strong>Alt:</strong> <a href={`tel:${siteInfo.altPhone.replace(/\s/g, '')}`}>{siteInfo.altPhone}</a></p>
                    <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-start">
              <div className="col-lg-5">
                <div className="clean-card h-100">
                  <h2 className="h3 mb-4">Clinic details</h2>
                  <p className="mb-3">{siteInfo.address.join(', ')}</p>
                  <p className="mb-3"><strong>Phone:</strong> <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>{siteInfo.phone}</a></p>
                  <p className="mb-3"><strong>Alt phone:</strong> <a href={`tel:${siteInfo.altPhone.replace(/\s/g, '')}`}>{siteInfo.altPhone}</a></p>
                  <p className="mb-3"><strong>Email:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                  <p className="mb-0"><strong>Hours:</strong> Mon-Sat (10:00 AM to 5:00 PM) | Wed & Sun (12:00 PM to 5:00 PM)</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="subtle-card overflow-hidden">
                  <iframe
                    src={siteInfo.mapsEmbed}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
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

export default ContactPage;
