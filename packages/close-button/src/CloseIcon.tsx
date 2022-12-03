import { CSSProperties } from 'react';

import { SIZE } from './sizes';
import { Large, Medium, Small } from './svg';

export interface CloseIconProps {
  /**
   * CloseIcon `size`. always width and height are same.
   */
  size: SIZE;
  /**
   * CloseButton `color`.
   * @default
   * #E2E8F0
   */
  color?: CSSProperties['color'];
}
export function CloseIcon({
  size,
  color = '#E2E8F0', //
}: CloseIconProps) {
  return size === 'lg' ? (
    <Large fill={color} />
  ) : size === 'md' ? (
    <Medium fill={color} />
  ) : (
    <Small fill={color} />
  ); //
}

CloseIcon.version = __VERSION__;
CloseIcon.displayName = 'close-icon';
