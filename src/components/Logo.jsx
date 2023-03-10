/* REACT ROUTER */
import { Link } from 'react-router-dom';

const Logo = () => {
  
  return (
    <Link
      to={'/'}
      title='Home'
      className='flex items-center gap-x-2'
      onClick={() => window.scrollTo(0, 0)}
    >
      <img
        src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1675356562/talisay-city-college/logo_anup6r.png'
        alt='logo'
        className='w-8 lg:w-12'
      />
      <div>
        <h1 className='uppercase border-b border-white text-base tracking-wider font-bold'>
          Talisay City College
        </h1>
        <address className='text-xs tracking-wide'>
          Poblacion, Talisay City, Cebu
        </address>
      </div>
    </Link>
  );
};
export default Logo;
