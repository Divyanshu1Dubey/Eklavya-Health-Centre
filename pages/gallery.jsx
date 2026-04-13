import { Fragment } from 'react';
import PageProgress from 'components/PageProgress';
import Image from 'next/image';
import Seo from 'components/Seo';
import { siteInfo } from 'data';

const images = [
  '/img/dr-akash-2.jpeg',
  '/img/dr-akash-3.jpeg',
  '/img/dr-akash-4.jpeg',
  '/img/dr-akash-5.jpeg',
  '/img/dr-akash-profile.png',
  '/img/d1.png',
  '/img/d2.png',
  '/img/d3.png',
  '/img/d4.png',
  '/img/d6.png',
  '/img/d7.png',
  '/img/d8.png',
  '/img/d9.png'
];

const GalleryPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="Facilities and Gallery"
        description="Explore the clinic environment, patient-facing facilities, and treatment visuals at Eklavya Healthcare Centre in Jhansi."
        canonical={`${siteInfo.url}/gallery`}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 text-white">
              <div className="row align-items-center gy-6">
                <div className="col-lg-8">
                  <span className="section-badge mb-3 bg-white text-dark">Facilities</span>
                  <h1 className="display-3 text-white mb-4">A clear, reassuring clinic environment for patients and families.</h1>
                  <p className="lead text-white text-opacity-85 mb-0">
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
              {images.map((src, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="clean-card p-2 h-100">
                    <div style={{ aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden', borderRadius: '18px' }}>
                      <Image
                        src={src}
                        alt={`Clinic gallery image ${index + 1} at ${siteInfo.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
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
