/* REACT */
import { useState } from 'react';
/* ICONS */
import { Icon } from '@iconify/react';
/* COMPONENTS */
/* import PageLinks from './PageLinks';
import AsideMenu from './AsideMenu';
import Logo from './Logo';
import PortalsDropdown from './PortalsDropdown'; */
import { PageLinks, AsideMenu, Logo, PortalsDropdown } from '.';

const Navbar = () => {
  const [isAsideMenu, setIsAsideMenu] = useState(false);

  /* active navlink style */
  let activeStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <nav className='relative text-white bg-customBlue-500 py-4 md:py-6 z-40'>
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
          itemClass='relative uppercase block text-base py-base px-lg ml-4 tracking-wider hover:text-customYellow-500 transition-all'
        />

        {/* portal */}
        <PortalsDropdown display='hidden lg:flex' />
      </div>
      <AsideMenu isAsideMenu={isAsideMenu} setIsAsideMenu={setIsAsideMenu} />
    </nav>
  );
};

export default Navbar;
