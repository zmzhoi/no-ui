import { useRef, ReactElement, useLayoutEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactElement;
}

export function Portal({ children }: PortalProps) {
  const portal = useRef<HTMLDivElement | null>(null);
  const [, forceUpdate] = useReducer(() => ({}), {});

  useLayoutEffect(() => {
    const parent = document.body;
    portal.current = document.createElement('div');
    portal.current.className = 'no-ui__portal';
    parent.appendChild(portal.current);
    forceUpdate(); // Force rerender

    // Cleanup portal.
    return function cleanup() {
      if (portal.current) {
        if (parent.contains(portal.current)) {
          parent.removeChild(portal.current);
        }
      }
    };
  }, []);

  if (!portal.current) {
    return null;
  }

  return createPortal(children, portal.current);
}

Portal.version = __VERSION__;
Portal.displayName = 'portal';
