export function debounce(cb: (...args: any[]) => void, delay = 300) {
  let timer: NodeJS.Timeout | string | number | undefined;
  return (...args: []) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}
