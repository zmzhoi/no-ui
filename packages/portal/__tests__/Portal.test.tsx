import { render } from '@testing-library/react';

import { Portal } from '../src';

describe('Portal.tsx', () => {
  test('portal should return null', () => {
    render(
      <Portal visible={false}>
        <h1 id="portal_h1">Portal Text</h1>
      </Portal>,
    );

    const child = document.body.querySelector('#portal_h1');

    expect(child).not.toBeInTheDocument();
  });

  test('container should be document.body', () => {
    render(
      <Portal visible={true}>
        <h1 id="portal_h1">Portal Text</h1>
      </Portal>,
    );

    const child = document.body.querySelector('#portal_h1');

    expect(child).toBeInTheDocument();
  });

  test('container should be work correctly', () => {
    const divElements: HTMLDivElement[] = [];

    for (let i = 0; i < 5; i++) {
      const divElement = document.createElement('div');
      divElement.id = `portal_div_${i + 1}`;
      divElements.push(divElement);
      document.body.appendChild(divElement);
    }

    render(
      <Portal visible={true} container={divElements[2]}>
        <h1 id="portal_h1">Portal Text</h1>
      </Portal>,
    );

    const portalElement = document.body.querySelector('#portal_div_3');

    expect(portalElement?.firstChild?.textContent).toBe('Portal Text');
  });
});
