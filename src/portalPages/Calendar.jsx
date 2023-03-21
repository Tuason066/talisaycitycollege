import { schoolCalaendar } from '../utils/constants';

import DescriptiveCalendar from '../portalComponents/DescriptiveCalendar';
import FirstSemCalendars from '../portalComponents/FirstSemCalendars';
import SecondSemCalendars from '../portalComponents/SecondSemCalendars';

const Calendar = () => {
  const { schoolYear } = schoolCalaendar;

  return (
    <main className='py-8 md:py-12 lg:py-14 min-h-screen'>
      <div className='section-center text-center capitalize'>
        {/* TITLE COMPONENT */}
        <header className='uppercase mb-6 md:mb-8'>
          <h4 className='text-xl md:text-3xl lg:text-4xl font-bold tracking-widest underline'>
            School Calendar
          </h4>
          <p className='text-base md:text-lg lg:text-xl font-semibold tracking-wider'>
            Academic Year {schoolYear}
          </p>
        </header>
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <FirstSemCalendars />
          <DescriptiveCalendar {...schoolCalaendar} />
          <SecondSemCalendars />
        </div>
        <div className='text-left mt-4 md:mt-8 lg:mt-10'>
          <h5 className='font-bold uppercase tracking-wider mb-2 text-base md:text-lg'>
            Legend:
          </h5>
          <div className='md:grid md:grid-cols-2 md:gap-x-4'>
            <div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-white border border-black'></div>
                <p>School Days</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-pink-300 border border-black'></div>
                <p>Exam Schedules (prelim/Midterm/Finals)</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-green-300 border border-black'></div>
                <p>National & Local Holidays</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-yellow-300 border border-black'></div>
                <p>Vacation Days</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-sky-300 border border-black'></div>
                <p>Semestral Break and Enrolments</p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-orange-300 border border-black'></div>
                <p>Start of Classes</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-violet-300 border border-black'></div>
                <p>End of Classes</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-violet-400 border border-black'></div>
                <p>Commencement Rites</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='w-4 h-4 bg-orange-400 border border-black'></div>
                <p>No Classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Calendar;
