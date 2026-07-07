interface WavyDividerProps {
  className?: string;
}

// Smooth wave; paper (background) fills the lower part and rises into the
// section above. Shadow is cast UPWARD, into the section (as requested).
const WAVE =
  'M0,120 L0,58 C160,110 320,112 480,78 C640,44 800,40 960,72 ' +
  'C1120,104 1280,104 1440,64 L1440,120 Z';

const WavyDivider = ({ className = '' }: WavyDividerProps) => (
  <svg
    viewBox='0 0 1440 120'
    preserveAspectRatio='none'
    aria-hidden
    className={`block w-full ${className}`}
    style={{ filter: 'drop-shadow(0 -6px 5px rgba(15,27,43,0.12))' }}
  >
    <path d={WAVE} className='fill-background' />
  </svg>
);

export default WavyDivider;
