import Image from 'next/image';

interface DestinationCardProps {
  name: string;
  image: string;
  category: string;
}

const DestinationCard = ({ name, image, category }: DestinationCardProps) => (
  <div className='group relative h-44 overflow-hidden rounded-2xl shadow-md sm:h-52'>
    <Image
      src={image}
      alt={name}
      fill
      sizes='(max-width: 640px) 100vw, 320px'
      className='object-cover transition-transform duration-500 group-hover:scale-110'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-tertiary/80 via-tertiary/10 to-transparent' />
    <div className='absolute inset-x-0 bottom-0 p-4'>
      <span className='inline-block rounded-full bg-secondary px-2.5 py-0.5 font-body text-[11px] font-semibold text-tertiary'>
        {category}
      </span>
      <h3 className='mt-1.5 font-heading text-lg tracking-wide text-background'>
        {name}
      </h3>
    </div>
  </div>
);

export default DestinationCard;
