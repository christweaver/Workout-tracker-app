import mongoose, { Schema } from "mongoose";

let programShcema = new Schema(
  {
    name: String,
    reps: Number,
    weight: Number,
    sets: Number,
    type: String,
    compound: String,
  },
  {
    timestamps: true,
  }
);
const Program =
  mongoose.models.Program || mongoose.model("Program", programShcema);

export default Program;
