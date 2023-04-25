/* ICONS */
import { Icon } from '@iconify/react';

const ConcernSuccessModal = ({ isConcernSubmitted, setIsConcernSubmitted }) => {
  return (
    <aside
      className={`${
        isConcernSubmitted ? 'scale-100' : 'scale-0'
      } absolute top-0 left-0 h-full w-full bg-[#f6f9fc] flex flex-col items-center justify-center gap-y-4 p-4 md:p-6 transition-all`}
    >
      <Icon
        icon='mdi:tooltip-check'
        color='#8083ff'
        width='100'
        height='100'
        className='mx-auto'
      />
      <h5 className='uppercase font-bold text-center text-lg md:text-xl tracking-wider md:tracking-widest'>
        Successfully sent
      </h5>
      <p className='max-w-xs'>
        Thank you for taking time to reach us with your concern.
      </p>
      <button
        type='button'
        title='Close'
        onClick={() => setIsConcernSubmitted(false)}
        className='block w-full max-w-xs mx-auto mt-4 py-base px-xl rounded text-white font-semibold tracking-wide md:tracking-wider uppercase bg-customBlue-500'
      >
        Close
      </button>
    </aside>
  );
};
export default ConcernSuccessModal;
