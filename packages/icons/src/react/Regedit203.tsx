import React from 'react';
import type { SVGProps } from "react";

const Regedit203_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 1h5M1 2h1m5 0h1M0 3h1m7 0h6M0 4h1m12 0h1M0 5h1m12 0h1M0 6h1m12 0h1M0 7h1m12 0h1M0 8h1m12 0h1M0 9h1m12 0h1M0 10h1m12 0h1M0 11h1m12 0h1M0 12h14" /><path stroke="silver" d="M2 2h1m1 0h1m1 0h1M1 3h1m1 0h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#ff0" d="M3 2h1m1 0h1M2 3h1m1 0h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1M2 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M1 4h12M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M14 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 13h14" /></svg>;

export const regedit203Data = {
  '16x16_4': Regedit203_16x16_4
};

export interface Regedit203Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Regedit203: React.FC<Regedit203Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = regedit203Data[variant];

  return <Svg {...rest} />;
};
