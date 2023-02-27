/* ICONS */
import { Icon } from '@iconify/react';
/* REACT */
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isScrollButton, setIsScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        setIsScrollButton(true);
      } else {
        setIsScrollButton(false);
      }
    });
  }, []);

  return (
    <button
      type='button'
      onClick={() => window.scrollTo(0, 0)}
      title='Scroll back to top'
      className={`${
        isScrollButton ? 'inline-block' : 'hidden'
      } fixed bottom-8 right-8 bg-white p-2 rounded`}
    >
      <Icon
        icon='line-md:arrow-align-top'
        className='text-customBlue-500 text-xl md:text-2xl'
      />
    </button>
  );
};
export default ScrollToTop;
