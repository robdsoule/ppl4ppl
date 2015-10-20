Exercises = new Meteor.Collection("Exercises");

Exercises.deny({
  insert: function (userId, exercise) {
    // denies any attempt to insert into database not through called methods
    return true;
  },
  remove: function (userId, exercise) {
    // denies any attempt to delete entry in database not through called methods
    return true;
  }
});

Meteor.methods({
  "addSet": function(numReps, weight, date, name) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    name = name || "Squats";
    numReps = parseInt(numReps);
    weight = parseInt(weight);
    totalWorkload = parseInt(numReps * weight);
    created_at = Date.parse(new Date());
    userId = Meteor.user()._id;

    check(name, String);
    check(numReps, Number);
    check(weight, Number);
    check(totalWorkload, Number);
    check(date, Date);
    check(created_at, Number);
    check(userId, String);

    return Exercises.insert({ name: name, numReps: numReps, weight: weight,
                            totalWorkload: totalWorkload, date: date,
                            created_at: created_at, userId: userId });
  },

  "removeSet": function(id) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(id, String);
    return Exercises.remove(id);
  }
});
