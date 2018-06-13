import * as d3 from "d3";
import d3Tip from 'd3-tip';
d3.tip = d3Tip;

import moment from 'moment';

var d3Graph = {};


d3Graph._findYatX = (x, path) => {
	var beginning = x;
	var pathLength = path.getTotalLength();
	var end = pathLength;
	var target;
	var pos = {y:0}
	while (true) {
		target = Math.floor((beginning + end) / 2);
		pos = path.getPointAtLength(target);

		if ((target === end || target === beginning) && pos.x !== x) {
			break;
		}
		if (pos.x > x)  {
			end = target;
		} else if (pos.x < x) {
			beginning = target;
		} else {
			break; //position found
		}
	}
	return pos;
}

d3Graph._linearScale = (range, data, key, domain) => {

	var domain = domain || d3.extent(data, function (d) {
		return d[key];
	});

	return d3.scaleLinear()
 		.range(range)
 		.domain(domain)
}

d3Graph._timeScale = (range, data, key, domain) => {

	var domain = domain || d3.extent(data, function (d) {
		return d[key];
	});

	return d3.scaleTime()
		.range(range)
 		.domain(domain)
}

d3Graph._min = (data, key) => {
	//get the minimum value in the data set
	return d3.min(data, function(d) {
			return d[key];
	})
}

d3Graph._max = (data, key) => {
	return d3.max(data, function(d) {
			return d[key];
	})
}

d3Graph.barGraph = (props, state) => {
	var svg = d3Graph.svg;
	var el = d3Graph.el;
	var data = state.data;

	var barWidth= (props.width / data.length) - (props.barPadding * data.length);
	var barPadding =   props.barPadding;

	var margin = {
		top : 0,
		left: (barWidth + barPadding) /2,
		right : (barWidth + barPadding) /2,
		bottom: 0
	}

	var width = props.width - margin.left - margin.right;
	var height = props.height - margin.top - margin.bottom;

	if(state.x === 'date') {
		var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");
		data.forEach(function(d, i) {
			d.date = parseDate(d.date);
		});
	}

	var xScale, yScale, xAxis;

	if(state.x === 'date') {
		xScale = d3Graph._timeScale([0, width], data, state.x);

		var minDate = d3.min(data, function(d) { return d.date; });
		var maxDate = d3.max(data, function(d) { return d.date; });
		var midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);


	 	var yScale = d3.scaleLinear()
	 		.range([height, 0])
 			.domain([0, d3Graph._max(data, 'value')]);

		xAxis = d3.axisBottom(xScale)
							.tickPadding(10)
							.tickSize(0)
							.tickValues([minDate, midDate, maxDate])
							.tickFormat( function (d) {
								return moment(d).fromNow(true);
							})

	} else if (state.x === 'percentage'){
		xScale = d3Graph._linearScale([0, width], data, state.x);

		yScale = d3.scaleLinear()
 			.range([height, 0])
 			.domain([0,1])

		xAxis = d3.axisBottom(xScale)
							.tickPadding(10)
							.tickSize(0)
							.tickValues([0.25, 0.5, 0.75, 1])
							.tickFormat( function (d) {
								return d * 100 + '%';
							})


	}

  var chart = svg.append("g")
     .attr('class', 'chart')
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  chart.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

	function rectangle(x, y, width, height, radius){
		return "M" + (x + radius) + "," + y + "h" + (width - 2*radius) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + "v" + (height - 2*radius) + "v" + radius + "h" + -radius + "h" + (2*radius - width) + "h" + -radius + "v" + -radius + "v" + (2*radius - height) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + -radius + "z";
	};

	//bar
	var bar = chart.selectAll()
		.data(data)
		.enter()
		.append("path")

		.attr("d", function (d,i) {
				var x = xScale(d[state.x]) - (barWidth/2)
				var y = yScale(d.value)
				var rWidth = barWidth
				var rHeight = height - yScale( d.value )
				var radius = 3;
				//return rectangle(x, 0, rWidth, height, 5)
				return rectangle(x, y, rWidth, rHeight, radius)
			}
		)
		.attr('fill', function ( d, i ) {
			return props.fillColors[i] || 'black';
		})

		var text = chart.selectAll()
		.data(data)
		.enter()
		.append('text')
		 .attr("class", "label")
		 .attr('x', function (d) {
				return  xScale(d[state.x]);
		 })
     .attr("y", function (d) {
				return  yScale(d.value) + ( (height - yScale( d.value )) / 2 )
     })
		.attr("dy", ".35em")
    .attr("text-anchor", "middle")
		.text(function(d) {
			if(state.x === 'percentage' ) {
				return (d.value * 100) + '%';
			} else {
				return d.value;
			}

		});
}

