/* react */
import { useState } from 'react';
/* context */
import { useGlobalContext } from '../context';
/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* data */
import { newsAndUpdates } from '../data';
/* component */
import ConvertText from './ConvertText';

const NewsAndUpdates = () => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <section className='py-8 md:py-12 lg:py-14'>
      <div className='mx-auto w-11/12'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest'>
          Latest news and updates
        </h2>
        <p className='text-xs lg:text-base mb-6 md:mb-8 lg:mb-10 '>
          Stay up to date
        </p>
        {/* cards */}
        {/* ui source: https://flowbite.com/docs/components/card/ */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column'
        >
          {newsAndUpdates.map((item) => {
            const { image, id, subject, createdAt, title, details } = item;
            /* details */
            const [limitDetails, setLimitDetails] = useState(150);
            const handleLimitButton = () => {
              setLimitDetails((prev) => (prev === 150 ? 'see all' : 150));
            };

            /* preview component */
            const { setIsPreview } = useGlobalContext();

            const handleSeeMore = (news) => {
              setIsPreview((prev) => {
                return { ...prev, state: true, news, defaultNews: item };
              });
            };

            return (
              <article
                key={id}
                className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mx-auto'
              >
                <img src={image[0].img} alt={title} className='rounded-t-lg' />
                <div className='p-5'>
                  <div className='mb-3 inline-flex items-center gap-x-2'>
                    <span className='p-sm px-lg rounded tracking-wider bg-primaryBlue-100 text-white text-sm uppercase font-semibold'>
                      {subject}
                    </span>
                    <span className='text-sm'>{createdAt}</span>
                  </div>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    {title}
                  </h5>
                  {/* details */}
                  <div className='mb-3'>
                    {limitDetails === 150 ? (
                      <ConvertText
                        textClassName={'mb-3 font-normal text-gray-700'}
                        value={
                          details[0].length > limitDetails
                            ? `${details[0].slice(0, limitDetails)}...`
                            : `${details[0]}${details.length > 1 && '...'}`
                        }
                      />
                    ) : (
                      details.map((item, index) => {
                        return (
                          <ConvertText
                            key={index}
                            textClassName={'mb-3 font-normal text-gray-700'}
                            value={item}
                          />
                        );
                      })
                    )}
                    <button
                      type='button'
                      onClick={handleLimitButton}
                      className='hover:underline transition-all font-semibold'
                    >
                      {limitDetails === 150 ? 'See more' : 'See less'}
                    </button>
                  </div>
                  {/* button for preview */}
                  <button
                    type='button'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none'
                    onClick={() => handleSeeMore(image)}
                  >
                    Read more
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </Masonry>
      </div>
    </section>
  );
};
export default NewsAndUpdates;
