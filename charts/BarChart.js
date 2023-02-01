import "../index.scss";

import * as d3 from "d3";
console.log(d3);

// import data from "../data.json";

// const select = document.querySelector("#years");

// let datos;

// select.addEventListener("change", () => {
//     if (select.value == "2020") {
//         datos = data.twenty;
//     }
//     if (select.value == "2021") {
//         datos = data.twentyOne;
//     }

//     barChart(datos);
// });

// function barChart(data) {
//     const names = data.map((a) => a.name);
//     const percents = data.map((a) => a.percent);
//     const colors = data.map((a) => a.color);

//     const svg = d3.select("#bar-graph");
//     const margin = 200;
//     const width = svg.attr("width") - margin;
//     const height = svg.attr("height") - margin;

//     const xScale = d3.scaleBand().range([0, width]).padding(0.7);
//     const yScale = d3.scaleLinear().range([height, 0]);

//     const g = svg.append("g").attr("transform", "translate(" + 200 + "," + 100 + ")");

//     xScale.domain(
//         data.map(function (d) {
//             return d.name;
//         })
//     );
//     yScale.domain([
//         0,
//         d3.max(data, function (d) {
//             return d.percent;
//         }),
//     ]);

//     // Eje X
//     g.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(xScale))
//         .append("text")
//         .attr("y", height - 250)
//         .attr("x", width - 100)
//         .attr("text-anchor", "end")
//         .attr("stroke", "black");

//     // Eje Y
//     g.append("g")
//         .call(
//             d3
//                 .axisLeft(yScale)
//                 .tickFormat(function (d) {
//                     return d;
//                 })
//                 .ticks(5)
//         )
//         .append("text")
//         .attr("y", height / 2)
//         .attr("x", -50)
//         .attr("text-anchor", "end")
//         .attr("stroke", "black")
//         .text("Defects / 1000 cars");

//     g.selectAll(".bar")
//         .data(data)
//         .enter()
//         .append("rect")
//         .attr("class", "bar")
//         .attr("x", function (d) {
//             return xScale(d.name);
//         })
//         .attr("fill", "#FF0000")

//         .attr("y", function (d) {
//             return yScale(d.percent);
//         })
//         .attr("width", xScale.bandwidth())
//         .attr("height", function (d) {
//             return height - yScale(d.percent);
//         });
// }
