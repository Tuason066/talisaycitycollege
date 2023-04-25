/* REACT */
import React, { useState, useEffect } from 'react';
/* COMPONENTS */
import { MobileScheduleTable, DesktopScheduleTable } from '../portalComponents';
/* TODO: IMPLEMENT THE LAZY LOADING AND SUSPENSE */

const Schedule = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    return () => window.removeEventListener('resize', handleWindowWidth);
  }, []);

  return (
    <main className='py-8 md:py-12 lg:py-14 min-h-[76dvh]'>
      <div className='center-element text-center capitalize'>
        <h3 className='uppercase mb-6 md:mb-8 text-center text-xl md:text-3xl lg:text-4xl font-bold tracking-widest text-customBlue-750 border-b-4 border-double border-customBlue-750 w-fit mx-auto'>
          My Class Schedule
        </h3>
        {windowWidth <= 768 ? (
          <MobileScheduleTable />
        ) : (
          <DesktopScheduleTable />
        )}
      </div>
    </main>
  );
};
export default Schedule;
