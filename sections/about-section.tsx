import Image from 'next/image';
import FeatureItem from '@/components/blocks/feature-item';
import Reveal from '@/components/blocks/reveal';

const features = [
  {
    title: 'Berpengalaman & Profesional',
    description:
      'Didukung pengemudi berpengalaman dan tim yang melayani setiap perjalanan dengan profesional.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2 4 5v6c0 5 3.4 7.8 8 10 4.6-2.2 8-5 8-10V5l-8-3Z' />
        <path d='m9 12 2 2 4-4' />
      </svg>
    ),
  },
  {
    title: 'Aman & Tepat Waktu',
    description:
      'Armada bersih dan terawat serta jadwal yang tepat waktu untuk kenyamanan Anda.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='9' />
        <path d='M12 7v5l3 2' />
      </svg>
    ),
  },
  {
    title: 'Layanan Lengkap',
    description:
      'Dari transportasi, akomodasi, hingga paket wisata, semua kebutuhan perjalanan Anda kami siapkan.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M3 9h18M3 9l2-5h14l2 5M3 9v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9' />
        <circle cx='7.5' cy='14.5' r='1' />
        <circle cx='16.5' cy='14.5' r='1' />
      </svg>
    ),
  },
];

const AboutSection = () => (
  <section id='tentang-kami' className='w-full bg-background py-20 md:py-24'>
    <div className='mx-auto max-w-6xl px-6'>
      <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
        {/* Left: copy */}
        <Reveal from='left'>
        <div>
          <h2 className='font-heading text-4xl leading-tight tracking-wide md:text-5xl'>
            <span className='text-primary'>Layanan transportasi</span>{' '}
            <span className='text-secondary'>&amp; wisata terpercaya</span>
          </h2>

          <p className='mt-6 max-w-lg font-body text-base leading-relaxed text-neutral-600'>
            Garis Tour adalah penyedia jasa transportasi dan perjalanan wisata
            yang melayani kebutuhan perjalanan dengan pelayanan profesional,
            aman, nyaman, dan terpercaya.
          </p>
          <p className='mt-4 max-w-lg font-body text-base leading-relaxed text-neutral-600'>
            Kami menyediakan armada yang bersih dan terawat serta didukung
            pengemudi berpengalaman untuk berbagai keperluan perjalanan Anda.
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-6'>
            <a
              href='#paket-wisata'
              className='rounded-full bg-secondary px-7 py-3.5 font-body font-semibold text-tertiary shadow-md transition-colors hover:bg-secondary-600'
            >
              Selengkapnya
            </a>

            <div className='flex items-center gap-3'>
              <span className='flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z' />
                </svg>
              </span>
              <div>
                <p className='font-body text-xs text-neutral-500'>
                  Hubungi Kami
                </p>
                <p className='font-body text-sm font-semibold text-primary'>
                  +62 812 3456 7890
                </p>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Right: image composition */}
        <Reveal from='right' delay={0.15}>
        <div className='relative mx-auto w-full max-w-lg'>
          {/* Main image */}
          <div className='relative ml-auto h-[300px] w-[88%] overflow-hidden rounded-3xl shadow-lg md:h-[360px]'>
            <Image
              src='/assets/destination/gunung-merapi.webp'
              alt='Perjalanan wisata Garis Tour'
              fill
              sizes='(max-width: 1024px) 100vw, 40vw'
              className='object-cover'
            />
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
          <div className='absolute -bottom-10 right-0 h-[180px] w-[60%] overflow-hidden rounded-3xl shadow-xl ring-8 ring-background'>
            <Image
              src='/assets/pantai-nglambor2.jpg'
              alt='Destinasi wisata pilihan'
              fill
              sizes='(max-width: 1024px) 60vw, 24vw'
              className='object-cover'
            />
          </div>

          {/* Experience badge */}
          <div className='absolute bottom-6 left-0 rounded-2xl bg-background px-6 py-4 text-center shadow-lg md:left-4'>
            <p className='font-heading text-4xl leading-none text-secondary'>
              10+
            </p>
            <p className='mt-1 font-body text-xs font-medium text-neutral-600'>
              Tahun Pengalaman
            </p>
          </div>
        </div>
        </Reveal>
      </div>

      {/* Features */}
      <div className='mt-24 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-14 md:grid-cols-3'>
        {features.map((f, i) => (
          <Reveal key={f.title} from='bottom' delay={i * 0.12}>
          <FeatureItem
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
