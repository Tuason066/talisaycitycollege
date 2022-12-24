import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
/* router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';
/* context */
import { useGlobalContext } from '../context';

function Navbar() {
  /* aside nav links */
  const { setIsAsideNavLinks, isAsideNavLinksFloat, setIsAsideNavLinksFloat } =
    useGlobalContext();

  /* aside nav float */
  const handleMouseEnter = (e) => {
    const el = e.target;
    const location = el.getBoundingClientRect();

    setIsAsideNavLinksFloat((prev) => {
      return {
        ...prev,
        state: true,
        title: el.textContent,
        location: {
          bottom: location.bottom,
          center: (location.left + location.right) / 2,
        },
      };
    });
  };

  const handleMouseLeave = () => {
    setIsAsideNavLinksFloat((prev) => {
      return {
        ...prev,
        state: false,
      };
    });
  };

  return (
    <nav className='text-white bg-[#0052d4] py-2 md:py-4 lg:py-5 lg:bg-gradient-to-r lg:to-[#0052d4] lg:from-[#1b80f3]'>
      <div className='mx-auto w-11/12 lg:flex lg:items-center lg:justify-between'>
        {/* logo */}
        <div className='flex items-center justify-between'>
          <Link to={'/'} title='Home' className='flex items-center gap-x-2'>
            <img src='./logo.png' alt='logo' className='w-8 lg:w-12' />
            <div>
              <h1 className='uppercase border-b border-white text-base tracking-wide'>
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
            onClick={() => setIsAsideNavLinks(true)}
            className='lg:hidden'
          >
            <Icon icon='charm:menu-hamburger' />
          </button>
        </div>
        {/* links */}
        <ul className='hidden lg:flex'>
          <li>
            <Link
              to={'/'}
              className='uppercase block text-base py-base px-lg ml-4 tracking-wide'
              title='Home'
              type='button'
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className='uppercase block text-base py-base px-lg ml-4 tracking-wide cursor-default'
              title='About'
              type='button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </button>
          </li>
          <li>
            <button
              className='uppercase block text-base py-base px-lg ml-4 tracking-wide cursor-default'
              title='Courses'
              type='button'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Courses
            </button>
          </li>
          <li>
            <button
              className='uppercase block text-base py-base px-lg ml-4 tracking-wide'
              title='Contacts'
              type='button'
            >
              Contacts
            </button>
          </li>
        </ul>

        {/* login */}
        <Link
          to='login'
          className='hidden lg:flex items-center hover:gap-x-1 bg-yellow-400 hover:bg-yellow-500 text-[#0052d4] rounded px-lg py-sm transition-all outline-none'
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
