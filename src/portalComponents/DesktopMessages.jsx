/* REACT HOOKS */
import { useState, useId } from 'react';
/* ICONS */
import { Icon } from '@iconify/react';

const DesktopMessages = ({ messages }) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const currentMessageType = currentMessage.type.student
    ? `${currentMessage.type.student.course} ${currentMessage.type.student.yearLevel} ${currentMessage.type.student.section} - ${currentMessage.type.student.status}`
    : `${currentMessage.type.teacher.position} - ${currentMessage.type.teacher.status}`;

  const [message, setMessage] = useState({ file: '', message: '' });

  const handleMessage = (e) => {
    const { name, value } = e.target;

    setMessage((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (message.file !== '' || message.message !== '') {
      setMessage({ file: '', message: '' });
    }
  };

  return (
    <div className='grid grid-cols-[minmax(200px,350px),1fr]'>
      {/* INBOX */}
      <section className=''>
        {/* input search/compose wrapper */}
        <div className='grid grid-cols-[1fr,auto] items-center gap-x-1 pl-4'>
          <div className='searchMessage-inputWrapper'>
            <input
              type='search'
              placeholder='Search message'
              className='searchMessage-input'
            />
            <button
              type='button'
              className='h-full w-10 grid place-items-center'
            >
              <Icon
                icon='ic:baseline-search'
                width='25'
                height='25'
                className='searchMessage-icon'
              />
            </button>
          </div>
          {/* compose new message */}
          <button
            type='button'
            title='compose new message'
            className='w-10 h-full grid place-items-center bg-customBlue-400 text-white outline-transparent hover:bg-customBlue-500 transition-all'
          >
            <Icon icon='uil:pen' />
          </button>
        </div>
        {/* end of - input search/compose wrapper */}
        {/* messages */}
        <div className='min-h-[600px] max-h-[600px] overflow-y-scroll p-4'>
          {messages.map((person) => {
            const id = useId();
            const type = person.type.student
              ? `${person.type.student.course} ${person.type.student.yearLevel} ${person.type.student.section} - ${person.type.student.status}`
              : `${person.type.teacher.position} - ${person.type.teacher.status}`;

            const activeMessage =
              currentMessage === person
                ? 'p-2 bg-indigo-100'
                : 'border-transparent';

            return (
              <article
                key={id}
                className={`${activeMessage} py-2 hover:p-2 rounded border hover:border-customBlue-500 hover:bg-indigo-100 cursor-pointer transition-all`}
              >
                <div className='grid grid-cols-[auto,1fr] gap-x-4 items-center'>
                  <img
                    src={person.image}
                    alt={person.name}
                    className='profile-img'
                  />
                  <div className=''>
                    {/* <div className='mb-1'> */}
                    <h4 className='font-semibold text-base'>{person.name}</h4>
                    {/* <p className='text-xs text-black opacity-75 border-b-[1.25px] border-slate-600 w-fit'>
                        {type}
                      </p> */}
                    {/* </div> */}
                    <p className='text-sm line-clamp-1'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis quisquam magnam tempora dolorum ab eveniet quo eos,
                      placeat veritatis praesentium quaerat ut minus sint vel
                      est! Voluptates necessitatibus dolorum esse maxime cumque
                      impedit porro aut non dolores aperiam explicabo, voluptate
                      temporibus quibusdam! Accusantium distinctio quasi magnam
                      nulla quod fuga. Laboriosam.
                    </p>
                    <p className='text-xs'>9:58 AM</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* ACTUAL MESSAGE */}
      <section className='border-l-2'>
        <header className='p-2 grid grid-cols-[auto,1fr] gap-x-2 items-center border-y-2'>
          <img
            src={currentMessage.image}
            alt={currentMessage}
            className='profile-img-sm'
          />
          <div>
            <h4 className='font-semibold text-base'>{currentMessage.name}</h4>
            <p className='text-xs text-black opacity-75'>
              {currentMessageType}
            </p>
          </div>
        </header>
        {/* border-2 border-red-500 */}
        <article className=' min-h-[574px] max-h-[574px] overflow-y-scroll grid grid-rows-[1fr,auto]'>
          {/* messages */}
          <div></div>
          {/* form */}
          <form
            className='flex items-center bg-slate-200 border-t-2'
            onSubmit={handleSubmitMessage}
          >
            <div className='w-12 h-8 grid place-items-center'>
              <label
                htmlFor='file'
                className='cursor-pointer'
                title='upload file'
              >
                <Icon icon='mdi:folder-upload' className='text-2xl' />
              </label>
              <input
                type='file'
                name='file'
                id='file'
                className='hidden'
                value={message.file}
                onChange={handleMessage}
              />
            </div>
            {/* <input
              type='text'
              placeholder='Message'
              className='border-2 block w-full'
            /> */}
            <textarea
              name='message'
              id='message'
              rows='1'
              placeholder='Message'
              className='block w-full resize-none p-base outline-transparent border-2 border-transparent focus:border-customBlue-400'
              title='message'
              value={message.message}
              onChange={handleMessage}
            ></textarea>
            <button
              type='submit'
              className='w-12 grid place-items-center'
              title='send message'
            >
              <Icon icon='ph:arrow-fat-line-right-fill' className='text-2xl' />
            </button>
          </form>
        </article>
      </section>
    </div>
  );
};
export default DesktopMessages;
