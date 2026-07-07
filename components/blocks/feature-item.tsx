import { ReactNode } from 'react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className='flex flex-col'>
    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-secondary'>
      {icon}
    </div>
    <h3 className='font-heading text-xl tracking-wide text-primary'>{title}</h3>
    <p className='mt-2 font-body text-sm leading-relaxed text-neutral-600'>
      {description}
    </p>
  </div>
);

export default FeatureItem;
