/* react */
import { useEffect } from 'react';
/* data */
import { developers } from '../data';
/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import Section from '../components/Section';

const Developers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Section>
      <h2
        className='uppercase font-bold text-center mt-6 mb-12 md:mt-4 md:mb-14 lg:mt-8 lg:mb-20 text-2xl md:text-4xl lg:text-5xl'
        data-aos='zoom-in'
      >
        our <span className='text-primaryBlue-100'>developers</span> and{' '}
        <span className='text-primaryBlue-200'>researchers</span>
      </h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
        columnClassName='my-masonry-grid_column developers-masonry-grid_column'
      >
        {developers.map(
          (
            { image, name, title, facebook, twitter, github, linkedin },
            index
          ) => {
            const placeholderText = `https://via.placeholder.com/700x900.png?text=${name.replace(
              /\s/g,
              '+'
            )}`;

            return (
              <article
                key={index}
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                }}
                className='dev-cards'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay='500'
              >
                {/* image */}
                {image ? (
                  <img
                    src={image}
                    alt={`${name} profile`}
                    className='w-full mx-auto h-full object-cover object-center'
                  />
                ) : (
                  <img
                    src={placeholderText}
                    alt={`${name} profile`}
                    className='w-full mx-auto h-full object-cover object-center'
                  />
                )}

                {/* info */}
                <div className='p-4 md:p-6 text-center'>
                  <h3 className='font-semibold text-lg'>{name}</h3>
                  <p>{title}</p>
                </div>
                {/* social links */}
                <ul className='flex items-center justify-around pb-4 lg:gap-x-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 overflow-hidden'>
                  <li className='dev-social-links'>
                    <a href={facebook} target='_blank' className='p-2 block'>
                      <Icon icon='ri:facebook-box-fill' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={twitter} target='_blank' className='p-2 block'>
                      <Icon icon='mdi:twitter' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={github} target='_blank' className='p-2 block'>
                      <Icon icon='mdi:github' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={linkedin} target='_blank' className='p-2 block'>
                      <Icon icon='mdi:linkedin' className='text-2xl' />
                    </a>
                  </li>
                </ul>
              </article>
            );
          }
        )}
      </Masonry>
    </Section>
  );
};
export default Developers;
