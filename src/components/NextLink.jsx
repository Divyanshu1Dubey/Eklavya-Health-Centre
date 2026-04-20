import Link from 'next/link';

/**
 * Wrapper component for Next.js Link
 * Adds support for `className`, `target`, and `title` props.
 *
 * @param {Object} props - Component props
 * @param {string} props.href - Destination URL
 * @param {string|JSX.Element} props.title - Link content (text or JSX)
 * @param {string} [props.className] - CSS classes
 * @param {string} [props.target] - Specifies where to open the linked document
 */
const NextLink = ({ href, title, className = '', target = '_self' }) => {
  return (
    <Link href={href} className={className} target={target}>
      {title}
    </Link>
  );
};

export default NextLink;
