import React, { useState } from 'react';

/* router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import PageLinks from './PageLinks';
import AsideMenu from './AsideMenu';
import Logo from './Logo';

function Navbar() {
  const [isAsideMenu, setIsAsideMenu] = useState(false);

  return (
    <nav className='relative text-white bg-primaryBlue-500 py-4 md:py-6 lg:bg-gradient-to-r lg:from-primaryBlue-500 lg:to-lightBlue-500 z-40'>
      <div className='mx-auto w-11/12 lg:flex lg:items-center lg:justify-between'>
        {/* logo */}
        <div className='flex items-center justify-between'>
          <Logo />
          <button
            type='button'
            title='Menu'
            onClick={() => setIsAsideMenu(true)}
            className='lg:hidden'
          >
            <Icon icon='line-md:close-to-menu-transition' />
          </button>
        </div>
        {/* links */}
        <PageLinks
          containerClass={'hidden lg:flex'}
          itemClass='relative uppercase block text-base py-base px-lg ml-4 tracking-wider hover:scale-110 transition-all'
        />

        {/* login */}
        <Link
          to='login'
          className='hidden lg:flex items-center gap-x-2 bg-primaryYellow-450 hover:bg-primaryYellow-550 text-primaryBlue-500 font-semibold rounded px-lg py-sm transition-all outline-none uppercase'
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
