import connectToDb from "@/db/mongodb";
import Program from "@/models/programSchema";

export default async function handler(req, res) {
  const { type } = req.query; // Extracting type from the query parameters

  if (req.method === 'GET') {
    try {
      await connectToDb();

      const time = {
        maxTimeMS: 60000, // Increase the timeout as needed
      };

      let options = await Program.find({ type }, null, time);

      return res.status(200).json({ options });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
