import Image from 'next/image';

interface PricingCardProps {
  image: string;
  title: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

const CheckIcon = () => (
  <span className='flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary text-background'>
    <svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3.5' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg'>
      <path d='M20 6 9 17l-5-5' />
    </svg>
  </span>
);

const PricingCard = ({
  image,
  title,
  price,
  unit,
  features,
  featured = false,
}: PricingCardProps) => (
  <div
    className={`group relative flex h-full flex-col rounded-3xl bg-background p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      featured
        ? 'ring-2 ring-secondary hover:shadow-secondary/25 lg:-translate-y-4 lg:hover:-translate-y-6'
        : 'ring-1 ring-neutral-100 hover:ring-secondary-200'
    }`}
  >
    {featured && (
      <span className='absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 font-body text-xs font-semibold text-tertiary shadow-sm transition-transform duration-300 group-hover:scale-110'>
        Terpopuler
      </span>
    )}

    <div className='relative aspect-[2/3] overflow-hidden rounded-2xl bg-neutral-100'>
      <Image
        src={image}
        alt={title}
        fill
        sizes='(max-width: 768px) 100vw, 320px'
        className='object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]'
      />
      {/* Kilau menyapu poster saat hover */}
      <span className='shine-el' aria-hidden />
    </div>

    <div className='mt-4 flex items-start justify-between px-1'>
      <h3 className='font-heading text-xl tracking-wide text-primary'>
        {title}
      </h3>
      <div className='text-right'>
        <p className='font-heading text-2xl leading-none text-secondary'>
          {price}
        </p>
        <p className='mt-1 font-body text-xs text-neutral-500'>{unit}</p>
      </div>
    </div>

    <ul className='mt-5 space-y-2.5 px-1'>
      {features.map((f) => (
        <li
          key={f}
          className='flex items-center gap-2.5 font-body text-sm text-neutral-600 transition-transform duration-200 hover:translate-x-1'
        >
          <CheckIcon />
          {f}
        </li>
      ))}
    </ul>

    <button className='group/btn relative mt-auto w-full overflow-hidden rounded-full bg-secondary py-3 font-body font-semibold text-tertiary shadow-md transition-all duration-300 hover:bg-secondary-600 hover:shadow-lg active:scale-[0.97]'>
      <span className='relative z-10 inline-flex items-center gap-1.5'>
        Pesan Sekarang
        <svg
          width='15'
          height='15'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='-mr-1 w-0 opacity-0 transition-all duration-300 group-hover/btn:w-[15px] group-hover/btn:opacity-100'
          aria-hidden
        >
          <path d='M5 12h14M12 5l7 7-7 7' />
        </svg>
      </span>
    </button>
  </div>
);

export default PricingCard;
