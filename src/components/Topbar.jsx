import Link from 'next/link';
import { siteInfo } from 'data';

const Topbar = () => {
  return (
    <section className="topbar topbar-shell py-2">
      <div className="container">
        <div className="topbar-strip px-3 px-lg-4 py-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 bg-primary-dark text-white">
          <div className="d-flex flex-wrap align-items-center gap-3 topbar-info">
            <span className="topbar-text-pill">
              <i className="uil uil-clock" />
              Mon - Sat: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM
            </span>
            <a href={`tel:${siteInfo.appointmentPhone.replace(/\s/g, '')}`} className="topbar-text-pill text-decoration-none">
              <i className="uil uil-phone-volume" />
              <strong>{siteInfo.appointmentPhone}</strong>
            </a>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3 topbar-actions">
            <a
              href={`https://wa.me/${siteInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light rounded-pill px-4 py-2 fw-bold text-main shadow-sm topbar-action-btn"
            >
              <i className="uil uil-whatsapp fs-22 me-2 text-main fw-bold" />
              Chat With Us
            </a>

            <Link
              href={`https://wa.me/${siteInfo.appointmentWhatsApp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm topbar-action-btn"
            >
              <i className="uil uil-calendar-alt me-2 fs-22 text-white fw-bold" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
