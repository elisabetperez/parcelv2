import "../index.scss";

import * as d3 from "d3";

import data from "../data.json";


const select = document.querySelector("#years");

let datos;

select.addEventListener("change", () => {
    if (select.value == "2020") {
        datos = data.twenty;
    }
    if (select.value == "2021") {
        datos = data.twentyOne;
    }

    pieChart(datos);
});

function pieChart(datos) {
    console.log(datos);

    const percents = datos.map((a) => a.percent);
    const colors = datos.map((a) => a.color);

    const svg = d3.select("#pie-chart");
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;
    const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal(colors);

    const pie = d3.pie();

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const arcs = g.selectAll("arc").data(pie(percents)).enter().append("g").attr("class", "arc");

    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc);
}
