var svg = d3.select('svg');

/* Your code goes here */

d3.csv('./data_circle.csv', function(dataIn){
    //console.log(dataIn);
    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            //console.log(d.x);
            return d.x;
        })
        .attr('cy', function(d){
            return d.y;
        })
        .attr('r', function(d){
            return d.r;
        })
        .attr('fill', function(d){
            return d.fill;
            console.log(d.fill);
        })
        .attr('stroke', function(d){
            return d.stroke;
        })
        .attr('stroke-width', function(d){
            return d.strokew;
        });
});

d3.csv('./data_rect.csv', function(dataRect){
    svg.selectAll('rect')
        .data(dataRect)
        .enter()
        .append('rect')
        .attr('x',function(d){
            return d.x;
            console.log(d.x);
        })
        .attr('y',function(d){
            return d.y;
        })
        .attr('width', function(d){
            return d.width;
        })
        .attr('height', function(d){
            return d.height;
        })
        .attr('fill', function(d){
            return d.fill;
        })
        .attr('stroke', function(d){
            return d.stroke;
        })
        .attr('strokew', function(d){
            return d.strokew;
        })
        .attr('opacity', function(d){
            return d.opacity;
        });

});



d3.select('#Change_r')
    .on('click', function(){
        d3.selectAll('rect')
            .transition()
            .attr('transform', 'scale(1.2)');
    });

d3.select('#Reset_r')
    .on('click', function(){
        d3.selectAll('rect')
            .transition()
            .attr('transform', 'scale(0.85)');
    });




/*var scaleRuler = d3.scaleLinear().domain([0, 100]).range([0, 10]);
console.log(scaleRuler(95));

var scaleSizes = d3.scaleOrdinal().domain(['small', 'medium', 'large']).range([30, 50, 90]);

console.log(scaleSizes('large'));*/