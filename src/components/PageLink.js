const PageLink = ({ link, linkClass }) => {
  const { href, text } = link;
  return (
    <li>
      <a href={href} className={linkClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
