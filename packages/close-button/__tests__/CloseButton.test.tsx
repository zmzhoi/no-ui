import { render } from '@testing-library/react';

import SIZES from '../src/sizes';
import { CloseButton } from '../src/CloseButton';

describe('CloseButton.tsx', () => {
  test(`CloseButton's size should be correct.`, () => {
    const { getByRole, rerender } = render(<CloseButton size="sm" />);

    expect(getByRole('button').style.width).toBe(SIZES['sm']);

    rerender(<CloseButton size="md" />);
    expect(getByRole('button').style.width).toBe(SIZES['md']);

    rerender(<CloseButton size="lg" />);
    expect(getByRole('button').style.width).toBe(SIZES['lg']);
  });
});
