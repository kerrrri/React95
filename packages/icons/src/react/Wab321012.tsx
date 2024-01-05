import React from 'react';
import type { SVGProps } from "react";

const Wab321012_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M11 7h9m-9 1h1m8 0h1M11 9h1m9 0h1m-11 1h1m7 0h4m-12 1h1m1 0h1m8 0h1m-13 1h1m3 0h1m7 0h1M9 13h1m5 0h1m6 0h1M9 14h1m5 0h1m6 0h1M9 15h1m5 0h1m6 0h1m-13 1h1m3 0h1m7 0h1m-12 1h3m8 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-12 1h6m4 0h2m-2 1h1m-3 1h2" /><path stroke="#fff" d="M12 8h7m-7 1h7m1 0h1m-9 1h7m-4 1h6m-10 1h1m1 0h1m2 0h5m-11 1h1m1 0h1m4 0h4m-10 1h1m5 0h4m-11 1h1m6 0h4m-3 1h3m-2 1h2m-9 1h3m5 0h1" /><path stroke="silver" d="M19 8h1m-1 1h1m-6 2h1m6 0h1m-7 1h1m5 0h1m-8 1h1m1 0h1m4 0h1m-9 1h1m2 0h1m4 0h1m-10 1h1m1 0h1m1 0h1m4 0h1m-11 1h1m1 0h1m3 0h1m3 0h1m-7 1h1m2 0h1m2 0h1m-3 1h1m1 0h1m-10 1h4m4 0h2" /><path stroke="gray" d="M12 11h1m2 5h2m-3 1h1" /><path stroke="#0ff" d="M12 12h1m-2 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m-2 1h1m3 2h1m0 1h1m0 1h1m0 1h1" /><path stroke="#00f" d="M16 17h2m-1 1h2m-1 1h2m-1 1h2m-1 1h1" /><path stroke="navy" d="M15 18h1m0 1h1m0 1h1m0 1h1" /></svg>;
const Wab321012_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M3 2h9M3 3h1m7 0h1M3 4h1m7 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-9 1h1m7 0h1m-9 1h5m3 0h1" /><path stroke="#fff" d="M4 3h7M4 4h7M6 5h5M4 6h1m2 0h4M2 7h2m1 0h1m2 0h3M2 8h1m1 0h1m1 0h1m1 0h3M2 9h2m1 0h1m2 0h3m-7 1h1m3 0h3m-2 1h2m-7 1h3m3 0h1" /><path stroke="#000" d="M3 5h3M2 6h1m3 0h1M1 7h1m5 0h1M1 8h1m5 0h1M1 9h1m5 0h1m-6 1h1m3 0h2m-5 1h6m-2 1h3m-2 1h3m-2 1h3m-2 1h2" /><path stroke="silver" d="M3 6h1m1 0h1M4 7h1m1 0h1M3 8h1m1 0h1M4 9h1m1 0h1m-4 1h1m1 0h1" /></svg>;

export const wab321012Data = {
  '32x32_4': Wab321012_32x32_4,
  '16x16_4': Wab321012_16x16_4
};

export interface Wab321012Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wab321012: React.FC<Wab321012Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wab321012Data[variant];

  return <Svg {...rest} />;
};
