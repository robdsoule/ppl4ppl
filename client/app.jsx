App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      reps: Exercises.find({}, {
        sort: {
          date: -1,
          created_at: -1
        }
      }).fetch()
    };
  },

  mapData: function() {
    var data = [];

    this.data.reps.map(function(d, i) {
      data[i] = {
        totalWorkload: d.totalWorkload,
        numReps: d.numReps,
        weight: d.weight,
        date: moment(d.date).format("MM/DD")
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
            <div className="col-lg-offset-2 col-lg-8">
              <RepForm />
              <RepList data={ this.data.reps } />
            </div>
            <div className="col-lg-offset-2 col-lg-8">
              <BarChart data={ this.mapData() } width="720" height="320" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
