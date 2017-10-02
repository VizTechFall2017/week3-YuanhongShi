var svg = d3.select('svg');

/* Your code goes here */

d3.csv('./data.csv', function(dataIn){


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
        });
});