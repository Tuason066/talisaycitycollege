/* react */
import { useState } from 'react';
/* react router */
import { Link } from 'react-router-dom';
/* icon */
import { Icon } from '@iconify/react';
/* data */
import { pageLinks } from '../data';
import AsideSubmenu from './AsideSubmenu';

const AsideMenu = ({ isAsideMenu, setIsAsideMenu }) => {
  const [isSubmenu, setIsSubmenu] = useState(-1);

  const handleOnClick = (id) => {
    setIsSubmenu((prev) => (prev === id ? -1 : id));
  };

  const handleCloseSubmenu = () => {
    setIsSubmenu(-1);
    setIsAsideMenu(false);
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
      text-black`}
    >
      <div className='mx-auto w-11/12'>
        {/* close button */}
        <div className='pt-4 pb-4 flex items-center justify-between'>
          <button type='button' onClick={handleCloseSubmenu}>
            <Icon icon='humbleicons:times' width={'20'} />
          </button>
          {/* login */}
          <Link
            to='login'
            onClick={handleCloseSubmenu}
            className='flex lg:hidden items-center gap-x-2 bg-yellow-400 hover:bg-yellow-500 text-primaryBlue-500 font-semibold rounded px-lg py-sm transition-all outline-none'
          >
            <Icon icon='carbon:user-avatar-filled' />
            Log In
          </Link>
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
                  <Link
                    to={path}
                    title={title}
                    onClick={handleCloseSubmenu}
                    className='capitalize py-1 block'
                  >
                    {text}
                  </Link>
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
