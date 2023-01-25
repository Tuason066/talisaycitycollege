/* components */
import Section from './Section';
function Mission() {
  return (
    <Section>
      <h2 className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-2 md:mb-8'>
        Mission
      </h2>
      <div className='max-w-md mx-auto md:max-w-xl text-justify'>
        <p>This Mission propelledby the institution's commitment to:</p>
        <br />
        <ol className='list-decimal pl-4'>
          <li>
            Provide quality education through affordable tertiary education
          </li>
          <li>
            Involve actively in community outreach projects aligned in the
            college's thrusts; and
          </li>
          <li>
            Engage in researched-based activities relevant to socio-economic
            development
          </li>
        </ol>
      </div>
    </Section>
  );
}

export default Mission;
