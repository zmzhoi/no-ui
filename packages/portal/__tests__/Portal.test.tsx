import { render } from '@testing-library/react';

import { Portal } from '../src';

describe('Portal.tsx', () => {
  test('portal render correctly', () => {
    const { unmount } = render(
      <Portal>
        <h1 id="portal_h1">Portal Text</h1>
      </Portal>,
    );

    const portal = document.body.querySelector('.no-ui__portal') as Element;
    const child = portal.querySelector('#portal_h1') as Element;

    expect(portal).toBeInTheDocument();
    expect(child).toBeInTheDocument();

    unmount();

    expect(portal).not.toBeInTheDocument();
    expect(child).not.toBeInTheDocument();
    expect(document.body.querySelector('.no-ui__portal')).toBe(null);
  });
});
