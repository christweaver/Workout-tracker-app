import mongoose, { Schema } from "mongoose";

let userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
