import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class EklavyaHealthcare extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and Touch Icons */}
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />

          {/* Theme Color for Mobile Browsers */}
          <meta name="theme-color" content="#10324a" />

          {/* Google Fonts: Plus Jakarta Sans and Manrope for stronger premium identity */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />

          {/* Preload Key Hero Image for Performance */}
          <link rel="preload" href="/img/dr-akash-profile.png" as="image" />
        </Head>

        <body>
          {/* Main application content */}
          <Main />

          {/* Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Optional: Customize how pages are rendered (useful for adding HOCs or wrappers globally)
EklavyaHealthcare.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // Enhance the app and components if needed
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component,
    });

  // Get initial document props from Next.js
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
