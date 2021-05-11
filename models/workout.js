const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
    required: "Enter duration of workout"
  },
  numExercises: {
    type: Number,
    required: "Enter number of exercises"
  },
  totalWeight: {
    type: Number,
    required: "Enter weight amount for workout"
  },
  totalSets: {
    type: Number,
    required: "Enter total number of sets for workout"
  },
  totalReps: {
    type: Number,
    required: "Enter number of reps"
  },
  totalDistance: {
    type: Number,
    required: "Enter total distance"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;