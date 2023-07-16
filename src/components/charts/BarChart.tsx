import { FC, useEffect, useRef } from "react";
import { IState } from '@/types';
import { drawBarChart } from "@/components/charts/drawBarChart";

export const BarChart: FC<IState> = ({data}) => {
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    drawBarChart(svg, data);
  }, [ svg, data ]);
  
  return (
    <div id="chart">
      <svg ref={svg}/>
    </div>
  );
};
