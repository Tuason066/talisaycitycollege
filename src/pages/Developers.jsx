/* REACT */
import { useEffect } from 'react';
/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* DATA */
import { developers } from '../data';
/* REACT MASONRY : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* ICONS */
import { Icon } from '@iconify/react';

const Developers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* react masonry media queries */
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <section className='section'>
      <div className='section-center'>
        {/* title */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center mt-6 mb-12 md:mt-4 md:mb-14 lg:mt-8 lg:mb-20'
        >
          Our <span className='capitalize'>developers</span> and{' '}
          <span className='capitalize'>researchers</span>
        </h2>

        {/* cards */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column developers-masonry-grid_column'
        >
          {developers.map(({ image, name, title, socialLinks }, index) => {
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
                data-aos-delay='100'
                data-aos-duration='700'
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
                  {socialLinks.map(({ url, icon }, index) => {
                    return (
                      <li key={index} className='dev-social-links'>
                        {/#/g.test(url) ? (
                          <Link to={url} className='p-2 block' disabled>
                            <Icon icon={icon} className='text-2xl' />
                          </Link>
                        ) : (
                          <a href={url} target='_blank' className='p-2 block'>
                            <Icon icon={icon} className='text-2xl' />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </Masonry>
      </div>
    </section>
  );
};
export default Developers;
