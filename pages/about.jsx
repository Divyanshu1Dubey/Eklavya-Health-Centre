import { Fragment } from 'react';
import { CheckCircle2, BadgeCheck } from 'lucide-react';
import About from 'components/About';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { clinicStats, missionVision, siteInfo, treatments } from 'data';

const AboutPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title={`About ${siteInfo.doctorName}`}
        description={`Meet ${siteInfo.doctorName}, ${siteInfo.role} at ${siteInfo.name}, trusted as one of the best physician and chest doctor options for patients in Jhansi and Gursarai.`}
        canonical={`${siteInfo.url}/about`}
        keywords={[
          'best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'general physician in jhansi',
          'critical care specialist in jhansi'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="clinic-panel p-6 p-md-8" data-reveal="zoom">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7" data-reveal="left">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">About Dr. Akash Tamrakar</span>
                  <h1 className="display-3 text-dark-blue mb-4">Patient-first care led by Dr. Akash Tamrakar in Jhansi and nearby Gursarai.</h1>
                  <p className="lead text-dark-blue text-opacity-85 mb-0">
                    Dr. Akash Tamrakar focuses on clear diagnosis, practical treatment planning, and long-term support for chronic medical conditions.
                  </p>
                </div>
                <div className="col-lg-5" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
                  <div className="subtle-card p-4 bg-white text-dark-blue">
                    <p className="fw-bold text-teal mb-2">Academic & clinical bio</p>
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      {siteInfo.doctorBio.map((point) => (
                        <li key={point}><CheckCircle2 size={16} aria-hidden="true" />{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="container">
            <div className="section-shell mb-10" data-reveal="zoom" style={{ '--reveal-delay': '120ms' }}>
              <div className="px-4 px-md-8 py-10">
                <About
                  headingH1="Clinical"
                  span="profile"
                  para={`${siteInfo.doctorName} completed MBBS in 2018 from Gandhi Medical College, Bhopal, followed by internship in 2019. He went on to complete DNB Medicine from NBE at Smt. Rasilaben Sevantilal Shah Venus Hospital, Surat.`}
                  para2="His training also includes senior residency at Dr. Ram Manohar Lohia Hospital and MLB Medical College, Jhansi, plus an Assistant Professorship at MLB Medical College, Jhansi."
                  para3="He also completed a 2D Echo fellowship from the Indian Association of 2D Echo Cardiography, Delhi, at JROP Institute."
                  imgPosition="left"
                  src="/img/dr-akash-profile.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="row g-6">
              <div className="col-lg-6" data-reveal="left">
                <div className="clean-card h-100">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Mission</span>
                  <h2 className="h3 mb-3">Our Mission</h2>
                  <p className="mb-0">{missionVision.mission}</p>
                </div>
              </div>
              <div className="col-lg-6" data-reveal="right" style={{ '--reveal-delay': '90ms' }}>
                <div className="clean-card h-100">
                  <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Vision</span>
                  <h2 className="h3 mb-3">Our Vision</h2>
                  <p className="mb-0">{missionVision.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="clean-card" data-reveal="zoom">
              <div className="row g-4">
                {clinicStats.map((item) => (
                  <div className="col-md-4" key={item.id}>
                    <div className="p-4 rounded-4 bg-soft-purple-tint h-100 text-center">
                      <p className="display-6 mb-1 text-teal fw-bold">{item.value}</p>
                      <p className="mb-0 fw-bold text-dark-blue">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="clean-card" data-reveal="zoom">
              <span className="section-badge mb-3 bg-soft-purple-tint text-teal">Our Members</span>
              <h2 className="h3 mb-3">{siteInfo.memberProfile.heading}</h2>
              <p className="mb-4"><strong>Speciality:</strong> {siteInfo.memberProfile.speciality}</p>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                {siteInfo.memberProfile.points.map((point) => (
                  <li key={point}><BadgeCheck size={16} aria-hidden="true" />{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="wrapper pb-10 pb-md-14">
          <div className="container">
            <div className="clean-card" data-reveal="left">
              <span className="section-badge mb-3">Treatments Available</span>
              <div className="row g-3">
                {treatments.map((item) => (
                  <div className="col-md-4" key={item.slug}>
                    <div className="p-3 rounded-4 bg-light-grey h-100 d-flex align-items-center gap-2">
                      <CheckCircle2 size={17} className="text-teal" aria-hidden="true" />
                      <span className="fw-bold text-dark-blue">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutPage;
