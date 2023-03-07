/* REACT */
import { useState } from 'react';
/* REACT ROUTER */
import { NavLink } from 'react-router-dom';
/* ICONS */
import { Icon } from '@iconify/react';

const PortalsDropdown = ({ display, handleCloseSubmenu }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  /* active navlink style */
  let activeStyle = {
    backgroundColor: '#ffd119',
  };

  /* handle on click link */
  const handleOnClick = () => {
    setIsDropdown(false);
    handleCloseSubmenu(false);
  };

  return (
    <div
      className='relative text-customBlue-500'
      onMouseOver={() => setIsDropdown(true)}
      onMouseOut={() => setIsDropdown(false)}
    >
      <button
        type='button'
        className={`${
          isDropdown ? 'rounded-t' : 'rounded'
        } ${display} items-center gap-x-2 bg-customYellow-450 hover:bg-customYellow-550 font-semibold px-lg py-sm transition-all outline-none uppercase`}
        onClick={() => setIsDropdown((prev) => !prev)}
      >
        <Icon icon='carbon:user-avatar-filled' />
        log in
      </button>
      {/* dropdown */}
      <ul
        className={`${
          isDropdown
            ? 'visible translate-y-1'
            : 'invisible opacity-0 -translate-y-2'
        } absolute top-full right-0 bg-white rounded-b rounded-tl shadow-lg transition-all py-2`}
      >
        <li>
          <NavLink
            to='/student-login'
            className={
              'whitespace-nowrap px-lg py-base block hover:bg-customYellow-500 tracking-wide'
            }
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleOnClick}
          >
            Student's Portal
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/faculty-login'
            className={
              'whitespace-nowrap px-lg py-base block hover:bg-customYellow-500 tracking-wide'
            }
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleOnClick}
          >
            Faculty's Portal
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default PortalsDropdown;
