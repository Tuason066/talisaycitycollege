/* REACT */
import { useState } from 'react';
/* REACT ROUTER */
import { useNavigate } from 'react-router-dom';

const FacultyLogin = () => {
  /* REACT ROUTER HOOKS */
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [userAccount, setUserAccount] = useState({
    username: '',
    password: '',
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    const newVal = [...value].filter((item) => item !== '-');

    /* TODO: refactor this line of code - auto add "-" */
    if (name === 'username' && value.length > 4) {
      /* modify add "-" */
      newVal.splice(4, 0, '-');
      setUserAccount((prev) => {
        return { ...prev, [name]: newVal.join('') };
      });
    } else {
      setUserAccount((prev) => {
        return { ...prev, [name]: value };
      });
    }
    /* TODO: end of - refactor this line of code - auto add "-" */
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userAccount;

    if (username === '2023-1387' && password === 'password') {
      navigate('/faculty-portal');
    } else {
      setUserAccount((prev) => {
        return { ...prev, password: '' };
      });
      setIsError(true);
    }
  };

  return (
    <section className='min-h-screen grid place-items-center relative bg-[#FDF0CA] py-12'>
      <form
        onSubmit={handleOnSubmit}
        data-aos='zoom-in'
        data-aos-delay='200'
        data-aos-duration='700'
        className='student-form border border-customGray-500 max-w-sm px-4 pt-7 pb-8 sm:px-8 sm:pt-14 sm:pb-16 bg-customBlue-500 w-11/12 mx-auto shadow-lg rounded z-10'
      >
        {isError && (
          <p className='p-base text-xs text-red-600 mb-4 text-center'>
            Student ID doesn't exist or the password is wrong. Please try again
          </p>
        )}
        <div>
          <label
            htmlFor='username'
            className='text-black mb-1 inline-block tracking-wide'
          >
            Faculty's ID
          </label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='e.g. 2023-1387'
            pattern='^[\d]{4}-[\d]{4}$'
            required
            title='Please enter valid Faculty ID e.g. 2023-1387'
            maxLength='9'
            onChange={handleOnchange}
            value={userAccount.username}
            className='block w-full border border-customGray-500 p-base outline-none focus:border-black'
          />
        </div>
        <div className='mt-4'>
          <label
            htmlFor='password'
            className='text-black mb-1 inline-block tracking-wide'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            required
            onChange={handleOnchange}
            className='block w-full border border-customGray-500 p-base outline-none focus:border-black'
          />
        </div>
        <div className='text-center mt-6'>
          <button
            type='submit'
            className='bg-customYellow-500 hover:bg-customYellow-350 py-base px-xl rounded font-medium text-customBlue-500 transition-all'
          >
            Log in
          </button>
        </div>
      </form>
    </section>
  );
};
export default FacultyLogin;
