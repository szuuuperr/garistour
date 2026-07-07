'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Reveal from '@/components/blocks/reveal';

const images = [
  { src: '/assets/galeri-customer6.jpg', alt: 'Momen customer Garis Tour' },
  { src: '/assets/destination/gunung-merapi-2.webp', alt: 'Merapi Lava Tour' },
  { src: '/assets/galeri-customer2.jpg', alt: 'Momen customer Garis Tour' },
  { src: '/assets/destination/candi-prambanan.webp', alt: 'Candi Prambanan' },
  { src: '/assets/galeri-customer3.jpg', alt: 'Momen customer Garis Tour' },
  { src: '/assets/destination/tebing-breksi.webp', alt: 'Tebing Breksi' },
  { src: '/assets/destination/malioboro.webp', alt: 'Malioboro' },
];

const GaleriCustomerSection = () => (
  <section id='galeri-customer' className='w-full bg-background'>
    {/* Intro */}
    <div className='container mx-auto flex flex-col items-center px-6 py-12 text-center'>
      <Reveal from='bottom' className='flex flex-col items-center'>
      <span className='font-body text-xs font-semibold uppercase tracking-[0.18em] text-secondary'>
        Galeri Customer
      </span>
      <h2 className='mt-3 font-heading text-4xl tracking-wide md:text-5xl'>
        <span className='text-primary'>Momen</span>{' '}
        <span className='text-secondary italic'>Perjalanan Mereka</span>
      </h2>
      <p className='mx-auto mt-3 max-w-lg font-body text-sm leading-relaxed text-neutral-600'>
        Kenangan tak terlupakan dari para pelanggan Garis Tour di berbagai
        destinasi. Gulir ke bawah dan jelajahi setiap momennya.
      </p>

      <span
        className='mt-6 flex h-11 w-11 items-center justify-center rounded-full text-secondary ring-1 ring-secondary-200'
        aria-hidden
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='animate-bounce'
        >
          <path d='M12 5v14M19 12l-7 7-7-7' />
        </svg>
      </span>
      </Reveal>
    </div>

    {/* Zoom parallax gallery */}
    <ZoomParallax images={images} />
  </section>
);

export default GaleriCustomerSection;
