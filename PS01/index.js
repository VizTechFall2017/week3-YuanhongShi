var svg = d3.select('svg');

/* Your code goes here */

//myArray = [];

/*Version_01
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
    .attr('fill', '#344150');

svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 15)
    .attr('fill', 'pink');

*/

//Version_02

function circle_ring(myArray, a, i, j, r, color){

    for (j = 0; j < 10; j++){
        r = 20 * j;
        for (i = 0; i < 20; i++){
            var seta = (a + 360 / 20 * i) / 180 * Math.PI;
            var object = {cx: 250 + (50 + r) * Math.cos(seta), cy: 250 + (50 + r) * Math.sin(seta), r:  2 + j, fill: color};

            myArray.push(object);

        }

    }

    return myArray;
}

myArray1 = [];
myArray2 = [];
myArray = [];
var i;
var j;
var r;

circle_ring(myArray1, 0, i, j, r, '#F9F649');
circle_ring(myArray2, -3, i, j, r, 'black');

myArray = myArray2.concat(myArray1);

svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 500)
    .attr('height', 500)
    .attr('fill', 'white')
    .attr('stroke', '#F9F649')
    .attr('stroke-width', 8);


svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){

        return d.cx;
    })
    .attr('cy', function(d){
        return d.cy;
    })
    .attr('r', function(d){
        return d.r;
    })
    .attr('fill', function(d){
        return d.fill;
    });



svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 15)
    .attr('fill', '#F9F649');
