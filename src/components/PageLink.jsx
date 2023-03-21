/* REACT */
import { useState } from 'react';
/* REACT ROUTER */
import { NavLink } from 'react-router-dom';
/* COMPONENTS */
// import Submenu from './Submenu';
import { Submenu } from '.';

const PageLink = ({ path, text, title, submenu, itemClass }) => {
  const [isSubmenu, setIsSubmenu] = useState(false);

  /* active navlink style */
  let activeStyle = {
    color: '#ffcc00',
  };

  return (
    <li>
      {submenu ? (
        <div
          onMouseEnter={() => setIsSubmenu(true)}
          onMouseLeave={() => setIsSubmenu(false)}
          className='relative'
        >
          <button
            type='button'
            onClick={() => setIsSubmenu((prev) => !prev)}
            className={itemClass}
            title={title}
          >
            {text}
          </button>
          <Submenu
            submenu={submenu}
            isSubmenu={isSubmenu}
            setIsSubmenu={setIsSubmenu}
          />
        </div>
      ) : (
        <NavLink
          to={path}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className={itemClass}
          title={title}
          type='button'
        >
          {text}
        </NavLink>
      )}
    </li>
  );
};
export default PageLink;
