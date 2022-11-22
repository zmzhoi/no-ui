import { useState, useRef, useCallback, cloneElement } from 'react';
import { useWindowEvent } from '@no-ui/hooks';
import { Portal } from '@no-ui/portal';

import Positioner from './Positioner';
import Arrow from './Arrow';

export interface ArrowShape {
  color: string;
  size?: number;
  distance?: string | number;
}

export type Position =
  | ['top', 'left']
  | ['top', 'center']
  | ['top', 'right']
  | ['right', 'top']
  | ['right', 'center']
  | ['right', 'bottom']
  | ['bottom', 'left']
  | ['bottom', 'center']
  | ['bottom', 'right']
  | ['left', 'top']
  | ['left', 'center']
  | ['left', 'bottom'];

export interface PopperProps {
  position?: Position;
  content: JSX.Element;
  margin?: number;
  bubble?: boolean;
  showOnMount?: boolean;
  disableOutsideClick?: boolean;
  arrow?: ArrowShape;
  disabled?: boolean;
  children: JSX.Element | ((show?: boolean) => JSX.Element);
}

export function Popper({
  position = ['top', 'center'],
  content,
  margin = 6,
  bubble = false,
  showOnMount = false,
  disableOutsideClick = false,
  disabled = false,
  arrow = undefined,
  children,
}: PopperProps) {
  const popoverRef = useRef<HTMLElement>(null);
  const positionerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(!!showOnMount);

  const resolvedChildren = typeof children === 'function' ? children(show) : children;

  const onClose = useCallback(() => setShow(false), []);
  const onToggle = () => setShow((show) => !show);
  const onClickChild = () => {
    resolvedChildren.props.onClick?.();

    if (disabled) {
      return;
    }

    onToggle();
  };

  // Close popper on scroll and resize
  useWindowEvent({ type: 'scroll', callback: onClose, disabled: !show });
  useWindowEvent({ type: 'resize', callback: onClose, disabled: !show });

  return (
    <>
      {
        cloneElement(resolvedChildren, {
          ref: popoverRef,
          onClick: onClickChild,
        }) //
      }
      {
        show && (
          <Portal>
            <Positioner
              ref={positionerRef}
              popoverRef={popoverRef}
              position={position}
              margin={margin}
              bubble={bubble}
              disableOutsideClick={disableOutsideClick}
              onClose={onClose}
              Arrow={arrow && <Arrow position={position} arrow={arrow} />}
            >
              {content}
            </Positioner>
          </Portal>
        ) //
      }
    </>
  );
}

Popper.version = __VERSION__;
Popper.displayName = 'popper';
