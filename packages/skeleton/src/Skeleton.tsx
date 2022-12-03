import { resolvePixelPercent as fixUnit } from '@no-ui/utils';
import { CSSProperties } from 'react';

import styles from './Skeleton.module.scss';

export type AnimateType = 'flicker' | 'wave' | 'none';
export interface SkeletonProps {
  /**
   * Skeleton `width`.
   * @default
   * 100%
   */
  width?: number | string;
  /**
   * Skeleton height.
   * @default
   * 100%
   */
  height?: number | string;
  /**
   * Skeleton box radius.
   * @default
   * 2
   */
  radius?: number;
  /**
   * Skeleton animation type.
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
   * Skeleton's style.
   */
  extraStyle?: CSSProperties;
}

export function Skeleton({
  width = '100%',
  height = '100%',
  radius = 2,
  animate = 'flicker',
  duration = 2,
  color = 'rgba(0,0,0,0.08)',
  waveColor = 'rgba(0,0,0,0.1)',
  inline,
  extraStyle,
}: SkeletonProps) {
  const baseStyle: CSSProperties = {
    width: fixUnit(width),
    height: fixUnit(height),
    borderRadius: fixUnit(radius),
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
      {
        animate === 'wave' && (
          <span
            style={{
              background: `linear-gradient(90deg, transparent, ${waveColor}, transparent)`,
              animationDuration: `${duration}s`,
            }}
          ></span>
        ) //
      }
    </div>
  );
}

Skeleton.version = __VERSION__;
Skeleton.displayName = 'skeleton';
