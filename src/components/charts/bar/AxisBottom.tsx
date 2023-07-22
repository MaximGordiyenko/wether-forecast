import { RefObject } from "react";

interface AxisBottomProps {
  transform: string;
  xRef: RefObject<SVGGElement>;
}

export const AxisBottom = ({xRef, transform}: AxisBottomProps) => {
  
  return <g ref={xRef} transform={transform}/>;
};
