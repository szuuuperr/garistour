import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => (
  <div className='relative flex h-full flex-col rounded-3xl bg-background p-7 shadow-md ring-1 ring-neutral-100 transition-transform hover:-translate-y-1'>
    <div className='flex items-start justify-between'>
      <span className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-heading text-2xl tracking-wide text-background shadow-sm'>
        {number}
      </span>
      <span className='flex h-14 w-14 items-center justify-center rounded-full text-secondary ring-2 ring-secondary'>
        {icon}
      </span>
    </div>

    <h3 className='mt-6 font-heading text-xl tracking-wide text-primary'>
      {title}
    </h3>
    <p className='mt-2 font-body text-sm leading-relaxed text-neutral-600'>
      {description}
    </p>
  </div>
);

export default StepCard;
