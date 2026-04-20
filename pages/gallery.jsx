import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import Image from 'next/image';
import Seo from 'components/Seo';
import { siteInfo } from 'data';

const galleryItems = [
  {
    src: '/img/dr-akash-2.jpeg',
    title: 'Doctor interaction',
    subtitle: 'Clear communication with families'
  },
  {
    src: '/img/dr-akash-3.jpeg',
    title: 'Clinical review',
    subtitle: 'Evidence-based diagnosis and follow-up'
  },
  {
    src: '/img/dr-akash-profile.png',
    title: 'Patient support',
    subtitle: 'Simple and reassuring care flow'
  },
  {
    src: '/img/dr-akash-4.jpeg',
    title: 'Treatment planning',
    subtitle: 'Personalized plan for chronic conditions'
  },
  {
    src: '/img/dr-akash-5.jpeg',
    title: 'Clinic environment',
    subtitle: 'Organized space for smooth visits'
  },
  {
    src: '/img/map.png',
    title: 'Easy location access',
    subtitle: 'Near Medical Gate No. 2, Jhansi'
  },
  {
    src: '/img/dr-akash-profile.png',
    title: 'Specialist profile',
    subtitle: 'General medicine and critical care expertise'
  }
];

const GalleryPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Facilities and Gallery"
        description="Explore clinic facilities, patient experience, and treatment visuals at Eklavya Healthcare Centre, trusted by patients from Jhansi and Gursarai."
        canonical={`${siteInfo.url}/gallery`}
        keywords={[
          'best doctor clinic in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'clinic gallery jhansi',
          'eklavya healthcare centre photos'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="clinic-panel p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center gy-6">
                <div className="col-lg-8" data-reveal="left">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Facilities</span>
                  <h1 className="display-3 text-dark-blue mb-4">A clear, reassuring clinic environment for patients and families.</h1>
                  <p className="lead text-dark-blue text-opacity-85 mb-0">
                    The clinic layout and visuals are designed to feel organized, calm, and easy to navigate when patients arrive for consultation or follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="row g-4">
              {galleryItems.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index} data-reveal="zoom" style={{ '--reveal-delay': `${index * 70}ms` }}>
                  <div className="gallery-card h-100">
                    <div className="gallery-media" style={{ aspectRatio: '4 / 3', position: 'relative', overflow: 'hidden' }}>
                      <Image
                        src={item.src}
                        alt={`Clinic gallery image ${index + 1} at ${siteInfo.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="gallery-copy">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default GalleryPage;
