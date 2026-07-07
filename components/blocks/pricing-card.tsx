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
    className={`relative flex h-full flex-col rounded-3xl bg-background p-4 shadow-lg transition-transform hover:-translate-y-1 ${
      featured ? 'ring-2 ring-secondary lg:-translate-y-4' : 'ring-1 ring-neutral-100'
    }`}
  >
    {featured && (
      <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 font-body text-xs font-semibold text-tertiary shadow-sm'>
        Terpopuler
      </span>
    )}

    <div className='relative aspect-[2/3] overflow-hidden rounded-2xl bg-neutral-100'>
      <Image
        src={image}
        alt={title}
        fill
        sizes='(max-width: 768px) 100vw, 320px'
        className='object-contain'
      />
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
          className='flex items-center gap-2.5 font-body text-sm text-neutral-600'
        >
          <CheckIcon />
          {f}
        </li>
      ))}
    </ul>

    <button className='mt-auto w-full rounded-full bg-secondary py-3 font-body font-semibold text-tertiary shadow-md transition-colors hover:bg-secondary-600'>
      Pesan Sekarang
    </button>
  </div>
);

export default PricingCard;
