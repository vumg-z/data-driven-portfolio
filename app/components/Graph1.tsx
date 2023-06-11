'use client'

import * as React from "react";
import { select } from "d3";

function drawChart(graphRef: React.RefObject<HTMLDivElement>) {
  const data = [12, 5, 6, 6, 9, 10];
  const h = 120;
  const w = 250;
  const graphContainer = select(graphRef.current);

  graphContainer
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-top", 100)
    .style("margin-left", 50)
    .style("margin-bottom", 100)
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d, i) => h - 10 * d)
    .attr("width", 20)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "white");
}

const Counter = () => {
  const graphRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    drawChart(graphRef);
  }, []);

  return (
    <div>
      <div ref={graphRef}></div>
    </div>
  );
};

export default Counter;
