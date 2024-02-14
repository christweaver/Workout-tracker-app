"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditForm({ name, weight, sets, reps, id }) {
  // Pulls props from api/edit/id and sets values for the inputs to be updated
  let [newName, setName] = useState(name);
  let [newReps, setReps] = useState(reps);
  let [newWeight, setWeight] = useState(weight);
  let [newSets, setSets] = useState(sets);
  let router = useRouter();

  let handleSubmit = async (e) => {
    e.preventDefault();

    // Send patch request to api
    const res = await fetch(`/api/new/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      // Sends new data
      body: JSON.stringify({ newName, newReps, newWeight, newSets }),
    });
    if (res.ok) {
      console.log("yay");
    }
    // send user back to all workouts page after its been updated
    router.replace("/allWorkouts");
  };

  return (
    <div className="h-screen w-full blur-second bg-no-repeat bg-fixed bg-top bg-cover">
      <div className="pt-44 ">
        <div className="bg-dimWhite z-30 rounded-xl shadow-2xl p-6 w-[400px] mx-auto">
          <h1 className="text-2xl font-poppins font-semibold mb-3 text-red-500">
            Edit workout
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
            <input
              name="name"
              value={newName}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Workout name"
            ></input>
            <input
              name="reps"
              value={newReps}
              onChange={(e) => setReps(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Amount of reps"
            ></input>
            <input
              name="sets"
              value={newSets}
              onChange={(e) => setSets(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Amount of sets"
            ></input>
            <input
              name="weight"
              value={newWeight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Amount of weight"
            ></input>
            <button
              type="submit"
              className="bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 self-center"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
