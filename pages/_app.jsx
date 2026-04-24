// Core Imports
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Theme and Layout
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Global Styles
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';
import 'styles/premium.css';

import { siteInfo } from 'data';

import { LanguageProvider } from '../src/context/LanguageContext';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading] = useState(false);

  // Load Bootstrap only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Initialize ScrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Lightweight global reveal system for smooth section/card animations.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    document.documentElement.classList.add('reveal-enabled');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#10324a" />
        <title>{siteInfo.name}</title>
        <meta name="description" content="Best doctor in Jhansi and Gursarai for physician consultation, chest care, critical care, diabetes, thyroid, and heart treatment at Eklavya Healthcare Centre." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteInfo.name} />
        <meta property="og:description" content="Best doctor in Jhansi and Gursarai for physician consultation, chest care, critical care, diabetes, thyroid, and heart treatment at Eklavya Healthcare Centre." />
        <meta property="og:url" content={siteInfo.url} />
        <meta property="og:image" content={`${siteInfo.url}${siteInfo.logo}`} />
        <meta property="og:image:secure_url" content={`${siteInfo.url}${siteInfo.logo}`} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:country-name" content="India" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteInfo.name} />
        <meta name="twitter:description" content="Best doctor in Jhansi and Gursarai for physician consultation, chest care, critical care, diabetes, thyroid, and heart treatment at Eklavya Healthcare Centre." />
        <meta name="twitter:image" content={`${siteInfo.url}${siteInfo.logo}`} />

        <meta name="geo.region" content={siteInfo.geo?.regionCode || 'IN-UP'} />
        <meta name="geo.placename" content={`${siteInfo.geo?.locality || 'Jhansi'}, ${siteInfo.geo?.region || 'Uttar Pradesh'}`} />
        <meta name="geo.position" content={`${siteInfo.geo?.latitude || '25.4358'};${siteInfo.geo?.longitude || '78.6020'}`} />
        <meta name="ICBM" content={`${siteInfo.geo?.latitude || '25.4358'}, ${siteInfo.geo?.longitude || '78.6020'}`} />
      </Head>
      <LanguageProvider>
        <Layout>
          <ThemeProvider>
            {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
          </ThemeProvider>
        </Layout>
      </LanguageProvider>
    </Fragment>
  );
}

export default MyApp;
