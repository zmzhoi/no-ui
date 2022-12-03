import { CSSProperties, useState } from 'react';

import styles from './CloseButton.module.scss';
import SIZES, { SIZE } from './sizes';
import { Large, Medium, Small } from './svg';

export interface CloseButtonProps {
  /**
   * CloseButton `size`. always width and height are same.
   */
  size: SIZE;
  /**
   * CloseButton `color`.
   * @default
   * #26292c
   */
  color?: CSSProperties['color'];
  /**
   * CloseButton `border-radius`.
   * @default
   * 2
   */
  radius?: number;
  /**
   * CloseButton animate.
   * @default
   * false
   */
  animate?: boolean;
}
export function CloseButton({
  size,
  color = '#26292c',
  radius = 2,
  animate = false, //
}: CloseButtonProps) {
  const [className, setClassName] = useState<'in' | 'out' | null>(null);

  const baseStyle: CSSProperties = {
    width: SIZES[size],
    height: SIZES[size],
    borderRadius: `${radius}px`,
  };

  const classNames = [styles['noui-close-button'], animate && className ? styles[className] : null]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      style={baseStyle} //
      onMouseEnter={() => setClassName('in')}
      onMouseLeave={() => setClassName('out')}
    >
      {
        size === 'lg' ? (
          <Large fill={color} />
        ) : size === 'md' ? (
          <Medium fill={color} />
        ) : (
          <Small fill={color} />
        ) //
      }
    </button>
  );
}

CloseButton.version = __VERSION__;
CloseButton.displayName = 'close-button';
