import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { siteInfo } from 'data';

const GalleryPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Clinic Gallery | Dr. Akash Tamrakar Best Doctor in Jhansi"
        description="View clinic facilities, patient-care environment, and consultation spaces at Eklavya Healthcare Centre with Dr. Akash Tamrakar, trusted by families searching for the best doctor in Jhansi and Gursarai."
        canonical={`${siteInfo.url}/gallery`}
        keywords={[
          'dr akash tamrakar clinic',
          'dr akash tamrakar best doctor in jhansi',
          'dr akash tamrakar gursarai jhansi',
          'best doctor clinic in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'clinic gallery jhansi',
          'eklavya healthcare centre photos'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="premium-section-panel premium-section-panel-glow p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center gy-6">
                <div className="col-lg-8" data-reveal="left">
                  <span className="section-badge mb-3">Facilities</span>
                  <h1 className="display-3 text-dark-blue mb-4 section-heading-dark">A clear, reassuring clinic environment for patients and families.</h1>
                  <p className="lead premium-copy mb-0">
                    The clinic layout and visuals are designed to feel organized, calm, and easy to navigate when patients arrive for consultation or follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center" data-reveal="zoom">
                <div className="premium-section-panel p-5 p-md-6">
                  <h2 className="display-4 text-dark-blue mb-3">Coming Soon</h2>
                  <p className="lead premium-copy mb-0">
                    Clinic gallery and facility images will be updated shortly. Thank you for your patience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default GalleryPage;