d3Graph.lineGraph = (props, state) => {
	var svg = d3Graph.svg;
	var el = d3Graph.el;
	var data = state.data;

	// set the dimensions and margins of the graph
	var margin = props.margin;
	var width = props.width;// - props.margin.left - props.margin.right;
	var height = props.height;// - props.margin.top - props.margin.bottom;

	// parse the date / time
	var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");

	var bisectDate = d3.bisector( (d) => { return d.date; }).left;

	data.forEach(function(d, i) {
		d.date = parseDate(d.date);
	});

	var minDate = d3.min(data, function(d) { return d.date; });
	var maxDate = d3.max(data, function(d) { return d.date; });
	var midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);


	var xScale = d3.scaleTime()
								 .range( [0, props.width] )
								 .domain( [minDate, maxDate] )

	var yScale = d3.scaleLinear()
								 .range( [props.height, 0] )
								 .domain( [0, 200] )

	var xAxisScale = d3.scaleTime()
								 .range( [50, props.width-50] )
								 .domain( [minDate, maxDate] )


	var xAxis = d3.axisBottom(xAxisScale)
								.tickPadding(10)
								.tickSize(0)
								.tickValues([minDate, midDate, maxDate])
								.tickFormat( function (d) {
									return moment(d).fromNow(true);
								})

  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

	var area = d3.area()
		.x(function(d) { return xScale(d.date); })
		.y0(props.height)
		.y1(function(d) { return yScale(d.value); })
		.curve(d3.curveCardinal);

	var line = d3.line()
		.x( (d) => { return xScale(d.date); })
		.y( (d) => { return yScale(d.value); })
		.curve(d3.curveCardinal);

	var clipPath =
	svg.append("defs").append("clipPath")
    .attr("id", "clip")
  	.append("rect")
    .attr("width", width)
    .attr("height", height);

	var path =
	svg.append('path')
		.attr('d',line(data))
		.attr("stroke", props.strokeColor)
		.attr("fill", "none")
		.attr("stroke-width", 2)
		.attr("clip-path", "url(#clip)")

	// ADD Clip Path to the SVG
	var areaPath =
	svg.append("path")
		.attr("d", area(data))
		.attr("fill", props.fillColor)
		.attr('fill-opacity', 0.3)
		.attr("class", "area")
		.attr("clip-path", "url(#clip)");

	var tip = d3.tip()
	  .attr('class', 'd3-tip')
	  .offset([-16, 0])
	  .html( (d) => {
	    return "<span>" + d + "</span>";
	  })

  svg.call(tip);

	var focus =
	svg.append("g")
		.attr("class", "focus")

	var circle =
	focus.append("circle")
		.attr('class', 'circle')
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", 8)
		.attr("fill", props.fillColor)
		.attr("stroke", props.backgroundColor)
		.attr("stroke-width", 2)
		.attr('opacity', 0)

	var pathEl = path.node();

	d3.select(el)
	.on("mouseenter", () => {
		tip.show(" ", focus.node());
		circle.attr('opacity', 1);
	})
	.on("mouseout", () => {
		tip.hide();
		circle.attr('opacity', 0);
	})
	.on("mousemove", () => {
		var mouseX = d3.mouse(el)[0];
		var graphX = xScale.invert(mouseX);

		var i = bisectDate(data, graphX, 1);
		var d = graphX - data[i - 1].date > data[i].date - graphX ? data[i] : data[i - 1];
		var pos = d3Graph._findYatX(mouseX, pathEl);


		focus.attr('transform',`translate(${pos.x},${pos.y})`)
		tip.show(d.value, focus.node());
		circle.attr('opacity', 1);
	})
}

d3Graph.pieGraph = () => {}

d3Graph.update = (el, props, state) => {
	console.log('TODO: update graph data');
};


d3Graph.draw = (el, props, state) => {

	d3Graph.data = state.data;
	d3Graph.el = el;

	d3.select(el).select("svg").remove();

	d3Graph.svg = d3.select(el)
									.append("svg")
									.attr("width", props.width)
									.attr("height", props.height);

	d3Graph.svg.append("rect")
						 .attr("width", "100%")
					   .attr("height", "100%")
					   .attr("fill", "#FFFFFF");

	// ====================
	// GRAPH CREATE HERE
	// ====================
	if(state.type === "line") {
		d3Graph.lineGraph(props, state);
	}

	if(state.type === "bar") {
		d3Graph.barGraph(props, state);
	}

	if(state.type === "pie") {
		d3Graph.pieGraph(props, state);
	}

};


export default d3Graph;
