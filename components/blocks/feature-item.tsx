import { ReactNode } from 'react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className='group flex flex-col'>
    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-secondary transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:bg-secondary group-hover:text-background group-hover:shadow-md group-hover:shadow-secondary/30'>
      {icon}
    </div>
    <h3 className='w-fit font-heading text-xl tracking-wide text-primary'>
      {title}
      <span className='block h-0.5 max-w-0 rounded-full bg-secondary transition-all duration-500 group-hover:max-w-full' />
    </h3>
    <p className='mt-2 font-body text-sm leading-relaxed text-neutral-600'>
      {description}
    </p>
  </div>
);

export default FeatureItem;
