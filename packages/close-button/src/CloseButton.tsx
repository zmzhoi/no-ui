import { CSSProperties, useState, ButtonHTMLAttributes, useEffect, useRef } from 'react';

import styles from './CloseButton.module.scss';
import SIZES, { SIZE } from './sizes';
import { Large, Medium, Small } from './svg';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  animate = false,
  ...nativeProps //
}: CloseButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [className, setClassName] = useState<'in' | 'out' | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const refCurrent = ref.current;
    const onMouseEnter = () => setClassName('in');
    const onMouseLeave = () => setClassName('out');
    refCurrent.addEventListener('mouseenter', onMouseEnter);
    refCurrent.addEventListener('mouseleave', onMouseLeave);

    return function cleanup() {
      if (!refCurrent) {
        return;
      }

      refCurrent.removeEventListener('mouseenter', onMouseEnter);
      refCurrent.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const baseStyle: CSSProperties = {
    width: SIZES[size],
    height: SIZES[size],
    borderRadius: `${radius}px`,
  };

  const classNames = [
    styles['noui-close-button'],
    animate && className ? styles[className] : null,
    nativeProps.className && nativeProps.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      {...nativeProps}
      className={classNames}
      style={{ ...baseStyle, ...(nativeProps.style && { ...nativeProps.style }) }} //
    >
      {
        size === 'lg' ? (
          <Large fill={color} style={{ verticalAlign: 'middle' }} />
        ) : size === 'md' ? (
          <Medium fill={color} style={{ verticalAlign: 'middle' }} />
        ) : (
          <Small fill={color} style={{ verticalAlign: 'baseline' }} />
        ) //
      }
    </button>
  );
}

CloseButton.version = __VERSION__;
CloseButton.displayName = 'close-button';
