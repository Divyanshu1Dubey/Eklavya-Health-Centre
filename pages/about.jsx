import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseMedical, CheckCircle2, GraduationCap, HeartPulse, Users } from 'lucide-react';
import About from 'components/About';
import PageProgress from 'components/PageProgress';
import Seo from 'components/Seo';
import NextLink from 'components/NextLink';
import { useLanguage } from '../src/context/LanguageContext';

const AboutPage = () => {
  const { data: { siteInfo, treatments } } = useLanguage();
  const highlightLabels = [
    'Qualification',
    'Academic Appointment',
    'Professional Association',
    'Professional Association',
    'Advanced Clinical Training',
    'Research Contribution'
  ];

  return (
    <Fragment>
      <PageProgress />
      <Seo
        title={`About ${siteInfo.doctorName} - Physician in Jhansi`}
        description={`Meet ${siteInfo.doctorName}, ${siteInfo.role} at ${siteInfo.name}, trusted by patients searching for the best doctor in Jhansi, best doctor in Gursarai, and experienced physician care.`}
        canonical={`${siteInfo.url}/about`}
        keywords={[
          'dr akash tamrakar',
          'dr akash tamrakar best doctor in jhansi',
          'about dr akash tamrakar',
          'best doctor in jhansi',
          'best doctor in gursarai',
          'best physician in jhansi',
          'best chest doctor in jhansi',
          'general physician in jhansi',
          'critical care specialist in jhansi'
        ]}
      />
      <main className="content-wrapper overflow-hidden pb-10">
        <section className="wrapper premium-section-light py-10 py-md-14">
          <div className="container">
            <div className="premium-section-panel premium-profile-intro-panel p-4 p-md-4 p-xl-5" data-reveal="zoom">
              <div className="premium-section-header centered premium-profile-header-compact mb-3 mb-md-4">
                <div className="premium-section-heading-frame">
                  <span className="section-badge">Clinical Profile</span>
                </div>
              </div>
              <About
                headingH1="Clinical "
                span="Journey"
                para={`${siteInfo.doctorName} completed MBBS in 2018 from Gandhi Medical College, Bhopal, and internship in 2019.`}
                para2="He then pursued DNB Medicine through NBE at Smt. Rasilaben Sevantilal Shah Venus Hospital, Surat, building strong foundation in internal medicine."
                para3="His career includes senior residency at Dr. Ram Manohar Lohia Hospital and MLB Medical College, Jhansi, Assistant Professorship at MLB Medical College, and a 2D Echo Fellowship from the Indian Association of 2D Echo Cardiography (Delhi) at JROP Institute."
                imgPosition="left"
                src="/img/dr-akash-profile.png"
                btnTitle="Book Consultation"
                btnUrl="/contact"
              />
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-light py-8 py-md-10">
          <div className="container">
            <div className="premium-section-panel premium-academic-panel p-4 p-md-5 mb-4" data-reveal="left">
              <div className="premium-section-header centered premium-profile-header-compact mb-3 mb-md-4">
                <div className="premium-section-heading-frame">
                  <span className="section-badge">Clinical Timeline</span>
                </div>
              </div>
              <div className="row g-3 g-lg-4 premium-academic-grid">
                <span className="premium-academic-line d-none d-lg-block" aria-hidden="true"></span>
                <div className="col-lg-6 premium-academic-item premium-academic-item-left" data-reveal="left" style={{ '--reveal-delay': '40ms' }}>
                  <div className="premium-list-card p-3 p-md-4 h-100 premium-academic-card">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <GraduationCap size={18} className="text-teal" aria-hidden="true" />
                      <p className="mb-0 fw-bold text-dark-blue">Education & Core Training</p>
                    </div>
                    <ul className="list-unstyled mb-0 d-grid gap-2">
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>MBBS (2018), Gandhi Medical College, Bhopal.</span></li>
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Internship (2019), Gandhi Medical College, Bhopal.</span></li>
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>DNB Medicine, NBE at Smt. Rasilaben Sevantilal Shah Venus Hospital, Surat.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 premium-academic-item premium-academic-item-right" data-reveal="right" style={{ '--reveal-delay': '110ms' }}>
                  <div className="premium-list-card p-3 p-md-4 h-100 premium-academic-card">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <BriefcaseMedical size={18} className="text-teal" aria-hidden="true" />
                      <p className="mb-0 fw-bold text-dark-blue">Clinical & Academic Experience</p>
                    </div>
                    <ul className="list-unstyled mb-0 d-grid gap-2">
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Senior Residency, Dr. Ram Manohar Lohia Hospital.</span></li>
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Senior Residency, MLB Medical College, Jhansi.</span></li>
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Assistant Professor, MLB Medical College, Jhansi.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 premium-academic-item premium-academic-item-left" data-reveal="left" style={{ '--reveal-delay': '180ms' }}>
                  <div className="premium-list-card p-3 p-md-4 h-100 premium-academic-card">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <HeartPulse size={18} className="text-teal" aria-hidden="true" />
                      <p className="mb-0 fw-bold text-dark-blue">Advanced Fellowship</p>
                    </div>
                    <p className="premium-copy mb-0 d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" />
                      <span>2D Echo Fellowship, Indian Association of 2D Echo Cardiography (Delhi), JROP Institute.</span>
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 premium-academic-item premium-academic-item-right" data-reveal="right" style={{ '--reveal-delay': '250ms' }}>
                  <div className="premium-list-card p-3 p-md-4 h-100 premium-academic-card">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Users size={18} className="text-teal" aria-hidden="true" />
                      <p className="mb-0 fw-bold text-dark-blue">Professional Memberships</p>
                    </div>
                    <ul className="list-unstyled mb-0 d-grid gap-2">
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Life Member, Indian Medical Association (IMA).</span></li>
                      <li className="premium-copy d-flex align-items-start gap-2"><CheckCircle2 size={16} className="text-teal mt-1" aria-hidden="true" /><span>Member, Association of Physicians of India (API), Jhansi chapter.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 premium-academic-item premium-academic-item-full" data-reveal="zoom" style={{ '--reveal-delay': '320ms' }}>
                  <div className="premium-list-card p-3 p-md-4 h-100 premium-academic-card">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <BadgeCheck size={18} className="text-teal" aria-hidden="true" />
                      <p className="mb-0 fw-bold text-dark-blue">Professional Highlights</p>
                    </div>
                    <div className="professional-timeline">
                      <div className="professional-timeline-step">
                        <p className="professional-timeline-label mb-1">Consultant Profile</p>
                        <h3 className="h5 mb-0 text-dark-blue">{siteInfo.memberProfile.heading}</h3>
                      </div>
                      <div className="professional-timeline-step">
                        <p className="professional-timeline-label mb-1">Core Speciality Focus</p>
                        <p className="premium-copy mb-0">{siteInfo.memberProfile.speciality}</p>
                      </div>
                      {siteInfo.memberProfile.points.map((point, index) => (
                        <div className="professional-timeline-step" key={point}>
                          <p className="professional-timeline-label mb-1">{highlightLabels[index] || `Professional Milestone ${index + 1}`}</p>
                          <p className="premium-copy mb-0">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper premium-section-band py-10 py-md-14">
          <div className="container">
            <div className="premium-dark-card p-4 p-md-5 p-xl-6" data-reveal="zoom">
              <div className="row align-items-center g-5">
                <div className="col-lg-5">
                  <span className="section-badge mb-3">Treatments Available</span>
                  <h2 className="display-5 mb-3">Comprehensive care across chronic, preventive, and follow-up needs.</h2>
                  <p className="premium-copy-light mb-4">
                    Patients can consult for diabetes, thyroid, chest, lungs, heart, kidney, liver, blood pressure, asthma, and related internal medicine concerns.
                  </p>
                  <NextLink href="/treatments" title="Explore Treatments" className="btn btn-power rounded-pill" />
                </div>
                <div className="col-lg-7">
                  <div className="row g-3">
                    {treatments.map((item) => (
                      <div className="col-md-6" key={item.slug}>
                        <Link href={item.url} className="premium-list-card premium-list-card-dark p-3 h-100 d-flex align-items-center justify-content-between gap-3">
                          <div className="d-flex align-items-center gap-2">
                            <CheckCircle2 size={17} aria-hidden="true" />
                            <span>{item.title}</span>
                          </div>
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    ))}
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

export default AboutPage;
