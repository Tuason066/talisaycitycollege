/* react */
import { useEffect } from 'react';
/* react router */
import { Link } from 'react-router-dom';
/* data */
// import { posts } from '../data';
import { usePostContext } from '../context/post_context';
/* components */
import {
  Achievers,
  LandingPage,
  Concern,
  FrequentlyAskedQuestions,
  Posts,
} from '../components';

function Home() {
  const { posts, getPosts } = usePostContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    /* fetch posts */
    getPosts();
  }, []);

  return (
    <>
      <picture>
        {/* courses */}
        <source
          srcSet='https://res.cloudinary.com/dwiivmg3b/image/upload/v1673399008/talisay-city-college/tcc-courses_ifmxtf.webp'
          media='(min-width: 1024px)'
        />
        {/* explore your creativity */}
        <source
          srcSet='https://res.cloudinary.com/dwiivmg3b/image/upload/v1673399004/talisay-city-college/explore-your-creativity_jc6uea.webp'
          media='(min-width: 768px)'
        />
        {/* pursue your passion */}
        <img
          src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1673399003/talisay-city-college/pursue-your-passions_s0mzbi.webp'
          alt='pursue your passions'
        />
      </picture>
      <LandingPage />
      <Achievers />
      <section className='section'>
        <div className='center-element'>
          {' '}
          <h2
            className={
              'text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest'
            }
          >
            Latest news and updates
          </h2>
          <p className={'text-xs lg:text-base mb-6 md:mb-8 lg:mb-10'}>
            Stay up to date
          </p>
          <Posts posts={posts.slice(0, 3)} />
          <div className='text-center mt-4 md:mt-8'>
            <Link to='posts' className='hover:underline'>
              See more updates
            </Link>
          </div>
        </div>
      </section>
      <FrequentlyAskedQuestions />
      <Concern />
    </>
  );
}

export default Home;
