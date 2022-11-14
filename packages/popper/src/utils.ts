// Should FIX!

import { ArrowShape, Position } from './Popper';

const _half = (value: number) => parseFloat((value / 2).toFixed(3));
const _resolvePxPercent = (value: number | string) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (typeof value === 'string') {
    if (value.includes('%') || value.includes('px')) {
      return value;
    } else {
      return '';
    }
  }
};

export const getPositionStyle = (
  position: Position,
  margin: number,
  popoverDomRect: DOMRect,
  positionerDomRect: DOMRect,
) => {
  switch (position.join('-')) {
    case 'top-center':
      return {
        top: `${popoverDomRect.top - positionerDomRect.height - margin}px`,
        left: `${
          popoverDomRect.left + _half(popoverDomRect.width) - _half(positionerDomRect.width)
        }px`,
      };
    case 'top-left':
      return {
        top: `${popoverDomRect.top - positionerDomRect.height - margin}px`,
        left: `${popoverDomRect.left}px`,
      };
    case 'top-right':
      return {
        top: `${popoverDomRect.top - positionerDomRect.height - margin}px`,
        left: `${popoverDomRect.right - positionerDomRect.width}px`,
      };
    case 'bottom-center':
      return {
        top: `${popoverDomRect.bottom + margin}px`,
        left: `${
          popoverDomRect.left + _half(popoverDomRect.width) - _half(positionerDomRect.width)
        }px`,
      };
    case 'bottom-left':
      return {
        top: `${popoverDomRect.bottom + margin}px`,
        left: `${popoverDomRect.left}px`,
      };
    case 'bottom-right':
      return {
        top: `${popoverDomRect.bottom + margin}px`,
        left: `${popoverDomRect.right - positionerDomRect.width}px`,
      };
    case 'right-top':
      return {
        top: `${popoverDomRect.top}px`,
        left: `${popoverDomRect.right + margin}px`,
      };
    case 'right-center':
      return {
        top: `${
          popoverDomRect.top + _half(popoverDomRect.height) - _half(positionerDomRect.height)
        }px`,
        left: `${popoverDomRect.right + margin}px`,
      };
    case 'right-bottom':
      return {
        top: `${popoverDomRect.bottom - positionerDomRect.height}px`,
        left: `${popoverDomRect.right + margin}px`,
      };
    case 'left-top':
      return {
        top: `${popoverDomRect.top}px`,
        left: `${popoverDomRect.left - positionerDomRect.width - margin}px`,
      };
    case 'left-center':
      return {
        top: `${
          popoverDomRect.top + _half(popoverDomRect.height) - _half(positionerDomRect.height)
        }px`,
        left: `${popoverDomRect.left - positionerDomRect.width - margin}px`,
      };
    case 'left-bottom':
      return {
        top: `${popoverDomRect.bottom - positionerDomRect.height}px`,
        left: `${popoverDomRect.left - positionerDomRect.width - margin}px`,
      };
    default:
      return {};
  }
};

export const getArrowStyle = (position: Position, arrow: ArrowShape) => {
  const { color, distance, size } = arrow;

  // const _size = size ? _resolvePxPercent(Number((size / 2).toFixed(3))) : '6px';
  const _size = size ? _resolvePxPercent(size) : '6px';
  const _distance = distance ? _resolvePxPercent(distance) : '10%';
  const _color = color || 'black';

  const arrowStyle = {
    borderStyle: 'solid',
    borderColor: _color,
    borderWidth: _size,
  };

  switch (position.join('-')) {
    case 'right-top':
      Object.assign(arrowStyle, {
        top: _distance,
        left: 0,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: 'translate3d(-100%, 0, 0)',
      });
      break;
    case 'right-center':
      Object.assign(arrowStyle, {
        top: '50%',
        left: 0,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: `translate3d(-100%, -50%, 0)`,
      });
      break;
    case 'right-bottom':
      Object.assign(arrowStyle, {
        bottom: _distance,
        left: 0,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: 'translate3d(-100%, 0, 0)',
      });
      break;
    case 'left-top':
      Object.assign(arrowStyle, {
        top: _distance,
        right: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: 'translate3d(100%, 0, 0)',
      });
      break;
    case 'left-center':
      Object.assign(arrowStyle, {
        top: '50%',
        right: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: `translate3d(100%, -50%, 0)`,
      });
      break;
    case 'left-bottom':
      Object.assign(arrowStyle, {
        bottom: _distance,
        right: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: 'translate3d(100%, 0, 0)',
      });
      break;
    case 'top-left':
      Object.assign(arrowStyle, {
        top: '100%',
        left: _distance,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
      });
      break;
    case 'top-center':
      Object.assign(arrowStyle, {
        top: '100%',
        left: '50%',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: 'translate3d(-50%, 0, 0)',
      });
      break;
    case 'top-right':
      Object.assign(arrowStyle, {
        top: '100%',
        right: _distance,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
      });
      break;
    case 'bottom-left':
      Object.assign(arrowStyle, {
        top: 0,
        left: _distance,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: 'translate3d(0, -100%, 0)',
      });
      break;
    case 'bottom-center':
      Object.assign(arrowStyle, {
        top: 0,
        left: '50%',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: 'translate3d(-50%, -100%, 0)',
      });
      break;
    case 'bottom-right':
      Object.assign(arrowStyle, {
        top: 0,
        right: _distance,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: 'translate3d(0, -100%, 0)',
      });
      break;
    default:
      break;
  }

  return arrowStyle;
};
