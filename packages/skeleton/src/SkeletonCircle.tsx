import { resolvePixelPercent as fixUnit } from '@no-ui/utils';
import { CSSProperties } from 'react';

import { AnimateType } from './Skeleton';
import styles from './Skeleton.module.scss';

export interface SkeletonCircleProps {
  /**
   * SkeletonCircle `size`.
   */
  size: number | string;
  /**
   * SkeletonCircle animation type.
   * @default
   * flicker
   */
  animate?: AnimateType;
  /**
   * Skeleton color
   * @default
   * rgba(0,0,0,0.08)
   */
  color?: string;
  /**
   * Skeleton wave color on wave animate.
   * @default
   * rgba(0,0,0,0.1)
   */
  waveColor?: string;
  /**
   * Skeleton animation duration in seconds.
   * @default
   * 2
   */
  duration?: number;
  /**
   * It true, `display: inline-block`. or `display: block`.
   */
  inline?: boolean;
  /**
   * SkeletonCircle's style.
   */
  extraStyle?: CSSProperties;
}

export function SkeletonCircle({
  size,
  animate = 'flicker',
  duration = 2,
  color = 'rgba(0,0,0,0.08)',
  waveColor = 'rgba(0,0,0,0.1)',
  inline,
  extraStyle,
}: SkeletonCircleProps) {
  const baseStyle: CSSProperties = {
    width: fixUnit(size),
    height: fixUnit(size),
    borderRadius: '50%',
    background: color,
    display: inline ? 'inline-block' : 'block',
    ...(animate === 'flicker' && { animationDuration: `${duration}s` }),
    ...(extraStyle && { ...extraStyle }),
  };

  const classNames = [styles['noui-skeleton'], animate !== 'none' && styles[animate]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={baseStyle}>
      {animate === 'wave' && (
        <span
          style={{
            background: `linear-gradient(90deg, transparent, ${waveColor}, transparent)`,
            animationDuration: `${duration}s`,
          }}
        ></span>
      )}
    </div>
  );
}

SkeletonCircle.version = __VERSION__;
SkeletonCircle.displayName = 'skeleton-circle';
