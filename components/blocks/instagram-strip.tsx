import Image from 'next/image';

interface InstagramStripProps {
  images: string[];
  tone?: 'light' | 'dark';
  className?: string;
}

const InstagramStrip = ({
  images,
  tone = 'light',
  className = '',
}: InstagramStripProps) => {
  const labelColor = tone === 'light' ? 'text-background' : 'text-primary';
  const ring = tone === 'light' ? 'ring-background/20' : 'ring-primary/10';

  return (
    <div className={className}>
      <p
        className={`mb-4 text-center font-heading text-xl tracking-wide ${labelColor}`}
      >
        Follow Instagram
      </p>
      <div className='flex flex-wrap justify-center gap-3'>
        {images.map((src, i) => (
          <div
            key={src + i}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg ring-2 sm:h-20 sm:w-20 ${ring}`}
          >
            <Image
              src={src}
              alt={`Galeri perjalanan ${i + 1}`}
              fill
              sizes='80px'
              className='object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStrip;
