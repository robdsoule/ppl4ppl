FlowRouter.route('/', {
  action(params) {
    React.render(<App />, document.body);
  }
});

FlowRouter.route('/exercises/:exerciseName', {
  action(params) {
    React.render(<App exerciseName={params.exerciseName} />, document.body);
  }
});
