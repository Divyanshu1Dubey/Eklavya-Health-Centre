import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { CheckCircle2, Star, Stethoscope } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import { useLanguage } from '../../src/context/LanguageContext';
import Seo from 'components/Seo';
import NextLink from 'components/NextLink';
import { treatments as staticTreatments } from '../../src/data';

const TreatmentDetail = ({ slug: staticSlug }) => {
  const { data: { treatments, siteInfo } } = useLanguage();
  const router = useRouter();
  const slug = staticSlug || router.query.slug;

  const treatment = treatments.find(t => t.slug === slug);
  const authorityCitations = siteInfo.authorityReferences.map((item) => ({
    '@type': 'CreativeWork',
    name: item.label,
    url: item.url,
    description: item.summary
  }));

  if (!treatment) {
    return (
      <div className="container py-20 text-center">
        <h2>Treatment not found.</h2>
      </div>
    );
  }

  const treatmentJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteInfo.url}/treatments/${slug}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteInfo.url}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Treatments',
            item: `${siteInfo.url}/treatments`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: treatment.title,
            item: `${siteInfo.url}/treatments/${slug}`
          }
        ]
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${siteInfo.url}/treatments/${slug}#webpage`,
        url: `${siteInfo.url}/treatments/${slug}`,
        name: `${treatment.title} treatment in Jhansi and Gursarai`,
        description: treatment.cardDescription,
        about: {
          '@type': 'MedicalCondition',
          name: treatment.title
        },
        reviewedBy: { '@id': `${siteInfo.url}#doctor` },
        publisher: { '@id': `${siteInfo.url}#clinic` },
        citation: authorityCitations,
        inLanguage: 'en-IN'
      },
      {
        '@type': 'MedicalTherapy',
        '@id': `${siteInfo.url}/treatments/${slug}#service`,
        name: `${treatment.title} consultation`,
        description: treatment.description || treatment.cardDescription,
        provider: { '@id': `${siteInfo.url}#doctor` },
        areaServed: siteInfo.serviceAreas?.map((area) => ({ '@type': 'Place', name: area })) || []
      }
    ]
  };

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title={`${treatment.title} Treatment in Jhansi | Dr. Akash`}
        description={`${treatment.cardDescription} Consult Dr. Akash Tamrakar in Jhansi and Gursarai for diagnosis, treatment planning, and follow-up care.`}
        canonical={`${siteInfo.url}/treatments/${slug}`}
        image={treatment.coverImage || `${siteInfo.url}${siteInfo.logo}`}
        keywords={[
          `dr akash tamrakar ${treatment.title.toLowerCase()} doctor`,
          `best ${treatment.title.toLowerCase()} doctor in jhansi`,
          'best doctor in jhansi',
          'dr akash tamrakar best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          `${treatment.title.toLowerCase()} in jhansi`,
          `${treatment.title.toLowerCase()} doctor in jhansi`
        ]}
        jsonLd={treatmentJsonLd}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper premium-section-band py-10 py-md-14">
          <div className="container">
            <div className="premium-dark-card treatment-hero-card p-4 p-md-6 p-xl-7" data-reveal="zoom">
              <div className="row align-items-center g-5">
                <div className="col-lg-6" data-reveal="left">
                  <span className="section-badge treatment-focus-chip mb-3">Treatment Focus</span>
                  <h1 className="display-3 mb-4">{treatment.title}</h1>
                  <p className="premium-copy-light mb-4">{treatment.description || treatment.cardDescription}</p>
                  <div className="journey-meta">
                    {(treatment.keyFacts || ['Focused consultation', 'Practical medication planning', 'Regular follow-up support']).slice(0, 3).map((fact) => (
                      <span key={fact} className="premium-list-card premium-list-card-dark treatment-fact-pill border-0 shadow-none">
                        <Star size={15} aria-hidden="true" />{fact}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '90ms' }}>
                  <div className="subtle-card premium-card-shell treatment-media-shell p-2 p-md-3 text-center">
                    {treatment.coverImage ? (
                      treatment.coverImage.endsWith('.mp4') ? (
                        <video
                          src={treatment.coverImage}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-100 rounded-4 shadow-lg object-fit-cover treatment-media"
                        />
                      ) : (
                        <img src={treatment.coverImage} className="img-fluid rounded-4 shadow-lg treatment-media" alt={`${treatment.title} treatment`} />
                      )
                    ) : (
                      <div className="clean-card d-inline-block p-5">
                        <Stethoscope size={72} className="text-teal" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="row g-8 align-items-center">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card premium-section-panel p-4 p-md-5">
                  <h2 className="h3 mb-4">What does this consultation include?</h2>
                  <p className="premium-copy mb-4">
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
                <div className="premium-section-panel p-4 p-md-5">
                  <div className="premium-section-heading-frame mb-4">
                    <span className="section-badge">Why this treatment matters</span>
                    <h2 className="h3 mb-0">Why does follow-up matter for {treatment.title.toLowerCase()} care?</h2>
                  </div>
                  <div className="row g-3">
                    {(treatment.keyFacts || []).map((fact) => (
                      <div className="col-12" key={fact}>
                        <div className="premium-list-card p-3 d-flex align-items-start gap-3">
                          <Star size={16} className="text-teal mt-1" aria-hidden="true" />
                          <span className="premium-copy">{fact}</span>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="premium-list-card p-3 d-flex align-items-start gap-3">
                        <CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" />
                        <span className="premium-copy">Bring relevant reports, prescriptions, and symptom history to make the visit more effective.</span>
                      </div>
                    </div>
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

export async function getStaticPaths() {
  return {
    paths: staticTreatments.map((treatment) => ({
      params: { slug: treatment.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  };
}

export default TreatmentDetail;
