import { CSSProperties } from 'react';

import styles from './BackYard.module.scss';

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

  console.log(styles);
  const classNames = [styles['noui-backyard'], styles[animate]].join(' ');
  return <div className={classNames} style={style} />;
}

export default BackYard;
