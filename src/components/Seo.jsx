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
  jsonLd,
  datePublished = siteInfo.lastUpdated,
  dateModified = siteInfo.lastUpdated
}) => {
  const fullTitle = title || `${siteInfo.doctorName} | ${siteInfo.name}`;
  const pageUrl = canonical || siteInfo.url;
  const safeImage = image && !/\.(mp4|webm|mov)$/i.test(image) ? image : siteInfo.logo;
  const resolvedImage = safeImage.startsWith('http') ? safeImage : `${siteInfo.url}${safeImage}`;
  const resolvedKeywords = (keywords && keywords.length ? keywords : siteInfo.seoKeywords || []).join(', ');
  const serviceAreas = siteInfo.serviceAreas?.map((area) => ({ '@type': 'Place', name: area })) || [];
  const authorityCitations = (siteInfo.authorityReferences || []).map((item) => ({
    '@type': 'CreativeWork',
    name: item.label,
    url: item.url,
    description: item.summary
  }));
  const meLinks = [siteInfo.instagramUrl, siteInfo.facebookUrl].filter(Boolean);
  const isHomePage = pageUrl.replace(/\/$/, '') === siteInfo.url.replace(/\/$/, '');

  const toGoogleMapsSearchUrl = (mapEmbed) => {
    if (!mapEmbed) return null;
    try {
      const parsed = new URL(mapEmbed);
      const query = parsed.searchParams.get('q');
      return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : null;
    } catch {
      return null;
    }
  };

  const locationMapLinks = (siteInfo.locations || [])
    .map((location) => toGoogleMapsSearchUrl(location.mapEmbed))
    .filter(Boolean);

  const sameAs = [...new Set([siteInfo.instagramUrl, siteInfo.facebookUrl, ...locationMapLinks].filter(Boolean))];

  const getLocationOpeningHours = (locationId) => {
    if (locationId === 'gursarai') {
      return [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Wednesday', 'Sunday'],
          opens: '11:00',
          closes: '17:00'
        }
      ];
    }

    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '11:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Sunday'],
        opens: '09:00',
        closes: '11:00'
      }
    ];
  };

  const locationEntities = (siteInfo.locations || []).map((location, index) => {
    const streetAddress = Array.isArray(location.address) ? location.address.join(', ') : location.address || '';
    const placeName = location.name || `Clinic ${index + 1}`;
    const locality = /gursarai/i.test(`${location.id || ''} ${placeName} ${streetAddress}`) ? 'Gursarai' : (siteInfo.geo?.locality || 'Jhansi');

    return {
      '@type': 'MedicalClinic',
      '@id': `${siteInfo.url}#clinic-${location.id || index + 1}`,
      name: `${siteInfo.name} - ${placeName}`,
      url: pageUrl,
      image: resolvedImage,
      telephone: siteInfo.appointmentPhone || siteInfo.phone,
      hasMap: toGoogleMapsSearchUrl(location.mapEmbed),
      parentOrganization: { '@id': `${siteInfo.url}#clinic` },
      medicalSpecialty: ['General Medicine', 'Critical Care'],
      openingHoursSpecification: getLocationOpeningHours(location.id),
      address: {
        '@type': 'PostalAddress',
        streetAddress,
        addressLocality: locality,
        addressRegion: siteInfo.geo?.region || 'Uttar Pradesh',
        postalCode: siteInfo.geo?.postalCode || '284128',
        addressCountry: 'IN'
      }
    };
  });

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
        '@type': 'Organization',
        '@id': `${siteInfo.url}#organization`,
        name: siteInfo.name,
        url: siteInfo.url,
        logo: `${siteInfo.url}${siteInfo.logo}`,
        image: resolvedImage,
        telephone: siteInfo.phone,
        email: siteInfo.email,
        sameAs,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteInfo.appointmentPhone || siteInfo.phone,
            contactType: 'appointments',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
          }
        ]
      },
      {
        '@type': 'Person',
        '@id': `${siteInfo.url}#author`,
        name: siteInfo.doctorName,
        jobTitle: siteInfo.role,
        image: resolvedImage,
        worksFor: { '@id': `${siteInfo.url}#organization` },
        knowsAbout: [
          'Internal medicine',
          'Critical care',
          'Diabetes management',
          'Thyroid disorders',
          'Hypertension',
          'Respiratory care'
        ],
        sameAs,
        url: `${siteInfo.url}/about`
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: fullTitle,
        description,
        author: { '@id': `${siteInfo.url}#author` },
        publisher: { '@id': `${siteInfo.url}#organization` },
        datePublished,
        dateModified,
        reviewedBy: { '@id': `${siteInfo.url}#doctor` },
        citation: authorityCitations,
        ...(isHomePage ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.intro-media-title', '.intro-lead', '.trust-byline']
          }
        } : {}),
        inLanguage: 'en-IN'
      },
      {
        '@type': 'Physician',
        '@id': `${siteInfo.url}#doctor`,
        name: siteInfo.doctorName,
        image: resolvedImage,
        description: `${siteInfo.doctorName} is a trusted physician for patients searching for the best doctor in Jhansi, best doctor in Gursarai, and focused chronic disease, chest, diabetes, thyroid, heart, and critical care support.`,
        medicalSpecialty: ['General Medicine', 'Critical Care', 'Diabetology', 'Thyroid Care', 'Cardiac Care'],
        knowsAbout: [
          'Best doctor in Jhansi',
          'Best doctor in Gursarai',
          'General physician in Jhansi',
          'Chest care',
          'Diabetes care',
          'Thyroid care',
          'Blood pressure management',
          'Critical care'
        ],
        worksFor: { '@id': `${siteInfo.url}#organization` },
        availableLanguage: ['English', 'Hindi'],
        areaServed: serviceAreas,
        sameAs,
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
        parentOrganization: { '@id': `${siteInfo.url}#organization` },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteInfo.appointmentPhone || siteInfo.phone,
            contactType: 'appointments',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
          }
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '11:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Wednesday', 'Sunday'],
            opens: '09:00',
            closes: '17:00'
          }
        ],
        areaServed: serviceAreas,
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
        medicalSpecialty: ['General Medicine', 'Critical Care', 'Diabetology', 'Cardiology', 'Respiratory Care'],
        sameAs
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
        areaServed: serviceAreas,
        sameAs
      },
      ...locationEntities
    ]
  };

  const normalizeGraph = (schema) => {
    if (!schema) return [];
    if (Array.isArray(schema['@graph'])) return schema['@graph'];
    return [schema];
  };

  const mergedJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...normalizeGraph(baseJsonLd),
      ...normalizeGraph(jsonLd)
    ]
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} key="description" /> : null}
      {resolvedKeywords ? <meta name="keywords" content={resolvedKeywords} key="keywords" /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} key="robots" />
      <meta name="author" content={siteInfo.doctorName} key="author" />
      <meta name="subject" content={`Dr. Akash Tamrakar - Best Doctor in Jhansi and Gursarai`} key="subject" />
      <meta name="geo.region" content={siteInfo.geo?.regionCode || 'IN-UP'} key="geo-region" />
      <meta name="geo.placename" content={siteInfo.geo?.locality || 'Jhansi'} key="geo-place" />
      <meta name="geo.country" content="IN" key="geo-country" />
      <meta name="geo.position" content={`${siteInfo.geo?.latitude || '25.4358'};${siteInfo.geo?.longitude || '78.6020'}`} key="geo-position" />
      <meta name="ICBM" content={`${siteInfo.geo?.latitude || '25.4358'}, ${siteInfo.geo?.longitude || '78.6020'}`} key="icbm" />
      <link rel="canonical" href={pageUrl} key="canonical" />
      <link rel="alternate" hrefLang="en-IN" href={pageUrl} key="alternate-en-in" />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} key="alternate-x-default" />
      <link rel="author" href={`${siteInfo.url}/about`} key="author-link" />
      {meLinks.map((href) => (
        <link rel="me" href={href} key={`me-${href}`} />
      ))}

      <meta property="og:type" content={type} key="og-type" />
      <meta property="og:title" content={fullTitle} key="og-title" />
      {description ? <meta property="og:description" content={description} key="og-description" /> : null}
      <meta property="og:url" content={pageUrl} key="og-url" />
      <meta property="og:site_name" content={siteInfo.name} key="og-site-name" />
      <meta property="og:locale" content="en_IN" key="og-locale" />
      <meta property="og:image" content={resolvedImage} key="og-image" />
      <meta property="og:image:secure_url" content={resolvedImage} key="og-secure-image" />
      <meta property="business:contact_data:locality" content={siteInfo.geo?.locality || 'Jhansi'} key="business-locality" />
      <meta property="business:contact_data:region" content={siteInfo.geo?.region || 'Uttar Pradesh'} key="business-region" />
      <meta property="business:contact_data:postal_code" content={siteInfo.geo?.postalCode || '284128'} key="business-postal" />
      <meta property="business:contact_data:country_name" content="India" key="business-country" />

      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:title" content={fullTitle} key="twitter-title" />
      {description ? <meta name="twitter:description" content={description} key="twitter-description" /> : null}
      <meta name="twitter:image" content={resolvedImage} key="twitter-image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedJsonLd)
        }}
      />
    </Head>
  );
};

export default Seo;
