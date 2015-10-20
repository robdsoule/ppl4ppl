Meteor.publish("exercises", function() {
  return Exercises.find({ userId: this.userId });
});
