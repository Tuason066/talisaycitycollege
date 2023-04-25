/* REACT HOOKS */
import { useState, useEffect } from 'react';
/* DATAS */
import { messages } from '../utils/constants';
/* COMPONENTS */
import { MobileMessages } from '../portalComponents';
import DesktopMessages from '../portalComponents/DesktopMessages';

const Messages = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    return () => window.removeEventListener('resize', handleWindowWidth);
  }, []);

  return (
    <main className='min-h-[76dvh] mt-8 lg:mt-12'>
      {/* MESSAGES */}
      {windowWidth <= 768 ? (
        <MobileMessages messages={messages} />
      ) : (
        <DesktopMessages messages={messages} />
      )}
    </main>
  );
};
export default Messages;
