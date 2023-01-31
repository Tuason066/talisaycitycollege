/* react */
import React, { useEffect } from 'react';
/* components */
import CoreValues from '../components/CoreValues';
import Goals from '../components/Goals';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import History from '../components/History';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Vision />
      <Mission />
      <Goals />
      <CoreValues />
      <History />
      <img
        src='./logo.png'
        alt='logo'
        className='w-[65%] md:w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'
      />
    </>
  );
}

export default About;
