Exercises = new Meteor.Collection("Exercises");

Meteor.methods({
  "addSet": function(numReps, weight, date, userId) {
    numReps = parseInt(numReps);
    weight = parseInt(weight);
    totalWorkload = parseInt(numReps * weight);
    created_at = Date.parse(new Date());
    userId = Meteor.user()._id;

    check(numReps, Number);
    check(weight, Number);
    check(totalWorkload, Number);
    check(date, Date);
    check(created_at, Number);
    check(userId, String);

    return Exercises.insert({ numReps: numReps, weight: weight,
                            totalWorkload: totalWorkload, date: date,
                            created_at: created_at, userId: userId });
  },

  "removeSet": function(id) {
    check(id, String);
    return Exercises.remove(id);
  }
});
