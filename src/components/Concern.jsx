/* REACT */
import { useRef, useState, lazy } from 'react';
/* COMPONENTS */
const ConcernSuccessModal = lazy(() => import('./ConcernSuccessModal'));

function Concern() {
  /* submit */
  const [isConcernSubmitted, setIsConcernSubmitted] = useState(false);
  /* data inputs */
  const [dataInputs, setDataInputs] = useState({
    fullname: '',
    email: '',
    concern: '',
  });

  const inputContainers = useRef([]);
  inputContainers.current = [];
  const addInputElementContainer = (element) => {
    if (element && !inputContainers.current.includes(element)) {
      inputContainers.current.push(element);
    }
  };

  const handleOnChange = (e) => {
    const input = e.target;
    const { name, value } = input;
    setDataInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* input data validation for final submission */
    let success = true;
    /* loop through each inputs and validate data */
    inputContainers.current.forEach((container) => {
      const input = container.querySelector('[data-input]');
      const { name, value } = input;
      const errorElement = container.querySelector('[data-errormessage]');

      const validate = (val) => {
        if (val) {
          /* input field */
          input.classList.add('border-customBlue-500');
          input.classList.remove('border-red-500');
          input.classList.remove('border-neutral-300');
          /* hide error message */
          errorElement.classList.add('hidden');
          errorElement.classList.remove('inline-block');
        } else {
          /* input field */
          input.classList.add('border-red-500');
          input.classList.remove('border-customBlue-500');
          input.classList.remove('border-neutral-300');
          /* show error message */
          errorElement.classList.remove('hidden');
          errorElement.classList.add('inline-block');
          /* success value for submittion */
          success = false;
        }
      };

      if (name === 'fullname' || name === 'concern') {
        validate(value);
      } else if (name === 'email') {
        validate(/(.+)@(.+)\.[a-z]{2,3}/gi.test(value));
      }
    });

    if (success) {
      /* show alert box */
      setIsConcernSubmitted(true);
      /* reset input values */
      setDataInputs({
        fullname: '',
        email: '',
        concern: '',
      });
      /* reset all input elements styles */
      inputContainers.current.forEach((container) => {
        const inputElement = container.querySelector('[data-input]');
        inputElement.classList.remove('border-red-500');
        inputElement.classList.remove('border-customBlue-500');
        inputElement.classList.add('border-neutral-300');
      });
    }
  };

  return (
    <section className='overflow-hidden'>
      <div className='mx-auto w-11/12 py-8 md:py-12 lg:py-14 lg:flex lg:gap-x-20'>
        {/* GOOGLE MAP #2 */}
        <iframe
          src='https://www.google.com/maps/embed?pb=!4v1672320594521!6m8!1m7!1sY4pYP_ecel4_edtGhkxY_g!2m2!1d10.24326936706081!2d123.8479471429184!3f125.64904534416829!4f0.5633462954773734!5f0.7820865974627469'
          width='600'
          height='450'
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
          }}
          className='hidden lg:block rounded'
          data-aos='fade-right'
          data-aos-duration='700'
          data-aos-delay='300'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        {/* FORM */}
        <form
          className='lg:max-w-lg relative'
          onSubmit={handleSubmit}
          data-aos='fade-left'
          data-aos-duration='700'
          data-aos-delay='200'
        >
          {/* ALERT BOX FOR SUCCESSFULLY SUBMITTED CONCERN */}
          <ConcernSuccessModal
            isConcernSubmitted={isConcernSubmitted}
            setIsConcernSubmitted={setIsConcernSubmitted}
          />

          {/* CONCERN FORM */}
          <h2 className='text-center lg:text-left text-xl md:text-2xl lg:text-4xl font-black uppercase mb-6 md:mb-8 lg:mb-10 tracking-wide md:tracking-wider lg:tracking-widest'>
            Send us your concern
          </h2>
          <div className='grid gap-y-4 max-w-md lg:max-w-full mx-auto'>
            <div ref={addInputElementContainer}>
              <input
                data-input
                id='fullname'
                name='fullname'
                type='text'
                placeholder='Full Name'
                onChange={handleOnChange}
                value={dataInputs.fullname}
                className='border border-neutral-300 outline-none py-2 px-3 text-base w-full'
              />
              <span
                data-errormessage
                className='text-xs md:text-sm text-red-500 hidden'
              >
                Please enter your full name
              </span>
            </div>
            <div ref={addInputElementContainer}>
              <input
                data-input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                onChange={handleOnChange}
                value={dataInputs.email}
                className='border border-neutral-300 outline-none py-2 px-3 text-base w-full'
              />
              <span
                data-errormessage
                className='text-xs md:text-sm text-red-500 hidden'
              >
                Please enter your valid email
              </span>
            </div>
            <div ref={addInputElementContainer}>
              <textarea
                data-input
                name='concern'
                id='concern'
                rows='5'
                placeholder='Please tell us your concern...'
                onChange={handleOnChange}
                value={dataInputs.concern}
                className='border border-neutral-300 outline-none py-2 px-3 text-base w-full'
              ></textarea>
              <span
                data-errormessage
                className='text-xs md:text-sm text-red-500 hidden'
              >
                Please tell us your concern
              </span>
            </div>
            <button
              title='Submit'
              type='submit'
              className='block mx-auto lg:ml-0 px-lg py-sm md:py-base md:px-xl rounded text-white font-semibold tracking-wide md:tracking-wider uppercase bg-customBlue-500 hover:bg-customBlue-400 transition-all duration-200'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Concern;
