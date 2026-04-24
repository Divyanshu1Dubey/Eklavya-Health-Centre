import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { CheckCircle2, Star, Stethoscope } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import { useLanguage } from '../../src/context/LanguageContext';
import Seo from 'components/Seo';
import NextLink from 'components/NextLink';

const TreatmentDetail = () => {
  const { data: { treatments, siteInfo } } = useLanguage();
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
        description={`${treatment.cardDescription} Get focused consultation and follow-up at Eklavya Healthcare Centre, trusted as a physician and chest care clinic for patients in Jhansi and Gursarai.`}
        canonical={`${siteInfo.url}/treatments/${slug}`}
        image={treatment.coverImage || `${siteInfo.url}${siteInfo.logo}`}
        keywords={[
          'best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          `${treatment.title.toLowerCase()} in jhansi`,
          `${treatment.title.toLowerCase()} doctor in jhansi`
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="clinic-panel p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center">
                <div className="col-lg-8" data-reveal="left">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Treatment focus</span>
                  <h1 className="display-3 text-dark-blue mb-4">{treatment.title}</h1>
                  <p className="lead text-dark-blue text-opacity-85 mb-0">{treatment.description || treatment.cardDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card p-4 p-md-5">
                  <h2 className="h3 mb-4">What this consultation includes</h2>
                  <p className="lead text-justify mb-4">
                    {treatment.description || 'The consultation is designed to understand symptoms, review reports, and create a focused treatment and follow-up roadmap.'}
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    {(treatment.focusAreas || [
                      'Clinical review and symptom correlation',
                      'Relevant test guidance when required',
                      'Medication planning with practical advice',
                      'Follow-up support for long-term stability'
                    ]).map((point) => (
                      <li key={point}><CheckCircle2 size={16} aria-hidden="true" />{point}</li>
                    ))}
                  </ul>
                  <NextLink href="/contact" title="Book an appointment" className="btn btn-power rounded-pill mt-4" />
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
                <div className="subtle-card p-3 p-md-4 text-center">
                  {treatment.coverImage ? (
                    treatment.coverImage.endsWith('.mp4') ? (
                      <video
                        src={treatment.coverImage}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-100 rounded-4 shadow-lg object-fit-cover"
                        style={{ height: '400px' }}
                      />
                    ) : (
                      <img src={treatment.coverImage} className="img-fluid rounded-4 shadow-lg" alt={`${treatment.title} treatment`} />
                    )
                  ) : (
                    <div className="clean-card d-inline-block p-5">
                      <Stethoscope size={72} className="text-teal" aria-hidden="true" />
                    </div>
                  )}
                  {treatment.keyFacts?.length ? (
                    <div className="journey-meta mt-4 justify-content-center">
                      {treatment.keyFacts.map((fact) => (
                        <span key={fact}><Star size={15} aria-hidden="true" />{fact}</span>
                      ))}
                    </div>
                  ) : null}
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
