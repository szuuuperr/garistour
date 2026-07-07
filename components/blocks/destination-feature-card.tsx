import { ReactNode } from 'react';

interface DestinationFeatureCardProps {
  number: number;
  title: string;
  icon: ReactNode;
  description?: string;
}

const DestinationFeatureCard = ({
  number,
  title,
  icon,
  description,
}: DestinationFeatureCardProps) => (
  <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-secondary-50/40 p-5 shadow-md ring-1 ring-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-secondary-200'>
    {/* Number badge */}

    {/* Oversized watermark number */}
    <span
      className='pointer-events-none absolute -right-2 -top-4 select-none font-heading text-7xl font-bold leading-none text-secondary-100/70 transition-colors group-hover:text-secondary-200/70'
      aria-hidden
    >
      {number}
    </span>

    {/* Icon */}
    <div className='relative mt-3 mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-background'>
      {icon}
    </div>

    <h3 className='relative font-heading text-base leading-snug tracking-wide text-primary'>
      {title}
    </h3>

    {description && (
      <p className='relative mt-1.5 font-body text-xs leading-relaxed text-neutral-500'>
        {description}
      </p>
    )}

    {/* Bottom accent line */}
    <span className='absolute bottom-0 left-0 h-1 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full' />
  </div>
);

export default DestinationFeatureCard;
