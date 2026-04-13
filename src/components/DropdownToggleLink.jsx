// ==========================================================
// DropdownToggleLink Component
// A reusable anchor element that triggers a Bootstrap dropdown
// ==========================================================

const DropdownToggleLink = ({ title, className, ...others }) => {
  return (
    <a
      href="#"
      data-bs-toggle="dropdown"
      className={className || 'dropdown-item dropdown-toggle'}
      {...others}
    >
      {title}
    </a>
  );
};

export default DropdownToggleLink;
