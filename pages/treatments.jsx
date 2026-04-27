import { Fragment } from 'react';
import { CheckCircle2, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import Cards from 'components/Cards';
import { useLanguage } from '../src/context/LanguageContext';
import Seo from 'components/Seo';
import NextLink from 'components/NextLink';

const TreatmentsPage = () => {
  const { data: { consultationHours, siteInfo, treatments } } = useLanguage();
  const treatmentsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteInfo.url}/treatments#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteInfo.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Treatments', item: `${siteInfo.url}/treatments` }
        ]
      },
      {
        '@type': 'ItemList',
        '@id': `${siteInfo.url}/treatments#itemlist`,
        name: 'Treatments by Dr. Akash Tamrakar',
        itemListElement: treatments.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${item.title} treatment in Jhansi`,
          url: `${siteInfo.url}${item.url}`
        }))
      }
    ]
  };

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Treatments by Dr. Akash Tamrakar | Best Doctor in Jhansi"
        description="Explore physician treatment services by Dr. Akash Tamrakar for patients in Jhansi and Gursarai, including thyroid, heart, chest, lungs, kidney, liver, asthma, blood pressure, and chronic disease follow-up care."
        canonical={`${siteInfo.url}/treatments`}
        keywords={[
          'dr akash tamrakar treatments',
          'dr akash tamrakar best doctor in jhansi',
          'dr akash tamrakar gursarai jhansi',
          'best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'diabetes doctor in jhansi',
          'thyroid doctor in jhansi',
          'chronic disease specialist in jhansi'
        ]}
        jsonLd={treatmentsJsonLd}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper premium-section-band py-10 py-md-14">
          <div className="container">
            <div className="premium-dark-card p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center g-4">
                <div className="col-lg-7" data-reveal="left">
                  <span className="section-badge mb-3">Services</span>
                  <h1 className="display-3 mb-4">Focused treatment plans for common and chronic medical conditions.</h1>
                  <p className="premium-copy-light mb-0">
                    Every service is designed around early diagnosis, practical control, and long-term follow-up support for patients from Jhansi and Gursarai.
                  </p>
                </div>
                <div className="col-lg-5" data-reveal="right" style={{ '--reveal-delay': '90ms' }}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="premium-list-card premium-list-card-dark p-3 h-100 d-flex align-items-start gap-2">
                        <Stethoscope size={18} aria-hidden="true" />
                        <span>Symptom-led consultation and report review</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="premium-list-card premium-list-card-dark p-3 h-100 d-flex align-items-start gap-2">
                        <HeartPulse size={18} aria-hidden="true" />
                        <span>Long-term planning for chronic disease stability</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="premium-list-card premium-list-card-dark p-3 h-100 d-flex align-items-start gap-2">
                        <ShieldCheck size={18} aria-hidden="true" />
                        <span>Cause-based care instead of symptom-only treatment</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="premium-list-card premium-list-card-dark p-3 h-100 d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} aria-hidden="true" />
                        <span>Clear follow-up support for patients and families</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="premium-section-header centered mb-6" data-reveal="zoom">
              <div className="premium-section-heading-frame">
                <span className="section-badge">Our Specializations</span>
                <h2 className="display-5 section-heading-dark mb-0">Browse treatment categories with a stronger, more organized visual flow.</h2>
              </div>
            </div>
            <Cards arr={treatments} />
            <div className="clean-card premium-section-panel mt-8 p-4 p-md-5" data-reveal="up" style={{ '--reveal-delay': '120ms' }}>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h2 className="h3 mb-2">Need help choosing the right consultation?</h2>
                  <p className="mb-0 premium-copy">Call or WhatsApp the clinic and share your symptoms, reports, or medicines before the visit.</p>
                </div>
                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <NextLink href="/contact" title="Contact clinic" className="btn btn-power rounded-pill" />
                </div>
              </div>
            </div>

            <div className="clean-card premium-section-panel mt-8 p-4 p-md-5" data-reveal="zoom" style={{ '--reveal-delay': '160ms' }}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <span className="section-badge mb-3">Treatments Available</span>
                  <h3 className="h4 mb-3">Our clinic offers a wide range of medical services tailored for chronic condition management.</h3>
                  <div className="row g-2">
                    {treatments.map((item) => (
                      <div className="col-sm-6" key={item.slug}>
                        <div className="p-2 premium-list-card d-flex align-items-center gap-2 h-100">
                          <CheckCircle2 size={17} className="text-teal" aria-hidden="true" />
                          <span className="fw-bold text-dark-blue">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <span className="section-badge mb-3">Consultation Hours</span>
                  <h3 className="h4 mb-3">Convenient clinic timings for regular check-ups and follow-up care.</h3>
                  <div className="table-responsive premium-table-wrap">
                    <table className="table table-borderless align-middle mb-0">
                      <tbody>
                        {consultationHours.map((item) => (
                          <tr key={item.day}>
                            <td className="fw-bold text-dark-blue ps-0">{item.day}</td>
                            <td className="text-dark-blue text-opacity-85 text-end pe-0">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-end">
                    <NextLink href="/contact" title="Book now" className="btn btn-teal rounded-pill" />
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

export default TreatmentsPage;
