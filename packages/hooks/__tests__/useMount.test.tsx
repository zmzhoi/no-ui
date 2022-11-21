import { renderHook } from '@testing-library/react';

import { useMount } from '../src';

describe('Hooks.tsx', () => {
  test('Should called on mount', () => {
    const callback = jest.fn();
    renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Should called twice.', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(() => useMount(callback));
    expect(callback).toHaveBeenCalledTimes(1);
    rerender();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
