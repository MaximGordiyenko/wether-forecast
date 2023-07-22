import { RefObject } from "react";

interface AxisLeftProps {
  transform: string;
  yRef: RefObject<SVGGElement>;
}

export const AxisLeft = ({yRef, transform}: AxisLeftProps) => {
  
  return <g ref={yRef} transform={transform}/>;
};
