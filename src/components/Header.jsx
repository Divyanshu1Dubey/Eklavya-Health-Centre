import React, { useRef } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import useSticky from 'hooks/useSticky';

// ===========================================================
// Header Component
// Combines the Topbar and Navbar with sticky behavior on scroll
// ===========================================================
const Header = () => {
  const stickyRef = useRef(null); // Reference to the header wrapper
  const isSticky = useSticky(350); // Hook to track sticky state after 350px scroll

  return (
    <div
      ref={stickyRef}
      className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`} // Add 'is-sticky' class conditionally
    >
      {/* Topbar visible only on medium and larger screens */}
      <div className="topbar d-md-none d-lg-block">
        <Topbar />
      </div>

      {/* Main navigation bar */}
      <Navbar />
    </div>
  );
};

export default Header;
