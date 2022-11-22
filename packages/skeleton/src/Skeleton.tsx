import { resolvePixelPercent as fix } from '@no-ui/utils';
import { useRef } from 'react';

import styles from './Skeleton.module.scss';
import BackYard, { AnimateType } from './BackYard';

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number;
  animate?: AnimateType | false;
  color?: string;
  inline?: boolean;
}

export function Skeleton({
  width = '100%',
  height = '100%',
  radius = 2,
  animate = 'flicker',
  color = '#e0e0e0',
  inline = false,
}: SkeletonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const style = {
    width: fix(width),
    height: fix(height),
    borderRadius: fix(radius),
    background: 'rgba(245, 245, 245)',
    display: inline ? 'inline-block' : 'block',
  };

  return (
    <div ref={ref} className={styles['noui-skeleton']} style={style}>
      {animate && <BackYard color={color} animate={animate} />}
    </div>
  );
}

Skeleton.version = __VERSION__;
Skeleton.displayName = 'skeleton';
