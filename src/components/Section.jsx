const Section = ({ sectionClass, containerClass, children }) => {
  return (
    <section className={`${sectionClass} py-8 md:py-12 lg:py-14`}>
      <div className={`${containerClass} mx-auto w-11/12`}>{children}</div>
    </section>
  );
};
export default Section;
