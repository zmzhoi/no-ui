import { useState, useRef, useCallback, cloneElement } from 'react';
import { useWindowEvent, usePropAsState } from '@no-ui/hooks';
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
  isOpen?: boolean;
  onClose?: () => void;
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
  isOpen = undefined,
  onClose = undefined,
  children,
}: PopperProps) {
  if (
    (isOpen !== undefined && onClose === undefined) ||
    (isOpen === undefined && onClose !== undefined)
  ) {
    throw new Error('"isOpen", "onClose" props must be provided together');
  }

  const popoverRef = useRef<HTMLElement>(null);
  const positionerRef = useRef<HTMLDivElement>(null);
  const controlledIsOpen = usePropAsState(isOpen);
  const [show, setShow] = useState(!!showOnMount);

  const resolvedChildren = typeof children === 'function' ? children(show) : children;

  const hidePopper = useCallback(() => {
    if (controlledIsOpen === undefined) {
      // uncontrolled 상태라면 로컬 상태로 업데이트
      setShow(false);
    } else {
      // controlled 상태라면 onClose 함수 호출.
      onClose?.();
    }
  }, [controlledIsOpen, onClose]);
  const onToggle = () => setShow((previous) => !previous);
  const onClickChild = () => {
    resolvedChildren.props.onClick?.();

    if (disabled) {
      return;
    }

    // controlled 상태로 사용중이라면 로컬 상태를 건들지 않는다.
    if (controlledIsOpen !== undefined) {
      return;
    }

    onToggle();
  };

  const localShow = controlledIsOpen === undefined ? !!show : !!controlledIsOpen;
  // Close popper on scroll and resize
  useWindowEvent({ type: 'scroll', callback: hidePopper, disabled: !localShow });
  useWindowEvent({ type: 'resize', callback: hidePopper, disabled: !localShow });

  return (
    <>
      {
        cloneElement(resolvedChildren, {
          ref: popoverRef,
          onClick: onClickChild,
        }) //
      }
      {
        localShow && (
          <Portal>
            <Positioner
              ref={positionerRef}
              popoverRef={popoverRef}
              position={position}
              margin={margin}
              bubble={bubble}
              disableOutsideClick={disableOutsideClick}
              onClose={hidePopper}
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
