'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Paket Wisata', href: '#paket-wisata' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleExpand = (e: Event) => {
      setVisible((e as CustomEvent<boolean>).detail);
    };
    const handleReset = () => setVisible(false);

    window.addEventListener('heroExpandChange', handleExpand);
    window.addEventListener('resetSection', handleReset);

    return () => {
      window.removeEventListener('heroExpandChange', handleExpand);
      window.removeEventListener('resetSection', handleReset);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-background/90 backdrop-blur-md'
        >
          <nav className='container mx-auto flex h-16 items-center justify-between px-6'>
            {/* Brand */}
            <a href='#home' className='group flex items-center gap-3'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/logo.svg'
                alt='Garis Tour & Travel'
                className='h-9 w-auto transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110'
              />
              <span className='font-heading text-lg tracking-wide text-primary'>
                Garis Tour &amp; Travel
              </span>
            </a>

            {/* Nav links */}
            <ul className='hidden items-center gap-8 md:flex'>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    className='group relative py-2 font-body text-sm font-medium text-tertiary transition-colors hover:text-primary'
                  >
                    {link.label}
                    {/* Garis bawah animasi */}
                    <span className='absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-secondary transition-transform duration-300 ease-out group-hover:scale-x-100' />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href='#kontak'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group flex items-center gap-1.5 rounded-full border-2 border-primary px-5 py-2 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-background'
            >
              Kontak Kami
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='-mr-1 w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100'
                aria-hidden
              >
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </motion.a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
