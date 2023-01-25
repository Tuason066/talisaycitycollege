/* react */
import { useState } from 'react';
/* context */
import { useGlobalContext } from '../context';
/* components */
import ConvertText from './ConvertText';
import NewsMedia from './NewsMedia';

const News = ({ data }) => {
  const { media, id, subject, createdAt, title, details } = data;

  /* details */
  const [limitDetails, setLimitDetails] = useState(150);
  const handleLimitButton = () => {
    setLimitDetails((prev) => (prev === 150 ? 'see all' : 150));
  };

  /* preview component */
  const { setIsPreview } = useGlobalContext();

  const handleSeeMore = (news) => {
    setIsPreview((prev) => {
      return { ...prev, state: true, news, defaultNews: data };
    });
    /* hide the scrollbaar */
    document.body.style.overflow = 'hidden';
  };

  return (
    <article
      key={id}
      className='max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow mx-auto'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-delay='4000'
    >
      {/* images/videos */}
      <div
        className='rounded-t-lg cursor-pointer border-b overflow-hidden'
        onClick={() => handleSeeMore(media)}
      >
        <NewsMedia
          image={media[0].image}
          video={media[0].video}
          title={title}
        />
      </div>
      {/* TODO: Make a NewsArticle Compotent */}
      <div className='p-5 bg-slate-100'>
        <div className='mb-3 inline-flex items-center gap-x-2'>
          <span className='p-sm px-lg rounded tracking-wider text-primaryBlue-100 bg-yellow-400 text-sm uppercase font-bold'>
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
          onClick={() => handleSeeMore(media)}
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
};
export default News;
