/* REACT */
import React, { useState, useEffect } from 'react';
/* COMPONENTS */
import { MobileScheduleTable, DesktopScheduleTable } from '../portalComponents';
/* TODO: IMPLEMENT THE LAZY LOADING AND SUSPENSE */

const Schedule = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSetWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSetWidth);
    return () => {
      window.removeEventListener('resize', handleSetWidth);
    };
  }, []);

  return (
    <main className='py-8 md:py-12 lg:py-14 min-h-screen'>
      <div className='section-center text-center capitalize'>
        <h4 className='uppercase mb-6 md:mb-8 text-centertext-xl md:text-3xl lg:text-4xl font-bold tracking-widest'>
          My Class Schedule
        </h4>
        {width <= 768 ? <MobileScheduleTable /> : <DesktopScheduleTable />}
      </div>
    </main>
  );
};
export default Schedule;
