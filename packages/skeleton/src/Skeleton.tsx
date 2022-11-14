import './index.scss';
import { setSignature, resolvePixelPercent as fix } from '@no-ui/utils';
import { useRef } from 'react';

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
    <div ref={ref} className="no-ui__skeleton" style={style}>
      {animate && <BackYard color={color} animate={animate} />}
    </div>
  );
}

setSignature(Skeleton, __VERSION__);
