/* react router */
import { Link } from 'react-router-dom';
/* icon */
import { Icon } from '@iconify/react';
import { useRef } from 'react';

const AsideSubmenu = ({ submenu, handleCloseSubmenu }) => {
  return (
    <>
      {submenu.map(({ id, path, text, title, icon }) => {
        return (
          <li key={id}>
            <Link
              to={path}
              title={title}
              onClick={handleCloseSubmenu}
              className='flex items-center gap-x-2 hover:underline transition-all py-sm'
            >
              {icon && <Icon icon={icon} />}
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default AsideSubmenu;
