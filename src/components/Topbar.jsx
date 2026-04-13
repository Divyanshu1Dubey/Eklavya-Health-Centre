import Link from 'next/link';
import { siteInfo } from 'data';

const Topbar = () => {
  return (
    <section className="bg-color bg-primary-dark">
      <div className="container">
        <div className="text-white fw-bold fs-15 d-flex row justify-content-center bg-primary-dark">
          <div className="bg-color py-1 d-flex align-items-center justify-content-between w-100">

            {/* Left section: Operating hours and email */}
            <div className="d-flex flex-row align-items-center">
              <p className="mb-0">Mon-Sat (10am to 5pm) | Wed & Sun (12pm to 5pm)</p>

              <div className="d-flex align-items-center ms-5">
                <i className="uil uil-phone-volume text-white fs-22 mt-1 me-2" />
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                  className="link-white hover"
                >
                  {siteInfo.phone} / {siteInfo.altPhone}
                </a>
              </div>
            </div>

            {/* Right section: WhatsApp and TeleConsult buttons */}
            <div className="d-flex align-items-center col-auto me-5 gap-4">

              {/* WhatsApp Chat Button */}
              <a
                href={`https://wa.me/${siteInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-main fs-18 rounded border-0 px-3 py-1 d-flex align-items-center fw-bold"
              >
                <i className="uil uil-whatsapp fs-22 me-2 text-main fw-bold" />
                <span className="fs-16 fw-bold">Chat With Us</span>
              </a>

              {/* Tele-consultation Link */}
              <Link
                href="/contact"
                className="primary-bg text-white fs-18 rounded border-0 px-3 py-1 d-flex align-items-center fw-bold"
              >
                <i className="uil uil-calender me-2 fs-22 text-white fw-bold" />
                <span className="fs-16 fw-bold">Book Appointment</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
