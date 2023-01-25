import { Icon } from '@iconify/react';
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
      } fixed bottom-8 right-8`}
    >
      <Icon
        icon='jam:chevron-circle-up-f'
        className='bg-white text-primaryBlue-100 rounded-full text-4xl md:text-5xl'
      />
    </button>
  );
};
export default ScrollToTop;
