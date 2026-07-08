'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Lenis smooth scrolling untuk seluruh halaman.
 *
 * Catatan: hero (ScrollExpandMedia) mengambil alih wheel/touch sebelum
 * media terbentang penuh (preventDefault + memaksa scrollTo(0,0)).
 * Lenis harus berhenti selama fase itu agar tidak saling dorong,
 * lalu aktif kembali setelah hero terbentang (event 'heroExpandChange').
 */
const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
    });

    // Hero belum terbentang saat halaman dimuat: mulai dalam keadaan berhenti.
    lenis.stop();

    const handleExpand = (e: Event) => {
      if ((e as CustomEvent<boolean>).detail) {
        lenis.start();
      } else {
        lenis.stop();
      }
    };
    const handleReset = () => lenis.stop();

    window.addEventListener('heroExpandChange', handleExpand);
    window.addEventListener('resetSection', handleReset);

    return () => {
      window.removeEventListener('heroExpandChange', handleExpand);
      window.removeEventListener('resetSection', handleReset);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
