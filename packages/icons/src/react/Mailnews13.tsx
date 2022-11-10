import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mailnews13_32x32_4 from '../../png/Mailnews13_32x32_4.png';
import Mailnews13_16x16_4 from '../../png/Mailnews13_16x16_4.png';

export const mailnews13Data = {
  '32x32_4': {
    imageSrc: Mailnews13_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mailnews13_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mailnews13Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mailnews13: React.FC<Mailnews13Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailnews13Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
