import { queryByTestId } from '@testing-library/dom';

import { boxLoader } from '../src';

jest.useFakeTimers();

describe('boxLoader', () => {
  test('Should render correctly', () => {
    const loaderMessage = 'Loading...';
    boxLoader.show(loaderMessage);

    const loader = queryByTestId(document.body, 'noui-box-loader');

    expect(loader).toBeInTheDocument();
    boxLoader.hide();

    jest.advanceTimersByTime(500);
    expect(loader).not.toBeInTheDocument();
  });
});
