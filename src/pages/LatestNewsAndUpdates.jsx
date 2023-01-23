/* react */
import { useEffect, useState } from 'react';
/* data */
import { newsAndUpdates } from '../data';
/* components */
import NewsAndUpdates from '../components/NewsAndUpdates';

const LatestNewsAndUpdates = () => {
  const [count, setCount] = useState(6);
  let newsData = newsAndUpdates.slice(0, count);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSeeMoreNewsButton = () => {
    setCount((prev) => {
      return prev + 5 <= newsAndUpdates.length
        ? prev + 5
        : newsAndUpdates.length;
    });
  };

  return (
    <NewsAndUpdates
      data={newsData}
      titleClass='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mt-2 md:mt-4'
      subTitleClass='text-xs lg:text-base mb-10 md:mb-14 text-center'
    >
      <div
        className={`${
          count <= newsAndUpdates.length - 1 ? 'block' : 'hidden'
        } text-center`}
      >
        <button
          type='button'
          onClick={handleSeeMoreNewsButton}
          className='hover:underline transition-all font-semibold'
        >
          See more updates
        </button>
      </div>
    </NewsAndUpdates>
  );
};
export default LatestNewsAndUpdates;
