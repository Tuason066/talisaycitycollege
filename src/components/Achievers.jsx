/* data */
import { achievers } from '../data';
/* library */
import CountUp, { useCountUp } from 'react-countup';
/* components */
import Section from './Section';

const Achievers = () => {
  return (
    <Section sectionClass={'bg-primaryBlue-100 text-white text-center'}>
      <h2 className='uppercase font-bold mb-6 md:mb-7 lg:mb-8 text-4xl md:text-6xl'>
        the land of
      </h2>
      <dl className='grid gap-y-4 md:gap-y-8 md:grid-cols-2 lg:grid-cols-4 max-w-xl lg:max-w-full mx-auto'>
        {achievers.map(({ id, count, category }) => {
          return (
            <div key={id}>
              <dt className='text-3xl md:text-5xl font-bold mb-1 inline-block'>
                {/* convertion - 1500 to 1.5k */}
                {/* {new Intl.NumberFormat('en-US', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(count)} */}
                <CountUp
                  end={count}
                  onEnd={({ pauseResume }) => pauseResume()}
                  enableScrollSpy
                  scrollSpyOnce
                  formatValue={(count) => {
                    return new Intl.NumberFormat('en-US', {
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(count);
                  }}
                  duration={2.75}
                  separator=','
                  delay={4000}
                />
                +
              </dt>
              <dd className='font-semibold uppercase tracking-wider text-sm md:text-base lg:text-lg'>
                {category}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
};
export default Achievers;
