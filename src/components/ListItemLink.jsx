import NextLink from './NextLink';

// ===========================================
// ListItemLink Component
// Renders a <li> element containing a navigation link
// Props:
// - linkClassName: Optional class for <a> tag (default: 'nav-link')
// - liClassName: Optional class for <li> tag (default: 'nav-item')
// - href: Link destination (required)
// - title: Link text (required)
// ===========================================
const ListItemLink = ({ linkClassName = 'nav-link', liClassName = 'nav-item', href, title }) => {
  return (
    <li className={liClassName}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
};

export default ListItemLink;
