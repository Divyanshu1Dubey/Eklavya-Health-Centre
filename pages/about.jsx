import { Fragment } from 'react';
import About from 'components/About';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import { siteInfo, trustPoints } from 'data';

const AboutPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <Seo
        title="About Dr. Akash Tamrakar"
        description="Meet Dr. Akash Tamrakar, the General Medicine and Critical Care specialist at Eklavya Healthcare Centre in Jhansi. Learn about the clinic's patient-first approach, chronic care support, and long-term treatment philosophy."
        canonical={`${siteInfo.url}/about`}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper py-10 py-md-14">
          <div className="container">
            <div className="hero-panel p-6 p-md-8 text-white">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7">
                  <span className="section-badge mb-3 bg-white text-dark">About the clinic</span>
                  <h1 className="display-3 text-white mb-4">Patient-first care led by a focused internal medicine specialist.</h1>
                  <p className="lead text-white text-opacity-85 mb-0">
                    Eklavya Healthcare Centre is built around careful listening, clear diagnosis, and a practical plan for managing chronic illness over time.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="subtle-card p-4 bg-white text-dark-blue">
                    <p className="fw-bold text-teal mb-2">What patients value</p>
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      {trustPoints.map((point) => (
                        <li key={point}><i className="uil uil-check" />{point}</li>
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
            <div className="card shadow-lg mb-10">
              <div className="card-body px-4 px-md-8 py-10">
                <About
                  headingH1="Compassionate and"
                  span="comprehensive care"
                  para="Dr. Akash Tamrakar brings a calm, evidence-based approach to general medicine and critical care. The clinic focuses on identifying root causes, explaining the next steps in simple language, and supporting patients through every stage of treatment."
                  para2="Patients visit for recurring medical concerns, long-term disease control, second opinions, and advice on day-to-day management of health conditions that need consistent follow-up."
                  para3="The goal is straightforward: better clarity, better control, and better confidence in the care plan."
                  imgPosition="left"
                  src="/img/dr-akash-profile.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default AboutPage;
