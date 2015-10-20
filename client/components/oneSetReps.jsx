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
      <li className="list-group-item singleSet" onClick={ this.handleClick }>
        {date} - {this.props.reps.numReps} Reps of {this.props.reps.weight}lbs for a total of {this.props.reps.totalWorkload}lbs
      </li>
    );
  }
});
