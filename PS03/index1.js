var svg = d3.select('svg');


var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                    { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                   { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

var lineFunction = d3.svg.line()
                       .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                        .interpolate("linear");