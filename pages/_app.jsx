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
  const router = useRouter();
  const { pathname } = router;
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
        duration: 600,
        percentage: 0.85,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => {
    const handleStart = () => document.body.classList.add('route-transitioning');
    const handleDone = () => {
      window.setTimeout(() => document.body.classList.remove('route-transitioning'), 80);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router.events]);

  // Lightweight global reveal system for smooth section/card animations.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const autoRevealSelectors = [
      '.premium-section-header',
      '.premium-section-panel',
      '.premium-dark-card',
      '.clean-card',
      '.subtle-card',
      '.service-card',
      '.gallery-card',
      '.testimonial-card',
      '.trust-highlight-card',
      '.trust-quick-card',
      '.premium-location-card',
      '.premium-list-card',
      '.faq-card',
      '.map-frame',
      '.glass-card'
    ];

    document.querySelectorAll(autoRevealSelectors.join(',')).forEach((element, index) => {
      if (!element.hasAttribute('data-reveal') && !element.closest('[data-no-reveal]')) {
        element.setAttribute('data-reveal', 'up');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 45}ms`);
      }
    });

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
        <meta name="application-name" content={siteInfo.name} />
        <meta name="format-detection" content="telephone=yes" />
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
