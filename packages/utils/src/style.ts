export function resolvePixelPercent(value: number | string | undefined): string {
  if (typeof value === 'number') {
    return value + 'px';
  }

  if (typeof value === 'string') {
    if (value.endsWith('px') || value.endsWith('%')) {
      return value;
    }

    return value + 'px';
  }

  return '100%';
}
