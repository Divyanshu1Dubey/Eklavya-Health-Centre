import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import Cards from 'components/Cards';
import { treatments } from '../src/data';
import Seo from 'components/Seo';
import { siteInfo } from 'data';
import NextLink from 'components/NextLink';

const TreatmentsPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Conditions and Treatments"
        description="Explore the treatment areas covered at Eklavya Healthcare Centre in Jhansi, including diabetes, thyroid, heart health, chest care, asthma, kidney, liver, and blood pressure management."
        canonical={`${siteInfo.url}/treatments`}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 text-white">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <span className="section-badge mb-3 bg-white text-dark">Services</span>
                  <h1 className="display-3 text-white mb-4">Focused treatment plans for common and chronic medical conditions.</h1>
                  <p className="lead text-white text-opacity-85 mb-0">
                    The service list reflects the clinic's main strengths: ongoing disease control, preventive medicine, and clear follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <Cards arr={treatments} />
            <div className="clean-card mt-8 p-4 p-md-5">
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
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default TreatmentsPage;
