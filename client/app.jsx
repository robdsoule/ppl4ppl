App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      reps: Exercises.find({}).fetch()
    };
  },

  mapData: function() {
    var data = [
      { totalWorkload: 0, xLabel: 0},
      { totalWorkload: 0, xLabel: 1},
      { totalWorkload: 0, xLabel: 2}
    ];

    this.data.reps.map(function(d, i) {
      console.log('D', d);
      console.log('I', i);
      data[i] = {
        totalWorkload: d.totalWorkload,
        numReps: d.numReps,
        weight: d.weight
      };
    });

    return data;
  },

  render: function() {
    return (
      <div>
        <div className="page-header">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <RepForm />
              <RepList data={ this.data.reps } />
            </div>
            <div className="col-md-offset-2 col-md-6">
              <BarChart data={ this.mapData() } width="480" height="320" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
// 30-7
// 210, 360
// 360/7 = 
