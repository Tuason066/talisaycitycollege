/* REACT HOOKS */
import { useState, useId } from 'react';
/* ICONS */
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const MobileMessages = ({ messages }) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  return (
    <>
      {/* input search/compose wrapper */}
      <div className='grid grid-cols-[1fr,auto] items-center gap-x-1 mb-4 w-11/12 mx-auto'>
        <div className='searchMessage-inputWrapper'>
          <input
            type='search'
            placeholder='Search message'
            className='searchMessage-input'
          />
          <button type='button' className='h-full w-10 grid place-items-center'>
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
      <div className='min-h-[80dvh] w-11/12 mx-auto'>
        {messages.map((person) => {
          const type = person.type.student
            ? `${person.type.student.course} ${person.type.student.yearLevel} ${person.type.student.section} - ${person.type.student.status}`
            : `${person.type.teacher.position} - ${person.type.teacher.status}`;

          return (
            <Link
              to={`id/${person.id}`}
              key={person.id}
              className={`py-2 hover:p-2 rounded border border-transparent hover:border-customBlue-500 hover:bg-indigo-100 transition-all block`}
            >
              <article
              /*  className={`py-2 hover:p-2 rounded border border-transparent hover:border-customBlue-500 hover:bg-indigo-100 transition-all`} */
              >
                <div className='grid grid-cols-[auto,1fr] gap-x-4 items-center'>
                  <img
                    src={person.image}
                    alt={person.name}
                    className='profile-img-sm'
                  />
                  <div className=''>
                    {/* <div className='mb-1'> */}
                    <h4 className='font-semibold text-base'>{person.name}</h4>
                    {/*  <p className='text-xs text-black opacity-75 border-b-[1.25px] border-slate-600 w-fit'>
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
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default MobileMessages;
