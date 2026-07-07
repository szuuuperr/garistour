'use client';

import { FormEvent, useState } from 'react';

const fieldBase =
  'w-full rounded-lg border border-neutral-200 bg-background px-5 py-3.5 font-body text-sm text-tertiary shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/30';

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

      <button
        type='submit'
        className='rounded-full bg-secondary px-8 py-3.5 font-body font-semibold text-tertiary shadow-md transition-colors hover:bg-secondary-600'
      >
        Kirim Pesan
      </button>

      {sent && (
        <p role='status' className='font-body text-sm font-medium text-success'>
          Terima kasih! Pesan Anda telah terkirim.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
