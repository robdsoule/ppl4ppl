ExerciseLink = React.createClass({
  handleClick() {
  },

  render() {
    var exerRoute = "/exercises/" + this.props.name;
    return (
      <li><a href={exerRoute}>{this.props.name}</a></li>
    );
  }
});
