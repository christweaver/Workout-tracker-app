import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function NewWorkout() {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const { data: session } = useSession();
  let router = useRouter();

  // Find the signed in account
  let username = session?.user.email;

  let handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to new API endpoint
    const res = await fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, reps, weight, sets, username }),
    });
    if (res.ok) {
      // Send to the all workouts page
      router.replace("allWorkouts");
    }
  };

  return (
    <div className="w-full min-h-screen blur-second bg-no-repeat bg-fixed bg-top bg-cover">
      <Navbar />

      <div className="bg-dimWhite rounded-xl shadow-2xl p-6 max-w-[400px] mx-auto mt-10">
        <h1 className="text-2xl font-poppins font-semibold mb-3 text-black">
          Add new workout
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Workout name"
          ></input>
          <input
            name="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of reps"
          ></input>
          <input
            name="sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of sets"
          ></input>
          <input
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            placeholder="Amount of weight"
          ></input>
          <button
            type="submit"
            className="bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 self-center"
          >
            Add to db
          </button>
        </form>
      </div>
    </div>
  );
}
