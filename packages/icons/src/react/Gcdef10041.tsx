import React from 'react';
import type { SVGProps } from "react";

const Gcdef10041_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M13 6h6m-8 1h10M9 8h4m6 0h3M8 9h3m10 0h1M8 10h2m13 0h1M7 11h2m-2 1h2m-3 1h2m16 0h1M6 14h2m16 0h1M6 15h2m16 0h1M6 16h2m16 0h1M6 17h2m16 0h1M6 18h2m16 0h1M7 19h2m14 0h1M7 20h2m14 0h1M8 21h2m12 0h1m-13 1h1m10 0h1m-11 1h2m6 0h2m-8 1h6" /><path stroke="red" d="M13 8h6m-8 1h10m-11 1h13M9 11h3m2 0h5m1 0h4M9 12h2m1 0h2m1 0h3m2 0h4M8 13h3m1 0h3m1 0h1m1 0h1m1 0h4M8 14h7m1 0h3m1 0h4M8 15h6m1 0h4m1 0h4M8 16h5m1 0h5m1 0h4M8 17h4m1 0h6m1 0h3M8 18h3m1 0h7m1 0h3M9 19h2m5 0h3m1 0h2M9 20h13m-12 1h11m-10 1h9m-7 1h4" /><path stroke="silver" d="M22 8h1m-1 1h2M8 22h2m-1 1h1" /><path stroke="#fff" d="M12 11h2m5 0h1m4 0h1m-14 1h1m2 0h1m3 0h2m4 0h1m-14 1h1m3 0h1m1 0h1m1 0h1m5 0h1m-11 1h1m3 0h1m5 0h1m-12 1h1m4 0h1m5 0h1m-13 1h1m5 0h1m5 0h1m-14 1h1m6 0h1m5 0h1m-15 1h1m7 0h1m5 0h1m-15 1h5m3 0h1m4 0h1m-1 1h1m-2 1h1m-2 1h2m-14 1h1m10 0h2m-12 1h2m6 0h2m-8 1h6" /><path stroke="maroon" d="M23 17h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h1m-4 1h2" /></svg>;

export const gcdef10041Data = {
  '32x32_4': Gcdef10041_32x32_4
};

export interface Gcdef10041Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Gcdef10041: React.FC<Gcdef10041Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = gcdef10041Data[variant];

  return <Svg {...rest} />;
};
