import Image from 'next/image';
import InstagramStrip from '@/components/blocks/instagram-strip';
import NewsletterSubscribe from '@/components/blocks/newsletter-subscribe';

const topGallery = [
  '/assets/destination/candi-prambanan.webp',
  '/assets/destination/malioboro.webp',
  '/assets/destination/pantai-indrayanti.webp',
  '/assets/destination/gunung-merapi.webp',
  '/assets/destination/tebing-breksi.webp',
  '/assets/destination/heha-sky-view.webp',
  '/assets/destination/taman-sari.webp',
];

const bottomGallery = [
  '/assets/galeri-customer1.jpg',
  '/assets/galeri-customer2.jpg',
  '/assets/galeri-customer3.jpg',
  '/assets/galeri-customer4.jpg',
  '/assets/galeri-customer5.jpg',
  '/assets/galeri-customer6.jpg',
];

const columns = [
  {
    title: 'Destinasi',
    links: ['Merapi Lava Tour', 'Pantai Gunungkidul', 'Candi Prambanan', 'Malioboro', 'Kota Gede'],
  },
  {
    title: 'Jelajahi',
    links: ['Tentang Kami', 'Paket Wisata', 'Rental Mobil', 'Galeri', 'Blog'],
  },
  {
    title: 'Legal',
    links: ['Syarat & Ketentuan', 'Kebijakan Privasi'],
  },
];

const socials = ['Instagram', 'Facebook', 'WhatsApp', 'TikTok'];

const contacts = [
  { icon: 'phone', text: '+62 817 0201 984' },
  { icon: 'mail', text: 'halo@garistour.com' },
  { icon: 'pin', text: 'Yogyakarta, Daerah Istimewa Yogyakarta' },
];

const ContactIcon = ({ type }: { type: string }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (type === 'phone')
    return (
      <svg {...common} xmlns='http://www.w3.org/2000/svg'>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z' />
      </svg>
    );
  if (type === 'mail')
    return (
      <svg {...common} xmlns='http://www.w3.org/2000/svg'>
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='m22 7-10 5L2 7' />
      </svg>
    );
  return (
    <svg {...common} xmlns='http://www.w3.org/2000/svg'>
      <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <circle cx='12' cy='10' r='3' />
    </svg>
  );
};

const Footer = () => (
  <footer id='kontak' className='w-full'>
    {/* Top gallery band */}
    <div className='bg-neutral-100 pt-10'>
      <InstagramStrip images={topGallery} tone='dark' className='container mx-auto px-6' />

      {/* Driving car animation */}
      <div className='relative mt-6 h-20 w-full overflow-hidden'>
        <div className='animate-drive absolute bottom-0 left-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/assets/car.svg'
            alt='Mobil Garis Tour'
            className='animate-car-bob h-20 w-auto'
          />
        </div>
      </div>
    </div>

    {/* Subscribe band */}
    <NewsletterSubscribe />

    {/* Main footer body */}
    <div className='bg-tertiary text-background'>
      <div className='container mx-auto grid grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4'>
        {/* Brand */}
        <div>
          <div className='flex items-center gap-3'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/logo.svg' alt='Garis Tour & Travel' className='h-10 w-auto' />
            <span className='font-heading text-xl tracking-wide'>
              Garis Tour
            </span>
          </div>
          <p className='mt-4 max-w-xs font-body text-sm leading-relaxed text-background/70'>
            Penyedia jasa transportasi dan perjalanan wisata yang profesional,
            aman, nyaman, dan terpercaya. Setiap perjalanan menjadi kenangan.
          </p>
          <div className='mt-5 flex gap-3'>
            {socials.map((s) => (
              <a
                key={s}
                href='#'
                aria-label={s}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-background/30 text-xs font-semibold text-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-tertiary hover:shadow-lg hover:shadow-secondary/30'
              >
                {s.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className='font-heading text-lg tracking-wide text-secondary'>
              {col.title}
            </h3>
            <ul className='mt-4 space-y-2.5'>
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='group inline-flex items-center gap-1 font-body text-sm text-background/70 transition-all duration-200 hover:translate-x-1 hover:text-secondary'
                  >
                    <span className='h-px w-0 bg-secondary transition-all duration-200 group-hover:w-3' aria-hidden />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className='lg:col-span-1'>
          <h3 className='font-heading text-lg tracking-wide text-secondary'>
            Kontak
          </h3>
          <ul className='mt-4 space-y-4'>
            {contacts.map((c) => (
              <li key={c.text} className='flex items-center gap-3'>
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-tertiary'>
                  <ContactIcon type={c.icon} />
                </span>
                <span className='font-body text-sm text-background/80'>
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-background/10'>
        <div className='container mx-auto px-6 py-5 text-center'>
          <p className='font-body text-xs text-background/60'>
            Copyright © {new Date().getFullYear()} Garis Tour &amp; Travel. All
            rights reserved. Developed with ❤️ by{' '}
            <a
              href='https://modernwebidn.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-secondary transition-colors hover:text-background'
            >
              Modernweb
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
