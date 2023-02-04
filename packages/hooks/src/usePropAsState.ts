import { useState } from 'react';

export function usePropAsState<T>(prop: T) {
  const [state, setState] = useState<T>(prop);

  if (prop !== state) {
    setState(prop);
  }

  return state;
}
