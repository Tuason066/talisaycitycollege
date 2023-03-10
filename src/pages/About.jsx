/* REACT */
import React, { useEffect } from 'react';
/* COMPONENTS */
import { CoreValues, Goals, Mission, Vision, History } from '../components';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img
        src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1675356562/talisay-city-college/logo_anup6r.png'
        alt='logo'
        className='w-[65%] md:w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'
      />
      <History />
      <Vision />
      <Mission />
      <Goals />
      <CoreValues />
    </>
  );
}

export default About;
