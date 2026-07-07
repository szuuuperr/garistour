import TestimonialShowcase, {
  type Testimonial,
} from '@/components/blocks/testimonial-showcase';
import Reveal from '@/components/blocks/reveal';

const testimonials: Testimonial[] = [
  {
    name: 'Rina & Dimas',
    role: 'Wisatawan Merapi',
    image: '/assets/galeri-customer1.jpg',
    quote:
      'Perjalanan Merapi Lava Tour bersama Garis Tour sangat berkesan. Pemandunya ramah, jip nya bersih, dan pemandangannya luar biasa. Setiap perjalanan benar benar menjadi kenangan.',
  },
  {
    name: 'Andi Pratama',
    role: 'Pelanggan Setia',
    image: '/assets/galeri-customer2.jpg',
    quote:
      'Pelayanannya profesional dan tepat waktu. Kami sekeluarga merasa aman dan nyaman selama perjalanan. Pasti akan memesan lagi untuk liburan berikutnya.',
  },
  {
    name: 'Siti Rahma',
    role: 'Solo Traveler',
    image: '/assets/galeri-customer3.jpg',
    quote:
      'Booking mudah, harga jelas, dan pemandunya sabar mengajak berfoto di setiap spot terbaik. Pengalaman wisata yang benar benar memuaskan.',
  },
  {
    name: 'Budi Santoso',
    role: 'Rombongan Wisata',
    image: '/assets/galeri-customer4.jpg',
    quote:
      'Armada terawat dan tim yang sangat membantu dari awal sampai akhir. Rombongan kami puas dan semua momen terekam dengan indah bersama Garis Tour.',
  },
];

const TestimoniSection = () => (
  <section id='testimoni' className='relative w-full overflow-hidden bg-background py-20 md:py-24'>
    <div className='mx-auto max-w-6xl px-6'>
      {/* Heading */}
      <Reveal className='text-center'>
        <span className='font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary'>
          Kata Pelanggan Kami
        </span>
        <p className='mx-auto mt-2 max-w-md font-body text-sm leading-relaxed text-neutral-600'>
          Cerita nyata dari mereka yang telah menjelajah bersama Garis Tour.
        </p>
      </Reveal>

      {/* Big display wordmark with a plane crossing it */}
      <Reveal from='bottom' delay={0.1} className='relative mt-6 flex items-center justify-center'>
        <h2
          className='select-none bg-gradient-to-r from-secondary-300 via-secondary to-primary bg-clip-text text-center text-6xl leading-none tracking-wide text-transparent sm:text-7xl md:text-8xl lg:text-9xl'
          aria-label='Testimonial'
        >
          TESTIMONIAL
        </h2>
        <svg
          className='pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-[70%] -rotate-12 text-primary md:h-16 md:w-16'
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M21.5 15.5 14 12V5.5a2 2 0 0 0-4 0V12l-7.5 3.5v2L10 15v3.5l-2 1.5v1.5l4-1 4 1V20l-2-1.5V15l7.5 2.5v-2Z' />
        </svg>
      </Reveal>

      {/* Interactive testimonial */}
      <Reveal from='bottom' delay={0.15} className='mt-10'>
        <TestimonialShowcase testimonials={testimonials} />
      </Reveal>
    </div>
  </section>
);

export default TestimoniSection;
