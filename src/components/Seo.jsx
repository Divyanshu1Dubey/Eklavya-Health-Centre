import Head from 'next/head';
import { siteInfo } from 'data';

const Seo = ({
  title,
  description,
  canonical,
  image = '/img/dr-akash-main.jpeg',
  type = 'website',
  noindex = false,
  keywords,
  jsonLd
}) => {
  const fullTitle = title ? `${title} | ${siteInfo.name}` : siteInfo.name;
  const pageUrl = canonical || siteInfo.url;
  const resolvedImage = image.startsWith('http') ? image : `${siteInfo.url}${image}`;
  const resolvedKeywords = (keywords && keywords.length ? keywords : siteInfo.seoKeywords || []).join(', ');

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteInfo.url}#website`,
        url: siteInfo.url,
        name: siteInfo.name,
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteInfo.url}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Physician',
        '@id': `${siteInfo.url}#doctor`,
        name: siteInfo.doctorName,
        image: resolvedImage,
        description: `${siteInfo.doctorName} is a trusted physician for patients searching best doctor in Jhansi and best doctor in Gursarai for chronic disease and chest care support.`,
        medicalSpecialty: ['General Medicine', 'Critical Care', 'Diabetology', 'Thyroid Care', 'Cardiac Care'],
        worksFor: { '@id': `${siteInfo.url}#clinic` },
        availableLanguage: ['English', 'Hindi'],
        areaServed: siteInfo.serviceAreas?.map((area) => ({ '@type': 'City', name: area })) || [],
        url: pageUrl
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${siteInfo.url}#clinic`,
        name: siteInfo.name,
        image: resolvedImage,
        url: siteInfo.url,
        description: `${siteInfo.name} offers physician and chronic care consultation in Jhansi, UP, serving Gursarai and nearby areas.`,
        telephone: siteInfo.phone,
        email: siteInfo.email,
        priceRange: '$$',
        openingHours: [
          'Mo 10:00-17:00',
          'Tu 10:00-17:00',
          'We 09:00-11:30',
          'Th 10:00-17:00',
          'Fr 10:00-17:00',
          'Sa 10:00-17:00',
          'Su 09:00-11:30'
        ],
        areaServed: siteInfo.serviceAreas?.map((area) => ({ '@type': 'City', name: area })) || [],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Omkar Bhawan, in front of Vatsalya Hospital, Karila ji road, Medical gate no 2',
          addressLocality: siteInfo.geo?.locality || 'Jhansi',
          addressRegion: siteInfo.geo?.region || 'Uttar Pradesh',
          postalCode: siteInfo.geo?.postalCode || '284128',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteInfo.geo?.latitude || '25.4358',
          longitude: siteInfo.geo?.longitude || '78.6020'
        },
        medicalSpecialty: ['General Medicine', 'Critical Care', 'Diabetology', 'Cardiology', 'Respiratory Care']
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteInfo.url}#localbusiness`,
        name: siteInfo.name,
        image: resolvedImage,
        url: siteInfo.url,
        telephone: siteInfo.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Omkar Bhawan, in front of Vatsalya Hospital, Karila ji road, Medical gate no 2',
          addressLocality: siteInfo.geo?.locality || 'Jhansi',
          addressRegion: siteInfo.geo?.region || 'Uttar Pradesh',
          postalCode: siteInfo.geo?.postalCode || '284128',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteInfo.geo?.latitude || '25.4358',
          longitude: siteInfo.geo?.longitude || '78.6020'
        },
        areaServed: [
          { '@type': 'Place', name: 'Jhansi, Uttar Pradesh' },
          { '@type': 'Place', name: 'Gursarai, Uttar Pradesh' }
        ]
      }
    ]
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      {resolvedKeywords ? <meta name="keywords" content={resolvedKeywords} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="geo.region" content={siteInfo.geo?.regionCode || 'IN-UP'} />
      <meta name="geo.placename" content={siteInfo.geo?.locality || 'Jhansi'} />
      <meta name="geo.position" content={`${siteInfo.geo?.latitude || '25.4358'};${siteInfo.geo?.longitude || '78.6020'}`} />
      <meta name="ICBM" content={`${siteInfo.geo?.latitude || '25.4358'}, ${siteInfo.geo?.longitude || '78.6020'}`} />
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