import { useRef, useEffect, useState } from 'react';

const Login = () => {
  const [currentForm, setCurrentForm] = useState('student');

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <section>
      <div className='py-10 md:py-24 lg:py-28 grid place-items-center relative'>
        {/* form container */}
        <div
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
          className='rounded overflow-hidden w-11/12 max-w-sm translate-x-0 shadow-xl'
        >
          {/* background color of top section will be change down here */}
          <div className='px-4 pt-8 pb-2 md:px-8 bg-primaryBlue-500'>
            <img
              src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1675356562/talisay-city-college/logo_anup6r.png'
              alt='logo'
              className='w-32 mx-auto'
            />
            {/* buttons */}
            <ul className='flex items-center mt-8'>
              <li className='w-full'>
                <button
                  type='button'
                  onClick={() => setCurrentForm('student')}
                  className={`${
                    currentForm === 'student' && 'border-b-white'
                  } text-white font-semibold uppercase tracking-wider px-xl py-base border-2  border-transparent w-full block transition-all duration-500 outline-white`}
                >
                  Student
                </button>
              </li>
              <li className='w-full'>
                <button
                  type='button'
                  onClick={() => setCurrentForm('faculty')}
                  className={`${
                    currentForm === 'faculty' && 'border-b-white'
                  } text-white font-semibold uppercase tracking-wider px-xl py-base border-2  border-transparent w-full block transition-all duration-500 outline-white`}
                >
                  Faculty
                </button>
              </li>
            </ul>
          </div>
          {/* flip form - rotateForm */}
          <div
            className={`${
              currentForm === 'student' ? '' : 'rotateForm'
            } loginForm-container`}
          >
            <div className='loginForm-wrapper'>
              {/* student form */}
              <form onSubmit={handleSubmit} className='loginForm studentForm'>
                <div className='loginForm-inputField'>
                  <label
                    htmlFor='studentID'
                    className='whitespace-nowrap font-medium'
                  >
                    Student ID :
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. 2023-1234'
                    pattern='^[\d]{4}-[\d]{4}$'
                    title='Please enter valid Student ID e.g. 2023-1234'
                    required
                    id='studentID'
                    className='w-full outline-none px-2'
                  />
                </div>
                <div className='loginForm-inputField'>
                  <label
                    htmlFor='studentPassword'
                    className='whitespace-nowrap font-medium'
                  >
                    Password :
                  </label>
                  <input
                    type='text'
                    placeholder='******'
                    required
                    id='studentPassword'
                    className='w-full outline-none px-2'
                  />
                </div>
                <button
                  type='submit'
                  className='loginForm-btn bg-primaryYellow-450 hover:primaryYellow-550 text-primaryBlue-500'
                >
                  Sign In
                </button>
              </form>
              {/* faculty form */}
              <form onSubmit={handleSubmit} className='loginForm facultyForm'>
                <div className='loginForm-inputField'>
                  <label
                    htmlFor='facultyID'
                    className='whitespace-nowrap font-medium'
                  >
                    Faculty ID :
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. 2020-1234'
                    pattern='^[\d]{4}-[\d]{4}$'
                    title='Please enter valid Student ID e.g. 2023-1234'
                    required
                    id='facultyID'
                    className='w-full outline-none px-2'
                  />
                </div>
                <div className='loginForm-inputField'>
                  <label
                    htmlFor='facultyPassword'
                    className='whitespace-nowrap font-medium'
                  >
                    Password :
                  </label>
                  <input
                    type='text'
                    placeholder='******'
                    required
                    id='facultyPassword'
                    className='w-full outline-none px-2'
                  />
                </div>
                <button
                  type='submit'
                  className='loginForm-btn bg-primaryYellow-450 hover:primaryYellow-550 text-primaryBlue-500'
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
