BarChart = React.createClass({
  componentDidMount() {
    var el = this.getDOMNode();
    var svg = d3.select(el)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

    this.updateChart(this.props);
  },

  componentWillUpdate(nextProps) {
    this.updateChart(nextProps);
  },

  getDefaultProps() {
    return {
      width: 640,
      height: 480
    };
  },

  updateChart(props) {
    var data = props.data;
    var max = _.max(_.pluck(data, "totalWorkload"));

    // set scale
    var yScale = d3.scale.linear()
               .domain([0, max])
               .range([0, props.height - 35]);
    var xScale = d3.scale.ordinal()
               .domain(d3.range(data.length))
               .rangeRoundBands([0, props.width], 0.05);


    var svg = d3.select("svg");
    var bars = svg.selectAll("rect").data(data);
    bars.enter()
        .append("rect")
        .attr("fill", "blue");

    bars.transition()
        .duration(1000)
        .attr("x", function(d, i) {
          return xScale(i);
        })
        .attr("y", function(d, i) {
          return props.height - yScale(d.totalWorkload) - 20;
        })
        .attr("width", xScale.rangeBand())
        .attr("height", function(d, i) {
          return yScale(d.totalWorkload);
        });

    bars.exit()
        .remove();

    var workLoadLabel = svg.selectAll(".workLoadLabel").data(data);
    workLoadLabel.enter()
        .append("text")
        .attr("class", "workLoadLabel")
        .style("font-weight", "bold")
        .attr("text-anchor", "middle");

    workLoadLabel.transition()
        .duration(1000)
        .attr("x", function(d, i) {
          return xScale(i) + xScale.rangeBand()/2;
        })
        .attr("y", function(d, i) {
          return props.height - yScale(d.totalWorkload) - 25;
        })
        .text(function(d, i) {
          return d.totalWorkload;
        });


    var weightLabel = svg.selectAll(".weightLabel").data(data);
    weightLabel.enter()
        .append("text")
        .attr("class", "weightLabel")
        .attr("fill", "#aaa")
        .style("font-weight", "bold")
        .attr("text-anchor", "middle");

    weightLabel.transition()
        .duration(1000)
        .attr("x", function(d, i) {
          return xScale(i) + xScale.rangeBand()/2;
        })
        .attr("y", function(d, i) {
          return props.height - yScale(d.totalWorkload);
        })
        .text(function(d, i) {
          return d.weight;
        });

    var repLabel = svg.selectAll(".repLabel").data(data);
    repLabel.enter()
        .append("text")
        .attr("class", "repLabel")
        .attr("fill", "#fff")
        .style("font-weight", "bold")
        .attr("text-anchor", "middle");

        repLabel.transition()
        .duration(1000)
        .attr("x", function(d, i) {
          return xScale(i) + xScale.rangeBand()/2;
        })
        .attr("y", function(d, i) {
          return props.height - yScale(d.totalWorkload) + 25;
        })
        .text(function(d, i) {
          return d.numReps;
        });

    var xLabel = svg.selectAll(".xLabel").data(data);
    xLabel.enter()
        .append("text")
        .attr("class", "xLabel");

    xLabel.text(function(d, i) {
          return d.date;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
          return xScale(i) + xScale.rangeBand()/2;
        })
        .attr("y", function(d, i) {
          return props.height - 5;
        });
  },

  render() {
    return (
      <div className="chart"></div>
    );
  }
});
