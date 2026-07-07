import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => (
  <div className='group relative flex h-full flex-col overflow-hidden rounded-3xl bg-background p-7 shadow-md ring-1 ring-neutral-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-secondary-200'>
    {/* Nomor besar samar di latar */}
    <span
      className='pointer-events-none absolute -bottom-6 -right-2 select-none font-heading text-9xl leading-none text-neutral-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-secondary-100'
      aria-hidden
    >
      {number}
    </span>

    <div className='relative flex items-start justify-between'>
      <span className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-heading text-2xl tracking-wide text-background shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:bg-secondary group-hover:text-tertiary'>
        {number}
      </span>
      <span className='flex h-14 w-14 items-center justify-center rounded-full text-secondary ring-2 ring-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-background'>
        {icon}
      </span>
    </div>

    <h3 className='relative mt-6 font-heading text-xl tracking-wide text-primary'>
      {title}
    </h3>
    <p className='relative mt-2 font-body text-sm leading-relaxed text-neutral-600'>
      {description}
    </p>
  </div>
);

export default StepCard;
