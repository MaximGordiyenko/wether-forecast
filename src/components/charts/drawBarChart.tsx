import { RefObject } from "react";
import * as d3 from "d3";

export const drawBarChart = (svgRef: RefObject<SVGSVGElement>, data: any) => {
  
  const height = 400;
  const width = 600;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;

// Declare the x (horizontal position) scale.
  const x = d3.scaleBand()
    .domain(d3.groupSort(data, (d) => -d.temperature_2m_max, (d: any) => d.name)) // descending frequency
    .range([ marginLeft, width - marginRight ])
    .padding(0.6);
  
  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
    .domain([ 0, d3.max(data, (d) => d.temperature_2m_max) ])
    .range([ height - marginLeft, marginTop ]);

  const svg = d3.select(svgRef.current);
  
  svg
    .attr("width", width)
    .attr("height", height)
    .style("margin-top", 50)
    .style("margin-left", 50)
    .attr("viewBox", [ 0, 0, width, height ])
    .attr("style", "max-width: 100%; height: auto;");
  
  // Add a rect for each bar.
  svg.append("g")
    .selectAll()
    .data(data)
    .join("rect")
    .attr("x", (d: string) => x(d.name))
    .attr("y", (d) => y(d.temperature_2m_max))
    .attr("height", (d) => y(0) - y(d.temperature_2m_max))
    .attr("width", x.bandwidth())
    .attr("fill", "url(#myGradient)");
  
  // Add the x-axis and label.
  svg.append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));
  
  // Add the y-axis and label, and remove the domain line.
  svg.append("g")
    .attr("transform", `translate(${marginLeft}, 0)`)
    .call(d3.axisLeft(y).tickFormat((y) => (y * 1).toFixed(1)))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", -marginLeft)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text("Analytics"));
  
  // Add gradient
  let gradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "myGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");
  
  gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "lightgreen");
  
  gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "green");
};
