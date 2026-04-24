import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Topbar = () => {
  const { language, toggleLanguage, data: { siteInfo }, t } = useLanguage();

  return (
    <section className="bg-primary-navy text-white fs-14">
      <div className="container">
        <div className="py-2 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2">
          <div className="d-flex flex-wrap align-items-center gap-4">
            <span className="d-inline-flex align-items-center gap-2 text-white text-opacity-75">
              <i className="uil uil-clock fs-16" />
              11:00 AM - 5:00 PM (Wed & Sun exceptions apply)
            </span>
            <a href={`tel:${siteInfo.appointmentPhone.replace(/\s/g, '')}`} className="d-inline-flex align-items-center gap-2 text-white text-decoration-none fw-semibold">
              <i className="uil uil-phone-volume fs-16" />
              {siteInfo.appointmentPhone}
            </a>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href={`https://wa.me/${siteInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="d-inline-flex align-items-center gap-2 text-white text-decoration-none fw-semibold topbar-hover-link"
            >
              <i className="uil uil-whatsapp fs-18 text-success" />
              {t.chatWithUs}
            </a>
            <div className="vr bg-white opacity-25 d-none d-lg-block" style={{ height: '20px' }}></div>
            <button
              onClick={toggleLanguage}
              className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 fw-bold border-opacity-25"
              style={{ fontSize: '12px' }}
            >
              {language === 'en' ? 'अ (Hindi)' : 'A (English)'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
