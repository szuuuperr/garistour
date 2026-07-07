'use client';

import { useState, FormEvent } from 'react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className='bg-secondary'>
      <div className='container mx-auto flex flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between'>
        <div className='text-center md:text-left'>
          <h2 className='font-heading text-4xl tracking-wide text-background md:text-5xl'>
            Follow Now!
          </h2>
          <p className='mt-1 font-body text-sm text-background/90'>
            Daftar untuk mendapatkan info paket wisata dan promo terbaru.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex w-full max-w-md items-center rounded-full bg-background p-1.5 shadow-md'
        >
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={submitted ? 'Terima kasih sudah mendaftar!' : 'Email address...'}
            className='w-full bg-transparent px-4 py-2 font-body text-sm text-tertiary outline-none placeholder:text-neutral-500'
          />
          <button
            type='submit'
            aria-label='Subscribe'
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-background transition-colors hover:bg-primary-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='11' cy='11' r='7' />
              <path d='m21 21-4.3-4.3' />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
