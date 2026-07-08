'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const PHONE = '628170201984';
const MESSAGE =
  'Halo Garis Tour! Saya tertarik dengan paket wisata Anda. Bisa dibantu?';
const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const WhatsAppGlyph = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' />
  </svg>
);

const WhatsAppFab = () => {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Munculkan tombol setelah user scroll sedikit, atau saat halaman sudah tergulir.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 240) setMounted(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Gelembung sapaan otomatis muncul beberapa saat setelah tombol tampil.
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setShowBubble(true), 1800);
    return () => clearTimeout(t);
  }, [mounted]);

  return (
    <div className='pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-7 md:right-7'>
      {/* Gelembung sapaan */}
      <AnimatePresence>
        {mounted && showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className='pointer-events-auto relative mr-1 max-w-[15rem] rounded-2xl rounded-br-sm bg-background px-4 py-3 shadow-xl ring-1 ring-neutral-100'
          >
            <button
              onClick={() => setShowBubble(false)}
              aria-label='Tutup pesan'
              className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-tertiary shadow-sm transition-colors hover:bg-neutral-300'
            >
              <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' xmlns='http://www.w3.org/2000/svg'>
                <path d='M18 6 6 18M6 6l12 12' />
              </svg>
            </button>
            <p className='font-body text-sm font-semibold text-primary'>
              Halo, Sobat Garis! 👋
            </p>
            <p className='mt-0.5 font-body text-xs leading-relaxed text-neutral-600'>
              Ada yang bisa kami bantu untuk perjalanan Anda?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol utama */}
      <AnimatePresence>
        {mounted && (
          <motion.a
            href={HREF}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat kami via WhatsApp'
            onMouseEnter={() => {
              setShowBubble(false);
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className='group pointer-events-auto relative flex items-center'
          >
            {/* Cincin pulsa */}
            {!reduceMotion && (
              <>
                <motion.span
                  className='absolute right-0 h-14 w-14 rounded-full bg-[#25D366] will-change-transform'
                  animate={{ scale: [1, 1.9], opacity: [0.45, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  aria-hidden
                />
                <motion.span
                  className='absolute right-0 h-14 w-14 rounded-full bg-[#25D366] will-change-transform'
                  animate={{ scale: [1, 1.9], opacity: [0.45, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                  aria-hidden
                />
              </>
            )}

            {/* Label yang mengembang saat hover (desktop): lebar diukur
                oleh framer-motion (width: 'auto'), bukan trik max-width,
                supaya gerakannya mulus tanpa lag/snap. */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                  className='pointer-events-none mr-[-1.25rem] hidden overflow-hidden rounded-full bg-tertiary shadow-lg md:block'
                  aria-hidden
                >
                  <span className='block whitespace-nowrap py-2.5 pl-4 pr-8 font-body text-sm font-semibold text-background'>
                    Chat via WhatsApp
                  </span>
                </motion.span>
              )}
            </AnimatePresence>

            {/* Bulatan ikon */}
            <span className='relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#128C7E]/40 ring-4 ring-white/60 transition-transform duration-300 ease-out group-hover:scale-110'>
              <WhatsAppGlyph className='h-7 w-7 drop-shadow-sm' />

              {/* Badge notifikasi */}
              <span className='absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white ring-2 ring-white'>
                1
              </span>
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFab;
