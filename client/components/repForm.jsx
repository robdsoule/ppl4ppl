RepForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var numReps = React.findDOMNode(this.refs.numReps);
    var repWeight = React.findDOMNode(this.refs.repWeight);
    var repDate = React.findDOMNode(this.refs.repDate);

    Meteor.call("addSet", numReps.value, repWeight.value, moment(repDate.value).toDate(), this.props.data,
      function(err, res) {
        if (err) { alert(err.reason); }
      });

    numReps = "";
    repWeight = "";
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Squats - Rep Form</h3>
        </div>
        <div className="panel-body">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="col-lg-10">
                <input type="number" className="form-control"
                  placeholder="Number of Reps" ref="numReps"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10">
                <input type="number" className="form-control"
                  placeholder="What weight?" ref="repWeight"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10">
                <input type="date" className="form-control"
                  placeholder="Pick Date" ref="repDate"/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10">
                <button type="submit" className="btn btn-primary btn-block">Record Reps</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
