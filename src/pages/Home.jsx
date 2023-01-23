/* react */
/* react router */
import { Link } from 'react-router-dom';
/* data */
import { newsAndUpdates } from '../data';
/* components */
import Achievers from '../components/Achievers';
import LandingPage from '../components/LandingPage';
import NewsAndUpdates from '../components/NewsAndUpdates';
import Concern from '../components/Concern';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function Home() {
  const newsData = newsAndUpdates.slice(0, 6);

  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */

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
      <NewsAndUpdates
        data={newsData}
        titleClass='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest'
        subTitleClass='text-xs lg:text-base mb-6 md:mb-8 lg:mb-10'
      >
        <div className='text-center mt-2 md:mt-3 lg:mt-4'>
          <Link
            to={'/news'}
            className='hover:underline transition-all font-semibold'
          >
            See more updates
          </Link>
        </div>
      </NewsAndUpdates>
      <FrequentlyAskedQuestions />
      <Concern />
    </>
  );
}

export default Home;
