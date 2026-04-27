import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

import { treatments, usefulLinks, siteInfo } from '../data.js';

// ============================================================
// Helper function to render widget sections (e.g., Useful Links, Treatments)
// ============================================================
const widget = (list, title) => (
  <div className="widget">
    <h4 className="widget-title fs-24 mb-3">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({title, id, url }) => (
        <li key={id}>
          <NextLink href={url || '#'} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

// ============================================================
// Footer Component
// Displays contact info, social links, and navigation widgets
// ============================================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-surface border-top overflow-hidden">
      <div className="container position-relative pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">

          {/* Doctor bio, description, and contact information */}
          <div className="col-lg-4 col-xl-3" data-reveal="zoom" style={{ '--reveal-delay': '0ms' }}>
            <div className="widget d-flex flex-column">
              <div className="mb-4">
                <p className="mb-1 fw-bold fs-18 text-white">Dr. Akash Tamrakar</p>
                <p className="mb-0 text-white text-opacity-75">General Physician and Critical Care Specialist</p>
              </div>
              <p className="lead mb-2 text-justify fs-18 text-white text-opacity-90">
                {siteInfo.doctorBio.slice(0, 3).join(' ')}
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-3">
              <a href={`mailto:${siteInfo.email}`} className="contact-chip text-decoration-none w-100 justify-content-start">
                <Mail size={18} aria-hidden="true" />
                {siteInfo.email}
              </a>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="contact-chip text-decoration-none w-100 justify-content-start">
                <PhoneCall size={18} aria-hidden="true" />
                {siteInfo.phone}
              </a>
            </div>

            {/* Social Media */}
            <div className="d-flex flex-column">
              <h4 className="fs-24 text-white">Follow Us On</h4>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Link widgets */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center" data-reveal="zoom" style={{ '--reveal-delay': '100ms' }}>
            {widget(usefulLinks, 'Useful Links')}
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center" data-reveal="zoom" style={{ '--reveal-delay': '200ms' }}>
            {widget(treatments, 'Treatments')}
          </div>
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 overflow-hidden" data-reveal="zoom" style={{ '--reveal-delay': '300ms' }}>
            <div className="widget">
              <h4 className="widget-title fs-24 mb-4 text-white">Our Clinics</h4>
              <div className="d-flex flex-column gap-4">
                {siteInfo.locations.map(loc => (
                  <div key={loc.id} className="text-white text-opacity-85">
                    <p className="d-inline-flex align-items-center gap-2 mb-2 fw-bold text-white">
                      <MapPin size={16} aria-hidden="true" className="text-teal" />
                      {loc.name}
                    </p>
                    <p className="mb-0 fs-14">{loc.address.slice(0, 2).join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-7" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white">
            © {currentYear} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
