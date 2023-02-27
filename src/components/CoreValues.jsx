/* COMPONENTS */
import Section from './Section';

function CoreValues() {
  return (
    <Section>
      <h2
        className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-4 md:mb-8 underline'
        data-aos='zoom-in'
        data-aos-duration='700'
      >
        Core Values
      </h2>
      <ul
        className={'mx-auto max-w-md md:max-w-xl text-justify'}
        data-aos='zoom-in'
        data-aos-duration='700'
      >
        <li className='mb-2'>
          <p>
            <strong>Character</strong> - the desire to transform students into
            values-driven individuals
          </p>
        </li>

        <li className='mb-2'>
          <p>
            <strong>Altruism</strong> - the willingness to give of one's self
            for the welfare of the entire society
          </p>
        </li>

        <li className='mb-2'>
          <p>
            <strong>Responsibility</strong> - the readiness to respond
            diligently with accountability
          </p>
        </li>

        <li className='mb-2'>
          <p>
            <strong>Excellence</strong> - the passion to sharpen competen and
            well-grounded professionals
          </p>
        </li>

        <li>
          <p>
            <strong>Stewardship</strong> - the ability to govern and uphold the
            principles and the moral standards of students in particular and the
            academic institution in general.
          </p>
        </li>
      </ul>
    </Section>
  );
}

export default CoreValues;
