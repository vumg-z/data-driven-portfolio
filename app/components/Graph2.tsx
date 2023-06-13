'use client'

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const ForceDirectedGraph = () => {
  const graphRef = useRef<SVGSVGElement | null>(null);
  const [simulation, setSimulation] = useState<d3.Simulation<MyNode, undefined> | null>(null);
  const [followersMap, setFollowersMap] = useState<Record<string, string[]>>({});
  const [data, setData] = useState<{ id: string, followers: string[] }[]>([]);

  interface MyNode extends d3.SimulationNodeDatum {
    id: string;
  }

  useEffect(() => {
    // Load data from the personas.json file
    fetch("./personas.json")
      .then(response => response.json())
      .then(jsonData => setData(jsonData));
  }, []);

  useEffect(() => {
    // check if data is loaded
    if (!data) {
      return;
    }

    if (!graphRef.current) {
      return; // Return early if graphRef.current is null or undefined.
    }

    const svg = d3.select(graphRef.current);
    const width = 300;
    const height = 400;

    if (!simulation) {
      const sim = d3.forceSimulation<MyNode>()
        .alphaDecay(0.001) // Decrease this number to make the simulation slower
        .force("link", d3.forceLink<MyNode, d3.SimulationLinkDatum<MyNode>>().id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2));
      setSimulation(sim);

    } else {
      // clear previous graph
      svg.selectAll("circle").remove();
      svg.selectAll("line").remove();
      svg.selectAll("text").remove();

      // draw new graph
      const links = data.flatMap(d => d.followers.map(f => ({ source: d.id, target: f })));
      const nodes = data.map(d => ({ id: d.id, x: Math.random() * width, y: Math.random() * height }));



      const map: Record<string, string[]> = {};
      data.forEach(d => {
        map[d.id] = d.followers;
      });
      setFollowersMap(map);


      simulation.nodes(nodes);
      // @ts-ignore
      simulation.force("link").links(links);

      svg
        .style("margin-bottom", 200)
        .style("margin-top", 100)

      svg.selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke", "#ccc");

      svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style("fill", "#ccc");

      simulation.on("tick", () => {
        svg.selectAll("line")
          .attr("x1", (d: any) => d.source.x)
          .attr("y1", (d: any) => d.source.y)
          .attr("x2", (d: any) => d.target.x)
          .attr("y2", (d: any) => d.target.y);

        svg.selectAll("circle")
          .attr("cx", (d: any) => d.x)
          .attr("cy", (d: any) => d.y);
      });



      simulation.alpha(1).restart();
    }
  }, [data, simulation]);

  return (
    <svg ref={graphRef} style={{ width: "100%", height: "100%" }}></svg>
  );
}

export default ForceDirectedGraph;
