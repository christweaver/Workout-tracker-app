import mongoose, { Schema } from "mongoose";

let workoutScheme = new Schema(
  {
    name: String,
    reps: Number,
    weight: Number,
    sets: Number,
    username: String,
  },
  {
    timestamps: true,
  }
);
const Workouts =
  mongoose.models.Workouts || mongoose.model("Workouts", workoutScheme);

export default Workouts;
