/* components */
import ConvertText from '../components/ConvertText';
import Section from './Section';

const Vision = () => {
  return (
    <Section>
      <h2
        className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-2 md:mb-8 underline'
        data-aos='zoom-in'
        data-aos-duration='700'
      >
        vision
      </h2>

      <p
        className='max-w-md mx-auto md:max-w-xl text-justify'
        data-aos='zoom-in'
        data-aos-duration='700'
      >
        <strong>Talisay City College</strong> is a globally competitive academic
        institution committed to meet the needs and challenges of times through
        excellent implementation of holistic curricular programs.
      </p>
    </Section>
  );
};
export default Vision;
