import connectToDb from "@/db/mongodb";
import User from "@/models/userSchema";

export default async function handler(req, res) {
  await connectToDb();
  // Handles the post request from user signing up
  if (req.method === "POST") {
    try {
      const { password, email } = req.body;
      await User.create({ password, email });
      return res.status(200).json({ mssg: "user logged in" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
