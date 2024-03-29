import connectToDb from "@/db/mongodb";
import Workout from "../../../models/schema";

export default async function handler(req, res) {
  await connectToDb();
  // Handles post and get methods
  if (req.method === "POST") {
    try {
      const { name, reps, weight, sets, username } = req.body;
      await Workout.create({ name, reps, weight, sets, username });
      return res.status(200).json({ message: "Request ok" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  if (req.method === "GET") {
    try {
      let list = await Workout.find();
      return res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
