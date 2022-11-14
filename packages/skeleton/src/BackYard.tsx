import { CSSProperties } from 'react';

export type AnimateType = 'flicker' | 'wave';

interface BackYardProps {
  color: string;
  animate: AnimateType;
}
function BackYard({ color, animate }: BackYardProps) {
  const style: CSSProperties = {
    background:
      animate === 'wave' ? `linear-gradient(90deg, transparent, ${color}, transparent)` : color,
  };

  const classNames = ['no-ui__skeleton-backyard', animate].join(' ');
  return <div className={classNames} style={style} />;
}

export default BackYard;
