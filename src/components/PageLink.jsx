import { useState } from 'react';
/* router */
import { Link } from 'react-router-dom';
/* components */
import Submenu from './Submenu';

const PageLink = ({ path, text, title, submenu, itemClass }) => {
  const [isSubmenu, setIsSubmenu] = useState(false);

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
        <Link to={path} className={itemClass} title={title} type='button'>
          {text}
        </Link>
      )}
    </li>
  );
};
export default PageLink;
