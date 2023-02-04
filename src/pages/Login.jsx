import { useRef, useState } from 'react';

const Login = () => {
  /* initial value */
  const [currentForm, setCurrentForm] = useState('student');
  const [userAccount, setUserAccount] = useState({
    studentID: '',
    studentPassword: '',
    facultyID: '',
    facultyPassword: '',
  });
  /* input fields elements */
  const studentInputFields = useRef([]);
  studentInputFields.current = [];

  const addToStudentInputFields = (el) => {
    if (el && !studentInputFields.current.includes(el)) {
      studentInputFields.current.push(el);
    }
  };

  const facultyInputFields = useRef([]);
  studentInputFields.current = [];

  const addToFacultyInputFields = (el) => {
    if (el && !facultyInputFields.current.includes(el)) {
      facultyInputFields.current.push(el);
    }
  };

  /* student/faculty switch buttons */
  const handleStudentButton = () => {
    setCurrentForm('student');
    /* reset userAccount values */
    setUserAccount((prev) => {
      return { ...prev, facultyID: '', facultyPassword: '' };
    });
    /* reset faculty form */
    facultyInputFields.current.forEach((input) => {
      /* input */
      input.value = '';
      /* error message */
      const inputField = input.parentElement.parentElement;
      const errorElement = inputField.querySelector(
        '[data-id="error-message"]'
      );
      errorElement.classList.remove('block');
      errorElement.classList.add('hidden');
    });
  };

  const handleFacultyButton = () => {
    setCurrentForm('faculty');
    /* reset userAccount values */
    setUserAccount((prev) => {
      return { ...prev, studentID: '', studentPassword: '' };
    });
    /* reset student form */
    studentInputFields.current.forEach((input) => {
      /* input */
      input.value = '';
      /* error message */
      const inputField = input.parentElement.parentElement;
      const errorElement = inputField.querySelector(
        '[data-id="error-message"]'
      );
      errorElement.classList.remove('block');
      errorElement.classList.add('hidden');
    });
  };

  /* handle input fields value */
  const handleOnchage = (e) => {
    const { name, value } = e.target;
    /* set userAccount details */
    setUserAccount((prev) => {
      return { ...prev, [name]: value };
    });
    /* hide error messages */
    if (/student/g.test(name)) {
      studentInputFields.current.forEach((input) => {
        if (name === input.name) {
          const inputField = input.parentElement.parentElement;
          const errorElement = inputField.querySelector(
            '[data-id="error-message"]'
          );
          errorElement.classList.add('hidden');
          errorElement.classList.remove('block');
        }
      });
    } else {
      facultyInputFields.current.forEach((input) => {
        if (name === input.name) {
          const inputField = input.parentElement.parentElement;
          const errorElement = inputField.querySelector(
            '[data-id="error-message"]'
          );
          errorElement.classList.add('hidden');
          errorElement.classList.remove('block');
        }
      });
    }
  };

  /* handle submit form */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* reset input fields and error messages */
    const dataForm = e.target.dataset.id;
    dataForm === 'studentForm'
      ? handleResetInputFieldsAndErrorMessage(studentInputFields)
      : handleResetInputFieldsAndErrorMessage(facultyInputFields);
  };

  const handleResetInputFieldsAndErrorMessage = (arr) => {
    arr.current.forEach((input) => {
      const inputField = input.parentElement.parentElement;
      const errorElement = inputField.querySelector(
        '[data-id="error-message"]'
      );
      errorElement.classList.remove('hidden');
      errorElement.classList.add('block');
    });
  };

  return (
    <section>
      <div className='py-10 md:py-24 lg:py-28 min-h-screen grid place-items-center relative'>
        {/* form container */}
        <div
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
          className='rounded overflow-hidden w-11/12 max-w-sm translate-x-0 shadow-xl'
        >
          {/* background color of top section will be change down here */}
          <div className='px-4 pt-12 pb-2 md:px-8 bg-primaryBlue-500'>
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
                  onClick={handleStudentButton}
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
                  onClick={handleFacultyButton}
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
              <form
                onSubmit={handleSubmit}
                data-id='studentForm'
                className='loginForm studentForm'
              >
                <div className='loginForm-inputField-wrapper'>
                  <div className='loginForm-inputField'>
                    <label
                      htmlFor='studentID'
                      className='whitespace-nowrap font-medium'
                    >
                      Student ID :
                    </label>
                    <input
                      ref={addToStudentInputFields}
                      type='text'
                      value={userAccount.studentID}
                      placeholder='e.g. 2023-1234'
                      pattern='^[\d]{4}-[\d]{4}$'
                      title='Please enter valid Student ID e.g. 2023-1234'
                      required
                      name='studentID'
                      id='studentID'
                      className='w-full outline-none px-2 bg-transparent'
                      onChange={handleOnchage}
                    />
                  </div>
                  <p
                    data-id='error-message'
                    className='hidden loginForm-errorMessage'
                  >
                    You entered a doesn't exist student ID
                  </p>
                </div>
                <div className='loginForm-inputField-wrapper'>
                  <div className='loginForm-inputField'>
                    <label
                      htmlFor='studentPassword'
                      className='whitespace-nowrap font-medium'
                    >
                      Password :
                    </label>
                    <input
                      ref={addToStudentInputFields}
                      type='password'
                      value={userAccount.studentPassword}
                      placeholder='******'
                      required
                      name='studentPassword'
                      id='studentPassword'
                      className='w-full outline-none px-2 bg-transparent'
                      onChange={handleOnchage}
                    />
                  </div>
                  <p
                    data-id='error-message'
                    className='hidden loginForm-errorMessage'
                  >
                    You entered a wrong password
                  </p>
                </div>
                <button
                  type='submit'
                  className='loginForm-btn bg-primaryYellow-450 hover:primaryYellow-550 text-primaryBlue-500'
                >
                  Sign In
                </button>
              </form>
              {/* faculty form */}
              <form
                onSubmit={handleSubmit}
                data-id='facultyForm'
                className='loginForm facultyForm'
              >
                <div className='loginForm-inputField-wrapper'>
                  <div className='loginForm-inputField'>
                    <label
                      htmlFor='facultyID'
                      className='whitespace-nowrap font-medium'
                    >
                      Faculty ID :
                    </label>
                    <input
                      ref={addToFacultyInputFields}
                      type='text'
                      value={userAccount.facultyID}
                      placeholder='e.g. 2020-1234'
                      pattern='^[\d]{4}-[\d]{4}$'
                      title='Please enter valid Student ID e.g. 2023-1234'
                      required
                      name='facultyID'
                      id='facultyID'
                      className='w-full outline-none px-2'
                      onChange={handleOnchage}
                    />
                  </div>
                  <p
                    data-id='error-message'
                    className='hidden loginForm-errorMessage'
                  >
                    You entered a doesn't exist faculty ID
                  </p>
                </div>
                <div className='loginForm-inputField-wrapper'>
                  <div className='loginForm-inputField'>
                    <label
                      htmlFor='facultyPassword'
                      className='whitespace-nowrap font-medium'
                    >
                      Password :
                    </label>
                    <input
                      ref={addToFacultyInputFields}
                      type='password'
                      value={userAccount.facultyPassword}
                      placeholder='******'
                      required
                      name='facultyPassword'
                      id='facultyPassword'
                      className='w-full outline-none px-2'
                      onChange={handleOnchage}
                    />
                  </div>
                  <p
                    data-id='error-message'
                    className='hidden loginForm-errorMessage'
                  >
                    You entered a wrong password
                  </p>
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
