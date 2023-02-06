/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* data */
import { contacts } from '../data';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import Section from '../components/Section';

const Contacts = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    700: 1,
  };

  return (
    <Section>
      <h2
        style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
        className='text-primaryBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center mb-8 sm:mb-12 lg:mb-16 underline'
        data-aos='zoom-in'
        data-aos-delay='200'
      >
        Contact Us
      </h2>

      {/* cards */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
        columnClassName='my-masonry-grid_column'
      >
        {contacts.map(({ office, tel, email, facebookPath, icon }, index) => {
          return (
            <article
              key={index}
              className='px-6 py-8 md:px-8 md:py-10 rounded max-w-xs md:max-w-md mx-auto bg-blueViolet-700 text-white shadow-lg transition-all'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-delay='400'
            >
              {/* icon */}
              <div className='flex justify-center'>
                <Icon icon={icon} className='w-28 h-28' color='white' />
              </div>
              {/* details */}
              <div>
                <a href={facebookPath}>
                  <h4 className='font-bold text-lg text-center my-4 tracking-wider'>
                    {office} Office
                  </h4>
                </a>
                <ul className='font-semibold'>
                  <li>
                    Tel Number:{' '}
                    <a
                      href={`tel:${tel}`}
                      className='hover:underline transition-all font-normal'
                    >
                      {tel}
                    </a>
                  </li>
                  <li>
                    Email:{' '}
                    <a
                      href={`mailto:${email}?subject = Inqueries&body = Message`}
                      className='hover:underline transition-all font-normal text-xs md:text-sm'
                    >
                      {email}
                    </a>
                  </li>
                </ul>
                {/* contact button link to facebook page */}
                <a
                  href={facebookPath}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full mt-4 text-center bg-primaryYellow-500 text-blueViolet-700 p-base font-semibold rounded shadow-lg'
                >
                  Contact Us
                </a>
              </div>
            </article>
          );
          /* return (
            <article
              key={index}
              className='px-6 py-8 md:px-8 md:py-10 rounded max-w-xs md:max-w-md mx-auto border-2 border-primaryBlue-500 bg-white hover:bg-gray-100 transition-all'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-delay='400'
            >
              icon
              <div className='flex justify-center'>
                <Icon icon={icon} className='w-20 h-20' />
              </div>
              information
              <div>
                <a href={facebookPath}>
                  <h4 className='font-bold text-lg text-center text-primaryBlue-500 my-4'>
                    {office} Office
                  </h4>
                </a>
                <ul>
                  <li className='font-semibold'>
                    Tel Number:{' '}
                    <a
                      href={`tel:${tel}`}
                      className='hover:underline transition-all font-normal'
                    >
                      {tel}
                    </a>
                  </li>
                  <li className='font-semibold'>
                    Email:{' '}
                    <a
                      href={`mailto:${email}?subject = Inqueries&body = Message`}
                      className='hover:underline transition-all font-normal text-sm md:text-base'
                    >
                      {email}
                    </a>
                  </li>
                  <li className='font-semibold'>
                    Facebook:{' '}
                    <a
                      href={facebookPath}
                      target='_blank'
                      className='text-blue-700 hover:underline font-normal'
                    >
                      {office} Office
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ); */
        })}
      </Masonry>
    </Section>
  );
};
export default Contacts;
