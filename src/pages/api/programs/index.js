import connectToDb from "@/db/mongodb";
import Program from "@/models/programSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();

  const time = {
    maxTimeMS: 60000,
  };

  let options = await Program.find({}, null, time);

  return NextResponse.json({ options });
}
