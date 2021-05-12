const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Homepage will display the Day and bring back anything inside exercises Array
// Virtual Setter allows all totals to append to homepage after additions to workout
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises:{
      type: Array,
      default: []
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  } 
);


// Virtual Setter

// Brings back all TOTAL for Resistance and/or Cardio
// Reduce = combines each element into a single value
// exercise.duration = duration user put into the form
// 1 means there's a SMALL delay with response after hitting Complete Workout and being -
// redirected to HomePage
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(function (total, exercise) {
      return total + exercise.duration;
    }, 1);
});

const Workout = mongoose.model("Workout", workoutSchema);

// Export
module.exports = Workout;