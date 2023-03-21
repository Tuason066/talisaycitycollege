/* REACT */
import { useState, useEffect } from 'react';
/* COMPONENTS */
import { Posts } from './src/components';

const LatestNewsAndUpdates = ({ posts }) => {
  const [limitPosts, setLimitPosts] = useState(6);

  const handleLimitPosts = () =>
    setLimitPosts((prev) => (prev > posts.length ? posts.length : prev + 6));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='section'>
      <div className='section-center'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mt-2 md:mt-4'>
          Latest news and updates
        </h2>
        <p className='text-xs lg:text-base mb-10 md:mb-14 text-center'>
          Stay up to date
        </p>
        <Posts posts={posts.slice(0, limitPosts)} />

        {limitPosts < posts.length && (
          <div className='text-center'>
            <button
              type='button'
              onClick={handleLimitPosts}
              className='hover:underline mt-4 md:mt-8'
            >
              See more updates
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default LatestNewsAndUpdates;
