import React, { useEffect, useRef, useState } from 'react';
/* router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';
/* context */
import { useGlobalContext } from '../context';

/* INSTEAD OF MAKING A COMPOENT USE USELAYOUT EFFECT HIDE/DISPLAY THE DROPDWON THROUGH MANIPULATING THE CLASSNAME */

function AsideNavLinks() {
  const { isAsideNavLinks, setIsAsideNavLinks } = useGlobalContext();
  /* aside dropdown */
  const [isDropdown, setIsDropdown] = useState(null);
  /* repaint the component that manipulates the button icon and dropdown */
  const dropdownState = isDropdown === null ? null : isDropdown.toLowerCase();

  const handleOnclick = (e) => {
    /* selecting the button to click */
    const element = e.currentTarget;
    /* set to manipulate the icon of the button clicked and repaint the component */
    setIsDropdown((prev) => (prev === null ? element.textContent : null));

    /* button container and wrapper */
    const dropdownContainer = element.nextElementSibling;
    const dropdownWrapper = dropdownContainer.querySelector(
      '[data-id="dropdown-wrapper"]'
    );

    const dropdownWrapperHeight =
      dropdownWrapper.getBoundingClientRect().height;

    dropdownContainer.getBoundingClientRect().height === 0
      ? (dropdownContainer.style.height = dropdownWrapperHeight + 'px')
      : (dropdownContainer.style.height = 0);
  };
  /*   const handleMouseEnter = (e) => {
    const container = e.currentTarget;
    const btn = container.querySelector('[data-id="dropdown-btn"]');
    setIsDropdown(btn.textContent);

    const dropdownContainer = container.querySelector(
      '[data-id="dropdown-container"]'
    );
    const dropdownWrapper = container.querySelector(
      `[data-id='dropdown-wrapper']`
    );

    const dropdownWrapperHeight =
      dropdownWrapper.getBoundingClientRect().height;
    dropdownContainer.style.height = `${dropdownWrapperHeight}px`;
  };
  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    const btn = container.querySelector('[data-id="dropdown-btn"]');
    setIsDropdown((prev) => (prev === null ? btn.textContent : null));

    const dropdownContainer = container.querySelector(
      '[data-id="dropdown-container"]'
    );

    dropdownContainer.style.height = 0;
  }; */

  return (
    <aside
      style={{ overflowY: 'scroll' }}
      className={`${
        isAsideNavLinks
          ? '-translate-x-2/4 -translate-y-2/4'
          : 'translate-x-[120vw]'
      } fixed top-2/4 left-2/4 min-w-[90vw] max-w-[90vw] min-h-[90vh] max-h-[90vh] bg-white rounded p-4 md:p-6 shadow-lg transition-all lg:hidden flex flex-col justify-between`}
    >
      {/* #### list of links #### */}
      <div>
        {/* close button */}
        <div className='flex items-center justify-between mb-4'>
          <img src='./logo.png' alt='logo' className='w-8 lg:w-12' />{' '}
          <button
            type='button'
            title='Close'
            onClick={() => setIsAsideNavLinks(false)}
            className='text-xl'
          >
            <Icon icon='uil:times' />
          </button>
        </div>
        {/* homepage */}
        <Link
          to={'/'}
          title='Home'
          onClick={() => setIsAsideNavLinks(false)}
          className='flex items-center gap-x-2 hover:opacity-75 transition-all hover:underline active:underline py-sm'
        >
          <Icon icon='ant-design:home-filled' />
          Home
        </Link>
        {/* about */}
        <div>
          {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
          <button
            type='button'
            onClick={handleOnclick}
            data-id='dropdown-btn'
            className='flex items-center gap-x-2 py-sm'
          >
            <Icon icon='mdi:about' />
            About
            {dropdownState === 'about' ? (
              <Icon icon='tabler:chevron-up' />
            ) : (
              <Icon icon='tabler:chevron-down' />
            )}
          </button>
          <div
            data-id='dropdown-container'
            className={'h-0 overflow-hidden transition-all'}
          >
            <ul data-id='dropdown-wrapper' className='pl-4'>
              <li>
                <Link
                  to={'/about/vision'}
                  title='Vision'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  to={'/about/mission'}
                  title='Mission'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to={'/about/goals'}
                  title='Goals'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Goals
                </Link>
              </li>
              <li>
                <Link
                  to={'/about/core-values'}
                  title='Core Values'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Core Values
                </Link>
              </li>
              <li>
                <Link
                  to={'/about/history'}
                  title='History'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* courses */}
        <div>
          {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
          <button
            type='button'
            data-id='dropdown-btn'
            onClick={handleOnclick}
            className='flex items-center gap-x-2 py-sm'
          >
            <Icon icon='material-symbols:featured-play-list' />
            Courses
            {dropdownState === 'courses' ? (
              <Icon icon='tabler:chevron-up' />
            ) : (
              <Icon icon='tabler:chevron-down' />
            )}
          </button>
          <div
            data-id='dropdown-container'
            className={'h-0 overflow-hidden transition-all'}
          >
            <ul data-id='dropdown-wrapper' className='pl-4'>
              <li>
                <Link
                  to={'/courses/beed'}
                  title='BEEd'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Bachelor of Elementary Education
                </Link>
              </li>
              <li>
                <Link
                  to={'/courses/bsed'}
                  title='BSEd'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Bachelor of Secondary Education
                </Link>
              </li>
              <li>
                <Link
                  to={'/courses/bshm'}
                  title='BSHM'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Bachelor of Science in Hospitality Management
                </Link>
              </li>
              <li>
                <Link
                  to={'/courses/bsit'}
                  title='BSIndTech'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Bachelor of Science in Industrial Technology
                </Link>
              </li>
              <li>
                <Link
                  to={'/courses/special-program'}
                  title='DPE'
                  onClick={() => setIsAsideNavLinks(false)}
                  className='block hover:opacity-75 transition-all hover:underline active:underline py-sm'
                >
                  Diploma in Professional Education
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* contacts */}
        <Link
          to={'/contacts'}
          title='Contacts'
          onClick={() => setIsAsideNavLinks(false)}
          className='flex items-center gap-x-2 hover:opacity-75 transition-all hover:underline active:underline py-sm'
        >
          <Icon icon='material-symbols:list-alt-rounded' />
          Contacts
        </Link>
      </div>
      <div className='flex items-end justify-between pt-4'>
        <Link
          to='login'
          className='inline-flex items-center justify-center gap-x-2 bg-[#635bff] hover:bg-[#5249fe] text-[#f6f9fc] rounded px-lg py-sm transition-all outline-none'
        >
          <Icon icon='carbon:user-avatar-filled' />
          Log In
        </Link>
        <div className='flex items-center justify-center gap-x-2 text-lg'>
          <a
            href='https://web.facebook.com/TCCofficialfbpage'
            title='Official Facebook Page'
          >
            <Icon icon='ri:facebook-box-fill' color='#3b5998' />
          </a>
          <a
            href='https://www.youtube.com/watch?v=pLKeDy3tgic'
            title='Official YouTube Channel'
          >
            <Icon icon='mingcute:youtube-fill' color='red' />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default AsideNavLinks;
