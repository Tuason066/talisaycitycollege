/* REACT */
import { useEffect } from 'react';
/* COMPONENTS */
import { Posts } from '../components';
import { usePostContext } from '../context/post_context';

const LatestNewsAndUpdates = () => {
  const { posts, limit, getPosts, incrementPosts } = usePostContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    getPosts();
  }, []);

  return (
    <section className='section'>
      <div className='center-element'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mt-2 md:mt-4'>
          Latest news and updates
        </h2>
        <p className='text-xs lg:text-base mb-10 md:mb-14 text-center'>
          Stay up to date
        </p>
        <Posts posts={posts.slice(0, limit)} />

        {limit < posts.length && (
          <div className='text-center'>
            <button
              type='button'
              onClick={() => incrementPosts()}
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
