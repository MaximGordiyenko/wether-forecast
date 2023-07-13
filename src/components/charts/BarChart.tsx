import { useEffect, useRef} from "react";
import { WeatherTableProps } from '@/types';
import { drawBarChart } from "@/components/charts/drawBarChart";

export const BarChart = ({data}: WeatherTableProps) => {
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
