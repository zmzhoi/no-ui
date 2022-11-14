import { setSignature } from '@no-ui/utils';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps extends PropsWithChildren {
  visible: boolean;
  container?: Element | DocumentFragment;
}

export function Portal({ visible, container = undefined, children }: PortalProps) {
  if (!visible) {
    return null;
  }

  const _container = container || window.document.body;

  return createPortal(children, _container);
}

setSignature(Portal, __VERSION__);
