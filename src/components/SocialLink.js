const SocialLink = ({ link, linkClass }) => {
  const { href, icon } = link;

  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
