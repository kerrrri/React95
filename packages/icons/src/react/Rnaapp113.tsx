import React from 'react';
import type { SVGProps } from "react";

const Rnaapp113_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 0h6M1 1h1M1 2h1M1 3h1M1 4h1M1 5h1m6 1h6M0 7h1m6 0h1M0 8h1m6 0h1M7 9h1m-1 1h1m-1 1h1m-2 2h1m7 0h1m-9 1h1m7 0h1" /><path stroke="#fff" d="M2 1h6M1 7h6m1 0h6m-7 6h7" /><path stroke="#000" d="M8 1h1M2 2h4m2 0h1M2 3h1m5 0h1M2 4h1m5 0h1M8 5h1M1 6h7m6 1h1M8 8h4m2 0h1M1 9h6m1 0h1m5 0h1m-7 1h1m5 0h1m-1 1h1m-8 1h7m1 0h1m-1 1h1m-1 1h1m-9 1h8" /><path stroke="green" d="M6 2h1M6 3h1M6 4h1m5 4h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M7 2h1M7 3h1M7 4h1M2 5h6M1 8h1m1 0h4m6 0h1m-1 1h1m-1 1h1m-6 1h6m0 1h1m-8 2h1m1 0h5" /><path stroke="navy" d="M9 2h4m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#0f0" d="M3 3h3M3 4h3M2 8h1m6 1h3m-3 1h3m-4 4h1" /></svg>;

export const rnaapp113Data = {
  '16x16_4': Rnaapp113_16x16_4
};

export interface Rnaapp113Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Rnaapp113: React.FC<Rnaapp113Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = rnaapp113Data[variant];

  return <Svg {...rest} />;
};
