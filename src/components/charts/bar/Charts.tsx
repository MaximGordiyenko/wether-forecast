import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";
import { AxisBottom } from "./AxisBottom"
import { AxisLeft } from "./AxisLeft";
import { BarChartProps } from "@/components/charts/bar/types";
import { Bars } from "@/components/charts/bar/Bars";
import { useEffect, useRef } from "react";

export const Charts = ({ data }: BarChartProps) => {
  const xRef = useRef<SVGGElement>(null);
  const yRef = useRef<SVGGElement>(null);
  const margin = { top: 10, right: 0, bottom: 20, left: 20 };
  const width = 500 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);
  
  useEffect(() => {
    if (yRef.current && xRef.current) {
      select(xRef.current).call(axisBottom(scaleX));
      select(yRef.current).call(axisLeft(scaleY));
    }
  }, [scaleX, scaleY, xRef, yRef]);
  
  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}>
        <AxisBottom xRef={xRef} transform={`translate(${margin.left}, ${height})`} />
        <AxisLeft yRef={yRef} transform={`translate(${margin.left}, ${0})`}/>
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
    </svg>
  );
}
