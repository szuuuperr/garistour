'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import TornPaper from '@/components/blocks/torn-paper';
import DestinationFeatureCard from '@/components/blocks/destination-feature-card';
import DestinationCard from '@/components/blocks/destination-card';
import Reveal from '@/components/blocks/reveal';

const features = [
  {
    title: 'Utamakan Keselamatan',
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 2 4 5v6c0 5 3.4 7.8 8 10 4.6-2.2 8-5 8-10V5l-8-3Z' />
        <path d='m9 12 2 2 4-4' />
      </svg>
    ),
  },
  {
    title: 'Trip Eksklusif',
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <path d='m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.6 9.1l5.8-.8Z' />
      </svg>
    ),
  },
  {
    title: 'Pemandu Profesional',
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='8' r='4' />
        <path d='M4 21c0-4 3.6-6 8-6s8 2 8 6' />
      </svg>
    ),
  },
  {
    title: 'Kuliner Terbaik',
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 3v18' />
        <path d='M18 3c-1.7 0-3 2-3 5s1 4 3 4v9' />
      </svg>
    ),
  },
];

interface Destination {
  name: string;
  image: string;
  category: string;
}

const destinations: Destination[] = [
  { name: 'Merapi Lava Tour', image: '/assets/destination/gunung-merapi.webp', category: 'Merapi' },
  { name: 'Museum Sisa Hartaku', image: '/assets/destination/museum-sisa-hartaku.webp', category: 'Merapi' },
  { name: 'Pantai Nglambor', image: '/assets/pantai-nglambor.jpg', category: 'Pantai' },
  { name: 'Pantai Indrayanti', image: '/assets/destination/pantai-indrayanti.webp', category: 'Pantai' },
  { name: 'Pantai Timang', image: '/assets/destination/pantai-timang.webp', category: 'Pantai' },
  { name: 'Candi Prambanan', image: '/assets/destination/candi-prambanan.webp', category: 'Candi' },
  { name: 'Candi Ratu Boko', image: '/assets/destination/candi-ratu-boko.webp', category: 'Candi' },
  { name: 'Malioboro', image: '/assets/destination/malioboro.webp', category: 'Kota' },
  { name: 'Taman Sari', image: '/assets/destination/taman-sari.webp', category: 'Kota' },
  { name: 'Tebing Breksi', image: '/assets/destination/tebing-breksi.webp', category: 'Alam' },
  { name: 'Hutan Pinus Mangunan', image: '/assets/destination/hutan-pinus-mangunan.webp', category: 'Alam' },
  { name: 'Kalibiru', image: '/assets/destination/kalibiru.webp', category: 'Alam' },
];

const filters = ['Semua', 'Merapi', 'Pantai', 'Candi', 'Kota', 'Alam'];
const PER_PAGE = 2;

const PopularSection = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      activeFilter === 'Semua'
        ? destinations
        : destinations.filter((d) => d.category === activeFilter),
    [activeFilter]
  );

  const pageCount = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleFilter = (f: string) => {
    setActiveFilter(f);
    setPage(0);
  };

  return (
    <section id='wisata-populer' className='relative bg-background'>
      {/* Torn paper: top edge (rip + shadow point inward) */}
      <div className='pointer-events-none absolute inset-x-0 top-0 z-20 h-10'>
        <TornPaper position='top' className='h-10' />
      </div>

      {/* Featured image, full-bleed to the left edge (lg and up) */}
      <div className='pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[50%] lg:block'>
        <Image
          src='/assets/image-wisata-populer.png'
          alt='Wisatawan menikmati destinasi populer'
          fill
          sizes='50vw'
          className='object-contain object-left-bottom'
          priority
        />
      </div>

      <div className='relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24'>
        <div className='lg:ml-auto lg:w-1/2 lg:pl-8'>
          {/* Mobile featured image */}
          <div className='relative mb-8 h-64 w-full lg:hidden'>
            <Image
              src='/assets/image-wisata-populer.png'
              alt='Wisatawan menikmati destinasi populer'
              fill
              sizes='100vw'
              className='object-contain'
            />
          </div>

          <Reveal from='bottom'>
          <h2 className='font-heading text-4xl tracking-wide md:text-5xl'>
            <span className='text-secondary italic'>Wisata</span>{' '}
            <span className='text-primary'>Populer</span>
          </h2>
          <p className='mt-4 max-w-md font-body text-sm leading-relaxed text-neutral-600'>
            Destinasi pilihan yang paling diminati wisatawan. Nikmati pengalaman
            autentik, pemandangan menakjubkan, dan pelayanan ramah di setiap
            perjalanan bersama Garis Tour.
          </p>
          </Reveal>

          {/* Feature grid */}
          <div className='mt-8 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2'>
            {features.map((f, i) => (
              <Reveal key={f.title} from='bottom' delay={i * 0.1}>
              <DestinationFeatureCard
                number={i + 1}
                title={f.title}
                icon={f.icon}
              />
              </Reveal>
            ))}
          </div>

          {/* Filter tabs */}
          <Reveal from='bottom' delay={0.1} className='mt-10 flex flex-wrap gap-2.5'>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                className={`rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? 'bg-primary text-background'
                    : 'border border-neutral-300 text-tertiary hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          {/* Destination cards */}
          <Reveal from='bottom' delay={0.15} className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {visible.map((d) => (
              <DestinationCard
                key={d.name}
                name={d.name}
                image={d.image}
                category={d.category}
              />
            ))}
          </Reveal>
        </div>

        {/* Pagination dots */}
        {pageCount > 1 && (
          <div className='mt-8 flex justify-center gap-2'>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Halaman ${i + 1}`}
                className={`h-3 rounded-full transition-all ${
                  page === i
                    ? 'w-7 bg-secondary'
                    : 'w-3 bg-neutral-300 hover:bg-secondary-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularSection;
