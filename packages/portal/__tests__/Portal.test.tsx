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

  // test('container should be document.body', () => {
  //   render(
  //     <Portal visible={true}>
  //       <h1 id="portal_h1">Portal Text</h1>
  //     </Portal>,
  //   );

  //   const child = document.body.querySelector('#portal_h1');

  //   expect(child).toBeInTheDocument();
  // });

  // test('container should be work correctly', () => {
  //   const divElements: HTMLDivElement[] = [];

  //   for (let i = 0; i < 5; i++) {
  //     const divElement = document.createElement('div');
  //     divElement.id = `portal_div_${i + 1}`;
  //     divElements.push(divElement);
  //     document.body.appendChild(divElement);
  //   }

  //   render(
  //     <Portal visible={true} container={divElements[2]}>
  //       <h1 id="portal_h1">Portal Text</h1>
  //     </Portal>,
  //   );

  //   const portalElement = document.body.querySelector('#portal_div_3');

  //   expect(portalElement?.firstChild?.textContent).toBe('Portal Text');
  // });
});
