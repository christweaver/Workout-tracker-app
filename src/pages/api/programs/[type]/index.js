import connectToDb from "@/db/mongodb";
import Program from "@/models/programSchema";

export default async function handler(req, res) {
  // Pulls type from the query parameters
  const { type } = req.query;
  if (req.method === "GET") {
    try {
      await connectToDb();

      const time = {
        maxTimeMS: 60000, // Increase the timeout as needed
      };

      // Find the data based off of type
      let options = await Program.find({ type }, null, time);

      return res.status(200).json({ options });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
