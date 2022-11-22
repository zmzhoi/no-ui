import { useOutsideClick } from '@no-ui/hooks';
import { useLayoutEffect, useState, ReactNode, CSSProperties, forwardRef, RefObject } from 'react';

import { Position } from './Popper';
import { getPositionStyle } from './utils';
import styles from './index.module.scss';

interface PositionerProps {
  popoverRef: RefObject<HTMLElement>;
  position: Position;
  margin: number;
  bubble: boolean;
  disableOutsideClick: boolean;
  onClose: () => void;
  Arrow?: JSX.Element;
  children: ReactNode;
}

const Positioner = forwardRef<HTMLDivElement, PositionerProps>(
  (
    {
      popoverRef,
      position,
      margin,
      bubble,
      disableOutsideClick,
      onClose,
      Arrow = undefined,
      children,
    }: PositionerProps,
    ref,
  ) => {
    const [positionStyle, setPositionStyle] = useState<CSSProperties>();

    useLayoutEffect(() => {
      if (!popoverRef.current || !ref || typeof ref === 'function' || !ref.current) {
        return;
      }

      const popoverDomRect = popoverRef.current.getBoundingClientRect();
      const positionerDomRect = ref.current.getBoundingClientRect();
      const positionStyle = getPositionStyle(position, margin, popoverDomRect, positionerDomRect);
      setPositionStyle(positionStyle);
    }, [margin, popoverRef, position, ref]);

    useOutsideClick({
      ref: [popoverRef, ref as RefObject<HTMLDivElement>],
      callback: onClose,
      disabled: disableOutsideClick,
    });

    return (
      <div
        ref={ref} //
        className={styles['no-ui__popper']}
        style={positionStyle}
        onClick={() => {
          if (bubble) {
            onClose();
          }
        }}
      >
        {children}
        {Arrow && Arrow}
      </div>
    );
  },
);
export default Positioner;
