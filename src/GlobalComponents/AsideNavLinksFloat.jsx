import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
function AsideNavLinksFloat() {
  const {
    isAsideNavLinksFloat: { state, title, location },
    setIsAsideNavLinksFloat,
  } = useGlobalContext();

  const container = useRef();

  useEffect(() => {
    /* container */
    container.current.style.left =
      location.center === 0 ? `50%` : `${location.center}px`;
    container.current.style.top = location.bottom + 'px';
  }, [location]);

  const handleOnClick = () => {
    setIsAsideNavLinksFloat((prev) => {
      return { ...prev, state: false };
    });
  };

  /* content for submenu */
  const content = () => {
    if (title.toLowerCase() === 'about') {
      return (
        <>
          <ul>
            <li>
              <Link
                to={'about/vision'}
                title='Vision'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='material-symbols:lightbulb-rounded' />
                Vision
              </Link>
            </li>
            <li>
              <Link
                to={'about/mission'}
                title='Mission'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='material-symbols:featured-play-list' />
                Mission
              </Link>
            </li>
            <li>
              <Link
                to={'about/goals'}
                title='Goals'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='carbon:trophy-filled' />
                Goals
              </Link>
            </li>
            <li>
              <Link
                to={'about/core-values'}
                title='Core Values'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='bxs:donate-heart' />
                Core Values
              </Link>
            </li>
            <li>
              <Link
                to={'about/history'}
                title='History'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='ri:file-paper-2-fill' />
                History
              </Link>
            </li>
          </ul>
        </>
      );
    }
    if (title.toLowerCase() === 'courses') {
      return (
        <>
          <ul>
            <li>
              <Link
                to={'courses/beed'}
                title='BEEd'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='mingcute:book-5-fill' />
                Bachelor of Elementary Education
              </Link>
            </li>
            <li>
              <Link
                to={'courses/bsed'}
                title='BSEd'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='mdi:newspaper-variant' />
                Bachelor of Secondary Education
              </Link>
            </li>
            <li>
              <Link
                to={'courses/bshm'}
                title='BSHM'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='fluent:drink-wine-20-filled' />
                Bachelor of Science in Hospitality Management
              </Link>
            </li>
            <li>
              <Link
                to={'courses/bsit'}
                title='BSIT'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='bi:laptop-fill' />
                Bachelor of Science in Industrial Technology
              </Link>
            </li>
            <li>
              <Link
                to={'courses/special-program'}
                title='Special Program'
                className='flex items-center gap-x-2 hover:underline transition-all py-sm'
                onClick={handleOnClick}
              >
                <Icon icon='material-symbols:school' />
                Diploma in Professional Education
              </Link>
            </li>
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <div
        ref={container}
        onMouseEnter={() =>
          setIsAsideNavLinksFloat((prev) => {
            return { ...prev, state: true };
          })
        }
        onMouseLeave={() =>
          setIsAsideNavLinksFloat((prev) => {
            return { ...prev, state: false };
          })
        }
        className={`${
          state ? 'opacity-100 visible' : 'opacity-0 invisible'
        } hidden lg:block absolute top-24 left-2/4 -translate-x-2/4 rounded transition-all`}
      >
        <aside className='bg-white relative p-6 rounded shadow-lg'>
          <Icon
            icon='material-symbols:play-arrow-rounded'
            color='white'
            rotate={3}
            className='text-xl absolute bottom-full left-2/4 -translate-x-2/4 translate-y-2'
          />
          {content()}
        </aside>
      </div>
    </>
  );
}

export default AsideNavLinksFloat;
