/* REACT */
import { useState } from 'react';
/* REACT ROUTER */
import { NavLink } from 'react-router-dom';
/* ICONS */
import { Icon } from '@iconify/react';
/* DATA */
import { pageLinks } from '../data';
/* COMPONENTS */
/* import AsideSubmenu from './AsideSubmenu';
import PortalsDropdown from './PortalsDropdown'; */
import { AsideSubmenu, PortalsDropdown } from '.';

const AsideMenu = ({ isAsideMenu, setIsAsideMenu }) => {
  const [isSubmenu, setIsSubmenu] = useState(-1);

  const handleOnClick = (id) => {
    setIsSubmenu((prev) => (prev === id ? -1 : id));
  };

  const handleCloseSubmenu = () => {
    setIsSubmenu(-1);
    setIsAsideMenu(false);
  };

  /* active navlink style */
  const activeStyle = {
    color: '#0052d4',
  };

  return (
    <aside
      className={` ${
        isAsideMenu ? 'translate-x-0' : 'translate-x-[110vw]'
      } transition-all
      fixed
      top-0
      right-0
      min-h-screen
      w-full
      max-w-sm
      bg-white
      shadow-lg
      z-50
      text-black lg:hidden`}
    >
      <div className='mx-auto w-11/12'>
        {/* close button */}
        <div className='pt-4 pb-4 flex items-center justify-between'>
          <button type='button' onClick={handleCloseSubmenu}>
            <Icon icon='humbleicons:times' width={'20'} />
          </button>
          {/*  portal */}
          <PortalsDropdown
            display='flex'
            handleCloseSubmenu={handleCloseSubmenu}
          />
        </div>
        {/* page links */}
        <ul>
          {pageLinks.map(({ id, path, text, title, submenu }) => {
            return (
              <li key={id}>
                {submenu ? (
                  <div>
                    {/* submenu button */}
                    <button
                      type='button'
                      title={title}
                      onClick={() => handleOnClick(id)}
                      className='capitalize flex items-center gap-x-2 py-1'
                    >
                      {text}
                      <Icon
                        icon='tabler:chevron-down'
                        className={`${
                          isSubmenu === id ? 'rotate-180' : 'rotate-0'
                        } transition-all`}
                      />
                    </button>
                    {/* submenus */}
                    <div
                      className={`${
                        isSubmenu === id ? 'h-auto' : 'h-0'
                      } overflow-hidden transition-all `}
                    >
                      <ul className='p-4'>
                        <AsideSubmenu
                          submenu={submenu}
                          handleCloseSubmenu={handleCloseSubmenu}
                        />
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={path}
                    title={title}
                    onClick={handleCloseSubmenu}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className='capitalize py-1 block'
                  >
                    {text}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default AsideMenu;
