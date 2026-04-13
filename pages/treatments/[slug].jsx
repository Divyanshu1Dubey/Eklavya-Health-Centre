import { useRouter } from 'next/router';
import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import { treatments } from '../../src/data';
import Seo from 'components/Seo';
import { siteInfo } from 'data';
import NextLink from 'components/NextLink';

const TreatmentDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Handing the case where router is not ready on first mount
  if (!router.isReady) return null;

  const treatment = treatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <div className="container py-20 text-center">
        <h2>Treatment not found.</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title={treatment.title}
        description={`${treatment.cardDescription} Get focused consultation and follow-up at Eklavya Healthcare Centre in Jhansi.`}
        canonical={`${siteInfo.url}/treatments/${slug}`}
        image={treatment.coverImage || `${siteInfo.url}${siteInfo.logo}`}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 text-white">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <span className="section-badge mb-3 bg-white text-dark">Treatment focus</span>
                  <h1 className="display-3 text-white mb-4">{treatment.title}</h1>
                  <p className="lead text-white text-opacity-85 mb-0">{treatment.cardDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6">
                <div className="clean-card p-4 p-md-5">
                  <h2 className="h3 mb-4">What this consultation covers</h2>
                  <p className="lead text-justify mb-4">
                    At Eklavya Healthcare Centre, treatment is not just about prescribing medicine. The consultation is designed to understand the pattern of symptoms, review reports, and create a realistic plan for control and follow-up.
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><i className="uil uil-check" />Clinical review of the current concern</li>
                    <li><i className="uil uil-check" />Relevant test or imaging guidance when needed</li>
                    <li><i className="uil uil-check" />Medication optimization and practical advice</li>
                    <li><i className="uil uil-check" />Long-term follow-up for chronic care stability</li>
                  </ul>
                  <NextLink href="/contact" title="Book an appointment" className="btn btn-power rounded-pill mt-4" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subtle-card p-3 p-md-4 text-center">
                  {treatment.coverImage ? (
                    <img src={treatment.coverImage} className="img-fluid rounded-4 shadow-lg" alt={treatment.title} />
                  ) : (
                    <div className="clean-card d-inline-block p-5">
                      <img src={treatment.icon} width="150" height="150" alt={treatment.title} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default TreatmentDetail;
