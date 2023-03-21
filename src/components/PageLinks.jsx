/* DATA */
import { pageLinks } from '../data';
/* COMPONENTS */
// import PageLink from './PageLink';
import { PageLink } from '.';

const PageLinks = ({ containerClass, itemClass }) => {
  return (
    <ul className={containerClass}>
      {pageLinks.map((link) => (
        <PageLink key={link.id} {...link} itemClass={itemClass} />
      ))}
    </ul>
  );
};
export default PageLinks;
