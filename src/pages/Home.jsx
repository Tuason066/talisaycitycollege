/* react */
import { useEffect } from 'react';
/* react router */
import { Link } from 'react-router-dom';
/* data */
import { posts } from '../data';
/* components */
import Section from '../components/Section';
import Achievers from '../components/Achievers';
import LandingPage from '../components/LandingPage';
import Concern from '../components/Concern';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import Posts from '../components/Posts';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <Section>
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
        <Posts posts={posts.slice(0, 6)} />
        <div className='text-center mt-4 md:mt-8'>
          <Link to='posts' className='hover:underline'>
            See more updates
          </Link>
        </div>
      </Section>
      <FrequentlyAskedQuestions />
      <Concern />
    </>
  );
}

export default Home;
