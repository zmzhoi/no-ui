import { CSSProperties } from 'react';

export function getBackgroundColor(style: CSSProperties): string {
  return (style.backgroundColor as string) || (style.background as string) || 'white';
}

export const TOOLTIP_ZINDEX = 10000;

export function debounce(cb: (...args: any[]) => void, delay = 300) {
  let timer: NodeJS.Timeout | string | number | undefined;
  return (...args: []) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}
