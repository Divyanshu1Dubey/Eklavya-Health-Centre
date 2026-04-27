import { Fragment } from 'react';
import Link from 'next/link';
import { CheckCircle2, Clock3, MapPin, PhoneCall } from 'lucide-react';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import NextLink from 'components/NextLink';
import { useLanguage } from '../src/context/LanguageContext';

const toGoogleMapsSearchUrl = (mapEmbed) => {
  if (!mapEmbed) return '';
  try {
    const parsed = new URL(mapEmbed);
    const query = parsed.searchParams.get('q');
    return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : '';
  } catch {
    return '';
  }
};

const BestDoctorJhansiPage = () => {
  const { data: { siteInfo, treatments } } = useLanguage();
  const jhansiClinic = siteInfo.locations.find((location) => location.id === 'jhansi') || siteInfo.locations[0];
  const mapSearchUrl = toGoogleMapsSearchUrl(jhansiClinic?.mapEmbed);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteInfo.url}/best-doctor-in-jhansi#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteInfo.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Best Doctor in Jhansi', item: `${siteInfo.url}/best-doctor-in-jhansi` }
        ]
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${siteInfo.url}/best-doctor-in-jhansi#webpage`,
        url: `${siteInfo.url}/best-doctor-in-jhansi`,
        name: 'Best Doctor in Jhansi - Dr. Akash Tamrakar',
        description:
          'Dr. Akash Tamrakar offers physician and chronic care consultations for families in Jhansi with focused diagnosis, practical treatment plans, and structured follow-up.',
        reviewedBy: { '@id': `${siteInfo.url}#doctor` },
        about: {
          '@type': 'Place',
          name: 'Jhansi, Uttar Pradesh'
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${siteInfo.url}#jhansi-clinic-page`,
        name: `${siteInfo.name} - Jhansi Clinic`,
        url: `${siteInfo.url}/best-doctor-in-jhansi`,
        parentOrganization: { '@id': `${siteInfo.url}#clinic` },
        hasMap: mapSearchUrl || undefined,
        telephone: siteInfo.appointmentPhone || siteInfo.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: Array.isArray(jhansiClinic?.address) ? jhansiClinic.address.join(', ') : '',
          addressLocality: 'Jhansi',
          addressRegion: siteInfo.geo?.region || 'Uttar Pradesh',
          postalCode: siteInfo.geo?.postalCode || '284128',
          addressCountry: 'IN'
        }
      }
    ]
  };

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Best Doctor in Jhansi | Dr. Akash Tamrakar"
        description="Looking for the best doctor in Jhansi? Consult Dr. Akash Tamrakar for diabetes, thyroid, heart, chest, blood pressure, and chronic care with clear diagnosis and follow-up support."
        canonical={`${siteInfo.url}/best-doctor-in-jhansi`}
        keywords={[
          'best doctor in jhansi',
          'dr akash tamrakar best doctor in jhansi',
          'akash tamrakar doctor jhansi',
          'best physician in jhansi',
          'general physician in jhansi',
          'best chest doctor in jhansi',
          'doctor in jhansi medical gate 2',
          'best doctor near karguan road jhansi'
        ]}
        jsonLd={jsonLd}
      />

      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper premium-section-band py-10 py-md-14">
          <div className="container">
            <div className="premium-dark-card p-5 p-md-6" data-reveal="zoom">
              <span className="section-badge mb-3">Locality Focus</span>
              <h1 className="display-4 mb-3">Best Doctor in Jhansi for family physician and chronic care support.</h1>
              <p className="premium-copy-light mb-4">
                Dr. Akash Tamrakar is trusted by families in Jhansi for practical diagnosis, treatment planning,
                and consistent follow-up across diabetes, thyroid, chest, heart, kidney, and blood pressure concerns.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <NextLink href="/contact" title="Book Appointment" className="btn btn-power rounded-pill" />
                <NextLink href="/treatments" title="Explore Treatments" className="btn btn-teal rounded-pill" />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-start">
              <div className="col-lg-7" data-reveal="left">
                <div className="premium-section-panel p-4 p-md-5">
                  <h2 className="h3 mb-4">Why patients in Jhansi choose Dr. Akash Tamrakar</h2>
                  <div className="d-grid gap-3">
                    <div className="premium-list-card p-3 d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" />
                      <span>Evidence-based physician consultation for acute and chronic health issues.</span>
                    </div>
                    <div className="premium-list-card p-3 d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" />
                      <span>Clear explanation of diagnosis, medicine plan, and follow-up schedule.</span>
                    </div>
                    <div className="premium-list-card p-3 d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" />
                      <span>Comprehensive care for diabetes, thyroid, chest, heart, and blood pressure concerns.</span>
                    </div>
                  </div>

                  <h3 className="h5 mt-4 mb-3">Popular consultations in Jhansi</h3>
                  <div className="row g-2">
                    {treatments.slice(0, 6).map((item) => (
                      <div className="col-md-6" key={item.slug}>
                        <Link href={item.url} className="premium-list-card p-2 px-3 d-flex align-items-center gap-2">
                          <CheckCircle2 size={15} className="text-teal" aria-hidden="true" />
                          <span className="fw-semibold text-dark-blue">{item.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-5" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                <div className="premium-section-panel p-4 p-md-5">
                  <h2 className="h4 mb-3">Jhansi Clinic Details</h2>
                  <p className="mb-3 d-flex align-items-start gap-2">
                    <MapPin size={16} className="text-teal mt-1" aria-hidden="true" />
                    <span>{Array.isArray(jhansiClinic?.address) ? jhansiClinic.address.join(', ') : 'Jhansi Clinic'}</span>
                  </p>
                  <p className="mb-4 d-flex align-items-start gap-2">
                    <Clock3 size={16} className="text-teal mt-1" aria-hidden="true" />
                    <span>{jhansiClinic?.timings}</span>
                  </p>
                  <p className="mb-4 d-flex align-items-start gap-2">
                    <PhoneCall size={16} className="text-teal mt-1" aria-hidden="true" />
                    <span>{siteInfo.appointmentPhone || siteInfo.phone}</span>
                  </p>
                  {jhansiClinic?.mapEmbed ? (
                    <div className="map-frame overflow-hidden p-2 mb-3">
                      <iframe
                        src={jhansiClinic.mapEmbed}
                        width="100%"
                        height="220"
                        style={{ border: 0, borderRadius: '8px' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Jhansi Clinic Map"
                      />
                    </div>
                  ) : null}
                  {mapSearchUrl ? (
                    <a href={mapSearchUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary rounded-pill w-100">
                      Open Location in Google Maps
                    </a>
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

export default BestDoctorJhansiPage;
