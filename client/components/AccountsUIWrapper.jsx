AccountsUIWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template._loginButtons,
      React.findDOMNode(this.refs.plz));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return (
      <ul ref="plz" className="nav navbar-nav navbar-right" />
    );
  }
});
