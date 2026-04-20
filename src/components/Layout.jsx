import React from 'react';
import Header from './Header';
import Footer from './Footer';

// ===========================================================
// Layout Component
// Wraps page content with Header and Footer
// Props:
// - children: JSX elements passed into the layout (page content)
// ===========================================================
const Layout = ({ children }) => {
  return (
    <>
      {/* Site Header */}
      <Header />

      {/* Page Content */}
      <main>{children}</main>

      {/* Site Footer */}
      <Footer />
    </>
  );
};

export default Layout;
