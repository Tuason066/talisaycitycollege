/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* ICONS */
import { Icon } from '@iconify/react';
/* DATA */
import { socialLinks } from '../data';
/* COMPONENTS */
// import Logo from './Logo';
import { Logo } from '.';

const Footer = () => {
  return (
    <footer className='relative text-white bg-customBlue-500 py-4 md:py-6 overflow-hidden'>
      <img
        src='https://res.cloudinary.com/dwiivmg3b/image/upload/v1675356562/talisay-city-college/logo_anup6r.png'
        alt='logo'
        className='w-40 lg:w-56 absolute -bottom-1/2 sm:-bottom-1/4 lg:-bottom-1/2 left-1/2 -translate-x-1/2 opacity-25'
      />
      <div className='w-11/12 mx-auto'>
        {/* logo */}
        <div className='flex justify-between items-center'>
          <Logo />
          {/* desktop - social links */}
          <ul className='hidden md:flex items-center justify-center gap-x-4'>
            {socialLinks.map(({ id, path, title, icon }) => {
              return (
                <li key={id}>
                  <a
                    href={path}
                    title={title}
                    className='md:text-xl'
                    target='_blank'
                  >
                    <Icon icon={icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* contacts */}
        <div className='mt-2 tracking-wide'>
          <p className='font-semibold text-xs lg:text-sm'>
            Tel Number:{' '}
            <a
              href='tel:346-7503'
              className='hover:underline transition-all font-normal'
            >
              346-7503
            </a>
          </p>
          <p className='font-semibold text-xs lg:text-sm'>
            Email:{' '}
            <a
              href='mailto:talisaycitycollege2004@gmail.com?subject = Inqueries&body = Message'
              className='hover:underline transition-all font-normal'
            >
              talisaycitycollege2004@gmail.com
            </a>
          </p>
        </div>
        {/* mobile - social links */}
        <ul className='md:hidden flex items-center justify-center gap-x-4 mt-8 mb-2 translate-x-0'>
          {socialLinks.map(({ id, path, title, icon }) => {
            return (
              <li key={id}>
                <a href={path} title={title} target='_blank'>
                  <Icon icon={icon} />
                </a>
              </li>
            );
          })}
        </ul>
        {/* copyright */}
        <div className='text-xs tracking-wide lg:text-sm text-center md:mt-8 translate-x-0'>
          <p className='capitalize'>
            &copy; all rights reserved {new Date().getFullYear()} |{' '}
            <Link to={'/developers'} className='font-semibold hover:underline'>
              Team Bangan
            </Link>
          </p>
          <p>
            Website Designed and Developed by{' '}
            <a
              href='https://www.facebook.com/Tuason06/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold hover:underline'
            >
              Jeffrey Tuason
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
