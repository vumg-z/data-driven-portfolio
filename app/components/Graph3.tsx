'use client'

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Versor from "./Versor";
import Land from "../../public/land.json";

const width = 200, height = 200;
const sphere = { type: "Sphere" };
const land = Land;

function Map() {
    const canvasRef = useRef(null);

    useEffect(() => {
        fetch('/countries.json')
            .then(response => response.json())
            .then(countries => {
                const canvas = canvasRef.current;
                // @ts-ignore
                const context = canvas.getContext("2d");
                // @ts-ignore
                const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, height - 10]], sphere);
                const path = d3.geoPath(projection, context);

                async function renderMap() {
                    let p1, p2 = [0, 0], r1, r2 = [0, 0, 0];
                    const tilt = 20;
                    for (const country of countries) {
                        context.clearRect(0, 0, width, height);
                        context.beginPath(), path(country), context.fillStyle = "#f00", context.fill();
                        // @ts-ignore
                        context.beginPath(), path(sphere), context.strokeStyle = "#fff", context.lineWidth = 1.5, context.stroke();
                        // @ts-ignore
                        context.beginPath(), path(land), context.fillStyle = "#ccc", context.fill();


                        p1 = p2, p2 = d3.geoCentroid(country);
                        r1 = r2, r2 = [-p2[0], tilt - p2[1], 0];
                        // @ts-ignore
                        const ip = d3.geoInterpolate(p1, p2);
                        const iv = Versor.interpolateAngles(r1, r2);

                        await d3.transition()
                            .duration(1250)
                            .tween("render", () => t => {
                                // @ts-ignore
                                projection.rotate(iv(t));
                                context.clearRect(0, 0, width, height);
                                context.beginPath(), path(country), context.fillStyle = "#fff", context.fill();
                                // @ts-ignore
                                context.beginPath(), path(sphere), context.strokeStyle = "#fff", context.lineWidth = 1.5, context.stroke();
                                // @ts-ignore
                                context.beginPath(), path(land), context.fillStyle = "#ccc", context.fill();
                            })
                            .transition()
                            .tween("render", () => t => {
                                context.clearRect(0, 0, width, height);
                                context.beginPath(), path(country), context.fillStyle = "#fff", context.fill();
                                // @ts-ignore
                                context.beginPath(), path(sphere), context.strokeStyle = "#fff", context.lineWidth = 1.5, context.stroke();
                                // @ts-ignore
                                context.beginPath(), path(land), context.fillStyle = "#ccc", context.fill();

                            })
                            .end();
                    }
                }

                renderMap();
            });
    }, []);

    return (
        <div style={{ marginBottom: 20, marginTop: 100, marginLeft: 60}}>
            <canvas ref={canvasRef} width={width} height={height} />
        </div>
    );
}

export default Map;
