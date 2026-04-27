import { siteInfo } from 'data';

const links = [
  {
    id: 0,
    icon: 'uil uil-instagram',
    url: siteInfo.instagramUrl,
    label: 'Instagram'
  },
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: siteInfo.facebookUrl,
    label: 'Facebook'
  },
  {
    id: 2,
    icon: 'uil uil-whatsapp',
    url: `https://wa.me/${siteInfo.whatsapp}`,
    label: 'WhatsApp'
  },
  {
    id: 3,
    icon: 'uil uil-phone-volume',
    url: `tel:${siteInfo.phone.replace(/\s/g, '')}`,
    label: 'Call'
  },
  {
    id: 4,
    icon: 'uil uil-map-marker',
    url: siteInfo.locations && siteInfo.locations.length > 0 ? siteInfo.locations[0].mapEmbed : '#',
    label: 'Map'
  }
];

/**
 * Renders a group of social media icons with external links.
 *
 * @param {Object} props
 * @param {string} props.className - Optional class name for the <nav> wrapper.
 */
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  const validLinks = links.filter((link) => typeof link.url === 'string' && link.url.trim().length > 0);

  return (
    <nav className={className}>
      {validLinks.map(({ id, icon, url, label }) => (
        <a 
          key={id}
          href={url}
          target={url.startsWith('http') ? '_blank' : '_self'}
          rel="noreferrer"
          aria-label={label}
        >
          <i className={`${icon} fs-30 bg-white rounded`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
