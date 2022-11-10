import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Awschd32400_32x32_4 from '../../png/Awschd32400_32x32_4.png';
import Awschd32400_16x16_4 from '../../png/Awschd32400_16x16_4.png';

export const awschd32400Data = {
  '32x32_4': {
    imageSrc: Awschd32400_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Awschd32400_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Awschd32400Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Awschd32400: React.FC<Awschd32400Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = awschd32400Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
