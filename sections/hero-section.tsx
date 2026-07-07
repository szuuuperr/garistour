'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import AboutSection from '@/sections/about-section';

const heroMedia = {
  mediaType: 'image' as const,
  src: '/assets/pantai-nglambor.jpg',
  background: '/assets/destination/hutan-pinus-mangunan.webp',
  title: 'Jelajah Istimewa',
  date: 'Garis Tour & Travel',
  scrollToExpand: 'Gulir untuk mulai menjelajah',
  about: {
    overview:
      'Garis Tour adalah penyedia jasa transportasi dan perjalanan wisata yang melayani kebutuhan perjalanan dengan pelayanan profesional, aman, nyaman, dan terpercaya. Kami menyediakan armada yang bersih dan terawat serta didukung pengemudi berpengalaman untuk berbagai keperluan perjalanan.',
    conclusion:
      'Dari open trip Jeep Merapi hingga wisata pantai Gunungkidul, setiap paket kami rancang dengan cermat dan harga yang transparan. Bersama Garis Tour & Travel, setiap perjalanan menjadi kenangan.',
  },
};

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('resetSection'));
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={heroMedia.mediaType}
        mediaSrc={heroMedia.src}
        bgImageSrc={heroMedia.background}
        title={heroMedia.title}
        date={heroMedia.date}
        scrollToExpand={heroMedia.scrollToExpand}
        textBlend
      >
        <AboutSection />
      </ScrollExpandMedia>
    </div>
  );
};

export default HeroSection;
