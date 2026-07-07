import StepCard from '@/components/blocks/step-card';
import PromoBanner from '@/components/blocks/promo-banner';
import Reveal from '@/components/blocks/reveal';

const steps = [
  {
    title: 'Pilih Destinasi',
    description:
      'Tentukan paket atau destinasi favorit Anda dari berbagai pilihan perjalanan yang kami sediakan.',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
        <circle cx='12' cy='10' r='3' />
      </svg>
    ),
  },
  {
    title: 'Hubungi Kami',
    description:
      'Hubungi tim kami untuk konfirmasi ketersediaan, jadwal, dan detail pemesanan perjalanan Anda.',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z' />
      </svg>
    ),
  },
  {
    title: 'Nikmati Perjalanan',
    description:
      'Siapkan diri Anda, duduk nyaman, dan nikmati perjalanan tak terlupakan bersama Garis Tour.',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
        <rect x='3' y='7' width='18' height='13' rx='2' />
        <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
        <path d='M8 12v4M16 12v4' />
      </svg>
    ),
  },
];

const CaraPesanSection = () => (
  <section id='cara-pesan' className='w-full bg-background py-20 md:py-24'>
    <div className='mx-auto max-w-6xl px-6'>
      {/* Heading */}
      <Reveal className='text-center'>
        <h2 className='font-heading text-4xl tracking-wide md:text-5xl'>
          <span className='text-primary'>Cara Mudah</span>{' '}
          <span className='text-secondary italic'>Pemesanan</span>
        </h2>
        <p className='mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-neutral-600'>
          Rencanakan perjalanan impian Anda hanya dalam tiga langkah sederhana.
          Setiap perjalanan menjadi kenangan.
        </p>
        <svg
          className='mx-auto mt-3 h-4 w-28 text-secondary-300'
          viewBox='0 0 120 16'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          aria-hidden
        >
          <path d='M2 10c20-8 40-8 60 0s40 8 58-2' />
        </svg>
      </Reveal>

      {/* Steps */}
      <div className='mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3'>
        {steps.map((s, i) => (
          <Reveal key={s.title} from='bottom' delay={i * 0.12} className='h-full'>
          <StepCard
            number={i + 1}
            title={s.title}
            description={s.description}
            icon={s.icon}
          />
          </Reveal>
        ))}
      </div>

      {/* Promo banner */}
      <Reveal from='bottom' className='mt-14'>
        <PromoBanner />
      </Reveal>
    </div>
  </section>
);

export default CaraPesanSection;
