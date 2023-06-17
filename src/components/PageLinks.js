import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => (
        <PageLink key={link.id} link={link} linkClass={itemClass} />
      ))}
    </ul>
  );
};

export default PageLinks;
