import { siteInfo } from 'data';

const links = [
  {
    id: 1,
    icon: 'uil uil-whatsapp',
    url: `https://wa.me/${siteInfo.whatsapp}`,
    label: 'WhatsApp'
  },
  {
    id: 2,
    icon: 'uil uil-phone-volume',
    url: `tel:${siteInfo.phone.replace(/\s/g, '')}`,
    label: 'Call'
  },
  {
    id: 3,
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
  return (
    <nav className={className}>
      {links.map(({ id, icon, url, label }) => (
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
