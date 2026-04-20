import { Fragment } from 'react';
import { CheckCircle2 } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import Cards from 'components/Cards';
import { consultationHours, treatments } from '../src/data';
import Seo from 'components/Seo';
import { siteInfo } from 'data';
import NextLink from 'components/NextLink';

const TreatmentsPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Conditions and Treatments"
        description="Explore expert medical treatment services available for patients from Jhansi and Gursarai, including diabetes, thyroid, heart, chest, and chronic disease follow-up care by a trusted physician."
        canonical={`${siteInfo.url}/treatments`}
        keywords={[
          'best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'diabetes doctor in jhansi',
          'thyroid doctor in jhansi',
          'chronic disease specialist in jhansi'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="clinic-panel p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center">
                <div className="col-lg-8" data-reveal="left">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Services</span>
                  <h1 className="display-3 text-dark-blue mb-4">Focused treatment plans for common and chronic medical conditions.</h1>
                  <p className="lead text-dark-blue text-opacity-85 mb-0">
                    Every service is designed around early diagnosis, practical control, and long-term follow-up support for patients from Jhansi and Gursarai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <Cards arr={treatments} />
            <div className="clean-card mt-8 p-4 p-md-5" data-reveal="up" style={{ '--reveal-delay': '120ms' }}>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h2 className="h3 mb-2">Need help choosing the right consultation?</h2>
                  <p className="mb-0">Call or WhatsApp the clinic and share your symptoms, reports, or medicines before the visit.</p>
                </div>
                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                  <NextLink href="/contact" title="Contact clinic" className="btn btn-power rounded-pill" />
                </div>
              </div>
            </div>

            <div className="clean-card mt-8 p-4 p-md-5" data-reveal="zoom" style={{ '--reveal-delay': '160ms' }}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Treatments Available</span>
                  <h3 className="h4 mb-3">Our clinic offers a wide range of medical services tailored for chronic condition management.</h3>
                  <div className="row g-2">
                    {treatments.map((item) => (
                      <div className="col-sm-6" key={item.slug}>
                        <div className="p-2 rounded-3 bg-light-grey d-flex align-items-center gap-2 h-100">
                          <CheckCircle2 size={17} className="text-teal" aria-hidden="true" />
                          <span className="fw-bold text-dark-blue">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Consultation Hours</span>
                  <h3 className="h4 mb-3">Convenient clinic timings for regular check-ups and follow-up care.</h3>
                  <div className="table-responsive">
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
