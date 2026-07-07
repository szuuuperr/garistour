import { ReactNode } from 'react';

interface DestinationFeatureCardProps {
  number: number;
  title: string;
  icon: ReactNode;
}

const DestinationFeatureCard = ({
  number,
  title,
  icon,
}: DestinationFeatureCardProps) => (
  <div className='relative rounded-2xl bg-background p-5 shadow-md ring-1 ring-neutral-100 transition-shadow hover:shadow-lg'>
    <span className='absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-body text-sm font-semibold text-background shadow-sm'>
      {number}
    </span>
    <div className='mt-3 mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-secondary'>
      {icon}
    </div>
    <h3 className='font-heading text-base leading-snug tracking-wide text-primary'>
      {title}
    </h3>
  </div>
);

export default DestinationFeatureCard;
