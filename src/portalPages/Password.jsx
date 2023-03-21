const Password = () => {
  return (
    <main className='w-11/12 mx-auto min-h-screen'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='bg-violet-400 max-w-md mx-auto mt-12 mb-20 py-8 px-4 md:py-12 md:px-8 rounded'
      >
       {/*  <h3
          style={{ textShadow: '0.05em 0.05em 0 #222' }}
          className='text-center text-xl md:text-2xl lg:text-3xl text-white font-bold uppercase mb-4 md:mb-6 lg:mb-8 tracking-wide md:tracking-wider'
        >
          Change Password
        </h3> */}
        <h3 className='text-center text-xl md:text-2xl lg:text-3xl text-customBlue-750 font-bold mb-4 md:mb-6 lg:mb-8 tracking-wide md:tracking-wider'>Change Password</h3>
        <div className='mb-4'>
          <label
            htmlFor='current-password'
            className='capitalize text-base text-customBlue-750 font-medium tracking-wide mb-1 inline-block'
          >
            current password
          </label>
          <input
            type='text'
            id='current-password'
            className='block w-full p-base rounded bg-white'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='new-password'
            className='capitalize text-base text-customBlue-750 font-medium tracking-wide mb-1 inline-block'
          >
            new password
          </label>
          <input
            type='text'
            id='new-password'
            className='block w-full p-base rounded bg-white'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='confirm-new-password'
            className='capitalize text-base text-customBlue-750 font-medium tracking-wide mb-1 inline-block'
          >
            confirm new password
          </label>
          <input
            type='text'
            id='current-password'
            className='block w-full p-base rounded bg-white'
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='blue-btn'
          >
            Update Password
          </button>
        </div>
      </form>
    </main>
  );
};
export default Password;
