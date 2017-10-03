var w = 700;
var h = 300;



var svg = d3.select("#line")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "visualization")
    .attr("xmlns", "http://www.w3.org/2000/svg");

var data = d3.range(11).map(function(){return Math.random()*10});
var x = d3.scale.linear().domain([0, 10]).range([0, 700]);
var y = d3.scale.linear().domain([0, 10]).range([10, 290]);
var line = d3.svg.line()
    .interpolate("cardinal")
    .x(function(d,i) {return x(i);})
    .y(function(d) {return y(d);});

console.log(data);

var path = svg.append("path")
    .attr("d", line(data))
    .attr("stroke", "steelblue")
    .attr("stroke-width", "2")
    .attr("fill", "none");

