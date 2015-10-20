App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      reps: Exercises.find({}, {
        sort: {
          date: -1,
          created_at: -1
        }
      }).fetch(),
      exercises: _.uniq(Exercises.find({}, {
        sort: {name: 1}, fields: {name: true}
      }).fetch().map((x) => x.name), true),

      user: Meteor.userId()
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
    if (!this.data.user) {
      return (
        <div className="app-container">
          <div className="page-header">
            <Header data={ this.data.exercises }/>
          </div>
          <div className="container" id="main">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title"> LOGIN
                    </h3>
                  </div>
                  <div className="panel-body">
                    <p>Login to start recording</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <div className="page-header">
            <Header data={ this.data.exercises }/>
          </div>
          <div className="container" id="main">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8">
                <RepForm data={ this.props.exerciseName } />
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
  }
});
