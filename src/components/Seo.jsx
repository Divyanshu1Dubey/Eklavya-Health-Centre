import Head from 'next/head';
import { siteInfo } from 'data';

const Seo = ({
  title,
  description,
  canonical,
  image = '/img/home/hero-bg.webp',
  type = 'website',
  noindex = false,
  jsonLd
}) => {
  const fullTitle = title ? `${title} | ${siteInfo.name}` : siteInfo.name;
  const pageUrl = canonical || siteInfo.url;
  const resolvedImage = image.startsWith('http') ? image : `${siteInfo.url}${image}`;

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteInfo.name,
    image: resolvedImage,
    url: siteInfo.url,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Omkar Bhawan, in front of Vatsalya Hospital, Karila ji road, Medical gate no 2',
      addressLocality: 'Jhansi',
      addressRegion: 'Uttar Pradesh',
      postalCode: '284128',
      addressCountry: 'IN'
    },
    medicalSpecialty: ['General Medicine', 'Critical Care', 'Diabetology', 'Cardiology']
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:image" content={resolvedImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={resolvedImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd || baseJsonLd)
        }}
      />
    </Head>
  );
};

export default Seo;