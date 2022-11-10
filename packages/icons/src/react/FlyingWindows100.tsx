import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FlyingWindows100_32x32_4 from '../../png/FlyingWindows100_32x32_4.png';
import FlyingWindows100_16x16_4 from '../../png/FlyingWindows100_16x16_4.png';

export const flyingWindows100Data = {
  '32x32_4': {
    imageSrc: FlyingWindows100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FlyingWindows100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FlyingWindows100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FlyingWindows100: React.FC<FlyingWindows100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = flyingWindows100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
