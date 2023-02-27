const Course = ({
  image,
  course,
  department,
  major,
  currentlyEnrolled,
  graduates,
  enrollmentLink,
  handleOpenModal,
}) => (
  <article
    className='courses-card'
    data-aos='fade-up'
    data-aos-anchor-placement='top-bottom'
    data-aos-delay='400'
  >
    {major && (
      <span className='absolute top-0 left-0 bg-customBlueViolet-550 text-white tracking-wide p-base px-lg rounded-br z-10 shadow-lg text-sm'>
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
            Department: <span className='font-normal'>{department}</span>
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
            Graduates: <span className='font-normal'>{graduates}</span>
          </p>
        </li>
      </ul>
      {/https?.+/g.test(enrollmentLink) ? (
        <a
          href={enrollmentLink}
          className='bg-white text-customBlueViolet-700 block w-full text-center py-base rounded mt-4 font-semibold tracking-wider'
        >
          Enroll Now
        </a>
      ) : (
        <button
          type='button'
          onClick={() => handleOpenModal(course, major)}
          className='bg-white text-customBlueViolet-700 hover:opacity-80 block w-full text-center py-base rounded mt-4 font-semibold tracking-wider transition-all duration-300'
        >
          Enroll Now
        </button>
      )}
    </div>
  </article>
);
export default Course;
