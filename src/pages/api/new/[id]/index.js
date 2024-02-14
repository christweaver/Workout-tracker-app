import Workout from "../../../../models/schema";
import connectToDb from "../../../../db/mongodb";

export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) res.status(400).json({ error: "Bad Request" });

  await connectToDb();

  // Switch case for GET, PATCH, DELETE with id from query matching id in database
  switch (req.method) {
    case "GET":
      try {
        let list = await Workout.findOne({ _id: id });
        if (!list) {
          return res.status(404).json({ error: "Not found" });
        } else {
          return res.status(200).json({ list });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

    case "PATCH":
      try {
        const {
          newName: name,
          newReps: reps,
          newWeight: weight,
          newSets: sets,
        } = req.body;
        await Workout.findByIdAndUpdate(id, { name, reps, weight, sets });
        return res.status(200).json({ message: "Topic updated" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

    case "DELETE":
      try {
        await Workout.findByIdAndDelete(id);
        return res.status(200).json({ message: "Deleted" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
