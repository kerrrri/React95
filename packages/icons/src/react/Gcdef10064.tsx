import React from 'react';
import type { SVGProps } from "react";

const Gcdef10064_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M13 6h6m-8 1h2m6 0h2M9 8h2m10 0h1M8 9h2m-2 1h1m13 0h1M7 11h1m15 0h1M7 12h1m15 0h1M6 13h1m17 0h1M6 14h1m17 0h1M6 15h1m17 0h1M6 16h1m17 0h1M6 17h1m17 0h1M6 18h1m17 0h1M7 19h1m15 0h1M7 20h1m15 0h1M8 21h1m13 0h1m-13 1h1m10 0h1m-11 1h2m6 0h2m-8 1h6" /><path stroke="#000" d="M13 7h6m-8 1h2m7 0h1M10 9h1m10 0h1M9 10h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m14 0h1M7 17h1m-1 1h1m14 0h1M8 19h1m-1 1h1m11 0h1m1 0h1M9 21h1m11 0h1m-6 1h1m1 0h1m1 0h1" /><path stroke="maroon" d="M13 8h7m-9 1h10m-11 1h12M9 11h2m2 0h4m2 0h4M9 12h1m1 0h2m1 0h2m1 0h2m1 0h3M8 13h6m1 0h1m1 0h3m1 0h3M8 14h5m1 0h6m1 0h3M8 15h4m1 0h6m1 0h4M8 16h5m1 0h4m1 0h3m1 0h1M8 17h2m1 0h3m1 0h2m1 0h6M8 18h2m1 0h2m1 0h2m1 0h5m1 0h1M9 19h2m2 0h3m5 0h2M9 20h11m1 0h1m-12 1h11m-10 1h5m1 0h1m1 0h1m-7 1h6" /><path stroke="silver" d="M22 8h1m-1 1h2m-13 2h2m4 0h2m-9 1h1m2 0h1m2 0h1m2 0h1m-6 1h1m1 0h1m3 0h1m-8 1h1m6 0h1m-9 1h1m6 0h1m-7 1h1m4 0h1m-9 1h1m3 0h1m2 0h1m-8 1h1m2 0h1m2 0h1m-6 1h2m3 0h5M8 22h2m-1 1h1" /><path stroke="#fff" d="M23 10h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h2m-14 1h1m10 0h2m-12 1h2m6 0h2m-8 1h6" /></svg>;

export const gcdef10064Data = {
  '32x32_4': Gcdef10064_32x32_4
};

export interface Gcdef10064Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef10064: React.FC<Gcdef10064Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef10064Data[variant];

  return <Svg {...rest} />;
};
