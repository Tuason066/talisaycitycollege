/* REACT ROUTER */
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className='py-8 md:py-12 lg:py-14 xl:p-0 xl:grid xl:grid-cols-2 xl:items-center'>
      {/* content */}
      <main className='mx-auto w-11/12 lg:w-full lg:px-[8.33%]'>
        <h2 className='uppercase font-bold text-center xl:text-left mb-6 md:mb-7 lg:mb-8 text-2xl md:text-4xl lg:text-5xl'>
          we help <span className='text-customLightBlue-500'>students</span> to
          reach their <span className='text-customBlue-500'>dreams</span>
        </h2>
        <p className='mb-4 md:mb-5 lg:mb-6 md:text-lg'>
          <strong>Talisay City College (TCC)</strong> is a public higher
          educational institution in the province of Cebu. It was established in
          2004 to provide quality and affordable tertiary education to the
          residents of the city. The college currently offers bachelor's degree
          programs in Elementary Education, Secondary Education, Industrial
          Technology, and Hospitality Management. Additionally, it has an
          available Diploma program in Professional Education (DPE).
        </p>
        <div className='text-center xl:text-left'>
          <Link
            to={'/about'}
            className='inline-block bg-customYellow-450 hover:bg-customYellow-500 rounded px-xl py-base transition-all outline-none lg:text-lg text-customBlue-500 hover:text-customBlue-600 font-medium tracking-wide shadow-lg'
          >
            Learn more
          </Link>
        </div>
      </main>
      {/* hero */}
      <img
        src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1673407880/talisay-city-college/hero_k8qcd3.svg'
        alt='Talisay City College Front View of School Building'
        className='hidden xl:block'
        data-aos='fade-left'
        data-aos-duration='700'
      />
    </section>
  );
};
export default LandingPage;
