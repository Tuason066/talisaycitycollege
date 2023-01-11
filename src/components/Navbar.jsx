import React, { useState } from 'react';
/* data */
import { pageLinks } from '../data';
/* router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import PageLinks from './PageLinks';
import AsideMenu from './AsideMenu';

function Navbar() {
  const [isAsideMenu, setIsAsideMenu] = useState(false);

  return (
    <nav className='relative text-white bg-primaryBlue-100 py-4 md:py-6 lg:bg-gradient-to-r lg:from-primaryBlue-100 lg:to-primaryBlue-200'>
      <div className='mx-auto w-11/12 lg:flex lg:items-center lg:justify-between'>
        {/* logo */}
        <div className='flex items-center justify-between'>
          <Link to={'/'} title='Home' className='flex items-center gap-x-2'>
            <img src='./logo.png' alt='logo' className='w-8 lg:w-12' />
            <div>
              <h1 className='uppercase border-b border-white text-base tracking-wider font-bold'>
                Talisay City College
              </h1>
              <address className='text-xs tracking-wide'>
                Poblacion, Talisay City, Cebu
              </address>
            </div>
          </Link>
          <button
            type='button'
            title='Menu'
            onClick={() => setIsAsideMenu(true)}
            className='lg:hidden'
          >
            <Icon icon='charm:menu-hamburger' />
          </button>
        </div>
        {/* links */}
        <PageLinks
          links={pageLinks}
          containerClass={'hidden lg:flex'}
          itemClass='relative uppercase block text-base py-base px-lg ml-4 tracking-wider hover:scale-105 transition-all'
        />

        {/* login */}
        <Link
          to='login'
          className='hidden lg:flex items-center gap-x-2 bg-yellow-400 hover:bg-yellow-500 text-primaryBlue-100 font-semibold rounded px-lg py-sm transition-all outline-none uppercase'
        >
          <Icon icon='carbon:user-avatar-filled' />
          log in
        </Link>
      </div>
      <AsideMenu isAsideMenu={isAsideMenu} setIsAsideMenu={setIsAsideMenu} />
    </nav>
  );
}

export default Navbar;
