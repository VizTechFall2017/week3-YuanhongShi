var svg = d3.select('svg');

/* Your code goes here */
/*var arrary =["milk", "egg", "bread", "butter"];

console.log(arrary[0]);

var student = {"name": "Erica", "job": "professor", "age": 34 };

console.log(student.age);

var classRoom = [{"name": "Erica1", "job": "professor", "age": 34 },
    {"name": "Erica2", "job": "professor", "age": 34 },
    {"name": "Erica3", "job": "professor", "age": 34 }
];

console.log(classRoom);

console.log(classRoom[1]);

console.log(classRoom[1].age);*/

//Mathod1: manualy create the data

/*myCircle = {"cx": 100, "cy": 200, "r": 20, "color": 'blue'};

var myArray = [
    myCircle,
    {"cx": 40, "cy": 200, "r": 20, "color": 'blue'},
    {"cx": 60, "cy": 200, "r": 20, "color": 'blue'},
    {"cx": 80, "cy": 200, "r": 20, "color": 'blue'},
    {"cx": 100, "cy": 200, "r": 20, "color": 'blue'}
];

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
    .attr('fill', function(d){
        return d.color;
    });
*/


//Mathod2: create the data by loop or forEach

/*myArray =[{}, {}, {}, {}, {}];

for (i = 0; i < 5; i++){
    //console.log('circle' + i);
    //myArray[i].name = 'circle'+ i;
    myArray[i].cx = Math.random() * 100; //random function from the math library
    myArray[i].cy = i * 100;
    myArray[i].r = 10 + i * 10;

}

console.log(myArray);

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
    .attr('fill', function(d){
        return d.color;
    })
    .attr('fill', 'blue');

*/

/*myArray =[{}, {}, {}, {}, {}];

myArray.forEach(function (element,i){
    element.cx = i * 100;
    element.cy = i * 100;
    element.r = 25;
});

console.log(myArray);
*/


//Mathod3: create the data from a empty array

myArray = [];

for (i = 0; i < 100; i++){
    var object = {cx: 400 * Math.random(), cy: 400 * Math.random(), r: 10};
    myArray.push(object);
}

console.log(myArray);


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
    .attr('fill', function(d){
        return d.color;
    })
    .attr('fill', 'blue');

