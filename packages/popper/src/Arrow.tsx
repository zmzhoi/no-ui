import { CSSProperties } from 'react';

import { getArrowStyle } from './utils';
import { ArrowShape, Position } from './Popper';

interface Props {
  position: Position;
  arrow: ArrowShape;
}
function Arrow({ position, arrow }: Props) {
  const defaultStyle: CSSProperties = {
    position: 'absolute',
    display: 'inline-block',
  };

  return <span style={Object.assign({}, defaultStyle, getArrowStyle(position, arrow))} />;
}

export default Arrow;
