/* components */
import ConvertText from './ConvertText';
import Section from './Section';

function CoreValues() {
  return (
    <Section>
      <h2
        className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-2 md:mb-8'
        data-aos='zoom-in'
      >
        Core Values
      </h2>
      <ul
        className={'mx-auto max-w-md md:max-w-xl text-justify'}
        data-aos='zoom-in'
      >
        <li className='mb-2'>
          <ConvertText
            value={`***Character*** - the desire to transform students into values-driven
          individuals`}
          />
        </li>

        <li className='mb-2'>
          <ConvertText
            value={`***Altruism*** - the willingness to give of one's self for the welfare
          of the entire society`}
          />
        </li>

        <li className='mb-2'>
          <ConvertText
            value={`***Responsibility*** - the readiness to respond diligently with
          accountability`}
          />
        </li>

        <li className='mb-2'>
          <ConvertText
            value={`***Excellence*** - the passion to sharpen competen and well-grounded
          professionals`}
          />
        </li>

        <li>
          <ConvertText
            value={`***Stewardship*** - the ability to govern and uphold the principles
          and the moral standards of students in particular and the academic
          institution in general.`}
          />
        </li>
      </ul>
    </Section>
  );
}

export default CoreValues;
