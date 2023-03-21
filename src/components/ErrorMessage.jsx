/* REACT ROUTER */
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
  return (
    <section className='min-h-screen grid place-items-center text-center'>
      <article className='max-w-md'>
        <h4 className='font-semibold text-lg'>This Page Isn't Available</h4>
        <p className='my-2'>
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>
        <p>
          Go to{' '}
          <Link to={'/'} className='underline font-semibold'>
            Homepage
          </Link>
        </p>
      </article>
    </section>
  );
};
export default ErrorMessage;
