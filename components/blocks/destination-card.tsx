import Image from 'next/image';

interface DestinationCardProps {
  name: string;
  image: string;
  category: string;
}

const DestinationCard = ({ name, image, category }: DestinationCardProps) => (
  <div className='group relative h-44 cursor-pointer overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl sm:h-52'>
    <Image
      src={image}
      alt={name}
      fill
      sizes='(max-width: 640px) 100vw, 320px'
      className='object-cover transition-transform duration-700 ease-out group-hover:scale-110'
    />
    {/* Overlay menggelap saat hover agar teks makin kontras */}
    <div className='absolute inset-0 bg-gradient-to-t from-tertiary/80 via-tertiary/10 to-transparent transition-opacity duration-300 group-hover:opacity-90' />

    {/* Kilau menyapu */}
    <span className='shine-el' aria-hidden />

    <div className='absolute inset-x-0 bottom-0 p-4'>
      <span className='inline-block rounded-full bg-secondary px-2.5 py-0.5 font-body text-[11px] font-semibold text-tertiary transition-transform duration-300 group-hover:-translate-y-0.5'>
        {category}
      </span>
      <div className='mt-1.5 flex items-center justify-between gap-2'>
        <h3 className='font-heading text-lg tracking-wide text-background transition-transform duration-300 group-hover:-translate-y-0.5'>
          {name}
        </h3>
        {/* Panah muncul saat hover */}
        <span className='flex h-7 w-7 shrink-0 translate-x-2 items-center justify-center rounded-full bg-background/20 text-background opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' aria-hidden>
            <path d='M7 17 17 7M8 7h9v9' />
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default DestinationCard;
