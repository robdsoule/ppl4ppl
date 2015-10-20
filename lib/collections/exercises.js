Exercises = new Meteor.Collection("Exercises");

Meteor.methods({
  "addSet": function(numReps, weight, date) {
    numReps = parseInt(numReps);
    weight = parseInt(weight);
    totalWorkload = parseInt(numReps * weight);

    check(numReps, Number);
    check(weight, Number);
    check(totalWorkload, Number);
    check(date, Date);


    return Exercises.insert({numReps: numReps, weight: weight, totalWorkload: totalWorkload, date: date});
  },

  "removeSet": function(id) {
    check(id, String);
    return Exercises.remove(id);
  }
});
