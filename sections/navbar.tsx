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
            <a href='#home' className='flex items-center gap-3'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/logo.svg'
                alt='Garis Tour & Travel'
                className='h-9 w-auto'
              />
              <span className='font-heading text-lg tracking-wide text-primary'>
                Garis Tour &amp; Travel
              </span>
            </a>

            {/* Nav links */}
            <ul className='hidden items-center gap-8 md:flex'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='font-body text-sm font-medium text-tertiary transition-colors hover:text-primary'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href='#kontak'
              className='rounded-full border-2 border-primary px-5 py-2 font-body text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-background'
            >
              Kontak Kami
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
