var w = 700;
var h = 300;



var svg = d3.select("#line")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "visualization")
    .attr("xmlns", "http://www.w3.org/2000/svg");

var data = d3.range(11).map(function(){return Math.random()*10});
var x = d3.scaleLinear().domain([0, 10]).range([0, 700]);
var y = d3.scaleLinear().domain([0, 10]).range([10, 290]);

/*var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];*/

var line = svg.append('line')
    .interpolate("cardinal")
    .x(function(d,i) {return x(i);})
    .y(function(d) {return y(d);});



var path = svg.append("path")
    .attr("d", line(data))
    .attr("stroke", "steelblue")
    .attr("stroke-width", "2")
    .attr("fill", "none");

var totalLength = path.node().getTotalLength();

path
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(2000)
    .ease("linear")
    .attr("stroke-dashoffset", 0);

svg.on("click", function() {
    path
        .transition()
        .duration(2000)
        .ease("linear")
        .attr("stroke-dashoffset", totalLength);
});

