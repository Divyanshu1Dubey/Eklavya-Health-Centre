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

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

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

  // Disable loader after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#10324a" />
        <title>{siteInfo.name}</title>
        <meta name="description" content="Eklavya Healthcare Centre in Jhansi offers expert general medicine, critical care, diabetes, thyroid, heart, chest, and hypertension care by Dr. Akash Tamrakar." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteInfo.name} />
        <meta property="og:description" content="Eklavya Healthcare Centre in Jhansi offers expert general medicine, critical care, diabetes, thyroid, heart, chest, and hypertension care by Dr. Akash Tamrakar." />
        <meta property="og:url" content={siteInfo.url} />
        <meta property="og:image" content={`${siteInfo.url}${siteInfo.logo}`} />
        <meta property="og:image:secure_url" content={`${siteInfo.url}${siteInfo.logo}`} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteInfo.name} />
        <meta name="twitter:description" content="Eklavya Healthcare Centre in Jhansi offers expert general medicine, critical care, diabetes, thyroid, heart, chest, and hypertension care by Dr. Akash Tamrakar." />
        <meta name="twitter:image" content={`${siteInfo.url}${siteInfo.logo}`} />
      </Head>
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
