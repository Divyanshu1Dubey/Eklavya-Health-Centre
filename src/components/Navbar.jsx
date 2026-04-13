import { Fragment, useRef } from 'react';
import Image from 'next/image';

// Custom hooks
import useSticky from 'hooks/useSticky';

// Custom components
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';

// Data
import { treatments, siteInfo } from '../data.js';

const Navbar = ({ navClassName, navOtherClass, fancy }) => {
  // Custom hooks
  const sticky = useSticky(350); // Track sticky behavior
  const navbarRef = useRef(null);

  // Fixed class for sticky navbar
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // Main navbar content shared between fancy and default layout
  const headerContent = (
    <Fragment>
      {/* Logo for desktop */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt={`Logo | ${siteInfo.name}`}
              src={siteInfo.logo}
              width={160}
              height={80}
              className="py-2 nav-logo"
            />
          }
        />
      </div>

      {/* Offcanvas menu for mobile */}
      <div id="offcanvas-nav" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start" data-bs-scroll="true">
        {/* Offcanvas header with logo */}
        <div className="offcanvas-header d-lg-none offcanvas-bg" data-bs-dismiss="offcanvas">
          <NextLink
            href="/"
            title={
              <Image
                alt={`Logo | ${siteInfo.name}`}
                src={siteInfo.logo}
                width={160}
                height={80}
                className="py-2"
              />
            }
          />
          <button type="button" className="btn-close btn-close-white ms-auto" aria-label="Close" data-bs-dismiss="offcanvas" />
        </div>

        {/* Offcanvas body */}
        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcanvas-bg">
          <ul className="navbar-nav">
            {/* Top-level nav items */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/about" title="About Dr. Akash" className="nav-link" />
            </li>

            {/* Treatments dropdown */}
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Treatments"
                href="/treatments"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {treatments.map(({ id, title, url }) => (
                  <ListItemLink
                    key={id}
                    href={url}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/gallery" title="Gallery & Facilities" className="nav-link" />
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/contact" title="Contact Us" className="nav-link" />
            </li>
            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="/contact" title="Book Appointment" className="nav-link" />
            </li>
          </ul>

          {/* Mobile contact and social links */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink href={`mailto:${siteInfo.email}`} title={siteInfo.email} className="link-inverse" />
              <br />
              <NextLink href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} title={siteInfo.phone} />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger menu */}
      <div className={navOtherClass}>
        <button className="hamburger offcanvas-nav-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav">
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

// Default props
Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other d-flex d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
