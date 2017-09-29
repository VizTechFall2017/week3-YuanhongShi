var svg = d3.select('svg');

/* Your code goes here */

//myArray = [];

/*
for (i = 0; i < 30; i++){
    var seta = 2 * Math.PI / 30 * i ;
    //console.log(seta);
    var object = {cx: 250 + 200 * Math.cos(seta), cy: 250 + 200 * Math.sin(seta), r: 10};

    myArray.push(object);
    //console.log(myArray[i].cx);
}
*/

function circle_ring(myArray, i, j, r){

    for (j = 0; j < 10; j++){
        r = 21 * j;
        for (i = 0; i < 30; i++){
            var seta = 2 * Math.PI / 30 * i ;
            //console.log(seta);
            var object = {cx: 250 + (50 + r) * Math.cos(seta), cy: 250 + (50 + r) * Math.sin(seta), r:  2 + j};

            myArray.push(object);
            //console.log(myArray[i].cx);
        }

    }

    return myArray;
}

myArray = [];
var i;
var j;
var r;

circle_ring(myArray, i, j, r);

console.log(myArray);

svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 500)
    .attr('height', 500)
    .attr('fill', 'white')
    .attr('stroke', 'pink')
    .attr('stroke-width', 3);

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        console.log(d.cx);
        return d.cx;
    })
    .attr('cy', function(d){
        return d.cy;
    })
    .attr('r', function(d){
        return d.r;
    })
    .attr('fill', 'blue');

svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 15)
    .attr('fill', 'pink');