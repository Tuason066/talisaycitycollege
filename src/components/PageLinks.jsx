import PageLink from './PageLink';

const PageLinks = ({ containerClass, itemClass, links }) => {
  return (
    <ul className={containerClass}>
      {links.map((link) => (
        <PageLink key={link.id} {...link} itemClass={itemClass} />
      ))}
    </ul>
  );
};
export default PageLinks;
