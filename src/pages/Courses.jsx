/* react */
import { useState } from 'react';
/* data */
import { courses } from '../data';
/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import Section from '../components/Section';

const Courses = () => {
  /* react masonry */
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };
  /* currentState */
  const [currentFilter, setCurrentFilter] = useState('All');
  /* courses */
  const [ourOfferedCourses, setOurOfferedCourses] = useState(courses);
  /* departments */
  const departments = [
    'All',
    ...new Set(courses.map((course) => course.department)),
  ];

  const handleFilterButtons = (e) => {
    const text = e.target.textContent;
    setCurrentFilter(text);
    if (text === 'All') {
      setOurOfferedCourses(courses);
    } else {
      setOurOfferedCourses(
        courses.filter((course) => course.department === text)
      );
    }
  };

  /* MODAL */
  const [isModal, setIsModal] = useState({
    state: false,
    course: '',
    major: '',
  });

  const handleOpenModal = (course, major = '') => {
    setIsModal((prev) => {
      return { ...prev, state: true, course: course, major: major };
    });
  };

  const handleCloseModal = () => {
    setIsModal((prev) => {
      return { ...prev, state: false, course: '', major: '' };
    });
  };

  return (
    <Section>
      {/* title / subtitle */}
      <div data-aos='zoom-in' data-aos-delay='200'>
        {/* title */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-primaryBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center lg:mb-1'
        >
          Our Offered Courses
        </h2>
        <p className='text-sm md:text-base tracking-wide text-center'>
          Be a talisalites now!
        </p>
        <div className='mt-8 mb-12 text-center'>
          {/* filter buttons */}
          {departments.map((department, index) => {
            return (
              <button
                key={index}
                type='button'
                onClick={handleFilterButtons}
                className={`${
                  currentFilter === department
                    ? 'bg-primaryYellow-500 text-primaryBlue-500'
                    : 'bg-primaryBlue-500 text-white'
                } hover:bg-primaryYellow-500 hover:text-primaryBlue-500 text-base px-lg py-base rounded inline-block m-1 md:m-2 shadow transition-all duration-300`}
              >
                {department}
              </button>
            );
          })}
        </div>
      </div>

      {/* cards */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
        columnClassName='my-masonry-grid_column developers-masonry-grid_column'
      >
        {ourOfferedCourses.map(
          (
            {
              image,
              course,
              department,
              major,
              currentlyEnrolled,
              graduates,
              enrollmentLink,
            },
            index
          ) => {
            console.log(course);
            return (
              <article
                key={index}
                className='courses-card'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay='400'
              >
                {major && (
                  <span className='absolute top-0 left-0 bg-blueViolet-450 text-blueViolet-800 font-semibold tracking-wide p-base rounded-br z-10 shadow-lg text-sm'>
                    Major in {major}
                  </span>
                )}
                <div className='overflow-hidden'>
                  <img
                    src={image}
                    alt={`${course} ${major && `major in ${major}`}`}
                    className='shadow-lg rounded-t'
                  />
                </div>
                <div className='p-4 md:p-6 text-white'>
                  <h3 className='font-bold text-xl mb-3 mt-1 md:mb-5 md:mt-2 text-center tracking-wider'>
                    {course}
                  </h3>
                  <ul className='font-semibold tracking-wide'>
                    <li>
                      <p>
                        Department:{' '}
                        <span className='font-normal'>{department}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Currently Enrolled:{' '}
                        <span className='font-normal'>{currentlyEnrolled}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Graduates:{' '}
                        <span className='font-normal'>{graduates}</span>
                      </p>
                    </li>
                  </ul>
                  {/https?.+/g.test(enrollmentLink) ? (
                    <a
                      href={enrollmentLink}
                      className='bg-white text-blueViolet-700 block w-full text-center py-base rounded mt-4 font-semibold tracking-wider'
                    >
                      Enroll Now
                    </a>
                  ) : (
                    <button
                      type='button'
                      onClick={() => handleOpenModal(course, major)}
                      className='bg-white text-blueViolet-700 hover:opacity-80 block w-full text-center py-base rounded mt-4 font-semibold tracking-wider transition-all duration-300'
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              </article>
            );
          }
        )}
      </Masonry>

      {/* modal */}
      <aside
        className={`${
          isModal.state ? 'scale-100' : 'scale-0'
        } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-blueViolet-800 rounded shadow-xl w-11/12 max-w-md p-4 md:p-8 z-50 transition-all duration-300`}
      >
        <div className='relative text-center'>
          {/* close icon button */}
          <button
            type='button'
            onClick={handleCloseModal}
            className='absolute top-0 right-0 hover:scale-110 transition-all'
          >
            <Icon icon='prime:times' color='#4c4e99' width='30' height='30' />
          </button>
          {/* sad icon/emoji */}
          <Icon
            icon='fluent:emoji-sad-24-regular'
            color='#4c4e99'
            width='200'
            height='200'
            className='max-w-sm w-full mx-auto'
          />{' '}
          {/* Message */}
          <h4 className='mt-4 mb-8'>
            <strong>Sorry</strong>, our enrollment for {isModal.course}{' '}
            {isModal.major !== '' && `Major in ${isModal.major}`} are already
            closed.
          </h4>
          {/* close button */}
          <button
            type='button'
            onClick={handleCloseModal}
            className='bg-blueViolet-700 hover:bg-blueViolet-600 py-base px-xl text-white text-center rounded inline-block mb-4 shadow-lg transition-all'
          >
            Close
          </button>
        </div>
      </aside>
    </Section>
  );
};
export default Courses;
