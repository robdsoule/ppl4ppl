OneSetReps = React.createClass({
  handleClick() {
    var id = this.props.reps._id;
    Meteor.call("removeSet", id, function(err) {
      if (err) { alert(err.reason); }
    });
  },

  render() {
    var date = moment(this.props.reps.date).format("MM/DD/YY");
    return (
      <li onClick={ this.handleClick }>
        Date: {date} -- Reps: {this.props.reps.numReps} -- Weight: {this.props.reps.weight} -- WorkLoad: {this.props.reps.totalWorkload}
      </li>
    );
  }
});
