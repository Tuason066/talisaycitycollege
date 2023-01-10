/* router */
import { Link } from 'react-router-dom';
/* icons */
import { Icon } from '@iconify/react';

const Submenu = ({ submenu, isSubmenu, setIsSubmenu }) => {
  return (
    <aside
      className={`${
        isSubmenu
          ? 'top-full opacity-100 visible'
          : 'top-3/4 opacity-0 invisible'
      } absolute left-1/2 -translate-x-1/2 transition-all duration-500`}
    >
      <ul className='relative p-4 rounded shadow bg-white text-black'>
        {submenu.map(({ id, path, text, title, icon }) => {
          return (
            <li key={id}>
              <Link
                to={path}
                title={title}
                onClick={() => setIsSubmenu(false)}
                className='flex items-center gap-x-2 hover:underline transition-all py-sm whitespace-nowrap'
              >
                {icon && <Icon icon={icon} />}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Submenu;
