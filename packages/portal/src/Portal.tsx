import { setSignature } from '@no-ui/utils';
import { cloneElement, useRef, ReactElement, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  visible: boolean;
  container?: Element | DocumentFragment;
  animate?: boolean;
  children: ReactElement;
}

export function Portal({ visible, container = undefined, animate = false, children }: PortalProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!visible) {
      return;
    }

    if (!animate || !ref.current) {
      return;
    }

    ref.current.animate(
      [
        {
          opacity: 0.2,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 350,
        easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
      },
    );
  }, [animate, visible]);

  if (!visible) {
    return null;
  }

  const _container = container || window.document.body;

  return createPortal(
    cloneElement(children, {
      ref,
    }),
    _container,
  );
}

setSignature(Portal, __VERSION__);
