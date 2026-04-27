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
    <>
      {/* Topbar stays in normal flow so it never overlaps the navbar */}
      <div className="topbar d-md-none d-lg-block">
        <Topbar />
      </div>

      <div ref={stickyRef} className={`sticky-wrapper animate-nav-drop ${isSticky ? 'is-sticky' : ''}`}>
        {/* Main navigation bar */}
        <Navbar />
      </div>
    </>
  );
};

export default Header;
