(function() {

    var nums = [20, 34, 97, 65, 170, 135, 115]; //data

    var colours = ['#87D37C', '#F4D03F', '#36D7B7', '#F9690E', '#F64747', '#81CFE0', '#2ECC71'];

    var svg = d3.select('body').append('svg') //add container element called <svg>
        .attr('width', 5000)
        .attr('height', 350);

    var bars = svg.selectAll('rect')
        .data(nums); //creates 6 rects, each corresponding to a value in nums

    bars.enter().append('rect'); //appends the 6 <rect> tags to the dom



    var bars = d3.selectAll('rect') //sets rectangles height and width
        .attr('width', 45)
        .attr('height', 20);



    bars.attr('x', function(d, i) { //spaces out the bars based on index
        return 150 * (i + 1);
    });


    bars.attr('height', function(d, i) { //determines the height from d (the data the rect represents)
        return d * 3;
    });



    bars.attr('y', function(d, i) { //flips it
        return 350 - d;
    });

    bars.style('fill', function(d, i) { //colours each bar uniquely

        return colours[i];
    });

    bars.style('hover', function(d, i) { //colours each bar uniquely

        return colours[i];
    }).on("mouseover", function() {
        bars.style("fill-opacity", 1);
    }).on("mouseout", function() {
        bars.style("fill-opacity", 0.7); //on hover
    });



})();