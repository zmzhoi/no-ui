import { render } from '@testing-library/react';

import { Overlay } from '../src/Overlay';

describe('Overlay.tsx', () => {
  test('render with default color', () => {
    const { container } = render(<Overlay />);

    const overlay = container.querySelector('div') as HTMLDivElement;

    const color = overlay.style.background;

    expect(color).toBe('rgba(240, 240, 240, 0.8)');
  });

  test('render with prop color', () => {
    const { container } = render(<Overlay color="red" />);

    const overlay = container.querySelector('div') as HTMLDivElement;

    const color = overlay.style.background;

    expect(color).toBe('red');
  });
});
