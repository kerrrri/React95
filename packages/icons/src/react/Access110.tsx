import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access110_32x32_4 from '../../png/Access110_32x32_4.png';
import Access110_16x16_4 from '../../png/Access110_16x16_4.png';

export const access110Data = {
  '32x32_4': {
    imageSrc: Access110_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Access110_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Access110Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Access110: React.FC<Access110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access110Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
