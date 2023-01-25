import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const ScrollToTop = () => {
  const { isPreview } = useGlobalContext();

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

  /* handdle display button */
  const handleDisplay = () => {
    if (isPreview.state) {
      return 'hidden';
    }
    return isScrollButton ? 'inline-block' : 'hidden';
  };

  return (
    <button
      type='button'
      onClick={() => window.scrollTo(0, 0)}
      title='Scroll back to top'
      className={`${handleDisplay()} fixed bottom-8 right-8`}
    >
      <Icon
        icon='jam:chevron-circle-up-f'
        className='bg-white text-primaryBlue-100 rounded-full text-4xl md:text-5xl'
      />
    </button>
  );
};
export default ScrollToTop;
