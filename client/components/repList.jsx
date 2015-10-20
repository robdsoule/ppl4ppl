RepList = React.createClass({
  renderReps() {
    return this.props.data.map(function(reps) {
      return <OneSetReps reps={reps} />;
    });
  },

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"> Past Reps
            <small> click to remove </small>
          </h3>
        </div>
        <div className="panel-body">
          <ul>
            { this.renderReps() }
          </ul>
        </div>
      </div>
    );
  }
});
