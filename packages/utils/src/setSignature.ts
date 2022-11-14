import { FunctionComponent } from 'react';

export function setSignature(component: FunctionComponent<any>, version: string) {
  (component as any).version = version;
}
