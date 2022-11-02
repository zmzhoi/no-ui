import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  visible: boolean;
  container?: Element | DocumentFragment;
  children: ReactNode;
}

export function Portal({ visible, children, container = undefined }: PortalProps) {
  if (!visible) {
    return null;
  }

  const _container = container || window.document.body;

  return createPortal(children, _container);
}
