import Section from './Section';
function Goals() {
  return (
    <Section>
      <h2
        className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-2 md:mb-8'
        data-aos='zoom-in'
      >
        Goals
      </h2>
      <div
        className='max-w-md mx-auto md:max-w-xl text-justify'
        data-aos='zoom-in'
      >
        <p>
          <strong>Talisay City College</strong> commits itself to the following
          directions:
        </p>
        <br />
        <ol className='list-decimal pl-4'>
          <li>
            Strengthen Teacher Education, Industrial Technology, Hospitality
            Management, and other programs for the total development of students
            making them productive members of the growing society.
          </li>
          <li>
            Inculcate the values of honesty, integrity, industry, and service;
            thereby transforming students into disciplined individuals.
          </li>
          <li>
            Equip and enhance instructional facilities for the enrichment of
            teaching - learning process.
          </li>
          <li>Immerse one's self in service to the community.</li>
          <li>
            Maintain an efficient management operation for the attainment of
            goals and objectives under the atmosphere of accountability and
            transparency.
          </li>
        </ol>
      </div>
    </Section>
  );
}

export default Goals;
