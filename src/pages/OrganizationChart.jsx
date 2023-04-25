/* REACT MASONRY : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* DATA */
import { officials } from '../data';

const OrganizationChart = () => {
  /* react masonry media queries */
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  /* TODO: add shadows to each articles (cards) */

  return (
    <section className='section'>
      <div className='center-element'>
        {/* college president */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center mb-4 md:mb-8 lg:mb-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          President
        </h2>
        {/* TODO: fixed the grid system make it responsive used react masonry */}
        <article
          className='bg-customGreen-600 shadow-black shadow-md rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all duration-1000'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          <img
            src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1677488307/talisay-city-college/officials/richel_bacaltos_oahmbq.webp'
            alt={'Richel N. Bacaltos, ED.D.'}
            className='shadow border border-customGreen-500 profile-img'
          />
          <div className=''>
            <h3 className='font-bold text-base uppercase'>
              Richel N. Bacaltos, ED.D.
            </h3>
            <p className='text-sm'>College President</p>
          </div>
        </article>
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center m-4 md:m-8 lg:m-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Secretary
        </h2>
        <article
          className='bg-customGreen-600 shadow-md shadow-black rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all duration-1000'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          <img
            src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1677488303/talisay-city-college/officials/catherine_dejan_qyxotp.webp'
            alt={'Catherine A. Dejan, LPT'}
            className='shadow border border-customGreen-500 profile-img'
          />
          <div className=''>
            <h3 className='font-bold text-base uppercase'>
              Catherine A. Dejan, LPT
            </h3>
            <p className='text-sm'>Secretary/ HR Head</p>
          </div>
        </article>
        {/* end of college president */}
        {/* college dean */}
        {/* <h2 className='text-lg mb-4'>Dean</h2> */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center m-4 md:m-8 lg:m-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Dean
        </h2>
        {/* <div className='masonry'> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column developers-masonry-grid_column'
        >
          {officials.dean.map(({ name, position, image }, index) => (
            <article
              key={index}
              className='bg-customGreen-600 shadow-md shadow-black rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all'
              data-aos='zoom-in'
              data-aos-duration='700'
            >
              <img
                src={
                  image
                    ? image
                    : 'https://via.placeholder.com/96?text=Image+Not+Found'
                }
                alt={name}
                loading='lazy'
                className='profile-img'
              />
              <div className=''>
                <h3 className='font-bold text-base uppercase'>{name}</h3>
                <p className='text-sm'>{position}</p>
              </div>
            </article>
          ))}
        </Masonry>
        {/* </div> */}
        {/* end of college dean */}
        {/* college program coordinators */}
        {/* <h2 className='text-lg mb-4'>Coordinators</h2> */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center m-4 md:m-8 lg:m-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Coordinators
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column developers-masonry-grid_column'
        >
          {officials.coordinators.map(({ name, position, image }, index) => (
            <article
              key={index}
              className='bg-customGreen-600 shadow-md shadow-black rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all'
              data-aos='zoom-in'
              data-aos-duration='700'
            >
              <img
                src={
                  image
                    ? image
                    : 'https://via.placeholder.com/96?text=Image+Not+Found'
                }
                alt={name}
                loading='lazy'
                className='profile-img'
              />
              <div className=''>
                <h3 className='font-bold text-base uppercase'>{name}</h3>
                <p className='text-sm'>{position}</p>
              </div>
            </article>
          ))}
        </Masonry>
        {/* end of college program coordinators */}
        {/* college course in-charge */}
        {/* <h2 className='text-lg mb-4'>Course In-Charge</h2> */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center m-4 md:m-8 lg:m-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Course In-Charge
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column developers-masonry-grid_column'
        >
          {officials.courseInCharge.map(({ name, position, image }, index) => (
            <article
              key={index}
              className='bg-customGreen-600 shadow-md shadow-black rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all'
              data-aos='zoom-in'
              data-aos-duration='700'
            >
              <img
                src={
                  image
                    ? image
                    : 'https://via.placeholder.com/96?text=Image+Not+Found'
                }
                alt={name}
                loading='lazy'
                className='profile-img'
              />
              <div className=''>
                <h3 className='font-bold text-base uppercase'>{name}</h3>
                <p className='text-sm'>{position}</p>
              </div>
            </article>
          ))}
        </Masonry>
        {/* end of college course in-charge */}
        {/* college services */}
        {/* <h2 className='text-lg mb-4'>Services</h2> */}
        <h2
          style={{ textShadow: '0.025em 0.025em 0 #ffcc00' }}
          className='text-customBlue-750 font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-wider text-center m-4 md:m-8 lg:m-12'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Course Services
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid developers-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column developers-masonry-grid_column'
        >
          {officials.services.map(({ name, position, image }, index) => (
            <article
              key={index}
              className='bg-customGreen-600 shadow-md shadow-black rounded p-4 flex items-center gap-x-3 md:gap-x-4 w-full max-w-sm mx-auto transition-all'
              data-aos='zoom-in'
              data-aos-duration='700'
            >
              <img
                src={
                  image
                    ? image
                    : 'https://via.placeholder.com/96?text=Image+Not+Found'
                }
                alt={name}
                loading='lazy'
                className='profile-img'
              />
              <div className=''>
                <h3 className='font-bold text-base uppercase'>{name}</h3>
                <p className='text-sm'>{position}</p>
              </div>
            </article>
          ))}
        </Masonry>
        {/* end of college services */}
      </div>
    </section>
  );
};
export default OrganizationChart;
