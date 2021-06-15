import React from 'react';
import { useD3 } from '../hooks';
import * as d3 from 'd3';

export default () => {
  const ref = useD3(
    async (svg) => {
      const height = 500;
      const width = 500;
      const projection = d3.geoNaturalEarth1()
        .scale(width / 1.3 / Math.PI)
        .translate([width / 2, height / 2])

      const data = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");

      svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
          .attr("fill", "#69b3a2")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
          .style("stroke", "#fff")
          .attr("class", "Country")
          .style("opacity", 0.8)
          .on("mouseover", (d) => {
            d3.selectAll(".Country")
              .transition()
              .duration(100)
              .style("opacity", .5)
            d3.select(this)
              .transition()
              .duration(100)
              .style("opacity", 1)
              .style("stroke", "black")
          })
          .on("mouseleave", (d) => {
            d3.selectAll(".Country")
              .transition()
              .duration(200)
              .style("opacity", .8)
            d3.select(this)
              .transition()
              .duration(200)
              .style("stroke", "transparent")
          });
    }, []);
  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    />
  );
}