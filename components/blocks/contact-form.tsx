'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const fieldBase =
  'w-full rounded-lg border border-neutral-200 bg-background px-5 py-3.5 font-body text-sm text-tertiary shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-primary focus:shadow-md focus:ring-2 focus:ring-primary/30';

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        name='name'
        required
        aria-label='Nama'
        placeholder='Masukkan nama Anda'
        className={fieldBase}
      />
      <input
        type='email'
        name='email'
        required
        aria-label='Email'
        placeholder='Masukkan alamat email'
        className={fieldBase}
      />
      <input
        type='text'
        name='subject'
        aria-label='Subjek'
        placeholder='Tambahkan subjek'
        className={fieldBase}
      />
      <textarea
        name='message'
        rows={4}
        required
        aria-label='Pesan'
        placeholder='Tulis pesan Anda'
        className={`${fieldBase} resize-none rounded-3xl`}
      />

      <motion.button
        type='submit'
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        className='group inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 font-body font-semibold text-tertiary shadow-md transition-colors hover:bg-secondary-600 hover:shadow-lg'
      >
        Kirim Pesan
        {/* Pesawat kertas terbang saat hover */}
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12'
          aria-hidden
        >
          <path d='m22 2-7 20-4-9-9-4Z' />
          <path d='M22 2 11 13' />
        </svg>
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.p
            role='status'
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className='inline-flex items-center gap-2 rounded-full bg-success-bg px-4 py-2 font-body text-sm font-medium text-success'
          >
            <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden>
              <path d='M20 6 9 17l-5-5' />
            </svg>
            Terima kasih! Pesan Anda telah terkirim.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
