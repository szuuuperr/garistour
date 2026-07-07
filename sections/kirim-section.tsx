import Image from 'next/image';
import ContactForm from '@/components/blocks/contact-form';
import Reveal from '@/components/blocks/reveal';

const KirimSection = () => (
  <section id='kontak' className='w-full bg-background py-20 md:py-24'>
    <div className='mx-auto max-w-6xl px-6'>
      <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16'>
        {/* Left: image composition (same style as About section) */}
        <Reveal from='left'>
        <div className='relative mx-auto w-full max-w-lg'>
          {/* Main image */}
          <div className='relative h-[320px] w-[90%] overflow-hidden rounded-3xl shadow-lg md:h-[400px]'>
            <Image
              src='/assets/destination/kalibiru.webp'
              alt='Petualangan bersama Garis Tour'
              fill
              sizes='(max-width: 1024px) 100vw, 40vw'
              className='object-cover'
            />
            {/* Caption overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-tertiary/75 via-tertiary/10 to-transparent' />
            <div className='absolute bottom-5 left-6 right-6'>
              <p className='font-heading text-lg italic tracking-wide text-secondary-200'>
                Hai!
              </p>
              <p className='font-heading text-2xl italic tracking-wide text-background'>
                Ada yang bisa kami bantu?
              </p>
            </div>
          </div>

          {/* Dotted pattern */}
          <div
            className='absolute -bottom-6 left-2 hidden h-24 w-40 md:block'
            style={{
              backgroundImage:
                'radial-gradient(var(--secondary-400) 1.6px, transparent 1.6px)',
              backgroundSize: '14px 14px',
              opacity: 0.6,
            }}
            aria-hidden
          />

          {/* Secondary overlapping image */}
          <div className='absolute -bottom-10 right-0 h-[170px] w-[55%] overflow-hidden rounded-3xl shadow-xl ring-8 ring-background'>
            <Image
              src='/assets/destination/hutan-pinus-mangunan.webp'
              alt='Destinasi wisata pilihan'
              fill
              sizes='(max-width: 1024px) 55vw, 22vw'
              className='object-cover'
            />
          </div>

          {/* Response badge */}
          <div className='absolute right-1 top-6 flex items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-lg'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary'>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
                <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z' />
              </svg>
            </span>
            <div>
              <p className='font-body text-xs text-neutral-500'>Respon Cepat</p>
              <p className='font-body text-sm font-semibold text-primary'>
                Siap membantu 24/7
              </p>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Right: heading + form */}
        <Reveal from='right' delay={0.15}>
        <div>
          <h2 className='font-heading text-4xl tracking-wide md:text-5xl'>
            <span className='text-secondary'>Hubungi</span>{' '}
            <span className='text-primary'>&amp; Terhubung Dengan Kami!</span>
          </h2>
          <p className='mt-3 max-w-md font-body text-sm leading-relaxed text-neutral-600'>
            Kami senang mendengar dari Anda. Tim kami yang ramah selalu siap
            membantu merencanakan perjalanan Anda.
          </p>

          <div className='mt-8 rounded-3xl bg-secondary-50 p-6 shadow-sm ring-1 ring-secondary-100 md:p-8'>
            <ContactForm />
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default KirimSection;
