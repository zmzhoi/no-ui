import { RefObject, useEffect } from 'react';

export interface UseOutsideClickProps<T> {
  ref: RefObject<T>[] | RefObject<T>;
  callback: (event: MouseEvent) => void;
  disabled?: boolean;
}

export function useOutsideClick<T extends HTMLElement>({
  ref,
  callback,
  disabled = false,
}: UseOutsideClickProps<T>) {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const refArray: RefObject<T>[] = [];
      Array.isArray(ref) ? refArray.push(...ref) : refArray.push(ref);

      const isOutside = refArray.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
        callback(event);
      }
    };

    window.addEventListener('click', handleClick, true);

    return function cleanup() {
      window.removeEventListener('click', handleClick, true);
    };
  }, [disabled, callback, ref]);
}
