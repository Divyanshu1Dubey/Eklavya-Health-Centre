import React from 'react';
import { Analytics } from '@vercel/analytics/next';
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

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
};

export default Layout;
