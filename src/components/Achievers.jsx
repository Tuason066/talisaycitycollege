/* data */
import { achievers } from '../data';
/* icons */
import { Icon } from '@iconify/react';

const Achievers = () => {
  return (
    <section className='bg-primaryBlue-100 py-8 md:py-12 lg:py-14  text-white text-center'>
      <div className='mx-auto w-11/12'>
        <h2 className='uppercase font-bold mb-6 md:mb-7 lg:mb-8 text-4xl md:text-6xl'>
          the land of
        </h2>
        <dl className='grid gap-y-4 md:gap-y-8 md:grid-cols-2 lg:grid-cols-4 max-w-xl lg:max-w-full mx-auto'>
          {achievers.map(({ id, count, category }) => {
            return (
              <div key={id}>
                <dt className='text-3xl lg:text-5xl font-bold mb-1 inline-block'>
                  {new Intl.NumberFormat('en-US', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(count)}
                  +
                </dt>
                <dd className='font-semibold uppercase tracking-wider text-sm md:text-base lg:text-lg'>
                  {category}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};
export default Achievers;
