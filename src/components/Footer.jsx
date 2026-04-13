import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

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
// Displays logo, contact info, social links, and navigation widgets
// ============================================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-primary-dark overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">

          {/* Logo, description, and contact information */}
          <div className=" col-lg-4 col-xl-3">
            <div className="widget d-flex flex-column">
              <div className="mb-5 d-flex" >
                <Image
                  src={siteInfo.logo}
                  alt={`Logo | ${siteInfo.name}`}
                  width={50}
                  height={50}
                  className="position-static text-center"
                  style={{ maxHeight: "200px", maxWidth: "300px" }}
                />
              </div>
              <p className="lead mb-2 text-justify fs-18 text-white">
                Expert general medicine and critical care in Jhansi, with personalized support for diabetes, thyroid, heart, chest, hypertension, and other chronic medical concerns.
              </p>
            </div>

            {/* Email */}
            <div className="d-flex my-1">
              <i className="uil uil-envelope fs-26 text-white" />
              <a href={`mailto:${siteInfo.email}`} className="link-body ms-2 text-white">
                {siteInfo.email}
              </a>
            </div>

            {/* Phone */}
            <div className="d-flex">
              <i className="uil uil-phone-volume fs-26 text-white" />
              <p className="mt-1 ms-2 fs-18">
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="text-white">
                  {siteInfo.phone}
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="d-flex flex-column">
              <h4 className="fs-24 text-white">Follow Us On</h4>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Link widgets */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center">
            {widget(usefulLinks, 'Useful Links')}
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center">
            {widget(treatments, 'Treatments')}
          </div>
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 overflow-hidden">
            <div className="widget">
              <h4 className="widget-title fs-24 mb-3">Location</h4>
              <div className=" d-flex justify-content-center border rounded">
                <iframe
                  src={siteInfo.mapsEmbed}
                  width="100%"
                  height="300"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-7" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white">
            © {currentYear} Eklavya Healthcare Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
