import './index.scss';
import { setSignature, resolvePixelPercent as fix } from '@no-ui/utils';
import { useRef } from 'react';

import BackYard, { AnimateType } from './BackYard';

export interface SkeletonCircleProps {
  size?: number | string;
  animate?: AnimateType | false;
  color?: string;
  inline?: boolean;
}

export function SkeletonCircle({
  size = '50px',
  animate = 'flicker',
  color = '#e0e0e0',
  inline = false,
}: SkeletonCircleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const style = {
    width: fix(size),
    height: fix(size),
    borderRadius: '50%',
    background: 'rgba(245, 245, 245)',
    display: inline ? 'inline-block' : 'block',
  };

  return (
    <div ref={ref} className="no-ui__skeleton" style={style}>
      {animate && <BackYard color={color} animate={animate} />}
    </div>
  );
}

setSignature(SkeletonCircle, __VERSION__);
