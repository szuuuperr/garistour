interface TornPaperProps {
  position?: 'top' | 'bottom';
  /** Warna permukaan kertas. Cocokkan dengan warna section sebelumnya. */
  color?: 'background' | 'secondary';
  className?: string;
}

// Teeth pointing DOWN (solid paper on top) — used for the section's TOP edge
// so the rip and its shadow read as tearing INTO the section.
const TEETH_DOWN =
  'M0,0 L1440,0 L1440,20 L1405,27 L1378,22 L1342,32 L1315,15 L1285,28 L1258,17 ' +
  'L1220,35 L1195,20 L1165,31 L1138,14 L1100,25 L1072,21 L1042,34 L1015,16 L978,28 ' +
  'L950,20 L920,33 L895,14 L858,26 L830,22 L800,32 L772,15 L742,29 L715,18 L680,36 ' +
  'L655,21 L625,31 L598,14 L560,25 L535,20 L505,34 L478,16 L440,27 L415,22 L388,32 ' +
  'L360,13 L330,28 L305,17 L270,35 L248,21 L220,31 L195,14 L160,26 L138,20 L110,33 ' +
  'L78,15 L55,30 L28,18 L0,22 Z';

// Teeth pointing UP (solid paper on bottom) — used for the section's BOTTOM edge.
const TEETH_UP =
  'M0,40 L0,18 L28,22 L55,10 L78,25 L110,7 L138,20 L160,14 L195,26 L220,9 ' +
  'L248,19 L270,5 L305,23 L330,12 L360,27 L388,8 L415,18 L440,13 L478,24 L505,6 ' +
  'L535,20 L560,15 L598,26 L625,9 L655,19 L680,4 L715,22 L742,11 L772,25 L800,8 ' +
  'L830,18 L858,14 L895,26 L920,7 L950,20 L978,12 L1015,24 L1042,6 L1072,19 L1100,15 ' +
  'L1138,26 L1165,9 L1195,20 L1220,5 L1258,23 L1285,12 L1315,25 L1342,8 L1378,18 ' +
  'L1405,13 L1440,20 L1440,40 Z';

const TornPaper = ({
  position = 'top',
  color = 'background',
  className = '',
}: TornPaperProps) => {
  const isTop = position === 'top';
  const path = isTop ? TEETH_DOWN : TEETH_UP;
  const fiberShift = isTop ? 1.5 : -1.5;
  const surfaceFill = color === 'secondary' ? 'fill-secondary-400' : 'fill-background';
  const fiberFill = color === 'secondary' ? 'fill-secondary-600' : 'fill-neutral-200';

  return (
    <svg
      viewBox='0 0 1440 40'
      preserveAspectRatio='none'
      aria-hidden
      className={`block w-full ${className}`}
      style={{
        // shadow cast INTO the section (downward for top edge, upward for bottom edge)
        filter: isTop
          ? 'drop-shadow(0 5px 4px rgba(15,27,43,0.14))'
          : 'drop-shadow(0 -5px 4px rgba(15,27,43,0.14))',
      }}
    >
      {/* soft fiber line just inside the rip */}
      <path
        d={path}
        className={fiberFill}
        transform={`translate(0,${fiberShift})`}
      />
      {/* paper surface */}
      <path d={path} className={surfaceFill} />
    </svg>
  );
};

export default TornPaper;
