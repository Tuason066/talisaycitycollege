import React from 'react';
import Achievers from '../components/Achievers';
import LandingPage from '../components/LandingPage';
import HomeConcern from '../HomeComponents/HomeConcern';
import HomeFaq from '../HomeComponents/HomeFaq';
import HomeNewsAndUpdates from '../HomeComponents/HomeNewsAndUpdates';

function Home() {
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
      <HomeNewsAndUpdates />
      <HomeFaq />
      <HomeConcern />
    </>
  );
}

export default Home;
