const PromoBanner = () => (
  <div className='relative overflow-hidden rounded-3xl bg-secondary px-8 py-9 shadow-lg md:px-12 md:py-10'>
    {/* Decorative wave/cloud pattern at the bottom */}
    <svg
      className='pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-secondary-400'
      viewBox='0 0 1200 120'
      preserveAspectRatio='none'
      fill='currentColor'
      aria-hidden
    >
      <path d='M0 80c80-30 160-30 240 0s160 30 240 0 160-30 240 0 160 30 240 0 160-30 240 0v40H0Z' opacity='0.55' />
      <path d='M0 100c100-24 200-24 300 0s200 24 300 0 200-24 300 0 200 24 300 0v20H0Z' opacity='0.4' />
    </svg>

    <div className='relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left'>
      <div className='flex items-center gap-5'>
        <div className='leading-none'>
          <span className='font-heading text-6xl tracking-wide text-tertiary md:text-7xl'>
            48
          </span>
          <span className='ml-1 font-heading text-2xl tracking-wide text-tertiary'>
            % OFF
          </span>
        </div>
        <div>
          <p className='font-body text-xs font-semibold uppercase tracking-[0.18em] text-tertiary/80'>
            Dapatkan Penawaran Spesial
          </p>
          <p className='mt-1 font-heading text-3xl italic tracking-wide text-tertiary md:text-4xl'>
            Paket Tour &amp; Trip, ke Seluruh Nusantara
          </p>
        </div>
      </div>

      <a
        href='#kontak'
        className='shrink-0 rounded-full bg-background px-8 py-3.5 font-body font-semibold text-primary shadow-md transition-colors hover:bg-neutral-100'
      >
        Selengkapnya
      </a>
    </div>
  </div>
);

export default PromoBanner;
