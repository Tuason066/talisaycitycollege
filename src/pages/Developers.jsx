/* data */
import { developers } from '../data';
/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import Section from '../components/Section';

const Developers = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Section>
      <h2
        className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-6 md:mb-8 lg:mb-16'
        data-aos='zoom-in'
      >
        Our Developers and Researchers
      </h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
        columnClassName='my-masonry-grid_column'
      >
        {developers.map(
          (
            { image, name, title, facebook, twitter, github, linkedin },
            index
          ) => {
            return (
              <article
                key={index}
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                }}
                className='dev-cards'
              >
                {/* image */}
                <img
                  src={image}
                  alt={`${name} profile`}
                  className='w-full max-w-xs h-full max-h-[350px] object-cover object-center'
                />
                {/* info */}
                <div className='p-4 text-center'>
                  <h3 className='font-semibold text-lg'>{name}</h3>
                  <p>{title}</p>
                </div>
                {/* social links */}
                <ul className='flex items-center justify-around pb-4 lg:gap-x-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 overflow-hidden'>
                  <li className='dev-social-links'>
                    <a href={facebook} className='p-2 block'>
                      <Icon icon='ri:facebook-box-fill' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={twitter} className='p-2 block'>
                      <Icon icon='mdi:twitter' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={github} className='p-2 block'>
                      <Icon icon='mdi:github' className='text-2xl' />
                    </a>
                  </li>
                  <li className='dev-social-links'>
                    <a href={linkedin} className='p-2 block'>
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
