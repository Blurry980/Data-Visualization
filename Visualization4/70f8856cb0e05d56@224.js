// https://observablehq.com/@d3/mobile-patent-suits@224
import define1 from "./a33468b95d0b15b0@703.js";

export default function define(runtime, observer) {
    const main = runtime.module();
    const fileAttachments = new Map([
        ["lotr_characters.csv", new URL("./files/e0e620f19380f12ec2c4a1bc4b3089f8cb04d1093611d4a8a9201390d8c9489c",
            import.meta.url)]
    ]);
    main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
    main.variable(observer()).define(["md"], function(md) {
        return (
            md `# Lord of the Rings Characters

A view of Lord of the Rings Characters and their relationships in regards to their race and realm. Data:(https://www.kaggle.com/paultimothymooney/lord-of-the-rings-data)`
        )
    });
    main.variable(observer()).define(["swatches", "color"], function(swatches, color) {
        return (
            swatches({ color })
        )
    });
    main.variable(observer("chart")).define("chart", ["data", "d3", "width", "height", "types", "color", "location", "drag", "linkArc", "invalidation"], function(data, d3, width, height, types, color, location, drag, linkArc, invalidation) {
                const links = data.links.map(d => Object.create(d));
                const nodes = data.nodes.map(d => Object.create(d));

                const simulation = d3.forceSimulation(nodes)
                    .force("link", d3.forceLink(links).id(d => d.id))
                    .force("charge", d3.forceManyBody().strength(-400))
                    .force("x", d3.forceX())
                    .force("y", d3.forceY());

                const svg = d3.create("svg")
                    .attr("viewBox", [-width / 2, -height / 2, width, height])
                    .style("font", "12px sans-serif");

                // Per-type markers, as they don't inherit styles.
                svg.append("defs").selectAll("marker")
                    .data(types)
                    .join("marker")
                    .attr("id", d => `arrow-${d}`)
                    .attr("viewBox", "0 -5 10 10")
                    .attr("refX", 15)
                    .attr("refY", -0.5)
                    .attr("markerWidth", 6)
                    .attr("markerHeight", 6)
                    .attr("orient", "auto")
                    .append("path")
                    .attr("fill", color)
                    .attr("d", "M0,-5L10,0L0,5");

                const link = svg.append("g")
                    .attr("fill", "none")
                    .attr("stroke-width", 1.5)
                    .selectAll("path")
                    .data(links)
                    .join("path")
                    .attr("stroke", d => color(d.type))
                    .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

  const node = svg.append("g")
      .attr("fill", "currentColor")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
    .selectAll("g")
    .data(nodes)
    .join("g")
      .call(drag(simulation));

  node.append("circle")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .attr("r", 4);

  node.append("text")
      .attr("x", 8)
      .attr("y", "0.31em")
      .text(d => d.id)
    .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3);

  simulation.on("tick", () => {
    link.attr("d", linkArc);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });

  invalidation.then(() => simulation.stop());

  return svg.node();
}
);
  main.variable(observer("links")).define("links", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("lotr_characters.csv").text())
)});
  main.variable(observer("types")).define("types", ["links"], function(links){return(
Array.from(new Set(links.map(d => d.type)))
)});
  main.variable(observer("data")).define("data", ["links"], function(links){return(
{nodes: Array.from(new Set(links.flatMap(l => [l.source, l.target])), id => ({id})), links}
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("color")).define("color", ["d3","types"], function(d3,types){return(
d3.scaleOrdinal(types, d3.schemeCategory10)
)});
  main.variable(observer("linkArc")).define("linkArc", function(){return(
function linkArc(d) {
  const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
  return `
    M${d.source.x},${d.source.y}
    A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
  `;
}
)});
  main.variable(observer("drag")).define("drag", ["d3"], function(d3){return(
simulation => {
  
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  const child1 = runtime.module(define1);
  main.import("swatches", child1);
  return main;
}