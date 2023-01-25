/* react router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';
/* data */
import { socialLinks } from '../data';
/* components */
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='relative text-white bg-primaryBlue-100 py-4 md:py-6 lg:bg-gradient-to-r lg:from-primaryBlue-100 lg:to-primaryBlue-200 overflow-hidden'>
      <img
        src='./logo.png'
        alt='logo'
        className='w-40 md:w-56 absolute -bottom-1/2 sm:-bottom-1/4 lg:-bottom-1/2 left-1/2 -translate-x-1/2 opacity-25'
      />
      <div className='w-11/12 mx-auto'>
        {/* logo */}
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='hidden md:flex items-center justify-center gap-x-4'>
            {socialLinks.map(({ id, path, title, icon }) => {
              return (
                <a key={id} href={path} title={title} className='md:text-xl'>
                  <Icon icon={icon} />
                </a>
              );
            })}
          </div>
        </div>
        {/* contacts */}
        <div className='mt-2 tracking-wide'>
          <p className='font-semibold text-xs lg:text-sm'>
            Mobile Number:{' '}
            <a
              href='tel:+639953687065'
              className='hover:underline transition-all font-normal'
            >
              +9953687065
            </a>
          </p>
          <p className='font-semibold text-xs lg:text-sm'>
            Email:{' '}
            <a
              href='mailto:tuasonjeffrey06@gmail.com?subject = Inqueries&body = Message'
              className='hover:underline transition-all font-normal'
            >
              info@tcc.edu
            </a>
          </p>
        </div>
        {/* social links */}
        <div className='md:hidden flex items-center justify-center gap-x-4 mt-8 mb-2'>
          {socialLinks.map(({ id, path, title, icon }) => {
            return (
              <a key={id} href={path} title={title}>
                <Icon icon={icon} />
              </a>
            );
          })}
        </div>
        {/* copyright */}
        <div className='text-xs tracking-wide lg:text-sm text-center md:mt-8 translate-x-0'>
          <p className='capitalize'>
            &copy; all rights reserved {new Date().getFullYear()} |{' '}
            <Link to={'/developers'} className='font-semibold hover:underline'>
              Researchers
            </Link>
          </p>
          <p>
            Website Designed and Developed by{' '}
            <Link to={'/developers'} className='font-semibold hover:underline'>
              Researchers
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
