'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialShowcaseProps {
  testimonials: Testimonial[];
}

const QuoteMark = () => (
  <svg width='44' height='44' viewBox='0 0 24 24' fill='currentColor' aria-hidden xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.5 5A4.5 4.5 0 0 0 3 9.5V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6.5A2.5 2.5 0 0 1 9 8.5V7a2 2 0 0 0-1.5-2Zm10 0A4.5 4.5 0 0 0 13 9.5V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3.5A2.5 2.5 0 0 1 19 8.5V7a2 2 0 0 0-1.5-2Z' />
  </svg>
);

const Star = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' aria-hidden xmlns='http://www.w3.org/2000/svg'>
    <path d='m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.6 9.1l5.8-.8Z' />
  </svg>
);

const TestimonialShowcase = ({ testimonials }: TestimonialShowcaseProps) => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <div className='grid items-center gap-12 lg:grid-cols-2'>
      {/* Left: quote content */}
      <div className='order-2 lg:order-1'>
        <span className='text-secondary'>
          <QuoteMark />
        </span>

        <AnimatePresence mode='wait'>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className='mt-4 font-heading text-3xl normal-case italic tracking-wide text-primary'>
              {current.name}
            </p>
            <p className='mt-1 font-body text-xs font-semibold uppercase tracking-[0.18em] text-secondary'>
              {current.role}
            </p>
            <p className='mt-5 max-w-md font-body text-base leading-relaxed text-neutral-600'>
              {current.quote}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className='mt-8 flex items-center justify-between'>
          {/* Pagination dots */}
          <div className='flex gap-2.5'>
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Lihat testimoni ${t.name}`}
                className={`h-3 rounded-full transition-all ${
                  active === i ? 'w-8 bg-secondary' : 'w-3 bg-neutral-300 hover:bg-secondary-300'
                }`}
              />
            ))}
          </div>
          {/* Rating */}
          <div className='flex gap-1 text-secondary'>
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>

      {/* Right: photo + clickable thumbnails */}
      <div className='relative order-1 flex items-center justify-center gap-4 lg:order-2 lg:justify-end'>
        {/* Decorative circle */}
        <div className='pointer-events-none absolute right-10 top-1/2 -z-0 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary-100' aria-hidden />

        {/* Thumbnails */}
        <div className='relative z-10 flex flex-col gap-3'>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Pilih ${t.name}`}
              className={`relative h-14 w-14 overflow-hidden rounded-2xl ring-2 transition-all ${
                active === i
                  ? 'scale-110 ring-secondary'
                  : 'opacity-70 ring-transparent hover:opacity-100'
              }`}
            >
              <Image src={t.image} alt={t.name} fill sizes='56px' className='object-cover' />
            </button>
          ))}
        </div>

        {/* Main photo with rotate animation on change */}
        <div className='relative z-10 h-[380px] w-[290px] md:h-[420px] md:w-[320px]'>
          <div className='relative h-full w-full [perspective:1200px]'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={active}
                initial={{ rotate: -8, rotateY: 25, scale: 0.85, opacity: 0 }}
                animate={{ rotate: 0, rotateY: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 8, rotateY: -25, scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='absolute inset-0 overflow-hidden rounded-3xl shadow-xl ring-1 ring-neutral-200'
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes='(max-width: 768px) 80vw, 320px'
                  className='object-cover'
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
