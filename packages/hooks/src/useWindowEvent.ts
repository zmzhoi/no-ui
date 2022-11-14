import { useEffect } from 'react';

export interface UseWindowEventProps {
  type: string;
  callback: () => void;
  capture?: boolean;
  disabled?: boolean;
}

export function useWindowEvent({
  type,
  callback,
  capture = false,
  disabled = false,
}: UseWindowEventProps) {
  useEffect(() => {
    if (disabled) {
      return;
    }

    function callbackHandler() {
      callback?.();
    }

    window.addEventListener(type, callbackHandler, capture);
    return function cleanup() {
      window.removeEventListener(type, callbackHandler, capture);
    };
  }, [callback, capture, disabled, type]);
}
