import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function HomeFaq() {
  return (
    <section className='bg-lightBlue-100'>
      <div className='mx-auto w-11/12 py-8 md:py-12 lg:py-14 lg:flex lg:gap-x-20'>
        {/* GOOGLE MAP #1 */}
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.6679596141053!2d123.84748763441237!3d10.243108288040228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99cddb41735bb%3A0xa92f8dac8c6be822!2sTalisay%20City%20College!5e1!3m2!1sen!2sph!4v1672318480229!5m2!1sen!2sph'
          width='600'
          height='450'
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
          }}
          className='hidden lg:block rounded'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className='lg:max-w-lg'>
          <h2
            style={{ textShadow: '0.05em 0.05em 0 #222' }}
            className='text-center lg:text-left text-xl md:text-2xl lg:text-4xl text-white font-bold uppercase mb-6 md:mb-8 lg:mb-10 tracking-wide md:tracking-wider lg:tracking-widest'
          >
            Frequently Asked Questions
          </h2>
          <div className='grid gap-y-4'>
            <details
              open
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              className='transition-all rounded bg-white max-w-md mx-auto lg:max-w-full w-full'
            >
              <summary className='p-4 flex items-center justify-between gap-x-4'>
                How much is the tuition fee?
                <span className='icon transition-all'>
                  <Icon icon='ion:chevron-down-outline' />
                </span>
              </summary>
              <div className='p-4 pl-8 bg-slate-100 border-t transition-all'>
                <p>
                  <strong>Talisay City College (TCC)</strong> is a public higher
                  educational institution in the province of Cebu it is totally
                  free (₱0.00).
                </p>
              </div>
            </details>
            <details
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              className='transition-all rounded bg-white max-w-md mx-auto lg:max-w-full w-full'
            >
              <summary className='p-4 flex items-center justify-between gap-x-4'>
                What are the enrollment requirements?
                <span className='icon transition-all'>
                  <Icon icon='ion:chevron-down-outline' />
                </span>
              </summary>
              <div className='p-4 pl-8 bg-slate-100 border-t transition-all'>
                <ul className='list-disc pl-4'>
                  <li>
                    High School Report Cart (Form 138) or Transcript of Records
                    (TOR for transferees)
                  </li>
                  <li>Original copy of NSO Birth Certificate</li>
                  <li>Good Moral Certificate</li>
                </ul>
              </div>
            </details>
            <details
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              className='transition-all rounded bg-white max-w-md mx-auto lg:max-w-full w-full'
            >
              <summary className='p-4 flex items-center justify-between gap-x-4'>
                What are the scholarship can be availed of?
                <span className='icon transition-all'>
                  <Icon icon='ion:chevron-down-outline' />
                </span>
              </summary>
              <div className='p-4 pl-8 bg-slate-100 border-t transition-all'>
                <ul className='list-disc pl-4'>
                  <li>
                    <a
                      href='https://web.facebook.com/AlayLakadFoundationInc/?_rdc=1&_rdr'
                      className='hover:underline transition-all'
                    >
                      Alay Lakad
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://ched.gov.ph/'
                      className='hover:underline transition-all'
                    >
                      Commission on Higher Education (CHED)
                    </a>
                  </li>
                </ul>
                <p className='mt-4'>
                  Contact our{' '}
                  <a
                    href='https://www.facebook.com/profile.php?id=100069043275667'
                    className='text-primaryBlue-100 hover:underline transition-all'
                  >
                    Scholarship Office
                  </a>{' '}
                  for inquiries
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFaq;
